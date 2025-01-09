const swiper = new Swiper(".mySwiper1", {
    slidesPerView: 1,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    keyboard: {
        enabled: true,
    },
    breakpoints: {
        769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
    },
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

new Swiper('.mySwiper2',{
    effect:'cube',
    grabCursor: true,
    cubeEffect: {
        shadow: true,
        slideShadows:true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    pagination: {
        el:'swiper-pagination'
    },
});