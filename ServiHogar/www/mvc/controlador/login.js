$('#Nuevo').click(Nuevo);
function Nuevo(){
window.location.href='../vista/crearusuario - copia.html';
}

$('#btIngresar').click(Ingresar);
function Ingresar(){
	var inUsername = $('#Username');
	var username = inUsername.val().trim();
	inUsername.val(username);
	var inPassword = $('#Password');
	var password = inPassword.val().trim();
	inPassword.val(password);
	
	var res_validar_ingreso = validar_ingreso(username, password);	
	if (res_validar_ingreso == "2") {
		window.location.href='../vista/principal.html?username=' + username;
			return false;
		} 
	
	var res_validar_ingreso_prof = validar_ingreso_prof(username, password);
	if (res_validar_ingreso_prof == "2") {		
		window.location.href='../vista/principalprofesional.html?username=' + username;
			return false;
		} else {
			if(res_validar_ingreso_prof== "1"){
				alert("Usuario no encontrado");
			}
		}
	
}