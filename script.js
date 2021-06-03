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



  // MODO NOCTURNO


  let mdDiur = document.getElementsByClassName('mdDiu')[0];
  let mdDiurMB = document.getElementsByClassName('mdDiu')[1];
  let mdNoct = document.getElementsByClassName('mdNoc')[0];
  let mdNoctMB = document.getElementsByClassName('mdNoc')[1];

  let nav = document.getElementsByTagName('nav')[0];
  let footer = document.getElementsByTagName('footer')[0];

  function mdNoc(a){

    mdDiur.style.display = 'inline';
    mdDiurMB.style.display = 'inline';
    mdNoct.style.display = 'none'
    mdNoctMB.style.display = 'none';

    nav.classList.add('darkBg');
    footer.classList.add('darkBg');

    let menulink = document.getElementsByClassName('menulink');
    menulink[1].classList.add('darkTxt');
    menulink[2].classList.add('darkTxt');
    menulink[3].classList.add('darkTxt');
   
    let menuIcon = document.getElementsByClassName('menuIcon');
    menuIcon[0].src = 'images/logo-desktop-modo-noct.svg';

    let footerP = footer.getElementsByTagName('p');
    footerP[0].classList.add('darkTxt');
    footerP[1].classList.add('darkTxt');


    if(a == 'home'){

      let mainbanner = document.getElementsByClassName('mainbanner')[0];
      mainbanner.classList.add('darkBg');

      let trendingSlider = document.getElementsByClassName('trendingSlider')[0];
      trendingSlider.classList.add('rllyDarkBg');
      let trendingSliderH2 = trendingSlider.getElementsByTagName('h2');
      trendingSliderH2[0].classList.add('darkTxt');
      let trendingSliderP = trendingSlider.getElementsByTagName('p');
      trendingSliderP[0].classList.add('darkTxt');

      let larrow = trendingSlider.getElementsByClassName('larrow')[0].getElementsByTagName('img')[0];
      larrow.src = 'images/icons/button-slider-left-md-noct.svg';
      let rarrow = trendingSlider.getElementsByClassName('rarrow')[0].getElementsByTagName('img')[0];
      rarrow.src = 'images/icons/button-slider-right-md-noct.svg';
    }

    if(a == 'misgifos'){

      let trendingSlider = document.getElementsByClassName('trendingSlider')[0];
      trendingSlider.classList.add('rllyDarkBg');
      let trendingSliderH2 = trendingSlider.getElementsByTagName('h2');
      trendingSliderH2[0].classList.add('darkTxt');
      let trendingSliderP = trendingSlider.getElementsByTagName('p');
      trendingSliderP[0].classList.add('darkTxt');

      let larrow = trendingSlider.getElementsByClassName('larrow')[0].getElementsByTagName('img')[0];
      larrow.src = 'images/icons/button-slider-left-md-noct.svg';
      let rarrow = trendingSlider.getElementsByClassName('rarrow')[0].getElementsByTagName('img')[0];
      rarrow.src = 'images/icons/button-slider-right-md-noct.svg';
    }

    if(a == 'favoritos'){

      let trendingSlider = document.getElementsByClassName('trendingSlider')[0];
      trendingSlider.classList.add('rllyDarkBg');
      let trendingSliderH2 = trendingSlider.getElementsByTagName('h2');
      trendingSliderH2[0].classList.add('darkTxt');
      let trendingSliderP = trendingSlider.getElementsByTagName('p');
      trendingSliderP[0].classList.add('darkTxt');

      let larrow = trendingSlider.getElementsByClassName('larrow')[0].getElementsByTagName('img')[0];
      larrow.src = 'images/icons/button-slider-left-md-noct.svg';
      let rarrow = trendingSlider.getElementsByClassName('rarrow')[0].getElementsByTagName('img')[0];
      rarrow.src = 'images/icons/button-slider-right-md-noct.svg';
    }

  }


  // MODO DIURNO

  function mdDiu(a){

    mdDiur.style.display = 'none';
    mdDiurMB.style.display = 'none';
    mdNoct.style.display = 'inline'
    mdNoctMB.style.display = 'inline';

    nav.classList.remove('darkBg');
    footer.classList.remove('darkBg');

    let menulink = document.getElementsByClassName('menulink');
    menulink[1].classList.remove('darkTxt');
    menulink[2].classList.remove('darkTxt');
    menulink[3].classList.remove('darkTxt');

    let menuIcon = document.getElementsByClassName('menuIcon');
    menuIcon[0].src = 'images/logo-desktop.svg';

    let footerP = footer.getElementsByTagName('p');
    footerP[0].classList.remove('darkTxt');
    footerP[1].classList.remove('darkTxt');


    if(a == 'home'){
      document.getElementsByClassName('mainbanner')[0].classList.remove('darkBg');
      document.getElementsByClassName('trendingSlider')[0].classList.remove('rllyDarkBg');

      let trendingSlider = document.getElementsByClassName('trendingSlider')[0];
      trendingSlider.classList.remove('rllyDarkBg');
      let trendingSliderH2 = trendingSlider.getElementsByTagName('h2');
      trendingSliderH2[0].classList.remove('darkTxt');
      let trendingSliderP = trendingSlider.getElementsByTagName('p');
      trendingSliderP[0].classList.remove('darkTxt');

      let larrow = trendingSlider.getElementsByClassName('larrow')[0].getElementsByTagName('img')[0];
      larrow.src = 'images/icons/button-slider-left.svg';
      let rarrow = trendingSlider.getElementsByClassName('rarrow')[0].getElementsByTagName('img')[0];
      rarrow.src = 'images/icons/button-slider-right.svg';

    }

    if(a == 'misgifos'){
      document.getElementsByClassName('trendingSlider')[0].classList.remove('rllyDarkBg');

      let trendingSlider = document.getElementsByClassName('trendingSlider')[0];
      trendingSlider.classList.remove('rllyDarkBg');
      let trendingSliderH2 = trendingSlider.getElementsByTagName('h2');
      trendingSliderH2[0].classList.remove('darkTxt');
      let trendingSliderP = trendingSlider.getElementsByTagName('p');
      trendingSliderP[0].classList.remove('darkTxt');

      let larrow = trendingSlider.getElementsByClassName('larrow')[0].getElementsByTagName('img')[0];
      larrow.src = 'images/icons/button-slider-left.svg';
      let rarrow = trendingSlider.getElementsByClassName('rarrow')[0].getElementsByTagName('img')[0];
      rarrow.src = 'images/icons/button-slider-right.svg';

    }

    if(a == 'favoritos'){
      document.getElementsByClassName('trendingSlider')[0].classList.remove('rllyDarkBg');

      let trendingSlider = document.getElementsByClassName('trendingSlider')[0];
      trendingSlider.classList.remove('rllyDarkBg');
      let trendingSliderH2 = trendingSlider.getElementsByTagName('h2');
      trendingSliderH2[0].classList.remove('darkTxt');
      let trendingSliderP = trendingSlider.getElementsByTagName('p');
      trendingSliderP[0].classList.remove('darkTxt');

      let larrow = trendingSlider.getElementsByClassName('larrow')[0].getElementsByTagName('img')[0];
      larrow.src = 'images/icons/button-slider-left.svg';
      let rarrow = trendingSlider.getElementsByClassName('rarrow')[0].getElementsByTagName('img')[0];
      rarrow.src = 'images/icons/button-slider-right.svg';

    }

    if(a == 'misgifos'){
      document.getElementsByClassName('trendingSlider')[0].classList.remove('rllyDarkBg');

      let trendingSlider = document.getElementsByClassName('trendingSlider')[0];
      trendingSlider.classList.remove('rllyDarkBg');
      let trendingSliderH2 = trendingSlider.getElementsByTagName('h2');
      trendingSliderH2[0].classList.remove('darkTxt');
      let trendingSliderP = trendingSlider.getElementsByTagName('p');
      trendingSliderP[0].classList.remove('darkTxt');

      let larrow = trendingSlider.getElementsByClassName('larrow')[0].getElementsByTagName('img')[0];
      larrow.src = 'images/icons/button-slider-left.svg';
      let rarrow = trendingSlider.getElementsByClassName('rarrow')[0].getElementsByTagName('img')[0];
      rarrow.src = 'images/icons/button-slider-right.svg';

    }
    
  }