# FullText Search (전문검색)

"FullText Search (전문검색)"이란 문장이나 문서같은 긴 텍스트들 중에서 특정 키워드를 포함하고 있는 텍스트를 검색하는 기능을 말한다. 전문검색을 사용하지 않고 키워드를 이용한 검색 방법으로는 WHERE절의 LIKE 기능을 적용하는 법이 있는데, LIKE의 경우에는 키워드의 앞쪽에 '%'를 쓰면 인덱스를 타지 않고 전체 레코드를 조회를 해버려서 쿼리 성능이 떨어지며 키워드 기반 검색 기능으로는 적절하지 못하다.

![LIKE 조건 키워드 앞에 '%'를 붙이는 경우, 쿼리 실행계획](https://postfiles.pstatic.net/MjAyMjA3MDFfMTA5/MDAxNjU2Njg0NTExNDc5.4fKRX5V4tflnOHBY9m5bulPVRWmTz38ZxPZrANf5skcg.lmV_A0r96copg3x-uLdARiqCLEMo1tgPyxDCZ3s81m0g.PNG.blacksw1102/image.png?type=w773)



![LIKE 조건 키워드 뒤에 '%'를 붙이는 경우, 쿼리 실행계획](https://postfiles.pstatic.net/MjAyMjA3MDFfMTY0/MDAxNjU2Njg0NjAyODAw.8rfNHPmetpNqbXly81H7boOsa76MGsVKEXHi3nAZ4pQg.51WdH_mAFYbMHY9D9QmEMh_2krDhxgm8KGt24PadIwog.PNG.blacksw1102/image.png?type=w773)

그럼 전문검색은 어떻게 인덱싱을 탈 수 있는걸까? 그 답은 심플하다. 그냥 전문 검색용 인덱스를 따로 만들어두면 된다. 우선 사전에 전문검색으로 사용할 컬럼을 전문검색인덱스로 지정해둔다. 그리고 테이블에 새 데이터를 저장하면, 엔진은 컬럼의 데이터를 띄어쓰기나 구분자로 파싱해서 키워드를 추출해낸다. 그 다음 키워드들을 정렬시켜서 인덱스에 구축한다. 검색어로 레코드 탐색할 때도 마찬가지로 검색어를 띄어쓰기나 구분자로 파싱해서 키워드를 추출한 다음, 해당 키워드들을 가지고 있는 레코드를 전문검색인덱스에 있는 키워드랑 비교하면서 찾는다.

![전문검색인덱스에 등록되어 있는 키워드들](https://postfiles.pstatic.net/MjAyMjA3MDFfMjA5/MDAxNjU2Njg0MDczODg0.e8kG3Ue3V0TuGdEKztsd7TnVudodTFtx7APyzXQMiIkg.pWe9L3Vpjd1HTuwFN_VWh-d1PvpWP9uTgxrScEO6qBgg.PNG.blacksw1102/20220701_222204.png?type=w773)

전문 검색 종류는 크게 2가지가 있는데 자연어 모드(IN NATURAL LAGNAGUE MODE)와 불리언 모드(BOOLEAN MODE)가 있다. 자연어 모드는 검색어에서 키워드들을 추출하고 해당 키워드들을 포함하고 있는 레코드를 검색하는 방법이다. 이때 조회되는 레코드들은 검색 키워드들을 얼마나 많이 포함하고 있느냐에 따라서 매치스코어가 매겨진다. 불리언 모드의 경우에도 자연어 모드처럼 키워츠를 포함하는 레코드를 검색하는 방법이나. 자연어 모드와 차이점이 있다면 각 검색 키워드 앞에 3개의 연산자를 적용해서 탐색이 가능하다. ('+' : AND, '-' : 'NOT', '' : OR)

![매칭된 키워드 개수에 따라 달라지는 매치 스코어 결과](https://postfiles.pstatic.net/MjAyMjA3MDFfMjM0/MDAxNjU2Njg0MDYyNDM3.SM9mDdvQBctcern0VKJmmSpHgCJVKjuF9ZPHAfP3u1cg.6wvVmMdoIh0OHAgT3Wao0XlKMdZDjcY6i41LaeufBdog.PNG.blacksw1102/20220701_223819.png?type=w773)  