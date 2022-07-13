/* -= ========== FADE RIGHT ========== =- */
// Get all the images
const fadeRights = document.querySelectorAll('.fadeRight');
const fadeLefts = document.querySelectorAll('.fadeLeft');
const options = {threshold: .4, rootMargin:"0px -200px 0px 0px"}

// Create a new observer
const ioFR = new IntersectionObserver (
    (entries, io) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            else {
                fadeRight(entry.target);
                io.unobserve(entry.target);
            }
        })
    }, options
)

// Toggle the classes
function fadeRight(element) {
    element.classList.toggle("fadeRight");
    element.classList.toggle("fadeRightA");
}

// Check to see if the images are on screen.
fadeRights.forEach(element => {
    ioFR.observe(element);
})

/* -= ========== FADE LEFT ========== =- */
// Create a new observer
const ioFL = new IntersectionObserver (
    (entries, io) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            else {
                fadeLeft(entry.target);
                io.unobserve(entry.target);
            }
        })
    }, options
)

// Toggle the classes
function fadeLeft(element) {
    element.classList.toggle("fadeLeft");
    element.classList.toggle("fadeLeftA");
}

// Check to see if the images are on screen.
fadeLefts.forEach(element => {
    ioFL.observe(element);
})
