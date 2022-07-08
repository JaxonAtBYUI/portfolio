/* -= ========== GLITCH IMAGE RANDOM JUMPS ========== =- */
const MAX_DISTANCE = 3;
const MAX_DELAY_BEFORE = 2;
const MAX_DELAY_AFTER = 1;
const RUNNING = true;
const GI1 = document.getElementById("GI1");
const GI2 = document.getElementById("GI2");

let preared = false;
let before1;
let before2;
let gTimerB1;
let gTimerB2;
let gTimerA1;
let gTimerA2;

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
    gTimerA1 = 0;
    gTimerA2 = 0;

    // Set our state
    before1 = true;
    before2 = true;
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
}
prepare();
setInterval(glitchImages, 30)