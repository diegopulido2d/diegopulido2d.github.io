    // TRENDING GIFOS

    const apiKey1= 'f7Vi6MThkVsup5hqnFvUaOhAlxZ7RAtg'
    const trendingGifosReq = 'https://api.giphy.com/v1/gifs/trending?api_key='+apiKey1; 

    
    fetch(trendingGifosReq, {
        method: 'GET'
    })
    .then(response => response.json())
    .then(result => {
        for (i = 0; i < 5; i++){

            const trendingSliderCont = document.getElementsByClassName('trendingSliderCont')[0];
            const trendingGifoCard = document.createElement("div");
            trendingGifoCard.classList.add("trendingGifoCard");

            const gifoContainer = document.createElement("div");
            gifoContainer.classList.add("gifoContainer");
            const gifo = document.createElement("img");
            gifo.classList.add("gifo");
            gifo.src = result.data[i].images.fixed_height.url;
            gifoContainer.appendChild(gifo);

            const gifoOverlay = document.createElement("div");
            gifoOverlay.classList.add("gifoOverlay");
            const gifoUser = document.createElement("h5");
            gifoUser.classList.add("gifoUser");
            gifoUser.innerHTML= result.data[i].username;
            const gifoTitle = document.createElement("h4");
            gifoTitle.classList.add("gifoTitle");
            gifoTitle.innerHTML= result.data[i].title;


            const gifoOverlayAct = document.createElement("div");
            gifoOverlayAct.classList.add("gifoOverlayAct");

            const gifoFav = document.createElement("a");
            const gifoFavImg = document.createElement("img");
            gifoFavImg.src = "images/icons/icon-fav.svg";
            gifoFav.appendChild(gifoFavImg);
            gifoFav.classList.add("gifoFav");

            const gifoDwnld = document.createElement("a");
            const gifoDwnldImg = document.createElement("img");
            gifoDwnldImg.src = "images/icons/icon-download.svg";
            gifoDwnld.appendChild(gifoDwnldImg);
            gifoDwnld.classList.add("gifoDwnld");

            const gifoExp = document.createElement("a");
            const gifoExpImg = document.createElement("img");
            gifoExpImg.src = "images/icons/icon-max-normal.svg";
            gifoExp.appendChild(gifoExpImg);
            gifoExp.classList.add("gifoExp");

            gifoOverlayAct.appendChild(gifoFav);
            gifoOverlayAct.appendChild(gifoDwnld);
            gifoOverlayAct.appendChild(gifoExp);

            gifoOverlay.appendChild(gifoOverlayAct);
            gifoOverlay.appendChild(gifoUser);
            gifoOverlay.appendChild(gifoTitle);

            trendingGifoCard.appendChild(gifoContainer);
            trendingGifoCard.appendChild(gifoOverlay);

            trendingSliderCont.appendChild(trendingGifoCard);

        }
    })
    .catch(error => console.log('error', error)); 