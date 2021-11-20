// Fetch
fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=f2acabc2f1f7dfa29f6493c2fcca003f&language=es?`)
   .then(function(response){
       return response.json();
   })
   .then(function(datos){
 
       console.log(datos.genres);
 
 
       for(let i = 0; i < 5; i++){
           document.querySelector('.generos-peliculas').innerHTML += `
 
           <article class="peliculas-art">
               <div class="peliculas-div">
               </div>
                   <a href="detalledelgenero.html?idGenero=${datos.genres[i].id}&genero=${datos.genres[i].name}">${datos.genres[i].name}</a>
           </article>
           `;
       };
   })

   .catch(function(error){
       console.log("error:" + error);
   })