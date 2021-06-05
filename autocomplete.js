    //AUTOCOMPLETE

    const apiKey8= 'DvXspQNW16DQZwZ7HNMM2CUYkkHBiXHO';
    const searchInput = document.getElementById('search');
    const searchWrapper = document.querySelector('.wrapper');
    const resultsWrapper = document.querySelector('.results');
    let mainbanner = document.getElementsByClassName('mainbanner')[0];


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
            return `<li class="listItem" onclick="searchTerm(${index})">${item}</li>`;
        })
        .join('');
    
        searchWrapper.classList.add('show');
        resultsWrapper.innerHTML = `<ul>${content}</ul>`;
    }
    