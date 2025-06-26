document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formInscripcion');
    const mensajeExito = document.getElementById('mensajeExito');
    const datosConfirmacion = document.getElementById('datosConfirmacion');

    // Expresión regular para validar el nombre
    const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{5,40}$/;

    // Validación al perder foco
    document.getElementById('nombre').addEventListener('blur', validarNombre);
    
    // Limpiar errores al escribir
    document.getElementById('nombre').addEventListener('input', limpiarErrorNombre);

    // Envío del formulario
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validarFormulario()) {
            mostrarConfirmacion();
        }
    });

    function validarNombre() {
        const nombre = document.getElementById('nombre').value.trim();
        const errorNombre = document.getElementById('errorNombre');
        
        if (!nombre) {
            errorNombre.textContent = 'El nombre es obligatorio';
            return false;
        }
        
        if (!regexNombre.test(nombre)) {
            errorNombre.textContent = 'Debe contener nombre y apellido (5-40 caracteres, solo letras)';
            return false;
        }
        
        // Verificar que tenga al menos un espacio (nombre y apellido)
        if (nombre.indexOf(' ') === -1) {
            errorNombre.textContent = 'Debe ingresar nombre y apellido';
            return false;
        }
        
        errorNombre.textContent = '';
        return true;
    }

    function limpiarErrorNombre() {
        document.getElementById('errorNombre').textContent = '';
    }

    function validarTaller() {
        const taller = document.getElementById('taller').value;
        const errorTaller = document.getElementById('errorTaller');
        
        if (!taller) {
            errorTaller.textContent = 'Debe seleccionar un taller';
            return false;
        }
        
        errorTaller.textContent = '';
        return true;
    }

    function validarTurno() {
        const turnoSeleccionado = document.querySelector('input[name="turno"]:checked');
        const errorTurno = document.getElementById('errorTurno');
        
        if (!turnoSeleccionado) {
            errorTurno.textContent = 'Debe seleccionar un turno';
            return false;
        }
        
        errorTurno.textContent = '';
        return true;
    }

    function validarFormulario() {
        const nombreValido = validarNombre();
        const tallerValido = validarTaller();
        const turnoValido = validarTurno();
        
        return nombreValido && tallerValido && turnoValido;
    }

    function mostrarConfirmacion() {
        const nombre = document.getElementById('nombre').value;
        const taller = document.getElementById('taller').value;
        const turno = document.querySelector('input[name="turno"]:checked').value;
        const materiales = document.getElementById('materiales').checked;
        
        let html = `
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Taller:</strong> ${taller.charAt(0).toUpperCase() + taller.slice(1)}</p>
            <p><strong>Turno:</strong> ${turno.charAt(0).toUpperCase() + turno.slice(1)}</p>
            <p><strong>Materiales incluidos:</strong> ${materiales ? 'Sí' : 'No'}</p>
        `;
        
        datosConfirmacion.innerHTML = html;
        form.classList.add('hidden');
        mensajeExito.classList.remove('hidden');
    }
});