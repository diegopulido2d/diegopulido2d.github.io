//SEARCHBAR REQUEST

      
const endpoint_search = "https://api.giphy.com/v1/gifs/search";
const api_key = "6AZdbonZwDZz5GrFbGYYjcdUgZ6UwrPB";
let limit = 12;
let offset = 0;
let busqueda = '';

const searchEndpoint = async (q, offset) => {
  const data = await fetch(
    `${endpoint_search}?api_key=${api_key}&q=${q}&limit=${limit}&offset=${offset}`
  );
  const json = await data.json();
  return json;
};

const createImages = (images) => {
  for (let index = 0; index < images.data.length; index++) {

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
    const gifoDwnld = document.createElement('span');
    gifoDwnld.classList.add('gifoDwnld');
    const gifoExp = document.createElement('span');
    gifoExp.classList.add('gifoExp');

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

  }

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


const button = document.getElementsByClassName('searchBtn')[0];
button.addEventListener("click", async () => {
  offset += limit + 1;
  let texto = document.getElementsByClassName('searchBox')[0].value;
  busqueda = texto;
  document.getElementById("searchResult").innerHTML = '';
  document.getElementById("verMasCont").innerHTML = '';
  const images = await searchEndpoint(texto, offset);
  createImages(images);
});


