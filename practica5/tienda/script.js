var self = this;
this.listaObjectos = "";

// objecto
function ropa(tipo, descripcion, nuBotones){
	this.descripcion = descripcion;
	this.tipo = tipo;
	this.nuBotones = nuBotones || 0; 
};

function guardarRopa(){
	// obtenemos los valores de los campos
	var descripcion = document.getElementById("descripcion").value;
	var tipo = document.getElementById("tipo").value;
	
	// arreglo de objectos
	var listado = [];

	// se instancia un objecto
	var ropa = new self.ropa(tipo,descripcion);

	// se agrega al arreglo
	listado.push(ropa);

	for (var i = 0; i < listado.length; i++) {
		self.listaObjectos += '<div class="row"><h4>'+listado[0].descripcion+'</h4><p>Tipo: '+listado[0].tipo+', numero de botones: '+listado[0].nuBotones+'</p></div><hr/>'
	}

	// se desplega en html
	document.getElementById("resultado").innerHTML = self.listaObjectos;
}