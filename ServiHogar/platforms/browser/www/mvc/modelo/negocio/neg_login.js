//
// Logica de negocio correspondiente a la ventana "login".
// Su funcion es la de nexo entre el controlador y las daos. 
// 


//Crea una variable global, instancia de DtoClientes
var usu_ingreso = new DtoClientes();

// Funcion destinada a validar los datos ingresados, verificar
// si la contraseña es correcta y en caso de ser valida debe
// mostrar el menu del sistema.
//
// Recibe como parametro el username y el password
//
// Retorna un dato de tipo string con el valor "1" si los datos 
// no eran correctos, 
// "3" si esta permitido ingresar al menu del sistema y "4" si
// se produjo error de conexion
//
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
		if (password == "" || sha256(password) != usu_ingreso.getpassword) {
			return "1";
		} else {
//Si esta todo bien retorna "2"
				return "2";
			}
		}
	}	