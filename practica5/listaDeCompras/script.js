var listado = {
	//listado de productos
	productos: [],
	//inicia al cargar la aplicacion
	init: function() {
		document.getElementById("vista2").style.display = "none";
	},
	//crea un campo nuevo
	agregarCampo: function() {
		//crea un elemento nuevo utilizando el document
		var elemento = document.createElement("input"); //crea el elemento
		elemento.type = "text"; // agrega propiedades
		elemento.className = "form-control producto"; // agrega classes
		document.getElementById("listaCampos").appendChild(elemento);
	},
	obtenerCampos: function() {
		var self = this;
		// esconde un contenido de ingreso para mostrar la lista
		document.getElementById("vista1").style.display = "none";
		document.getElementById("vista2").style.display = "block";

		var productosRaw = document.getElementsByClassName("producto");

		//obtener campos
		for (var i = 0; i < productosRaw.length; i++) {
			this.productos.push(productosRaw[i].value);
		};

		this.imprimir(this.productos);
	},
	imprimir: function(){
		var listado = arguments[0];

		for (var i = 0; i < listado.length; i++) {
			var elemento = document.createElement("p");
			elemento.innerHTML = i+1 +" - " + listado[i];
			document.getElementById("resultado").appendChild(elemento);
		}

	}
};

listado.init();