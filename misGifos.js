
let gifosUpl = [];

function getStorage() {

    gifosUpl = JSON.parse(localStorage.getItem('uplGifos'));
    return gifosUpl;

}

function cargarUploads() {

    getStorage();

    // SIN RESULTADO

    if(gifosUpl == null){
      
      document.getElementById("uplResult").innerHTML = '';
      const nores = document.createElement("div");
      const noresImg = document.createElement("img");
      const noresTxt = document.createElement("h4");
      noresImg.src = 'images/icons/icon-fav-sin-contenido.svg';
      noresTxt.innerHTML = '¡Anímate a crear tu primer GIFO!';
      nores.appendChild(noresImg);
      nores.appendChild(noresTxt);
      nores.classList.add("noResult");
      document.getElementById("uplResult").appendChild(nores);
    }

    else{
    

    for(i = 0; i < gifosUpl.length; i++){

        let uplRes = gifosUpl[i];

        const gifo = document.createElement("img");
        gifo.classList.add('gifo');
        gifo.src = uplRes.gifo;

        const iconDwnld = document.createElement("img");
        iconDwnld.src = "images/icons/icon-download.svg";
        const iconexp = document.createElement("img");
        iconexp.src = "images/icons/icon-max-normal.svg";

        const gifoDwnld = document.createElement('span');
        gifoDwnld.classList.add('gifoDwnld');
        const gifoExp = document.createElement('span');
        gifoExp.classList.add('gifoExp');
        gifoExp.setAttribute("onclick","openModal3("+(i)+")");

        const gifoCard = document.createElement('div');
        gifoCard.classList.add('gifoCard');
        const gifoContainer = document.createElement('div');
        gifoContainer.classList.add('gifoContainer');
        const gifoOverlay = document.createElement('div');
        gifoOverlay.classList.add('gifoOverlay');
        const gifoOverlayAct = document.createElement('div');
        gifoOverlayAct.classList.add('gifoOverlayAct');

        
        gifoDwnld.appendChild(iconDwnld);
        gifoExp.appendChild(iconexp);
        gifoOverlayAct.appendChild(gifoDwnld);
        gifoOverlayAct.appendChild(gifoExp);

        gifoOverlay.appendChild(gifoOverlayAct);

        gifoContainer.appendChild(gifo);

        gifoCard.appendChild(gifoContainer);
        gifoCard.appendChild(gifoOverlay);

        document.getElementById("uplResult").appendChild(gifoCard);



        // CARD MODALS

        const uplCard = document.createElement('div');
        uplCard.classList.add('uplCard');
        const imgExpandidaDet = document.createElement('div');
        imgExpandidaDet.classList.add('imgExpandidaDet');
        const imgExpandidaInfo = document.createElement('div');
        imgExpandidaInfo.classList.add('imgExpandidaInfo');
        const imgExpandidaAct = document.createElement('div');
        imgExpandidaAct.classList.add('imgExpandidaAct');

        const imgExpandida = document.createElement('img');
        imgExpandida.src = uplRes.gifo;
        imgExpandida.classList.add('imgExpandida');
        const imgExpDwnld = document.createElement('img');
        imgExpDwnld.src = "images/icons/icon-download.svg";
        const imgExpGifoDwld = document.createElement('span');
        imgExpGifoDwld.classList.add('imgExpGifoDwld');

        imgExpGifoDwld.appendChild(imgExpDwnld);
        imgExpandidaAct.appendChild(imgExpGifoDwld);

        imgExpandidaDet.appendChild(imgExpandidaInfo);
        imgExpandidaDet.appendChild(imgExpandidaAct);

        uplCard.appendChild(imgExpandida);
        uplCard.appendChild(imgExpandidaDet);


        document.getElementsByClassName("modal-content4")[0].appendChild(uplCard);

    }
  }
}

cargarUploads();


 // MODAL

 function openModal3(a){
    document.getElementById("modal4").style.display = "block";
    showSearch(a);
  }

  function closeModal3() {
    document.getElementById("modal4").style.display = "none";
  }


  function showSearch(n) {
    
    var searchCard = document.getElementsByClassName("uplCard");

    for (var i = 0; i < searchCard.length; i++) {
    searchCard[i].style.display = "none";
    }

    searchCard[n].style.display = "flex";
  }
