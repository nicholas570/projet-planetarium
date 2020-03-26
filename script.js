/*  --------------DEPLOIEMENT HAMBURGER MENU----------- */
const burger = document.body.querySelector('#burger');
const navMenu = document.body.querySelector('#nav-menu');

function moveMenu(){
    burger.classList.toggle('cross');
    navMenu.classList.toggle('deployed');
}

burger.addEventListener("click", moveMenu);


/* ------------ GoogleMap---------------------------- */

const mapButton = document.body.querySelector('#map-button');
const googleMap = document.body.querySelector('#google-map');

function mapShow() {
    googleMap.classList.replace('hidden', 'visible');
}

function mapHide() {
    googleMap.classList.replace('visible', 'hidden');
}

mapButton.addEventListener('click', mapShow);
googleMap.addEventListener('click', mapHide);


/* ------------ Scroll Event ---------------------------- */
const screenHeight = screen.height;

cards.forEach(elt => {
    console.log(elt.offsetTop);
});


