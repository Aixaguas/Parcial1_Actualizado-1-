// Void -> Void
// Void -> Void
function CargarPagina(){
    const UsuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));
    
    if(!UsuarioLogueado){
        redirigir("../index.html");
        return;
    }
    
    // Cargar categorías en el filtro
    cargarCategoriasFiltro();
    
    // Configurar botones
    document.getElementById("btn-volver").addEventListener("click", () => redirigir("menu_principal.html"));
    document.getElementById("btn-filtrar").addEventListener("click", aplicarFiltros);
    document.getElementById("btn-limpiar").addEventListener("click", limpiarFiltros);
    
    // Mostrar historial completo
    mostrarHistorial();
    
    // Mostrar resumen con función recursiva
    mostrarResumenRecursivo();
}

// Void -> Void
// Void -> Void
function cargarCategoriasFiltro(){
    const select = document.getElementById("filtro-categoria");
    const categorias = ["Películas de Terror Clásicas", "Halloween y Tradiciones", "Series de Terror", "Personajes y Criaturas"];
    
    categorias.forEach(cat => {
        const option = document.createElement("option");
        option.value = cat;
        option.textContent = cat;
        select.appendChild(option);
    });
}

// Void -> Void
// String, String -> Void
function mostrarHistorial(filtroCategoria = "", filtroEstado = ""){
    const UsuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));
    let partidas = obtenerPartidasUsuario(UsuarioLogueado.username);
    
    // Aplicar filtros
    if (filtroCategoria) {
        partidas = partidas.filter(p => p.categoria === filtroCategoria);
    }
    if (filtroEstado) {
        partidas = partidas.filter(p => p.estado === filtroEstado);
    }
    
    // Ordenar por fecha descendente
    partidas.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    
    const cuerpoTabla = document.getElementById("cuerpo-tabla");
    const mensajeVacio = document.getElementById("mensaje-vacio");
    const tabla = document.getElementById("tabla-partidas");
    
    cuerpoTabla.innerHTML = "";
    
    if (partidas.length === 0) {
        tabla.classList.add("oculto");
        mensajeVacio.classList.remove("oculto");
    } else {
        tabla.classList.remove("oculto");
        mensajeVacio.classList.add("oculto");
        
        partidas.forEach(partida => {
            const fila = document.createElement("tr");
            const fecha = new Date(partida.fecha).toLocaleString();
            const estadoClass = partida.estado === "completada" ? "estado-completada" : "estado-abandonada";
            const estadoTexto = partida.estado === "completada" ? "Completada" : "Abandonada";
            
            fila.innerHTML = `
                <td>${fecha}</td>
                <td>${partida.categoria}</td>
                <td>${partida.puntaje}</td>
                <td>${partida.correctas}/${partida.cantidad || partida.totalPreguntas}</td>
                <td class="${estadoClass}">${estadoTexto}</td>
            `;
            
            cuerpoTabla.appendChild(fila);
        });
    }
}

// Void -> Void
// Void -> Void
function aplicarFiltros(){
    const categoria = document.getElementById("filtro-categoria").value;
    const estado = document.getElementById("filtro-estado").value;
    mostrarHistorial(categoria, estado);
}

// Void -> Void
// Void -> Void
function limpiarFiltros(){
    document.getElementById("filtro-categoria").value = "";
    document.getElementById("filtro-estado").value = "";
    mostrarHistorial();
}

// Void -> Void
// Void -> Void
function mostrarResumenRecursivo(){
    const UsuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));
    const partidas = obtenerPartidasUsuario(UsuarioLogueado.username);
    
    // Usar función recursiva para analizar historial
    const resumen = analizarHistorialRecursivo(partidas);
    
    document.getElementById("resumen-completadas").textContent = resumen.completadas;
    document.getElementById("resumen-abandonadas").textContent = resumen.abandonadas;
    document.getElementById("resumen-puntaje").textContent = resumen.puntajeAcumulado;
}

// String -> Void
// String -> Void
function redirigir(pagina){
    window.location.href = pagina;
}
