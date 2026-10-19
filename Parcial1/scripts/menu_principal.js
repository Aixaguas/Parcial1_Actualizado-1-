// Estado global de carga
let preguntasCargadas = false;

// Indica si ya se mostró el error de demostración (así "Reintentar" puede terminar bien)
let errorDemostrado = false;

// Void -> Boolean
// Devuelve true solo si se pidió simular el error (menu_principal.html?error=1) y todavía no se mostró
function debeSimularError() {
    const params = new URLSearchParams(window.location.search);
    return params.get("error") === "1" && !errorDemostrado;
}

// Void -> Void
// Void -> Void
function CargarPagina(){
    const UsuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));
    const mensajeBienvenida = document.getElementById("mensajeBienvenida");

    if(!UsuarioLogueado){
        redirigir("../index.html");
        return;
    }

    mensajeBienvenida.innerHTML = `Bienvenido ${UsuarioLogueado.username.toLocaleUpperCase()}`;
    
    // Configurar botones
    document.getElementById("btn-partida").addEventListener("click", () => iniciarPartida());
    document.getElementById("btn-ranking").addEventListener("click", () => redirigir("ranking.html"));
    document.getElementById("btn-historial").addEventListener("click", () => redirigir("historial.html"));
    document.getElementById("btn-estadisticas").addEventListener("click", () => mostrarEstadisticas());
    document.getElementById("btn-cerrar-sesion").addEventListener("click", () => cerrarSesion());
    document.getElementById("btn-reintentar").addEventListener("click", () => cargarPreguntasAsincrono());
    
    // Cargar preguntas asincrónicamente
    cargarPreguntasAsincrono();
    
    // Deshabilitar botones hasta que carguen las preguntas
    deshabilitarBotones();
}

// Void -> Void
// Void -> Void
function cargarPreguntasAsincrono() {
    const indicador = document.getElementById("indicador-carga");
    const error = document.getElementById("error-carga");
    
    indicador.classList.remove("oculto");
    error.classList.add("oculto");
    
    // Simular carga asincrónica con delay de 1 segundo
    setTimeout(() => {
        // El error controlado solo aparece si se lo pide en la URL (?error=1)
        const hayError = debeSimularError();
        
        if (hayError) {
            errorDemostrado = true;
            indicador.classList.add("oculto");
            error.classList.remove("oculto");
            preguntasCargadas = false;
        } else {
            indicador.classList.add("oculto");
            preguntasCargadas = true;
            habilitarBotones();
            cargarCategoriasEstadisticas();
        }
    }, 1000);
}

// Void -> Void
// Void -> Void
function deshabilitarBotones() {
    const botones = document.querySelectorAll(".btn-menu");
    botones.forEach(btn => btn.disabled = true);
}

// Void -> Void
// Void -> Void
function habilitarBotones() {
    const botones = document.querySelectorAll(".btn-menu");
    botones.forEach(btn => btn.disabled = false);
}

// Void -> Void
// Void -> Void
function mostrarEstadisticas() {
    const UsuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));
    const seccion = document.getElementById("seccion-estadisticas");
    const estadisticas = calcularEstadisticasUsuario(UsuarioLogueado.username);
    
    document.getElementById("stat-partidas").textContent = estadisticas.partidasCompletadas;
    document.getElementById("stat-preguntas").textContent = estadisticas.totalPreguntas;
    document.getElementById("stat-porcentaje").textContent = estadisticas.porcentajeCorrectas.toFixed(1) + "%";
    document.getElementById("stat-max-puntaje").textContent = estadisticas.maxPuntaje;
    document.getElementById("stat-mejor-racha").textContent = estadisticas.mejorRacha;
    
    seccion.classList.remove("oculto");
}

// Void -> Void
// Void -> Void
function cargarCategoriasEstadisticas() {
    const select = document.getElementById("select-categoria-estadistica");
    const categorias = obtenerCategorias();
    
    select.innerHTML = '<option value="">Seleccionar categoría</option>';
    categorias.forEach(cat => {
        const option = document.createElement("option");
        option.value = cat;
        option.textContent = cat;
        select.appendChild(option);
    });
    
    select.addEventListener("change", (e) => {
        const UsuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));
        const categoria = e.target.value;
        
        if (categoria) {
            const porcentaje = calcularPorcentajeCategoria(UsuarioLogueado.username, categoria);
            document.getElementById("estadistica-categoria-resultado").textContent = 
                `Porcentaje de aciertos en ${categoria}: ${porcentaje.toFixed(1)}%`;
        } else {
            document.getElementById("estadistica-categoria-resultado").textContent = 
                "Seleccione una categoría";
        }
    });
}

// Void -> Void
// Void -> Void
function iniciarPartida() {
    if (!preguntasCargadas) {
        alert("Las preguntas aún se están cargando");
        return;
    }
    redirigir("seleccion_partida.html");
}

// Void -> Void
// Void -> Void
function cerrarSesion() {
    UsuarioLogout();
    redirigir("../index.html");
}

// String -> Void
function redirigir(pagina){
    window.location.href = pagina;
}