/*  --------------DEPLOIEMENT HAMBURGER MENU----------- */
const burger = document.body.querySelector('#burger');
const navMenu = document.body.querySelector('#nav-menu');

function moveMenu(){
    burger.classList.toggle('cross');
    navMenu.classList.toggle('deployed');
}

burger.addEventListener("click", moveMenu);