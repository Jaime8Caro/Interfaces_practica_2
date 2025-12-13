actualizarHeaderUsuario();

const langToggle = document.getElementById('langToggle');
const langSelector = document.querySelector('.language-selector');
const currentFlag = document.getElementById('currentFlag');
const langOptions = document.querySelectorAll('.lang-option');

// 1. Función para actualizar la interfaz visualmente
function updateLanguageUI(src) {
    if (currentFlag) {
        currentFlag.src = src;
    }
}

if (langToggle && langSelector) {
    // A. CARGAR IDIOMA GUARDADO AL INICIAR
    const savedLangSrc = localStorage.getItem('idioma_src');
    
    if (savedLangSrc) {
        updateLanguageUI(savedLangSrc);
    }

    // B. ABRIR / CERRAR MENÚ
    langToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        langSelector.classList.toggle('active');
    });

    // C. CERRAR AL CLICAR FUERA
    document.addEventListener('click', (e) => {
        if (!langSelector.contains(e.target)) {
            langSelector.classList.remove('active');
        }
    });

    // D. SELECCIONAR IDIOMA
    langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault(); // Evitar salto del link '#'
            
            // Obtener datos de la opción clicada
            const selectedLang = option.getAttribute('data-lang'); // ej: 'en'
            const selectedSrc = option.getAttribute('data-src');   // ej: 'bandera_en.png'

            // 1. Actualizar la bandera principal ("lo que está primero")
            updateLanguageUI(selectedSrc);

            // 2. Guardar en LocalStorage
            localStorage.setItem('idioma', selectedLang);      // Guardamos 'es', 'en', etc.
            localStorage.setItem('idioma_src', selectedSrc);   // Guardamos la ruta de la imagen para cargarla rápido

            // 3. Cerrar el menú
            langSelector.classList.remove('active');

            console.log(`Idioma cambiado a: ${selectedLang}`);
        });
    });
}

function validarCampoFormulario(campo, esValido, mensajeError, placeholderOriginal) {
    campo.classList.remove("campo-invalido");
    void campo.offsetWidth;
    if (!esValido) {
        campo.value = "";
        campo.classList.add("campo-invalido");
        campo.placeholder = mensajeError;
        setTimeout(() => {
            campo.placeholder = placeholderOriginal;
        }, 1500);
    } else {
        campo.placeholder = placeholderOriginal;
    }
}

function login(correo, contraseña) {
    const usuariosGuardados = obtenerUsuarios();
    for (let i = 0; i < usuariosGuardados.length; i++) {
        const usuario = usuariosGuardados[i];
        if (usuario.correo === correo && usuario.contraseña === contraseña) {
            localStorage.setItem("usuarioActual", JSON.stringify(usuario));
            return usuario;
        }
    }
    return null;
}

function logout(redirectUrl = "index.html") {
    localStorage.setItem("usuarioActual", null);
    window.location.href = redirectUrl;
}


function obtenerUsuarioActual() {
    const usuario = localStorage.getItem("usuarioActual");
    if (usuario) {
        return JSON.parse(usuario);
    }
    return null;
}

function obtenerUsuarios() {
    const usuarios = localStorage.getItem("usuarios");
    if (usuarios) {
        return JSON.parse(usuarios);
    }
    return [];
}

function guardarUsuario(usuarioNuevo) {
    let usuariosGuardados = obtenerUsuarios();

    //Comprobar si ya existe ese correo
    if (validarUsuarioExistente(usuarioNuevo.correo)) {
        console.log("Ese correo ya está registrado.");
        return false;
    }

    //Agregar el nuevo usuario
    usuariosGuardados.push(usuarioNuevo);

    //Guardar la lista actualizada
    localStorage.setItem("usuarios", JSON.stringify(usuariosGuardados));

    //Marcarlo como el usuario actual
    localStorage.setItem("usuarioActual", JSON.stringify(usuarioNuevo));

    return true;
}

function validarUsuarioExistente(correo) {
    const usuariosGuardados = obtenerUsuarios();
    
    for (let i = 0; i < usuariosGuardados.length; i++) {
        const usuario = usuariosGuardados[i];
        if (usuario.correo === correo) {
            return true;
        }
    }
    return false;
}

