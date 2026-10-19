// Void -> Void
// Void -> Void
function CargarPagina(){
    const UsuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));
    
    if(!UsuarioLogueado){
        redirigir("../index.html");
        return;
    }
    
    // Cargar categorías en el select
    cargarCategorias();
    
    // Configurar formulario
    const form = document.getElementById("form-seleccion");
    form.addEventListener("submit", (ev) => iniciarPartida(ev));
    
    // Configurar botón volver
    document.getElementById("btn-volver").addEventListener("click", () => redirigir("menu_principal.html"));
}

// Void -> Void
// Void -> Void
function cargarCategorias() {
    const select = document.getElementById("categoria");
    const categorias = obtenerCategorias();
    
    categorias.forEach(cat => {
        const option = document.createElement("option");
        option.value = cat;
        option.textContent = cat;
        select.appendChild(option);
    });
}

// Event -> Void
// Event -> Void
function iniciarPartida(ev) {
    ev.preventDefault();
    
    const categoria = document.getElementById("categoria").value;
    const cantidad = parseInt(document.getElementById("cantidad").value);
    
    if (!categoria || !cantidad) {
        alert("Por favor, selecciona una categoría y cantidad de preguntas");
        return;
    }
    
    // Verificar si hay suficientes preguntas
    if (!verificarCantidadPreguntas(categoria, cantidad)) {
        alert(`No hay suficientes preguntas en la categoría ${categoria}. Disponibles: ${obtenerPreguntasPorCategoria(categoria).length}`);
        return;
    }
    
    // Seleccionar preguntas
    const preguntas = seleccionarPreguntas(categoria, cantidad);
    
    // Guardar configuración de partida
    const configuracionPartida = {
        categoria,
        cantidad,
        preguntas,
        indicePregunta: 0,
        puntaje: 0,
        correctas: 0,
        incorrectas: 0,
        rachaActual: 0,
        mejorRacha: 0,
        preguntasRespondidas: [],
        tiempoInicio: Date.now(),
        estado: "en_curso"
    };
    
    localStorage.setItem("partidaActual", JSON.stringify(configuracionPartida));
    redirigir("partida.html");
}

// String -> Void
// String -> Void
function redirigir(pagina){
    window.location.href = pagina;
}
