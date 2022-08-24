//Welcome to index.js!

import { allQuestions } from "./questions.js";

//Getting the buttons and quiz-box
const quizBox = document.getElementById('quiz-box');
const next = document.getElementById('next');
const previous = document.getElementById('previous');

//Getting the quiz components
const question = document.getElementById('question');
const checkboxes = document.querySelectorAll('label');

let index = 0;

function setQuestion(index) {
    quizBox.style.visibility = 'visible';
    question.innerHTML = allQuestions[index].q;

    for (let i = 0; i <= 3; i++) {
        checkboxes[i].innerHTML = `${allQuestions[index][`q${i}`]} 
            <input type="radio" name="radio"> 
            <span class="checkmark"></span>`;
    }
}

setQuestion(0);

function nextQuestion() {
    index++;
    setQuestion(index);
}

function prevQuestion() {
    index--;
    setQuestion(index);
}

next.addEventListener('click', nextQuestion);
previous.addEventListener('click', prevQuestion);
