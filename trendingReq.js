    // TRENDING GIFOS

    const apiKey1= 'f7Vi6MThkVsup5hqnFvUaOhAlxZ7RAtg'
    const trendingGifosReq = 'https://api.giphy.com/v1/gifs/trending?api_key='+apiKey1; 

    let favs = [];
    let cont2 = 0;
        
    fetch(trendingGifosReq, {
        method: 'GET'
    })
    .then(response => response.json())
    .then(result => {
        for (i = 0; i < 5; i++){

      
            let favorito = {
                gifo: '',
                username: '',
                title: ''
            }

            favs.push(favorito);

            favs[cont2].gifo = result.data[i].images.fixed_height.url;
            favs[cont2].original = result.data[i].images.original.url;
            favs[cont2].username = result.data[i].username;
            favs[cont2].title = result.data[i].title;


            // TRENDING CARDS

            const gifo = document.createElement("img");
            gifo.classList.add('gifo');
            gifo.src = result.data[i].images.fixed_height.url;

            const iconfav = document.createElement("img");
            iconfav.src = "images/icons/icon-fav.svg";
            iconfav.classList.add('favoriteIcon');
            const iconDwnld = document.createElement("img");
            iconDwnld.src = "images/icons/icon-download.svg";
            iconDwnld.classList.add('downloadIcon');
            const iconexp = document.createElement("img");
            iconexp.src = "images/icons/icon-max-normal.svg";
            iconexp.classList.add('expandIcon');

            const gifoFav = document.createElement('span');
            gifoFav.classList.add('gifoFav');
            gifoFav.setAttribute("onclick","gifoFavoritoTrending("+(cont2)+")");
            const gifoDwnld = document.createElement('a');
            gifoDwnld.classList.add('gifoDwnld');
            gifoDwnld.download = 'gifoDownload.gif';
            const gifoExp = document.createElement('span');
            gifoExp.classList.add('gifoExp');
            gifoExp.setAttribute("onclick","openModal("+(cont2)+")");


            const gifoCardTrending = document.createElement('div');
            gifoCardTrending.classList.add('gifoCardTrending');
            const gifoContainer = document.createElement('div');
            gifoContainer.classList.add('gifoContainer');
            const gifoOverlay = document.createElement('div');
            gifoOverlay.classList.add('gifoOverlay');
            const gifoOverlayAct = document.createElement('div');
            gifoOverlayAct.classList.add('gifoOverlayAct');

            const gifoUser = document.createElement('h5');
            gifoUser.classList.add('gifoUser');
            gifoUser.innerHTML= result.data[i].username;
            const gifoTitle = document.createElement('h4');
            gifoTitle.innerHTML= result.data[i].title;
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

            gifoCardTrending.appendChild(gifoContainer);
            gifoCardTrending.appendChild(gifoOverlay);

            document.getElementById("trendingSliderCont").appendChild(gifoCardTrending);



            // TRENDING CARD MODALS

            const slides = document.createElement('div');
            slides.classList.add('slides');
            const imgExpandidaDet = document.createElement('div');
            imgExpandidaDet.classList.add('imgExpandidaDet');
            const imgExpandidaInfo = document.createElement('div');
            imgExpandidaInfo.classList.add('imgExpandidaInfo');
            const imgExpandidaAct = document.createElement('div');
            imgExpandidaAct.classList.add('imgExpandidaAct');

            const imgExpandida = document.createElement('img');
            imgExpandida.src = result.data[i].images.original.url;
            imgExpandida.classList.add('imgExpandida');


            const imgExpFav = document.createElement('img');
            imgExpFav.src = "images/icons/icon-fav.svg";
            imgExpFav.classList.add('favoriteIcon');
            const imgExpDwnld = document.createElement('img');
            imgExpDwnld.src = "images/icons/icon-download.svg";
            imgExpDwnld.classList.add('downloadIcon');

            const imgExpGifoFav = document.createElement('span');
            imgExpGifoFav.classList.add('imgExpGifoFav');
            imgExpGifoFav.setAttribute("onclick","gifoFavoritoTrending("+(cont2)+")");
            const imgExpGifoDwld = document.createElement('a');
            imgExpGifoDwld.classList.add('imgExpGifoDwld');
            imgExpGifoDwld.download = 'gifoDownload.gif';


            const imgExpandidaUser = document.createElement('h5');
            imgExpandidaUser.classList.add('imgExpandidaUser');
            imgExpandidaUser.innerHTML = result.data[i].username;
            const imgExpandidaTitle = document.createElement('h4');
            imgExpandidaTitle.classList.add('imgExpandidaTitle');
            imgExpandidaTitle.innerHTML= result.data[i].title;


            imgExpGifoFav.appendChild(imgExpFav);
            imgExpGifoDwld.appendChild(imgExpDwnld);

            imgExpandidaAct.appendChild(imgExpGifoFav);
            imgExpandidaAct.appendChild(imgExpGifoDwld);

            imgExpandidaInfo.appendChild(imgExpandidaUser);
            imgExpandidaInfo.appendChild(imgExpandidaTitle);

            imgExpandidaDet.appendChild(imgExpandidaInfo);
            imgExpandidaDet.appendChild(imgExpandidaAct);

            slides.appendChild(imgExpandida);
            slides.appendChild(imgExpandidaDet);


            document.getElementsByClassName("modal-content")[0].appendChild(slides);



            let url = fetch(result.data[i].images.original.url);
            url.then(response => response.blob())
            .then(result => { 
                const urlBlob = URL.createObjectURL(result);
                gifoDwnld.href = urlBlob;
                imgExpGifoDwld.href = urlBlob;
            });


            cont2++;

        }
    })
    .catch(error => console.log('error', error)); 



    // GIFO FAVORITO TRENDING
 
    function gifoFavoritoTrending(n){
        localStorage.setItem('favoritoTrending'+n, JSON.stringify(favs[n]));
    }




    // MODAL

    function openModal(a){
        document.getElementById("modal").style.display = "block";
        showSlides(a);
    }
    
    function closeModal() {
        document.getElementById("modal").style.display = "none";
    }
    
    
    function showSlides(n) {
        
        var slides = document.getElementsByClassName("slides");
    
        for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        }
    
        slides[n].style.display = "flex";
    }
