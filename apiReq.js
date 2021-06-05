    //TRENDING TOPICS

    const apiKey= 'DvXspQNW16DQZwZ7HNMM2CUYkkHBiXHO';
    const trendingTopicsReq = 'https://api.giphy.com/v1/trending/searches?api_key='+apiKey;
    
    let trndgs = [];
    let bsqd = [];

    let fav = [];
    let cont9 = 0;


    //CREAR TRENDING TOPCS

    fetch(trendingTopicsReq)
    .then(response => response.json())
    .then(result => {
        for (i = 0; i < 5; i++){

            var trendingTopicsSec = document.getElementsByClassName('trendingTopics')[0];
            var trendingTopic = document.createElement("span");
            trendingTopic.setAttribute('onclick', 'searchTerm('+i+')');
            trendingTopicsSec.appendChild(trendingTopic);


            //COMAS
            if(i == 4){
                trendingTopic.innerHTML = result.data[i];
            } else{
                trendingTopic.innerHTML = result.data[i]+", ";
            }

            let nospace = encodeURIComponent((result.data[i]).trim());
            trndgs.push(nospace);
            bsqd.push(result.data[i]);
           

        }
    })
    .catch(error => console.log('error', error));




    //TRENDING TOPICS REQUEST



    function searchTerm(s) {

        document.getElementById("searchResult").style.display = 'flex';
        document.getElementById("searchTerm").style.display = 'inline';
        document.getElementById("verMasCont").style.display = 'inline';

        document.getElementById("searchResult").innerHTML = '';
        document.getElementById("searchTerm").innerHTML = '';
        document.getElementById("verMasCont").innerHTML = '';

        const searchTerm = document.createElement("h2");
        searchTerm.innerHTML = bsqd[s];
        document.getElementById("searchTerm").appendChild(searchTerm);

        document.getElementsByClassName("modal-content9")[0].innerHTML = '';

        const key= 'y98WtYPNJhbNhdf7rKQmng8kAOB9pwaU';
        const url = 'https://api.giphy.com/v1/gifs/search?api_key='+key+'&q='+trndgs[s];

        fetch(url)
        .then(response => response.json())
        .then(images => {

            for (index = 0; index < 12; index++){

            let favorito = {
              gifo: '',
              username: '',
              title: ''
          }

            fav.push(favorito);
            
            fav[cont9].gifo = images.data[index].images.fixed_height.url;
            fav[cont9].original = images.data[index].images.original.url;
            fav[cont9].username = images.data[index].username;
            fav[cont9].title = images.data[index].title; 



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
            gifoFav.setAttribute("onclick","gifoTrendingTopic("+(cont9)+")");
            const gifoDwnld = document.createElement('span');
            gifoDwnld.classList.add('gifoDwnld');
            const gifoExp = document.createElement('span');
            gifoExp.classList.add('gifoExp');
            gifoExp.setAttribute("onclick","openModal9("+(index)+")");

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


            // SEARCH CARD MODALS

            const ttCard = document.createElement('div');
            ttCard.classList.add('ttCard');
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
            imgExpGifoFav.setAttribute("onclick","gifoTrendingTopic("+(cont9)+")");
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

            ttCard.appendChild(imgExpandida);
            ttCard.appendChild(imgExpandidaDet);


            document.getElementsByClassName("modal-content9")[0].appendChild(ttCard);

            cont9++;

            }

        });
        
    }


    // GIFO FAVORITO

    function gifoTrendingTopic(n){
      localStorage.setItem('favoritoTrendingTopic'+n, JSON.stringify(fav[n]));
    }



    // MODAL

  function openModal9(a){
    document.getElementById("modal9").style.display = "block";
    showTT(a);
  }

  function closeModal9() {
    document.getElementById("modal9").style.display = "none";
  }


  function showTT(n) {
    
    var ttCard = document.getElementsByClassName("ttCard");

    for (var i = 0; i < ttCard.length; i++) {
    ttCard[i].style.display = "none";
    }

    ttCard[n].style.display = "flex";
  }
    

    