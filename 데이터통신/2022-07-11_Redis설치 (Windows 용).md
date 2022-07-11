# Redis 설치 (Windows 용)

## 목적
Windows 환경에 Redis를 설치하여, 연결을 체크하고 기본 명령어를 테스트해 본다.

## Redis 설치 링크

https://github.com/microsoftarchive/redis/releases

## Redis 설치 완료 확인

![Redis 설치 파일 확인](https://i.imgur.com/SvtxtdC.png)

![Redis 서비스 확인](https://postfiles.pstatic.net/MjAyMjA3MTFfMTQ1/MDAxNjU3NTQzNTQzMDIw.kL0ljShlrWjmmcMHZWlM_xIwyYJJL4_TmvQXMkTg-S8g.mzgpQivRN0HJ0kjtLYBb7OZyS0R118cq6SfIw70wdyUg.PNG.blacksw1102/SE-81f23728-5904-4965-b141-ee1053f949de.png?type=w773)

![PING/PONG 확인](https://i.imgur.com/FY6tAyV.png)

## Redis 명령어

### 저장

```
- set key value : key, vlaue 저장.
- mset key value [key value ...] : 여러 개의 key, value를 한번에 저장.
- setex key seconds value : key, seconds, value 저장. (*seconds 뒤에 key-value 소멸)
```

### 조회

```
- keys * : 현재 저장된 모든 키값 조회.
- get key : 지정한 key에 해당하는 value 조회.
- mget key [key ...] : 여러개 key에 해당하는 values 조회.
- ttl key : key의 만료 시간을 초단위로 조회. (-1: 만료시간 없음. -2: 데이터 없음)
- pttl key : key의 만료 시간을 밀리초단위로 조회.
- type key : key의 value 타입을 조회.
```

### 삭제

```
- del key [key ...] : key에 해당하는 데이터들 삭제.
```

### 수정

```
- rename key newkey : key 이름 변경.
- expire key seconds : 해당 키 값의 만료 시간 설정.
```

### 기타

```
- randomkey : 존재하는 key들 중 랜덤으로 key 하나 반환.
- ping : redis 연결여부 확인, 연결 성공시 "PONG"이 리턴.
- dbsize : 현재 사용중인 DB의 key 개수 조회.
- flushall : 레디스 서버의 모든 데이터 삭제.
- flushdb : 현재 사용중인 DB의 모든 데이터 삭제.
```