
// "DTO" destinada a transportar los datos correspondientes a
// la tabla "Roles" del modelo. 
// Las columnas de la tabla son "idRol", "descripcion" y "nivel"
// Contiene los metodos "set" y "get" para las 3 variables
// 
class DtoRol {
	constructor(setIdRol = 0, 
				setDescripcion = '', setNivel = 0) {
		this.idRol = setIdRol;
		this.descripcion = setDescripcion;
		this.nivel = setNivel;
	}	
	
	set setIdRol(idRol) {
		this.idRol = idRol;
	}	

	set setDescripcion(descripcion) {
		this.descripcion = descripcion;
	}	
	
	set setNivel(nivel) {
		this.nivel = nivel;
	}	

	
	get getIdRol() {
		return this.idRol;
	}

	get getDescripcion() {
		return this.descripcion;
	}
	
	get getNivel() {
		return this.nivel;
	}
	
}	