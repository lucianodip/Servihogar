function contratar(fecha, descripcion, username, profesional) {
    var contra_nueva = new DtoContrataciones();
		contra_nueva.setUsuario = username;
		contra_nueva.setProfesional = profesional;
		contra_nueva.setDescripcion = descripcion;
        contra_nueva.setFecha = fecha;
		var resp_contratacion = "";
		resp_contratacion = agregar_contratacion(contra_nueva);
		if (resp_contratacion == "ok") {
				return "2";
			} else {			
				return "4";
		
	}
}