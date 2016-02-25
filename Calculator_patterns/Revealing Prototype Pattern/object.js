var calcu = function() {
  this.nu1 = 0,
    this.nu2 = 0,
    this.tipoOperacion = "suma";
};

calcu.prototype = (function() {
  var self = this;

  var getValues = function() {
    self.tipoOperacion = document.querySelector('input[name="operacion"]:checked').value;
    self.nu1 = parseFloat(document.getElementsByName("nu1")[0].value) || 0;
    self.nu2 = parseFloat(document.getElementsByName("nu2")[0].value) || 0;
    self.resultadoLabel = document.getElementById("resultado");
  };

  var checkValues = function() {
    return (Number.isNaN(self.nu1) || Number.isNaN(self.nu2)) ? false : true;
  };

  var doIt = function() {
    this.getValues();

    if (this.checkValues()) {
      switch (self.tipoOperacion) {
        case "suma":
          self.resultadoLabel.innerHTML = self.nu1 + self.nu2;
          break;
        case "resta":
          self.resultadoLabel.innerHTML = self.nu1 - self.nu2;
          break;
        case "division":
          self.resultadoLabel.innerHTML = self.nu1 / self.nu2;
          break;
        case "multiplicacion":
          self.resultadoLabel.innerHTML = self.nu1 * self.nu2;
          break;
        default:
          alert("Wut");
      }
    } else {
      alert("Por favor incluya únicamente números!");
    }
  };

  return {
    doIt: doIt,
    getValues: getValues,
    checkValues: checkValues
  };
})();