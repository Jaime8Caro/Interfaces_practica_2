const form = document.querySelector(".auth-card.signup-mode form");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // --- SELECCIÓN DE ELEMENTOS ---
        const nombreInput = document.getElementById('nombre');
        const apellidosInput = document.getElementById('apellidos');
        const fechaInput = document.getElementById('fecha-nacimiento');
        const correoInput = document.getElementById('email');
        const correoConfInput = document.getElementById('confirmar-email');
        const usuarioInput = document.getElementById('usuario');
        const passInput = document.getElementById('password');
        const imagenInput = document.getElementById('foto-perfil');
        const privacyInput = document.getElementById("privacy");
        const privacyLabel = form.querySelector('label[for="privacy"]');

        // --- VALORES ---
        const nombre = nombreInput.value.trim();
        const apellidos = apellidosInput.value.trim();
        const fechaNacimiento = fechaInput.value;
        const correo = correoInput.value.trim();
        const correoConfirmacion = correoConfInput.value.trim();
        const apodo = usuarioInput.value.trim();
        const contraseña = passInput.value.trim();
        const imagenPerfil = imagenInput.files && imagenInput.files[0] ? imagenInput.files[0] : null;

        let formularioValido = true;

        // --- VALIDACIONES VISUALES ---

        // 1. Nombre y Apellidos
        validarCampoFormulario(nombreInput, nombre.length >= 3, "Mínimo 3 letras", "Nombre");
        if (nombre.length < 3) formularioValido = false;

        validarCampoFormulario(apellidosInput, apellidos.length >= 3, "Mínimo 3 letras", "Apellidos");
        if (apellidos.length < 3) formularioValido = false;

        // 2. Correo y Duplicados
        let esCorreoFormatoValido = correo.length >= 3 && correo.includes("@");
        
        if (esCorreoFormatoValido && typeof validarUsuarioExistente === 'function' && validarUsuarioExistente(correo)) {
            validarCampoFormulario(correoInput, false, "¡Correo ya registrado!", "Correo electrónico");
            formularioValido = false;
        } else {
            validarCampoFormulario(correoInput, esCorreoFormatoValido, "Correo inválido", "Correo electrónico");
            if (!esCorreoFormatoValido) formularioValido = false;
        }

        // 3. Confirmación de Correo
        const coinciden = (correo === correoConfirmacion) && (correo !== "");
        validarCampoFormulario(correoConfInput, coinciden, "Correos no coinciden", "Confirmacion correo");
        if (!coinciden) formularioValido = false;

        // 4. Fecha (Validar que no esté vacía y sea fecha pasada)
        const esFechaValida = fechaNacimiento && (new Date(fechaNacimiento) < new Date());
        validarCampoFormulario(fechaInput, esFechaValida, "Fecha inválida", "Fecha de nacimiento");
        if (!esFechaValida) formularioValido = false;

        // 5. Usuario / Apodo
        validarCampoFormulario(usuarioInput, apodo.length >= 3, "Usuario muy corto", "Nombre de usuario");
        if (apodo.length < 3) formularioValido = false;

        // 6. Contraseña
        validarCampoFormulario(passInput, contraseña.length >= 6, "Mínimo 6 caracteres", "Contraseña");
        if (contraseña.length < 6) formularioValido = false;

        // Validación de Privacidad
        if (!privacyInput.checked) {
            privacyLabel.style.color = "red";
            privacyInput.style.outline = "2px solid red";
            privacyInput.style.outlineOffset = "3px";
            formularioValido = false;
        } else {
            privacyInput.style.outline = "none";
            privacyLabel.style.color = "#333";
        }

        // --- GUARDADO ---
        if (!formularioValido) {
            return false;
        }

        // Objeto usuario
        const nuevoUsuario = {
            nombre, apellidos, correo,
            fecha_nacimiento: fechaNacimiento,
            apodo, contraseña,
            imagen: null
        };

        const finalizarRegistro = (datosUsuario) => {

        if (guardarUsuario(datosUsuario)){
            window.location.href = "index.html";
            }
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