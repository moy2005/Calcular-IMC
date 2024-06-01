function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    if (!isNaN(peso) && !isNaN(altura)) {
        const imc = peso / (altura * altura);
        document.getElementById("resultado").textContent = imc.toFixed(2);

        if (imc < 18.5) {
            document.getElementById("lectura").textContent = "Peso inferior al normal";
        } else if (imc >= 18.5 && imc <= 24.9) {
            document.getElementById("lectura").textContent = "Peso normal";
        } else if (imc >= 25 && imc <= 29.9) {
            document.getElementById("lectura").textContent = "Peso superior al normal";
        } else {
            document.getElementById("lectura").textContent = "Obesidad";
        }
    } 
}