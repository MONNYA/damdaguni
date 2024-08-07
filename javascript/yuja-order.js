$(document).ready(function () {
  // 초기 상태에서 but-logo a에 호버 효과 적용
  $(".but-1 a").addClass("hovered");

  // 마우스를 올렸을 때 효과 이동
  $(".but-1 a, .but-2 a, .but-3 a, .but-4 a").hover(
    function () {
      // 모든 링크에서 hovered 클래스 제거
      $(".but-1 a, .but-2 a, .but-3 a, .but-4 a").removeClass("hovered");
      // 현재 호버된 링크에 hovered 클래스 추가
      $(this).addClass("hovered");
    },
    function () {
      // 마우스를 벗어났을 때 다시 but-logo a에 호버 효과 적용
      $(".but-1 a, .but-2 a, .but-3 a, .but-4 a").removeClass("hovered");
      $(".but-1 a").addClass("hovered");
    }
  );
});
