
var count_click = 0;

function rarr() {
    const trendingSl = document.getElementsByClassName('trendingGifoCard')[0];

    if(count_click > (-420)){
      count_click = count_click + (-140);
      trendingSl.style.marginLeft = count_click +'px';
    }
  }

  function larr() {
    const trendingSl = document.getElementsByClassName('trendingGifoCard')[0];
    
    if(count_click < 0){
      count_click = count_click + 140;
      trendingSl.style.marginLeft = count_click +'px';
    }
  }

