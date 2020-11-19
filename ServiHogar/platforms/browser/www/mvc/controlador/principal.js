document.getElementById('nbbarra').style.backgroundColor="#000000";
document.getElementById('tbbarra').style.backgroundColor="#000000";
document.getElementById('btsalir').style.marginLeft="auto";
document.getElementById('pcimagenes').align="center";

$('#btsalir').click(btsalir);
function btsalir(){
 navigator.app.exitApp();
 }

$('#servicio').click(servicio);
 function servicio(){
 window.location.href='../vista/servicios.html';
 }

$('#inicio').click(inicio);
 function inicio(){
 window.location.href='../vista/principal.html';
 }

$('#perfil').click(perfil);
 function perfil(){
 window.location.href='../vista/principalperfil.html';
 }

 $('#mensajes').click(mensajes);
 function mensajes(){
 window.location.href='../vista/mensajes.html';
 }

 $('#configuraciones').click(configuraciones);
 function configuraciones(){
 window.location.href='../vista/configuraciones.html';
 }
