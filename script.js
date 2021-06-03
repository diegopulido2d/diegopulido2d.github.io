// BOTONES ADELANTE / ATRAS
var count_click = 0;

function rarr() {
    const trendingSl = document.getElementById('trendingSliderCont').children;

    if(count_click > (-700)){
      count_click = count_click + (-180);
      trendingSl[0].style.marginLeft = count_click +'px';
    }
  }

  function larr() {
    const trendingSl = document.getElementById('trendingSliderCont').children;
    
    if(count_click < 0){
      count_click = count_click + 180;
      trendingSl[0].style.marginLeft = count_click +'px';
    }
  }

