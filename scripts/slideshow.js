let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    resetFades();
    showSlides(slideIndex += n, n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Reset fades
function resetFades() {
    let slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains("fadeLeftA")) {slides[i].classList.toggle("fadeLeftA")};
        if (slides[i].classList.contains("fadeRightA")) {slides[i].classList.toggle("fadeRightA")};
    }
}

function showSlides(newIndex, n) {
    let i;
    let slides = document.getElementsByClassName("slide");

    if (newIndex > slides.length) {slideIndex = 1}
    if (newIndex < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";
    if (n < 0) {
        slides[slideIndex-1].classList.toggle("fadeRightA");
    }
    if (n > 0) {
        slides[slideIndex-1].classList.toggle("fadeLeftA");
    }
}