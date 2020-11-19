
// "DAO" destinada a contener todos los accesos a la tabla "Usuarios_Roles"
// del modelo. 
// No contiene el acceso real (query a la tabla) porque la base
// se encuentra en un servidor remoto, por lo tanto lo que hace
// es invocar mediante "ajax" a scripts php para cada accion a 
// realizar.


// Funcion destinada a obtener todos los roles asignados a un usuario x.
//
// Recibe como parametros el id del usuario para el que se solicitan los roles
// y el arreglo vacio disponible para ser completado.
//
// Retorna una "señal" con el resultado del acceso al servidor y el 
// mismo arreglo recibido como parametro con la informacion (si habia)
//
function leer_roles_por_usuario(idUsuario, arreglo_roles) {
//Define la variable para responder si encontro o no roles
//  Los valores posibles son "er" (error de conexion), "" (no habia roles),
//  "ok" (encontro roles)
	var resp_leer_roles = "";
	
//Arma el "post" para enviarlo por ajax
	var parametros = {
			"IdUsuario" : idUsuario,
	};
//Invoca a la url donde se encuentra el archivo "usuario_obtener_roles.php"
	$.ajax({
		data: parametros,
		type: 'post',
		dataType: 'json',
		async: false,
		url: 'https://iestsdsids2.000webhostapp.com/Usuarios/usuario_obtener_roles.php',
		success: function(respuesta) {
			respuestaRecibida(respuesta, arreglo_roles);
			resp_leer_roles = respuesta[0]['estado'];
		},
		error: function(jqXHR, textStatus, errorMessage) {
			respuestaNoRecibida(jqXHR, textStatus);
			resp_leer_roles = "er";				
		}
	});
	return resp_leer_roles;
}

//Funcion que se ejecuta si recibio respuesta del servidor, haya encontrado o no roles.
//
//Recibe como parametros la respuesta del servidor (formato json) y el arreglo donde
//debe cargar (con formato "DTO") cada uno de los roles recibidos	
//
function respuestaRecibida(respuesta, arreglo_roles){
//Recorre con un "for" la respuesta, crea para cada fila un "DTO",
//le asigna la informacion recibida y finalmente agrega el dto al arreglo
	for (i in respuesta) {
		var dtoUsuarioRol = new DtoUsuarioRol();
		dtoUsuarioRol.setIdUsuario = respuesta[i]['IdUsuario'];
		dtoUsuarioRol.setIdRol = respuesta[i]['IdRol'];
		dtoUsuarioRol.setRolDescripcion = respuesta[i]['RolDescrip'];
		dtoUsuarioRol.setRolNivel = respuesta[i]['RolNivel'];
		arreglo_roles[i] = dtoUsuarioRol;
	}	
}	

//Funcion que se ejecuta si NO pudo conectarse con el servidor (error de conexion).
//
//Recibe como parametros las respuestas ajax ante el intento de conexion	
//
function respuestaNoRecibida(jqXHR, textStatus){
//Informa el error, esto es solo de prueba, ya que se recuerda que el modelo
//no debe tener contacto con la vista	
	alert("Error de conexion, intente mas tarde");
	alert (textStatus + jqXHR.status);
}	



function agregar_usuario_rol(idUsuario, idRol) {
//Define la variable para responder si encontrÃ³ o no el usuario
	var resp_agre_usuario_rol = "";
//	alert ("esta en agregar_usuario_rol");
//Arma el "post" para enviarlo por ajax
	var parametros = {
		"IdUsuario" : idUsuario,
		"IdRol" : idRol,
	};
//Invoca a la url donde se encuentra el archivo "usuario_agregar_rol.php"
	$.ajax({
		data: parametros,
		type: 'post',
		dataType: 'json',
		async: false,
		url: 'https://iestsdsids2.000webhostapp.com/Usuarios/usuario_agregar_rol.php',
		success: function(respuesta) {
			resp_agre_usuario_rol = respuesta['estado'];
		},
		error: function(jqXHR, textStatus, errorMessage) {
			respuestaNoRecibida(jqXHR, textStatus);	
			resp_agre_usuario_rol = "er";
		}
	});
	
	return resp_agre_usuario_rol;
}
