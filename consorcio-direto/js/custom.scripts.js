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

// Cookie
/*
var purecookieTitle = "Cookies.",
    purecookieDesc = "Ao usar este site, você aceita automaticamente o uso de cookies.",
    purecookieLink = '<a href="https://www.cssscript.com/privacy-policy/" target="_blank">What for?</a>',
    purecookieButton = "Entendido";

function pureFadeIn(e, o) {
    var i = document.getElementById(e);
    i.style.opacity = 0, i.style.display = o || "block",
        function e() {
            var o = parseFloat(i.style.opacity);
            (o += .02) > 1 || (i.style.opacity = o, requestAnimationFrame(e))
        }()
}

function pureFadeOut(e) {
    var o = document.getElementById(e);
    o.style.opacity = 1,
        function e() {
            (o.style.opacity -= .02) < 0 ? o.style.display = "none" : requestAnimationFrame(e)
        }()
}

function setCookie(e, o, i) {
    var t = "";
    if (i) {
        var n = new Date;
        n.setTime(n.getTime() + 24 * i * 60 * 60 * 1e3), t = "; expires=" + n.toUTCString()
    }
    document.cookie = e + "=" + (o || "") + t + "; path=/"
}

function getCookie(e) {
    for (var o = e + "=", i = document.cookie.split(";"), t = 0; t < i.length; t++) {
        for (var n = i[t];
            " " == n.charAt(0);) n = n.substring(1, n.length);
        if (0 == n.indexOf(o)) return n.substring(o.length, n.length)
    }
    return null
}

function eraseCookie(e) {
    document.cookie = e + "=; Max-Age=-99999999;"
}

function cookieConsent() {
    getCookie("barraCookies") || (document.body.innerHTML +=
        '<div class="cookieConsentContainer" id="cookieConsentContainer"><div class="cookieTitle"><a>' +
        purecookieTitle + '</a></div><div class="cookieDesc"><p>' + purecookieDesc +
        '</p></div><div class="cookieButton"><a onClick="barraCookies();">' + purecookieButton +
        "</a></div></div>", pureFadeIn("cookieConsentContainer"))
}

function barraCookies() {
    setCookie("barraCookies", "1", 5), pureFadeOut("cookieConsentContainer")
}
window.onload = cookieConsent(); *
/