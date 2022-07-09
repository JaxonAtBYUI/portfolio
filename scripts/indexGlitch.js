/* -= ========== GLITCH IMAGE RANDOM JUMPS ========== =- */
const MAX_DISTANCE = 3;
const MAX_DELAY_BEFORE = 2;
const MAX_DELAY_AFTER = 1;
const RUNNING = true;
const GI1 = document.getElementById("GI1");
const GI2 = document.getElementById("GI2");
const GI3 = document.getElementById("GI3");
const GI4 = document.getElementById("GI4");
const GI5 = document.getElementById("GI5");
const GI6 = document.getElementById("GI6");

let before1;
let before2;
let before3;
let before4;
let before5;
let before6;

let gTimerB1;
let gTimerB2;
let gTimerB3;
let gTimerB4;
let gTimerB5;
let gTimerB6;

let gTimerA1;
let gTimerA2;
let gTimerA3;
let gTimerA4;
let gTimerA5;
let gTimerA6;

// GET RANDOM FLOAT
// Gets and returns a random 1 digit decimal number
function getRandomFloat(max) {
  return (Math.random() * max).toFixed(1);
}

// GET RANDOM BOOL
function getRandomBool() {
    if (Math.random() > .5) {
        return true
    }
    return false
}

// DECLARE STYLE
// Create a random style
function randomDistance() {
    let distance = getRandomFloat(MAX_DISTANCE);
    if (getRandomBool()) {
        distance *= -1;    
    }

    return distance
}

// TO TIMER
// The interval runs at approximately 30 fps.
function toCounter(seconds) {
    return seconds * 30;
}


function prepare() {
    // Get the images
    
    // Get our timers
    gTimerB1 = toCounter(getRandomFloat(MAX_DELAY_BEFORE));
    gTimerB2 = toCounter(getRandomFloat(MAX_DELAY_BEFORE));
    gTimerB3 = toCounter(getRandomFloat(MAX_DELAY_BEFORE));
    gTimerB4 = toCounter(getRandomFloat(MAX_DELAY_BEFORE));
    gTimerB5 = toCounter(getRandomFloat(MAX_DELAY_BEFORE));
    gTimerB6 = toCounter(getRandomFloat(MAX_DELAY_BEFORE));

    gTimerA1 = 0;
    gTimerA2 = 0;
    gTimerA3 = 0;
    gTimerA4 = 0;
    gTimerA5 = 0;
    gTimerA6 = 0;

    // Set our state
    before1 = true;
    before2 = true;
    before3 = true;
    before4 = true;
    before5 = true;
    before6 = true;
}

function glitchImages() {
    if (before1) {
        // Animation plays
        if (gTimerB1 <= 0) {
            distance = randomDistance();
            GI1.style.left = `${distance}vw`;
            gTimerA1 = toCounter(getRandomFloat(MAX_DELAY_AFTER));
            before1 = false;
        }

        // Countdown until animation
        gTimerB1 -= 1
    }
    else {
        // Remove animation
        if (gTimerA1 <= 0) {
            gTimerB1 = toCounter(getRandomFloat(MAX_DELAY_BEFORE));
            GI1.style.left = '5px';
            before1 = true;
        }

        // Countdown to reversion
        gTimerA1 -= 1
    }
    // Image 2
    if (before2) {
        
        // Animation plays
        if (gTimerB2 <= 0) {
            distance = randomDistance();
            GI2.style.left = `${distance}vw`;
            gTimerA2 = toCounter(getRandomFloat(MAX_DELAY_AFTER));
            before2 = false;
        }

        // Countdown until animation
        gTimerB2 -= 1
    }
    else {
        // Remove animation
        if (gTimerA2 <= 0) {
            gTimerB2 = toCounter(getRandomFloat(MAX_DELAY_BEFORE));
            GI2.style.left = '-5px';
            before2 = true;
        }

        // Countdown to reversion
        gTimerA2 -= 1
    }

    // Image 3
    if (before3) {   
        // Animation plays
        if (gTimerB3 <= 0) {
            distance = randomDistance();
            GI3.style.left = `${distance}vw`;
            gTimerA3 = toCounter(getRandomFloat(MAX_DELAY_AFTER));
            before3 = false;
        }

        // Countdown until animation
        gTimerB3 -= 1
    }
    else {
    // Remove animation
        if (gTimerA3 <= 0) {
            gTimerB3 = toCounter(getRandomFloat(MAX_DELAY_BEFORE));
            GI3.style.left = '0px';
            before3 = true;
        }

        // Countdown to reversion
        gTimerA3 -= 1
    }

    //Image 4
    if (before4) {   
        // Animation plays
        if (gTimerB4 <= 0) {
            distance = randomDistance();
            GI4.style.left = `${distance}vw`;
            gTimerA4 = toCounter(getRandomFloat(MAX_DELAY_AFTER));
            before4 = false;
        }

        // Countdown until animation
        gTimerB4 -= 1
    }
    else {
        // Remove animation
        if (gTimerA4 <= 0) {
            gTimerB4 = toCounter(getRandomFloat(MAX_DELAY_BEFORE));
            GI4.style.left = '0';
            before4 = true;
        }

        // Countdown to reversion
        gTimerA4 -= 1
    }

    //Image 5
    if (before5) {   
        // Animation plays
        if (gTimerB5 <= 0) {
            distance = randomDistance();
            GI5.style.left = `${distance}vw`;
            gTimerA5 = toCounter(getRandomFloat(MAX_DELAY_AFTER));
            before5 = false;
        }

        // Countdown until animation
        gTimerB5 -= 1
    }
    else {
        // Remove animation
        if (gTimerA5 <= 0) {
            gTimerB5 = toCounter(getRandomFloat(MAX_DELAY_BEFORE));
            GI5.style.left = '0';
            before5 = true;
        }

        // Countdown to reversion
        gTimerA5 -= 1
    }

    // Images 6
    if (before6) {   
        // Animation plays
        if (gTimerB6 <= 0) {
            distance = randomDistance();
            GI6.style.left = `${distance}vw`;
            gTimerA6 = toCounter(getRandomFloat(MAX_DELAY_AFTER));
            before6 = false;
        }

        // Countdown until animation
        gTimerB6 -= 1
    }
    else {
        // Remove animation
        if (gTimerA6 <= 0) {
            gTimerB6 = toCounter(getRandomFloat(MAX_DELAY_BEFORE));
            GI6.style.left = '0';
            before6 = true;
        }

        // Countdown to reversion
        gTimerA6 -= 1
    }
}
prepare();
setInterval(glitchImages, 30)