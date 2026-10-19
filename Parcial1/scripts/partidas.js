// Guardar una partida en localStorage
// Object -> Void
function guardarPartida(partida) {
    let partidas = JSON.parse(localStorage.getItem("partidas")) || [];
    partidas.push(partida);
    localStorage.setItem("partidas", JSON.stringify(partidas));
}

// Obtener todas las partidas
// Void -> Array
function obtenerPartidas() {
    return JSON.parse(localStorage.getItem("partidas")) || [];
}

// Obtener partidas de un usuario específico
// String -> Array
function obtenerPartidasUsuario(username) {
    const partidas = obtenerPartidas();
    return partidas.filter(p => p.username === username);
}

// Obtener partidas completadas (para ranking)
// Void -> Array
function obtenerPartidasCompletadas() {
    const partidas = obtenerPartidas();
    return partidas.filter(p => p.estado === "completada");
}

// Obtener top 10 partidas para ranking
// Void -> Array
function obtenerRanking() {
    const partidasCompletadas = obtenerPartidasCompletadas();
    
    const ordenadas = partidasCompletadas.sort((a, b) => {
        if (b.puntaje !== a.puntaje) {
            return b.puntaje - a.puntaje;
        }
        if (a.duracion !== b.duracion) {
            return a.duracion - b.duracion;
        }
        return new Date(a.fecha) - new Date(b.fecha);
    });
    
    return ordenadas.slice(0, 10);
}

// Calcular estadísticas de un usuario
// String -> Object
function calcularEstadisticasUsuario(username) {
    const partidas = obtenerPartidasUsuario(username);
    const partidasCompletadas = partidas.filter(p => p.estado === "completada");
    
    const totalPartidas = partidasCompletadas.length;
    const totalPreguntas = partidasCompletadas.reduce((sum, p) => sum + p.totalPreguntas, 0);
    const totalCorrectas = partidasCompletadas.reduce((sum, p) => sum + p.correctas, 0);
    const porcentajeCorrectas = totalPreguntas > 0 ? (totalCorrectas / totalPreguntas) * 100 : 0;
    const maxPuntaje = partidasCompletadas.length > 0 ? Math.max(...partidasCompletadas.map(p => p.puntaje)) : 0;
    const mejorRacha = partidasCompletadas.length > 0 ? Math.max(...partidasCompletadas.map(p => p.mejorRacha)) : 0;
    
    return {
        partidasCompletadas: totalPartidas,
        totalPreguntas,
        porcentajeCorrectas,
        maxPuntaje,
        mejorRacha
    };
}

// Función recursiva para analizar historial
// Array, Number -> Object
function analizarHistorialRecursivo(partidas, indice = 0) {
    if (indice >= partidas.length) {
        return {
            completadas: 0,
            abandonadas: 0,
            puntajeAcumulado: 0
        };
    }
    
    const partida = partidas[indice];
    const resultado = analizarHistorialRecursivo(partidas, indice + 1);
    
    if (partida.estado === "completada") {
        resultado.completadas++;
        resultado.puntajeAcumulado += partida.puntaje;
    } else {
        resultado.abandonadas++;
    }
    
    return resultado;
}

// Función de orden superior para filtrar por categoría
// Array, String -> Array
function filtrarPorCategoria(partidas, categoria) {
    return partidas.filter(p => p.categoria === categoria);
}

// Función de orden superior para mapear preguntas respondidas
// Array -> Array
function obtenerPreguntasRespondidas(partidas) {
    return partidas.flatMap(p => p.preguntasRespondidas || []);
}

// Función de orden superior para contar respuestas correctas
// Array -> Number
function contarCorrectas(preguntas) {
    return preguntas.filter(p => p.correcta).length;
}

// Composición de funciones para estadísticas por categoría
// String, String -> Number
function calcularPorcentajeCategoria(username, categoria) {
    const partidas = obtenerPartidasUsuario(username);
    const partidasCategoria = filtrarPorCategoria(partidas, categoria);
    const preguntas = obtenerPreguntasRespondidas(partidasCategoria);
    const correctas = contarCorrectas(preguntas);
    const total = preguntas.length;
    
    return total > 0 ? (correctas / total) * 100 : 0;
}
