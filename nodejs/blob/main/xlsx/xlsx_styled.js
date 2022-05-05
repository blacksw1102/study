const xlsx = require("xlsx-js-style");
const workbook = xlsx.utils.book_new();

const customers = [
  { A: "고객명", B: "이메일", C: "연락처" },
  { A: "유재석", B: "ryu@mail.com", C: "010-0000-1111" },
  { A: "김종국", B: "kim@mail.com", C: "010-0000-2222" },
  { A: "지석진", B: "ji@mail.com", C: "010-0000-3333" },
  { A: "하하", B: "ha@mail.com", C: "010-0000-4444" },
];

// 데이터 생성
const firstSheet = xlsx.utils.json_to_sheet(customers, { header: ["A", "B", "C"], skipHeader: true });

// 컬럼 넓이 지정
firstSheet["!cols"] = [{ wpx: 120 }, { wpx: 250 }, { wpx: 200 }];

firstSheet["A1"].s = {
  font: {
    name: "Calibri",
    sz: 24,
    bold: true,
    color: { rgb: "FFFFAA00" },
  },
};

// 시트에 데이터 저장
xlsx.utils.book_append_sheet(workbook, firstSheet, "Customers");

// 엑셀 파일 저장
xlsx.writeFile(workbook, "./resource/customers_styled.xlsx");
