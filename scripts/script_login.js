/**
 * LÓGICA DE INICIO DE SESIÓN
 */
function initLogin() {
    const loginForm = document.querySelector(".auth-card.login-mode form");

    if (!loginForm) {
        return;
    }

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const emailInput = document.getElementById("email");
        const passInput = document.getElementById("password");
        const email = emailInput.value.trim();
        const pass = passInput.value.trim();

        // Validaciones básicas
        const isEmailValid = email.length >= 3 && email.includes("@");
        const isPassValid = pass.length >= 6;

        validarCampoFormulario(emailInput, isEmailValid, "Correo no válido", "Correo electrónico");
        validarCampoFormulario(passInput, isPassValid, "Mínimo 6 caracteres", "Contraseña");

        if (!isEmailValid || !isPassValid) {
            return;
        }

        // Usamos UserService definido en script.js
        const user = UserService.login(email, pass);

        if (user) {
            window.location.href = "index.html";
        } else {
            validarCampoFormulario(emailInput, false, "Usuario no encontrado", "Correo electrónico");
            validarCampoFormulario(passInput, false, "Credenciales incorrectas", "Contraseña");
        }
    });
}

initLogin();