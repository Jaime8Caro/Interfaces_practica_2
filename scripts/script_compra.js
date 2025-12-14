/**
 * GESTIÓN DE PROCESO DE COMPRA (CHECKOUT)
 */

let currentStep = 1;

function initCheckout(form) {
    const user = UserService.getCurrent();
    
    // PROTECCIÓN: Si no hay usuario, redirigir al login
    if (!user) {
        window.location.href = 'login.html'; 
        return;
    }

    autofillCheckoutData(user);
    loadSummary();
    form.addEventListener('submit', finalizePurchase);
    updateStepper(1);
    setupDynamicSections();
    setupPaymentSelection();
}

function autofillCheckoutData(user) {
    if (!user) return;

    const setInputValue = (placeholder, value) => {
        const input = document.querySelector(`#step-1 input[placeholder="${placeholder}"]`);
        if (input && value) {
            input.value = value;
        }
    };

    setInputValue("Nombre", user.nombre);
    setInputValue("Apellidos", user.apellidos);
    setInputValue("Correo electrónico", user.correo);
    setInputValue("Teléfono", user.telefono || ""); 
}

function loadSummary() {
    const trip = JSON.parse(localStorage.getItem('compra_seleccionada'));
    if (!trip) {
        window.location.href = 'experiencias.html';
        return;
    }

    const setText = (id, val) => { 
        const el = document.getElementById(id); 
        if (el) { el.innerText = val; }
    };
    
    setText('resumen-titulo', trip.titulo || "Experiencia");
    setText('resumen-destino', trip.destino || "Mundo");
    setText('resumen-duracion', trip.duracion || "--");
    
    if (trip.precio) {
        const price = `$${trip.precio.toFixed(2)}`;
        setText('resumen-precio-base', price);
        setText('resumen-total', price);
    }
}

function finalizePurchase(e) {
    e.preventDefault();
    
    // Obtenemos el usuario más actualizado posible
    const user = UserService.getCurrent();
    if (!user) {
        return window.mostrarAvisoLogin('login_modal.title_buy', 'login_modal.msg_buy');
    }

    const getVal = (sel) => {
        const el = document.querySelector(sel);
        return el ? el.value : '';
    };
    
    const getList = (id, fields) => {
        return Array.from(document.querySelectorAll(`#${id} .dynamic-card`)).map(card => {
            const obj = {};
            fields.forEach(f => {
                const input = card.querySelector(f.sel);
                if (input) obj[f.key] = input.value;
            });
            return obj;
        });
    };

    const contact = {
        nombre: getVal('#step-1 input[placeholder="Nombre"]'),
        email: getVal('#step-1 input[placeholder="Correo electrónico"]'),
        telefono: getVal('#step-1 input[placeholder="Teléfono"]')
    };

    const companions = getList('list-acompanantes', [
        {key: 'nombre', sel: 'input[type="text"]'}, {key: 'dni', sel: 'input:nth-of-type(2)'}
    ]);
    
    const pets = getList('list-mascotas', [
        {key: 'especie', sel: 'input'}, {key: 'tamano', sel: 'select'}
    ]);

    const trip = JSON.parse(localStorage.getItem('compra_seleccionada') || '{}');
    const allergyInput = document.querySelector('#form-alergia textarea');

    const reservation = {
        id_reserva: 'PKG-' + Date.now().toString().slice(-6),
        fecha_compra: new Date().toLocaleDateString(),
        estado: 'Confirmada',
        viaje: trip,
        cliente: contact,
        detalles: { 
            companions, 
            pets, 
            alergias: allergyInput ? allergyInput.value : 'Ninguna' 
        },
        precio_pagado: trip.precio
    };

    // --- AQUÍ ESTÁ EL CAMBIO CLAVE ---
    // Guardamos la reserva DENTRO del usuario
    if (!user.reservas) {
        user.reservas = [];
    }
    user.reservas.push(reservation);

    // Actualizamos el usuario en LocalStorage (y en la lista global)
    UserService.saveCurrent(user);

    // Guardamos la última reserva para la pantalla de éxito
    localStorage.setItem('ultima_reserva', JSON.stringify(reservation));

    window.location.href = 'compra_exito.html';
}

// --- LIMPIEZA DE DATOS ---
// Esta función se llamará cuando el usuario salga de la pantalla de éxito
function cleanPurchaseData() {
    localStorage.removeItem('compra_seleccionada');
    localStorage.removeItem('ultima_reserva');
    console.log("Datos temporales de compra eliminados.");
}

// --- NAVEGACIÓN Y VALIDACIÓN (Igual que antes) ---
window.goToStep = (step) => {
    if (step > currentStep && !validateStep(currentStep)) return;
    showStep(step);
};

window.nextStep = (step) => window.goToStep(step);
window.prevStep = (step) => showStep(step);

function showStep(step) {
    document.querySelectorAll('.step-content').forEach(el => el.classList.remove('active'));
    document.getElementById(`step-${step}`)?.classList.add('active');
    
    const titles = { 1: "Datos Personales", 2: "Acompañantes", 3: "Pago" };
    const titleEl = document.getElementById('checkout-title');
    if (titleEl) titleEl.innerText = titles[step];

    updateStepper(step);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    currentStep = step;
}

