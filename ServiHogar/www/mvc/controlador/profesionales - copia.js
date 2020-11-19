var profe = "";
var username = "";

var arreglo_profesionales = new Array();

var li = document.getElementById('profesionales');

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

function cargarUsuario() {
    username = getParameterByName('username');
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function cargarDatos(profesion) {
    profe = profesion;
    cargarUsuario();
    seleccionarProfesionales();
    cargarProfesionales();
}

function seleccionarProfesionales() {
    var res_obtener_profesionales = obtenerTodosProfesionales(profe, arreglo_profesionales);

    if (res_obtener_profesionales != "2") {
		alert ("ERROR!!!!");
	} 
}

function cargarProfesionales() {	
    for (var i = 0; i < arreglo_profesionales.length; i++) {
        agregarProf(arreglo_profesionales[i].getNombre, arreglo_profesionales[i].getDireccion);
        }
}

function agregarProf(nombre, direccion) {
    var p = document.createElement("p");
    p.innerHTML = nombre;
	p.setAttribute("id","pname");
    li.appendChild(p);
    var p2 = document.createElement("p");
	p2.innerHTML = direccion; 
    li.appendChild(p2);
    var p3 = document.createElement("button");
    p3.setAttribute("id",nombre);
    p3.setAttribute("onclick","contratar(this.id)");
    p3.innerHTML = "Contratar";
    li.appendChild(p3);
}

function contratar(profesional){
    window.location.href='../vista/contratacionesUsuario.html?username=' + username + '&nombre=' + profesional;
}