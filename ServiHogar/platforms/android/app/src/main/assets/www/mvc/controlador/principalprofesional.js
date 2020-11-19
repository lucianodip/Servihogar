document.getElementById('nbbarra').style.backgroundColor="#000000";
document.getElementById('tbbarra').style.backgroundColor="#000000";
document.getElementById('btsalir').style.marginLeft="auto";


$('#btsalir').click(btsalir);
function btsalir(){
 navigator.app.exitApp();
 }

