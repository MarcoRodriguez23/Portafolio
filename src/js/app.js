document.addEventListener('DOMContentLoaded',function(){
    iniciarApp();
});

function iniciarApp(){
    eventListeners();
    scrollNav()
    carrousel();
}
// funcion para poder utilizar el icono de menu movil y poder ver las opciones del navegador
// APROBADO
function eventListeners(){
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.addEventListener('click',navegacionResponsive);
}
//funcion que permite ocultar o mostrar las opciones
// APROBADO
function navegacionResponsive(){
    const navegacion = document.querySelector('.navegacion');
    
    if(navegacion.classList.contains('mostrar')){
        navegacion.classList.remove('mostrar');
    }
    else{
        navegacion.classList.add('mostrar');
    }
}

function scrollNav(){
    const enlaces = document.querySelectorAll('.navegacion a');

    enlaces.forEach(function(enlace){
        enlace.addEventListener('click',function(e){
            e.preventDefault();

            const seccion = document.querySelector(e.target.attributes.href.value);

            seccion.scrollIntoView({
                behavior: 'smooth',
            });
        });
    });
}

function carrousel(){
    const carrouseles = document.querySelectorAll('.owl-carousel');

    carrouseles.forEach(element => {
        $(element).owlCarousel({
            loop:false,
            margin:10,
            nav:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:3
                }
            }
        })
    });
    
}