document.querySelectorAll("input[type='range']").forEach(slider => {
  slider.addEventListener('input', function () {
    const value = (this.value - this.min) / (this.max - this.min) * 100;
    this.style.background = `linear-gradient(to right, #fff ${value}%, #BB6DF2 ${value}%)`;
  });
  slider.dispatchEvent(new Event('input'));
});
var swiper = new Swiper(".img-swiper", {
  slidesPerView: 5,
  spaceBetween: 24,
  loop: true,
  slidesPerGroup: 1,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  speed: 600,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },

    767: {
      slidesPerView: 4,
      spaceBetween: 40
    },

    992: {
      slidesPerView: 5,
      spaceBetween: 56,
    }
  }
});
var swiper1 = new Swiper(".card-swiper", {
  slidesPerView: 4.5,
  spaceBetween: 56,
  loop: true,
  slidesPerGroup: 1,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  speed: 600,
  breakpoints: {
    320: {
      slidesPerView: 1.3,
      spaceBetween: 10
    },

    767: {
      slidesPerView: 3,
      spaceBetween: 20
    },

    992: {
      slidesPerView: 4.5,
      spaceBetween: 24,
    }
  }
});
