var calcu = function(){
  this.nu1 = 0,
  this.nu2 = 0,
  this.tipoOperacion = "suma";
};

calcu.prototype.getValues = function() {
    this.tipoOperacion = document.querySelector('input[name="operacion"]:checked').value;
    this.nu1 = parseFloat(document.getElementsByName("nu1")[0].value) || 0;
    this.nu2 = parseFloat(document.getElementsByName("nu2")[0].value) || 0;
    this.resultadoLabel = document.getElementById("resultado");
};

calcu.prototype.checkValues = function() {
  return (Number.isNaN(this.nu1) || Number.isNaN(this.nu2)) ? false : true;
};

calcu.prototype.doIt = function() {
    var self = this;
    this.getValues();

    if (this.checkValues()) {
      switch (this.tipoOperacion) {
        case "suma":
          this.resultadoLabel.innerHTML = this.nu1 + this.nu2;
          break;
        case "resta":
          this.resultadoLabel.innerHTML = this.nu1 - this.nu2;
          break;
        case "division":
          this.resultadoLabel.innerHTML = this.nu1 / this.nu2;
          break;
        case "multiplicacion":
          this.resultadoLabel.innerHTML = this.nu1 * this.nu2;
          break;
        default:
          alert("Wut");
      }
    } else {
      alert("Por favor incluya únicamente números!");
    }
};