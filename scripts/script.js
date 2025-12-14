/**
 * CORE & UTILITIES
 */

// --- 1. CONFIGURACIÓN I18N ---
const i18n = new vanilla_i18n(['es', 'en', 'fr', 'zh'], {
    path: 'assets/vanilla-i18n',
    debug: false,
    i18n_attr_name: 'data-i18n',
    default_language: 'es'
});

window.i18n = i18n;
i18n.run();

// --- 2. SERVICIO DE USUARIO ---
const UserService = {
    getAll: () => JSON.parse(localStorage.getItem("usuarios")) || [],

    getCurrent: () => {
        const userStr = localStorage.getItem("usuarioActual");
        if (!userStr || userStr === "null") return null;
        
        // Recuperamos el usuario actual
        const currentUser = JSON.parse(userStr);
        
        // OPTIMIZACIÓN: A veces el usuarioActual se queda desactualizado respecto a la lista global.
        // Vamos a refrescarlo con los datos de la lista global por seguridad.
        const allUsers = JSON.parse(localStorage.getItem("usuarios")) || [];
        const syncedUser = allUsers.find(u => u.correo === currentUser.correo);
        
        return syncedUser || currentUser;
    },

    login: (email, pass) => {
        const users = UserService.getAll();
        const user = users.find(u => u.correo === email && u.contraseña === pass);
        
        if (user) {
            // Aseguramos que tenga el array de reservas si es un usuario antiguo
            if (!user.reservas) user.reservas = [];
            if (!user.favoritos) user.favoritos = [];
            
            localStorage.setItem("usuarioActual", JSON.stringify(user));
            return user;
        }
        return null;
    },

    logout: (redirectUrl = "index.html") => {
        localStorage.removeItem("usuarioActual");
        // Opcional: Limpiar datos temporales de compra por si quedaron colgados
        localStorage.removeItem("compra_seleccionada");
        localStorage.removeItem("ultima_reserva");
        window.location.href = redirectUrl;
    },

    register: (newUser) => {
        const users = UserService.getAll();
        if (users.some(u => u.correo === newUser.correo)) {
            return false;
        }

        // Inicializamos arrays vacíos para evitar errores futuros
        newUser.reservas = [];
        newUser.favoritos = [];

        users.push(newUser);
        localStorage.setItem("usuarios", JSON.stringify(users));
        localStorage.setItem("usuarioActual", JSON.stringify(newUser));
        return true;
    },

    // ESTA FUNCIÓN ES CLAVE: Actualiza local y globalmente
    saveCurrent: (user) => {
        // 1. Guardamos en usuarioActual
        localStorage.setItem("usuarioActual", JSON.stringify(user));
        
        // 2. Buscamos y actualizamos en la lista global de usuarios
        const users = UserService.getAll();
        const index = users.findIndex(u => u.correo === user.correo);
        
        if (index !== -1) {
            users[index] = user; // Reemplazamos el objeto entero
            localStorage.setItem("usuarios", JSON.stringify(users));
        }
    }
};

