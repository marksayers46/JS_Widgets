// TMDB API endpoints
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=30fac0aec5ce9a98ba1685ffe8714dea&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=30fac0aec5ce9a98ba1685ffe8714dea&query="'

const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

// Invoke getMovies to initially get movies
getMovies(API_URL)

// HTTP fetch API request/response
async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data.results)
    showMovies(data.results)
}

function showMovies(movies) {
    main.innerHTML = ''

    movies.forEach((movie) => {
        const { poster_path, title, vote_average, overview } = movie

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
                <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>
        `

        main.appendChild(movieEl)
    })
}

// Utility function for vote_average
function getClassByRate(vote) {
    if(vote >= 8) {
        return 'green'
    }else if(vote >= 5) {
        return 'orange'
    }else {
        return 'red'
    }
}

// Handling input search field
form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value
    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    }else {
        window.location.reload
    }
})













