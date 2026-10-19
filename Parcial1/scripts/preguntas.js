// Banco de preguntas inicial - Mínimo 20 preguntas en 4 categorías temáticas de Halloween
const BancoPreguntas = [
    // Categoría: Películas de Terror Clásicas (12 preguntas)
    {
        id: 1,
        categoria: "Películas de Terror Clásicas",
        enunciado: "¿Quién es el asesino enmascarado más famoso de la saga 'Viernes 13'?",
        opciones: ["Michael Myers", "Jason Voorhees", "Freddy Krueger", "Leatherface"],
        correcta: 1,
        puntaje: 100
    },
    {
        id: 2,
        categoria: "Películas de Terror Clásicas",
        enunciado: "¿En qué año se estrenó la película 'El Exorcista'?",
        opciones: ["1970", "1973", "1975", "1978"],
        correcta: 1,
        puntaje: 100
    },
    {
        id: 3,
        categoria: "Películas de Terror Clásicas",
        enunciado: "¿Quién dirigió la película 'El Resplandor'?",
        opciones: ["John Carpenter", "Wes Craven", "Stanley Kubrick", "Alfred Hitchcock"],
        correcta: 2,
        puntaje: 100
    },
    {
        id: 4,
        categoria: "Películas de Terror Clásicas",
        enunciado: "¿Qué película introdujo al asesino Michael Myers?",
        opciones: ["Pesadilla en Elm Street", "Halloween", "Scream", "Viernes 13"],
        correcta: 1,
        puntaje: 100
    },
    {
        id: 5,
        categoria: "Películas de Terror Clásicas",
        enunciado: "¿En qué película aparece el personaje Leatherface?",
        opciones: ["The Texas Chainsaw Massacre", "The Hills Have Eyes", "Last House on the Left", "Dawn of the Dead"],
        correcta: 0,
        puntaje: 100
    },
    {
        id: 6,
        categoria: "Películas de Terror Clásicas",
        enunciado: "¿Qué película de terror se basa en el libro de Stephen King sobre un hotel embrujado?",
        opciones: ["Carrie", "It", "El Resplandor", "Misery"],
        correcta: 2,
        puntaje: 100
    },
    
    // Categoría: Halloween y Tradiciones (12 preguntas)
    {
        id: 7,
        categoria: "Halloween y Tradiciones",
        enunciado: "¿De qué origen celta proviene la celebración de Halloween?",
        opciones: ["Samhain", "Yule", "Beltane", "Lughnasadh"],
        correcta: 0,
        puntaje: 100
    },
    {
        id: 8,
        categoria: "Halloween y Tradiciones",
        enunciado: "¿Qué se hace tradicionalmente con las calabazas en Halloween?",
        opciones: ["Pintarlas de azul", "Comerlas crudas", "Tallarlas como jack-o'-lanterns", "Lanzarlas por la ventana"],
        correcta: 2,
        puntaje: 100
    },
    {
        id: 9,
        categoria: "Halloween y Tradiciones",
        enunciado: "¿Qué dulce es tradicionalmente entregado en Halloween?",
        opciones: ["Panettone", "Chocolate y caramelos", "Turrón", "Mazapán"],
        correcta: 1,
        puntaje: 100
    },
    {
        id: 10,
        categoria: "Halloween y Tradiciones",
        enunciado: "¿Qué día se celebra Halloween?",
        opciones: ["30 de octubre", "31 de octubre", "1 de noviembre", "2 de noviembre"],
        correcta: 1,
        puntaje: 100
    },
    {
        id: 11,
        categoria: "Halloween y Tradiciones",
        enunciado: "¿Qué significa la tradición de 'trick or treat'?",
        opciones: ["Truco o trampa", "Truco o dulce", "Miedo o fuga", "Susto o risa"],
        correcta: 1,
        puntaje: 100
    },
    {
        id: 12,
        categoria: "Halloween y Tradiciones",
        enunciado: "¿Qué animal está asociado con la brujería en Halloween?",
        opciones: ["Perro", "Gato negro", "Conejo", "Hamster"],
        correcta: 1,
        puntaje: 100
    },
    
    // Categoría: Series de Terror (12 preguntas)
    {
        id: 13,
        categoria: "Series de Terror",
        enunciado: "¿Cuál es el nombre del pueblo en la serie 'Stranger Things'?",
        opciones: ["Hawkins", "Riverdale", "Twin Peaks", "Sunnydale"],
        correcta: 0,
        puntaje: 100
    },
    {
        id: 14,
        categoria: "Series de Terror",
        enunciado: "¿Qué serie de HBO se ambienta en Bon Temps, Luisiana, y muestra a vampiros que conviven con humanos?",
        opciones: ["True Blood", "The Vampire Diaries", "Buffy the Vampire Slayer", "Angel"],
        correcta: 0,
        puntaje: 100
    },
    {
        id: 15,
        categoria: "Series de Terror",
        enunciado: "¿Quién es el creador de la serie 'American Horror Story'?",
        opciones: ["David Lynch", "Ryan Murphy", "Stephen King", "Guillermo del Toro"],
        correcta: 1,
        puntaje: 100
    },
    {
        id: 16,
        categoria: "Series de Terror",
        enunciado: "¿Qué serie sigue a una familia que se muda a una casa embrujada en Los Ángeles?",
        opciones: ["American Horror Story: Murder House", "Stranger Things", "The Haunting of Hill House", "Scream Queens"],
        correcta: 0,
        puntaje: 100
    },
    {
        id: 17,
        categoria: "Series de Terror",
        enunciado: "¿Qué serie de Netflix presenta al asesino Joe Goldberg?",
        opciones: ["Dexter", "Hannibal", "You", "The Fall"],
        correcta: 2,
        puntaje: 100
    },
    {
        id: 18,
        categoria: "Series de Terror",
        enunciado: "¿Qué serie de terror sigue a un grupo de adolescentes que combaten vampiros?",
        opciones: ["The Vampire Diaries", "Teen Wolf", "Buffy the Vampire Slayer", "The Originals"],
        correcta: 2,
        puntaje: 100
    },
    
    // Categoría: Personajes y Criaturas (12 preguntas)
    {
        id: 19,
        categoria: "Personajes y Criaturas",
        enunciado: "¿Qué criatura legendaria se alimenta de sangre?",
        opciones: ["Hombre lobo", "Vampiro", "Zombi", "Fantasma"],
        correcta: 1,
        puntaje: 100
    },
    {
        id: 20,
        categoria: "Personajes y Criaturas",
        enunciado: "¿En qué fase de la luna se transforma un hombre lobo?",
        opciones: ["Luna nueva", "Cuarto creciente", "Luna llena", "Cuarto menguante"],
        correcta: 2,
        puntaje: 100
    },
    {
        id: 21,
        categoria: "Personajes y Criaturas",
        enunciado: "¿Qué criatura se levanta de la tumba?",
        opciones: ["Fantasma", "Espectro", "Zombi", "Poltergeist"],
        correcta: 2,
        puntaje: 100
    },
    {
        id: 22,
        categoria: "Personajes y Criaturas",
        enunciado: "¿Qué personaje es conocido como el 'Rey Calabaza' en 'El extraño mundo de Jack'?",
        opciones: ["Jack Skellington", "Ghostface", "Pennywise", "Chucky"],
        correcta: 0,
        puntaje: 100
    },
    {
        id: 23,
        categoria: "Personajes y Criaturas",
        enunciado: "¿Qué película presenta al payaso asesino Pennywise?",
        opciones: ["It", "Killer Klowns from Outer Space", "Poltergeist", "The Shining"],
        correcta: 0,
        puntaje: 100
    },
    {
        id: 24,
        categoria: "Personajes y Criaturas",
        enunciado: "¿Qué muñeco diabólico protagoniza la saga 'Child's Play'?",
        opciones: ["Annabelle", "Chucky", "Slappy", "Billy"],
        correcta: 1,
        puntaje: 100
    },
    
    // Preguntas adicionales: cada categoría llega a 12 para poder jugar partidas de 10
    // Categoría: Películas de Terror Clásicas
    {
        id: 25,
        categoria: "Películas de Terror Clásicas",
        enunciado: "¿Quién dirigió la película 'Psicosis' (1960)?",
        opciones: ["George A. Romero", "Alfred Hitchcock", "Tobe Hooper", "Stanley Kubrick"],
        correcta: 1,
        puntaje: 100
    },
    {
        id: 26,
        categoria: "Películas de Terror Clásicas",
        enunciado: "¿Cómo se llama el motel donde transcurre la película 'Psicosis'?",
        opciones: ["Overlook Hotel", "Hotel Cecil", "Bates Motel", "Crystal Lake Inn"],
        correcta: 2,
        puntaje: 100
    },
    {
        id: 27,
        categoria: "Películas de Terror Clásicas",
        enunciado: "¿Qué película de 1968 dirigida por George A. Romero popularizó la imagen moderna del zombi?",
        opciones: ["La noche de los muertos vivientes", "El amanecer de los muertos", "Evil Dead", "Re-Animator"],
        correcta: 0,
        puntaje: 100
    },
    {
        id: 28,
        categoria: "Películas de Terror Clásicas",
        enunciado: "¿Qué película de 1979 dirigida por Ridley Scott mezcla terror y ciencia ficción en una nave espacial?",
        opciones: ["La cosa", "Depredador", "Alien, el octavo pasajero", "Terminator"],
        correcta: 2,
        puntaje: 100
    },
    {
        id: 29,
        categoria: "Películas de Terror Clásicas",
        enunciado: "¿Quién interpretó a Drácula en la película de 1931 dirigida por Tod Browning?",
        opciones: ["Boris Karloff", "Christopher Lee", "Bela Lugosi", "Vincent Price"],
        correcta: 2,
        puntaje: 100
    },
    {
        id: 30,
        categoria: "Películas de Terror Clásicas",
        enunciado: "¿Qué actor interpretó al monstruo en la película 'Frankenstein' de 1931?",
        opciones: ["Lon Chaney", "Boris Karloff", "Bela Lugosi", "Peter Cushing"],
        correcta: 1,
        puntaje: 100
    },
    // Categoría: Halloween y Tradiciones
    {
        id: 31,
        categoria: "Halloween y Tradiciones",
        enunciado: "¿En qué país se celebra el Día de Muertos con altares y ofrendas?",
        opciones: ["España", "Irlanda", "Argentina", "México"],
        correcta: 3,
        puntaje: 100
    },
    {
        id: 32,
        categoria: "Halloween y Tradiciones",
        enunciado: "¿Qué flor se usa tradicionalmente en los altares del Día de Muertos?",
        opciones: ["Rosa roja", "Girasol", "Cempasúchil", "Margarita"],
        correcta: 2,
        puntaje: 100
    },
    {
        id: 33,
        categoria: "Halloween y Tradiciones",
        enunciado: "¿Qué colores se asocian tradicionalmente con Halloween?",
        opciones: ["Rojo y verde", "Naranja y negro", "Azul y blanco", "Rosa y dorado"],
        correcta: 1,
        puntaje: 100
    },
    {
        id: 34,
        categoria: "Halloween y Tradiciones",
        enunciado: "¿Qué vegetal se tallaba originalmente en Irlanda y Escocia antes de usar calabazas?",
        opciones: ["Nabos", "Zanahorias", "Papas", "Repollos"],
        correcta: 0,
        puntaje: 100
    },
    {
        id: 35,
        categoria: "Halloween y Tradiciones",
        enunciado: "¿Qué festividad cristiana se celebra el 1 de noviembre, justo después de Halloween?",
        opciones: ["Navidad", "Pascua", "Epifanía", "Día de Todos los Santos"],
        correcta: 3,
        puntaje: 100
    },
    {
        id: 36,
        categoria: "Halloween y Tradiciones",
        enunciado: "¿Qué animal volador nocturno es un símbolo clásico de Halloween?",
        opciones: ["Gaviota", "Paloma", "Murciélago", "Golondrina"],
        correcta: 2,
        puntaje: 100
    },
    // Categoría: Series de Terror
    {
        id: 37,
        categoria: "Series de Terror",
        enunciado: "¿Cómo se llama la niña con poderes telequinéticos en 'Stranger Things'?",
        opciones: ["Max", "Nancy", "Joyce", "Eleven (Once)"],
        correcta: 3,
        puntaje: 100
    },
    {
        id: 38,
        categoria: "Series de Terror",
        enunciado: "¿Qué serie de Netflix de 2018 sigue a la familia Crain y su pasado en una casa embrujada?",
        opciones: ["The Haunting of Bly Manor", "The Haunting of Hill House", "Midnight Mass", "Locke & Key"],
        correcta: 1,
        puntaje: 100
    },
    {
        id: 39,
        categoria: "Series de Terror",
        enunciado: "¿Qué serie sigue a Merlina Addams en la Academia Nevermore?",
        opciones: ["Riverdale", "Locke & Key", "Merlina", "Las escalofriantes aventuras de Sabrina"],
        correcta: 2,
        puntaje: 100
    },
    {
        id: 40,
        categoria: "Series de Terror",
        enunciado: "¿Qué serie de zombis está basada en los cómics de Robert Kirkman?",
        opciones: ["Z Nation", "The Walking Dead", "iZombie", "Black Summer"],
        correcta: 1,
        puntaje: 100
    },
    {
        id: 41,
        categoria: "Series de Terror",
        enunciado: "¿Qué serie de HBO adapta un videojuego sobre una infección causada por el hongo Cordyceps?",
        opciones: ["Resident Evil", "Silent Hill", "Dead Space", "The Last of Us"],
        correcta: 3,
        puntaje: 100
    },
    {
        id: 42,
        categoria: "Series de Terror",
        enunciado: "¿Qué clásica serie de antología creada por Rod Serling mezcla terror, fantasía y ciencia ficción?",
        opciones: ["Black Mirror", "Cuentos de la cripta", "La dimensión desconocida", "Expedientes X"],
        correcta: 2,
        puntaje: 100
    },
    // Categoría: Personajes y Criaturas
    {
        id: 43,
        categoria: "Personajes y Criaturas",
        enunciado: "¿Quién escribió la novela 'Frankenstein'?",
        opciones: ["Bram Stoker", "Edgar Allan Poe", "H. P. Lovecraft", "Mary Shelley"],
        correcta: 3,
        puntaje: 100
    },
    {
        id: 44,
        categoria: "Personajes y Criaturas",
        enunciado: "¿Quién escribió la novela 'Drácula'?",
        opciones: ["Anne Rice", "Bram Stoker", "Stephen King", "Mary Shelley"],
        correcta: 1,
        puntaje: 100
    },
    {
        id: 45,
        categoria: "Personajes y Criaturas",
        enunciado: "¿Qué villano de 'Pesadilla en Elm Street' ataca a sus víctimas mientras duermen?",
        opciones: ["Jason Voorhees", "Michael Myers", "Freddy Krueger", "Leatherface"],
        correcta: 2,
        puntaje: 100
    },
    {
        id: 46,
        categoria: "Personajes y Criaturas",
        enunciado: "¿Cómo se llama el asesino enmascarado de la saga 'Scream'?",
        opciones: ["Jigsaw", "Ghostface", "Candyman", "Pinhead"],
        correcta: 1,
        puntaje: 100
    },
    {
        id: 47,
        categoria: "Personajes y Criaturas",
        enunciado: "¿Qué criatura de la mitología griega convierte en piedra a quien la mira a los ojos?",
        opciones: ["Medusa", "Quimera", "Esfinge", "Cerbero"],
        correcta: 0,
        puntaje: 100
    },
    {
        id: 48,
        categoria: "Personajes y Criaturas",
        enunciado: "¿Qué espíritu de la mitología irlandesa anuncia una muerte con sus lamentos?",
        opciones: ["Troll", "Duende", "Banshee", "Golem"],
        correcta: 2,
        puntaje: 100
    }
];

