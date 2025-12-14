// 1. LLAMADA INICIAL PARA PINTAR EL HEADER (Si hay usuario guardado)
actualizarHeaderUsuario();

// 2. CONFIGURACIÓN I18N
// Instanciamos la clase (vanilla-i18n.js debe estar cargado antes en el HTML)
const i18n = new vanilla_i18n(['es', 'en', 'fr', 'zh'], {
    path: 'assets/vanilla-i18n', 
    debug: true,                 
    i18n_attr_name: 'data-i18n', 
    default_language: 'es'
});

window.i18n = i18n;
i18n.run();

// 3. LÓGICA DE IDIOMAS (Solo carga inicial y cambio de opción)
const langSelector = document.querySelector('.language-selector');
const currentFlag = document.getElementById('currentFlag');
const langOptions = document.querySelectorAll('.lang-option');

// Función auxiliar para cambiar la bandera visualmente
function updateLanguageUI(src) {
    if (currentFlag) {
        currentFlag.src = src;
    }
}

if (langSelector) {
    // A. CARGAR BANDERA AL INICIAR
    const savedSrc = localStorage.getItem('idioma_src');
    if (savedSrc) {
        updateLanguageUI(savedSrc);
    } else {
        updateLanguageUI('assets/bandera_españa.png'); 
    }

    // B. SELECCIONAR OPCIÓN DE IDIOMA
    langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault(); 
            
            const selectedLang = option.getAttribute('data-lang'); 
            const selectedSrc = option.getAttribute('data-src');

            // 1. Actualizar visualmente
            updateLanguageUI(selectedSrc);
            localStorage.setItem('idioma_src', selectedSrc);

            // 2. Ejecutar traducción
            if (i18n) {
                i18n._runOnChange(selectedLang);
            }

            // 3. Cerrar el menú explícitamente
            langSelector.classList.remove('active');
        });
    });
}

// ---------------------------------------------------------
// FUNCIONES AUXILIARES Y LÓGICA DE USUARIO
// ---------------------------------------------------------

function validarCampoFormulario(campo, esValido, mensajeError, placeholderOriginal) {
    campo.classList.remove("campo-invalido");
    void campo.offsetWidth; // Reflujo para reiniciar animación si la hubiera
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
    localStorage.removeItem("usuarioActual"); // Mejor removeItem que set null
    window.location.href = redirectUrl;
}

function obtenerUsuarioActual() {
    const usuario = localStorage.getItem("usuarioActual");
    if (usuario && usuario !== "null") {
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

    if (validarUsuarioExistente(usuarioNuevo.correo)) {
        console.log("Ese correo ya está registrado.");
        return false;
    }

    usuariosGuardados.push(usuarioNuevo);
    localStorage.setItem("usuarios", JSON.stringify(usuariosGuardados));
    localStorage.setItem("usuarioActual", JSON.stringify(usuarioNuevo));

    return true;
}

function validarUsuarioExistente(correo) {
    const usuariosGuardados = obtenerUsuarios();
    return usuariosGuardados.some(u => u.correo === correo);
}

function iniciarProcesoCompra(titulo, precio, imagen, duracion, destino) {
    const usuario = obtenerUsuarioActual();
    if (!usuario) {
        mostrarAvisoLogin();
        return;
    }

    const compraActual = {
        titulo: titulo,
        precio: parseFloat(precio),
        imagen: imagen,
        duracion: duracion,
        destino: destino,
        fecha_inicio: new Date().toLocaleDateString()
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

// ---------------------------------------------------------
// RENDERIZADO DEL HEADER (Usuario Logueado)
// ---------------------------------------------------------
function actualizarHeaderUsuario() {
    const container = document.getElementById('user-actions-container');
    if (!container) return;

    const usuario = obtenerUsuarioActual();
    
    // Si NO hay usuario, no hacemos nada (se queda el botón Login/Registro original)
    if (!usuario) return;
    
    const avatarImg = usuario.imagen || "assets/defecto.png"; 
    const nombreUsuario = usuario.nombre || "Usuario";

    // Inyectamos HTML
    container.innerHTML = `
        <div class="user-profile-wrapper" id="userMenuBtn">
            <img src="${avatarImg}" alt="Perfil" class="user-avatar">
            <i class="fa-solid fa-chevron-down" style="font-size: 0.8rem; color: #555;"></i>
            <div class="user-dropdown" id="userDropdown">
                <div class="user-dropdown-header">
                    <span data-i18n="nav.user_menu.hello">Hola</span>, ${nombreUsuario}
                </div>
                <a href="perfil.html#datos">
                    <i class="fa-solid fa-user-pen"></i> 
                    <span data-i18n="nav.user_menu.profile">Perfil</span>
                </a>
                <a href="perfil.html#favoritos">
                    <i class="fa-solid fa-star"></i> 
                    <span data-i18n="nav.user_menu.favorites">Favoritos</span>
                </a>
                <a href="perfil.html#viajes">
                    <i class="fa-solid fa-suitcase"></i> 
                    <span data-i18n="nav.user_menu.trips">Mis Viajes</span>
                </a>
                <button id="logout-btn">
                    <i class="fa-solid fa-right-from-bracket"></i> 
                    <span data-i18n="nav.user_menu.logout">Cerrar sesión</span>
                </button>
            </div>
        </div>
    `;

    // Traducir el nuevo contenido
    if (window.i18n) window.i18n.run();

    // NOTA: Hemos eliminado los addEventListener de click aquí.
    // Ahora todo se maneja en el "CONTROLADOR MAESTRO DE CLICS" abajo del todo.

    // Solo añadimos el listener específico de logout
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Evita conflictos
            logout();
        });
    }
}

