// Void -> Void
function CargarPagina(){
    let FormRegistro    = document.getElementById("formRegistro");

    FormRegistro.addEventListener("submit", (ev)=>{Registrarse(ev);});
}

// String -> Void
function redirigir(pagina){
    window.location.href = "../pages/"+pagina;
}

// String -> Boolean
function validarEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}

// String -> Boolean
function validarLongitudUsuario(username) {
    return username.length >= 4 && username.length <= 16;
}

// String -> Boolean
function validarLongitudPassword(password) {
    return password.length >= 8;
}

// String, String -> Boolean
function validarCoincidenciaPassword(password, confirmPassword) {
    return password === confirmPassword;
}

// String, String, Array -> Boolean
function validarUsuarioUnico(username, email, usuariosExistentes) {
    const existe = usuariosExistentes.some(user => 
        user.username.toLowerCase() === username.toLowerCase() || 
        user.email.toLowerCase() === email.toLowerCase()
    );
    return !existe; 
}

// Event -> Void
function Registrarse(ev){
    let Username        = document.forms[0].elements["USERNAME"];
    let Correo          = document.forms[0].elements["EMAIL"];
    let Password        = document.forms[0].elements["CLAVE"];
    let PasswordRepeat  = document.forms[0].elements["CLAVE_REPEAT"];
    
    ev.preventDefault();

    if(Username.value == "" || Correo.value == "" || Password.value == "" || PasswordRepeat.value == ""){
        alert("Por favor, completar todos los campos.");
        return;
    }

    if(!validarEmail(Correo.value)){
        alert("El correo tiene un formato incorrecto.");
        return;
    }

    if(!validarLongitudUsuario(Username.value)){
        alert("El username tiene que tener entre 4 y 16 caracteres.");
        return;
    }

    if(!validarLongitudPassword(Password.value)){
        alert("La contraseña tiene que tener al menos 8 caracteres.");
        return;
    }

    if(!validarCoincidenciaPassword(Password.value, PasswordRepeat.value)){
        alert("Las contraseñas no coinciden.");
        return;
    }

    if(!validarUsuarioUnico(Username.value, Correo.value, ObtenerUsuarios())){
        alert("Este usuario ya se encuentra registrado.");
        return;
    }

    CrearUsuario(Username.value, Password.value, Correo.value);

    alert("Usuario registrado correctamente!");
    redirigir("inicio_sesion.html");
}