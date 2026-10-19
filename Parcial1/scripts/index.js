const UsuariosRegistrados = [
    {
        username: "paulo",
        email: "paulodacruz2805@gmail.com",
        clave: "abc123"
    },
    {
        username: "aixa",
        email: "aixa@gmail.com",
        clave: "abc123"
    },
    {
        username: "admin",
        email: "admin@gmail.com",
        clave: "123abc"
    },
    {
        username: "horacio",
        email: "horacio@gmail.com",
        clave: "horacio123"
    }
]


// Void -> Void
// Void -> Void
function CargarApp(){
    // Solo se cargan los usuarios iniciales si todavía no hay usuarios guardados
    if(!localStorage.getItem("usuariosRegistrados")){
        localStorage.setItem("usuariosRegistrados",JSON.stringify(UsuariosRegistrados));
    }
    inicializarBancoPreguntas();
    inicializarPartidas();

    let BtnIniciarSesion    = document.getElementById("btn-iniciar-sesion");
    let BtnRegistrar        = document.getElementById("btn-registrarse");

    BtnIniciarSesion.addEventListener('click', ()=>{redirigir('inicio_sesion.html');});
    BtnRegistrar.addEventListener('click', ()=>{redirigir('registro.html');});
}

// String -> Void
function redirigir(pagina){
    window.location.href = "./pages/"+pagina;
}

// Void -> Void
function inicializarPartidas() {
    if (!localStorage.getItem("partidas")) {
        localStorage.setItem("partidas", JSON.stringify([]));
    }
}

function redirigir(pagina){
    window.location.href = "./pages/"+pagina;
}