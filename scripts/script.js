// --- LÓGICA DEL SELECTOR DE IDIOMA ---

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
        alert("Ese correo ya está registrado.");
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

function obtenerConsejos() {
    const KEY = 'packgo_consejos_v1';
    try {
        const raw = localStorage.getItem(KEY);
        if (!raw) {
            return []
        };
        const arr = JSON.parse(raw);
        if (!Array.isArray(arr)) {
            return [];
        }
        return arr;
    } catch (e) {
        console.error("Error leyendo consejos de localStorage:", e);
        return [];
    }
}

function mostrarLocalStorage() {
    console.log("=== CONTENIDO DEL LOCALSTORAGE ===");
    console.log("Usuarios registrados:", obtenerUsuarios());
    console.log("Usuario actual:", obtenerUsuarioActual() || "Ninguno");

    const consejos = obtenerConsejos();
    if (consejos.length === 0) {
        console.log("Consejos: ninguno (clave 'packgo_consejos_v1' vacía o inexistente)");
    } else {
        console.log(`Consejos (últimos ${Math.min(consejos.length, 10)} mostrados, total ${consejos.length}):`, consejos.slice(0, 10));
    }
}

function limpiarTodoLocalStorage() {
    localStorage.clear();
    console.log("Todo el localStorage ha sido limpiado");
}