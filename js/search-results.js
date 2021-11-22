window.addEventListener('load', function(){

    // Acceso Query String
    
    let queryString = location.search;
    let objetoQueryString = new URLSearchParams(queryString);
    let busqueda = objetoQueryString.get('Buscar');
    console.log(busqueda);
    
    // Fetch
    
    fetch(`https://api.themoviedb.org/3/search/multi?query=${busqueda}&api_key=8316164d28e6834ac04fce13a384de41`)
        .then(function(response){
            return response.json();
        })
        .then(function(datos){
            
            //gif
            //document.querySelector(`.gif`).innerHTML = `
            //<img src="">`



            // Sin resultado
            if(datos.results.length == 0) {
                document.querySelector('.articulo-buscado').innerHTML += `
                    <article>
                        <h5>No hay resultados</h5>`;
            }

            //Codigo
    
            for(let i = 0; i < 5; i++){
                document.querySelector('.articulo-buscado').innerHTML += `
                    <article>
                        <h5>${datos.results[i].original_title}</h5>
                        <div>
                        <img src="https://image.tmdb.org/t/p/w342${datos.results[i].poster_path}" alt="Imagen">
                        </div>
                        <a href="detalle.html?id=${datos.results[i].id}">Ver más información</a>
                    </article>
                `;
            }

            
    
        }).catch(function(error){
            console.log(`El error fue: ${error}`);
        })
    
    })

    


    