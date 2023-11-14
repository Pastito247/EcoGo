//variables
var usuario = "";
var nombre = "";
var contra = "";


//Funciones
function guardarNombre(){
    contra = document.getElementById('pass').value;
    usuario = document.getElementById('user').value;
    var select = document.getElementById('tipo');
    var value = select.options[select.selectedIndex].value;
    console.log(value);
    if(usuario.length <= 0){
        alert("Rellene usuario");
    }else if(contra.length <= 0){
        alert("Rellene contraseña");
    }else if(value === "Seleccionar"){
        alert("seleccione tipo de usuario");
    }else{
        sessionStorage.setItem("nombre", usuario);
        sessionStorage.setItem("tipo", value);
        if(value === "Apoyo" || value === "Profesor"){
            window.location.href = 'lobbyProfe.html';
        }else{
            window.location.href = 'lobby.html'
        }
    }

};
