// scripts/script_compra.js

let currentStep = 1;


// Se ejecuta nada más cargar el script (gracias al defer)
detectarPaginaYEjecutar();

function detectarPaginaYEjecutar() {
    const checkoutForm = document.getElementById('checkoutForm');
    const successSection = document.querySelector('.success-section');

    // 1. SI ESTAMOS EN EL PROCESO DE COMPRA (proceso_compra.html)
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
        cargarBotonesExito();
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
        const titulo = document.getElementById('resumen-titulo');
        const destino = document.getElementById('resumen-destino');
        const precioRow = document.getElementById('resumen-precio-base');
        const precioTotal = document.getElementById('resumen-total');
        const duracion = document.getElementById('resumen-duracion');

        if (titulo) titulo.innerText = viaje.titulo || "Experiencia";
        if (destino) destino.innerText = viaje.destino || "Mundo";
        if (duracion) duracion.innerText = viaje.duracion || "--";
        
        // Cálculos de precio
        if (viaje.precio) {
            const precioFmt = `$${viaje.precio.toFixed(2)}`;
            if (precioRow) precioRow.innerText = precioFmt;
            if (precioTotal) precioTotal.innerText = precioFmt;
        }
    } else {
        console.warn("No hay compra seleccionada en localStorage.");
    }
}

function finalizarCompra(e) {
    e.preventDefault(); // Evitar recarga

    // Aseguramos que la reserva solo se realice con sesión válida
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


// --- FORMULARIOS DINÁMICOS (Paso 2 - Lógica Mejorada) ---

// 1. Mostrar/Ocultar la sección completa (Checkbox)
window.toggleListSection = function(checkboxId, wrapperId, type) {
    const checkbox = document.getElementById(checkboxId);
    const wrapper = document.getElementById(wrapperId);
    const listContainerId = type === 'acompanante' ? 'list-acompanantes' : 'list-mascotas';
    const listContainer = document.getElementById(listContainerId);

    if (checkbox && checkbox.checked) {
        wrapper.style.display = 'block';
        // Si la lista está vacía al marcar, añadimos el primero automáticamente
        if (listContainer.children.length === 0) {
            addDynamicEntry(type);
        }
    } else if (checkbox) {
        wrapper.style.display = 'none';
        // Opcional: ¿Borrar datos al desmarcar? 
        // Si quieres conservar los datos por si se equivocó al desmarcar, comenta la siguiente línea:
        listContainer.innerHTML = ''; 
    }
};

// 2. Añadir nueva tarjeta (sin borrar las anteriores)
window.addDynamicEntry = function(type) {
    const containerId = type === 'acompanante' ? 'list-acompanantes' : 'list-mascotas';
    const container = document.getElementById(containerId);
    
    // Calcular el número para el título (1, 2, 3...)
    const count = container.children.length + 1;

    // Crear el div de la tarjeta
    const card = document.createElement('div');
    card.className = 'dynamic-card';
    // Añadimos un ID único temporal para poder animar o referenciar si fuera necesario
    card.id = `${type}-entry-${Date.now()}`;

    let htmlContent = '';

    if (type === 'acompanante') {
        htmlContent = `
            <h4><i class="fa-solid fa-user"></i> Acompañante</h4>
            <div class="input-group">
                <input type="text" placeholder="Nombre completo" class="input-gray" required>
            </div>
            <div class="input-group">
                <input type="text" placeholder="DNI / Pasaporte" class="input-gray" required>
            </div>
        `;
    } else {
        // TARJETA DE MASCOTA MEJORADA
        htmlContent = `
            <h4><i class="fa-solid fa-paw"></i> Mascota</h4>
            <div class="input-group" style="margin-bottom: 12px;">
                <input type="text" placeholder="Ej: Perro, Gato" class="input-gray" required>
            </div>
            <div class="input-group">
                <select class="styled-select" required>
                    <option value="" disabled selected>Selecciona el tamaño</option>
                    <option value="pequeño">Pequeño</option>
                    <option value="mediano">Mediano</option>
                    <option value="grande">Grande</option>
                </select>
            </div>
        `;
    }
    // Añadimos el botón de borrar
    htmlContent += `
        <button type="button" class="btn-delete-card" onclick="removeEntry(this)" title="Eliminar">
            <i class="fa-solid fa-trash-can"></i>
        </button>
    `;

    card.innerHTML = htmlContent;
    container.appendChild(card);
};

// 3. Borrar una tarjeta específica
window.removeEntry = function(button) {
    // El botón está dentro de .dynamic-card
    const card = button.closest('.dynamic-card');
    if (card) {
        // Animación de salida (opcional)
        card.style.opacity = '0';
        card.style.transform = 'translateX(20px)';
        card.style.transition = 'all 0.3s ease';
        
        setTimeout(() => {
            card.remove();
        }, 300);
    }
};

// 4. Lógica de Alergias (Simple)
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

function cargarBotonesExito() {
    const accionesDiv = document.querySelector(".acciones-postcompra");
    if (!accionesDiv) return;
    const usuarioLogueado = obtenerUsuarioActual();

    let botonesHTML = '';

    if (usuarioLogueado) {
        // CASO A: LOGUEADO -> Botón de Perfil
        // CAMBIO AQUÍ: Añadimos #viajes al final del enlace
        botonesHTML = '<a href="perfil.html#viajes" class="btn-rounded-black salir">Ver en mi perfil</a>';
    } else {
        // CASO B: NO LOGUEADO -> Botón de PDF
        botonesHTML = '<button id="btn-descargar-pdf" class="btn-rounded-black">Descargar PDF</button>';
    }

    // Agregamos el botón de "Volver" que siempre sale
    botonesHTML += '<a href="index.html" class="btn-rounded-outline salir">Volver al inicio</a>';

    // Inyectamos el HTML
    accionesDiv.innerHTML = botonesHTML;

    // Lógica extra: Si aparece el botón de PDF, le damos funcionalidad
    const btnPdf = document.getElementById('btn-descargar-pdf');
    if (btnPdf) {
        btnPdf.addEventListener('click', () => {
            window.print(); 
        });
    }

    document.querySelectorAll('.salir').forEach(btn => {
        btn.addEventListener('click', (e) => {
            // No prevenimos el default, queremos que el enlace funcione y cambie de página,
            // pero antes borramos los datos temporales de "última compra".
            limpiarDatosTemporales();
        });
    });
}

function limpiarDatosTemporales() {
    localStorage.removeItem('compra_seleccionada'); // Borra el viaje del carrito
    localStorage.removeItem('ultima_reserva');      // Borra los datos de esta pantalla
    console.log("Datos temporales de compra eliminados.");
}