$(document).ready(function() {

    // Block filling of letters in forms, allowing only numbers
    $(".nums").mask("0#");

    // Mask for filling dates
    $(".dates").mask("00/00/0000");

    // Mask for filling Zip Codes
    $(".zip-codes").mask("00000-000");

    // Mask for filling phone/cell phone
    $(".phone").mask("(00) 0 0000-0000").focusout(function(event) {
        var target, phone, element;
        target = (event.currentTarget) ? event.currentTarget : event.srcElement;
        phone = target.value.replace(/\D/g, "");
        element = $(target);
        element.unmask();

        if (phone.length > 10) {
            element.mask("(00) 0 0000-0000");
        } else {
            element.mask("(00) 0000-00000")
        }
    });

    // Mask for filling email
    $(".email").mask("A", {
        translation: {
            "A": { pattern: /[\w@\-.+]/, recursive: true }
        }
    });

    // Mask for filling RG
    $(".rg").mask("00.000.000-W", {
        translation: {
            "W": { pattern: /[X0-9]/ }
        },
        reverse: true
    });

    // Mask for filling CPF
    $(".cpf").mask("000.000.000-00");

    // Mask for filling CNPJ
    $(".cnpj").mask("00.000.000/0000-00");

    // Mask for filling money (with R$)
    $(".money").maskMoney({ prefix: "R$ ", decimal: ",", thousands: "." });

});