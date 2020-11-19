var username = "";
var profesional = "";


$('#btContratar').click(Contratar);
function Contratar(){
	var inFecha = $('#fecha');
	var fecha = inFecha.val().trim();
	inFecha.val(fecha);

	var inDescripcion = $('#descripcion');
	var descripcion = inDescripcion.val().trim();
	inDescripcion.val(descripcion);
	
	var res_contratar = contratar(fecha, descripcion, username, profesional);
	if (res_contratar == "2") {
		alert("El profesional fue contratado");
		window.location.href='../vista/principal.html?username=' + username;
		return false;
	}else{
		alert("El profesional no está disponible en la fecha seleccionada");
	}
}

function cargarDatos() {
	username = getParameterByName('username');
	profesional = getParameterByName('nombre');
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}