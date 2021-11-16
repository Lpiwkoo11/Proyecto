// fetch

fetch(`https://api.themoviedb.org/3/movie/550?api_key=f2acabc2f1f7dfa29f6493c2fcca003f`)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){

        console.log(datos.genres);

        for(let i = 0; i < datos.genres.lenght; i++){
            document.querySelector('.peliculas-populares').innerHTML += `
            <article>
                <div>
                    <img src="${datos.genres[i].poster_path}" alt="pelicula">
                </div>
                <h5>The Avengers</h5>
                <p>26/04/2019</p>
            </article>
            <article>
                <div>
                    <img src="img/peliculas populares/elrenacido.jpg" alt="pelicula">
                </div>
                <h5>El renacido</h5>
                <p>22/08/2018</p>
            </article>
            <article>
                <a href="./detallepelicula.html">
                    <div> 
                        <img src="img/peliculas populares/parasite.jpg" alt="pelicula">
                    </div>
                    <h5>Parasite</h5>
                    <p>2/02/2020</p>
                </a>
            </article>
            <article>
                <div>
                    <img src="img/peliculas populares/rapidosyfuriosos7.jpg" alt="pelicula">
                </div>
                <h5>Rapidos y Furiosos 7</h5>
                <p>22/08/2018</p>
            </article>
            <article >
                <div>
                    <img src="img/peliculas populares/thepurge1.jpg" alt="pelicula">
                </div>
                <h5>The Purge</h5>
                <p>2/02/2020</p>
            </article>
            `;
        }
    })


















