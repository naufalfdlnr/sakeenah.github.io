let slideIndex = [1,1,1];
let slideId = ["mySlides1", "mySlides2", "mySlides3"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2)

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}  

function currentSlide(n, no) {
  showSlides(slideIndex[no] = n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  let dots1 = document.getElementsByClassName("dot1");
  let dots2 = document.getElementsByClassName("dot2");
  let dots3 = document.getElementsByClassName("dot3");
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots1.length; i++) {
    dots1[i].className = dots1[i].className.replace(" active", "");
  }
  for (i = 0; i < dots2.length; i++) {
    dots2[i].className = dots2[i].className.replace(" active", "");
  }
  for (i = 0; i < dots3.length; i++) {
    dots3[i].className = dots3[i].className.replace(" active", "");
  }
  x[slideIndex[no]-1].style.display = "block";  
  dots1[slideIndex[no]-1].className += " active";
  dots2[slideIndex[no]-1].className += " active";
  dots3[slideIndex[no]-1].className += " active";
}