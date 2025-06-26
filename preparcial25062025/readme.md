# Pre-Parcial: Formulario de Inscripción a Talleres Culturales

**Objetivo:**
Implementar un sistema de inscripción a talleres culturales con validaciones en JavaScript utilizando HTML y CSS.

## Requisitos del formulario

### Campos requeridos:

1. **Nombre completo (input text):**
   * Obligatorio
   * Mínimo 5 caracteres, máximo 40
   * Usar expresión regular: `/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{5,40}$/`
   * Debe contener al menos un nombre y un apellido
2. **DNI (input number):**
   * Obligatorio
   * Exactamente 8 dígitos numéricos
   * No puede comenzar con 0
3. **Email (input email):**
   * Obligatorio
   * Formato válido ([usuario@dominio.com](https://mailto:usuario@dominio.com/))
4. **Taller (select):**
   * Obligatorio
   * Opciones: "Pintura", "Danza", "Teatro", "Música", "Fotografía"
5. **Turno (radio buttons):**
   * Obligatorio
   * Opciones: "Mañana (9-12hs)", "Tarde (14-17hs)", "Noche (18-21hs)"
6. **Materiales incluidos (checkbox):**
   * Opcional
   * Si está marcado, incluye materiales básicos

### Validaciones requeridas:

* Mostrar mensajes de error debajo de cada campo inválido
* Limpiar errores cuando el usuario corrige el problema
* Evitar el envío del formulario si hay errores (preventDefault)
* Mostrar un mensaje de éxito con los datos de la inscripción cuando el formulario es válido

### Eventos a implementar:

* `blur`: Validar al perder el foco
* `input`: Limpiar errores mientras el usuario escribe
* `submit`: Validar todo antes de enviar

### Funcionalidad adicional:

* `validarFormulario()` → Retorna true o false según las validaciones
* `mostrarConfirmacion()` → Muestra un mensaje de éxito con los datos de la inscripción
* Usar expresiones regulares donde sea necesario
