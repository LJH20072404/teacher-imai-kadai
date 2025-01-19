const modal1 = document.getElementById('js-myModal1');
const btn1 = document.getElementById('js-myBtn1');
const span1 = document.querySelector('.js-close1');
const modal2 = document.getElementById('js-myModal2');
const btn2 = document.getElementById('js-myBtn2');
const span2 = document.querySelector('.js-close2');
const body =document.querySelector('body');

btn1.onclick = function() {
    modal1.style.display = 'block';
    body.style.overflow = 'hidden';
}


span1.onclick = function() {
    modal1.style.display = "none";
    body.style.overflow = 'auto';
}

btn2.onclick = function() {
    modal2.style.display = 'block';
    body.style.overflow = 'hidden';
}


span2.onclick = function() {
    modal2.style.display = "none";
    body.style.overflow = 'auto';
}

window.onclick = function() {
    if (event.target == modal1) {
        modal1.style.display = 'none';
        body.style.overflow = 'auto';
    }
    else if (event.target == modal2) {
        modal2.style.display = 'none';
        body.style.overflow = 'auto';
    }
}
