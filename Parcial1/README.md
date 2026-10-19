# Desafío Mental - Proyecto Parcial 1

## Descripción del Proyecto

"Desafío Mental" es una aplicación web de juegos de trivia de conocimientos generales desarrollada por Paulo y Aixa como parte del parcial de la materia "Plataformas de Desarrollo". El proyecto implementa un sistema completo de autenticación, partidas de preguntas y respuestas, ranking, historial y estadísticas, utilizando únicamente HTML, CSS y JavaScript nativo.

## Funcionalidades Implementadas

### 1. Sistema de Autenticación
- **Registro**: Formulario con validaciones completas
  - Usuario: 4-16 caracteres
  - Email: formato válido
  - Contraseña: mínimo 8 caracteres
  - Confirmación de contraseña
  - Verificación de usuario único
- **Inicio de Sesión**: Validación de credenciales
- **Cierre de Sesión**: Desde el menú principal
- **Persistencia**: Datos guardados en localStorage

### 2. Banco de Preguntas
- **48 preguntas** en 4 categorías temáticas de Halloween:
  - Películas de Terror Clásicas (12 preguntas)
  - Halloween y Tradiciones (12 preguntas)
  - Series de Terror (12 preguntas)
  - Personajes y Criaturas (12 preguntas)
- Selección aleatoria sin repetición
- Cada pregunta con 4 opciones y puntaje asignado

### 3. Sistema de Partidas
- **Selección de partida**: Elegir categoría y cantidad (5 o 10 preguntas)
- **Temporizador**: 15 segundos por pregunta
- **Feedback inmediato**: Indica si la respuesta es correcta o incorrecta
- **Sistema de racha**: Racha actual y mejor racha
- **Abandono**: Botón para abandonar con confirmación
- **Puntuación**: Suma de puntos de respuestas correctas

### 4. Resultados
- Puntaje total obtenido
- Cantidad de respuestas correctas e incorrectas
- Porcentaje de respuestas correctas
- Mejor racha de aciertos
- Duración total de la partida
- Categoría y fecha
- Mensaje de desempeño según porcentaje

### 5. Ranking
- Top 10 mejores partidas completadas
- Ordenamiento por puntaje, duración y fecha
- Colores especiales para las primeras 3 posiciones

### 6. Historial
- Listado de todas las partidas del usuario
- Filtros por categoría y estado (completada/abandonada)
- Resumen con función recursiva (completadas, abandonadas, puntaje acumulado)

### 7. Estadísticas
- Partidas completadas
- Preguntas respondidas
- Porcentaje global de respuestas correctas
- Puntaje más alto
- Mejor racha
- Estadísticas por categoría (usando composición de funciones)

### 8. Carga Asincrónica
- Simulación de carga de preguntas con delay de 1 segundo
- Indicador de carga
- Manejo de errores (se simula abriendo menu_principal.html?error=1)
- Botón de reintentar

## Paleta de Colores Halloween

Se ha implementado una paleta de colores temática de Halloween:

| Color | Nombre | Código Hex | Uso |
|-------|--------|------------|-----|
| 🟣 | Medium Slate Blue | #8267D0 | Bordes, sombras, fondos secundarios |
| 🟪 | Indigo Violet | #502C76 | Bordes secundarios, formularios |
| 🟠 | Flame Orange | #FF5404 | Botones principales |
| ⬛ | Black | #07020A | Fondo principal |
| 🟠 | Dark Orange | #FD8D10 | Texto, títulos, hover |

## Estructura del Proyecto

```
Parcial1/
├── index.html                    # Página principal
├── pages/
│   ├── inicio_sesion.html        # Formulario de login
│   ├── registro.html             # Formulario de registro
│   ├── menu_principal.html       # Menú principal
│   ├── seleccion_partida.html    # Selección de categoría y cantidad
│   ├── partida.html              # Pantalla de juego
│   ├── resultados.html           # Resultados de partida
│   ├── historial.html            # Historial de partidas
│   └── ranking.html              # Ranking top 10
├── scripts/
│   ├── index.js                  # Lógica de página principal
│   ├── inicio_sesion.js          # Lógica de inicio de sesión
│   ├── registro.js               # Lógica de registro
│   ├── menu_principal.js         # Lógica del menú principal
│   ├── seleccion_partida.js      # Lógica de selección
│   ├── partida.js                # Lógica del juego
│   ├── resultados.js             # Lógica de resultados
│   ├── historial.js              # Lógica de historial
│   ├── ranking.js                # Lógica de ranking
│   ├── usuarios.js               # Gestión de usuarios
│   ├── preguntas.js              # Banco de preguntas
│   └── partidas.js               # Gestión de partidas
└── styles/
    ├── index.css                 # Estilos de página principal
    ├── inicio_sesion.css         # Estilos de inicio de sesión
    ├── registro.css              # Estilos de registro
    ├── menu_principal.css        # Estilos del menú principal
    ├── seleccion_partida.css     # Estilos de selección
    ├── partida.css               # Estilos del juego
    ├── resultados.css            # Estilos de resultados
    ├── historial.css             # Estilos de historial
    └── ranking.css               # Estilos de ranking
```

## Características Técnicas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con transiciones y animaciones
- **JavaScript Nativo**: Sin frameworks ni bibliotecas externas
- **LocalStorage**: Persistencia de datos
- **Responsive**: Diseño adaptable
- **Documentación**: Todas las funciones documentadas con tipos JSDoc
- **Recursividad**: Función recursiva para análisis de historial
- **Funciones de Orden Superior**: Filtrado y mapeo para estadísticas
- **Composición**: Separación de operaciones para estadísticas por categoría

## Requisitos Cumplidos

✅ Interfaz con todas las pantallas requeridas
✅ Registro con todas las validaciones
✅ Inicio de sesión con verificación
✅ Banco de 20+ preguntas en 4+ categorías
✅ Selección de categoría y cantidad de preguntas
✅ Temporizador de 15 segundos por pregunta
✅ Sistema de racha de aciertos
✅ Botón de abandonar con confirmación
✅ Pantalla de resultados con estadísticas completas
✅ Ranking top 10 con ordenamiento complejo
✅ Historial con filtros por categoría y estado
✅ Estadísticas personales actualizadas
✅ Estadísticas por categoría con composición
✅ Carga asincrónica de preguntas con delay
✅ Persistencia completa de datos
✅ Función recursiva para historial
✅ Todas las funciones documentadas con tipos
✅ Identidad visual coherente (tema Halloween)
✅ Navegación sin recargar página completa
✅ Mensajes visibles para errores y confirmaciones

## Cómo Ejecutar

1. Navega a: `C:\Users\aixar\Desktop\Parcial1_Extracted\Parcial1\`
2. Haz doble clic en `index.html`
3. La aplicación se abrirá en tu navegador

**Para una guía detallada paso a paso, consulta `GUIA_EJECUCION.md`**

## Usuarios de Prueba

- Usuario: `paulo` | Contraseña: `abc123`
- Usuario: `aixa` | Contraseña: `abc123`
- Usuario: `admin` | Contraseña: `123abc`
- Usuario: `horacio` | Contraseña: `horacio123`

## Autores

- **Paulo**
- **Aixa**

Proyecto para el parcial de Plataformas de Desarrollo - 2026

