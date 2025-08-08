function tablaMultiplicar(numero) {
    const tabla = [];
    for (let i = 1; i <= 12; i++) {
        tabla.push({
            operacion: `${numero} x ${i}`,
            resultado: numero * i
        });
    }
    return tabla;
}

function generarTabla() {
    const input = document.getElementById('numeroTabla');
    const resultado = document.getElementById('resultado');
    const tablaResultado = document.getElementById('tablaResultado');
    
    const numero = parseInt(input.value);
    
    if (!numero || numero < 1) {
        alert('Por favor, ingresa un número válido mayor que 0');
        return;
    }
    
    const tabla = tablaMultiplicar(numero);
    
    let tablaHTML = `<h4 class="text-center mb-3">Tabla del ${numero}</h4><div class="row">`;
    
    tabla.forEach((item, index) => {
        tablaHTML += `
            <div class="col-6 mb-2">
                <div class="alert alert-info mb-1 py-2">
                    <strong>${item.operacion} = ${item.resultado}</strong>
                </div>
            </div>
        `;
    });
    
    tablaHTML += '</div>';
    tablaResultado.innerHTML = tablaHTML;
    resultado.classList.remove('d-none');
    input.value = '';
}

function limpiarResultados() {
    document.getElementById('numeroTabla').value = '';
    document.getElementById('resultado').classList.add('d-none');
}

document.getElementById('numeroTabla').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        generarTabla();
    }
});