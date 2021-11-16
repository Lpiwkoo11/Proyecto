window.addEventListener('load', function(){

// Array para almacenar ids de favoritos


// Acceder a la Query String
let queryString = location.search;
let objetoQueryString = new URLSearchParams(queryString);
let id = objetoQueryString.get('id');
console.log(id);

// Fetch
fetch(`https://developers.themoviedb.org/3/movies/get-movie-details${id}?api_key=f2acabc2f1f7dfa29f6493c2fcca003f`)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){

        console.log(datos);

        document.querySelector('main').innerHTML = `
            <article>
                <div>
                <img src="https://image.tmdb.org/t/p/w342${datos.results.poster_path}" alt="pelicula">
                </div>
                <h5>${datos.results.title}</h5>
                <p>${datos.results.release_date}</p>
                <p>${datos.results.id}</p>
            </article>
        `;
    })
    .catch(function(error){
        console.log("error:" + error);
    })



























})