const backBtn = document.querySelector('#js-back-btn');

backBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {

    if (window.scrollY >= 300){
        backBtn.style.display = 'inline';
    }
    else {
        backBtn.style.display ='none';
    }
});

