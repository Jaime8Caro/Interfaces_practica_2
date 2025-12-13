actualizarHeaderUsuario();

// Instanciamos la clase (asumiendo que vanilla-i18n.js se ha cargado antes en el HTML)
const i18n = new vanilla_i18n(['es', 'en', 'fr'], {
    path: 'assets/vanilla-i18n', // Carpeta con los JSON (es.json, en.json...)
    debug: true,                 // Muestra info en la consola
    i18n_attr_name: 'data-i18n', // El atributo usado en el HTML
    default_language: 'es'
});

window.i18n = i18n;

// Iniciamos la traducción
i18n.run();

const langToggle = document.getElementById('langToggle');
const langSelector = document.querySelector('.language-selector');
const currentFlag = document.getElementById('currentFlag');
const langOptions = document.querySelectorAll('.lang-option');

// Función auxiliar para cambiar la imagen de la bandera visualmente
function updateLanguageUI(src) {
    if (currentFlag) {
        currentFlag.src = src;
    }
}

if (langToggle && langSelector) {
    
    // A. CARGAR BANDERA VISUAL AL INICIAR
    // (La librería ya se encarga del texto, nosotros ponemos la banderita correcta)
    const savedSrc = localStorage.getItem('idioma_src');
    if (savedSrc) {
        updateLanguageUI(savedSrc);
    } else {
        // Por defecto ponemos la de España si no hay nada guardado
        updateLanguageUI('images/bandera_españa.png'); 
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
            e.preventDefault(); 
            
            const selectedLang = option.getAttribute('data-lang'); // 'es', 'en', 'fr'
            const selectedSrc = option.getAttribute('data-src');

            // 1. Actualizar la bandera visualmente
            updateLanguageUI(selectedSrc);

            // 2. Guardar la referencia de la imagen
            localStorage.setItem('idioma_src', selectedSrc);

            // 3. EJECUTAR EL CAMBIO DE IDIOMA EN LA LIBRERÍA
            // Esto traduce la página y actualiza el idioma en localStorage
            if (i18n) {
                i18n._runOnChange(selectedLang);
            }

            // 4. Cerrar el menú
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

function iniciarProcesoCompra(titulo, precio, imagen, duracion, destino) {
    const usuario = obtenerUsuarioActual();
    if (!usuario) {
        mostrarAvisoLogin(
            "Necesitas iniciar sesión",
            "Inicia sesión para guardar tu reserva y continuar con el proceso."
        );
        return;
    }

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
        console.log("algo salio mal") 
        return;
    }

    // 1. Recuperamos el usuario
    const usuario = obtenerUsuarioActual();
    
    // Si NO hay usuario, no hacemos nada
    if (!usuario){
        return;
    }
    
    // Ajuste: Usamos defecto.png como solicitaste y corregimos la ruta a images/
    const avatarImg = usuario.imagen || "images/defecto.png"; 
    const nombreUsuario = usuario.nombre || "Usuario";

    // 2. Inyectamos el HTML del usuario logueado
    container.innerHTML = `
        <div class="user-profile-wrapper" id="userMenuBtn">
            <img src="${avatarImg}" alt="Perfil" class="user-avatar">
            <i class="fa-solid fa-chevron-down" style="font-size: 0.8rem; color: #555;"></i>
            <div class="user-dropdown" id="userDropdown">
                <div class="user-dropdown-header">Hola, ${nombreUsuario}</div>
                <a href="perfil.html#datos"><i class="fa-solid fa-user-pen"></i> Perfil</a>
                <a href="perfil.html#viajes"><i class="fa-solid fa-suitcase"></i> Mis Viajes</a>
                <a href="perfil.html#configuracion"><i class="fa-solid fa-gear"></i> Configuración</a>
                <button id="logout-btn"><i class="fa-solid fa-right-from-bracket"></i> Cerrar sesión</button>
            </div>
        </div>
    `;

    // 3. Lógica para abrir/cerrar el menú de usuario
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

function mostrarAvisoLogin(titulo, mensaje) {
    // Buscamos el modal ya creado
    let modal = document.getElementById('login-required-modal');

    if (!modal) {
        // Si no existe, lo construimos desde cero
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
        tituloEl.textContent = 'Necesitas iniciar sesión';

        const mensajeEl = document.createElement('p');
        mensajeEl.id = 'login-required-message';
        mensajeEl.textContent = 'Para continuar con tu compra necesitamos identificarte.';

        const acciones = document.createElement('div');
        acciones.className = 'login-required-actions';

        const btnCerrar = document.createElement('button');
        btnCerrar.type = 'button';
        btnCerrar.id = 'login-required-close';
        btnCerrar.className = 'btn-rounded-outline';
        btnCerrar.textContent = 'Seguir explorando';

        const enlaceLogin = document.createElement('a');
        enlaceLogin.href = 'login.html';
        enlaceLogin.id = 'login-required-login';
        enlaceLogin.className = 'btn-rounded-black';
        enlaceLogin.textContent = 'Ir a iniciar sesión';

        acciones.appendChild(btnCerrar);
        acciones.appendChild(enlaceLogin);
        tarjeta.appendChild(icono);
        tarjeta.appendChild(tituloEl);
        tarjeta.appendChild(mensajeEl);
        tarjeta.appendChild(acciones);
        modal.appendChild(tarjeta);
        document.body.appendChild(modal);

        // Cerrar al pulsar el botón
        btnCerrar.addEventListener('click', () => modal.classList.remove('show'));
        // Cerrar al hacer clic fuera de la tarjeta
        modal.addEventListener('click', (evento) => {
            if (evento.target === modal) {
                modal.classList.remove('show');
            }
        });
    }

    // Actualizamos textos y mostramos el modal
    modal.querySelector('#login-required-title').textContent = titulo;
    modal.querySelector('#login-required-message').textContent = mensaje;
    modal.classList.add('show');
}

// --- FUNCIONALIDAD BUSCADOR HEADER ---
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

// --- FUNCIÓN GLOBAL PARA EL BOTÓN CORAZÓN DE LAS TARJETAS ---
window.toggleCardFav = function(e, idViaje, btn) {
    e.preventDefault();
    e.stopPropagation();

    let usuario = JSON.parse(localStorage.getItem("usuarioActual"));

    if (!usuario) {
        if (typeof mostrarAvisoLogin === 'function') {
            mostrarAvisoLogin("Inicia sesión", "Debes estar registrado para guardar favoritos.");
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
        if(typeof mostrarToast === 'function') mostrarToast("Añadido a favoritos");
    } else {
        usuario.favoritos.splice(index, 1);
        btn.classList.remove("active");
        icono.className = "fa-regular fa-heart"; 
        if(typeof mostrarToast === 'function') mostrarToast("Eliminado de favoritos");
    }

    localStorage.setItem("usuarioActual", JSON.stringify(usuario));
    
    let usuariosGlobales = JSON.parse(localStorage.getItem("usuarios")) || [];
    const userIndex = usuariosGlobales.findIndex(u => u.correo === usuario.correo);
    if(userIndex !== -1) {
        usuariosGlobales[userIndex] = usuario;
        localStorage.setItem("usuarios", JSON.stringify(usuariosGlobales));
    }
};