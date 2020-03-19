/*  --------------DEPLOIEMENT HAMBURGER MENU----------- */
const burger = document.body.querySelector('#burger');
const navMenu = document.body.querySelector('#nav-menu');

function moveMenu(){
    burger.classList.toggle('cross');
    navMenu.classList.toggle('deployed');
}

burger.addEventListener("click", moveMenu);


/* Questionnaire */

const score = document.getElementsByName('score').value;

const functionScore = (score) => {
    parseInt(question1.value || 0)
    + parseInt(question2.value || 0) 
    + parseInt(question3.value || 0);
    + parseInt(question4.value || 0)
    + parseInt(question5.value || 0)

}