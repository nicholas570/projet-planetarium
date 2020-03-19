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