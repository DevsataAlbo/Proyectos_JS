function sumatoria(numero) {
    if (numero > 0 && numero < 100) {
        let suma = 0;
        let proceso = [];
        
        for (let i = 1; i <= numero; i++) {
            suma += i;
            proceso.push(i);
        }
        
        return {
            resultado: suma,
            proceso: proceso,
            formula: `1 + 2 + 3 + ... + ${numero}`,
            valido: true
        };
    } else {
        return {
            valido: false,
            mensaje: 'Ingresa un número válido entre 1 y 99'
        };
    }
}

function calcularSumatoria() {
    const input = document.getElementById('numeroSumatoria');
    const resultado = document.getElementById('resultado');
    const sumatoriaResultado = document.getElementById('sumatoriaResultado');
    const proceso = document.getElementById('proceso');
    const procesoDetalle = document.getElementById('procesoDetalle');
    
    const numero = parseInt(input.value);
    
    if (!numero && numero !== 0) {
        alert('Por favor, ingresa un número válido');
        return;
    }
    
    if (numero < 1 || numero > 99) {
        alert('El número debe estar entre 1 y 99');
        return;
    }
    
    const calculo = sumatoria(numero);
    
    if (calculo.valido) {
        // Mostrar resultado principal
        sumatoriaResultado.innerHTML = `
            <div class="text-center">
                <h4 class="mb-3">La sumatoria de 1 hasta ${numero} es:</h4>
                <div class="display-4 fw-bold text-success">${calculo.resultado}</div>
                <p class="mt-2 mb-0"><strong>Fórmula:</strong> ${calculo.formula} = ${calculo.resultado}</p>
            </div>
        `;
        
        // Mostrar proceso paso a paso
        
        
        resultado.classList.remove('d-none');
        proceso.classList.remove('d-none');
    } else {
        alert(calculo.mensaje);
    }
    
    input.value = '';
}

function limpiarResultados() {
    document.getElementById('numeroSumatoria').value = '';
    document.getElementById('resultado').classList.add('d-none');
    document.getElementById('proceso').classList.add('d-none');
}

// Permitir envío con Enter
document.getElementById('numeroSumatoria').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        calcularSumatoria();
    }
});