let currentStep = 1;
detectarPaginaYEjecutar();

// Función principal para detectar la página y ejecutar la lógica correspondiente
function detectarPaginaYEjecutar() {
    const checkoutForm = document.getElementById('checkoutForm');
    const successSection = document.querySelector('.success-section');

    // 1. SI ESTAMOS EN EL PROCESO DE COMPRA
    if (checkoutForm) {
        // Verificamos que exista un usuario autenticado antes de mostrar el checkout 
        let usuarioLogueado = null;
        if (typeof obtenerUsuarioActual === 'function') {
            usuarioLogueado = obtenerUsuarioActual();
        }

        if (!usuarioLogueado) {
            if (typeof mostrarAvisoLogin === 'function') {
                mostrarAvisoLogin(
                    'Inicia sesión para continuar',
                    'Identifícate para revisar tus datos y terminar la compra.'
                );
            }
            return;
        }
        cargarResumenCompra();
        checkoutForm.addEventListener('submit', finalizarCompra);
        updateStepper(1);
    }
    
    // 2. SI ESTAMOS EN LA PÁGINA DE ÉXITO (compra_exito.html)
    else if (successSection) {
        cargarDatosExito();
        cargarBotonesExito();
    }
}

// ==========================================
// LÓGICA DE PROCESO DE COMPRA (proceso_compra.html)
// ==========================================

// Función para cargar el resumen del viaje en el Paso 3
function cargarResumenCompra() {
    // Recuperamos el viaje que el usuario eligió
    const compraGuardada = localStorage.getItem('compra_seleccionada');

    if (compraGuardada) {
        const viaje = JSON.parse(compraGuardada);
        const titulo = document.getElementById('resumen-titulo');
        const destino = document.getElementById('resumen-destino');
        const precioRow = document.getElementById('resumen-precio-base');
        const precioTotal = document.getElementById('resumen-total');
        const duracion = document.getElementById('resumen-duracion');

        if (titulo) titulo.innerText = viaje.titulo || "Experiencia";
        if (destino) destino.innerText = viaje.destino || "Mundo";
        if (duracion) duracion.innerText = viaje.duracion || "--";
        
        if (viaje.precio) {
            const precioFmt = `$${viaje.precio.toFixed(2)}`;
            if (precioRow) precioRow.innerText = precioFmt;
            if (precioTotal) precioTotal.innerText = precioFmt;
        }
    } else {
        console.warn("No hay compra seleccionada en localStorage.");
    }
}

// Función para finalizar la compra al enviar el formulario
function finalizarCompra(e) {
    e.preventDefault();
    let usuarioLogueado = null;
    if (typeof obtenerUsuarioActual === 'function') {
        usuarioLogueado = obtenerUsuarioActual();
    }

    if (!usuarioLogueado) {
        if (typeof mostrarAvisoLogin === 'function') {
            mostrarAvisoLogin(
                'Necesitas iniciar sesión',
                'Inicia sesión para guardar tu reserva y continuar con el proceso'
            );
        }
        return;
    }

    // A. Recopilar Datos Personales
    const datosContacto = {
        nombre: document.querySelector('#step-1 input[placeholder="Nombre"]').value,
        apellidos: document.querySelector('#step-1 input[placeholder="Apellidos"]').value,
        email: document.querySelector('#step-1 input[placeholder="Correo electrónico"]').value,
        telefono: document.querySelector('#step-1 input[placeholder="Teléfono"]').value,
    };

    // B. Recopilar Acompañantes y Mascotas
    const acompanantes = [];
    document.querySelectorAll('#list-acompanantes .dynamic-card').forEach(card => {
        acompanantes.push({
            nombre: card.querySelector('input[placeholder="Nombre completo"]').value,
            dni: card.querySelector('input[placeholder="DNI / Pasaporte"]').value
        });
    });

    const mascotas = [];
    document.querySelectorAll('#list-mascotas .dynamic-card').forEach(card => {
        mascotas.push({
            especie: card.querySelector('input[placeholder="Ej: Perro, Gato"]').value,
            tamano: card.querySelector('select').value
        });
    });

    // C. Recuperar datos del viaje
    const viaje = JSON.parse(localStorage.getItem('compra_seleccionada') || '{}');

    // D. Crear Objeto Reserva
    const nuevaReserva = {
        id_reserva: 'PKG-' + Date.now().toString().slice(-6),
        fecha_compra: new Date().toLocaleDateString(),
        estado: 'Confirmada',
        viaje: viaje,
        cliente: datosContacto,
        detalles_adicionales: {
            total_acompanantes: acompanantes.length,
            lista_acompanantes: acompanantes,
            total_mascotas: mascotas.length,
            lista_mascotas: mascotas,
            alergias: document.querySelector('#form-alergia textarea')?.value || 'Ninguna'
        },
        precio_pagado: viaje.precio
    };

    // E. Guardar en Historial
    const historialReservas = JSON.parse(localStorage.getItem('reservas') || '[]');
    historialReservas.push(nuevaReserva);
    localStorage.setItem('reservas', JSON.stringify(historialReservas));

    // F. Guardar como Última Reserva (para la pantalla de éxito)
    localStorage.setItem('ultima_reserva', JSON.stringify(nuevaReserva));

    // G. Redirigir
    window.location.href = 'compra_exito.html';
}


