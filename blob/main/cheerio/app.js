const axios = require("axios");
const cheerio = require("cheerio");

// 검색키워드를 사용해서 인프런에서 강의 목록 웹 페이지를 가져오는 함수
const getHTML = async (keyword) => {
  try {
    return await axios.get("https://www.inflearn.com/courses?s=" + encodeURI(keyword));
  } catch (err) {
    console.log(err);
  }
};

// 가져온 웹 페이지를 파싱해서 필요한 정보(강의 정보)만 추출하는 함수
const parsing = async (page) => {
  const $ = cheerio.load(page); // 웹페이지를 파싱 가능한 형태로 로드

  const $courseList = $(".course_card_item");

  let courses = [];
  $courseList.each((idx, node) => {
    const title = $(node).find(".course_title:eq(0)").text(); // 강의 제목
    const instructor = $(node).find(".instructor").text(); // 강의 제공자

    const prices = $(node).find(".price").text().split("₩"); // 수강료 전체(수강료, 할인된 수강료)
    const rating = (Math.floor($(node).find(".star_solid").css("width").replace("%", "")) / 10).toFixed(1); // 별점
    const imgSrc = $(node).find(".card-image > figure > img").attr("src"); // 강의 썸네일
    const originalPrice = prices[0] == "무료" ? "무료" : prices[1]; // 수강료
    const discountPrice = prices.length == 3 ? prices[2] : originalPrice; // 할인된 수강료

    courses.push({
      title: title,
      instructor: instructor,
      originalPrice: originalPrice,
      discountPrice: discountPrice,
      rating: rating,
      imgSrc: imgSrc,
    });
  });

  return courses;
};

const getCourse = async (keyword) => {
  const html = await getHTML(keyword);
  const courses = await parsing(html.data);
  console.log(courses);
};

getCourse("자바스크립트");
