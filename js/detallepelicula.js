window.addEventListener('load', function(){

// Array para almacenar ids de favoritos
let favoritos = [];

// Acceder a la Query String
let queryString = location.search;
let objetoQueryString = new URLSearchParams(queryString);
let id = objetoQueryString.get('id');
console.log(id);

// Fetch
// Peliculas populares

fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f2acabc2f1f7dfa29f6493c2fcca003f&language=es`)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){

        console.log(datos);

        document.querySelector('main').innerHTML = `
            <article>
                <div class="foto-pelicula-popular">
                <img src="https://image.tmdb.org/t/p/w342${datos.poster_path}" alt="pelicula">
                </div>
                <h5>${datos.title}</h5>
                <p>${datos.release_date}</p>
                <p>${datos.id}</p>
                <button class="fav">Agregar a favoritos</button>
            </article>
        `;

        // selector del boton favoritos
        let buttonFav = document.querySelector('.fav');

        // localStorage

        if(localStorage.getItem('favoritosToStringPeliculas')!=null){
            favoritos = JSON.parse(localStorage.getItem('favoritosToStringPeliculas'));
            if(favoritos.includes(id)) {
                buttonFav.innerHTML = `Remover de favoritos`;
            }else{
                buttonFav.innerHTML = `Agregar a favoritos`;
            }
        }

        // Evento del boton agregar/remover favorito

        buttonFav.addEventListener('click', function(e){

            // e.preventDefault(); En caso de ser un hipervinculo (etiquetas <a href="">Enlace</a>)

            if (favoritos.includes(id)){
                favoritos.splice(favoritos.indexOf(id),1);
                buttonFav.innerHTML = `Agregar a favoritos`;
            }else{
                favoritos.push(id);
                buttonFav.innerHTML = `Remover a favoritos`;
            }

            localStorage.setItem('favoritosToStringPeliculas', JSON.stringify(favoritos));
            console.log(localStorage);
        })
    })
    .catch(function(error){
        console.log("error:" + error);
    })

// peliculas valoradas

fetch(`https://api.themoviedb.org/3/movie/top_rated${id}?api_key=f2acabc2f1f7dfa29f6493c2fcca003f`)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){

        console.log(datos.results);

        
            document.querySelector('.peliculas-valoradas').innerHTML += `
            <article>
                <div>
                <img src="https://image.tmdb.org/t/p/w342${datos.results[i].poster_path}" alt="pelicula">
                </div>
                <h5>${datos.results[i].original_title}</h5>
                <p>${datos.results[i].release_date}</p>
                <a href="detallepelicula.html?id=${datos.results[i].id}">Ver mas informacion</a>
            </article>
        `;
        
        // selector del boton favoritos
        let buttonFav = document.querySelector('.fav');

        // localStorage

        if(localStorage.getItem('favoritosToStringPeliculasValoradas')!=null){
            favoritos = JSON.parse(localStorage.getItem('favoritosToStringPeliculasValoradas'));
            if(favoritos.includes(id)) {
                buttonFav.innerHTML = `Remover de favoritos`;
            }else{
                buttonFav.innerHTML = `Agregar a favoritos`;
            }
        }

        // Evento del boton agregar/remover favorito

        buttonFav.addEventListener('click', function(e){

            // e.preventDefault(); En caso de ser un hipervinculo (etiquetas <a href="">Enlace</a>)

            if (favoritos.includes(id)){
                favoritos.splice(favoritos.indexOf(id),1);
                buttonFav.innerHTML = `Agregar a favoritos`;
            }else{
                favoritos.push(id);
                buttonFav.innerHTML = `Remover a favoritos`;
            }

            localStorage.setItem('favoritosToStringPeliculasValoradas', JSON.stringify(favoritos));
            console.log(localStorage);
        })
    })
    .catch(function(error){
        console.log("error:" + error);
    })


    



})