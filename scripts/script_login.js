// script_login.js

// Buscamos el formulario dentro de la tarjeta de login
const form = document.querySelector(".auth-card.login-mode form");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evitamos que se recargue la página

        // Referencias a los inputs (usando los IDs que tienes en login.html)
        const correoInput = document.getElementById("email");
        const passInput = document.getElementById("password");

        // Valores limpios
        const correo = correoInput.value.trim();
        const contraseña = passInput.value.trim();
        
        let formularioValido = true;
        
        // 1. Validar formato básico del correo (mínimo 3 caracteres y que tenga @)
        const correoValido = correo.length >= 3 && correo.includes("@");
        validarCampoFormulario(correoInput, correoValido, "Correo no válido", "Correo electrónico");
        if (!correoValido) formularioValido = false;

        // 2. Validar longitud contraseña
        const passValido = contraseña.length >= 6;
        validarCampoFormulario(passInput, passValido, "Mínimo 6 caracteres", "Contraseña");
        if (!passValido) formularioValido = false;

        // 3. Intentar Login si el formato es correcto
        if (formularioValido) {
            // 'login' es una función de tu script.js común
            const usuario = login(correo, contraseña);
            
            if (!usuario) {
                validarCampoFormulario(correoInput, false, "Usuario no encontrado", "Correo electrónico");
                validarCampoFormulario(passInput, false, "Credenciales invalidas", "Contraseña");
            } else {
                // Éxito: Redirigimos al index
                window.location.href = "index.html"; 
            }
        }
    });
}
