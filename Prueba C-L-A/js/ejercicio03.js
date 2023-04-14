function calcular() {
  let edad = parseInt(document.getElementById("edad").value),
    peso;

  if (edad < 0 || isNaN(edad)) {
    document.getElementById("resultado").value = "Ingresar edad";
  } else {
    peso = 3 * edad + 7;
    document.getElementById("resultado").value = peso;
  }
}
