document.addEventListener('DOMContentLoaded',function(){
    iniciarApp();
});

function iniciarApp(){
    eventListeners();
    
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

// function carrousel(){
//     const seleccion = document.querySelector('.carrousel-items');
//     if(seleccion){
//         new Glider(seleccion,{
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             dots: '#indicadores1',
//             arrows: {
//                 prev: '#anterior1',
//                 next: '#siguiente1'}
//         });
//     }
// }

// function mediosContacto(){
//     const imagenVista = [];
//     const tituloMedio=document.querySelector('#titulo-medio');
//     const textoMedio=document.querySelector('#texto-medio');
//     const enlaceMedio=document.querySelector('#enlace-medio');
//     setInterval(() => {
//         for (let $i = 0; $i <= 3; $i++) {
//             imagenVista[$i] = document.querySelector(`*[data-index="${$i}"]`);
//         }
//         if(imagenVista[0].classList.contains('active')){
//             tituloMedio.textContent='titulo 1';
//             textoMedio.textContent='texto 1';
//             enlaceMedio.textContent='enlace 1';
//             enlaceMedio.href='enlace 1';
//         }
//         if(imagenVista[1].classList.contains('active')){
//             tituloMedio.textContent='titulo 2';
//             textoMedio.textContent='texto 2';
//             enlaceMedio.textContent='enlace 2';
//             enlaceMedio.href='enlace 2';
//         }
//         if(imagenVista[2].classList.contains('active')){
//             tituloMedio.textContent='titulo 3';
//             textoMedio.textContent='texto 3';
//             enlaceMedio.textContent='enlace 3';
//             enlaceMedio.href='enlace 3';
//         }
//         if(imagenVista[3].classList.contains('active')){
//             tituloMedio.textContent='titulo 4';
//             textoMedio.textContent='texto 4';
//             enlaceMedio.textContent='enlace 4';
//             enlaceMedio.href='enlace 4';
//         }
//     }, 10);
    
// }