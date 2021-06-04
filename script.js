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






  


  let mdDiur = document.getElementsByClassName('mdDiu')[0];
  let mdDiurMB = document.getElementsByClassName('mdDiu')[1];
  let mdNoct = document.getElementsByClassName('mdNoc')[0];
  let mdNoctMB = document.getElementsByClassName('mdNoc')[1];

  let nav = document.getElementsByTagName('nav')[0];
  let footer = document.getElementsByTagName('footer')[0];


  // MODO NOCTURNO


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
      let mainbannerH1 = mainbanner.getElementsByTagName('h1');
      mainbannerH1[0].classList.add('darkTxt');
      let mainbannerH4 = mainbanner.getElementsByTagName('h4');
      mainbannerH4[0].classList.add('darkTxt');
      let mainbannerSearchbar = mainbanner.getElementsByClassName('searchBar')[0];
      mainbannerSearchbar.style.borderColor = "white";
      let mainbannerSearchbox = mainbanner.getElementsByClassName('searchBox')[0];
      mainbannerSearchbox.style.color = "white";
      let mainbannerSearchbtn = mainbanner.getElementsByClassName('searchBtn')[0];
      mainbannerSearchbtn.style.color = "white";
      let mainbannerSpan = mainbanner.getElementsByTagName('span');
      mainbannerSpan[0].classList.add('darkTxt');
      mainbannerSpan[1].classList.add('darkTxt');
      mainbannerSpan[2].classList.add('darkTxt');
      mainbannerSpan[3].classList.add('darkTxt');
      mainbannerSpan[4].classList.add('darkTxt');

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

      let modal = document.getElementsByClassName('modal');
      modal[0].classList.add('rllyDarkBg');
      modal[1].classList.add('rllyDarkBg');


    }

    if(a == 'misgifos'){

      let mainbanner = document.getElementsByClassName('mainbanner2')[0];
      mainbanner.classList.add('darkBg');
      let mainbannerH3 = mainbanner.getElementsByTagName('h3');
      mainbannerH3[0].classList.add('darkTxt');

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

      let modal = document.getElementsByClassName('modal');
      modal[0].classList.add('rllyDarkBg');
      modal[1].classList.add('rllyDarkBg');
    }

    if(a == 'favoritos'){

      let mainbanner = document.getElementsByClassName('mainbanner2')[0];
      mainbanner.classList.add('darkBg');
      let mainbannerH3 = mainbanner.getElementsByTagName('h3');
      mainbannerH3[0].classList.add('darkTxt');

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

      let modal = document.getElementsByClassName('modal');
      modal[0].classList.add('rllyDarkBg');
      modal[1].classList.add('rllyDarkBg');
    }

    if(a == 'creargifo'){

      let mainbanner = document.getElementsByClassName('crearGifoSec')[0];
      mainbanner.classList.add('rllyDarkBg');
      let imgCamara = mainbanner.getElementsByTagName('img')[0];
      imgCamara.src = "images/icons/camara-modo-noc.svg";
      let imgPeli = mainbanner.getElementsByTagName('img')[4];
      imgPeli.src = "images/icons/pelicula-modo-noc.svg";

      let title = mainbanner.getElementsByTagName('h3')[0];
      title.classList.add('darkTxt');
      let p = mainbanner.getElementsByTagName('p');
      p[0].classList.add('darkTxt');
      p[1].classList.add('darkTxt');

      let titspan = mainbanner.getElementsByTagName('span');
      titspan[1].classList.add('darkTxt');
      titspan[2].classList.add('darkTxt');
      titspan[3].classList.add('darkTxt');
      titspan[5].classList.add('darkTxt');
      titspan[6].classList.add('darkTxt');
      titspan[7].classList.add('darkTxt');

      let boton = mainbanner.getElementsByClassName('boton');
      boton[0].classList.add('darkTxt');
      boton[1].classList.add('darkTxt');
      boton[2].classList.add('darkTxt');
      boton[3].classList.add('darkTxt');

      let btnBack = mainbanner.getElementsByClassName('btnBack')[0];
      btnBack.classList.add('darkTxt');

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
      mainbanner = document.getElementsByClassName('mainbanner')[0];
      mainbanner.classList.remove('darkBg');
      let mainbannerH1 = mainbanner.getElementsByTagName('h1');
      mainbannerH1[0].classList.remove('darkTxt');
      let mainbannerH4 = mainbanner.getElementsByTagName('h4');
      mainbannerH4[0].classList.remove('darkTxt');
      let mainbannerSearchbar = mainbanner.getElementsByClassName('searchBar')[0];
      mainbannerSearchbar.style.borderColor = "#572EE5";
      let mainbannerSearchbox = mainbanner.getElementsByClassName('searchBox')[0];
      mainbannerSearchbox.style.color = "#572EE5";
      let mainbannerSearchbtn = mainbanner.getElementsByClassName('searchBtn')[0];
      mainbannerSearchbtn.style.color = "#572EE5";
      let mainbannerSpan = mainbanner.getElementsByTagName('span');
      mainbannerSpan[0].classList.remove('darkTxt');
      mainbannerSpan[1].classList.remove('darkTxt');
      mainbannerSpan[2].classList.remove('darkTxt');
      mainbannerSpan[3].classList.remove('darkTxt');
      mainbannerSpan[4].classList.remove('darkTxt');

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

      let modal = document.getElementsByClassName('modal');
      modal[0].classList.remove('rllyDarkBg');
      modal[1].classList.remove('rllyDarkBg');

    }

    if(a == 'misgifos'){
      let mainbanner = document.getElementsByClassName('mainbanner2')[0];
      mainbanner.classList.remove('darkBg');
      let mainbannerH3 = mainbanner.getElementsByTagName('h3');
      mainbannerH3[0].classList.remove('darkTxt');

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

      let modal = document.getElementsByClassName('modal');
      modal[0].classList.remove('rllyDarkBg');
      modal[1].classList.remove('rllyDarkBg');

    }

    if(a == 'favoritos'){
      let mainbanner = document.getElementsByClassName('mainbanner2')[0];
      mainbanner.classList.remove('darkBg');
      let mainbannerH3 = mainbanner.getElementsByTagName('h3');
      mainbannerH3[0].classList.remove('darkTxt');

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

      let modal = document.getElementsByClassName('modal');
      modal[0].classList.remove('rllyDarkBg');
      modal[1].classList.remove('rllyDarkBg');

    }

    if(a == 'creargifo'){

      let mainbanner = document.getElementsByClassName('crearGifoSec')[0];
      mainbanner.classList.remove('rllyDarkBg');
      let imgCamara = mainbanner.getElementsByTagName('img')[0];
      imgCamara.src = "images/icons/camara.svg";
      let imgPeli = mainbanner.getElementsByTagName('img')[4];
      imgPeli.src = "images/icons/pelicula.svg";

      let title = mainbanner.getElementsByTagName('h3')[0];
      title.classList.remove('darkTxt');
      let p = mainbanner.getElementsByTagName('p');
      p[0].classList.remove('darkTxt');
      p[1].classList.remove('darkTxt');

      let titspan = mainbanner.getElementsByTagName('span');
      titspan[1].classList.remove('darkTxt');
      titspan[2].classList.remove('darkTxt');
      titspan[3].classList.remove('darkTxt');
      titspan[5].classList.remove('darkTxt');
      titspan[6].classList.remove('darkTxt');
      titspan[7].classList.remove('darkTxt');

      let boton = mainbanner.getElementsByClassName('boton');
      boton[0].classList.remove('darkTxt');
      boton[1].classList.remove('darkTxt');
      boton[2].classList.remove('darkTxt');
      boton[3].classList.remove('darkTxt');

      let btnBack = mainbanner.getElementsByClassName('btnBack')[0];
      btnBack.classList.remove('darkTxt');
      

    }
    
  }