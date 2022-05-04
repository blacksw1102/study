var myURL = new URL("https://user:pass@sub.example.com:8080/p/a/t/h?query1=string&query2=int#hash");
console.log(myURL);

var myURL = new URL("https://mail.office.hiworks.com/musicen.com/mail/webmail/m_list/b0");
myURL.hash = "baz";
console.log(myURL);

var myURL = new URL("https://example.org/?user=abc&query=xyz");
myURL.hash = "baz";
console.log(myURL.hash);
console.log(myURL.href);

// 키-값 조회
console.log(myURL.searchParams.get("user"));
console.log(myURL.searchParams.has("user"));
console.log(myURL.searchParams.keys());
console.log(myURL.searchParams.values());

// 키 추가
myURL.searchParams.append("age", 23);
console.log(myURL.searchParams.keys());
console.log(myURL.searchParams.values());
myURL.searchParams.append("user", "admin");
console.log(myURL.searchParams.keys());
console.log(myURL.searchParams.values());
console.log(myURL.searchParams.getAll("user"));

// 키 셋
myURL.searchParams.set("user", "admin");
console.log(myURL.searchParams.getAll("user"));

// 키 제거
myURL.searchParams.delete("user");
console.log(myURL.searchParams.toString());
