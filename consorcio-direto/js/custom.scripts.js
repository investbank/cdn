// Script da barra de simulação (Range)
var rangeVal = document.getElementByClass("rangeVal");
var printVal = document.getElementByClass("print");
print.innerHTML = rangeVal.value;
rangeVal.oninput = function() {
    print.innerHTML = parseInt(this.value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Disparar o evento manualmente
var event = new CustomEvent("input");
rangeVal.dispatchEvent(event);