// --- NAVEGACIÓN ENTRE PASOS ---

// Función para mostrar el paso correspondiente
function showStep(stepNumber) {
    document.querySelectorAll('.step-content').forEach(el => el.classList.remove('active'));
    
    const activeStep = document.getElementById(`step-${stepNumber}`);
    if (activeStep) activeStep.classList.add('active');

    const titles = { 1: "Datos Personales", 2: "Acompañantes y Mascotas", 3: "Confirmación y Pago" };
    const titleElement = document.getElementById('checkout-title');
    if (titleElement) titleElement.innerText = titles[stepNumber];

    updateStepper(stepNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    currentStep = stepNumber;
}

function updateStepper(stepNumber) {
    for (let i = 1; i <= 3; i++) {
        const item = document.getElementById(`indicator-${i}`);
        const circle = item.querySelector('.step-circle');
        if (item && circle) {
            item.classList.remove('active', 'completed');
            circle.innerHTML = i; 
            if (i < stepNumber) {
                item.classList.add('completed');
                circle.innerHTML = '<i class="fa-solid fa-check"></i>';
            } else if (i === stepNumber) {
                item.classList.add('active');
            }
        }
    }
}

// Mostrar/Ocultar la sección completa
window.toggleListSection = function(checkboxId, wrapperId, type) {
    const checkbox = document.getElementById(checkboxId);
    const wrapper = document.getElementById(wrapperId);
    const listContainerId = type === 'acompanante' ? 'list-acompanantes' : 'list-mascotas';
    const listContainer = document.getElementById(listContainerId);

    if (checkbox && checkbox.checked) {
        wrapper.style.display = 'block';
        if (listContainer.children.length === 0) {
            addDynamicEntry(type);
        }
    } else if (checkbox) {
        wrapper.style.display = 'none';
        listContainer.innerHTML = ''; 
    }
};

// Añadir nueva tarjeta (sin borrar las anteriores)
window.addDynamicEntry = function(type) {
    const containerId = type === 'acompanante' ? 'list-acompanantes' : 'list-mascotas';
    const container = document.getElementById(containerId);
    const count = container.children.length + 1;
    const card = document.createElement('div');
    card.className = 'dynamic-card';
    card.id = `${type}-entry-${Date.now()}`;
    let htmlContent = '';

    if (type === 'acompanante') {
        // Placeholder con data-i18n-placeholder
        htmlContent = `
            <h4><i class="fa-solid fa-user"></i> <span data-i18n="checkout.companion_label">Acompañante</span></h4>
            <div class="input-group">
                <input type="text" class="input-gray" required data-i18n-placeholder="checkout.ph_fullname">
            </div>
            <div class="input-group">
                <input type="text" class="input-gray" required data-i18n-placeholder="checkout.ph_dni">
            </div>
        `;
    } else {
        htmlContent = `
            <h4><i class="fa-solid fa-paw"></i> <span data-i18n="checkout.pet_label">Mascota</span></h4>
            <div class="input-group" style="margin-bottom: 12px;">
                <input type="text" class="input-gray" required data-i18n-placeholder="checkout.ph_pet_type">
            </div>
            <div class="input-group">
                <select class="styled-select" required>
                    <option value="" disabled selected data-i18n="checkout.select_size">Selecciona el tamaño</option>
                    <option value="pequeño" data-i18n="checkout.size_s">Pequeño</option>
                    <option value="mediano" data-i18n="checkout.size_m">Mediano</option>
                    <option value="grande" data-i18n="checkout.size_l">Grande</option>
                </select>
            </div>
        `;
    }
    htmlContent += `
        <button type="button" class="btn-delete-card" onclick="removeEntry(this)" title="Eliminar">
            <i class="fa-solid fa-trash-can"></i>
        </button>
    `;

    card.innerHTML = htmlContent;
    container.appendChild(card);
    if(window.i18n) window.i18n.run();
};

// Borrar una tarjeta específica
window.removeEntry = function(button) {
    const card = button.closest('.dynamic-card');
    if (card) {
        card.style.opacity = '0';
        card.style.transform = 'translateX(20px)';
        card.style.transition = 'all 0.3s ease';
        
        setTimeout(() => {
            card.remove();
        }, 300);
    }
};

// Lógica de Alergias
window.toggleSimpleSection = function(checkboxId, containerId) {
    const checkbox = document.getElementById(checkboxId);
    const container = document.getElementById(containerId);
    if(checkbox && checkbox.checked) {
        container.style.display = 'block';
        container.querySelector('textarea').setAttribute('required', 'true');
    } else if (checkbox) {
        container.style.display = 'none';
        container.querySelector('textarea').removeAttribute('required');
    }
};

// Función para validar los campos del paso actual
function validateCurrentStep(step) {
    const currentStepDiv = document.getElementById(`step-${step}`);
    if (!currentStepDiv) return true;

    const inputsRequeridos = currentStepDiv.querySelectorAll('input[required], select[required], textarea[required]');
    let pasoValido = true;

    inputsRequeridos.forEach(input => {
        if (input.offsetParent === null) return;

        const placeholderOriginal = input.getAttribute('placeholder') || "Campo";
        let condicion = input.value.trim().length > 0;
        
        if (input.type === 'email') condicion = input.value.includes('@') && input.value.length > 3;
        
        if (typeof validarCampoFormulario === 'function') {
            validarCampoFormulario(input, condicion, "Requerido", placeholderOriginal);
        } else if (!condicion) {
            input.style.border = "2px solid red";
        }

        if (!condicion) pasoValido = false;
    });

    return pasoValido;
}

window.goToStep = function(targetStep) {
    if (targetStep > currentStep) {
        if (!validateCurrentStep(currentStep)) return;
    }
    showStep(targetStep);
};

window.nextStep = function(targetStep) {
    if (targetStep > currentStep) {
        if (!validateCurrentStep(currentStep)) return;
    }
    showStep(targetStep);
};

window.prevStep = function(targetStep) {
    showStep(targetStep);
};


// ==========================================
// LÓGICA DE PÁGINA DE ÉXITO (compra_exito.html)
// ==========================================

function cargarDatosExito() {    
    const reserva = JSON.parse(localStorage.getItem('ultima_reserva'));

    if (reserva) {
        const titulo = document.getElementById('exito-titulo');
        const id = document.getElementById('exito-id');
        const email = document.getElementById('exito-email');
        const destino = document.getElementById('exito-destino');
        const precio = document.getElementById('exito-precio');

        if (titulo) titulo.innerText = reserva.viaje.titulo || "Experiencia Pack&Go";
        if (id) id.innerText = "#" + reserva.id_reserva;
        if (email) email.innerText = reserva.cliente.email || "tu correo";
        if (destino) destino.innerText = reserva.viaje.destino || "Mundo";
        if (precio) precio.innerText = "$" + reserva.precio_pagado;
        
    } else {
        const titulo = document.getElementById('exito-titulo');
        if(titulo) titulo.innerText = "No se encontró ninguna reserva reciente.";
    }
}

function cargarBotonesExito() {
    const accionesDiv = document.querySelector(".acciones-postcompra");
    if (!accionesDiv) return;
    const usuarioLogueado = obtenerUsuarioActual();

    let botonesHTML = '';

    if (usuarioLogueado) {
        botonesHTML = '<a href="perfil.html#viajes" class="btn-rounded-black salir" data-i18n="success.btn_profile">Ver en mi perfil</a>';
    } else {
        botonesHTML = '<button id="btn-descargar-pdf" class="btn-rounded-black" data-i18n="success.btn_pdf">Descargar PDF</button>';
    }

    botonesHTML += '<a href="index.html" class="btn-rounded-outline salir" data-i18n="success.btn_home">Volver al inicio</a>';
    accionesDiv.innerHTML = botonesHTML;
    const btnPdf = document.getElementById('btn-descargar-pdf');
    if (btnPdf) {
        btnPdf.addEventListener('click', () => {
            window.print(); 
        });
    }

    document.querySelectorAll('.salir').forEach(btn => {
        btn.addEventListener('click', (e) => {
            limpiarDatosTemporales();
        });
    });
    if(window.i18n) window.i18n.run();
}

function limpiarDatosTemporales() {
    localStorage.removeItem('compra_seleccionada'); 
    localStorage.removeItem('ultima_reserva');
    console.log("Datos temporales de compra eliminados.");
}