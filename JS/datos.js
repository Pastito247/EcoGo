var nombre = sessionStorage.getItem("nombre");

window.onload = function(){
    var bienvenida = document.getElementById('welcome');
    console.log(bienvenida.innerHTML);
    bienvenida.innerHTML = "Welcome "+ nombre;
}