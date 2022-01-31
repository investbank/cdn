// Puxar/converter valores
var parcela = document.getElementById("parcela");
var printParcela = document.getElementById("printParcela");
var credito = document.getElementById("credito");
var printCredito = document.getElementById("printCredito");

printParcela.innerHTML = parcela.value;
printCredito.innerHTML = credito.value;

parcela.oninput = function() {
    printParcela.innerHTML = parseInt(this.value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

credito.oninput = function() {
    printCredito.innerHTML = parseInt(this.value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Disparar o evento manualmente
var event = new CustomEvent("input");
parcela.dispatchEvent(event);
credito.dispatchEvent(event);