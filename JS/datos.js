var nombre = sessionStorage.getItem("nombre");
var tipo = sessionStorage.getItem("tipo");

window.onload = function(){
    var bienvenida = document.getElementById('welcome');
    console.log(bienvenida.innerHTML);
    bienvenida.innerHTML = "Bienvenido/a <br> "+ nombre;
}

function redirigir(){
    window.location.href = 'buceo.html';
}

function lobby(){
    console.log(tipo);
    if(tipo === "Alumno"){
        window.location.href = 'lobby.html';
    }else{
        window.location.href = 'lobbyProfe.html';
    }
}
