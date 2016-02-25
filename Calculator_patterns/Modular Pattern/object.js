    var calcu = {
      "nu1": 0,
      "nu2": 0,
      "tipoOperacion": "suma",
      "resultadoLabel": document.getElementById("resultado"),
      getValues: function() {
        this.tipoOperacion = document.querySelector('input[name="operacion"]:checked').value;
        this.nu1 = parseFloat(document.getElementsByName("nu1")[0].value) || 0;
        this.nu2 = parseFloat(document.getElementsByName("nu2")[0].value) || 0;
      },
      checkValues: function(nu1, nu2) {
        return (Number.isNaN(nu1) || Number.isNaN(nu2)) ? false : true;
      },
      doIt: function(nu1, nu2) {
        nu1 = nu1 || this.nu1;
        nu2 = nu2 || this.nu2;
        this.getValues();
        if (this.checkValues(nu1, nu2)) {
          switch (this.tipoOperacion) {
            case "suma":
              this.resultadoLabel.innerHTML = nu1 + nu2;
              break;
            case "resta":
              this.resultadoLabel.innerHTML = nu1 - nu2;
              break;
            case "division":
              this.resultadoLabel.innerHTML = nu1 / nu2;
              break;
            case "multiplicacion":
              this.resultadoLabel.innerHTML = nu1 * nu2;
              break;
            default:
              alert("Wut");
          }
        } else {
          alert("Por favor incluya únicamente números!");
        }
      }
    };