function sumatoriaPares(numero) {
    if (numero > 10 && numero < 1000) {
        let suma = 0;
        const pares = [];
        
        for (let i = 2; i <= numero; i += 2) {
            suma += i;
            pares.push(i);
        }
        
        return { suma, pares };
    }
    return null;
}

function calcularSumatoriaPares() {
    const input = document.getElementById('numeroRango');
    const resultado = document.getElementById('resultado');
    const paresResultado = document.getElementById('paresResultado');
    
    const numero = parseInt(input.value);
    
    if (!numero || numero < 11 || numero > 999) {
        alert('Por favor, ingresa un número válido entre 11 y 999');
        return;
    }
    
    const calculo = sumatoriaPares(numero);
    
    if (calculo) {
        paresResultado.innerHTML = `
            <h4>Números pares del 2 al ${numero}:</h4>
            <div class="alert alert-success">
                <h5>Suma total: ${calculo.suma}</h5>
                <p><strong>Números pares:</strong> ${calculo.pares.join(', ')}</p>
                <p><strong>Cantidad de números:</strong> ${calculo.pares.length}</p>
            </div>
        `;
        resultado.classList.remove('d-none');
    }
    
    input.value = '';
}

function limpiarResultados() {
    document.getElementById('numeroRango').value = '';
    document.getElementById('resultado').classList.add('d-none');
}

document.getElementById('numeroRango').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        calcularSumatoriaPares();
    }
});