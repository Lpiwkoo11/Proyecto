window.addEventListener('load', function(){

// Array para almacenar ids de favoritos
let favoritos = [];

// Acceder a la Query String
let queryString = location.search;
let objetoQueryString = new URLSearchParams(queryString);
let id = objetoQueryString.get('id');
console.log(id);

// Fetch
fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f2acabc2f1f7dfa29f6493c2fcca003f`)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);
        document.querySelector('main').innerHTML = `
        
        `;
    })
    .catch(function(error){
        console.log("error:" + error);
    })



























})