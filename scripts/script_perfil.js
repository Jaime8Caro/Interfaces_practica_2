/**
 * GESTIÓN DE PERFIL DE USUARIO
 */

function initProfile() {
    const user = UserService.getCurrent();
    if (!user) {
        window.location.href = 'login.html';
        return;
    }

    document.querySelectorAll('.user-avatar-placeholder, .profile-avatar-large').forEach(div => {
        if (user.imagen) {
            div.style.backgroundImage = `url('${user.imagen}')`;
            div.style.backgroundSize = 'cover';
        }
    });

    const setVal = (id, val) => { 
        const el = document.getElementById(id); 
        if(el) el.value = val || ''; 
    };
    
    setVal('input-nombre', user.nombre);
    setVal('input-apellido', user.apellidos);
    setVal('input-email', user.correo);
    setVal('input-usuario', user.apodo);
    setVal('input-nacimiento', user.fecha_nacimiento);

    const btnLogout = document.getElementById('btn-logout-sidebar');
    if (btnLogout) {
        btnLogout.addEventListener('click', (e) => {
            e.preventDefault();
            UserService.logout();
        });
    }
}

function setupTabs() {
    const links = document.querySelectorAll('.sidebar-link[data-tab]');
    const sections = document.querySelectorAll('.tab-section');

    const activate = (tab) => {
        sections.forEach(s => s.style.display = 'none');
        links.forEach(l => l.classList.remove('active'));
        
        const section = document.getElementById(`tab-${tab}`);
        const link = document.querySelector(`.sidebar-link[data-tab="${tab}"]`);
        
        if (section) section.style.setProperty('display', 'block');
        if (link) link.classList.add('active');
    };

    links.forEach(l => l.addEventListener('click', (e) => {
        e.preventDefault();
        const tab = l.dataset.tab;
        window.location.hash = tab;
    }));

    const handleHashChange = () => {
        const hash = window.location.hash.replace('#', '') || 'datos';
        const tab = (hash === 'perfil') ? 'datos' : hash;
        activate(tab);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
}

function loadUserBookings() {
    const container = document.getElementById('lista-reservas-container');
    const emptyMsg = document.getElementById('mensaje-sin-reservas');
    
    if (!container) return;

    // --- CAMBIO CLAVE ---
    // Leemos las reservas DEL USUARIO, no del global
    const user = UserService.getCurrent();
    const bookings = user ? (user.reservas || []) : [];

    if (bookings.length === 0) {
        container.style.display = 'none';
        if(emptyMsg) emptyMsg.style.display = 'block';
        return;
    }

    if(emptyMsg) emptyMsg.style.display = 'none';
    container.style.display = 'grid';
    
    container.innerHTML = bookings.map(b => `
        <article class="trip-card">
            <div class="trip-image">
                <img src="${b.viaje.imagen || 'assets/default.jpg'}" alt="Viaje" onerror="this.src='assets/defecto.png'">
            </div>
            <div class="trip-info">
                <h3>${b.viaje.titulo}</h3>
                <p class="trip-date"><i class="fa-regular fa-calendar"></i> ${b.viaje.fecha_inicio || b.fecha_compra}</p>
                <p class="trip-id" style="font-size: 0.8rem; color: #999;"><span data-i18n="profile.ref">Ref:</span> #${b.id_reserva}</p>
            </div>
        </article>
    `).join('');
    
    if (window.i18n) window.i18n.run();
}

function loadUserFavorites() {
    const container = document.getElementById('favorites-container');
    const emptyMsg = document.getElementById('no-favorites-msg');
    
    if (!container) return;

    const user = UserService.getCurrent();
    const favs = user?.favoritos || [];

    if (favs.length === 0) {
        container.innerHTML = '';
        if (emptyMsg) emptyMsg.style.display = 'block';
        return;
    }

    if(emptyMsg) emptyMsg.style.display = 'none';
    
    if (typeof experiencesData !== 'undefined') {
        const favExps = experiencesData.filter(e => favs.includes(e.id));
        
        container.innerHTML = favExps.map(exp => `
            <a href="compra.html?id=${exp.id}" class="experience-card-item">
                <div class="card-image-header">
                    <span class="difficulty-badge">${exp.dificultad}</span>
                    <button class="card-fav-btn active" onclick="toggleCardFav(event, ${exp.id}, this)">
                        <i class="fa-solid fa-heart"></i>
                    </button>
                    <img src="${exp.imagen}" alt="${exp.titulo}">
                </div>
                <div class="card-body">
                    <h3>${exp.titulo}</h3>
                    <p class="card-description">${exp.descripcionCorto}</p>
                    <div class="card-meta">
                        <span><i class="fa-solid fa-location-dot"></i> ${exp.ubicacion}</span>
                        <span><i class="fa-regular fa-calendar"></i> ${exp.duracion}</span>
                    </div>
                    <div class="card-footer">
                        <span class="price">$${exp.precio} <small data-i18n="cards.per_person">/ persona</small></span>
                        <span class="btn-reservar" data-i18n="profile.view_details">Ver detalles</span>
                    </div>
                </div>
            </a>
        `).join('');
        
        if (window.i18n) window.i18n.run();
    }
}

function setupConfig() {
    const elements = {
        btnLock: document.getElementById('btn-lock-config'),
        btnSave: document.getElementById('btn-save-config'),
        btnUpload: document.getElementById('btn-upload-photo'),
        inputs: document.querySelectorAll('.config-field'),
        statusMsg: document.getElementById('config-status'),
        imgPreview: document.getElementById('config-avatar-preview'),
        fileInput: document.getElementById('config-foto'),
        fields: {
            nombre: document.getElementById('config-nombre'),
            apellidos: document.getElementById('config-apellidos'),
            usuario: document.getElementById('config-usuario'),
            email: document.getElementById('config-email')
        }
    };
    
    if (!elements.btnLock) return;

    const loadData = () => {
        const user = UserService.getCurrent();
        if (user) {
            elements.fields.nombre.value = user.nombre || '';
            elements.fields.apellidos.value = user.apellidos || '';
            elements.fields.usuario.value = user.apodo || '';
            elements.fields.email.value = user.correo || '';
            elements.imgPreview.src = user.imagen || 'assets/defecto.png';
        }
    };

    loadData();

    elements.fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (evt) => elements.imgPreview.src = evt.target.result;
            reader.readAsDataURL(file);
        }
    });

    elements.btnLock.addEventListener('click', (e) => {
        e.preventDefault();
        const icon = elements.btnLock.querySelector('i');
        const isLocked = elements.inputs[0].disabled;

        if (isLocked) {
            elements.inputs.forEach(i => {
                i.disabled = false;
                i.style.borderColor = '#007bff';
                i.style.backgroundColor = '#fff';
            });
            icon.className = 'fa-solid fa-lock-open';
            icon.style.color = '#007bff';
            elements.btnSave.style.display = 'block';
            elements.btnUpload.style.display = 'block';
            if (elements.statusMsg) elements.statusMsg.style.display = 'none';
        } else {
            loadData();
            lockForm();
        }
    });

    elements.btnSave.addEventListener('click', (e) => {
        e.preventDefault();
        const currentUser = UserService.getCurrent();
        if (!currentUser) return;

        currentUser.nombre = elements.fields.nombre.value.trim();
        currentUser.apellidos = elements.fields.apellidos.value.trim();
        currentUser.apodo = elements.fields.usuario.value.trim();
        currentUser.correo = elements.fields.email.value.trim();

        const finalizeSave = () => {
            // Guardamos usando el servicio centralizado (actualiza usuarioActual y lista global)
            UserService.saveCurrent(currentUser);
            
            if (typeof GlobalUI !== 'undefined') GlobalUI.renderUserHeader();
            initProfile();

            lockForm();
            if (elements.statusMsg) {
                elements.statusMsg.style.display = 'block';
                setTimeout(() => elements.statusMsg.style.display = 'none', 3000);
            }
        };

        if (elements.fileInput.files && elements.fileInput.files[0]) {
            const reader = new FileReader();
            reader.onload = (evt) => {
                currentUser.imagen = evt.target.result;
                finalizeSave();
            };
            reader.readAsDataURL(elements.fileInput.files[0]);
        } else {
            finalizeSave();
        }
    });

    function lockForm() {
        const icon = elements.btnLock.querySelector('i');
        elements.inputs.forEach(i => {
            i.disabled = true;
            i.style.borderColor = '#ddd';
            i.style.backgroundColor = '#f9f9f9';
        });
        icon.className = 'fa-solid fa-lock';
        icon.style.color = '#666';
        elements.btnSave.style.display = 'none';
        elements.btnUpload.style.display = 'none';
    }
}

// --- INIT ---
function init() {
    initProfile();
    setupTabs();
    loadUserBookings();
    loadUserFavorites();
    setupConfig();
}

init();