// SLIDESHOW IMAGE

// WISHLIST PROD


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

function love3() {
  var l1 = document.getElementById("love3");
  var l2 = document.getElementById("love4");
  l1.style.visibility = 'hidden'
  l2.style.visibility = 'visible'
}

function love4() {
  var l1 = document.getElementById("love3");
  var l2 = document.getElementById("love4");
  l1.style.visibility = 'visible'
  l2.style.visibility = 'hidden'
  
}

function love5() {
  var l1 = document.getElementById("love5");
  var l2 = document.getElementById("love6");
  l1.style.visibility = 'hidden'
  l2.style.visibility = 'visible'
}

function love6() {
  var l1 = document.getElementById("love5");
  var l2 = document.getElementById("love6");
  l1.style.visibility = 'visible'
  l2.style.visibility = 'hidden'

}

function love7() {
  var l1 = document.getElementById("love7");
  var l2 = document.getElementById("love8");
  l1.style.visibility = 'hidden'
  l2.style.visibility = 'visible'
}

function love8() {
  var l1 = document.getElementById("love7");
  var l2 = document.getElementById("love8");
  l1.style.visibility = 'visible'
  l2.style.visibility = 'hidden'
  
}

function love9() {
  var l1 = document.getElementById("love9");
  var l2 = document.getElementById("love10");
  l1.style.visibility = 'hidden'
  l2.style.visibility = 'visible'
}

function love10() {
  var l1 = document.getElementById("love9");
  var l2 = document.getElementById("love10");
  l1.style.visibility = 'visible'
  l2.style.visibility = 'hidden'
  
}

function love11() {
  var l1 = document.getElementById("love11");
  var l2 = document.getElementById("love12");
  l1.style.visibility = 'hidden'
  l2.style.visibility = 'visible'
}

function love12() {
  var l1 = document.getElementById("love11");
  var l2 = document.getElementById("love12");
  l1.style.visibility = 'visible'
  l2.style.visibility = 'hidden'
  
}

function love13() {
  var l1 = document.getElementById("love13");
  var l2 = document.getElementById("love14");
  l1.style.visibility = 'hidden'
  l2.style.visibility = 'visible'
}

function love14() {
  var l1 = document.getElementById("love13");
  var l2 = document.getElementById("love14");
  l1.style.visibility = 'visible'
  l2.style.visibility = 'hidden'
  
}

function love15() {
  var l1 = document.getElementById("love15");
  var l2 = document.getElementById("love16");
  l1.style.visibility = 'hidden'
  l2.style.visibility = 'visible'
}

function love16() {
  var l1 = document.getElementById("love15");
  var l2 = document.getElementById("love16");
  l1.style.visibility = 'visible'
  l2.style.visibility = 'hidden'
  
}

function love17() {
  var l1 = document.getElementById("love17");
  var l2 = document.getElementById("love18");
  l1.style.visibility = 'hidden'
  l2.style.visibility = 'visible'
}

function love18() {
  var l1 = document.getElementById("love17");
  var l2 = document.getElementById("love18");
  l1.style.visibility = 'visible'
  l2.style.visibility = 'hidden'

}

function love19() {
  var l1 = document.getElementById("love19");
  var l2 = document.getElementById("love20");
  l1.style.visibility = 'hidden'
  l2.style.visibility = 'visible'
}

function love20() {
  var l1 = document.getElementById("love19");
  var l2 = document.getElementById("love20");
  l1.style.visibility = 'visible'
  l2.style.visibility = 'hidden'
  
}

function love21() {
  var l1 = document.getElementById("love21");
  var l2 = document.getElementById("love22");
  l1.style.visibility = 'hidden'
  l2.style.visibility = 'visible'
}

function love22() {
  var l1 = document.getElementById("love21");
  var l2 = document.getElementById("love22");
  l1.style.visibility = 'visible'
  l2.style.visibility = 'hidden'
  
}

function love23() {
  var l1 = document.getElementById("love23");
  var l2 = document.getElementById("love24");
  l1.style.visibility = 'hidden'
  l2.style.visibility = 'visible'
}

function love24() {
  var l1 = document.getElementById("love23");
  var l2 = document.getElementById("love24");
  l1.style.visibility = 'visible'
  l2.style.visibility = 'hidden'
  
}


document.getElementById("defaultOpen").click();
document.getElementById("defaultOpen1").click();
document.getElementById("defaultOpen2").click();
document.getElementById("defaultOpen3").click();
document.getElementById("defaultOpen4").click();
document.getElementById("defaultOpen5").click();
document.getElementById("defaultOpen6").click();
document.getElementById("defaultOpen7").click();
document.getElementById("defaultOpen8").click();
document.getElementById("defaultOpen9").click();
document.getElementById("defaultOpen10").click();
document.getElementById("defaultOpen11").click();
document.getElementById("defaultOpen12").click();

// SIDE NAV

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

var dropdown = document.getElementsByClassName("men-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}