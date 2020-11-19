//
// Logica de negocio correspondiente a la ventana "login".
// Su funcion es la de nexo entre el controlador y las daos. 
// 


//Crea una variable global, instancia de DtoClientes
var usu_ingreso = new DtoClientes();
function validar_ingreso(username, password) {
//Asigna el username y el password recibido como parametro al objeto creado	
	usu_ingreso.setUsername = username;
	usu_ingreso.setPassword = password;
//Define una variable para recibir la respuesta de la lectura	
	var resp_leer_usuario = "";
//Llama a la "dao" para que acceda al webservice 
//Envia el objeto de tipo DtoUsuario como parametro y recibe una String
	resp_leer_usuario = leer_por_usuario(usu_ingreso);
//Si no se pudo conectar retorna "4"
	if (resp_leer_usuario == "er") {
		return "4";
	}
//Si no se pudo conectar retorna "1"
	if (resp_leer_usuario != "ok") {
		return "1";
		
	} else {
//Si la contraseña ingresada esta vacia o es distinta a la de la tabla retorna "1"
		if (password == "" || password != usu_ingreso.getPassword) {
			return "1";
		} else {
//Si esta todo bien retorna "2"				
			return "2";
			}
		}
	}

var prof_ingreso= new DtoProfesionales();
function validar_ingreso_prof(username, password) {
	prof_ingreso.setUsername = username;
	prof_ingreso.setPassword = password;

	var resp_prof = "";
	resp_prof = leer_por_prof(prof_ingreso);
	
	if (resp_prof == "ok") {
		return "2";
	}
//Si no se pudo conectar retorna "1"
	if (resp_prof != "ok") {
		return "1";
		
	} else {
//Si la contraseña ingresada esta vacia o es distinta a la de la tabla retorna "1"
		if (password == "" || password != prof_ingreso.getPassword) {
			return "1";
		} 
	}
}

	