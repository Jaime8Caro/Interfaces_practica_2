const form = document.querySelector(".auth-card.signup-mode form");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // --- SELECCIÓN DE ELEMENTOS ---
        const nombreInput = document.getElementById('nombre');
        const apellidosInput = document.getElementById('apellidos');
        const fechaInput = document.getElementById('fecha-nacimiento');
        const correoInput = document.getElementById('email');
        const correoConfInput = document.getElementById('confirmar-email');
        const usuarioInput = document.getElementById('usuario');
        const passInput = document.getElementById('password');
        const imagenInput = document.getElementById('foto-perfil');
        const privacyInput = document.getElementById("privacy");
        const privacyLabel = form.querySelector('label[for="privacy"]');

        // --- VALORES ---
        const nombre = nombreInput.value.trim();
        const apellidos = apellidosInput.value.trim();
        const fechaNacimiento = fechaInput.value;
        const correo = correoInput.value.trim();
        const correoConfirmacion = correoConfInput.value.trim();
        const apodo = usuarioInput.value.trim();
        const contraseña = passInput.value.trim();
        const imagenPerfil = imagenInput.files && imagenInput.files[0] ? imagenInput.files[0] : null;

        let formularioValido = true;

        // --- VALIDACIONES VISUALES ---

        // 1. Nombre y Apellidos
        validarCampoFormulario(nombreInput, nombre.length >= 3, "Mínimo 3 letras", "Nombre");
        if (nombre.length < 3) formularioValido = false;

        validarCampoFormulario(apellidosInput, apellidos.length >= 3, "Mínimo 3 letras", "Apellidos");
        if (apellidos.length < 3) formularioValido = false;

        // 2. Correo y Duplicados
        let esCorreoFormatoValido = correo.length >= 3 && correo.includes("@");
        
        if (esCorreoFormatoValido && typeof validarUsuarioExistente === 'function' && validarUsuarioExistente(correo)) {
            validarCampoFormulario(correoInput, false, "¡Correo ya registrado!", "Correo electrónico");
            formularioValido = false;
        } else {
            validarCampoFormulario(correoInput, esCorreoFormatoValido, "Correo inválido", "Correo electrónico");
            if (!esCorreoFormatoValido) formularioValido = false;
        }

        // 3. Confirmación de Correo
        const coinciden = (correo === correoConfirmacion) && (correo !== "");
        validarCampoFormulario(correoConfInput, coinciden, "Correos no coinciden", "Confirmacion correo");
        if (!coinciden) formularioValido = false;

        // 4. Fecha (Validar que no esté vacía y sea fecha pasada)
        const esFechaValida = fechaNacimiento && (new Date(fechaNacimiento) < new Date());
        validarCampoFormulario(fechaInput, esFechaValida, "Fecha inválida", "Fecha de nacimiento");
        if (!esFechaValida) formularioValido = false;

        // 5. Usuario / Apodo
        validarCampoFormulario(usuarioInput, apodo.length >= 3, "Usuario muy corto", "Nombre de usuario");
        if (apodo.length < 3) formularioValido = false;

        // 6. Contraseña
        validarCampoFormulario(passInput, contraseña.length >= 6, "Mínimo 6 caracteres", "Contraseña");
        if (contraseña.length < 6) formularioValido = false;

        // Validación de Privacidad
        if (!privacyInput.checked) {
            privacyLabel.style.color = "red";
            privacyInput.style.outline = "2px solid red";
            privacyInput.style.outlineOffset = "3px";
            formularioValido = false;
        } else {
            privacyInput.style.outline = "none";
            privacyLabel.style.color = "#333";
        }

        // --- GUARDADO ---
        if (!formularioValido) {
            return false;
        }

        // Objeto usuario
        const nuevoUsuario = {
            nombre, apellidos, correo,
            fecha_nacimiento: fechaNacimiento,
            apodo, contraseña,
            imagen: null
        };

        const finalizarRegistro = (datosUsuario) => {

        if (guardarUsuario(datosUsuario)){
            window.location.href = "index.html";
            }
        };

        // Procesar imagen si existe
        if (imagenPerfil) {
            const reader = new FileReader();
            reader.onload = function (e) {
                nuevoUsuario.imagen = e.target.result;
                finalizarRegistro(nuevoUsuario);
            };
            reader.readAsDataURL(imagenPerfil);
        } else {
            finalizarRegistro(nuevoUsuario);
        }
    });


    // MODAL DE PRIVACIDAD:
    // --- REFERENCIAS ---
    const modal = document.getElementById("privacy-modal");
    const checkbox = document.getElementById("privacy");
    const linkPrivacy = document.getElementById("open-privacy-modal");
    const closeBtn = document.getElementById("close-modal-x");
    
    // Elementos internos del modal
    const modalFooter = document.getElementById("privacy-modal-footer");
    const acceptBtn = document.getElementById("btn-accept-privacy");
    const textField = document.getElementById("privacy-text");

    // --- 1. FUNCIÓN PARA ABRIR EL MODAL (CON MODOS) ---
    // modo = 'sign' (firmar) | 'read' (solo leer)
    const openModal = (mode) => {
        modal.classList.add("show");
        document.body.classList.add("no-scroll"); // Bloquea scroll del fondo
        
        // Resetear scroll siempre arriba
        if (textField) textField.scrollTop = 0;

        if (mode === 'sign') {
            // MODO FIRMAR: Botón visible y bloqueado
            if (modalFooter) modalFooter.style.display = "flex"; 
            if (acceptBtn) {
                acceptBtn.disabled = true;
                acceptBtn.style.opacity = "0.5";
                acceptBtn.style.cursor = "not-allowed";
            }
        } else {
            // MODO LECTURA: Ocultamos el botón/footer para que no moleste
            if (modalFooter) modalFooter.style.display = "none";
        }
    };

    // --- 2. LÓGICA DEL CHECKBOX (EL RECUADRO) ---
    if (checkbox) {
        checkbox.addEventListener("click", (e) => {
            // Cuando haces clic, el navegador cambia el estado internamente antes de avisarnos.
            // - Si estaba vacío, ahora 'checked' es TRUE.
            // - Si estaba lleno, ahora 'checked' es FALSE.

            if (checkbox.checked) {
                // CASO: Estaba vacío y el usuario quiere marcarlo.
                // INTERCEPTAMOS: No dejamos marcarlo directamente. Abrimos modal.
                e.preventDefault(); 
                openModal('sign');
            } else {
                // CASO: Estaba lleno y el usuario quiere desmarcarlo.
                // PERMITIMOS: No ponemos preventDefault(). 
                // El navegador quitará el tick automáticamente.
            }
        });
    }

    // --- 3. LÓGICA DEL ENLACE DE TEXTO ---
    if (linkPrivacy) {
        linkPrivacy.addEventListener("click", (e) => {
            e.preventDefault();
            
            // Si el checkbox YA está marcado...
            if (checkbox && checkbox.checked) {
                // Abrimos en modo SOLO LECTURA (sin botón de firmar)
                openModal('read');
            } else {
                // Si no está marcado, abrimos en modo FIRMAR
                openModal('sign');
            }
        });
    }

    // --- 4. CERRAR MODAL ---
    const closeModal = () => {
        modal.classList.remove("show");
        document.body.classList.remove("no-scroll");
    };

    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    window.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
    });

    // --- 5. DETECTAR SCROLL (Solo si estamos en modo firmar) ---
    if (textField) {
        textField.addEventListener("scroll", function() {
            // Solo activamos lógica si el botón es visible (footer no oculto)
            const isFooterVisible = modalFooter && modalFooter.style.display !== "none";
            
            if (isFooterVisible) {
                // Tolerancia de 2px
                if (this.scrollTop + this.clientHeight >= this.scrollHeight - 20) {
                    if (acceptBtn) {
                        acceptBtn.disabled = false;
                        acceptBtn.style.opacity = "1";
                        acceptBtn.style.cursor = "pointer";
                    }
                }
            }
        });
    }

    // --- 6. ACEPTAR Y FIRMAR ---
    if (acceptBtn) {
        acceptBtn.addEventListener("click", (e) => {
            e.preventDefault();
            
            if (checkbox) {
                // Marcamos el checkbox mediante código
                checkbox.checked = true;
                
                // Limpieza visual (quitar bordes rojos si hubiera validación)
                checkbox.style.outline = "none";
                const label = document.querySelector('label[for="privacy"]');
                if(label) label.style.color = "#333";
            }

            closeModal();
        });
    }

    //SUBIR IMAGEN:
    const inputFoto = document.getElementById('foto-perfil');
    const imgPreview = document.getElementById('avatar-img-preview');

    if (inputFoto && imgPreview) {
        inputFoto.addEventListener('change', function(e) {
            const file = e.target.files[0];

            if (file) {
                // 1. Validar que sea imagen (opcional pero recomendado)
                if (!file.type.startsWith('image/')) {
                    alert("Por favor, selecciona un archivo de imagen válido.");
                    return;
                }

                // 2. Usar FileReader para leer la imagen y mostrarla
                const reader = new FileReader();
                
                reader.onload = function(evt) {
                    imgPreview.src = evt.target.result; // Cambiamos el src de la imagen
                };
                
                reader.readAsDataURL(file);
            } else {
                // Si cancela, volver a la imagen por defecto
                imgPreview.src = "assets/defecto.jpg"; 
            }
        });
    }
}

