document.addEventListener('DOMContentLoaded', () => {
    
    // 1. CARGAR DATOS DEL USUARIO
    cargarDatosUsuarioPerfil();

    // 2. GESTIÓN DE PESTAÑAS Y HASH (URL)
    gestionarNavegacionPestanas();

    // 3. GESTIÓN DEL LOGOUT
    configurarLogoutSidebar();

    // 4. CARGAR RESERVAS Y FAVORITOS
    cargarReservasUsuario();

    // 5. CARGAR FAVORITOS
    cargarFavoritosUsuario();
});

// --- FUNCIONES ---

function cargarDatosUsuarioPerfil() {
    // 1. Obtenemos el usuario
    const usuario = typeof obtenerUsuarioActual === 'function' ? obtenerUsuarioActual() : null;

    if (!usuario) {
        // Si no hay nadie logueado, redirigir
        window.location.href = 'login.html';
        return;
    }

    // 2. Rellenamos el Avatar
    const avatares = document.querySelectorAll('.user-avatar-placeholder, .profile-avatar-large');
    avatares.forEach(div => {
        if (usuario.imagen) {
            div.style.backgroundImage = `url('${usuario.imagen}')`;
            div.style.backgroundSize = 'cover';
        }
    });

    // 3. Rellenamos los Inputs (Buscando los IDs que acabamos de poner)
    const nombre = document.getElementById('input-nombre');
    const apellido = document.getElementById('input-apellido');
    const email = document.getElementById('input-email');
    const usuarioInput = document.getElementById('input-usuario');
    const nacimiento = document.getElementById('input-nacimiento'); // <--- Nuevo ID

    // Rellenamos con seguridad (usando || '' para que no salga 'undefined')
    if (nombre) nombre.value = usuario.nombre || '';
    if (apellido) apellido.value = usuario.apellidos || usuario.apellido || ''; // A veces guardamos 'apellidos'
    if (email) email.value = usuario.correo || '';
    if (usuarioInput) usuarioInput.value = usuario.apodo|| usuario.username || '';
    
    // Para la fecha, probamos varios nombres comunes
    if (nacimiento) nacimiento.value = usuario.fecha_nacimiento || usuario.nacimiento || usuario.fecha || '';
}

function gestionarNavegacionPestanas() {
    const links = document.querySelectorAll('.sidebar-link[data-tab]');
    const secciones = document.querySelectorAll('.tab-section');

    function activarPestana(nombreTab) {
        // 1. Ocultamos TODAS las secciones primero
        secciones.forEach(sec => sec.style.display = 'none');
        
        // 2. Desactivamos TODOS los links visualmente
        links.forEach(link => link.classList.remove('active'));

        // 3. Calculamos el ID que buscamos (Ej: "datos" -> "tab-datos")
        const idSeccion = `tab-${nombreTab}`;
        const seccionAmostrar = document.getElementById(idSeccion);

        // 4. SI EXISTE, LO MOSTRAMOS
        if (seccionAmostrar) {
            seccionAmostrar.style.display = 'block';
        } else {
            console.error(`No encuentro el div con id="${idSeccion}"`);
        }

        // 5. Activamos el link del sidebar correspondiente
        const linkActivo = document.querySelector(`.sidebar-link[data-tab="${nombreTab}"]`);
        if (linkActivo) {
            linkActivo.classList.add('active');
        }
    }

    // Event Listeners para los clics
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const tabName = link.getAttribute('data-tab');
            window.location.hash = tabName; // Actualizar URL
            activarPestana(tabName);
        });
    });

    // Carga inicial
    function leerHashYActivar() {
        // Quitamos el # de la URL. Si está vacío, por defecto vamos a "datos"
        const hash = window.location.hash.replace('#', '') || 'datos';
        
        // Pequeño parche por si alguien entra con #perfil antiguo
        const tabFinal = (hash === 'perfil') ? 'datos' : hash;
        
        activarPestana(tabFinal);
    }

    leerHashYActivar();
    window.addEventListener('hashchange', leerHashYActivar);
}

