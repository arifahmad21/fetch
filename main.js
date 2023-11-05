let movie 
const input = document.querySelector('#search-button')

function onChangeSearch(searchParam){
    axios.get('http://www.omdbapi.com/?apikey=d684a20e&s=' + searchParam, {})

    .then(response => {
        const movies = response.data.Search
        let cards = '';
        for (const data of movies) {
            cards +=  `
        <div class="card">
        <img src="${data.Poster}"
            title="${data.Title}">
            <h1>${data.Title} (${data.Year}) </h1>
            <a href="#" id="detail">Show Detail</a>
        </div>
    `
        }
        const main = document.querySelector('#main');
        main.innerHTML = cards;
    })
    .catch (function(error) {
        console.log(error)
    })
}

input.addEventListener('click', function(){
    const inputKeyword = document.querySelector('#search')
    onChangeSearch(inputKeyword.value);
})