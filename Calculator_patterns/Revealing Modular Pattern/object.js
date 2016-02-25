var calcu = (function() {
  //valores privados 
  var nu1 = 0,
    nu2 = 0,
    tipoOperacion = "suma"
    resultadoLabel = document.getElementById("resultado");

  var getValues = function() {
    tipoOperacion = document.querySelector('input[name="operacion"]:checked').value;
    nu1 = parseFloat(document.getElementsByName("nu1")[0].value) || 0;
    nu2 = parseFloat(document.getElementsByName("nu2")[0].value) || 0;
  };

  var checkValues = function() {
    return (Number.isNaN(nu1) || Number.isNaN(nu2)) ? false : true;
  };
  var doIt = function() {
    getValues();

    if (checkValues()) {
      switch (tipoOperacion) {
        case "suma":
          resultadoLabel.innerHTML = nu1 + nu2;
          break;
        case "resta":
          resultadoLabel.innerHTML = nu1 - nu2;
          break;
        case "division":
          resultadoLabel.innerHTML = nu1 / nu2;
          break;
        case "multiplicacion":
          resultadoLabel.innerHTML = nu1 * nu2;
          break;
        default:
          alert("Wut");
      }
    } else {
      alert("Por favor incluya únicamente números!");
    }
  };

  return {
    doIt: doIt
  };
})();