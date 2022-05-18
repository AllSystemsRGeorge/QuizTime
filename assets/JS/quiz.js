var savedName = document.getElementById('saved-name');
var grade = document.getElementById('grades');
var comment = document.getElementById('msg');

function saveHighScore() {
    var scoreBoard = {
        savedName: savedName.value,
        grade: grade.value,
        comment: comment.value.trim()
    };
    localStorage.setItem('saved-named', JSON.stringify(scoreBoard));
}

function timer(){
    var sec = 75;
    var timer = setInterval(function(){
        document.getElementById('TimerDisplay').innerHTML='75'+sec;
        sec--
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}