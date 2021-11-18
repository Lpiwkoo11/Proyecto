let queryString = location.search;
    let objetoQueryString = new URLSearchParams(queryString);
    let busqueda = objetoQueryString.get('.Comedia');
    console.log(Comedia);

fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=20342717cddddd7790a3d41e00d1854d`)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){

        console.log(datos.results);

        for(let i = 0; i < 5; i++){
            document.querySelector('.Comedia').innerHTML += `
            <article>
                <div>
                <img src="https://image.tmdb.org/t/p/w342${datos.results[i].poster_path}" alt="pelicula">
                </div>
                <h5>${datos.results[i].title}</h5>
                <a href="detallepelicula.html?id=${datos.results[i].id}">Ver mas informacion</a>
            </article>
            `;
        };
    })

    fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=20342717cddddd7790a3d41e00d1854d`)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){

        console.log(datos.results);

        for(let i = 0; i < 5; i++){
            document.querySelector('.Comedia').innerHTML += `
            <article>
                <div>
                <img src="https://image.tmdb.org/t/p/w342${datos.results[i].poster_path}" alt="pelicula">
                </div>
                <h5>${datos.results[i].title}</h5>
                <a href="detallepelicula.html?id=${datos.results[i].id}">Ver mas informacion</a>
            </article>
            `;
        };
    })

    .catch(function(error){
        console.log("error:" + error);
    })

