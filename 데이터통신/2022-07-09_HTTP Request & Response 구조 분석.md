# HTTP Request & Response 구조 분석

## 목표

HTTP 메시지를 구조적으로 분리하고, 각 구조별로 적용할 수 있는 필드 목록을 정리한다.

## HTTP 메시지 구조

### Request 구조

```
- Start Line
- Header
    - General Header
    - Request Header
    - Entity Header
- Blank Line
- Body
```

### Response 구조

```
- Status Line
- Header
    - General Header
    - Response Header
    - Entity Header
- Body
```

## Start Line

```
POST /User/login HTTP/1.1

- HTTP Method
- Request Target
- HTTP Version
```

## Status Line

```
HTTP/1.1 500 Internal Server Error

- HTTP Version
- Status Code
- Status Text
```

## General-Header

```
general-header = Date
               | Cache-Control
               | Connection
```

### Date

메시지가 만들어진 날짜와 시간을 포함한다.

### Cache-Control

캐싱 정책 디렉티브를 지정한다.

#### Cache Request Directive

클라이언트에 의해 사용될 수 있는 디렉티브.

```
Cache-Control: max-age=<seconds> : 캐시의 유효시간을 명시한다.
Cache-Control: max-stale[=<seconds>]
Cache-Control: min-fresh=<seconds>
Cache-control: no-cache : 캐시 복사본을 사용하기전에 원격 서버를 통해서 유효성 검증을 한다.
Cache-control: no-store : 캐시는 HTTP 요청 및 응답에 관한 어떠한 리소스도 저장하지 않는다.
Cache-control: no-transform
Cache-control: only-if-cached
Cache-control: must-revalidate : 만료된 캐시만 원격 서버를 통해 유효성 검증을 한다.
Cache-control: public : 리소스를 퍼블릭 캐시에 저장해도 된다.
Cache-control: private : '브라우저' 같은 특정 사용자 환경(프라이빗 캐시)에만 저장하겠다. (기본값)
```

#### Cache Response Directive

서버에 의해 사용될 수 있는 디렉티브.

```
Cache-control: must-revalidate
Cache-control: no-cache
Cache-control: no-store
Cache-control: no-transform
Cache-control: public
Cache-control: private
Cache-control: proxy-revalidate
Cache-Control: max-age=<seconds>
Cache-control: s-maxage=<seconds>
```

### Connection

전송이 완료된 후 네트워크 접속을 유지할지 말지를 제어. 만약 전송된 값이 keep-alive면, 연결은 지속되고 끊기지 않으며, 동일한 서버에 대한 후속 요청을 수행할 수 있습니다.

```
Connection: keep-alive
Connection: close
```

## Request Header & Response Header

요청 및 응답의 내용을 좀 더 구체화 시킬 수 있도록 부가 정보를 포함하기 위해서 쓰인다. 

(각 옵션에 대한 설명은, 옵션들이 너무 많기에 실제 HTTP 메시지에서 봤었던 것들 위주로 달아놨다. )

### Authentication

```
- WWW-Authenticate : 사용자 인증이 필요한 자원을 요청할 시, 서버가 제공하는 인증 방식.
- Authorization : 요청자의 인증을 위한 인증서를 명시한다.
- Proxy-Authenticate : 요청한 서버가 프록시 서버인 경우 유저 인증을 위한 값.
- Proxy-Authorization
```

### Caching

```
- Age : max-age 시간내에서 얼마나 지났는지 초 단위로 알려주는 값.
- Cache-Control : (= General Header => Cache-Control)
- Clear-Site-Data
- Expires : 리소스의 만료일시를 명시한다.
- Pragma: no-cache : 캐시 복사본을 릴리즈 하기전에 원격 서버에 요청해서 유효성 검사를 강제한다. (= cache-control: no-cache)
```

### Conditionals

```
- Last-Modified
- ETag
- If-Match
- If-None-Match
- If-Modified-Since : 명시된 일시 이후에 변경된 리소스를 받아올 때 사용한다.
- If-Unmodified-Since
- Vary
```

