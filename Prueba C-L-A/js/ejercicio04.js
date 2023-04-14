function calcular() {
  let c = parseFloat(document.getElementById("c").value);
  let k, r, f;

  if (isNaN(c)) {
    document.getElementById("f").value = "Ingresar la temperatura";
    document.getElementById("k").value = "Ingresar la temperatura";
    document.getElementById("r").value = "Ingresar la temperatura";
  } else {
    r = c + 460;
    k = r - 187;
    f = (9 * c) / 5 + 32;
    document.getElementById("f").value = f.toFixed(2);
    document.getElementById("k").value = k.toFixed(2);
    document.getElementById("r").value = r.toFixed(2);
  }
}
