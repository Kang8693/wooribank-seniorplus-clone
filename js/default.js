$(document).ready(function(){
  
  var swiper = new Swiper('.slide1', {
    slidesPerView: 1,
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    pagination : {
      el : '.paging1',
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.slide1 .slide_btn_next',
      prevEl: '.slide1 .slide_btn_prev',
    },
  });

  
    var swiper2 = new Swiper('.slide2', {
      slidesPerView: 1,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.slide2 .next',
        prevEl: '.slide2 .prev',
      },
    });

    var swiper3 = new Swiper('.slide3', {
      spaceBetween: 30,
      effect: 'fade',
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.slide3 .next',
        prevEl: '.slide3 .prev',
      },
    });

    var swiper4 = new Swiper('.slide4', {
      slidesPerView: 1,
      effect: 'fade',
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    var swiper5 = new Swiper('.slide5', {
      direction: 'vertical',
      slidesPerView: 5,
      loop:true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
  });

  var swiper6 = new Swiper('.slide6', {
    slidesPerView: 1,
    loop: true,
    centeredSlides: true,
    pagination : {
      el : '.paging1',
      clickable: true,
    },
    navigation: {
      nextEl: '.slide6 .next',
      prevEl: '.slide6 .prev',
    },
  });

  var swiper7 = new Swiper('.slide7', {
    effect: 'fade',
    loop: true,
    centeredSlides: true,
  });

  var swiper8 = new Swiper('.slide8', {
    slidesPerView: 6,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.slide8 .next',
      prevEl: '.slide8 .prev',
    },
  });
});