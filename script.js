/*  --------------DEPLOIEMENT HAMBURGER MENU----------- */
const burger = document.body.querySelector('#burger');
const navMenu = document.body.querySelector('#nav-menu');

function moveMenu(){
    burger.classList.toggle('cross');
    navMenu.classList.toggle('deployed');
}

burger.addEventListener("click", moveMenu);

/* Questionnaire */

const question1 = document.getElementsByName('question1');
const question2 = document.getElementsByName('question2');
const question3 = document.getElementsByName('question3');
const question4 = document.getElementsByName('question4');
const question5 = document.getElementsByName('question5');

const scoreFunction = () => {const result = parseInt(question1.value || 0)
        + parseInt(question2.value || 0) 
        + parseInt(question3.value || 0)
        + parseInt(question4.value || 0)
        + parseInt(question5.value || 0)
        console.log(document.getElementsByName('score').innerHTML = `${result}`);

};
/* ------------ GoogleMap---------------------------- */
const mapButton = document.body.querySelector('#map-button');
const googleMap = document.body.querySelector('#google-map');
if(mapButton) {
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

/* ------------ Scroll Event ---------------------------- */
const screenHeight = screen.height;

cards.forEach(elt => {
    console.log(elt.offsetTop);
});

