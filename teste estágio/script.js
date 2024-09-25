function verificarLetraA() {
    let texto = document.getElementById("texto").value;

    let contador = 0;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i].toLowerCase() === 'a') {
            contador++;
        }
    }

    // Exibe o resultado na página
    let resultado = document.getElementById("resultado");
    
    if (contador > 0) {
        resultado.textContent = `A letra 'a' aparece ${contador} vez(es) na string.`;
    } else {
        resultado.textContent = "A letra 'a' não foi encontrada na string.";
    }
}
