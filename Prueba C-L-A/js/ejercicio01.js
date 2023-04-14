function calcular() {
  let promedio = parseInt(document.getElementById("promedio").value),
    categoria;

  if (promedio < 0 || promedio > 20 || isNaN(promedio)) {
    document.getElementById("resultado").value =
      "Ingrese un número válido entre 0 y 20";
  } else {
    if (promedio >= 17) {
      categoria = "A";
    } else if (promedio >= 14) {
      categoria = "B";
    } else if (promedio >= 12) {
      categoria = "C";
    } else {
      categoria = "D";
    }
    document.getElementById("resultado").value = categoria;
  }
}
