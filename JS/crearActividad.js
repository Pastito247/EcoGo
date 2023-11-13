function cancelar() {
    // Puedes agregar aquí la lógica para cancelar la acción del formulario
    alert('Actividad cancelada');
    window.location.href = 'lobbyProfe.html'
}

function crear(){
    var select = document.getElementById('region');
    var region = select.options[select.selectedIndex].value;
    var cantidadPersonas = document.getElementById('cantidadPersonas').value;
    var profesorCargo = document.getElementById('profesorCargo').value;
    var profesorApoyo = document.getElementById('profesorApoyo').value;
    if(region === "none"){
        alert('Seleccione una Region');
    }else if(cantidadPersonas.length <= 0){
        alert('Seleccione cantidad de estudiantes');
    }else if (profesorApoyo.length <= 0 || profesorCargo.length <= 0){
        alert('Indique profesor faltante');
    }else{
        alert('Actividad Creada con Exito');
        window.location.href = 'lobbyProfe.html';
    }
}