### Connection management

```
- Connection : (= General Header => Connection)
- keep-alive: timeout=60 : 커넥션이 최소 몇초동안 유지되어야 하는지 명시한다.
```

### Content negotiation

```
- Accept : 클라이언트가 처리 할 수 있는 컨텐츠 타입 종류 나열
- Accept-Encoding
- Accept-Language
```

### Controls

```
- Expect
```

### Cookies

```
- Cookie : 쿠키 값. key-value로 표현한다.
- Set-Cookie
```

### CORS

```
- Access-Control-Allow-Origin : 리소스 요청시 사용했던 URI를 명시한다.
- Access-Control-Allow-Credentials:true : Request.credentials가 "include"일 때 같이 사용되는 헤더이며, 이 헤더 값이 true여야만 Script단에서 response 데이터를 사용할 수 있다. 
- Access-Control-Allow-Headers: 클라이언트가 요청시 사용할 수 있는 헤더 목록을 지정한다. ex) response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Access-Control-Allow-Headers, Accept, Key, Authorization, X-Requested-With, X-AUTH-TOKEN");
- Access-Control-Allow-Methods : 리소스에 접근할 수 있는 방식을 명시한다.
- Access-Control-Expose-Headers
- Access-control-max-age: 3600 : response 받은 리소스를 몇초동안 캐싱할 수 있는지를 지정한다.
- Access-Control-Request-Headers
- Access-Control-Request-Method
- Origin : 클라이언트가 서버로 POST 요청을 보낼 때, 위치하고 있던 주소 값. 요청을 보낼 때 주소와 받는 주소가 다르면 CORS(Cross-Origin Resource Sharing) 에러가 발생한다.
- Timing-Allow-Origin
```

### Downloads

```
- Content-Disposition
```

### Message body info

```
- Content-Length : Body의 길이.
- Content-Type : Body의 미디어 타입. ex) application/xml, application/json, text/html, text/plain, image/png, image/jpg, audio/mp3, video/mp4, ..
- Content-Encoding : Body의 리소스 압축 방식. (Transfer-Encoding은 HTTP 메시지 자체이므로 다름)
- Content-Language : Body를 이해하는데 가장 적절한 언어. ex) ko
- Content-Location
```

### Proxies

```
- Forwarded
- Via
```

### Redirects

```
- Location : 301, 302 상태코드일 때만 볼 수 있는 Header로 서버의 응답이 다른 곳에 있다고 알려주면서 해당 위치(URI)를 지정.
```

### Request context

```
- From
- Host : 요청을 받는 타겟의 URL.
- Referer : 요청 직전에 머물렀던 웹 링크 주소.
- Referrer-Policy : 서버 referrer 정책을 알려주는 값 ex) origin, no-referrer, unsafe-url
- User-Agent : 요청을 보내는 클라이언트 정보. ex) 웹브라우저 정보 등
```

### Response context

```
- Allow
- Server : 웹 서버 종류
```

### Range requests

```
- Accept-Ranges
- Range
- If-Range
- Content-Range
```

### Security

```
- Cross-Origin-Embedder-Policy
- Cross-Origin-Opener-Policy
- Cross-Origin-Resource-Policy
- Content-Security-Policy
- Content-Security-Policy-Report-Only
- Expect-CT
- Feature-Policy
- Strict-Transport-Security
- Upgrade-Insecure-Requests
- X-Content-Type-Options: nosniff : MIME 스니핑 공격을 방지하기 위해 적용한다.
- X-Frame-Options:DENY : 페이지를 frame 태그에서 렌더링 할 수 있는지 여부를 지정한다. 클릭재킹을 방지하기 위함이기도 하다.
- X-XSS-Protection : XSS 공격을 감지하면 페이지로드를 차단한다.
- Public-Key-Pins
- Public-Key-Pins-Report-Only
- Sec-Fetch-Site
- Sec-Fetch-Mode
- Sec-Fetch-User
- Sec-Fetch-Dest
- Service-Worker-Navigation-Preload
```

