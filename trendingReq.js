    // TRENDING GIFOS

    const apiKey1= 'f7Vi6MThkVsup5hqnFvUaOhAlxZ7RAtg'
    const trendingGifosReq = 'http://api.giphy.com/v1/gifs/trending?api_key='+apiKey1; 

    
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
            gifo.src = result.data[i].url;
            gifoContainer.appendChild(gifo);

            const gifoOverlay = document.createElement("div");
            gifoOverlay.classList.add("gifoOverlay");
            const gifoUser = document.createElement("h5");
            gifoUser.classList.add("gifoUser");
            gifoUser.innerHTML= result.data[i].username;
            const gifoTitle = document.createElement("h4");
            gifoTitle.classList.add("gifoTitle");
            gifoTitle.innerHTML= result.data[i].title;
            gifoOverlay.appendChild(gifoUser);
            gifoOverlay.appendChild(gifoTitle);

            trendingGifoCard.appendChild(gifoContainer);
            trendingGifoCard.appendChild(gifoOverlay);
            trendingSliderCont.appendChild(trendingGifoCard);

            //document.getElementByClassName("gifo").src = result.data[i].url;

        }
    })
    .catch(error => console.log('error', error)); 