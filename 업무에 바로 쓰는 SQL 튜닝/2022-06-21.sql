-------------------------------------------------------------
-- 묵시적 형변환이 발생하는 경우, 인덱스를 제대로 활용하지 못하고 풀스캔이 발생한다.
-- 튜닝전
SELECT COUNT(1)
  FROM 급여
 WHERE 사용여부 = 1;
 
EXPLAIN
SELECT COUNT(1)
  FROM 급여
 WHERE 사용여부 = 1;
 
SELECT 사용여부, COUNT(1)
  FROM 급여
 GROUP BY 사용여부;
 
SHOW INDEX FROM 급여;

DESC 급여;

-- 튜닝후
SELECT COUNT(1)
  FROM 급여
 WHERE 사용여부 = '1';
 
EXPLAIN
SELECT COUNT(1)
  FROM 급여
 WHERE 사용여부 = '1';
-------------------------------------------------------------
-- 열을 결합해서 WHERE 문 조건으로 쓸 경우, 인덱스가 적용되지 않는다.
-- 튜닝전
SELECT *
  FROM 사원
 WHERE CONCAT(성별, ' ', 성) = 'M Radwan';
 
EXPLAIN
SELECT *
  FROM 사원
 WHERE CONCAT(성별, ' ', 성) = 'M Radwan';
 
SELECT CONCAT(성별, ' ', 성) '성별_성', COUNT(1)
  FROM 사원
 WHERE CONCAT(성별, ' ', 성) = 'M Radwan'
 UNION ALL 
SELECT '전체 데이터', COUNT(1)
  FROM 사원;
  
SHOW INDEX FROM 사원;

-- 튜닝후
SELECT *
  FROM 사원
 WHERE 성별 = 'M'
   AND 성 = 'Radwan';
  
EXPLAIN
SELECT *
  FROM 사원
 WHERE 성별 = 'M'
   AND 성 = 'Radwan';
-------------------------------------------------------------
-- DISTINCT 키워드는 나열된 열들을 정렬한 뒤, 중복된 데이터는 삭제한다. 따라서 DISTINCT를 쿼리에 작성하는 것만으로 정렬 작업이 포함됨을 인지해야 한다.
-- 튜닝전
SELECT DISTINCT 사원.사원번호, 이름, 성, 부서번호
  FROM 사원
  JOIN 부서관리자
    ON (사원.사원번호 = 부서관리자.사원번호);

EXPLAIN
SELECT DISTINCT 사원.사원번호, 이름, 성, 부서번호
  FROM 사원
  JOIN 부서관리자
    ON (사원.사원번호 = 부서관리자.사원번호);
   
SELECT 사원.사원번호, 이름, 성, 부서번호
  FROM 사원
  JOIN 부서관리자
    ON (사원.사원번호 = 부서관리자.사원번호);
   
EXPLAIN
SELECT 사원.사원번호, 이름, 성, 부서번호
  FROM 사원
  JOIN 부서관리자
    ON (사원.사원번호 = 부서관리자.사원번호);
-- 튜닝후
-------------------------------------------------------------
-- 
-- UNION ALL은 여러 개의 SELECT문의 실행 결과를 단순히 합치는 것에 불과하나, UNION은 여러개의 SELECT문의 실행 결과를 합친 후에 중복 데이터는 제거하는 작업을 포함한다.
-- 튜닝전
SELECT 'M' AS 성별, 사원번호
  FROM 사원
 WHERE 성별 = 'M'
   AND 성 = 'Baba'
 UNION 
SELECT 'F', 사원번호
  FROM 사원
 WHERE 성별 = 'F'
   AND 성 = 'Baba';

EXPLAIN
SELECT 'M' AS 성별, 사원번호
  FROM 사원
 WHERE 성별 = 'M'
   AND 성 = 'Baba'
 UNION
SELECT 'F', 사원번호
  FROM 사원
 WHERE 성별 = 'F'
   AND 성 = 'Baba';
  
SHOW INDEX FROM 사원;
  
-- 튜닝후
SELECT 'M' AS 성별, 사원번호
  FROM 사원
 WHERE 성별 = 'M'
   AND 성 = 'Baba'
 UNION ALL
SELECT 'F', 사원번호
  FROM 사원
 WHERE 성별 = 'F'
   AND 성 = 'Baba';

EXPLAIN
SELECT 'M' AS 성별, 사원번호
  FROM 사원
 WHERE 성별 = 'M'
   AND 성 = 'Baba'
 UNION ALL
SELECT 'F', 사원번호
  FROM 사원
 WHERE 성별 = 'F'
   AND 성 = 'Baba';
-------------------------------------------------------------
-- 튜닝전
-- 그루핑 시 인덱스가 적용된 컬럼을 사용한다면 인덱스의 순서를 지켜줌으로써 커버링 인덱스 효과를 누릴 수가 있다. 
-- 커버링 인덱스: 테이블 접근 없이 인덱스만 사용하여 데이터 조회 (ex. Using index)
SELECT 성, 성별, COUNT(1) AS 카운트
  FROM 사원
 GROUP BY 성, 성별;

