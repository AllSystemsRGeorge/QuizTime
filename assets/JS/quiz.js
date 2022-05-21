var questions = [
    {
    question: 'When was the Nintendo Entertainment System launched?',
    options: ['1. 1980', '2. 1979', '3. 1985','4. 1991'],
    answer: 2,
    },

    {
    question: 'Which main character fights against the Shinra company?',
    options: ['1. Mario', '2. Master Chief', '3. Cloud Strife','4. Crash Bandicoot'],
    answer: 2,
    },

    {
    question: 'Which came first??',
    options: ['1. Call of Duty: Advanced Warfare', '2. Call of Duty: Warzone', '3. Call of Duty: Black Ops', '4. Call of Duty 4: Modern Warfare'],
    answer: 3,
    },

    {
    question: 'If you see a glowing object on a video game boss, that is its...',
    options: ['1. Strength', '2. Stamina', '3. Weakness', '4. Tickle, tickle, tickle!'],
    answer: 2,
    },

    {
    question: 'Would you kindly...?',
    options: ['1. Stomp on a goomba', '2. Shoot that enemy', '3. ...kindly do what?', '4. A man chooses, a slave obeys!'],
    answer: 3,
    },
];

var rightAnswer = 0


function generateQuiz(){
    var NumberOfQuiz = questions.length
    var n = Math.floor(Math.random() * NumberOfQuiz)
    var question = questions[n]
    var questionTitle = document.querySelector('#questionTitle')
    var options = document.querySelector('#options')
    questionTitle.innerHTML = question.question
    options.innerHTML = ''
    for (opt in question.options) {
        options.innerHTML = options.innerHTML + '<input type = "radio" name = "answers" value = "' + opt + '"/>' + question.options
        [opt] + '<br />'
    }
    rightAnswer = question.answer
};

function submit() {
    var selected = document.querySelector('input[name="answers"]:checked')
    if (selected) {
        var answer = document.querySelector('input[name="answers"]:checked').value
        if (answer == rightAnswer)
            alert('Correct!')
        else
            alert('Wrong!')
    }
        else
            alert('Time keeps on slipping!')
}

function endGame() {
    if questions {

        window.location.href = 'end.html'
    }
}


function timer(){
    var sec = 75;
    var timer = setInterval(function(){
        document.getElementById('TimerDisplay').innerHTML= 'Timer: ' + sec;
        // sec--
        console.log(sec--)
        if (sec < 0) {
            clearInterval(timer);
            window.location.href = 'end.html';
        }
        else (sec > 0)
            display.innerHTML= 'Timer:' + sec;
            window.location.href = 'end.html';
            
    }, 1000);
}

timer();

console.log('correct', correct.value);

startGame();


