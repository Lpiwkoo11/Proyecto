window.addEventListener('load', function(){

    //Header Buscador
    
    let formulario = document.querySelector('.buscador');
    let campoBuscar = document.querySelector('[name=Buscar]');
    let mensaje = document.querySelector('.alerta');
    
    formulario.addEventListener('submit', function(event){
        event.preventDefault();
        if(campoBuscar.value == ""){    
            mensaje.innerText = 'Busqueda vacía';
        } else if (campoBuscar.value.length < 3){  
            mensaje.innerText = 'Ingrese al menos 3 caracteres';
        } else { 
            this.submit();
        }
        
    })
    
    //Limpia el contenido
    campoBuscar.addEventListener('input', function(){
        mensaje.innerText = "";
    })

    })