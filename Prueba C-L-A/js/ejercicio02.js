function calcular() {
  let ventas = parseFloat(document.getElementById("ventas").value),
    hijos = parseInt(document.getElementById("hijos").value);
  let bon, comi, desc, sBruto, sNeto;

  if (ventas < 0 || hijos < 0 || (isNaN(ventas) && isNaN(hijos))) {
    document.getElementById("comi").value = "Ingresar los datos solicitados";
    document.getElementById("bon").value = "Ingresar los datos solicitados";
    document.getElementById("sBruto").value = "Ingresar los datos solicitados";
    document.getElementById("desc").value = "Ingresar los datos solicitados";
    document.getElementById("sNeto").value = "Ingresar los datos solicitados";
  } else {
    bon = hijos * 50;
    comi = ventas * 0.075;
    sBruto = 600 + comi + bon;
    desc = sBruto * 0.11;
    sNeto = sBruto - desc;

    document.getElementById("comi").value = comi.toFixed(2);
    document.getElementById("bon").value = bon.toFixed(2);
    document.getElementById("sBruto").value = sBruto.toFixed(2);
    document.getElementById("desc").value = desc.toFixed(2);
    document.getElementById("sNeto").value = sNeto.toFixed(2);
  }
}
