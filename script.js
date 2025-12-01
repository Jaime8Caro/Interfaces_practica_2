// Simulación de estado (cambia a true para probar la versión logueada)
const isLogged = false; 

document.addEventListener("DOMContentLoaded", () => {
    const authContainer = document.getElementById("auth-container");

    if (isLogged && authContainer) {
        // Reemplazar botones de Login/Registro por Menú de Usuario
        authContainer.innerHTML = `
            <a href="profile.html" class="profile-link" style="display: flex; align-items: center; gap: 10px; text-decoration: none; color: black; font-weight: 600;">
                <img src="defecto.png" style="width: 35px; height: 35px; border-radius: 50%; background: #ccc;" alt="Avatar">
                <span>Hola, Usuario</span>
            </a>
        `;
    }
});