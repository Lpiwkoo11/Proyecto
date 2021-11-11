window.addEventListener('load', function(){

// Array para almacenar ids de favoritos
let favoritos = [];

// Acceder a la Query String
let queryString = location.search;
let objetoQueryString = new URLSearchParams(queryString);
let id = objetoQueryString.get('id');
console.log(id);

// Fetch
fetch(`https://developers.themoviedb.org/3/movies/${id}?api_key=f2acabc2f1f7dfa29f6493c2fcca003fget-movie-details`)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos.genres);
        document.querySelector('main').innerHTML = `
        <article class="detalle-pelicula-art">
            <div class="Detalle-pelicula">
                <img src="https://image.tmdb.org/t/p/w342/"${datos.genres.poster_path} alt="Banner Parasite">
            </div>
        </article>
        <H1>Parasite</H1>
        <p>Calificacion: 4 Estrellas</p>
        <P>Fecha de Estreno: 9/10/2019</P>
        <p>Duración: 2h 12m</p>
        <p>La película sigue a una familia de clase baja de Corea del Sur que maneja astutos mecanismos de estafa para sobrevivir y que consigue la forma de que todos sus miembros trabajen para una familia acomodada de Seúl como tutores de los hijos, chofer y ama de llaves.</p>
        <a href="generos.html">
            <p class="pc">Género: Drama</p>
        </a>
        <form action="favoritos.html" method="GET">
        <button type="submit">Agregar a Favoritos</button>
        </form>
        `;
    })



























})