function mostrarLocalStorage() {
    console.log("=== CONTENIDO DEL LOCALSTORAGE ===");
    console.log("Usuarios registrados:", obtenerUsuarios());
    console.log("Usuario actual:", obtenerUsuarioActual() || "Ninguno");
}

function iniciarProcesoCompra(titulo, precio, imagen, duracion, destino) {
    const compraActual = {
        titulo: titulo,
        precio: parseFloat(precio), // Aseguramos que sea número
        imagen: imagen,
        duracion: duracion,
        destino: destino,
        fecha_inicio: new Date().toLocaleDateString() // Simulada
    };

    localStorage.setItem('compra_seleccionada', JSON.stringify(compraActual));
    window.location.href = 'proceso_compra.html';
}

function mostrarLocalStorage() {
    console.log("=== CONTENIDO DEL LOCALSTORAGE ===");
    console.log("Usuarios registrados:", obtenerUsuarios());
    console.log("Usuario actual:", obtenerUsuarioActual() || "Ninguno");
}

function limpiarTodoLocalStorage() {
    localStorage.clear();
    console.log("Todo el localStorage ha sido limpiado");
}


function actualizarHeaderUsuario() {
    const container = document.getElementById('user-actions-container');
    if (!container){
        console.log("algosalio mal") 
        return;
    }

    // 1. Recuperamos el usuario (ajusta 'usuario' a tu clave real)
    // Usamos JSON.parse porque normalmente guardamos el objeto entero
    const usuario = obtenerUsuarioActual();
    
    // Si NO hay usuario, no hacemos nada (se quedan los botones de Login/Registro)
    if (!usuario){
        console.log("algosalio mal") 
        return;
    }
    
    // Si no tiene foto guardada, usamos la de defecto
    // NOTA: Recuerda tu regla de usar src="defecto.png"
    const avatarImg = usuario.imagen || "images/defecto.jpg"; 
    const nombreUsuario = usuario.nombre || "Usuario";

    // 2. Inyectamos el HTML del usuario logueado
    container.innerHTML = `
        <div class="user-profile-wrapper" id="userMenuBtn">
            <img src="${avatarImg}" alt="Perfil" class="user-avatar">
            <i class="fa-solid fa-chevron-down" style="font-size: 0.8rem; color: #555;"></i>
            
            <div class="user-dropdown" id="userDropdown">
                <div class="user-dropdown-header">Hola, ${nombreUsuario}</div>
                <a href="perfil.html#viajes"><i class="fa-solid fa-suitcase"></i> Mis Viajes</a>
                <a href="perfil.html#configuracion"><i class="fa-solid fa-gear"></i> Configuración</a>
                <button id="logout-btn"><i class="fa-solid fa-right-from-bracket"></i> Cerrar sesión</button>
            </div>
        </div>
    `;

    // 3. Lógica para abrir/cerrar el menú
    const menuBtn = document.getElementById('userMenuBtn');
    const dropdown = document.getElementById('userDropdown');
    const logoutBtn = document.getElementById('logout-btn');

    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation(); 
        dropdown.classList.toggle('show');
    });
    document.addEventListener('click', () => {
        dropdown.classList.remove('show');
    });
    logoutBtn.addEventListener('click', () => {
        logout();
    });
}

// --- FUNCIONALIDAD BUSCADOR HEADER ---
document.addEventListener("DOMContentLoaded", () => {
    const headerSearchInput = document.querySelector('.search-bar input');
    const headerSearchBtn = document.querySelector('.search-bar button');

    if (headerSearchInput && headerSearchBtn) {
        
        // Función para ejecutar la búsqueda
        const realizarBusquedaHeader = () => {
            const texto = headerSearchInput.value.trim();
            if (texto) {
                // Redirigimos a experiencias pasando el texto por URL
                window.location.href = `experiencias.html?busqueda=${encodeURIComponent(texto)}`;
            }
        };

        // Evento Click en el botón
        headerSearchBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Evita recargas raras si está dentro de un form
            realizarBusquedaHeader();
        });

        // Evento Enter en el input
        headerSearchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                realizarBusquedaHeader();
            }
        });
    }
});
