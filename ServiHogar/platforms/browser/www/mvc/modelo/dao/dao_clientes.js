
// "DAO" destinada a contener todos los accesos a la tabla "Clientes"
// del modelo. 
// No contiene el acceso real (query a la tabla) porque la base
// se encuentra en un servidor remoto, por lo tanto lo que hace
// es invocar mediante "ajax" a scripts php para cada accion a 
// realizar.

// Funcion destinada a obtener los datos de un usuario x por su username y password.
//
// Recibe como parametro un "DTO" dentro del cual se encuentra el
// username y password que se quiere leer
//
// Retorna una "se�al" con el resultado del acceso al servidor y el 
// mismo DTO recibido como parametro con la informacion (si habia)
//
function leer_por_usuario(dtoClientes) {
//Define la variable para responder si encontro o no el usuario
//  Los valores posibles son "er" (error de conexion), "" (no encontro el usuario),
//  "ok" (encontro al usuario)
	var resp_leer_usuario = "";
//Obtiene el username del objeto recibido como parametro	
	username = dtoClientes.getUsername;
	password = dtoClientes.getPassword;
//Pregunta si es vacio
	if ( username == "" || password == "") { 
		alert("Entro al if");
    }else{ 
//Arma el "post" para enviarlo por ajax
		var parametros = {
			"Username" : username,
			"Password" : password,
		};
//Invoca a la url donde se encuentra el archivo "usuario_leer_por_usuario.php"
		$.ajax({
			data: parametros,
			type: 'post',
			dataType: 'json',
			async: false,
			url: 'https://servi-hogar2020.000webhostapp.com/usuario_leer_por_usuario.php',
			success: function(respuesta) {
				alert("Success");
				//resp_leer_usuario = respuesta['estado'];
//Completa la informacion del DTO con la respuesta del servidor	
				//dtoClientes.setUsername = respuesta['Username'];
				//dtoClientes.setPassword = respuesta['Password'];	
			},
			error: function(jqXHR, textStatus, errorMessage) {
				alert("Error DAO");
				//respuestaNoRecibida(jqXHR, textStatus);
				//resp_leer_usuario = "er";				
			}
		});
	}
	return resp_leer_usuario;
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


// Funcion destinada a modificar el nombre y/o contrase�a de un usuario x por su id.
//
// Recibe como parametro un "DTO" dentro del cual se encuentran los datos
//
// Retorna una "se�al" con el resultado del acceso al servidor
//
function modif_por_id(dtoClientes) {
//Define la variable para responder si encontró o no el usuario
//  Los valores posibles son "er" (error de conexion), "" (no modifico el usuario),
//  "ok" (modifico los datos del usuario)
	var resp_mod_usuario = "";

//Arma el "post" para enviarlo por ajax
	var parametros = {
		"Id" : dtoClientes.getId,
		"Nombre" : dtoClientes.getNombre,
		"Contrasena" : dtoClientes.getContrasena,
	};

//Invoca a la url donde se encuentra el archivo "usuario_modif_por_id.php"
	$.ajax({
		data: parametros,
		type: 'post',
		dataType: 'json',
		async: false,
		url: 'https://iestsdsids2.000webhostapp.com/Usuarios/usuario_modif_por_id.php',
		success: function(respuesta) {
			resp_mod_usuario = respuesta['estado'];
		},
		error: function(jqXHR, textStatus, errorMessage) {
			respuestaNoRecibida(jqXHR, textStatus);	
			resp_mod_usuario = "er";
		}
	});
	
	return resp_mod_usuario;
}


// Funcion destinada a agregar un usuario.
//
// Recibe como parametro un "DTO" dentro del cual se encuentran los datos
//
// Retorna una "se�al" con el resultado del acceso al servidor
//
function agregar_usuario(dtoClientes) {
//Define la variable para responder si encontró o no el usuario
//  Los valores posibles son "er" (error de conexion), "" (no agrego el usuario),
//  "ok" (agrego el usuario)
	var resp_agre_usuario = "";

//Arma el "post" para enviarlo por ajax
	var parametros = {
		"Dni" : dtoClientes.getDni,
		"Nombre" : dtoClientes.getNombre,
		"Contrasena" : dtoClientes.getContrasena,
	};
//Invoca a la url donde se encuentra el archivo "usuario_agregar.php"
	$.ajax({
		data: parametros,
		type: 'post',
		dataType: 'json',
		async: false,
		url: 'https://iestsdsids2.000webhostapp.com/Usuarios/usuario_agregar.php',
		success: function(respuesta) {
			resp_agre_usuario = respuesta['estado'];
			dtoClientes.setId = respuesta['idUsuarioNuevo'];
		},
		error: function(jqXHR, textStatus, errorMessage) {
			respuestaNoRecibida(jqXHR, textStatus);	
			resp_agre_usuario = "er";
		}
	});
	
	return resp_agre_usuario;
}
