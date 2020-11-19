//
// Logica de negocio correspondiente a la ventana "agregar usuario".
// Su funcion es la de nexo entre el controlador y las daos. 

// Funcion destinada a validar los datos ingresados, verificar
// si la contrase�a es correcta y en caso de todo estar
// de acuerdo a la logica de negocio establecida agrega el usuario.
//
// Recibe como parametro el dni, contrasena, dni_nuevo y idRol
// (los dos primeros del usuario que ingresa, los dos ultimos del
// usuario que desea agregar al sistema)
//
// Retorna un dato de tipo string con el valor "1" si los datos 
// no eran correctos, "2" si agrego el usuario, 
// "3" si no pudo agregar, "4" si se produjo error de conexion
// y "0" si se produjo un error
//
function validar_ingreso(dni, contrasena, dni_nuevo, idRol) {
//Define e inicializa una bandera en true, por cada dato si 
//es incorrecto le asigna false, por lo tanto si llega al
//final de las validaciones en true significa que todos los 
//datos fueron correctos.
	var datos_correctos = true;
//Dni del usuario a agregar no valido
	if (!dni_valido(dni_nuevo)) {
		datos_correctos = false;
	}
//Contrase�a del usuario actual no valida
	if (!contrasena_correcta(dni, contrasena)) {
		datos_correctos = false;
	}
//Si hasta aqui fueron todos datos validos, solicita a la "dao"
//la lectura del usuario nuevo en la base para verificar si existe. 
//Si el usuario nuevo ya existe en la base de datos
//o se produjo un error retorna
	if (datos_correctos) {
		var usu_nuevo = new DtoUsuario();
		usu_nuevo.setDni = dni_nuevo;
		var resp_leer_usuario = "";
		resp_leer_usuario = leer_por_dni(usu_nuevo);
		if (resp_leer_usuario == "er") {
			return "4";
		}	
		if (resp_leer_usuario == "ok") {
			return "3";
		}
	}
//Si hasta aqui fueron todos datos validos, solicita a la "dao"
//que agregue el usuario 
	if (!datos_correctos) {
		return "1";
	} else {
		usu_nuevo.setNombre = "";
		usu_nuevo.setDni = dni_nuevo;
		usu_nuevo.setContrasena = sha256(dni_nuevo);
		var resp_agr_usuario = "";
		resp_agr_usuario = agregar_usuario(usu_nuevo);
		if (resp_agr_usuario == "ok") {
			var resp_agr_usuario_rol = "";
			resp_agr_usuario_rol = agregar_usuario_rol(usu_nuevo.getId, idRol);
			if (resp_agr_usuario_rol == "ok" ) {
				return "2";
			} else {			
				return "4";
			}	
		} else {
			return "4";
		}	
	}	
	return "0";
}

// Funcion destinada a validar el tipo de dato y longitud del dni 
// El dni debe ser numerico con una longitud de 8 digitos
//
// Recibe como parametro el dni a validar
//
// Retorna un dato de tipo boolean en true si es valido o en false
// si no lo es. 
//
function dni_valido(dni) {
	if (isNaN(dni) || dni.length != 8) {
		return false;
	}
	return true;
}	

// Funcion destinada a validar si la contrase�a ingresada es correcta. 
// Para esto debe ser igual a la almacenada en la base de datos para ese usuario
//
// Recibe como parametro el dni y la contrase�a a validar
//
// Retorna un dato de tipo boolean en true si es correcta o en false
// si no lo es. 
//
function contrasena_correcta(dni, contrasena) {
	var usu_ingresa = new DtoUsuario;
	usu_ingresa.setDni = dni;
//Define una variable para recibir la respuesta de la lectura	
	var resp_leer_usuario = "";
//Llama a la "dao" para que acceda al webservice 
//Envia el objeto de tipo DtoUsuario como parametro y recibe una String
	resp_leer_usuario = leer_por_dni(usu_ingresa);
//Si leyo y la contrase�a es correcta retorna true
	if (resp_leer_usuario == "ok" && sha256(contrasena) == usu_ingresa.getContrasena) {
		return true;
	} else {
		return false;
	}
}
function agregar_usu(usuario, password, nombre, sexo, direccion, fechaNac) {
	var usu_nuevo = new DtoClientes();
		usu_nuevo.setUsername = usuario;
		usu_nuevo.setPassword = password;
		usu_nuevo.setNombre = nombre;
		usu_nuevo.setSexo = sexo;
		usu_nuevo.setDireccion = direccion;
		usu_nuevo.setFechaNac = fechaNac;
		var resp_agr_usuario = "";
		resp_agr_usuario = agregar_usuario(usu_nuevo);
		if (resp_agr_usuario == "ok") {
			
				return "2";
			} else {			
				return "4";
		
	}	


}