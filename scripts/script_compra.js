// scripts/script_compra.js

let currentStep = 1;

// --- NAVEGACIÓN Y STEPPER (Igual que antes) ---

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

// --- LÓGICA DE FORMULARIOS DINÁMICOS ---

// 1. Mostrar/Ocultar el input de cantidad
function toggleQuantitySection(checkboxId, qtyWrapperId, listContainerId) {
    const checkbox = document.getElementById(checkboxId);
    const qtyWrapper = document.getElementById(qtyWrapperId);
    const listContainer = document.getElementById(listContainerId);

    if (checkbox.checked) {
        qtyWrapper.style.display = 'block';
        // Foco en el input de cantidad para escribir rápido
        const inputQty = qtyWrapper.querySelector('input');
        if(inputQty) inputQty.focus();
    } else {
        qtyWrapper.style.display = 'none';
        listContainer.innerHTML = ''; // Limpiar formularios generados
        // Resetear valor del input number
        const inputQty = qtyWrapper.querySelector('input');
        if(inputQty) inputQty.value = '';
    }
}

// 2. Mostrar/Ocultar sección simple (Alergias)
function toggleSimpleSection(checkboxId, containerId) {
    const checkbox = document.getElementById(checkboxId);
    const container = document.getElementById(containerId);
    if(checkbox.checked) {
        container.style.display = 'block';
        container.querySelector('textarea').setAttribute('required', 'true');
    } else {
        container.style.display = 'none';
        const txt = container.querySelector('textarea');
        txt.removeAttribute('required');
        txt.value = '';
    }
}

// 3. GENERADOR DE HTML (El núcleo de tu petición)
function renderDynamicFields(type, containerId) {
    const container = document.getElementById(containerId);
    // Buscamos el input de cantidad correcto según el tipo
    const qtyInput = document.getElementById(type === 'acompanante' ? 'num-acompanantes' : 'num-mascotas');
    const cantidad = parseInt(qtyInput.value) || 0;

    // Limite de seguridad visual (opcional)
    if (cantidad > 20) return; 

    let html = '';

    for (let i = 1; i <= cantidad; i++) {
        if (type === 'acompanante') {
            html += `
                <div class="dynamic-card">
                    <h4 class="dynamic-title"><i class="fa-solid fa-user"></i> Acompañante ${i}</h4>
                    <div class="input-group">
                        <input type="text" placeholder="Nombre completo" class="input-gray" required>
                    </div>
                    <div class="input-group">
                        <input type="text" placeholder="DNI / Pasaporte" class="input-gray" required>
                    </div>
                </div>
            `;
        } else if (type === 'mascota') {
            html += `
                <div class="dynamic-card">
                    <h4 class="dynamic-title"><i class="fa-solid fa-paw"></i> Mascota ${i}</h4>
                    <div class="input-group">
                        <label style="font-size:12px;">Especie</label>
                        <input type="text" placeholder="Ej: Perro, Gato" class="input-gray" required>
                    </div>
                    <div class="input-group">
                        <label style="font-size:12px;">Tamaño</label>
                        <select class="input-gray" required>
                            <option value="" disabled selected>Seleccionar</option>
                            <option value="pequeño">Pequeño</option>
                            <option value="mediano">Mediano</option>
                            <option value="grande">Grande</option>
                        </select>
                    </div>
                </div>
            `;
        }
    }

    container.innerHTML = html;
}

// --- VALIDACIÓN Y NAVEGACIÓN ---

function validateCurrentStep(step) {
    const currentStepDiv = document.getElementById(`step-${step}`);
    if (!currentStepDiv) return true;

    // Busca inputs requeridos y VISIBLES
    const inputsRequeridos = currentStepDiv.querySelectorAll('input[required], select[required], textarea[required]');
    let pasoValido = true;

    // Validar también que si marcó checkbox, haya puesto cantidad > 0
    if (step === 2) {
        const checkAcomp = document.getElementById('check-acompanante');
        const numAcomp = document.getElementById('num-acompanantes');
        if (checkAcomp.checked && (numAcomp.value < 1 || numAcomp.value === '')) {
            validarCampoFormulario(numAcomp, false, "Min 1", "0");
            pasoValido = false;
        }
        
        const checkMasc = document.getElementById('check-mascota');
        const numMasc = document.getElementById('num-mascotas');
        if (checkMasc.checked && (numMasc.value < 1 || numMasc.value === '')) {
            validarCampoFormulario(numMasc, false, "Min 1", "0");
            pasoValido = false;
        }
    }

    inputsRequeridos.forEach(input => {
        // Ignorar elementos ocultos o dentro de contenedores ocultos
        if (input.offsetParent === null) return;

        const placeholderOriginal = input.getAttribute('placeholder') || "Campo";
        let condicion = false;

        if (input.type === 'email') condicion = input.value.includes('@') && input.value.length > 3;
        else if (input.tagName === 'SELECT') condicion = input.value !== "";
        else condicion = input.value.trim().length > 0;

        if (typeof validarCampoFormulario === 'function') {
            validarCampoFormulario(input, condicion, "Requerido", placeholderOriginal);
        } else {
            if (!condicion) input.style.border = "2px solid red";
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