const buttonOpen = document.getElementById('modalOpen');
const modal = document.getElementById('easyModal');
const buttonClose = document. getElementsByClassName('modalClose')[0];

buttonOpen.addEventListener('click', modalOpen);
function modalOpen() {
    easymodal.style.display = 'block';
};

buttonClose.addEventListener('click', modalClose);
function modalClose() {
    easymodal.style.display = 'none';
};

addEventListener('click', outsideClose);
function outsideClose(e) {
    if (e.target == easymodal) {
        easymodal.style.display = 'none';
    };
};