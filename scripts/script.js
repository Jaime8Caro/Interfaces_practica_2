function validarCampoFormulario(campo, esValido, mensajeError, placeholderOriginal) {
    if (!esValido) {
        campo.value = "";
        campo.placeholder = mensajeError;
        campo.classList.add("campo-invalido");
    } else {
        campo.placeholder = placeholderOriginal;
        campo.classList.remove("campo-invalido");
    }
}

function login(correo, contraseña) {
    const usuariosGuardados = obtenerUsuarios();
    for (let i = 0; i < usuariosGuardados.length; i++) {
        const usuario = usuariosGuardados[i];
        if (usuario.correo === correo && usuario.contraseña === contraseña) {
            localStorage.setItem("usuarioActual", JSON.stringify(usuario));
            return usuario;
        }
    }
    return null;
}

function logout(redirectUrl = "index.html") {
    localStorage.setItem("usuarioActual", null);
    window.location.href = redirectUrl;
}


function obtenerUsuarioActual() {
    const usuario = localStorage.getItem("usuarioActual");
    if (usuario) {
        return JSON.parse(usuario);
    }
    return null;
}

function obtenerUsuarios() {
    const usuarios = localStorage.getItem("usuarios");
    if (usuarios) {
        return JSON.parse(usuarios);
    }
    return [];
}

function guardarUsuario(usuarioNuevo) {
    let usuariosGuardados = obtenerUsuarios();

    //Comprobar si ya existe ese correo
    if (validarUsuarioExistente(usuarioNuevo.correo)) {
        alert("Ese correo ya está registrado.");
        return false;
    }

    //Agregar el nuevo usuario
    usuariosGuardados.push(usuarioNuevo);

    //Guardar la lista actualizada
    localStorage.setItem("usuarios", JSON.stringify(usuariosGuardados));

    //Marcarlo como el usuario actual
    localStorage.setItem("usuarioActual", JSON.stringify(usuarioNuevo));

    return true;
}

function validarUsuarioExistente(correo) {
    const usuariosGuardados = obtenerUsuarios();
    
    for (let i = 0; i < usuariosGuardados.length; i++) {
        const usuario = usuariosGuardados[i];
        if (usuario.correo === correo) {
            return true;
        }
    }
    return false;
}

function mostrarLocalStorage() {
    console.log("=== CONTENIDO DEL LOCALSTORAGE ===");
    console.log("Usuarios registrados:", obtenerUsuarios());
    console.log("Usuario actual:", obtenerUsuarioActual() || "Ninguno");
}

function obtenerConsejos() {
    const KEY = 'packgo_consejos_v1';
    try {
        const raw = localStorage.getItem(KEY);
        if (!raw) {
            return []
        };
        const arr = JSON.parse(raw);
        if (!Array.isArray(arr)) {
            return [];
        }
        return arr;
    } catch (e) {
        console.error("Error leyendo consejos de localStorage:", e);
        return [];
    }
}

function mostrarLocalStorage() {
    console.log("=== CONTENIDO DEL LOCALSTORAGE ===");
    console.log("Usuarios registrados:", obtenerUsuarios());
    console.log("Usuario actual:", obtenerUsuarioActual() || "Ninguno");

    const consejos = obtenerConsejos();
    if (consejos.length === 0) {
        console.log("Consejos: ninguno (clave 'packgo_consejos_v1' vacía o inexistente)");
    } else {
        console.log(`Consejos (últimos ${Math.min(consejos.length, 10)} mostrados, total ${consejos.length}):`, consejos.slice(0, 10));
    }
}

function limpiarTodoLocalStorage() {
    localStorage.clear();
    console.log("Todo el localStorage ha sido limpiado");
}
