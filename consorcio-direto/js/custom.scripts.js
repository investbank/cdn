// Script da barra de simulação (Range)
var range = document.getElementByClass("range");
var print = document.getElementByClass("print");
print.innerHTML = range.value;
range.oninput = function() {
    print.innerHTML = parseInt(this.value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Disparar o evento manualmente
var event = new CustomEvent("input");
range.dispatchEvent(event);