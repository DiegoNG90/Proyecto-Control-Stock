console.log("Index.js linkeado a index.html (INVENTARIO)");

const $cerrarSesion = document.querySelector('#cerrarSesion');

$cerrarSesion.onclick = function (e){
    e.preventDefault();
    localStorage.removeItem('LOGIN');
    window.location.href = "index.html";
}