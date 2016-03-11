var self = this;
this.listaObjectos = "";

// objecto
function ropa(tipo, descripcion, nuBotones){
	this.descripcion = descripcion;
	this.tipo = tipo;
	this.nuBotones = nuBotones || 0; 
};

function guardarRopa(){
	var descripcion = document.getElementById("descripcion").value;
	var tipo = document.getElementById("tipo").value;
	var listado = [];

	var ropa = new self.ropa(tipo,descripcion);

	listado.push(ropa);

	for (var i = 0; i < listado.length; i++) {
		self.listaObjectos += '<div class="row"><h4>'+listado[0].descripcion+'</h4><p>Tipo: '+listado[0].tipo+', numero de botones: '+listado[0].nuBotones+'</p></div><hr/>'
	}

	document.getElementById("resultado").innerHTML = self.listaObjectos;
}