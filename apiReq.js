    //TRENDING TOPICS

    const apiKey= 'DvXspQNW16DQZwZ7HNMM2CUYkkHBiXHO';
    const trendingTopicsReq = 'https://api.giphy.com/v1/trending/searches?api_key='+apiKey; 


    fetch(trendingTopicsReq)
    .then(response => response.json())
    .then(result => {
        for (i = 0; i < 4; i++){

            var trendingTopicsSec = document.getElementsByClassName('trendingTopics')[0];
            var trendingTopic = document.createElement("span");
            trendingTopicsSec.appendChild(trendingTopic);

            //COMAS
            if(i == 4){
                trendingTopic.innerHTML = result.data[i];
            } else{
                trendingTopic.innerHTML = result.data[i]+", ";
            }            

        }
    })
    .catch(error => console.log('error', error));
    

    