function ordenaNumeros(array) {
    return array.sort((a, b) => a - b);
}

function ordenarNumeros() {
    const input = document.getElementById('numerosDesordenados');
    const resultado = document.getElementById('resultado');
    const ordenResultado = document.getElementById('ordenResultado');
    
    const texto = input.value.trim();
    
    if (!texto) {
        alert('Por favor, ingresa algunos números');
        return;
    }
    
    try {
        // Convertir texto a array de números
        const numerosTexto = texto.split(',');
        const numeros = numerosTexto.map(num => {
            const numero = parseFloat(num.trim());
            if (isNaN(numero)) {
                throw new Error(`"${num.trim()}" no es un número válido`);
            }
            return numero;
        });
        
        const numerosOriginales = [...numeros];
        const numerosOrdenados = ordenaNumeros(numeros);
        
        ordenResultado.innerHTML = `
            <h4>Números ordenados:</h4>
            <div class="alert alert-info">
                <p><strong>Original:</strong> [${numerosOriginales.join(', ')}]</p>
                <p><strong>Ordenado:</strong> [${numerosOrdenados.join(', ')}]</p>
                <p><strong>Cantidad:</strong> ${numerosOrdenados.length} números</p>
            </div>
        `;
        
        resultado.classList.remove('d-none');
    } catch (error) {
        alert('Error: ' + error.message);
    }
    
    input.value = '';
}

function limpiarResultados() {
    document.getElementById('numerosDesordenados').value = '';
    document.getElementById('resultado').classList.add('d-none');
}