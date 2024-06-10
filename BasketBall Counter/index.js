//left increment points

let homescore = document.getElementById("first")
let score = 0

function plus1(){
    score += 1
    homescore.textContent = score
}
function plus2(){
    score += 2
    homescore.textContent = score
}
function plus3(){
    score += 3
    homescore.textContent = score
}

//right increment points

let guestscore = document.getElementById("second")
let guest = 0

function add1(){
    guest += 1
    guestscore.textContent = guest
}
function add2(){
    guest += 2
    guestscore.textContent = guest
}
function add3(){
    guest +=3
    guestscore.textContent = guest
}

//new game
let newgame = document.getElementById("new-game")
newo = 0
function gamenew(){
    homescore.textContent = 0
    score = 0
    guestscore.textContent = 0
    guest = 0
    foulscount.textContent = 0
    reset = 0


    
    clearInterval(timerInterval); // Stop the current timer
    timerInterval = null;
    seconds = 0;
    minutes = 0;
    document.getElementById('timercontent').textContent = '00:00'; // Reset the timer display
}

//fouls value
let foulscount = document.getElementById("foulscount")
let reset = 0

function foulsnum(){
    reset += 1
    foulscount.textContent = reset
}


//seconds and minute timer counts

let timerInterval;
let seconds = 0;
let minutes = 0;

// Function to start the timer
function startTimer() {
    if (!timerInterval) { // Start timer only if it's not already running
        timerInterval = setInterval(updateTimer, 1000);
    }
}

// Function to update the timer content
function updateTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    document.getElementById('timercontent').textContent = 
        (minutes < 10 ? '0' : '') + minutes + ':' + 
        (seconds < 10 ? '0' : '') + seconds;
}