// ---------------------------------------------------------
// MODAL DE AVISO DE LOGIN
// ---------------------------------------------------------
function mostrarAvisoLogin(tituloKey = 'login_modal.title_default', mensajeKey = 'login_modal.msg_default') {
    let modal = document.getElementById('login-required-modal');

    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'login-required-modal';
        modal.className = 'login-required-overlay';

        const tarjeta = document.createElement('div');
        tarjeta.className = 'login-required-card';

        const icono = document.createElement('div');
        icono.className = 'login-required-icon';
        icono.innerHTML = '<i class="fa-solid fa-lock"></i>';

        const tituloEl = document.createElement('h3');
        tituloEl.id = 'login-required-title';
        tituloEl.setAttribute('data-i18n', tituloKey);

        const mensajeEl = document.createElement('p');
        mensajeEl.id = 'login-required-message';
        mensajeEl.setAttribute('data-i18n', mensajeKey);

        const acciones = document.createElement('div');
        acciones.className = 'login-required-actions';

        const btnCerrar = document.createElement('button');
        btnCerrar.type = 'button';
        btnCerrar.className = 'btn-rounded-outline';
        btnCerrar.setAttribute('data-i18n', 'login_modal.btn_close');
        btnCerrar.textContent = 'Seguir explorando';

        const enlaceLogin = document.createElement('a');
        enlaceLogin.href = 'login.html';
        enlaceLogin.className = 'btn-rounded-black';
        enlaceLogin.setAttribute('data-i18n', 'login_modal.btn_login');
        enlaceLogin.textContent = 'Ir a iniciar sesión';

        acciones.appendChild(btnCerrar);
        acciones.appendChild(enlaceLogin);
        tarjeta.appendChild(icono);
        tarjeta.appendChild(tituloEl);
        tarjeta.appendChild(mensajeEl);
        tarjeta.appendChild(acciones);
        modal.appendChild(tarjeta);
        document.body.appendChild(modal);

        btnCerrar.addEventListener('click', () => modal.classList.remove('show'));
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('show');
        });
    } else {
        const t = modal.querySelector('#login-required-title');
        const m = modal.querySelector('#login-required-message');
        t.setAttribute('data-i18n', tituloKey);
        m.setAttribute('data-i18n', mensajeKey);
    }

    if (window.i18n) window.i18n.run();
    modal.classList.add('show');
}

