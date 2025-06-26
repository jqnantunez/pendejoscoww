# Formulario de Inscripción Simplificado

**Objetivo:**
Implementar un sistema de inscripción a talleres culturales con validaciones en JavaScript utilizando HTML y CSS.

## Campos requeridos (4 elementos):

1. **Nombre completo (input text) - Con expresión regular:**
   * Obligatorio
   * Validación con: `/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{5,40}$/`
   * Mínimo 5 caracteres, máximo 40
   * Mensaje error: "Debe contener nombre y apellido (5-40 caracteres)"
2. **Taller (select):**
   * Obligatorio
   * Opciones:
     * Pintura
     * Danza
     * Teatro
     * Música
3. **Turno (radio buttons):**
   * Obligatorio
   * Opciones:
     * Mañana (9-12hs)
     * Tarde (14-17hs)
     * Noche (18-21hs)
4. **Materiales incluidos (checkbox):**
   * **Opcional**
   * Texto: "Incluir materiales básicos (+$500)"


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
