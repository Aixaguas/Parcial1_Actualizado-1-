# Guía Paso a Paso - Desafío Mental

## Cómo Ejecutar el Proyecto

### Paso 1: Ubicar el Proyecto
El proyecto se encuentra en:
```
C:\Users\aixar\Desktop\Parcial1_Extracted\Parcial1\
```

### Paso 2: Abrir la Aplicación
1. Navega a la carpeta del proyecto
2. Haz doble clic en el archivo `index.html`
3. La aplicación se abrirá en tu navegador predeterminado (Chrome, Firefox, Edge, etc.)

**O alternativamente:**
1. Abre tu navegador web
2. Arrastra el archivo `index.html` a la ventana del navegador
3. O usa `Ctrl + O` para abrir el archivo

### Paso 3: Primer Inicio
Al abrir la aplicación por primera vez, verás:
- La página principal con el título "Desafío Mental"
- Dos botones: "Iniciar Sesión" y "Registrarse"
- Tema Halloween con colores oscuros y naranjas

## Recorrido Completo de la Aplicación

### 1. Registro de Usuario
1. Haz clic en "Registrarse"
2. Completa el formulario:
   - **Username**: Entre 4 y 16 caracteres
   - **Correo Electrónico**: Formato válido (ej: usuario@ejemplo.com)
   - **Contraseña**: Mínimo 8 caracteres
   - **Repetir Contraseña**: Debe coincidir con la anterior
3. Haz clic en "Registrar"
4. Si todo está correcto, verás un mensaje de confirmación
5. Serás redirigido a la página de inicio de sesión

**Usuarios de prueba pre-cargados:**
- Usuario: `paulo` | Contraseña: `abc123`
- Usuario: `aixa` | Contraseña: `abc123`
- Usuario: `admin` | Contraseña: `123abc`
- Usuario: `horacio` | Contraseña: `horacio123`

### 2. Inicio de Sesión
1. Haz clic en "Iniciar Sesión"
2. Ingresa tu nombre de usuario y contraseña
3. Haz clic en "Entrar"
4. Si las credenciales son correctas, accederás al menú principal
5. Si son incorrectas, verás un mensaje de error

### 3. Menú Principal
Después de iniciar sesión, verás:
- Mensaje de bienvenida con tu nombre en mayúsculas
- Indicador de carga mientras se cargan las preguntas (1 segundo)
- Botones para navegar:
  - **Partida**: Iniciar una nueva partida
  - **Ranking**: Ver el top 10 de mejores partidas
  - **Historial**: Ver tus partidas anteriores
  - **Estadísticas**: Ver tus estadísticas personales
  - **Cerrar Sesión**: Salir de tu cuenta

**Nota:** Los botones estarán deshabilitados mientras se cargan las preguntas.

### 4. Iniciar una Partida
1. Haz clic en "Partida" en el menú principal
2. Selecciona una categoría temática de Halloween:
   - Películas de Terror Clásicas
   - Halloween y Tradiciones
   - Series de Terror
   - Personajes y Criaturas
3. Selecciona la cantidad de preguntas: 5 o 10
4. Haz clic en "Iniciar Partida"
5. La partida comenzará automáticamente

**Si no hay suficientes preguntas:**
- El sistema te informará cuántas preguntas están disponibles
- No podrás iniciar la partida

### 5. Jugar una Partida
Durante la partida:
- Verás la pregunta enunciada
- Tendrás 4 opciones de respuesta
- El temporizador muestra 15 segundos
- Cuando queden 5 segundos o menos, el temporizador se pondrá rojo

**Para responder:**
1. Haz clic en la opción que creas correcta
2. El sistema indicará si es correcta o incorrecta
3. Se mostrará la respuesta correcta
4. Después de 2 segundos, pasará a la siguiente pregunta

**Si se agota el tiempo:**
- La respuesta se considera incorrecta
- Se muestra la respuesta correcta
- Después de 2 segundos, pasa a la siguiente pregunta

**Sistema de racha:**
- Cada respuesta correcta aumenta tu racha actual
- Una respuesta incorrecta reinicia la racha
- Se muestra la mejor racha alcanzada

**Abandonar partida:**
1. Haz clic en el botón "Abandonar"
2. Confirma la acción
3. La partida se guardará como "abandonada"
4. Volverás al menú principal

### 6. Resultados de la Partida
Al completar todas las preguntas, verás:
- **Puntaje Total**: Suma de puntos de respuestas correctas
- **Respuestas Correctas**: Cantidad de aciertos
- **Respuestas Incorrectas**: Cantidad de errores
- **Porcentaje Correctas**: Porcentaje de aciertos
- **Mejor Racha**: Mayor racha de aciertos consecutivos
- **Duración**: Tiempo total de la partida en segundos
- **Categoría**: Categoría jugada
- **Fecha**: Fecha y hora de finalización

**Mensaje de desempeño:**
- Menos del 40%: "Necesitás seguir practicando"
- 40% - 69%: "Vas por buen camino"
- 70% - 99%: "¡Excelente desempeño!"
- 100%: "¡Partida perfecta!"

**Opciones:**
- **Volver al Menú**: Regresa al menú principal
- **Nueva Partida**: Inicia una nueva partida

### 7. Consultar el Ranking
1. Haz clic en "Ranking" en el menú principal
2. Verás las 10 mejores partidas completadas
3. Cada entrada muestra:
   - Posición (con colores especiales para top 3)
   - Nombre de usuario
   - Puntaje
   - Categoría
   - Fecha

