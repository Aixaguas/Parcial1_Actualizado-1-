let partida;
let temporizadorInterval;
let tiempoRestante = 15;
let preguntaRespondida = false;

// Void -> Void
function CargarPagina(){
    const UsuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));
    
    if(!UsuarioLogueado){
        redirigir("../index.html");
        return;
    }
    
    partida = JSON.parse(localStorage.getItem("partidaActual"));
    
    if(!partida || partida.estado !== "en_curso"){
        redirigir("menu_principal.html");
        return;
    }
    
    // Configurar botón abandonar
    document.getElementById("btn-abandonar").addEventListener("click", confirmarAbandono);
    
    // Si se recargó la página después de responder, esa pregunta ya está contada: se pasa a la siguiente
    if (partida.preguntasRespondidas.length > partida.indicePregunta) {
        siguientePregunta();
        return;
    }
    
    // Mostrar pregunta actual
    mostrarPregunta();
}

// Void -> Void
// Void -> Void
function mostrarPregunta(){
    const pregunta = partida.preguntas[partida.indicePregunta];
    
    // Actualizar información
    document.getElementById("info-categoria").textContent = `Categoría: ${partida.categoria}`;
    document.getElementById("info-pregunta").textContent = `Pregunta ${partida.indicePregunta + 1}/${partida.cantidad}`;
    document.getElementById("info-puntaje").textContent = `Puntaje: ${partida.puntaje}`;
    document.getElementById("racha-actual").textContent = partida.rachaActual;
    document.getElementById("mejor-racha").textContent = partida.mejorRacha;
    
    // Mostrar enunciado
    document.getElementById("pregunta-enunciado").textContent = pregunta.enunciado;
    
    // Generar opciones
    const opcionesContainer = document.getElementById("opciones-container");
    opcionesContainer.innerHTML = "";
    
    pregunta.opciones.forEach((opcion, indice) => {
        const btn = document.createElement("button");
        btn.className = "opcion-btn";
        btn.textContent = opcion;
        btn.addEventListener("click", () => seleccionarRespuesta(indice));
        opcionesContainer.appendChild(btn);
    });
    
    // Ocultar feedback
    document.getElementById("feedback-container").classList.add("oculto");
    
    // Iniciar temporizador
    iniciarTemporizador();
    preguntaRespondida = false;
}

// Void -> Void
// Void -> Void
function iniciarTemporizador(){
    tiempoRestante = 15;
    actualizarTemporizador();
    
    temporizadorInterval = setInterval(() => {
        tiempoRestante--;
        actualizarTemporizador();
        
        if (tiempoRestante <= 0) {
            tiempoAgotado();
        }
    }, 1000);
}

// Void -> Void
// Void -> Void
function actualizarTemporizador(){
    const temporizador = document.getElementById("temporizador");
    temporizador.textContent = tiempoRestante;
    
    if (tiempoRestante <= 5) {
        temporizador.classList.add("critico");
    } else {
        temporizador.classList.remove("critico");
    }
}

// Void -> Void
// Void -> Void
function detenerTemporizador(){
    clearInterval(temporizadorInterval);
}

// Number -> Void
// Number -> Void
function seleccionarRespuesta(indiceSeleccionado){
    if (preguntaRespondida) return;
    
    preguntaRespondida = true;
    detenerTemporizador();
    
    const pregunta = partida.preguntas[partida.indicePregunta];
    const esCorrecta = indiceSeleccionado === pregunta.correcta;
    
    // Deshabilitar botones
    const botones = document.querySelectorAll(".opcion-btn");
    botones.forEach((btn, indice) => {
        btn.disabled = true;
        if (indice === pregunta.correcta) {
            btn.classList.add("correcta");
        } else if (indice === indiceSeleccionado && !esCorrecta) {
            btn.classList.add("incorrecta");
        }
    });
    
    // Actualizar racha
    if (esCorrecta) {
        partida.rachaActual++;
        partida.correctas++;
        partida.puntaje += pregunta.puntaje;
        if (partida.rachaActual > partida.mejorRacha) {
            partida.mejorRacha = partida.rachaActual;
        }
    } else {
        partida.rachaActual = 0;
        partida.incorrectas++;
    }
    
    // Guardar respuesta
    partida.preguntasRespondidas.push({
        preguntaId: pregunta.id,
        respuesta: indiceSeleccionado,
        correcta: esCorrecta
    });
    
    // Mostrar feedback
    mostrarFeedback(esCorrecta, pregunta.opciones[pregunta.correcta]);
    
    // Actualizar localStorage
    localStorage.setItem("partidaActual", JSON.stringify(partida));
    
    // Esperar 2 segundos y pasar a la siguiente
    setTimeout(() => {
        siguientePregunta();
    }, 2000);
}

