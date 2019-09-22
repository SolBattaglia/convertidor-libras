document.getElementById("output").style.visibility = "hidden";
document.getElementById("pesoinput").addEventListener("input", function(e) {
  document.getElementById("output").style.visibility = "visible";
  let pounds = e.target.value;
  document.getElementById("gramos-out").innerHTML = pounds / 0.0022046;
  document.getElementById("kilogramos-out").innerHTML = pounds / 2.2046;
  document.getElementById("miligramos-out").innerHTML = pounds / 2.20462e-6;
});