EXPLAIN
SELECT 성, 성별, COUNT(1) AS 카운트
  FROM 사원
 GROUP BY 성, 성별;

SHOW INDEX FROM 사원;
-- 튜닝후
SELECT 성, 성별, COUNT(1) AS 카운트
  FROM 사원
 GROUP BY 성별, 성; 

EXPLAIN
SELECT 성, 성별, COUNT(1) AS 카운트
  FROM 사원
 GROUP BY 성별, 성;
-------------------------------------------------------------
-- 예시: 엉뚱한 인덱스를 사용하는 SQL문
-- LIKE 절보다 부등호 조건절이 우선하여 인덱스를 사용하므로 데이터 접근 범위를 줄일 수 있다.
-- 테이블에 접근하지 않고, 특정 인덱스만 사용하여 최종 결과를 출력하는 행위를 "커버링 인덱스 스캔(= Extra 항목: Using index)"라고 부른다.
-- 튜닝전

SELECT 사원번호
  FROM 사원
 WHERE 입사일자 LIKE '1989%'
   AND 사원번호 > 100000;

EXPLAIN
SELECT 사원번호
  FROM 사원
 WHERE 입사일자 LIKE '1989%'
   AND 사원번호 > 100000;
  
SHOW INDEX FROM 사원;

SELECT COUNT(1) FROM 사원;

SELECT COUNT(1) FROM 사원 WHERE 입사일자 LIKE '1989%';

SELECT COUNT(1) FROM 사원 WHERE 사원번호 > 100000;
-- 입사일자 열을 데이터 엑세스 조건으로 활용
EXPLAIN
SELECT 사원번호
  FROM 사원 USE INDEX(I_입사일자)
 WHERE 입사일자 LIKE '1989%'
   AND 사원번호 > 100000;
 
DESC 사원;

-- 튜닝후 
SELECT 사원번호
  FROM 사원
 WHERE 입사일자 >= '1989-01-01' AND 입사일자 < '1990-01-01'
   AND 사원번호 > 100000;
  
EXPLAIN
SELECT 사원번호
  FROM 사원
 WHERE 입사일자 >= '1989-01-01' AND 입사일자 < '1990-01-01'
   AND 사원번호 > 100000;

-------------------------------------------------------------
-- 예시-4.2.9: 동등 조건으로 인덱스를 사용하는 SQL

-- 튜닝전
-- 출입문 B에 대한 명확한 상수환 조건으로 데이터 접근 범위를 줄였으므로 ref 항목이 const으로 출력된다.
-- 인덱스 스캔을 수행한 뒤에는 테이블에 랜덤 엑세스하는 방식이 진행된다. 다만 전체 데이터의 약 50%를 차지하는 데이터를 조회하려고 인덱스를 활용하는게 과연 효율적일지 고민해보아야 한다.

SELECT *
  FROM 사원출입기록
 WHERE 출입문 = 'B';

EXPLAIN
SELECT *
  FROM 사원출입기록
 WHERE 출입문 = 'B';

-- 튜닝후
-- 테이블 풀 스캔 방식으로 전체 데이터를 가져와서 WHERE 출입문 = 'B' 조건절로 필요한 데이터를 추출하는 방식.
-- 랜덤 엑세스가 발생하지 않고, 한 번에 다수의 페이지에 접근하는 테이블 풀 스캔 방식으로 수행된다.
SELECT *
  FROM 사원출입기록 IGNORE INDEX(I_출입문)
 WHERE 출입문 = 'B';

EXPLAIN
SELECT *
  FROM 사원출입기록 IGNORE INDEX(I_출입문)
 WHERE 출입문 = 'B';
-------------------------------------------------------------
-- 예시-4.2.10: 범위 조건으로 인덱스를 사용하는 SQL문
-- 튜닝전
-- 입사일자의 조건절로 인덱스 스캔을 수행함을 알 수 있다.
-- Using MRR을 통해 인덱스가 랜덤 액세스가 아닌 순차 스캔으로 최적화하여 처리됨을 확인할 수 있다.
-- 전체 데이터의 약 17%에 해당하는 데이터를 가져와야하는 상황에서 인덱스를 통한 랜덤 엑세스 방식이 효율적인지 아니면 인덱스없이 테이블에 바로 접근하는 방식이 효율적인지 확인이 필요하다.
SELECT 이름, 성
  FROM 사원
 WHERE 입사일자 BETWEEN STR_TO_DATE('1994-01-01', '%Y-%m-%d')
                 AND STR_TO_DATE('2000-12-31', '%Y-%m-%d');
                
