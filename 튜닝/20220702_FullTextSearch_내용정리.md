# Full-Text Search (전문검색)

## 구분점 파싱 기반 Full-Text Search

"FullText Search (전문검색)"이란 문장이나 문서같은 긴 텍스트들 중에서 특정 키워드를 포함하고 있는 텍스트를 검색하는 기능을 말한다. 전문검색을 사용하지 않고 키워드를 이용한 검색 방법으로는 WHERE절의 LIKE 기능을 적용하는 법이 있는데, LIKE의 경우에는 키워드의 앞쪽에 '%'를 쓰면 인덱스를 타지 않고 전체 레코드를 조회를 해버려서 쿼리 성능이 떨어지며 키워드 기반 검색 기능으로는 적절하지 못하다.

![LIKE 조건 키워드 앞에 '%'를 붙이는 경우, 쿼리 실행계획](https://postfiles.pstatic.net/MjAyMjA3MDFfMTA5/MDAxNjU2Njg0NTExNDc5.4fKRX5V4tflnOHBY9m5bulPVRWmTz38ZxPZrANf5skcg.lmV_A0r96copg3x-uLdARiqCLEMo1tgPyxDCZ3s81m0g.PNG.blacksw1102/image.png?type=w773)



![LIKE 조건 키워드 뒤에 '%'를 붙이는 경우, 쿼리 실행계획](https://postfiles.pstatic.net/MjAyMjA3MDFfMTY0/MDAxNjU2Njg0NjAyODAw.8rfNHPmetpNqbXly81H7boOsa76MGsVKEXHi3nAZ4pQg.51WdH_mAFYbMHY9D9QmEMh_2krDhxgm8KGt24PadIwog.PNG.blacksw1102/image.png?type=w773)

그럼 전문검색은 어떻게 인덱싱을 탈 수 있는걸까? 그 답은 심플하다. 그냥 전문 검색용 인덱스를 따로 만들어두면 된다. 우선 사전에 전문검색으로 사용할 컬럼을 전문검색인덱스로 지정해둔다. 그리고 테이블에 새 데이터를 저장하면, 엔진은 컬럼의 데이터를 띄어쓰기나 구분자로 파싱해서 키워드를 추출해낸다. 그 다음 키워드들을 정렬시켜서 인덱스에 구축한다. 검색어로 레코드 탐색할 때도 마찬가지로 검색어를 띄어쓰기나 구분자로 파싱해서 키워드를 추출한 다음, 해당 키워드들을 가지고 있는 레코드를 전문검색인덱스에 있는 키워드랑 비교하면서 찾는다.

![전문검색인덱스에 등록되어 있는 키워드들](https://postfiles.pstatic.net/MjAyMjA3MDFfMjA5/MDAxNjU2Njg0MDczODg0.e8kG3Ue3V0TuGdEKztsd7TnVudodTFtx7APyzXQMiIkg.pWe9L3Vpjd1HTuwFN_VWh-d1PvpWP9uTgxrScEO6qBgg.PNG.blacksw1102/20220701_222204.png?type=w773)

전문 검색 종류는 크게 2가지가 있는데 자연어 모드(IN NATURAL LAGNAGUE MODE)와 불리언 모드(BOOLEAN MODE)가 있다. 자연어 모드는 검색어에서 키워드들을 추출하고 해당 키워드들을 포함하고 있는 레코드를 검색하는 방법이다. 이때 조회되는 레코드들은 검색 키워드들을 얼마나 많이 포함하고 있느냐에 따라서 매치스코어가 매겨진다. 불리언 모드의 경우에도 자연어 모드처럼 키워츠를 포함하는 레코드를 검색하는 방법이나. 자연어 모드와 차이점이 있다면 각 검색 키워드 앞에 3개의 연산자를 적용해서 탐색이 가능하다. ('+' : AND, '-' : 'NOT', '' : OR)

![매칭된 키워드 개수에 따라 달라지는 매치 스코어 결과](https://postfiles.pstatic.net/MjAyMjA3MDFfMjM0/MDAxNjU2Njg0MDYyNDM3.SM9mDdvQBctcern0VKJmmSpHgCJVKjuF9ZPHAfP3u1cg.6wvVmMdoIh0OHAgT3Wao0XlKMdZDjcY6i41LaeufBdog.PNG.blacksw1102/20220701_223819.png?type=w773)  



## n-gram parser 기반 Full-Text Search

위의 Full-lText Search의 경우, 컬럼 데이터에서 인덱싱에 쓸 키워드 값을 구할 때 구분자를 기준으로 파싱해서 구한다. (구분자로 파싱하게 되면 보통 단어 단위로 키워드가 생성된다.) 근데 이 파싱법을 한글 문자열에 적용할 경우 문제점이 발생하는데.. 예시를 들어보겠다. "동해물과 백두산이"라는 문자열을 공백 문자로 파싱해서 키워드를 생성할 경우 "동해물과" 와 "백두산이"가 만들어질 것이다. 근데 만약 "동해물과 백두산이"을 검색하려 할 때, "동해" 또는 "백두산" 이라고 검색하게되면 일치하는 키워드가 없기 때문에 "동해물과 백두산이"가 검색되지 않는다. 이러한 현상이 발생하는 이유는 한글의 문법적인 특성에 있는데.. 여기서 언어적으로 더 깊게 설명하는건 주제 범위를 넘는듯 하니 생략하고, 문제 해결을 위한 결론은 키워드를 더욱 잘게 쪼개서 생성하면 된다.

이 문제 해결을 위해선 n-gram 기반 키워드를 파싱법을 Full-Text Search에 도입해 볼 수 있다. 여기서 n-gram이란 n개의 "연속적인 나열된 문자들"이란 뜻을 의미하는데, Full-Text Index용 문자열을 파싱할때 구분자 단위로 파싱하는게 아닌 문자열 맨 앞에서부터 한 문자씩 이동하면서 시작 위치서부터 n자리 만큼 파싱해서 인덱스로 관리한다. 이것만으로는 설명이 부족할 수도 있으니 적합한 예시를 아래에 작성해 두겠다. 여기서 "n자리 만큼 파싱한다"에서 n은 자릿수 값을 의미하며 이 자릿수는 MySQL의 변수 값 중 "ngram_token_size" 를 통해서 설정할 수 있다. "ngram_token_size" 기본값은 2로 되어 있는데, 즉 두 문자 단위로 파싱함을 의미한다.

ex) 문자열 = "동해물과 백두산이"
N=1 : '동', '해', '물', '과', '백', '두', '산', '이'
N=2 : '동해', '해물', '물과', '백두', '두산', '산이'
N=3 : '동해물', '해물과', '백두산', '두산이'
N=4 : '동해물과', '백두산이'

n-gram 파싱 기반 Full-Text Search에서는 와일드 카드를 쓸 수가 있다. 단 조건은 와일드 카드 이전 접두사(prefix)의 길이가 ngram_token_size 이상이 되면 와일드 카드는 무효처리 된다. 예를 들면 ngram_token_size가 2일 경우 '백*'은 접두사 길이가 1이라서 와일드 카드가 적용되지만 '백두*'는 접두사 길이가 2이상이기 때문에 와일드 카드가 생략되고 '백두'로 인식된다. 