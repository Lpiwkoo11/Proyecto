window.addEventListener('load', function(){

    // Acceder a la Query String
    
    let queryString = location.search;
    let objetoQueryString = new URLSearchParams(queryString);
    let busqueda = objetoQueryString.get('.buscar');
    console.log(busqueda);
    
    // fetch
    
    fetch(`https://api.themoviedb.org/3/movie/550?api_key=8316164d28e6834ac04fce13a384de41`)
        .then(function(response){
            return response.json();
        }).then(function(datos){
            
            console.log(datos);
    
            for(let i = 0; i < datos.data.length; i++){
                document.querySelector('section').innerHTML += `
                    <article>
                        <h5>${datos.data[i].title}</h5>
                        <div><img src="${datos.data[i].images.original.url}" alt="Imagen"></div>
                        <a href="detalle.html?id=${datos.data[i].id}">Ver más información</a>
                    </article>
                `;
            }
    
        }).catch(function(error){
            console.log(`El error fue: ${error}`);
        })
    
    })