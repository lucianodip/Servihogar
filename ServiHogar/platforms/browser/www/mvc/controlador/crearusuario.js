$('#retornar').click(retornar);
 function retornar(){
 history.back();
 }

$('#btIngresar').click(ingresar);
 function ingresar(){
 var inUsuario = $('#inUsuario');
 var usuario = inUsuario.val().trim();
	inUsuario.val(usuario);
 var inContrasena = $('#inContrasena');
 var contrasena = inContrasena.val().trim();
	inContrasena.val(contrasena);
 var res_validar_ingreso = validar_ingreso(usuario, contrasena);
 if (res_validar_ingreso == "1") {
	alert ("Ingreso incorrecto");
	} else {
		if (res_validar_ingreso == "2") {
			alert ("Es el primer ingreso");
		} else {
			if (res_validar_ingreso == "3") {
				alert ("Ingreso correcto!!!");
			} else {
				alert ("ERROR!!!!");
					}
			}
		}

	}
