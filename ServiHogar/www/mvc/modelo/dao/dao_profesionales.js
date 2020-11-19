
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
function leer_por_prof(DtoProfesionales) {
		
//Define la variable para responder si encontro o no el usuario
//  Los valores posibles son "er" (error de conexion), "" (no encontro el usuario),
//  "ok" (encontro al usuario)
	var resp_leer_usuario = "";
//Obtiene el username del objeto recibido como parametro	
	username = DtoProfesionales.getUsername;
	password = DtoProfesionales.getPassword;
	
//Pregunta si es vacio
	if ( username == "" || password == "") {
		
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
			url: 'https://servi-hogar2020.000webhostapp.com/scripts/usuario_leer_por_prof.php',
			success: function(respuesta) {
				resp_leer_usuario = respuesta['estado'];
				
//Completa la informacion del DTO con la respuesta del servidor	
				DtoProfesionales.setUsername = respuesta['Username'];
				DtoProfesionales.setPassword = respuesta['Password'];	
			},
			error: function(jqXHR, textStatus, errorMessage) {
				respuestaNoRecibida(jqXHR, textStatus);
				resp_leer_usuario = "er";				
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
function modif_por_id(DtoProfesionales) {
//Define la variable para responder si encontró o no el usuario
//  Los valores posibles son "er" (error de conexion), "" (no modifico el usuario),
//  "ok" (modifico los datos del usuario)
	var resp_mod_usuario = "";

//Arma el "post" para enviarlo por ajax
	var parametros = {
		"Id" : DtoProfesionales.getId,
		"Nombre" : DtoProfesionales.getNombre,
		"Contrasena" : DtoProfesionales.getContrasena,
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
function agregar_pro(DtoProfesionales) {
	//alert ("llegue a dao");
//Define la variable para responder si encontró o no el usuario
//  Los valores posibles son "er" (error de conexion), "" (no agrego el usuario),
//  "ok" (agrego el usuario)
	var resp_agre_usuario = "";

	nombre = DtoProfesionales.getNombre;
	username = DtoProfesionales.getUsername;
	password = DtoProfesionales.getPassword;
	direccion = DtoProfesionales.getDireccion;
	sexo = DtoProfesionales.getSexo;
	fechanac = DtoProfesionales.getFechaNac;
	profesion = DtoProfesionales.getProfesion;

//Arma el "post" para enviarlo por ajax
	var parametros = {
		"Nombre" : nombre,
		"Username" : username,
		"Password" : password,
		"Direccion" : direccion,
		"Sexo" : sexo,
		"FechaNac" : fechanac,
		"Profesion" : profesion,
	};
//Invoca a la url donde se encuentra el archivo "profesional_agregar.php"
	$.ajax({
		data: parametros,
		type: 'post',
		dataType: 'json',
		async: false,
		url: 'https://servi-hogar2020.000webhostapp.com/profesional_agregar.php',
		success: function(respuesta) {
			resp_agre_usuario = "ok";
			//DtoProfesionales.setId = respuesta['idUsuarioNuevo'];
		},
		error: function(jqXHR, textStatus, errorMessage) {
			respuestaNoRecibida(jqXHR, textStatus);	
			resp_agre_usuario = "er";
		}
	});
	return resp_agre_usuario;
}

function busca_prof(profe, arreglo_profesionales) {
	//Define la variable para responder si encontro o no el usuario
	//  Los valores posibles son "er" (error de conexion), "" (no encontro el usuario),
	//  "ok" (encontro al usuario)
	var resp_leer_profesion = "";
	//Arma el "post" para enviarlo por ajax
	var parametros = {
		"Profesion" : profe,
	};
	//Invoca a la url donde se encuentra el archivo "usuario_leer_por_usuario.php"
	$.ajax({
		data: parametros,
		type: 'post',
		dataType: 'json',
		async: false,
		url: 'https://servi-hogar2020.000webhostapp.com/leer_profesionales.php',
		success: function(respuesta) {
			respuestaRecibida(respuesta, arreglo_profesionales);
			resp_leer_profesion = respuesta[0]['estado'];
		},
		error: function(jqXHR, textStatus, errorMessage) {
			respuestaNoRecibida(jqXHR, textStatus);
			resp_leer_profesion = "er";			
		}
	});
return resp_leer_profesion;
}

//Funcion que se ejecuta si recibio respuesta del servidor, haya encontrado o no roles.
//
//Recibe como parametros la respuesta del servidor (formato json) y el arreglo donde
//debe cargar (con formato "DTO") cada uno de los roles recibidos	
//
function respuestaRecibida(respuesta, arreglo_profesionales){
	//Recorre con un "for" la respuesta, crea para cada fila un "DTO",
	//le asigna la informacion recibida y finalmente agrega el dto al arreglo
	for (i in respuesta) {
		var dtoProf = new DtoProfesionales();
		dtoProf.setNombre = respuesta[i]['Nombre'];
		dtoProf.setDireccion = respuesta[i]['Direccion'];
		arreglo_profesionales[i] = dtoProf;
		}	
}

function busca_contrat(profe, arreglo_contrataciones) {
	//Define la variable para responder si encontro o no el usuario
	//  Los valores posibles son "er" (error de conexion), "" (no encontro el usuario),
	//  "ok" (encontro al usuario)
	var resp_leer_contratacion = "";
	//Arma el "post" para enviarlo por ajax
	var parametros = {
		"Nombre" : profe,
	};
	//Invoca a la url donde se encuentra el archivo "usuario_leer_por_usuario.php"
	$.ajax({
		data: parametros,
		type: 'post',
		dataType: 'json',
		async: false,
		url: 'https://servi-hogar2020.000webhostapp.com/leer_contrataciones.php',
		success: function(respuesta) {
			resp_leer_contratacion = respuesta[0]['estado'];
			respuestaRecibidaContra(respuesta, arreglo_contrataciones);
			
		},
		error: function(jqXHR, textStatus, errorMessage) {
			respuestaNoRecibida(jqXHR, textStatus);
			resp_leer_contratacion = "er";			
		}
	});
return resp_leer_contratacion;
}

function respuestaRecibidaContra(respuesta, arreglo_contrataciones){
	//Recorre con un "for" la respuesta, crea para cada fila un "DTO",
	//le asigna la informacion recibida y finalmente agrega el dto al arreglo
	for (i in respuesta) {
		var dtoContra = new DtoContrataciones();
		dtoContra.setUsuario = respuesta[i]['Nombre'];
		dtoContra.setDireccion = respuesta[i]['Direccion'];
		dtoContra.setDescripcion = respuesta[i]['Descripcion'];
		dtoContra.setFecha = respuesta[i]['Fecha'];
		arreglo_contrataciones[i] = dtoContra;
	}	
}

function busca_Todos_prof(profe, arreglo_profesionales) {
	//Define la variable para responder si encontro o no el usuario
	//  Los valores posibles son "er" (error de conexion), "" (no encontro el usuario),
	//  "ok" (encontro al usuario)
	var resp_leer_profesion = "";
	//Arma el "post" para enviarlo por ajax
	var parametros = {
		"Profesion" : profe,
	};
	//Invoca a la url donde se encuentra el archivo "usuario_leer_por_usuario.php"
	$.ajax({
		data: parametros,
		type: 'post',
		dataType: 'json',
		async: false,
		url: 'https://servi-hogar2020.000webhostapp.com/leer_todos_profesionales.php',
		success: function(respuesta) {
			respuestaRecibida(respuesta, arreglo_profesionales);
			resp_leer_profesion = respuesta[0]['estado'];
		},
		error: function(jqXHR, textStatus, errorMessage) {
			respuestaNoRecibida(jqXHR, textStatus);
			resp_leer_profesion = "er";			
		}
	});
return resp_leer_profesion;
}