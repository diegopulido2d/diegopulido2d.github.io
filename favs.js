
let gifosFavoritos = [];

function allStorage() {

    var keys = Object.keys(localStorage);
    favSize = keys.length;

    while ( (favSize--) > 0 ) {

        if((keys[favSize][0]) == 'f'){

          gifosFavoritos.push(localStorage.getItem(keys[favSize]) );

        }
        
    }

    console.log(gifosFavoritos);

    return gifosFavoritos;

}


function cargarFavoritos() {

    allStorage();

    for(i = 0; i < gifosFavoritos.length; i++){

        let fvrt = JSON.parse(gifosFavoritos[i])

        const gifo = document.createElement("img");
        gifo.classList.add('gifo');
        gifo.src = fvrt.gifo;

            const iconDwnld = document.createElement("img");
        iconDwnld.src = "images/icons/icon-download.svg";
        const iconexp = document.createElement("img");
        iconexp.src = "images/icons/icon-max-normal.svg";

        const gifoDwnld = document.createElement('span');
        gifoDwnld.classList.add('gifoDwnld');
        const gifoExp = document.createElement('span');
        gifoExp.classList.add('gifoExp');
        gifoExp.setAttribute("onclick","openModal2("+(i)+")");

        const gifoCard = document.createElement('div');
        gifoCard.classList.add('gifoCard');
        const gifoContainer = document.createElement('div');
        gifoContainer.classList.add('gifoContainer');
        const gifoOverlay = document.createElement('div');
        gifoOverlay.classList.add('gifoOverlay');
        const gifoOverlayAct = document.createElement('div');
        gifoOverlayAct.classList.add('gifoOverlayAct');

        const gifoUser = document.createElement('h5');
        gifoUser.classList.add('gifoUser');
        gifoUser.innerHTML= fvrt.username;
        const gifoTitle = document.createElement('h4');
        gifoTitle.innerHTML= fvrt.title;
        gifoTitle.classList.add('gifoTitle');

        gifoDwnld.appendChild(iconDwnld);
        gifoExp.appendChild(iconexp);
        gifoOverlayAct.appendChild(gifoDwnld);
        gifoOverlayAct.appendChild(gifoExp);

        gifoOverlay.appendChild(gifoOverlayAct);
        gifoOverlay.appendChild(gifoUser);
        gifoOverlay.appendChild(gifoTitle);

        gifoContainer.appendChild(gifo);

        gifoCard.appendChild(gifoContainer);
        gifoCard.appendChild(gifoOverlay);

        document.getElementById("favResult").appendChild(gifoCard);



        // CARD MODALS

        const favCard = document.createElement('div');
        favCard.classList.add('favCard');
        const imgExpandidaDet = document.createElement('div');
        imgExpandidaDet.classList.add('imgExpandidaDet');
        const imgExpandidaInfo = document.createElement('div');
        imgExpandidaInfo.classList.add('imgExpandidaInfo');
        const imgExpandidaAct = document.createElement('div');
        imgExpandidaAct.classList.add('imgExpandidaAct');

        const imgExpandida = document.createElement('img');
        imgExpandida.src = fvrt.original;
        imgExpandida.classList.add('imgExpandida');
        const imgExpDwnld = document.createElement('img');
        imgExpDwnld.src = "images/icons/icon-download.svg";
        const imgExpGifoDwld = document.createElement('span');
        imgExpGifoDwld.classList.add('imgExpGifoDwld');

        const imgExpandidaUser = document.createElement('h5');
        imgExpandidaUser.classList.add('imgExpandidaUser');
        imgExpandidaUser.innerHTML = fvrt.username;
        const imgExpandidaTitle = document.createElement('h4');
        imgExpandidaTitle.classList.add('imgExpandidaTitle');
        imgExpandidaTitle.innerHTML= fvrt.title;


        imgExpGifoDwld.appendChild(imgExpDwnld);
        imgExpandidaAct.appendChild(imgExpGifoDwld);

        imgExpandidaInfo.appendChild(imgExpandidaUser);
        imgExpandidaInfo.appendChild(imgExpandidaTitle);

        imgExpandidaDet.appendChild(imgExpandidaInfo);
        imgExpandidaDet.appendChild(imgExpandidaAct);

        favCard.appendChild(imgExpandida);
        favCard.appendChild(imgExpandidaDet);


        document.getElementsByClassName("modal-content3")[0].appendChild(favCard);




    }


    // SIN RESULTADO
    
    if (gifosFavoritos.length == 0){

        document.getElementById("favResult").innerHTML = '';
        const nores = document.createElement("div");
        const noresImg = document.createElement("img");
        const noresTxt = document.createElement("h4");
        noresImg.src = 'images/icons/icon-fav-sin-contenido.svg';
        noresTxt.innerHTML = '"¡Guarda tu primer GIFO en Favoritos para que se muestre aquí!"';
        nores.appendChild(noresImg);
        nores.appendChild(noresTxt);
        nores.classList.add("noResult");
        document.getElementById("favResult").appendChild(nores);
      }

}

cargarFavoritos();


 // MODAL

 function openModal2(a){
    document.getElementById("modal3").style.display = "block";
    showSearch(a);
  }

  function closeModal2() {
    document.getElementById("modal3").style.display = "none";
  }


  function showSearch(n) {
    
    var searchCard = document.getElementsByClassName("favCard");

    for (var i = 0; i < searchCard.length; i++) {
    searchCard[i].style.display = "none";
    }

    searchCard[n].style.display = "flex";
  }
