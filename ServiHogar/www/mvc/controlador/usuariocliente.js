$('#btRegistrarse').click(Registrarse);
function Registrarse(){
		
	var inUsername = $('#Username');
	var username = inUsername.val().trim();
	inUsername.val(username);

	var inPassword = $('#Password');
	var password = inPassword.val().trim();
	inPassword.val(password);

	var inNombre = $('#Nombre');
	var nombre = inNombre.val().trim();
	inNombre.val(nombre);

	var inSexo = $('#Sexo');
	var sexo = inSexo.val().trim();
	inSexo.val(sexo);

	var inDireccion = $('#Direccion');
	var direccion = inDireccion.val().trim();
	inDireccion.val(direccion);

	var inFechaNac = $('#FechaNac');
	var fechanac = inFechaNac.val().trim();
	inFechaNac.val(fechanac);

	var res_agregar = agregar_usu(username, password, nombre, sexo, direccion, fechanac);
	if (res_agregar == "2") {
		alert("Usuario creado con éxito");
		window.location.href='../vista/principal.html';	
		return false;
	} else {
		alert ("Ingreso incorrecto");
	}
}
