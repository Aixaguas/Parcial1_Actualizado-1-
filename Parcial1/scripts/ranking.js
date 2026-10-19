// Void -> Void
// Void -> Void
function CargarPagina(){
    const UsuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));
    
    if(!UsuarioLogueado){
        redirigir("../index.html");
        return;
    }
    
    // Configurar botón volver
    document.getElementById("btn-volver").addEventListener("click", () => redirigir("menu_principal.html"));
    
    // Mostrar ranking
    mostrarRanking();
}

// Void -> Void
// Void -> Void
function mostrarRanking(){
    const ranking = obtenerRanking();
    const cuerpoTabla = document.getElementById("cuerpo-tabla");
    const mensajeVacio = document.getElementById("mensaje-vacio");
    const tabla = document.getElementById("tabla-partidas");
    
    cuerpoTabla.innerHTML = "";
    
    if (ranking.length === 0) {
        tabla.classList.add("oculto");
        mensajeVacio.classList.remove("oculto");
    } else {
        tabla.classList.remove("oculto");
        mensajeVacio.classList.add("oculto");
        
        ranking.forEach((partida, indice) => {
            const fila = document.createElement("tr");
            const posicion = indice + 1;
            const fecha = new Date(partida.fecha).toLocaleString();
            
            // Agregar clase especial para las primeras 3 posiciones
            if (posicion <= 3) {
                fila.classList.add(`posicion-${posicion}`);
            }
            
            fila.innerHTML = `
                <td>${posicion}</td>
                <td>${partida.username}</td>
                <td>${partida.puntaje}</td>
                <td>${partida.categoria}</td>
                <td>${fecha}</td>
            `;
            
            cuerpoTabla.appendChild(fila);
        });
    }
}

// String -> Void
// String -> Void
function redirigir(pagina){
    window.location.href = pagina;
}
