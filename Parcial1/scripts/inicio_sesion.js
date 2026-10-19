// Void -> Void
function CargarPagina(){
    let FormRegistro    = document.getElementById("formRegistro");

    FormRegistro.addEventListener("submit", (ev)=>{IniciarSesion(ev);});
}

// String -> Void
function redirigir(pagina){
    window.location.href = "../pages/"+pagina;
}

// Event -> Void
function IniciarSesion(ev){
    let Username        = document.forms[0].elements["USERNAME"];
    let Password        = document.forms[0].elements["CLAVE"];
    
    ev.preventDefault();

    if(Username.value == "" || Password.value == "" ){
        alert("Por favor, completar todos los campos.");
        return;
    }

    const Usuario = BuscarUsuario(Username.value, Password.value);

    if(Usuario == undefined){
        alert("Usuario incorrecto.");
        return;
    }
    
    UsuarioLogin(Usuario);
    redirigir("menu_principal.html");
}