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

/* cards.forEach(elt => {
    elt.style.opacity = "0";
    elt.style.transition = "opacity 450ms ease-in-out";
    window.setTimeout(()=>{
        elt.style.opacity = "1";
    }, 500);
}); */


/* ------------ Scroll Event ---------------------------- */
const docHeight = document.documentElement.clientHeight; //hauteur totale du doc

cards.forEach(elt => {
    const eltPositionTop = elt.offsetTop;
    if((eltPositionTop) > docHeight - (docHeight/4)){    // Si la card est en dessous de 3/4 de l'écran alors card pas visible
        elt.style.transition = "opacity 350ms ease-in-out";
        elt.style.opacity = "0";
    } else {elt.style.opacity = "1";}
})

document.addEventListener('DOMContentLoaded', function(){
    document.addEventListener('scroll', function(){
        const eltScrollTop = document.documentElement.scrollTop; // pixels à scroller jusqu'à fin du doc
        

        cards.forEach(elt => {
            const eltPositionTop = elt.offsetTop;
            if((eltPositionTop - eltScrollTop) > docHeight - (docHeight/4)){    // Si la card passe au dessus de 3/4 de l'écran alors card visible
                elt.style.transition = "opacity 350ms ease-in-out";
                elt.style.opacity = "0";
            } else {elt.style.opacity = "1";}
        })


    });
});