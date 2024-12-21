const qa = document.querySelectorAll(".js-ac");
function acToggle(){
    const content = this.nextElementSibling;

    content.classList.toggle("is-open");

    const qa = this;
    qa.classList.toggle('is-open');
}

for (let i = 0; i < qa.length; i++){
    qa[i].addEventListener("click", acToggle);
}