var username = "";

document.getElementById('nbbarra').style.backgroundColor="#000000";
document.getElementById('tbbarra').style.backgroundColor="#000000";
document.getElementById('btsalir').style.marginLeft="auto";

document.getElementById('pcimagenes').align="center";

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

function electricistas() {
    window.location.href='electricista.html?username=' + username;
}

function albaniles() {
    window.location.href='albanil.html?username=' + username;
}

function plomeros() {
    window.location.href='plomero.html?username=' + username;
}

function pintores() {
    window.location.href='pintor.html?username=' + username;
}



