var swiperBg = new Swiper(".bg-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".bg-slider__number",
      clickable: true,
    },
    navigation: {
      nextEl: ".bg-slider-next",
      prevEl: ".bg-slider-prew",
    },
  });


  var swiperGallery = new Swiper(".card-big-slide", {
      spaceBetween: 10,
      slidesPerView: 6,
      freeMode: true,
      watchSlidesProgress: true,
    });

    var swiperGallery2 = new Swiper(".card-small-slide", {
      spaceBetween: 10,
        navigation: {
          nextEl: ".card-mobile-btn-next",
          prevEl: ".card-mobile-btn-prev",
        },
        thumbs: {
          swiperGallery: swiperGallery,
        },
    });


    if(window.innerWidth <= 768) {
        var swiper = new Swiper(".card-mobile-slider", {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          navigation: {
            nextEl: ".card-mobile-btn-next",
            prevEl: ".card-mobile-btn-prev",
          },
        });
      }

      var comparativeCharacteristicsSlider = new Swiper(".comparative-characteristics__slider", {
        spaceBetween: 30,
        pagination: {
          el: ".comparative-characteristics__pagination",
          clickable: true,
        },
      });


        var photoGallerySlider = new Swiper(".photo-gallery", {
          slidesPerView: 3,
          spaceBetween: 40,
          keyboard: {
            enabled: true,
          },
          navigation: {
            nextEl: ".photo-gallery__btn-next",
            prevEl: ".photo-gallery__btn-prev",
          },
        });

        if (window.innerWidth <= 991) {  
          var photoGallerySlider = new Swiper(".photo-gallery", {
            slidesPerView: 2,
            spaceBetween: 40,
            keyboard: {
              enabled: true,
            },
            navigation: {
              nextEl: ".photo-gallery__btn-next",
              prevEl: ".photo-gallery__btn-prev",
            },
          });
        }
        if (window.innerWidth <= 768) {  
          var photoGallerySlider = new Swiper(".photo-gallery", {
            slidesPerView: 1,
            spaceBetween: 40,
            keyboard: {
              enabled: true,
            },
            navigation: {
              nextEl: ".photo-gallery__btn-next",
              prevEl: ".photo-gallery__btn-prev",
            },
          });
        }