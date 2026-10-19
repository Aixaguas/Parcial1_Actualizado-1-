// Void -> Void
// Void -> Void
function CargarPagina(){
    const UsuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));
    
    if(!UsuarioLogueado){
        redirigir("../index.html");
        return;
    }
    
    // Obtener la última partida completada del usuario
    const partidas = JSON.parse(localStorage.getItem("partidas")) || [];
    const partidasUsuario = partidas.filter(p => p.username === UsuarioLogueado.username && p.estado === "completada");
    
    if (partidasUsuario.length === 0) {
        alert("No hay partidas completadas");
        redirigir("menu_principal.html");
        return;
    }
    
    // Obtener la última partida
    const ultimaPartida = partidasUsuario[partidasUsuario.length - 1];
    
    // Mostrar resultados
    mostrarResultados(ultimaPartida);
    
    // Configurar botones
    document.getElementById("btn-menu").addEventListener("click", () => redirigir("menu_principal.html"));
    document.getElementById("btn-nueva").addEventListener("click", () => redirigir("seleccion_partida.html"));
}

// Object -> Void
// Object -> Void
function mostrarResultados(partida){
    const porcentaje = (partida.correctas / partida.totalPreguntas) * 100;
    const duracionSegundos = Math.floor(partida.duracion / 1000);
    const fecha = new Date(partida.fecha).toLocaleString();
    
    // Calcular mensaje de desempeño
    let mensaje = "";
    if (porcentaje < 40) {
        mensaje = "Necesitás seguir practicando";
    } else if (porcentaje < 70) {
        mensaje = "Vas por buen camino";
    } else if (porcentaje < 100) {
        mensaje = "¡Excelente desempeño!";
    } else {
        mensaje = "¡Partida perfecta!";
    }
    
    document.getElementById("mensaje-desempeno").textContent = mensaje;
    document.getElementById("puntaje-total").textContent = partida.puntaje;
    document.getElementById("respuestas-correctas").textContent = partida.correctas;
    document.getElementById("respuestas-incorrectas").textContent = partida.incorrectas;
    document.getElementById("porcentaje-correctas").textContent = porcentaje.toFixed(1) + "%";
    document.getElementById("mejor-racha").textContent = partida.mejorRacha;
    document.getElementById("duracion").textContent = duracionSegundos + "s";
    document.getElementById("categoria").textContent = partida.categoria;
    document.getElementById("fecha").textContent = fecha;
}

// String -> Void
// String -> Void
function redirigir(pagina){
    window.location.href = pagina;
}
