fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=f2acabc2f1f7dfa29f6493c2fcca003f`)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){

        console.log(datos.results);

        for(let i = 0; i < 5; i++){
            document.querySelector('.generos-peliculas').innerHTML += `

            <article class="peliculas-art">
                <div class="peliculas-div">
                    <img src="https://image.tmdb.org/t/p/w342${datos.results[i].poster_path}" alt="imagen comedia">
                </div>
                    <a href="detalledelgenero.html?=${datos.results[i].id}">Comedia</a>
            </article>

            <article class="peliculas-art">
                <div class="peliculas-div">
                    <img src="https://image.tmdb.org/t/p/w342${datos.results[i].poster_path}" alt="imagen suspenso">
                </div>
                    <a href="detalledelgenero.html?=${datos.results[i].id}">Suspenso</a>
            </article>

            <article class="peliculas-art">
                <div class="peliculas-div">
                    <img src="https://image.tmdb.org/t/p/w342${datos.results[i].poster_path}" alt="imagen ficción">
                </div>
                    <a href="detalledelgenero.html?=${datos.results[i].id}">Drama</a>
            </article>

            `;
        };
        
    })
    .catch(function(error){
        console.log("error:" + error);
    })