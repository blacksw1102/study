const ics = require("ics");

const event = {
  start: [2021, 10, 30, 9, 30],
  duration: { hours: 1, minutes: 30 },
  title: "신제품 마케팅 회의",
  description: "신사업팀에서 개발한 신제품에 대한 해외 마케팅 회의",
  location: "더그레잇 3층",
  url: "http://thegreate.io",
  geo: { lat: 30.12, lon: 50.45 },
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
  console.log(value);
});
