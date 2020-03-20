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
if(mapButton) {
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

}


/* ------------ Cards apparitions---------------------------- */

const cards = document.body.querySelectorAll('.card');

cards.forEach(elt => {
    elt.style.opacity = "0";
    elt.style.transition = "opacity 450ms ease-in-out";
    window.setTimeout(()=>{
        elt.style.opacity = "1";
    }, 1000);
});