// --- 3. GESTOR DE UI GLOBAL ---
const GlobalUI = {
    selectors: {
        langToggle: document.getElementById('langToggle'),
        langSelector: document.querySelector('.language-selector'),
        currentFlag: document.getElementById('currentFlag'),
        langOptions: document.querySelectorAll('.lang-option'),
        userActions: document.getElementById('user-actions-container'),
        searchBarInput: document.querySelector('.search-bar input'),
        searchBarBtn: document.querySelector('.search-bar button')
    },

    init: () => {
        GlobalUI.setupLanguages();
        GlobalUI.renderUserHeader();
        GlobalUI.setupSearch();
        GlobalUI.setupGlobalClickListeners();
    },

    setupLanguages: () => {
        const savedSrc = localStorage.getItem('idioma_src') || 'assets/bandera_españa.png';
        if (GlobalUI.selectors.currentFlag) {
            GlobalUI.selectors.currentFlag.src = savedSrc;
        }

        GlobalUI.selectors.langOptions.forEach(opt => {
            opt.addEventListener('click', (e) => {
                e.preventDefault();
                const lang = opt.dataset.lang;
                const src = opt.dataset.src;

                if (GlobalUI.selectors.currentFlag) {
                    GlobalUI.selectors.currentFlag.src = src;
                }
                localStorage.setItem('idioma_src', src);
                
                if (i18n) {
                    i18n._runOnChange(lang);
                }
                GlobalUI.selectors.langSelector.classList.remove('active');
            });
        });
    },

    renderUserHeader: () => {
        if (!GlobalUI.selectors.userActions) {
            return;
        }

        const user = UserService.getCurrent();
        if (!user) {
            return; 
        }

        const avatar = user.imagen || "assets/defecto.png";
        const name = user.apodo || "Usuario";

        GlobalUI.selectors.userActions.innerHTML = `
            <div class="user-profile-wrapper" id="userMenuBtn">
                <img src="${avatar}" alt="Perfil" class="user-avatar">
                <i class="fa-solid fa-chevron-down" style="font-size: 0.8rem; color: #555;"></i>
                <div class="user-dropdown" id="userDropdown">
                    <div class="user-dropdown-header">
                        <span data-i18n="nav.user_menu.hello">Hola</span>, ${name}
                    </div>
                    <a href="perfil.html#datos"><i class="fa-solid fa-user-pen"></i> <span data-i18n="nav.user_menu.profile">Perfil</span></a>
                    <a href="perfil.html#favoritos"><i class="fa-solid fa-star"></i> <span data-i18n="nav.user_menu.favorites">Favoritos</span></a>
                    <a href="perfil.html#viajes"><i class="fa-solid fa-suitcase"></i> <span data-i18n="nav.user_menu.trips">Mis Viajes</span></a>
                    <a href="perfil.html#configuracion"><i class="fa-solid fa-gears"></i> <span data-i18n="nav.user_menu.config">Configuración</span></a>
                    <button id="logout-btn"><i class="fa-solid fa-right-from-bracket"></i> <span data-i18n="nav.user_menu.logout">Cerrar sesión</span></button>
                </div>
            </div>
        `;

        if (window.i18n) {
            window.i18n.run();
        }

        const logoutBtn = document.getElementById('logout-btn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                UserService.logout();
            });
        }
    },

    setupSearch: () => {
        const { searchBarInput, searchBarBtn } = GlobalUI.selectors;
        if (!searchBarInput || !searchBarBtn) {
            return;
        }

        const performSearch = () => {
            const query = searchBarInput.value.trim();
            if (query) {
                window.location.href = `experiencias.html?busqueda=${encodeURIComponent(query)}`;
            }
        };

        searchBarBtn.addEventListener('click', (e) => { 
            e.preventDefault(); 
            performSearch(); 
        });
        
        searchBarInput.addEventListener('keypress', (e) => { 
            if (e.key === 'Enter') { 
                e.preventDefault(); 
                performSearch(); 
            }
        });
    },

    setupGlobalClickListeners: () => {
        document.addEventListener('click', (e) => {
            const langToggle = document.getElementById('langToggle');
            const langSelector = document.querySelector('.language-selector');
            const userBtn = document.getElementById('userMenuBtn');
            const userDropdown = document.getElementById('userDropdown');

            if (langToggle && (langToggle.contains(e.target) || e.target === langToggle)) {
                if (userDropdown) userDropdown.classList.remove('show');
                if (langSelector) langSelector.classList.toggle('active');
                return;
            }

            if (userBtn && userBtn.contains(e.target)) {
                if (langSelector) langSelector.classList.remove('active');
                if (userDropdown) userDropdown.classList.toggle('show');
                return;
            }

            if (langSelector) langSelector.classList.remove('active');
            if (userDropdown) userDropdown.classList.remove('show');
        });
    }
};

// --- 4. UTILIDADES GLOBALES ---

window.validarCampoFormulario = (input, isValid, errorMsg, originalPlaceholder) => {
    input.classList.remove("campo-invalido");
    void input.offsetWidth; 
    
    if (!isValid) {
        input.value = "";
        input.classList.add("campo-invalido");
        input.placeholder = errorMsg;
        setTimeout(() => {
            input.placeholder = originalPlaceholder;
        }, 1500);
    } else {
        input.placeholder = originalPlaceholder;
    }
};

