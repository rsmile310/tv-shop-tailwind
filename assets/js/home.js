const heroSlider = new Swiper('.hero-slider', {
    direction: 'horizontal',
    speed: 400,
    slidesPerView: 1,
    autoHeight: false,
    effect: 'slide',
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 5000000000000000000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    paginationType: "bullets",
})

