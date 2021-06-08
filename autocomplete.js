    //AUTOCOMPLETE

    const apiKey8= 'DvXspQNW16DQZwZ7HNMM2CUYkkHBiXHO';
    const searchInput = document.getElementById('search');
    const searchWrapper = document.querySelector('.wrapper');
    const resultsWrapper = document.querySelector('.results');
    let mainbanner = document.getElementsByClassName('mainbanner')[0];

    let sggstn = [];
    let favX = [];
    let contX = 0;


    function autocomp() {
    
            let busq = search.value;
            const autocompReq = 'https://api.giphy.com/v1/gifs/search/tags?api_key='+apiKey8+'&q='+busq; 
    
            fetch(autocompReq)
            .then(response => response.json())
            .then(result => {

                let resTags = [];
                let input = searchInput.value;
                
                var resultNames = Object.keys(result.data);
                var resultLength = resultNames.length;
                
                for (i = 0; i < resultLength; i++){
                     let resTag = result.data[i].name;
                     resTags.push(resTag);
                     sggstn = resTags;
                }       
                
                if (input.length) {
                    renderResults(resTags);
                }
                
            })
            .catch(error => console.log('error', error));

    }

    function closeSrch() {
        return searchWrapper.classList.remove('show');
    }

    
    function renderResults(results) {
        if (!results.length){
        return searchWrapper.classList.remove('show');
        }
    
        const content = results
        .map((item, index) => {
            return `<li class="listItem" onclick="searchSuggest(${index})">${item}</li>`;
        })
        .join('');
    
        searchWrapper.classList.add('show');
        resultsWrapper.innerHTML = `<ul>${content}</ul>`;
    }
    

    


    function searchSuggest(s) {

        document.getElementById("searchResult").style.display = 'flex';
        document.getElementById("searchTerm").style.display = 'inline';
        document.getElementById("verMasCont").style.display = 'inline';

        document.getElementById("searchResult").innerHTML = '';
        document.getElementById("searchTerm").innerHTML = '';
        document.getElementById("verMasCont").innerHTML = '';

        const searchTerm = document.createElement("h2");
        searchTerm.innerHTML = sggstn[s];
        document.getElementById("searchTerm").appendChild(searchTerm);

        document.getElementsByClassName("modal-contentX")[0].innerHTML = '';

        const key= 'y98WtYPNJhbNhdf7rKQmng8kAOB9pwaU';
        const url = 'https://api.giphy.com/v1/gifs/search?api_key='+key+'&q='+sggstn[s];

        fetch(url)
        .then(response => response.json())
        .then(images => {

            for (index = 0; index < 12; index++){

            let favorito = {
              gifo: '',
              username: '',
              title: ''
          }

            favX.push(favorito);
            
            favX[contX].gifo = images.data[index].images.fixed_height.url;
            favX[contX].original = images.data[index].images.original.url;
            favX[contX].username = images.data[index].username;
            favX[contX].title = images.data[index].title; 



            // SEARCH CARDS


            const gifo = document.createElement("img");
            gifo.classList.add('gifo');
            gifo.src = images.data[index].images.fixed_height.url;

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
            gifoFav.setAttribute("onclick","gifoSearchSuggest("+(contX)+")");
            const gifoDwnld = document.createElement('a');
            gifoDwnld.classList.add('gifoDwnld');
            gifoDwnld.download = 'gifoDownload.gif';
            const gifoExp = document.createElement('span');
            gifoExp.classList.add('gifoExp');
            gifoExp.setAttribute("onclick","openModalX("+(index)+")");

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

            const sggsCard = document.createElement('div');
            sggsCard.classList.add('sggsCard');
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
            imgExpFav.classList.add('favoriteIcon');
            const imgExpDwnld = document.createElement('img');
            imgExpDwnld.src = "images/icons/icon-download.svg";
            imgExpDwnld.classList.add('downloadIcon');

            const imgExpGifoFav = document.createElement('span');
            imgExpGifoFav.classList.add('imgExpGifoFav');
            imgExpGifoFav.setAttribute("onclick","gifoSearchSuggest("+(contX)+")");
            const imgExpGifoDwld = document.createElement('a');
            imgExpGifoDwld.classList.add('imgExpGifoDwld');
            imgExpGifoDwld.download = 'gifoDownload.gif';

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

            sggsCard.appendChild(imgExpandida);
            sggsCard.appendChild(imgExpandidaDet);


            document.getElementsByClassName("modal-contentX")[0].appendChild(sggsCard);



            let url = fetch(images.data[index].images.original.url);
            url.then(response => response.blob())
            .then(result => { 
                const urlBlob = URL.createObjectURL(result);
                gifoDwnld.href = urlBlob;
                imgExpGifoDwld.href = urlBlob;
            });



            contX++;

            }

        });
        
    }


    // GIFO FAVORITO

    function gifoSearchSuggest(n){
      localStorage.setItem('favoritoSearchSuggest'+n, JSON.stringify(favX[n]));
    }



    // MODAL

  function openModalX(a){
    document.getElementById("modalX").style.display = "block";
    showSGGS(a);
  }

  function closeModalX() {
    document.getElementById("modalX").style.display = "none";
  }


  function showSGGS(n) {
    
    var sggsCard = document.getElementsByClassName("sggsCard");

    for (var i = 0; i < sggsCard.length; i++) {
    sggsCard[i].style.display = "none";
    }

    sggsCard[n].style.display = "flex";
  }