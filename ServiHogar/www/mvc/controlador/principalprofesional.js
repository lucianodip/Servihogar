var nombre = "";

document.getElementById('nbbarra').style.backgroundColor="#000000";
document.getElementById('tbbarra').style.backgroundColor="#000000";
document.getElementById('btsalir').style.marginLeft="auto";

function cargarDatos() {
    nombre = getParameterByName('username');
}

$('#btsalir').click(btsalir);
function btsalir(){
    navigator.app.exitApp();
}



$('#btContrataciones').click(contrataciones);
function contrataciones() {
    alert("entre a la funcion");
    window.location.href='../vista/contratacionesProf.html?nombre=' + nombre;
    //return false;
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}