// ---------------------------------------------------------
// FUNCIONALIDAD BUSCADOR HEADER
// ---------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const headerSearchInput = document.querySelector('.search-bar input');
    const headerSearchBtn = document.querySelector('.search-bar button');

    if (headerSearchInput && headerSearchBtn) {
        const realizarBusquedaHeader = () => {
            const texto = headerSearchInput.value.trim();
            if (texto) {
                window.location.href = `experiencias.html?busqueda=${encodeURIComponent(texto)}`;
            }
        };

        headerSearchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            realizarBusquedaHeader();
        });

        headerSearchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                realizarBusquedaHeader();
            }
        });
    }
});

// ---------------------------------------------------------
// FAVORITOS (Botón Corazón)
// ---------------------------------------------------------
window.toggleCardFav = function(e, idViaje, btn) {
    e.preventDefault();
    e.stopPropagation();

    let usuario = obtenerUsuarioActual();

    if (!usuario) {
        if (typeof mostrarAvisoLogin === 'function') {
            mostrarAvisoLogin();
        } else {
            alert("Inicia sesión para guardar favoritos");
            window.location.href = "login.html";
        }
        return;
    }

    if (!usuario.favoritos) usuario.favoritos = [];

    const index = usuario.favoritos.indexOf(idViaje);
    const icono = btn.querySelector("i");

    if (index === -1) {
        usuario.favoritos.push(idViaje);
        btn.classList.add("active");
        icono.className = "fa-solid fa-heart"; 
        // if(typeof mostrarToast === 'function') mostrarToast("Añadido a favoritos");
    } else {
        usuario.favoritos.splice(index, 1);
        btn.classList.remove("active");
        icono.className = "fa-regular fa-heart"; 
        // if(typeof mostrarToast === 'function') mostrarToast("Eliminado de favoritos");
    }

    localStorage.setItem("usuarioActual", JSON.stringify(usuario));
    
    let usuariosGlobales = JSON.parse(localStorage.getItem("usuarios")) || [];
    const userIndex = usuariosGlobales.findIndex(u => u.correo === usuario.correo);
    if(userIndex !== -1) {
        usuariosGlobales[userIndex] = usuario;
        localStorage.setItem("usuarios", JSON.stringify(usuariosGlobales));
    }
};

// =========================================================
// CONTROLADOR MAESTRO DE CLICS (MENÚS DESPLEGABLES)
// =========================================================
// Este evento global maneja la apertura y cierre de TODOS los menús
// para evitar conflictos.
document.addEventListener('click', (e) => {
    // 1. Identificar elementos (buscamos por ID o Clase según corresponda)
    const langToggle = document.getElementById('langToggle');       // Botón bandera
    const langSelector = document.querySelector('.language-selector'); // Contenedor dropdown (.active)
    
    const userWrapper = document.getElementById('userMenuBtn');     // Botón/Wrapper usuario
    const userDropdown = document.getElementById('userDropdown');   // Dropdown usuario (.show)

    // --- CASO 1: Clic en IDIOMAS ---
    // Si clicamos en el botón de la bandera o dentro de él
    if (langToggle && (langToggle.contains(e.target))) {
        // Cierra el menú de usuario si existe y está abierto
        if (userDropdown) userDropdown.classList.remove('show');
        
        // Alterna el menú de idiomas
        if (langSelector) langSelector.classList.toggle('active');
        return; 
    }

    // --- CASO 2: Clic en USUARIO ---
    // Si clicamos en el avatar/flecha o dentro del wrapper
    if (userWrapper && (userWrapper.contains(e.target))) {
        // Cierra el menú de idiomas si está abierto
        if (langSelector) langSelector.classList.remove('active');

        // Alterna el menú de usuario
        if (userDropdown) userDropdown.classList.toggle('show');
        return; 
    }

    // --- CASO 3: Clic FUERA (Cerrar todo) ---
    // Si el clic no fue ni en idiomas ni en usuario, cerramos ambos
    if (langSelector) langSelector.classList.remove('active');
    if (userDropdown) userDropdown.classList.remove('show');
});