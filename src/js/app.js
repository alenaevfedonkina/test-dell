var slideIndex = 0;
var startX;

showSlide(slideIndex);

function nextSlide() {
  showSlide(slideIndex += 1);
}

function showSlide(index) {
  var slides = document.getElementsByClassName("slides")[0];
  var dots = document.getElementsByClassName("dot");

  if (index >= slides.children.length) {
    slideIndex = 0;
  }
  if (index < 0) {
    slideIndex = slides.children.length - 1;
  }

  slides.style.transform = "translateX(-" + slideIndex * (100 / slides.children.length) + "%)";

  for (var i = 0; i < dots.length; i++) {
    dots[i].className = "dot";
  }

  dots[slideIndex].className += " active";
}

function handleDotClick(dotIndex) {
  showSlide(slideIndex = dotIndex);
}

function handleTouchStart(event) {
  startX = event.touches[0].clientX;
}

function handleTouchEnd(event) {
  var endX = event.changedTouches[0].clientX;
  
  if (startX - endX > 50) {
    showSlide(slideIndex += 1);
  } else if (endX - startX > 50) {
    showSlide(slideIndex -= 1);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  var dots = document.getElementsByClassName("dot");
  
  for (var i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function() {
      handleDotClick(Array.prototype.indexOf.call(dots, this));
    });
  }
  
  var slider = document.getElementsByClassName("slider")[0];
  
  slider.addEventListener("touchstart", handleTouchStart);
  slider.addEventListener("touchend", handleTouchEnd);
});