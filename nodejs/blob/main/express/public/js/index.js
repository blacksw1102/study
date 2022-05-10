$(document).ready(function () {
  // 성공 테스트 버튼 이벤트 핸들링
  $("#successBtn").click(function () {
    $.ajax({
      url: "http://localhost:3000/success",
      success: function (data) {
        console.log(data);
      },
      error: function (xhr, status, error) {
        console.log("xhr : ", xhr);
        console.log("status : ", status);
        console.log("error : ", error);
      },
    });
  });

  // 실패 테스트 버튼 이벤트 핸들링
  $("#failBtn").click(function () {
    $.ajax({
      url: "http://localhost:3000/error",
      success: function (data) {
        console.log(data);
      },
      error: function (xhr, status, error) {
        console.log("xhr : ", xhr);
        console.log("status : ", status);
        console.log("error : ", error);
      },
    });
  });
});
