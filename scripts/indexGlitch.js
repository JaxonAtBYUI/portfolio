/* -= ========== GLITCH IMAGE RANDOM JUMPS ========== =- */
const MAX_DISTANCE = 10;
const MAX_DELAY_BEFORE = 30;
const MAX_DELAY_AFTER = 2;
const RUNNING = true;
const GI1 = '#GI1';
const GI2 = '#GI2';
const STYLESHEET1 = new CSSStyleSheet();
const STYLESHEET2 = new CSSStyleSheet()

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
function delcareStyle() {
    let distance = getRandomFloat(MAX_DISTANCE);
    if (getRandomBool()) {
        distance *= -1;    
    }

    let direction;
    if(getRandomBool()) {
        direction = 'right';
    }
    else {
        direction = 'left';
    }

    return `${direction}: ${distance}`
}

// TO TIMER
// Assume that the JS runs 60 frames a second and turn the number into a counter.
function toCounter(seconds) {
    return seconds * 60;
}


function glitchImages() {
    // Get the images
    
    // Get our timers
    let gTimerB1 = toCounter(getRandomFloat(MAX_DELAY_BEFORE));
    let gTimerB2 = toCounter(getRandomFloat(MAX_DELAY_BEFORE));
    let gTimerA1 = 0;
    let gTimerA2 = 0;

    // Set our state
    let before1 = true;
    let before2 = true;


    while(RUNNING) {
        if (before1) {
            
            // Animation plays
            if (gTimerB1 <= 0) {
                gTimerB1 = 0;
                let style = delcareStyle();
                let rule = `${GI1} {${style}}`
                STYLESHEET1.insertRule(rule);
                gTimerA1 = toCounter(getRandomFloat(MAX_DELAY_AFTER));
                document.adoptedStyleSheets = [STYLESHEET1];
            }

            // Countdown until animation
            gTimerB1 -= 1
        }
        else {
            // Remove animation
            if (gTimerA1 <= 0) {
                gTimerA1 = 0;
                STYLESHEET1.deleteRule(0);
                gTimerB1 = toCounter(getRandomFloat(MAX_DELAY_BEFORE));
                document.adoptedStyleSheets = [STYLESHEET1];
            }

            // Countdown to reversion
            gTimerA1 -= 1
        }

        // Image 2
        if (before2) {
            
            // Animation plays
            if (gTimerB2 <= 0) {
                gTimerB2 = 0;
                let style = delcareStyle();
                let rule = `${GI2} {${style}}`
                STYLESHEET2.insertRule(rule);
                gTimerA2 = toCounter(getRandomFloat(MAX_DELAY_AFTER));
                document.adoptedStyleSheets = [STYLESHEET2];
            }

            // Countdown until animation
            gTimerB2 -= 1
        }
        else {
            // Remove animation
            if (gTimerA2 <= 0) {
                gTimerA2 = 0;
                STYLESHEET2.deleteRule(0);
                gTimerB2 = toCounter(getRandomFloat(MAX_DELAY_BEFORE));
                document.adoptedStyleSheets = [STYLESHEET2];
            }

            // Countdown to reversion
            gTimerA2 -= 1
        }
    }

}

glitchImages();