EXPLAIN
SELECT 이름, 성
  FROM 사원 
 WHERE 입사일자 BETWEEN STR_TO_DATE('1994-01-01', '%Y-%m-%d')
                 AND STR_TO_DATE('2000-12-31', '%Y-%m-%d');

SELECT COUNT(1) FROM 사원;
                
-- 튜닝후
-- 인덱스 없이 테이블에 직접 접근하면 한 번에 다수의 페이지에 접근하므로 더 효율적으로 SQL 문이 수행된다.
SELECT 이름, 성
  FROM 사원
 WHERE YEAR(입사일자) BETWEEN '1994' AND '2000';

EXPLAIN
SELECT 이름, 성
  FROM 사원
 WHERE YEAR(입사일자) BETWEEN '1994' AND '2000';
-------------------------------------------------------------
-- 예시 4.3.1: 작은 테이블이 먼저 조인에 참여하는 SQL문
-- 튜닝전
-- 드라이빙 테이블과 드리븐 테이블은 중첩 루프 조인을 수행한다.
-- 크기가 작은 드라이빙 테이블에선 인덱스 풀 스캔을 진행하며, 보다 큰 드리븐 테이블에선 인덱스 스캔을 하여 랜덤 액세스를 진행하여 데이터를 탐색한다.
-- 드리븐 테이블에서 대량의 데이터에 대해서 랜덤 액세스를하면 비효율적이다.
-- 부서 테이블에서 부서.부서번호 열만 SELECT절과 WHERE절에 필요하므로 UI_부서명 인덱스로 인덱스 풀 스캔을 한다.
-- 두 개 테이블의 데이터를 결합하는 조인 알고리즘은 대부분 중첩 루프 조인으로 풀린다.
-- 상대적으로 데이터 규모가 더 큰 부서사원_매핑 테이블의 매핑.시작일자 >= '2002-03-01' 조건절을 먼저 적용할 수 있다면 비교 대상을 더 줄일 수 있다.
-- 부서사원_매핑 테이블에 대해 시작일자 열이 범위 조건으로 작성되는지 여부와 그 범위에 해당하는 데이터가 소량인지를 함께 분석해 보아야 한다.
-- 상대적으로 규모가 더 큰 부서사원_매핑 테이블을 먼저 탐색해서 WHERE 조건절을 먼저 적용할 수 있다면 조인할 때 비교 대상이 훨씬 줄어들 것이다.
SELECT 매핑.사원번호,
       부서.부서번호
  FROM 부서사원_매핑 매핑,
       부서
 WHERE 매핑.부서번호 = 부서.부서번호
   AND 매핑.시작일자 >= '2002-03-01';
  
EXPLAIN
SELECT 매핑.사원번호,
       부서.부서번호
  FROM 부서사원_매핑 매핑,
       부서
 WHERE 매핑.부서번호 = 부서.부서번호
   AND 매핑.시작일자 >= '2002-03-01';

-- 튜닝후
-- 부서사원_매핑 테이블에 JOIN 전에 WHERE 절을 걸 수있다면 필요한 데이터를 0.4% 비율로 대폭 줄일 수가 있다.
-- 부서사원_매핑 테이블에 시작일자 열 기준으로 인덱스를 생성한다면 인덱스 스캔을 통해 더 효율적으로 데이터를 조회할 수 있을 것이다.
-- 드라이빙 테이블에서의 조인 비교 건수를 줄이도록 하기 위해 STRAIGHT_JOIN 힌트를 사용해서 FROM 절에 작성된 테이블 순서대로 조인에 참여하도록 고정시킨다.
-- 먼저 데이터에 접근하는 테이블이 드라이빙 테이블이 된다. 드라이빙 테이블과 드리븐 테이블은 중첩 루프 조인으로 처리되며 드라이빙 테이블은 풀스캔으로 드리븐 테이블은 랜덤 액세스로 탐색을 진행한다.
-- 드라이빙 테이블에서 추출된 데이터 수 만큼 드리븐 테이블을 반복시킨다.
-- 상대적으로 대용량인 테이블은 풀스캔으로 처리하고, 작은 테이블은 PRIMARY KEY로 반복 접근하여 1개의 데이터에만 접근하는 식으로 수행한다.
  
SELECT STRAIGHT_JOIN
       매핑.사원번호,
       부서.부서번호
  FROM 부서사원_매핑 매핑,
       부서
 WHERE 매핑.부서번호 = 부서.부서번호
   AND 매핑.시작일자 >= '2002-03-01';

EXPLAIN
SELECT STRAIGHT_JOIN
       매핑.사원번호,
       부서.부서번호
  FROM 부서사원_매핑 매핑,
       부서
 WHERE 매핑.부서번호 = 부서.부서번호
   AND 매핑.시작일자 >= '2002-03-01';
  
SELECT COUNT(1) FROM 부서사원_매핑;
SELECT COUNT(1) FROM 부서;
  
-------------------------------------------------------------