window.mostrarAvisoLogin = (titleKey = 'login_modal.title_default', msgKey = 'login_modal.msg_default') => {
    let modal = document.getElementById('login-required-modal');

    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'login-required-modal';
        modal.className = 'login-required-overlay';
        modal.innerHTML = `
            <div class="login-required-card">
                <div class="login-required-icon"><i class="fa-solid fa-lock"></i></div>
                <h3 id="login-required-title" data-i18n="${titleKey}"></h3>
                <p id="login-required-message" data-i18n="${msgKey}"></p>
                <div class="login-required-actions">
                    <button type="button" class="btn-rounded-outline" id="modal-close-btn" data-i18n="login_modal.btn_close">Cerrar</button>
                    <a href="login.html" class="btn-rounded-black" data-i18n="login_modal.btn_login">Login</a>
                </div>
            </div>`;
        document.body.appendChild(modal);
        
        modal.querySelector('#modal-close-btn').addEventListener('click', () => modal.classList.remove('show'));
        modal.addEventListener('click', (e) => { 
            if (e.target === modal) {
                modal.classList.remove('show');
            } 
        });
    } else {
        modal.querySelector('#login-required-title').setAttribute('data-i18n', titleKey);
        modal.querySelector('#login-required-message').setAttribute('data-i18n', msgKey);
    }

    if (window.i18n) {
        window.i18n.run();
    }
    modal.classList.add('show');
};

window.toggleCardFav = (e, id, btn) => {
    e.preventDefault();
    e.stopPropagation();

    // Llamamos al cerebro
    const resultado = gestionarFavorito(id);

    // Si es null, es que no estaba logueado, no hacemos nada visual (el modal ya saltó)
    if (resultado === null) return;

    // Actualizamos SOLO la visual de la tarjeta
    const icon = btn.querySelector("i");
    
    if (resultado === true) { // Añadido
        btn.classList.add("active");
        icon.className = "fa-solid fa-heart";
    } else { // Quitado
        btn.classList.remove("active");
        icon.className = "fa-regular fa-heart";
    }
};

function mostrarToastSimple(iconClass, i18nKey, defaultText = "") {
    let toast = document.getElementById('toast-simple');
    
    // Creación del elemento si no existe
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast-simple';
        toast.className = 'toast-notification';
        document.body.appendChild(toast);
    }

    // Si existe un temporizador pendiente guardado en el elemento, lo cancelamos.
    if (toast.timerId) {
        clearTimeout(toast.timerId);
    }
    // Actualizamos contenido
    toast.innerHTML = `<i class="${iconClass}"></i> <span data-i18n="${i18nKey}">${defaultText}</span>`;
    
    if (window.i18n) {
        window.i18n.run(toast); 
    }
    toast.classList.add('show');
    toast.timerId = setTimeout(() => {
        toast.classList.remove('show');
        toast.timerId = null;
    }, 2500);
}

function gestionarFavorito(id) {
    const user = UserService.getCurrent();
    
    if (!user) {
        window.mostrarAvisoLogin('login_modal.title_fav', 'login_modal.msg_fav');
        return null;
    }

    if (!user.favoritos) {
        user.favoritos = [];
    }
    
    const index = user.favoritos.indexOf(id);
    let actionResult = false; 

    if (index === -1) {
        // AÑADIR
        user.favoritos.push(id);
        // Pasamos el texto "fallback" para que se vea al instante
        mostrarToastSimple("fa-solid fa-heart", "toast.fav_added", "Guardado en favoritos"); 
        actionResult = true;
    } else {
        user.favoritos.splice(index, 1);
        mostrarToastSimple("fa-regular fa-heart", "toast.fav_removed", "Eliminado de favoritos"); 
        actionResult = false;
    }

    UserService.saveCurrent(user);
    return actionResult;
}

window.obtenerUsuarioActual = UserService.getCurrent;
window.logout = UserService.logout;

GlobalUI.init();