function calcularCostoTotal() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var costoTotal = 0;

    for (var i = 0; i < checkboxes.length; i++) {
        var checkbox = checkboxes[i];
        if (checkbox.checked) {
            costoTotal += parseInt(checkbox.value);
        }
    }

    document.getElementById("costoTotal").innerText = costoTotal;
}

function convertir() {
    var costoTotalUSD = parseInt(document.getElementById("costoTotal").innerText);
    var tasaCambio = 500;

    var costoTotalARS = convertirMoneda(costoTotalUSD, tasaCambio);

    document.getElementById("costoARS").innerText = costoTotalARS;
}

function convertirMoneda(monto, tasa) {
    return monto * tasa;
}
