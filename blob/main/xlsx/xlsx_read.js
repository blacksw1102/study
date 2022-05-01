const xlsx = require("xlsx");

const workbook = xlsx.readFile("./resource/test.xlsx"); // 엑셀 파일 읽어오기
const firstSheetName = workbook.SheetNames[0]; // 엑셀 파일의 첫번째 시트 이름 가져오기
const firstSheet = workbook.Sheets[firstSheetName]; // 시트 이름을 사용해서 엑셀 파일의 첫번째 시트 가져오기

/* 엑셀 파일 읽기 */
const firstSheetJson = xlsx.utils.sheet_to_json(firstSheet); // 시트 내용을 json 데이터로 변환
console.log(firstSheetJson);

/* 엑셀 파일 내용 수정하기 */
firstSheet["A2"] = { t: "s", v: "Jeremy" };
firstSheet["B2"].v = "john@gmail.com";

xlsx.writeFile(workbook, "./resource/test2.xlsx"); // 변경 내용을 저장하여 새 엑셀 파일 생성
