
// "DTO" destinada a transportar los datos correspondientes a
// la tabla "clientes" del modelo. 
// Las columnas de la tabla son "id", "nombre", "username", "password", direccion, sexo, fechanac, avatar
// Contiene los metodos "set" y "get" para todas las variables
// 
class DtoClientes {
	constructor(setId = 0, setNombre = '', 
				setUsername = '', setPassword = '',
				setDireccion = '', setSexo = '',
				setFechaNac = '', setAvatar = '') {
		this.id = setId;
		this.nombre = setNombre;
		this.username = setUsername;
		this.password = setPassword;
		this.direccion = setDireccion;
		this.sexo = setSexo;
		this.fechaNac = setFechaNac;
		this.avatar = setAvatar;
	}	
	
	set setId(id) {
		this.id = id;
	}	
	
	set setNombre(nombre) {
		this.nombre = nombre;
	}	

	set setUsername(username) {
		this.username = username;
	}	
	
	set setPassword(password) {
		this.password = password;
	}
	
	set setDireccion(direccion){
		this.direccion = direccion;
	}

	set setSexo(sexo){
		this.sexo = sexo;
	}

	set setFechaNac(fechaNac){
		this.fechaNac = fechaNac;
	}

	set setAvatar(avatar){
		this.avatar = avatar;
	}
	
	get getId() {
		return this.id;
	}

	get getNombre() {
		return this.nombre;
	}

	get getUsername() {
		return this.username;
	}
	
	get getPassword() {
		return this.password;
	}
	
	get getDireccion(){
		return this.direccion;
	}

	get getSexo(){
		return this.sexo;
	}

	get getFechaNac(){
		return this.fechaNac;
	}

	get getAvatar(){
		return this.avatar;
	}
}	