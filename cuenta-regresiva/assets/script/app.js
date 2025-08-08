function cuentaRegresiva(numero) {
    if (numero > 0 && numero < 100) {
        const numeros = [];
        while (numero > 0) {
            numeros.push(numero);
            numero--;
        }
        return numeros;
    }
    return null;
}

function iniciarCuentaRegresiva() {
    const input = document.getElementById('numeroRegresiva');
    const resultado = document.getElementById('resultado');
    const cuentaResultado = document.getElementById('cuentaResultado');
    
    const numero = parseInt(input.value);
    
    if (!numero || numero < 1 || numero > 99) {
        alert('Por favor, ingresa un número válido entre 1 y 99');
        return;
    }
    
    const cuenta = cuentaRegresiva(numero);
    
    if (cuenta) {
        cuentaResultado.innerHTML = `
            <h4 class="mb-3">Cuenta regresiva desde ${numero}:</h4>
            <div class="fs-3 fw-bold text-primary mb-3">${cuenta.join(' → ')}</div>
            <p class="text-success"><strong>¡Cuenta completada!</strong></p>
        `;
        
        resultado.classList.remove('d-none');
    }
    
    input.value = '';
}

function limpiarResultados() {
    document.getElementById('numeroRegresiva').value = '';
    document.getElementById('resultado').classList.add('d-none');
}

document.getElementById('numeroRegresiva').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        iniciarCuentaRegresiva();
    }
});