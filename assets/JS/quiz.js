const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const scoreText = document.querySelector('#score');

let currentQuestion = {};
let acceptingAnswers = true;
let availableQuestion = [];

var questions = [
    {
    question: 'Q1: When was the Nintendo Entertainment System launched?',
    choice1: '1. 1980',
    choice2: '2. 1979',
    choice3: '3. 1985',
    choice4: '4. 1991',
    answer: 2,
    },

    {
    question: 'Q2: Which main character fights against the Shinra company?',
    choice1: '1. Mario',
    choice2: '2. Master Chief',
    choice3: '3. Cloud Strife',
    choice4: '4. Crash Bandicoot',
    answer: 3,
    },

    {
    question: 'Q3: Which came first??',
    choice1: '1. Call of Duty: Advanced Warfare',
    choice2: '2. Call of Duty: Warzone',
    choice3: '3. Call of Duty: Black Ops',
    choice4: '4. Call of Duty 4: Modern Warfare ',
    answer: 4,
    },

    {
    question: 'Q4: If you see a glowing object on a video game boss, that is its...',
    choice1: '1. Strength',
    choice2: '2. Stamina',
    choice3: '3. Weakness',
    choice4: '4. Tickle, tickle, tickle!',
    answer: 3,
    },

    {
    question: 'Q5: Would you kindly...?',
    choice1: '1. Stomp on a goomba',
    choice2: '2. Shoot that enemy',
    choice3: '3. ...kindly do what?',
    choice4: '4. A man chooses, a slave obeys!',
    answer: 4,
    },
];

var rightAnswer = 0

function generateQuiz(){
    var numberOfQuiz = questions.length
    var n = Math.floor(Math.random() * numberOfQuiz)
    var question = questions[n]
    var questionTitle = document.querySelector('#questionTitle')
    var options = document.querySelector('#options')
    questionTitle.innerHTML = question.question
    options.innerHTML = ''
    for (opt in question.options) {
        options.innerHTML = options.innerHTML + '<input type = "radio" name = "answers" value = "' + opt + '"/>' + questipn.options
        [opt] + '<br />'
    }
    rightAnser = question.answer
};


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

startGame();


