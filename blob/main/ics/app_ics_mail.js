const ics = require("ics");
require("dotenv").config({ path: "../nodemailer/.env" }); // nodemailer 폴더에 있는 .env 파일을 환경 변수로 설정
const nodemailer = require("../nodemailer");

const event = {
  start: [2022, 5, 1, 19, 30],
  duration: { hours: 1, minutes: 30 },
  title: "신제품 마케팅 회의",
  description: "신사업팀에서 개발한 신제품에 대한 해외 마케팅 회의",
  location: "서울특별시청",
  url: "http://thegreate.io",
  geo: { lat: 37.566603, lon: 126.978363 },
  organizer: { name: "Jeremy", email: "orgainizer@mail.com" },
  attendees: [
    { name: "참석자1", email: "addr1@mail.com", rsvp: true, role: "REQ-PARTICIPANT" },
    { name: "참석자2", email: "addr2@mail.com", role: "OPT-PARTICIPANT" },
  ],
};

ics.createEvent(event, async (error, value) => {
  if (error) {
    console.log(error);
    return;
  }

  let message = {
    from: "blacksw1102@gmail.com",
    to: "blacksw1102@gmail.com",
    subject: "신제품 마케팅 회의",
    text: "신사업팀에서 개발한 신제품에 대한 해외 마케팅 회의",
    icalEvent: {
      filename: "invitation.ics", // iCalendar 첨부 파일명
      method: "REQUEST", // REQUEST-요청, CANCEL-취소
      content: value, // iCalendar 이벤트
    },
  };

  const r = await nodemailer.send(message);
});