**Ordenamiento:**
- Por puntaje descendente
- En caso de empate, por menor duración
- Si persiste el empate, por fecha más antigua

### 8. Consultar el Historial
1. Haz clic en "Historial" en el menú principal
2. Verás todas tus partidas ordenadas por fecha (más reciente primero)
3. Cada partida muestra:
   - Fecha
   - Categoría
   - Puntaje
   - Respuestas correctas/total
   - Estado (Completada/Abandonada)

**Filtros:**
- Por categoría: Películas de Terror Clásicas, Halloween y Tradiciones, Series de Terror, Personajes y Criaturas
- Por estado: Completada o Abandonada
- Haz clic en "Filtrar" para aplicar
- Haz clic en "Limpiar Filtros" para ver todo

**Resumen del historial:**
- Partidas completadas
- Partidas abandonadas
- Puntaje acumulado de partidas completadas

### 9. Consultar Estadísticas
1. Haz clic en "Estadísticas" en el menú principal
2. Verás tus estadísticas personales:
   - Partidas completadas
   - Preguntas respondidas
   - Porcentaje global de respuestas correctas
   - Puntaje más alto obtenido
   - Mejor racha de aciertos

**Estadísticas por categoría:**
1. Selecciona una categoría del dropdown
2. Verás el porcentaje de aciertos en esa categoría específica

### 10. Cerrar Sesión
1. Haz clic en "Cerrar Sesión" en el menú principal
2. Serás redirigido a la página principal
3. Podrás iniciar sesión con otro usuario

## Persistencia de Datos

**Qué se guarda:**
- Usuarios registrados
- Sessión activa
- Todas las partidas (completadas y abandonadas)
- Banco de preguntas

**Los datos persisten:**
- Al cerrar el navegador
- Al actualizar la página
- Al cerrar y volver a abrir la aplicación

**Para limpiar datos:**
- Abre las herramientas de desarrollador del navegador (F12)
- Ve a la pestaña "Application" o "Almacenamiento"
- En "Local Storage", selecciona tu dominio
- Borra los items deseados o "Clear All"

## Casos de Prueba Recomendados

### 1. Formularios Inválidos
- Intentar registrar con campos vacíos
- Usar email inválido
- Usar username muy corto (< 4 caracteres)
- Usar username muy largo (> 16 caracteres)
- Usar contraseña muy corta (< 8 caracteres)
- Contraseñas que no coinciden
- Registrar usuario ya existente

### 2. Credenciales Incorrectas
- Iniciar sesión con usuario inexistente
- Iniciar sesión con contraseña incorrecta

### 3. Sin Partidas
- Consultar ranking sin partidas completadas
- Consultar historial sin partidas
- Ver estadísticas sin partidas

### 4. Insuficientes Preguntas
- Intentar iniciar partida con más preguntas de las disponibles
- (Esto no debería ocurrir con las 48 preguntas actuales)

### 5. Vencimiento de Tiempo
- Dejar que se agote el tiempo en una pregunta
- Verificar que se muestra la respuesta correcta

### 6. Error en Carga Asincrónica
- Para ver el error, abrir menu_principal.html?error=1 (la primera carga falla y "Reintentar" la completa)
- Si ocurre, verás un mensaje de error
- Puedes hacer clic en "Reintentar"

### 7. Actualizar Navegador
- Jugar una partida
- Actualizar la página (F5)
- Verificar que los datos se conservan

## Características Implementadas

✅ **Sistema de autenticación completo**
- Registro con validaciones
- Inicio de sesión
- Cierre de sesión

✅ **Banco de preguntas**
- 48 preguntas en 4 categorías
- 12 preguntas por categoría
- Selección aleatoria sin repetición

✅ **Sistema de juego**
- Temporizador de 15 segundos
- Feedback inmediato
- Sistema de racha
- Puntuación

✅ **Resultados detallados**
- Estadísticas completas
- Mensaje de desempeño
- Duración de partida

✅ **Ranking**
- Top 10 partidas
- Ordenamiento complejo
- Colores para podio

✅ **Historial**
- Filtrado por categoría
- Filtrado por estado
- Resumen con función recursiva

✅ **Estadísticas**
- Estadísticas globales
- Estadísticas por categoría
- Composición de funciones

✅ **Persistencia**
- LocalStorage
- Recuperación de datos
- No pérdida al cerrar navegador

✅ **Carga asincrónica**
- Simulación de delay
- Indicador de carga
- Manejo de errores

✅ **Documentación**
- Todas las funciones documentadas con tipos
- Comentarios JSDoc

✅ **Tema Halloween**
- Paleta de colores temática
- Diseño consistente
- Efectos visuales

## Solución de Problemas

**La aplicación no se abre:**
- Verifica que estás abriendo `index.html`
- Usa un navegador moderno (Chrome, Firefox, Edge)

**Los datos no se guardan:**
- Verifica que tu navegador permite LocalStorage
- No uses modo de navegación privada

**Los botones no funcionan:**
- Espera a que carguen las preguntas (1 segundo)
- Verifica que estás logueado

**Error al cargar preguntas:**
- Haz clic en "Reintentar"
- Solo aparece si se abre menu_principal.html?error=1; "Reintentar" completa la carga

**La partida no inicia:**
- Verifica que seleccionaste categoría y cantidad
- Verifica que hay suficientes preguntas

## Contacto

Proyecto desarrollado por:
- **Paulo**
- **Aixa**

Para la materia: Plataformas de Desarrollo - 2026
