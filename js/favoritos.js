window.addEventListener('load', function(){

let favoritos = [];

if (localStorage.getItem('favoritosToString')!=null) {
    
    favoritos = JSON.parse(this.localStorage.getItem('favoritosToString'));
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
                        <a href="detallepelicula.html?idGif=${datos.id}">Ver más información</a>
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
        <h3>No tienes gifs en favoritos en este momento</h3>
    </article>
    `;
}

})