function configurarLogoutSidebar() {
    const btnLogout = document.getElementById('btn-logout-sidebar');
    
    if (btnLogout) {
        btnLogout.addEventListener('click', (e) => {
            e.preventDefault();
            // Usamos la función global si existe
            logout();
        });
    }
}

function cargarReservasUsuario() {
    const contenedor = document.getElementById('lista-reservas-container');
    const mensajeVacio = document.getElementById('mensaje-sin-reservas');
    
    // Recuperamos el historial de reservas
    // Asegúrate de usar la misma clave que usaste al guardar ('reservas')
    const reservasGuardadas = JSON.parse(localStorage.getItem('reservas') || '[]');
    
    // Opcional: Filtrar solo las del usuario actual si guardaste el email en la reserva
    // const usuario = obtenerUsuarioActual();
    // const misReservas = reservasGuardadas.filter(r => r.cliente.email === usuario.email); 
    // Por ahora usamos todas las guardadas en este navegador:
    const misReservas = reservasGuardadas;

    if (misReservas.length === 0) {
        // CASO 1: NO HAY RESERVAS
        if(contenedor) contenedor.style.display = 'none';
        if(mensajeVacio) mensajeVacio.style.display = 'block';
    } else {
        // CASO 2: HAY RESERVAS -> Las pintamos
        if(contenedor) contenedor.style.display = 'grid'; // o 'block'
        if(mensajeVacio) mensajeVacio.style.display = 'none';
        
        contenedor.innerHTML = ''; // Limpiar
        
        misReservas.forEach(reserva => {
            // Protección por si la estructura de datos varía
            const titulo = reserva.viaje ? reserva.viaje.titulo : 'Viaje Pack&Go';
            const fecha = reserva.viaje ? reserva.viaje.fecha_inicio : reserva.fecha_compra;
            const img = reserva.viaje ? reserva.viaje.imagen : 'images/default_trip.jpg';
            const id = reserva.id_reserva || '---';

            const tarjetaHTML = `
                <article class="trip-card">
                    <div class="trip-image">
                        <img src="${img}" alt="${titulo}" onerror="this.src='defecto.png'">
                    </div>
                    <div class="trip-info">
                        <h3>${titulo}</h3>
                        <p class="trip-date"><i class="fa-regular fa-calendar"></i> ${fecha}</p>
                        <p class="trip-id" style="font-size: 0.8rem; color: #999;">Ref: #${id}</p>
                    </div>
                </article>
            `;
            contenedor.innerHTML += tarjetaHTML;
        });
    }
}
function cargarFavoritosUsuario() {
    const container = document.getElementById('favorites-container');
    const noFavMsg = document.getElementById('no-favorites-msg');
    
    // Obtener usuario
    const usuario = typeof obtenerUsuarioActual === 'function' ? obtenerUsuarioActual() : null;

    // Verificar si hay usuario y si tiene favoritos
    if (!usuario || !usuario.favoritos || usuario.favoritos.length === 0) {
        if(container) container.innerHTML = '';
        if(noFavMsg) noFavMsg.style.display = 'block';
        return;
    }

    // Ocultar mensaje de vacío
    if(noFavMsg) noFavMsg.style.display = 'none';
    if(container) container.innerHTML = '';

    // Filtrar los viajes que coinciden con los IDs guardados
    if (typeof experiencesData === 'undefined') {
        console.error("Error: experiencesData no está cargado. Revisa que script_experiencias.js esté incluido en el HTML.");
        return;
    }

    const misFavoritos = experiencesData.filter(exp => usuario.favoritos.includes(exp.id));

    // Pintar tarjetas
    misFavoritos.forEach(exp => {
        const cardHTML = `
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
                    <span><i class="fa-solid fa-user-group"></i> ${exp.grupo}</span>
                </div>
                <div class="card-footer">
                    <span class="price">$${exp.precio} <small>/ persona</small></span>
                    <span class="btn-reservar">Ver detalles</span>
                </div>
            </div>
        </a>`;
        container.innerHTML += cardHTML;
    });
}