function validateStep(step) {
    const container = document.getElementById(`step-${step}`);
    if (!container) return true;

    let valid = true;
    container.querySelectorAll('input[required], select[required], textarea[required]').forEach(input => {
        if (input.offsetParent === null) return;
        
        let isValid = input.value.trim().length > 0;
        if (input.type === 'email') isValid = input.value.includes('@') && input.value.length > 3;

        if (!isValid) {
            input.style.border = "2px solid red";
            valid = false;
        } else {
            input.style.border = "";
        }
    });
    return valid;
}

function updateStepper(step) {
    for (let i = 1; i <= 3; i++) {
        const item = document.getElementById(`indicator-${i}`);
        const circle = item?.querySelector('.step-circle');
        
        if (item && circle) {
            item.classList.remove('active', 'completed');
            circle.innerHTML = i;
            if (i < step) {
                item.classList.add('completed');
                circle.innerHTML = '<i class="fa-solid fa-check"></i>';
            } else if (i === step) {
                item.classList.add('active');
            }
        }
    }
}

// --- SECCIONES DINÁMICAS ---
function setupDynamicSections() {
    window.toggleListSection = (checkId, wrapId, type) => {
        const chk = document.getElementById(checkId);
        const wrap = document.getElementById(wrapId);
        const list = document.getElementById(type === 'acompanante' ? 'list-acompanantes' : 'list-mascotas');
        
        if (chk?.checked) {
            wrap.style.display = 'block';
            if (list.children.length === 0) addDynamicEntry(type);
        } else {
            wrap.style.display = 'none';
            list.innerHTML = '';
        }
    };

    window.addDynamicEntry = (type) => {
        const container = document.getElementById(type === 'acompanante' ? 'list-acompanantes' : 'list-mascotas');
        const card = document.createElement('div');
        card.className = 'dynamic-card';
        
        const content = type === 'acompanante' 
            ? `<h4><i class="fa-solid fa-user"></i> <span data-i18n="checkout.companion_label"></span></h4>
               <div class="input-group"><input type="text" class="input-gray" required data-i18n-placeholder="checkout.ph_fullname"></div>
               <div class="input-group"><input type="text" class="input-gray" required data-i18n-placeholder="checkout.ph_dni"></div>`
            : `<h4><i class="fa-solid fa-paw"></i> <span data-i18n="checkout.pet_label"></span></h4>
               <div class="input-group"><input type="text" class="input-gray" required data-i18n-placeholder="checkout.ph_pet_type"></div>
               <div class="input-group"><select class="styled-select" required>
                   <option value="" disabled selected data-i18n="checkout.select_size"></option>
                   <option value="pequeño" data-i18n="checkout.size_s"></option>
                   <option value="mediano" data-i18n="checkout.size_m"></option>
                   <option value="grande" data-i18n="checkout.size_l"></option>
               </select></div>`;

        card.innerHTML = `${content}<button type="button" class="btn-delete-card" onclick="removeEntry(this)"><i class="fa-solid fa-trash-can"></i></button>`;
        container.appendChild(card);
        if (window.i18n) window.i18n.run();
    };

    window.removeEntry = (btn) => {
        const card = btn.closest('.dynamic-card');
        if (card) card.remove();
    };
    
    window.toggleSimpleSection = (chkId, boxId) => {
        const box = document.getElementById(boxId);
        const chk = document.getElementById(chkId);
        if (box && chk) {
            box.style.display = chk.checked ? 'block' : 'none';
            const txt = box.querySelector('textarea');
            if (txt) chk.checked ? txt.setAttribute('required', 'true') : txt.removeAttribute('required');
        }
    };
}

function setupPaymentSelection() {
    const opts = document.querySelectorAll('.payment-option');
    opts.forEach(o => o.addEventListener('click', () => {
        opts.forEach(x => x.classList.remove('selected'));
        o.classList.add('selected');
        const radio = o.querySelector('input[type="radio"]');
        if (radio) radio.checked = true;
    }));
}

// --- PÁGINA ÉXITO ---
function initSuccessPage() {
    const reserva = JSON.parse(localStorage.getItem('ultima_reserva'));
    const setText = (id, txt) => { 
        const el = document.getElementById(id); 
        if (el) { 
            el.innerText = txt; 
            el.removeAttribute('data-i18n');
        }
        // else{console.log("No encuentro algo");}
    };

    if (reserva) {
        setText('exito-titulo', reserva.viaje.titulo);
        // console.log("La reserva se llama:", reserva.viaje.titulo)
        setText('exito-id', "#" + reserva.id_reserva);
        setText('exito-email', reserva.cliente.email);
        setText('exito-fecha', reserva.fecha_compra);
        setText('exito-precio', "$" + reserva.precio_pagado);
    }

    const actions = document.querySelector(".acciones-postcompra");
    if (actions) {
        // 1. Configurar botón PDF
        const btnPdf = document.getElementById('btn-descargar-pdf');
        if (btnPdf) {
            btnPdf.addEventListener('click', () => {
                window.print(); // Esto abre el diálogo de impresión (Guardar como PDF)
            });
        }
        document.querySelectorAll('.salir').forEach(b => b.addEventListener('click', () => {
            cleanPurchaseData();
        }));
    }
}

function init() {
    const checkoutForm = document.getElementById('checkoutForm');
    const successSection = document.querySelector('.success-section');

    if (checkoutForm) {
        initCheckout(checkoutForm);
    } else if (successSection) {
        initSuccessPage();
    }
}

init();