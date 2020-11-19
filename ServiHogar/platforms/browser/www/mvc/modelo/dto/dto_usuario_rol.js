
// "DTO" destinada a transportar los datos correspondientes a
// las tablas "Usuarios_Roles" + "Roles" del modelo. 
// Las columnas de la tabla son "idUsuario" y "idRol" (de Usuarios_Roles)
// y "description" y "nivel" (de Roles)
// Contiene los metodos "set" y "get" para las 4 variables
// 
class DtoUsuarioRol {
	constructor(setIdUsuario = 0, setIdRol = 0, 
				setRolDescripcion = '', setRolNivel = 0) {
		this.idUsuario = setIdUsuario;
		this.idRol = setIdRol;
		this.rolDescripcion = setRolDescripcion;
		this.rolNivel = setRolNivel;
	}	
	
	set setIdUsuario(idUsuario) {
		this.idUsuario = idUsuario;
	}	
	
	set setIdRol(idRol) {
		this.idRol = idRol;
	}	

	set setRolDescripcion(rolDescripcion) {
		this.rolDescripcion = rolDescripcion;
	}	
	
	set setRolNivel(rolNivel) {
		this.rolNivel = rolNivel;
	}	

	
	get getIdUsuario() {
		return this.idUsuario;
	}

	get getIdRol() {
		return this.idRol;
	}

	get getRolDescripcion() {
		return this.rolDescripcion;
	}
	
	get getRolNivel() {
		return this.rolNivel;
	}
	
}	