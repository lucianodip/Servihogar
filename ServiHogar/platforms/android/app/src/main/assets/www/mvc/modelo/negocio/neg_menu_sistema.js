//
// Logica de negocio correspondiente a la ventana "menu del sistema".
// Su funcion es la de nexo entre el controlador y las daos. 
//
// Solamente contempla la logica hasta que se muestra el menu,
// puede ser necesario ampliarla si se implementa con un menu real,
// este solamente tiene previsto mostrar el menu y finalizar.
// 

// Funcion destinada a obtener los roles habilitados para el usuario
// que ingresa al menu
//
// Recibe como parametro el id del usuario que ingresa y un arreglo
// vacio para llenar con los roles que desempeña en la empresa
//
// Retorna un dato de tipo string con el valor "2" si encontro roles,
// "1" si no los encontro o con "4" si se produjo un error. Si encontro
// retorna el arreglo con los roles disponibles
//
function obtenerRolesUsuario(idUsuario, arreglo_roles) {
//Define una variable para recibir la respuesta de la lectura	
	var resp_leer_roles = "";
//Llama a la "dao" para que acceda al webservice 
//Envia el idUsuario y el objeto de tipo Array como parametro y recibe una String
	resp_leer_roles = leer_roles_por_usuario(idUsuario, arreglo_roles);
//	alert (resp_leer_roles);
//Si no se pudo conectar retorna "4"
	if (resp_leer_roles == "er") {
		return "4";
	}	
//Si no se pudo leer retorna "1"
	if (resp_leer_roles != "ok") {
		return "1";
	} else {
		return "2";
	}	
}	

