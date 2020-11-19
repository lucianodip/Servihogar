document.getElementById('pcimagenes').align="center";
document.getElementById('fondo').style.backgroundColor="#000000";

$('#btsalir').click(btsalir);
function btsalir(){
 navigator.app.exitApp();
 }

$('#bteditarp').click(bteditarp);
 function bteditarp(){
 window.location.href='../vista/editarperfilprofesional.html';
 }

 $('#btlogout').click(btlogout);
 function btlogout(){
 window.location.href='../vista/login - copia.html';
 }

$('#inicio').click(inicio);
 function inicio(){
 window.location.href='../vista/principalprofesional.html';
 }

$('#perfil').click(perfil);
 function perfil(){
 window.location.href='../vista/principalperfilprofesional.html';
 }

 $('#mensajes').click(mensajes);
 function mensajes(){
 window.location.href='../vista/mensajesprofesional.html';
 }

 $('#configuraciones').click(configuraciones);
 function configuraciones(){
 window.location.href='../vista/configuracionesprofesional.html';
 }
