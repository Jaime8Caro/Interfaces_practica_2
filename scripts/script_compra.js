// scripts/script_compra.js

let currentStep = 1;

// --- INICIALIZACIÓN DE LA PÁGINA ---

// Se ejecuta nada más cargar el script (gracias al defer)
detectarPaginaYEjecutar();

function detectarPaginaYEjecutar() {
    const checkoutForm = document.getElementById('checkoutForm');
    const successSection = document.querySelector('.success-section');

    // 1. SI ESTAMOS EN EL PROCESO DE COMPRA (proceso_compra.html)
    if (checkoutForm) {
        // Cargar datos del viaje en el Paso 3
        cargarResumenCompra();
        // Vincular el submit
        checkoutForm.addEventListener('submit', finalizarCompra);
        // Inicializar stepper visualmente en paso 1 (por si acaso)
        updateStepper(1);
    }
    
    // 2. SI ESTAMOS EN LA PÁGINA DE ÉXITO (compra_exito.html)
    else if (successSection) {
        cargarDatosExito();
    }
}


// ==========================================
// LÓGICA DE PROCESO DE COMPRA (proceso_compra.html)
// ==========================================

function cargarResumenCompra() {
    // Recuperamos el viaje que el usuario eligió
    const compraGuardada = localStorage.getItem('compra_seleccionada');
    
    if (compraGuardada) {
        const viaje = JSON.parse(compraGuardada);
        
        // Elementos del DOM en el Paso 3
        const tituloEl = document.getElementById('resumen-titulo');
        const destinoEl = document.getElementById('resumen-destino');
        const precioRowEl = document.getElementById('resumen-precio-base');
        const precioTotalEl = document.getElementById('resumen-total');
        const duracionEl = document.getElementById('resumen-duracion');

        if (tituloEl) tituloEl.innerText = viaje.titulo || "Experiencia";
        if (destinoEl) destinoEl.innerText = viaje.destino || "Mundo";
        if (duracionEl) duracionEl.innerText = viaje.duracion || "--";
        
        // Cálculos de precio
        if (viaje.precio) {
            const precioFmt = `$${viaje.precio.toFixed(2)}`;
            if (precioRowEl) precioRowEl.innerText = precioFmt;
            if (precioTotalEl) precioTotalEl.innerText = precioFmt;
        }
    } else {
        console.warn("No hay compra seleccionada en localStorage.");
    }
}

function finalizarCompra(e) {
    e.preventDefault(); // Evitar recarga

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


// --- FORMULARIOS DINÁMICOS (Paso 2) ---

window.toggleQuantitySection = function(checkboxId, qtyWrapperId, listContainerId, type) {
    const checkbox = document.getElementById(checkboxId);
    const qtyWrapper = document.getElementById(qtyWrapperId);
    
    if (checkbox && checkbox.checked) {
        qtyWrapper.style.display = 'block';
        const inputQty = qtyWrapper.querySelector('input');
        if(inputQty) inputQty.value = 1; // Empezar en 1
        window.renderDynamicFields(type, listContainerId);
    } else if (checkbox) {
        qtyWrapper.style.display = 'none';
        document.getElementById(listContainerId).innerHTML = '';
        const inputQty = qtyWrapper.querySelector('input');
        if(inputQty) inputQty.value = '';
    }
};

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

window.renderDynamicFields = function(type, containerId) {
    const container = document.getElementById(containerId);
    const qtyInputId = type === 'acompanante' ? 'num-acompanantes' : 'num-mascotas';
    const cantidad = parseInt(document.getElementById(qtyInputId).value) || 0;
    
    if (cantidad > 20) return;

    let html = '';
    for (let i = 1; i <= cantidad; i++) {
        if (type === 'acompanante') {
            html += `
            <div class="dynamic-card">
                <h4 class="dynamic-title"><i class="fa-solid fa-user"></i> Acompañante ${i}</h4>
                <div class="input-group"><input type="text" placeholder="Nombre completo" class="input-gray" required></div>
                <div class="input-group"><input type="text" placeholder="DNI / Pasaporte" class="input-gray" required></div>
            </div>`;
        } else {
            html += `
            <div class="dynamic-card">
                <h4 class="dynamic-title"><i class="fa-solid fa-paw"></i> Mascota ${i}</h4>
                <div class="input-group"><input type="text" placeholder="Ej: Perro, Gato" class="input-gray" required></div>
                <div class="input-group">
                    <select class="input-gray" required>
                        <option value="" disabled selected>Tamaño</option>
                        <option value="pequeño">Pequeño</option>
                        <option value="mediano">Mediano</option>
                        <option value="grande">Grande</option>
                    </select>
                </div>
            </div>`;
        }
    }
    container.innerHTML = html;
};

// --- VALIDACIÓN Y NAVEGACIÓN ---

function validateCurrentStep(step) {
    const currentStepDiv = document.getElementById(`step-${step}`);
    if (!currentStepDiv) return true;

    const inputsRequeridos = currentStepDiv.querySelectorAll('input[required], select[required], textarea[required]');
    let pasoValido = true;

    inputsRequeridos.forEach(input => {
        if (input.offsetParent === null) return; // Ignorar ocultos

        const placeholderOriginal = input.getAttribute('placeholder') || "Campo";
        let condicion = input.value.trim().length > 0;
        
        if (input.type === 'email') condicion = input.value.includes('@') && input.value.length > 3;
        
        // Usamos la función global si existe (está en script.js)
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
        // Rellenar datos en la pantalla de éxito
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