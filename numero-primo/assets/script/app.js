function esPrimo(numero) {
    if (numero <= 1) return false;
    if (numero === 2) return true;
    if (numero % 2 === 0) return false;
    
    for (let i = 3; i <= Math.sqrt(numero); i += 2) {
        if (numero % i === 0) return false;
    }
    return true;
}

function verificarPrimo() {
    const input = document.getElementById('numeroPrimo');
    const resultado = document.getElementById('resultado');
    const primoResultado = document.getElementById('primoResultado');
    const explicacion = document.getElementById('explicacion');
    
    const numero = parseInt(input.value);
    
    if (!numero || numero < 1) {
        alert('Por favor, ingresa un número válido mayor que 0');
        return;
    }
    
    const esPrimoResultado = esPrimo(numero);
    
    if (esPrimoResultado) {
        primoResultado.innerHTML = `
            <div class="alert alert-success">
                <h4>✅ ¡${numero} ES un número primo!</h4>
                <p>Solo es divisible por 1 y por ${numero}</p>
            </div>
        `;
        
    } else {
        primoResultado.innerHTML = `
            <div class="alert alert-warning">
                <h4>❌ ${numero} NO es un número primo</h4>
                <p>Tiene más divisores además de 1 y ${numero}</p>
            </div>
        `;
        
        // Encontrar un divisor para explicar
        let divisor = 0;
        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) {
                divisor = i;
                break;
            }
        }
    }
    
    resultado.classList.remove('d-none');
    input.value = '';
}

function limpiarResultados() {
    document.getElementById('numeroPrimo').value = '';
    document.getElementById('resultado').classList.add('d-none');
    document.getElementById('explicacion').classList.add('d-none');
}

document.getElementById('numeroPrimo').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        verificarPrimo();
    }
});