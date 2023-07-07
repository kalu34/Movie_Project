const Base_URL = "http://api.themoviedb.org/3/movie/";
const Popula_URL =
    "popular?api_key=4f298a53e552283bee957836a529baec";
const img_Base = 'https://image.tmdb.org/t/p/w500' 
const searcUrl = 'https://api.themoviedb.org/3/search/movie?api_key=4f298a53e552283bee957836a529baec&query='
const container = document.getElementById('container')

function getMovie(url) {
    container.innerHTML = " "
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            for (let i = 0; i < data.results.length - 10; i++) {
                const {title, overview, poster_path, vote_average} = data.results[i]
                const movieE1 =
                    document.createElement("div");
                movieE1.classList.add("movie-card");
                movieE1.innerHTML = ` 
            <img src="${img_Base + poster_path}" alt="Movie Image" class="movie_img">
            <h2 class="title">${title}</h2>
            <p class="des">${overview}</p>
            <p class="rating">${vote_average}</p>
            <button class="btn">Watch Now</button>`;

            container.append(movieE1)
            }
        });
}

document.querySelector(".form").addEventListener('submit', (e)=>{
    const searchText = document.getElementById("search_value").value
    console.log(searchText)
    e.preventDefault();

    container.innerHTML = " "
    if(!searchText){    
        getMovie(Base_URL + Popula_URL)
    }
    else{
        fetch(searcUrl + searchText)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            for (let i = 0; i < data.results.length; i++) {
                const {title, overview, poster_path, vote_average} = data.results[i]
                const movieE1 =
                    document.createElement("div");
                movieE1.classList.add("movie-card");
                movieE1.innerHTML = ` 
            <img src="${img_Base + poster_path}" alt="Movie Image" class="movie_img">
            <h2 class="title">${title}</h2>
            <p class="des">${overview}</p>
            <p class="rating">${vote_average}</p>
            <button class="btn">Watch Now</button>`;
            container.append(movieE1)
            }
        })
    }
})
getMovie(Base_URL + Popula_URL)
// For Awesom Layout