// Obtener categorías únicas del banco de preguntas
// Array -> Array
function obtenerCategorias() {
    const categorias = [...new Set(BancoPreguntas.map(p => p.categoria))];
    return categorias;
}

// Obtener preguntas de una categoría específica
// String -> Array
function obtenerPreguntasPorCategoria(categoria) {
    return BancoPreguntas.filter(p => p.categoria === categoria);
}

// Verificar si hay suficientes preguntas en una categoría
// String, Number -> Boolean
function verificarCantidadPreguntas(categoria, cantidad) {
    const preguntas = obtenerPreguntasPorCategoria(categoria);
    return preguntas.length >= cantidad;
}

// Seleccionar preguntas aleatorias sin repetir
// String, Number -> Array
function seleccionarPreguntas(categoria, cantidad) {
    const preguntas = obtenerPreguntasPorCategoria(categoria);
    const seleccionadas = [];
    const indicesUsados = new Set();
    
    while (seleccionadas.length < cantidad && seleccionadas.length < preguntas.length) {
        const indiceAleatorio = Math.floor(Math.random() * preguntas.length);
        if (!indicesUsados.has(indiceAleatorio)) {
            indicesUsados.add(indiceAleatorio);
            seleccionadas.push(preguntas[indiceAleatorio]);
        }
    }
    
    return seleccionadas;
}

// Guardar banco de preguntas en localStorage
// Void -> Void
function inicializarBancoPreguntas() {
    // Se guarda siempre la versión actual del banco, así un banco viejo en el navegador no queda desactualizado
    localStorage.setItem("bancoPreguntas", JSON.stringify(BancoPreguntas));
}

// Obtener banco de preguntas desde localStorage
// Void -> Array
function obtenerBancoPreguntas() {
    return JSON.parse(localStorage.getItem("bancoPreguntas"));
}
