    // TRENDING GIFOS

    const apiKey1= 'f7Vi6MThkVsup5hqnFvUaOhAlxZ7RAtg'
    const trendingGifosReq = 'https://api.giphy.com/v1/gifs/trending?api_key='+apiKey1; 

    
    fetch(trendingGifosReq, {
        method: 'GET'
    })
    .then(response => response.json())
    .then(result => {
        for (i = 0; i < 5; i++){


            const gifo = document.getElementsByClassName('gifo')[i];
            const gifoExp = document.getElementsByClassName('imgExpandida')[i];
            gifo.src = result.data[i].images.fixed_height.url;
            gifoExp.src = result.data[i].images.original.url;

            const gifoUser = document.getElementsByClassName('gifoUser')[i];
            const imgExpandidaUser = document.getElementsByClassName('imgExpandidaUser')[i];
            gifoUser.innerHTML= result.data[i].username;
            imgExpandidaUser.innerHTML= result.data[i].username;

            const gifoTitle = document.getElementsByClassName('gifoTitle')[i];
            const imgExpandidaTitle = document.getElementsByClassName('imgExpandidaTitle')[i];
            gifoTitle.innerHTML= result.data[i].title;
            imgExpandidaTitle.innerHTML= result.data[i].title;

        }
    })
    .catch(error => console.log('error', error)); 