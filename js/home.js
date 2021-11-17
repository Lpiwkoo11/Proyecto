// fetch

// peliculas populares
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=f2acabc2f1f7dfa29f6493c2fcca003f`)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){

        console.log(datos.results);

        for(let i = 0; i < 5; i++){
            document.querySelector('.peliculas-populares').innerHTML += `
            <article>
                <div>
                <img src="https://image.tmdb.org/t/p/w342${datos.results[i].poster_path}" alt="pelicula">
                </div>
                <h5>${datos.results[i].title}</h5>
                <p>${datos.results[i].release_date}</p>
                <a href="detallepelicula.html?id=${datos.results[i].id}">Ver mas informacion</a>
            </article>
            `;
        };
    })
    .catch(function(error){
        console.log("error:" + error);
    })

// series populares
fetch(`https://api.themoviedb.org/3/tv/popular?api_key=f2acabc2f1f7dfa29f6493c2fcca003f`)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){

        console.log(datos.results);

        for(let i = 0; i < 5; i++){
            document.querySelector('.series-populares').innerHTML += `
            <article>
                <div>
                <img src="https://image.tmdb.org/t/p/w342${datos.results[i].poster_path}" alt="pelicula">
                </div>
                <h5>${datos.results[i].original_name}</h5>
                <p>${datos.results[i].first_air_date}</p>
                <a href="detalleserie.html?id=${datos.results[i].id}">Ver mas informacion</a>
            </article>
            `;
        };
    })
    .catch(function(error){
        console.log("error:" + error);
    })

// peliculas valoradas
fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=f2acabc2f1f7dfa29f6493c2fcca003f`)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){

        console.log(datos.results);

        for(let i = 0; i < 5; i++){
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
        };
    })
    .catch(function(error){
        console.log("error:" + error);
    })