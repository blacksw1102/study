const crypto = require("crypto");

console.log(crypto.createHash("sha512").update("pw1234").digest("base64"));
console.log(crypto.createHash("sha512").update("pw1234").digest("hex"));

// 랜덤 salt 값 생성
const createSalt = () => {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(64, (err, buf) => {
      if (err) {
        reject(err);
      }
      resolve(buf.toString("base64"));
    });
  });
};

// 암호화 패스워드 생성
const createCryptoPassword = async (plainPassword) => {
  const salt = await createSalt();

  return new Promise((resolve, reject) => {
    crypto.pbkdf2(plainPassword, salt, 9999, 64, "sha512", (err, key) => {
      if (err) {
        reject(err);
      }
      resolve({ password: key.toString("base64"), salt });
    });
  });
};

// 평문 패스워드와 + salt 값을 이용한 암호화 패스워드 계산
const getCryptoPassword = async (plainPassword, salt) => {
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(plainPassword, salt, 9999, 64, "sha512", (err, key) => {
      if (err) {
        reject(err);
      }
      resolve({ password: key.toString("base64"), salt });
    });
  });
};

let password = "test1234!";
createCryptoPassword(password).then((data) => {
  console.log("createCryptoPassword => ", data);

  getCryptoPassword(password, data.salt).then((data) => {
    console.log("getCryptoPassword => ", data);
  });
});
