
let gifosFavoritos = [];
let i = 0;

function allStorage() {

    var keys = Object.keys(localStorage);
    favSize = keys.length;

    while ( (favSize--) > 0 ) {
        gifosFavoritos.push( localStorage.getItem(keys[favSize]) );
    }
    
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