### Client hints
### Server-sent events
### Transfer coding

```
- Transfer-Encoding: chunked : HTTP 메시지를 전송할 때, 일정크기의 청크 여러개로 쪼개서 각 청크를 순서대로 보낸다.
```

### WebSockets

## Entity Header

```
entity-header  = Allow                    
               | Content-Encoding
               | Content-Language
               | Content-Length
               | Content-Location
               | Content-MD5
               | Content-Range
               | Content-Type
               | Expires
               | Last-Modified
               | extension-header
```

## Example

### HTTP Request

```
GET /home.html HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: https://developer.mozilla.org/testpage.html
Connection: keep-alive
Upgrade-Insecure-Requests: 1
If-Modified-Since: Mon, 18 Jul 2016 02:36:04 GMT
If-None-Match: "c561c68d0ba92bbeb8b0fff2a9199f722e3a621a"
Cache-Control: max-age=0
```

### HTTP Request

```
200 OK
Access-Control-Allow-Origin: *
Connection: Keep-Alive
Content-Encoding: gzip
Content-Type: text/html; charset=utf-8
Date: Mon, 18 Jul 2016 16:06:00 GMT
Etag: "c561c68d0ba92bbeb8b0f612a9199f722e3a621a"
Keep-Alive: timeout=5, max=997
Last-Modified: Mon, 18 Jul 2016 02:36:04 GMT
Server: Apache
Set-Cookie: mykey=myvalue; expires=Mon, 17-Jul-2017 16:06:00 GMT; Max-Age=31449600; Path=/; secure
Transfer-Encoding: chunked
Vary: Cookie, Accept-Encoding
X-Backend-Server: developer2.webapp.scl3.mozilla.com
X-Cache-Info: not cacheable; meta data too large
X-kuma-revision: 1085259
x-frame-options: DENY
```

## HTTP Status

```
- 1xx : 정보
- 2xx : 성공
    - 200 : OK. 요청 성공
    - 201 : Created. 생성 요청 성공
    - 202 : Accepted. 요청 수락(처리 보장X)
    - 204 : 성공했으나 돌려줄게 없음
- 3xx : 리다이렉션
    - 300 : Multiple choices. 여러 리소스에 대한 요청 결과 목록
    - 301,302,303 : Redirect. 리소스 위치가 변경된 상태
    - 304 : Not Modified. 리소스가 수정되지 않았음
- 4xx : 클라이언트 오류
    - 400 : Bad Request. 요청 오류
    - 401 : Unauthorized. 권한없음
    - 403 : Forbidden. 요청 거부
    - 404 : Not Found. 리소스가 없는 상태
- 5xx : 서버 오류
    - 500 : Internal Server Error. 서버가 요청을 처리 못함
    - 501 : Not Implemented. 서버가 지원하지 않는 요청
    - 503 : Service Unavailable. 과부하 등으로 당장 서비스가 불가능한 상태
```

## Reference

- https://velog.io/@teddybearjung/HTTP-%EA%B5%AC%EC%A1%B0-%EB%B0%8F-%ED%95%B5%EC%8B%AC-%EC%9A%94%EC%86%8C
- https://programmer93.tistory.com/60
- https://ohcodingdiary.tistory.com/5
- https://sjh836.tistory.com/81
- https://developer.mozilla.org/ko/docs/Web/HTTP/Messages
- https://www.w3.org/Protocols/rfc2616/rfc2616-sec7.html
- https://developer.mozilla.org/ko/docs/Glossary/General_header
- https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Date
- https://developer.mozilla.org/ko/docs/Web/HTTP/Headers
- https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=zilly1&logNo=221179363569
- https://developer.mozilla.org/ko/docs/Web/HTTP/CORS#%EC%9D%B4_%EA%B8%80%EC%9D%80_%EB%88%84%EA%B0%80_%EC%9D%BD%EC%96%B4%EC%95%BC_%ED%95%98%EB%82%98%EC%9A%94