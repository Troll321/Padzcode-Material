const scoreE = document.getElementById("score");
const timeE = document.getElementById("time");
const gameAreaE = document.getElementById("gameArea");
const gameAreaS = getComputedStyle(gameAreaE);
const start = document.getElementById("start");

start.addEventListener("click", function(){init(); start.remove();});

let score = 0, timestart = 0, time = 0, freq = 0, isPlaying = false;

function init() {
    // score = 0, time = 0, freq = 100;
    // isPlaying = true;
    timestart = Date.now();
    // gameAreaE.innerHTML = "";
    
    // summon();
    loop();
}

function loop() {
        // if(!isPlaying) {return ;}
        
        // time++;
        // if(time >= freq) {summon();}

    // Itung waktunya
    timeE.innerText = Date.now()-timestart;
    
    // Ngeset waktunya

    window.requestAnimationFrame(loop);
}

function summon() {
    time = 0;

    const size = rand(MIN_SIZE, MAX_SIZE);
    const pos = {x: rand(0, window.innerWidth-size), y: rand(0, window.innerHeight-size)};

    const div = document.createElement("div");
    div.style.left = pos.x + "px";
    div.style.top = pos.y + "px";
    div.style.width = size + "px";
    div.style.height = size + "px";
    div.classList.add("buletan");

    let timeoutID = setTimeout(() => {
        gameOver();
    }, 3000);

    // Kalo dipencet
    div.addEventListener("click", function(){ clickHandler(div, timeoutID); });
    gameAreaE.appendChild(div);
}

function clickHandler(bek, timeoutID) {
    bek.remove();
    score++;
    scoreE.innerText = score;

    // Matiin timer
    clearTimeout(timeoutID);
}

function gameOver() {
    alert("Skore mu: " + scoreE.innerText);
    window.location.reload();
}

function rand(min, max) {
    return Math.floor((Math.random() * (max-min+1)) + min);
}