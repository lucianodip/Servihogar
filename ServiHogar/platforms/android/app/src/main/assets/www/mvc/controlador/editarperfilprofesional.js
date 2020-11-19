document.getElementById('fondo').style.backgroundColor="#000000";


document.getElementById('pcimagenes').align="center";

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
 
  $('#btlogout').click(btlogout);
 function btlogout(){
 window.location.href='../vista/login - copia.html';
 }
 
 $('#btguardarc').click(btguardarc);
 function btguardarc(){
 alert ("Guardado con exito");
 }