let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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



function love1() {
  var l1 = document.getElementById("love1");
  var l2 = document.getElementById("love2");
  l1.style.visibility = 'hidden'
  l2.style.visibility = 'visible'
}

function love2() {
  var l1 = document.getElementById("love1");
  var l2 = document.getElementById("love2");
  l1.style.visibility = 'visible'
  l2.style.visibility = 'hidden'

}

document.getElementById("defaultOpen").click();