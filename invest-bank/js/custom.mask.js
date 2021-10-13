$(document).ready(function() {

    $("#numero").mask("0#");
    $("#cep").mask("99999-999");
    $("#cpf").mask("999.999.999-99");
    $("#cel").mask('(99) 9 9999-9999').focusout(function(event) {
        var target, phone, element;
        target = (event.currentTarget) ? event.currentTarget : event.srcElement;
        phone = target.value.replace(/\D/g, '');
        element = $(target);
        element.unmask();

        if (phone.length > 10) {
            element.mask("(99) 9 9999-9999");
        } else {
            element.mask("(99) 9999-99999")
        }
    });
    $("#nascimento").mask("00/00/0000");
    $("#cnpj").mask("00.000.000/0000-00");
    $("#renda").mask("#.##0,00", { reverse: true });

    // Separar ID e CLASSE

    $(".numero").mask("0#");
    $(".cep").mask("99999-999");
    $(".data").mask("00/00/0000");
    $(".cpf").mask("999.999.999-99");
    $(".cnpj").mask("00.000.000/0000-00");
    $(".money").maskMoney({ prefix: "R$ ", decimal: ",", thousands: "." });
    $(".tel").mask('(99) 9 9999-9999').focusout(function(event) {
        var target, phone, element;
        target = (event.currentTarget) ? event.currentTarget : event.srcElement;
        phone = target.value.replace(/\D/g, '');
        element = $(target);
        element.unmask();

        if (phone.length > 10) {
            element.mask("(99) 9 9999-9999");
        } else {
            element.mask("(99) 9999-99999")
        }
    });
});