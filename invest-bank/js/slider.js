var rangeSlider = document.getElementById("rangeSlider");
var printSlider = document.getElementById("printSlider");
printSlider.innerHTML = rangeSlider.value;
rangeSlider.oninput = function() {
  printSlider.innerHTML = parseInt(this.value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Disparar o evento manualmente
var event = new CustomEvent("input");
rangeSlider.dispatchEvent(event);	