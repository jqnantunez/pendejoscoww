document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('inscripcionForm');
    const nombreInput = document.getElementById('nombre');
    const dniInput = document.getElementById('dni');
    const emailInput = document.getElementById('email');
    const tallerSelect = document.getElementById('taller');
    const turnoRadios = document.querySelectorAll('input[name="turno"]');
    const materialesCheckbox = document.getElementById('materiales');
    const confirmacionDiv = document.getElementById('confirmacion');

    // Expresiones regulares
    const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{5,40}$/;
    const regexDni = /^[1-9]\d{7}$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Eventos
    nombreInput.addEventListener('blur', validarNombre);
    nombreInput.addEventListener('input', limpiarErrorNombre);
    dniInput.addEventListener('blur', validarDni);
    dniInput.addEventListener('input', limpiarErrorDni);
    emailInput.addEventListener('blur', validarEmail);
    emailInput.addEventListener('input', limpiarErrorEmail);
    tallerSelect.addEventListener('change', validarTaller);
    turnoRadios.forEach(radio => radio.addEventListener('change', validarTurno));
    formulario.addEventListener('submit', manejarEnvio);

    function validarNombre() {
        const valor = nombreInput.value.trim();
        const errorElement = document.getElementById('nombreError');
        
        if (!valor) {
            errorElement.textContent = 'El nombre completo es obligatorio';
            return false;
        }
        
        if (!regexNombre.test(valor)) {
            errorElement.textContent = 'Debe tener entre 5 y 40 caracteres (solo letras y espacios)';
            return false;
        }
        
        if (valor.split(' ').length < 2) {
            errorElement.textContent = 'Debe ingresar nombre y apellido';
            return false;
        }
        
        errorElement.textContent = '';
        return true;
    }

    function limpiarErrorNombre() {
        document.getElementById('nombreError').textContent = '';
    }

    function validarDni() {
        const valor = dniInput.value.trim();
        const errorElement = document.getElementById('dniError');
        
        if (!valor) {
            errorElement.textContent = 'El DNI es obligatorio';
            return false;
        }
        
        if (!regexDni.test(valor)) {
            errorElement.textContent = 'Debe tener exactamente 8 dígitos (no puede comenzar con 0)';
            return false;
        }
        
        errorElement.textContent = '';
        return true;
    }

    function limpiarErrorDni() {
        document.getElementById('dniError').textContent = '';
    }

    function validarEmail() {
        const valor = emailInput.value.trim();
        const errorElement = document.getElementById('emailError');
        
        if (!valor) {
            errorElement.textContent = 'El email es obligatorio';
            return false;
        }
        
        if (!regexEmail.test(valor)) {
            errorElement.textContent = 'Ingrese un email válido (ejemplo: usuario@dominio.com)';
            return false;
        }
        
        errorElement.textContent = '';
        return true;
    }

    function limpiarErrorEmail() {
        document.getElementById('emailError').textContent = '';
    }

    function validarTaller() {
        const errorElement = document.getElementById('tallerError');
        
        if (!tallerSelect.value) {
            errorElement.textContent = 'Debe seleccionar un taller';
            return false;
        }
        
        errorElement.textContent = '';
        return true;
    }

    function validarTurno() {
        const errorElement = document.getElementById('turnoError');
        const seleccionado = Array.from(turnoRadios).some(radio => radio.checked);
        
        if (!seleccionado) {
            errorElement.textContent = 'Debe seleccionar un turno';
            return false;
        }
        
        errorElement.textContent = '';
        return true;
    }

    function validarFormulario() {
        const validoNombre = validarNombre();
        const validoDni = validarDni();
        const validoEmail = validarEmail();
        const validoTaller = validarTaller();
        const validoTurno = validarTurno();
        
        return validoNombre && validoDni && validoEmail && validoTaller && validoTurno;
    }

    function mostrarConfirmacion() {
        const nombre = nombreInput.value.trim();
        const dni = dniInput.value.trim();
        const email = emailInput.value.trim();
        const taller = tallerSelect.options[tallerSelect.selectedIndex].text;
        const turno = document.querySelector('input[name="turno"]:checked').value;
        const materiales = materialesCheckbox.checked ? 'Sí' : 'No';
        
        confirmacionDiv.innerHTML = `
            <h3>¡Inscripción exitosa!</h3>
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>DNI:</strong> ${dni}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Taller:</strong> ${taller}</p>
            <p><strong>Turno:</strong> ${turno}</p>
            <p><strong>Materiales incluidos:</strong> ${materiales}</p>
        `;
        confirmacionDiv.style.display = 'block';
    }

    function manejarEnvio(event) {
        event.preventDefault();
        
        if (validarFormulario()) {
            mostrarConfirmacion();
            formulario.reset();
        }
    }
});