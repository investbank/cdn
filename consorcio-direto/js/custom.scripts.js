// Puxar/converter valores
var parcela = document.getElementsByClassName("parcela");
var credito = document.getElementsByClassName("credito");
var printParcela = document.getElementsByClassName("printParcela");
var printCredito = document.getElementsByClassName("printCredito");

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
var event = new CustomEvent("input");
parcela.dispatchEvent(event);
credito.dispatchEvent(event);