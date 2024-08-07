$(function () {
  $(document).ready(function () {
    let currentSlide = 1;
    const slides = $(".slide");
    const totalSlides = slides.length;
    const slideContainer = $(".slides");

    // Clone first and last slide
    const firstSlide = slides.first().clone();
    const lastSlide = slides.last().clone();
    slideContainer.append(firstSlide);
    slideContainer.prepend(lastSlide);

    // Update total slides
    const updatedTotalSlides = $(".slide").length;

    // Initialize slide position
    slideContainer.css("transform", "translateX(-100%)");

    function showSlide(index) {
      slideContainer.css("transition", "transform 1s ease-in-out");
      slideContainer.css("transform", "translateX(" + -index * 100 + "%)");
      currentSlide = index;

      // Update dots
      $(".dot").removeClass("active");
      $(".dot")
        .eq((currentSlide - 1) % totalSlides)
        .addClass("active");
    }

    function nextSlide() {
      if (currentSlide >= totalSlides) {
        slideContainer.css("transition", "none");
        slideContainer.css("transform", "translateX(-100%)");
        currentSlide = 1;
        setTimeout(function () {
          showSlide(currentSlide + 1);
        }, 50);
      } else {
        showSlide(currentSlide + 1);
      }
    }

    function prevSlide() {
      if (currentSlide <= 0) {
        slideContainer.css("transition", "none");
        slideContainer.css(
          "transform",
          "translateX(" + -(totalSlides - 2) * 100 + "%)"
        );
        currentSlide = totalSlides - 2;
        setTimeout(function () {
          showSlide(currentSlide - 1);
        }, 50);
      } else {
        showSlide(currentSlide - 1);
      }
    }

    $(".next").click(nextSlide);
    $(".prev").click(prevSlide);

    $(".dot").click(function () {
      const index = $(this).index() + 1;
      showSlide(index);
    });

    let slideInterval = setInterval(nextSlide, 3000); // 3초 간격으로 자동 슬라이드 전환

    $(".img-slider").hover(
      function () {
        clearInterval(slideInterval);
      },
      function () {
        slideInterval = setInterval(nextSlide, 3000); // 3초 간격으로 자동 슬라이드 전환
      }
    );

    showSlide(currentSlide);
  });
});
