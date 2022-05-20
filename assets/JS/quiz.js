// var savedName = document.getElementById('saved-name');
// var grade = document.getElementById('grades');
// var comment = document.getElementById('msg');
// var correct = document.getElementById('radio4');

// function saveHighScore() {
//     var scoreBoard = {
//         savedName: savedName.value,
//         grade: grade.value,
//         comment: comment.value.trim()
//     };
//     localStorage.setItem('saved-named', JSON.stringify(scoreBoard));
// } 

const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const scoreText = document.querySelector('#score');

let currentQuestion = {};
let acceptingAnswers = true;
let availableQuestion  [];

let questions = [
    {
    question: 'Q1: When was the Nintendo Entertainment System launched?',
    choice1: '1980',
    choice2: '1979',
    choice3: '1985',
    choice4: '1991',
    answer: 2,
    },

    {
    question: 'Q2: Which main character fights against the Shinra company?',
    choice1: 'Mario',
    choice2: 'Master Chief',
    choice3: 'Cloud Strife',
    choice4: 'Crash Bandicoot',
    answer: 3,
    },

    {
    question: 'Q3: Which came first??',
    choice1: 'Call of Duty: Advanced Warfare',
    choice2: 'Call of Duty: Warzone',
    choice3: 'Call of Duty: Black Ops',
    choice4: 'Call of Duty 4: Modern Warfare ',
    answer: 4,
    },

    {
    question: 'Q4: If you see a glowing object on a video game boss, that is its...',
    choice1: 'Strength',
    choice2: 'Stamina',
    choice3: 'Weakness',
    choice4: 'Tickle, tickle, tickle!',
    answer: 3,
    },

    {
        question: 'Q5: Would you kindly...?',
        choice1: 'Stomp on a goomba',
        choice2: 'Shoot that enemy',
        choice3: '...kindly do what?',
        choice4: 'A man chooses, a slave obeys!',
        answer: 4,
    },
]


function timer(){
    var sec = 75;
    var timer = setInterval(function(){
        document.getElementById('TimerDisplay').innerHTML= 'Timer: ' + sec;
        // sec--
        console.log(sec--)
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}

timer();

console.log('correct', correct.value);


