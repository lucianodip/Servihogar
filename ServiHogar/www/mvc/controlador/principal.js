var username = "";

document.getElementById('nbbarra').style.backgroundColor="#000000";
document.getElementById('tbbarra').style.backgroundColor="#000000";
document.getElementById('btsalir').style.marginLeft="auto";

function cargarDatos() {
    username = getParameterByName('username');
}

$('#btsalir').click(btsalir);
function btsalir(){
    navigator.app.exitApp();
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function servicios() {
    window.location.href='servicios.html?username=' + username;
}
