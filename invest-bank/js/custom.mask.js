$(document).ready(function () {

	// Block filling of letters in forms, allowing only numbers
	$(".nums").mask("0#");

	// Mask for filling dates
	$(".dates").mask("00/00/0000");

	// Mask for filling Zip Codes
	$(".zip-codes").mask("00000-000");

	// Mask for filling phone/cell phone
	$(".phone").mask("(00) 0 0000-0000").focusout(function (event) {
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
	$('.rg').mask('00.000.000-X', {
		translation: {
			'X': {
				pattern: /[xX\d]/,
				optional: true
			}
		},
		onKeyPress: function (rg, event, currentField, options) {
			if (!validarRG(rg)) {
				currentField.addClass('error');
				alert('RG inválido!');
			} else {
				currentField.removeClass('error');
			}
		}
	});

	function validarRG(rg) {
		// Remover os pontos e a letra do dígito verificador
		rg = rg.replace(/[^\dxX]/gi, '');

		// Verificar se o RG tem 9 dígitos
		if (rg.length !== 9) {
			return false;
		}

		// Verificar se o dígito verificador está correto
		const pesos = [2, 3, 4, 5, 6, 7, 8, 9];
		let dv = rg.substring(8, 9);
		if (dv === 'X' || dv === 'x') {
			dv = 10;
		} else {
			dv = parseInt(dv);
		}

		const numeros = rg.substring(0, 8);

		let soma = 0;
		for (let i = 0; i < numeros.length; i += 1) {
			soma += parseInt(numeros.charAt(i)) * pesos[i];
		}

		const resto = soma % 11;
		const dvCalculado = (resto < 2) ? 0 : 11 - resto;

		return dv === dvCalculado;
	}

	// Mask for filling CPF
	$(".cpf").mask("000.000.000-00");

	// Mask for filling CNPJ
	$(".cnpj").mask("00.000.000/0000-00");

	// Mask for filling money (with R$)
	$(".money").maskMoney({ prefix: "R$ ", decimal: ",", thousands: "." });

});
