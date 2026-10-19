# Paleta de Colores Halloween - Referencia

## Temática del Proyecto

Todas las preguntas del juego son temáticas de Halloween, películas y series de terror, incluyendo:
- **Películas de Terror Clásicas**: Viernes 13, El Exorcista, El Resplandor, Halloween, etc.
- **Halloween y Tradiciones**: Origen celta Samhain, jack-o'-lanterns, trick or treat, etc.
- **Series de Terror**: Stranger Things, American Horror Story, You, Buffy, etc.
- **Personajes y Criaturas**: Vampiros, hombres lobo, zombis, Pennywise, Chucky, etc.

## Colores Implementados

### 1. Ruined Smores
- **Código Hex**: #0F1111
- **RGB**: 15, 17, 17
- **Uso**:
  - Fondo principal de todas las páginas
  - Fondo de campos de entrada
  - Fondo de elementos oscuros

### 2. Shadow Warrior
- **Código Hex**: #1C2321
- **RGB**: 28, 35, 33
- **Uso**:
  - Bordes secundarios en hover
  - Bordes de formularios
  - Acentos en elementos interactivos
  - Fondos de tablas (thead)

### 3. Chocolate Rush
- **Código Hex**: #4E1C0D
- **RGB**: 78, 28, 13
- **Uso**:
  - Bordes de filas en tablas
  - Sombras profundas
  - Acentos oscuros

### 4. Pumpkin Choco
- **Código Hex**: #8C2E0F
- **RGB**: 140, 46, 15
- **Uso**:
  - Bordes de spinner
  - Elementos decorativos secundarios
  - Sombras intermedias

### 5. Red Panda
- **Código Hex**: #C24F1D
- **RGB**: 194, 79, 29
- **Uso**:
  - Botones principales (estado normal)
  - Bordes de campos de entrada
  - Elementos de acción

### 6. Avocado Peel
- **Código Hex**: #38373B
- **RGB**: 56, 55, 59
- **Uso**:
  - Bordes de botones
  - Sombras de texto (text-shadow)
  - Elementos decorativos
  - Bordes de filas en tablas

### 7. Kanafeh
- **Código Hex**: #DD8838
- **RGB**: 221, 136, 56
- **Uso**:
  - Texto principal y títulos
  - Botones en estado hover
  - Labels de formularios
  - Efectos de brillo/glow

## Aplicación por Página

### index.css (Página Principal)
- Background: #0F1111 (Ruined Smores)
- Texto: #DD8838 (Kanafeh)
- Botones: #C24F1D (Red Panda) con borde #38373B (Avocado Peel)
- Efecto hover: #DD8838 (Kanafeh) con borde #1C2321 (Shadow Warrior)

### inicio_sesion.css (Inicio de Sesión)
- Background: #0F1111 (Ruined Smores)
- Formulario: #38373B (Avocado Peel) con borde #1C2321 (Shadow Warrior)
- Labels: #DD8838 (Kanafeh)
- Inputs: #0F1111 (Ruined Smores) con borde #C24F1D (Red Panda)
- Botón: #C24F1D (Red Panda) con borde #38373B (Avocado Peel)

### registro.css (Registro)
- Misma configuración que inicio_sesion.css
- Consistencia en el sistema de autenticación

### menu_principal.css (Menú Principal)
- Background: #0F1111 (Ruined Smores)
- Headers: #DD8838 (Kanafeh) con sombra #38373B (Avocado Peel)
- Botones: #C24F1D (Red Panda) con borde #38373B (Avocado Peel)
- Efecto hover: #DD8838 (Kanafeh) con borde #1C2321 (Shadow Warrior)

## Efectos Visuales

### Texto con Sombra
```css
text-shadow: 2px 2px 4px #38373B;
```
Aplicado a todos los títulos h2 para dar profundidad y efecto neón.

### Transiciones Suaves
```css
transition: all 0.3s ease;
```
Aplicado a todos los botones para animaciones fluidas.

### Transformación en Hover
```css
transform: scale(1.05);
```
Los botones crecen un 5% al pasar el mouse para mejorar la interactividad.

## Combinaciones de Color

### Principal
- Fondo oscuro (#0F1111) + Texto dorado (#DD8838) + Acentos marrones
- Alto contraste para legibilidad
- Ambiente misterioso y temático

### Interactividad
- Botones naranjas oscuras (#C24F1D) con bordes grises (#38373B)
- Estado hover usa tono más claro (#DD8838)
- Transiciones suaves para mejor UX

### Formularios
- Fondo gris oscuro (#38373B) para contenedor
- Inputs muy oscuros (#0F1111) con bordes naranjas (#C24F1D)
- Labels dorados (#DD8838) para claridad

## Consideraciones de Accesibilidad

- Contraste alto entre texto (#DD8838) y fondo (#0F1111)
- Bordes visibles en elementos interactivos
- Efectos hover claros para indicar interactividad
- Fuentes legibles con tamaños apropiados
