/**
 * LÓGICA DE REGISTRO Y MODAL DE PRIVACIDAD
 */
function initRegister() {
    const registerForm = document.querySelector(".auth-card.signup-mode form");
    
    if (!registerForm) {
        return;
    }

    // --- A. MANEJO DEL FORMULARIO ---
    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // 1. Referencias
        const fields = {
            nombre: document.getElementById('nombre'),
            apellidos: document.getElementById('apellidos'),
            fecha: document.getElementById('fecha-nacimiento'),
            email: document.getElementById('email'),
            confEmail: document.getElementById('confirmar-email'),
            user: document.getElementById('usuario'),
            pass: document.getElementById('password'),
            img: document.getElementById('foto-perfil'),
            privacy: document.getElementById("privacy")
        };

        const values = {
            nombre: fields.nombre.value.trim(),
            apellidos: fields.apellidos.value.trim(),
            fecha: fields.fecha.value,
            email: fields.email.value.trim(),
            confEmail: fields.confEmail.value.trim(),
            apodo: fields.user.value.trim(),
            pass: fields.pass.value.trim(),
            imgFile: fields.img.files?.[0]
        };

        // 2. Validaciones
        let isValid = true;
        
        const validate = (input, condition, msg, placeholder) => {
            validarCampoFormulario(input, condition, msg, placeholder);
            if (!condition) {
                isValid = false;
            }
        };

        validate(fields.nombre, values.nombre.length >= 3, "Mínimo 3 letras", "Nombre");
        validate(fields.apellidos, values.apellidos.length >= 3, "Mínimo 3 letras", "Apellidos");
        
        // Validación de usuario existente
        const users = UserService.getAll();
        const emailExists = users.some(u => u.correo === values.email);
        const emailFormat = values.email.includes("@") && values.email.length > 3;

        if (emailFormat && emailExists) {
            validarCampoFormulario(fields.email, false, "¡Correo ya registrado!", "Correo electrónico");
            isValid = false;
        } else {
            validate(fields.email, emailFormat, "Correo inválido", "Correo electrónico");
        }

        validate(fields.confEmail, values.email === values.confEmail && values.email !== "", "No coinciden", "Confirmación correo");
        validate(fields.fecha, values.fecha && new Date(values.fecha) < new Date(), "Fecha inválida", "Fecha de nacimiento");
        validate(fields.user, values.apodo.length >= 3, "Usuario corto", "Nombre de usuario");
        validate(fields.pass, values.pass.length >= 6, "Mínimo 6 caracteres", "Contraseña");

        // Privacidad
        const privacyLabel = registerForm.querySelector('label[for="privacy"]');
        if (!fields.privacy.checked) {
            privacyLabel.style.color = "red";
            isValid = false;
        } else {
            privacyLabel.style.color = "#333";
        }

        if (!isValid) {
            return;
        }

        // 3. Creación de objeto usuario
        const newUser = {
            nombre: values.nombre,
            apellidos: values.apellidos,
            correo: values.email,
            fecha_nacimiento: values.fecha,
            apodo: values.apodo,
            contraseña: values.pass,
            imagen: null
        };

        const executeRegister = (userObj) => {
            if (UserService.register(userObj)) {
                window.location.href = "index.html";
            }
        };

        if (values.imgFile) {
            const reader = new FileReader();
            reader.onload = (ev) => {
                newUser.imagen = ev.target.result;
                executeRegister(newUser);
            };
            reader.readAsDataURL(values.imgFile);
        } else {
            executeRegister(newUser);
        }
    });

    // --- B. PREVISUALIZACIÓN DE IMAGEN ---
    const imgInput = document.getElementById('foto-perfil');
    const imgPreview = document.getElementById('avatar-img-preview');
    
    if (imgInput && imgPreview) {
        imgInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file && file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = (ev) => imgPreview.src = ev.target.result;
                reader.readAsDataURL(file);
            } else {
                imgPreview.src = "assets/defecto.png";
            }
        });
    }

    initPrivacyModal();
}

function initPrivacyModal() {
    const modal = document.getElementById("privacy-modal");
    const checkbox = document.getElementById("privacy");
    const link = document.getElementById("open-privacy-modal");
    const closeBtn = document.getElementById("close-modal-x");
    const acceptBtn = document.getElementById("btn-accept-privacy");
    const footer = document.getElementById("privacy-modal-footer");
    const textField = document.getElementById("privacy-text");

    if (!modal) {
        return;
    }

    const toggleModal = (show, mode = 'read') => {
        if (show) {
            modal.classList.add("show");
            document.body.classList.add("no-scroll");
            if (textField) {
                textField.scrollTop = 0;
            }
            
            if (footer) {
                footer.style.display = (mode === 'sign') ? "flex" : "none";
            }
            if (acceptBtn && mode === 'sign') {
                acceptBtn.disabled = true;
                acceptBtn.style.opacity = "0.5";
                acceptBtn.style.cursor = "not-allowed";
            }
        } else {
            modal.classList.remove("show");
            document.body.classList.remove("no-scroll");
        }
    };

    if (checkbox) {
        checkbox.addEventListener("click", (e) => {
            if (checkbox.checked) {
                e.preventDefault();
                toggleModal(true, 'sign');
            }
        });
    }

    if (link) {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            toggleModal(true, checkbox.checked ? 'read' : 'sign');
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", () => toggleModal(false));
    }
    
    window.addEventListener("click", (e) => { 
        if (e.target === modal) {
            toggleModal(false);
        } 
    });

    if (textField) {
        textField.addEventListener("scroll", () => {
            if (footer.style.display !== "none" && acceptBtn) {
                if (textField.scrollTop + textField.clientHeight >= textField.scrollHeight - 20) {
                    acceptBtn.disabled = false;
                    acceptBtn.style.opacity = "1";
                    acceptBtn.style.cursor = "pointer";
                }
            }
        });
    }

    if (acceptBtn) {
        acceptBtn.addEventListener("click", (e) => {
            e.preventDefault();
            if (checkbox) {
                checkbox.checked = true;
                checkbox.style.outline = "none";
            }
            const label = document.querySelector('label[for="privacy"]');
            if (label) {
                label.style.color = "#333";
            }
            toggleModal(false);
        });
    }
}

initRegister();