// Void -> Void
// Void -> Void
function tiempoAgotado(){
    preguntaRespondida = true;
    detenerTemporizador();
    
    const pregunta = partida.preguntas[partida.indicePregunta];
    
    // Deshabilitar botones y mostrar correcta
    const botones = document.querySelectorAll(".opcion-btn");
    botones.forEach((btn, indice) => {
        btn.disabled = true;
        if (indice === pregunta.correcta) {
            btn.classList.add("correcta");
        }
    });
    
    // Actualizar racha
    partida.rachaActual = 0;
    partida.incorrectas++;
    
    // Guardar respuesta como incorrecta
    partida.preguntasRespondidas.push({
        preguntaId: pregunta.id,
        respuesta: -1,
        correcta: false
    });
    
    // Mostrar feedback
    mostrarFeedback(false, pregunta.opciones[pregunta.correcta]);
    
    // Actualizar localStorage
    localStorage.setItem("partidaActual", JSON.stringify(partida));
    
    // Esperar 2 segundos y pasar a la siguiente
    setTimeout(() => {
        siguientePregunta();
    }, 2000);
}

// Boolean, String -> Void
// Boolean, String -> Void
function mostrarFeedback(esCorrecta, respuestaCorrecta){
    const feedbackContainer = document.getElementById("feedback-container");
    const feedbackMensaje = document.getElementById("feedback-mensaje");
    const feedbackCorrecta = document.getElementById("feedback-correcta");
    
    feedbackContainer.classList.remove("oculto");
    
    if (esCorrecta) {
        feedbackMensaje.textContent = "¡Correcto!";
        feedbackMensaje.className = "correcto";
    } else {
        feedbackMensaje.textContent = "Incorrecto";
        feedbackMensaje.className = "incorrecto";
    }
    
    feedbackCorrecta.textContent = `La respuesta correcta era: ${respuestaCorrecta}`;
}

// Void -> Void
// Void -> Void
function siguientePregunta(){
    partida.indicePregunta++;
    
    if (partida.indicePregunta >= partida.preguntas.length) {
        finalizarPartida();
    } else {
        localStorage.setItem("partidaActual", JSON.stringify(partida));
        mostrarPregunta();
    }
}

// Void -> Void
// Void -> Void
function finalizarPartida(){
    detenerTemporizador();
    
    partida.estado = "completada";
    partida.tiempoFin = Date.now();
    partida.duracion = partida.tiempoFin - partida.tiempoInicio;
    partida.fecha = new Date().toISOString();
    
    const UsuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));
    partida.username = UsuarioLogueado.username;
    partida.totalPreguntas = partida.cantidad;
    
    // Guardar partida
    guardarPartida(partida);
    
    // Limpiar partida actual
    localStorage.removeItem("partidaActual");
    
    // Redirigir a resultados
    redirigir("resultados.html");
}

// Void -> Void
// Void -> Void
function confirmarAbandono(){
    if (confirm("¿Estás seguro de que quieres abandonar la partida?")) {
        abandonarPartida();
    }
}

// Void -> Void
// Void -> Void
function abandonarPartida(){
    detenerTemporizador();
    
    partida.estado = "abandonada";
    partida.tiempoFin = Date.now();
    partida.duracion = partida.tiempoFin - partida.tiempoInicio;
    partida.fecha = new Date().toISOString();
    
    const UsuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));
    partida.username = UsuarioLogueado.username;
    partida.totalPreguntas = partida.indicePregunta;
    
    // Guardar partida
    guardarPartida(partida);
    
    // Limpiar partida actual
    localStorage.removeItem("partidaActual");
    
    // Redirigir a menu principal
    redirigir("menu_principal.html");
}

// String -> Void
// String -> Void
function redirigir(pagina){
    window.location.href = pagina;
}
