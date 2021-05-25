// BOTONES ADELANTE / ATRAS
var count_click = 0;

function rarr() {
    const trendingSl = document.getElementsByClassName('trendingGifoCard')[0];

    if(count_click > (-700)){
      count_click = count_click + (-180);
      trendingSl.style.marginLeft = count_click +'px';
    }
  }

  function larr() {
    const trendingSl = document.getElementsByClassName('trendingGifoCard')[0];
    
    if(count_click < 0){
      count_click = count_click + 180;
      trendingSl.style.marginLeft = count_click +'px';
    }
  }





// MODAL

function openModal() {
  document.getElementById("myModal").style.display = "block";
}
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "flex";
}

