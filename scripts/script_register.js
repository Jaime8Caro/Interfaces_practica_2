// script_register.js

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".auth-card.signup-mode form");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            // --- SELECCIÓN DE ELEMENTOS (Por placeholder ya que no tienen ID en register.html) ---
            const nombreInput = form.querySelector('input[placeholder="Nombre"]');
            const apellidosInput = form.querySelector('input[placeholder="Apellidos"]');
            const fechaInput = form.querySelector('input[placeholder="Fecha de nacimiento"]');
            const correoInput = form.querySelector('input[placeholder="Correo electrónico"]');
            const correoConfInput = form.querySelector('input[placeholder="Confirmacion correo"]');
            const usuarioInput = form.querySelector('input[placeholder="Nombre de usuario"]');
            const passInput = form.querySelector('input[placeholder="Contraseña"]');
            const imagenInput = form.querySelector('input[type="file"]');
            const privacyInput = document.getElementById("privacy"); // Este sí tiene ID
            const privacyLabel = form.querySelector('label[for="privacy"]'); // Para marcar error en el texto

            // --- VALORES ---
            const nombre = nombreInput.value.trim();
            const apellidos = apellidosInput.value.trim();
            const fechaNacimiento = fechaInput.value;
            const correo = correoInput.value.trim();
            const correoConfirmacion = correoConfInput.value.trim();
            const apodo = usuarioInput.value.trim();
            const contraseña = passInput.value.trim();
            const imagenPerfil = imagenInput.files[0];

            let formularioValido = true;

            // --- VALIDACIONES VISUALES ---

            // 1. Nombre y Apellidos
            validarCampoFormulario(nombreInput, nombre.length >= 3, "Mínimo 3 letras", "Nombre");
            if (nombre.length < 3) formularioValido = false;

            validarCampoFormulario(apellidosInput, apellidos.length >= 3, "Mínimo 3 letras", "Apellidos");
            if (apellidos.length < 3) formularioValido = false;

            // 2. Correo y Duplicados
            // Primero validamos formato
            let esCorreoFormatoValido = correo.length >= 3 && correo.includes("@");
            
            // Si el formato es válido, comprobamos si YA EXISTE (para evitar el alert de script.js)
            if (esCorreoFormatoValido && validarUsuarioExistente(correo)) {
                // Si existe, forzamos el error visual aquí
                validarCampoFormulario(correoInput, false, "¡Correo ya registrado!", "Correo electrónico");
                formularioValido = false;
            } else {
                // Si no existe o formato invalido, aplicamos la validación normal
                validarCampoFormulario(correoInput, esCorreoFormatoValido, "Correo inválido", "Correo electrónico");
                if (!esCorreoFormatoValido) formularioValido = false;
            }

            // 3. Confirmación de Correo
            const coinciden = (correo === correoConfirmacion) && (correo !== "");
            validarCampoFormulario(correoConfInput, coinciden, "No coinciden", "Confirmacion correo");
            if (!coinciden) formularioValido = false;

            // 4. Fecha (Validar que no esté vacía y sea fecha pasada)
            const esFechaValida = fechaNacimiento && (new Date(fechaNacimiento) < new Date());
            validarCampoFormulario(fechaInput, esFechaValida, "Fecha inválida", "Fecha de nacimiento");
            if (!esFechaValida) formularioValido = false;

            // 5. Usuario / Apodo
            validarCampoFormulario(usuarioInput, apodo.length >= 3, "Muy corto", "Nombre de usuario");
            if (apodo.length < 3) formularioValido = false;

            // 6. Contraseña
            validarCampoFormulario(passInput, contraseña.length >= 6, "Mínimo 6 caracteres", "Contraseña");
            if (contraseña.length < 6) formularioValido = false;

            if (!privacyInput.checked) {
                privacyLabel.style.color = "red"; // Indicador visual simple
                privacyInput.style.outline = "2px solid red";
                privacyInput.style.outlineOffset = "3px";
                formularioValido = false;
            } else {
                privacyInput.style.outline = "none";
                privacyLabel.style.color = "#333"; // Color original
            }

            // --- GUARDADO ---
            if (!formularioValido) {
                return false; // Si hay errores visuales, paramos aquí.
            }

            // Objeto usuario
            const nuevoUsuario = {
                nombre, apellidos, correo,
                fecha_nacimiento: fechaNacimiento,
                apodo, contraseña,
                imagen: null
            };

            const finalizarRegistro = (datosUsuario) => {
                // Agregamos el usuario directamente al localStorage aquí para evitar 
                // llamar a guardarUsuario() si esta tuviera un alert (aunque ya validamos duplicados arriba).
                // Pero usaremos tu función 'guardarUsuario' asumiendo que ya pasamos el filtro de duplicado.
                
                guardarUsuario(datosUsuario); // Esto guarda y loguea al usuario
                window.location.href = "index.html"; // Redirección
            };

            // Procesar imagen si existe
            if (imagenPerfil) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    nuevoUsuario.imagen = e.target.result;
                    finalizarRegistro(nuevoUsuario);
                };
                reader.readAsDataURL(imagenPerfil);
            } else {
                finalizarRegistro(nuevoUsuario);
            }
        });
    }
});