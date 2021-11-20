window.addEventListener('load', function(){

let favoritos = [];

if (localStorage.getItem('favoritosToStringPeliculas')!=null) {
    
    favoritos = JSON.parse(this.localStorage.getItem('favoritosToStringPeliculas'));
    console.log(favoritos);

    for(let i = 0; i < favoritos.length; i++){

        console.log(favoritos[i]);

        fetch(`https://api.themoviedb.org/3/movie/${favoritos[i]}?api_key=f2acabc2f1f7dfa29f6493c2fcca003f&language=es`)
            .then(function(response){
                return response.json();
            })
            .then(function(datos){

                console.log(datos);

                document.querySelector('.peliculas-populares').innerHTML += `
                    <article>
                        <div>
                            <img src="https://image.tmdb.org/t/p/w342${datos.poster_path}" alt="pelicula">
                        </div>
                        <h5>${datos.title}</h5>
                        <p>26/04/2019</p>
                        <a href="detallepelicula.html?id=${datos.id}">Ver más información</a>
                    </article>
                `;
            })
            .catch(function(error){
                console.log(`El error fue: ${error}`);
            })
    }
}else{

    document.querySelector('.peliculas-populares').innerHTML = `
    <article>
        <h3>No tienes peliculas populares en favoritos en este momento</h3>
    </article>
    `;
}

if (localStorage.getItem('favoritosToStringSeries')!=null) {
    
    favoritos = JSON.parse(this.localStorage.getItem('favoritosToStringSeries'));
    console.log(favoritos);

    for(let i = 0; i < favoritos.length; i++){

        console.log(favoritos[i]);

        fetch(`https://api.themoviedb.org/3/tv/${favoritos[i]}?api_key=f2acabc2f1f7dfa29f6493c2fcca003f&language=es`)
            .then(function(response){
                return response.json();
            })
            .then(function(datos){

                console.log(datos);

                document.querySelector('.series-populares').innerHTML += `
                    <article>
                        <div>
                            <img src="https://image.tmdb.org/t/p/w342${datos.poster_path}" alt="pelicula">
                        </div>
                        <h5>${datos.original_name}</h5>
                        <p>26/04/2019</p>
                        <a href="detalleserie.html?id=${datos.id}">Ver más información</a>
                    </article>
                `;
            })
            .catch(function(error){
                console.log(`El error fue: ${error}`);
            })
    }
}else{

    document.querySelector('.series-populares').innerHTML = `
    <article>
        <h3>No tienes series en favoritos en este momento</h3>
    </article>
    `;
}

if (localStorage.getItem('favoritosToStringPeliculasValoradas')!=null) {
    
    favoritos = JSON.parse(this.localStorage.getItem('favoritosToStringPeliculasValoradas'));
    console.log(favoritos);

    for(let i = 0; i < favoritos.length; i++){

        console.log(favoritos[i]);

        fetch(`https://api.themoviedb.org/3/movie/top_rated${favoritos[i]}?api_key=f2acabc2f1f7dfa29f6493c2fcca003f&language=es`)
            .then(function(response){
                return response.json();
            })
            .then(function(datos){

                console.log(datos);

                document.querySelector('.peliculas-valoradas').innerHTML += `
                    <article>
                        <div>
                            <img src="https://image.tmdb.org/t/p/w342${datos.poster_path}" alt="pelicula">
                        </div>
                        <h5>${datos.original_title}</h5>
                        <p>26/04/2019</p>
                        <a href="detallepelicula.html?id=${datos.id}">Ver más información</a>
                    </article>
                `;
            })
            .catch(function(error){
                console.log(`El error fue: ${error}`);
            })
    }
}else{

    document.querySelector('.peliculas-valoradas').innerHTML = `
    <article>
        <h3>No tienes peliculas valoradas en favoritos en este momento</h3>
    </article>
    `;
}


})