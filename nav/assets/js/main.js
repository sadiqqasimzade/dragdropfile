function myFunction() {
    if (document.documentElement.scrollTop > 100) {
      document.getElementById("nav").style.backgroundColor = "blue";
    } else {
      document.getElementById("nav").style.backgroundColor = "transparent";
    }
  }

window.onscroll=function(){ myFunction()}