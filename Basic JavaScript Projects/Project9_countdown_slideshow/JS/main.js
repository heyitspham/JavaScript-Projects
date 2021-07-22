
// TIMER
function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds --;
        timer.innerHTML = seconds;
        setTimeout(tick, 1000);
        if(seconds == -1) {
            alert("Time's up!");
        }
    }
    tick();
}

// Sets variable slideIndex = 1. calls function showSlides and gives it an argument of 1 from var slideIndex's value.
var slideIndex = 1;
showSlides(slideIndex);

// Sets next or previous slide when either Next/Previous button is clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Sets current slide when dots are clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// To move the slideshow when clicked
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}