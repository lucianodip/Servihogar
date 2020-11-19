var nombre = "";

var arreglo_contrataciones = new Array();

var li = document.getElementById('contrataciones');

document.getElementById('nbbarra').style.backgroundColor="#000000;"
document.getElementById('tbbarra').style.backgroundColor="#000000;"
document.getElementById('pcimagenes').align="center";


$('#servicios').click(servicios);
    function servicios(){
    window.location.href='../vista/servicios.html';
}

$('#inicio').click(inicio);
    function inicio(){
    window.location.href='../vista/principal.html';
}
function cargarContratacion() {
    obtenerNombre();
    seleccionarContrataciones();
    cargarContrataciones();
}

function seleccionarContrataciones() {
    var res_obtener_contrataciones = obtenerContrataciones(nombre, arreglo_contrataciones);

    if (res_obtener_contrataciones != "2") {
		alert ("ERROR!!!!");
	} 
}

function cargarContrataciones() {	
    for (var i = 0; i < arreglo_contrataciones.length; i++) {
        agregarProf(arreglo_contrataciones[i].getUsuario, arreglo_contrataciones[i].getDireccion, arreglo_contrataciones[i].getDescripcion, arreglo_contrataciones[i].getFecha);
        }
}

function agregarProf(nombre, direccion, descripcion, fecha) {
    var p = document.createElement("p");
    p.innerHTML = nombre;
    li.appendChild(p);
    var p2 = document.createElement("p");
	p2.innerHTML = direccion; 
    li.appendChild(p2);
    var p3 = document.createElement("p");
	p3.innerHTML = descripcion; 
    li.appendChild(p3);
    var p4 = document.createElement("p");
	p4.innerHTML = fecha; 
    li.appendChild(p4);
    p5 = document.createElement("button");
    p5.setAttribute("id","btnFinalizar");
    p5.innerHTML = "Finalizar";
    li.appendChild(p5);
}

function obtenerNombre() {
    nombre = getParameterByName('nombre');
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}