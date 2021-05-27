//SEARCHBAR REQUEST

      
const endpoint_search = "https://api.giphy.com/v1/gifs/search";
const api_key = "y98WtYPNJhbNhdf7rKQmng8kAOB9pwaU";
let limit = 12;
let offset = 0;
let busqueda = '';


let favs2 = [];
let cont = 0;


const searchEndpoint = async (q, offset) => {
  const data = await fetch(
    `${endpoint_search}?api_key=${api_key}&q=${q}&limit=${limit}&offset=${offset}`
  );
  const json = await data.json();
  return json;
};

const createImages = (images) => {
  for (let index = 0; index < images.data.length; index++) {


    var favorito = {
      gifo: '',
      username: '',
      title: ''
   }

    favs2.push(favorito);
    
    favs2[cont].gifo = images.data[index].images.fixed_height.url;
    favs2[cont].username = images.data[index].username;
    favs2[cont].title = images.data[index].title; 


    // SEARCH CARDS

    const gifo = document.createElement("img");
    gifo.classList.add('gifo');
    gifo.src = images.data[index].images.fixed_height.url;

    const iconfav = document.createElement("img");
    iconfav.src = "images/icons/icon-fav.svg";
    const iconDwnld = document.createElement("img");
    iconDwnld.src = "images/icons/icon-download.svg";
    const iconexp = document.createElement("img");
    iconexp.src = "images/icons/icon-max-normal.svg";

    const gifoFav = document.createElement('span');
    gifoFav.classList.add('gifoFav');
    gifoFav.setAttribute("onclick","gifoFavoritoSearch("+(cont)+")");
    const gifoDwnld = document.createElement('span');
    gifoDwnld.classList.add('gifoDwnld');
    const gifoExp = document.createElement('span');
    gifoExp.classList.add('gifoExp');
    gifoExp.setAttribute("onclick","openModal2("+(cont)+")");

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
    gifoUser.innerHTML= images.data[index].username;
    const gifoTitle = document.createElement('h4');
    gifoTitle.innerHTML= images.data[index].title;
    gifoTitle.classList.add('gifoTitle');

    gifoFav.appendChild(iconfav);
    gifoDwnld.appendChild(iconDwnld);
    gifoExp.appendChild(iconexp);

    gifoOverlayAct.appendChild(gifoFav);
    gifoOverlayAct.appendChild(gifoDwnld);
    gifoOverlayAct.appendChild(gifoExp);

    gifoOverlay.appendChild(gifoOverlayAct);
    gifoOverlay.appendChild(gifoUser);
    gifoOverlay.appendChild(gifoTitle);

    gifoContainer.appendChild(gifo);

    gifoCard.appendChild(gifoContainer);
    gifoCard.appendChild(gifoOverlay);

    document.getElementById("searchResult").appendChild(gifoCard);


    //VER MAS BOTON

    if((12 - index) == 1){
      document.getElementById("verMasCont").innerHTML = '';
      const verMasBtn = document.createElement("button");
      verMasBtn.innerHTML = 'Ver más';
      verMasBtn.classList.add("verMasBtn");
      document.getElementById("verMasCont").appendChild(verMasBtn);


      const vermasbutton = document.getElementsByClassName('verMasBtn')[0];
      vermasbutton.addEventListener("click", async () => {
        offset += limit + 1;
        const images = await searchEndpoint(busqueda, offset);
        createImages(images);
      });

    }

    // SEARCH CARD MODALS

    const searchCard = document.createElement('div');
    searchCard.classList.add('searchCard');
    const imgExpandidaDet = document.createElement('div');
    imgExpandidaDet.classList.add('imgExpandidaDet');
    const imgExpandidaInfo = document.createElement('div');
    imgExpandidaInfo.classList.add('imgExpandidaInfo');
    const imgExpandidaAct = document.createElement('div');
    imgExpandidaAct.classList.add('imgExpandidaAct');

    const imgExpandida = document.createElement('img');
    imgExpandida.src = images.data[index].images.original.url;
    imgExpandida.classList.add('imgExpandida');
    const imgExpFav = document.createElement('img');
    imgExpFav.src = "images/icons/icon-fav.svg";
    const imgExpDwnld = document.createElement('img');
    imgExpDwnld.src = "images/icons/icon-download.svg";

    const imgExpGifoFav = document.createElement('span');
    imgExpGifoFav.classList.add('imgExpGifoFav');
    imgExpGifoFav.setAttribute("onclick","gifoFavoritoSearch("+(cont)+")");
    const imgExpGifoDwld = document.createElement('span');
    imgExpGifoDwld.classList.add('imgExpGifoDwld');

    const imgExpandidaUser = document.createElement('h5');
    imgExpandidaUser.classList.add('imgExpandidaUser');
    imgExpandidaUser.innerHTML = images.data[index].username;
    const imgExpandidaTitle = document.createElement('h4');
    imgExpandidaTitle.classList.add('imgExpandidaTitle');
    imgExpandidaTitle.innerHTML= images.data[index].title;


    imgExpGifoFav.appendChild(imgExpFav);
    imgExpGifoDwld.appendChild(imgExpDwnld);

    imgExpandidaAct.appendChild(imgExpGifoFav);
    imgExpandidaAct.appendChild(imgExpGifoDwld);

    imgExpandidaInfo.appendChild(imgExpandidaUser);
    imgExpandidaInfo.appendChild(imgExpandidaTitle);

    imgExpandidaDet.appendChild(imgExpandidaInfo);
    imgExpandidaDet.appendChild(imgExpandidaAct);

    searchCard.appendChild(imgExpandida);
    searchCard.appendChild(imgExpandidaDet);


    document.getElementsByClassName("modal-content2")[0].appendChild(searchCard);

    cont++;

  }


  // SIN RESULTADO


  if (images.data.length == 0){
    document.getElementById("searchResult").innerHTML = '';
    const nores = document.createElement("div");
    const noresImg = document.createElement("img");
    const noresTxt = document.createElement("h4");
    noresImg.src = 'images/icons/icon-busqueda-sin-resultado.svg';
    noresTxt.innerHTML = 'Intenta con otra búsqueda.';
    nores.appendChild(noresImg);
    nores.appendChild(noresTxt);
    nores.classList.add("noResult");
    document.getElementById("searchResult").appendChild(nores);
  }

};


// GIFO FAVORITO


function gifoFavoritoSearch(n){
  localStorage.setItem('favoritoSearch'+n, JSON.stringify(favs2[n]));
}



// BOTON DE BUSQUEDA  

const button = document.getElementsByClassName('searchBtn')[0];
button.addEventListener("click", async () => {
  offset += limit + 1;
  let texto = document.getElementsByClassName('searchBox')[0].value;
  busqueda = texto;
  document.getElementById("searchResult").innerHTML = '';
  document.getElementById("verMasCont").innerHTML = '';
  document.getElementsByClassName("modal-content2")[0].innerHTML = '';
  const images = await searchEndpoint(texto, offset);
  createImages(images);
});





  // MODAL

  function openModal2(a){
    document.getElementById("modal2").style.display = "block";
    showSearch(a);
  }

  function closeModal2() {
    document.getElementById("modal2").style.display = "none";
  }


  function showSearch(n) {
    
    var searchCard = document.getElementsByClassName("searchCard");

    for (var i = 0; i < searchCard.length; i++) {
    searchCard[i].style.display = "none";
    }

    searchCard[n].style.display = "flex";
  }


  