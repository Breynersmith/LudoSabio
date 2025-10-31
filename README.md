# 📚 Documentación del Proyecto Educativo Interactivo

Este documento describe la estructura y el propósito de los archivos que componen un sistema de quiz educativo interactivo con elementos de gamificación, incluyendo minijuegos como Snake (Gusanito) y Sopa de Letras.

---

## 📋 Tabla de Contenidos

1. [Estructura General del Proyecto](#estructura-general)
2. [Archivos Core (JavaScript)](#archivos-core)
3. [Módulo Quiz Principal](#módulo-quiz)
4. [Minijuego: Gusanito (Snake)](#minijuego-gusanito)
5. [Minijuego: Sopa de Letras](#minijuego-sopa)
6. [Banco de Preguntas](#banco-preguntas)
7. [Interfaz y Estilos](#interfaz-estilos)

---

## 🏗️ Estructura General del Proyecto {#estructura-general}

El proyecto se organiza en tres capas principales:

- **Capa de Estado**: Maneja las variables y referencias del DOM
- **Capa de UI**: Sincroniza el estado con la interfaz visual
- **Capa de Lógica**: Controla el flujo del juego y las interacciones

### Tabla de Archivos Principales

| Archivo | Propósito Principal | Funciones Clave |
|---------|---------------------|-----------------|
| `state.js` | Estado central del juego y referencias DOM | `estado`, `el`, `totalPreguntasBase` |
| `ui.js` | Sincronización estado-interfaz | `sincronizarState`, `actualizarContadores`, `reiniciarTodo` |
| `iniciar.js` | Flujo de inicio y configuración | `entrar`, `iniciarJuego`, `filtrarPreguntas` |
| `utils.js` | Utilidades reutilizables | `shuffle`, `mezclarEn`, `temporizador` |
| `quiz.js` | Lógica del quiz principal | `siguientePregunta`, `verificarRespuesta` |
| `bancodepreguntas.js` | Base de datos de preguntas | `BANCO` |

---

## 💻 Archivos Core (JavaScript) {#archivos-core}

### 1. `state.js` - Estado Central

Este archivo es la **fuente única de verdad** para el estado de la aplicación.

#### Constantes Globales

```javascript
totalPreguntasBase: 20  // Número total de preguntas por partida
```

#### Objeto `el` (Referencias DOM)

Centraliza todas las referencias a elementos HTML importantes:

```javascript
el = {
  // Vistas principales
  pantallaInicio,
  quiz,
  juegoGusanito,
  juegoSopa,
  modalPantallaFin,
  
  // Elementos de UI
  barraProgreso,
  vidasGanadas,
  gradoLabel,
  dificultadLabel,
  successMessage
}
```

#### Objeto `estado` (Estado del Juego)

Almacena el estado actual de la aplicación:

**Métricas del Usuario:**
- `vidas`: Contador de vidas (inicia en 5)
- `preguntasAcertadas`: Total de respuestas correctas
- `preguntasContestadas`: Total de preguntas respondidas
- `preguntasSaltadas`: Preguntas omitidas
- `progreso`: Porcentaje de avance

**Control de Vistas (Booleanos):**
- `modalInicio`: Pantalla de inicio visible
- `quiz`: Quiz principal visible
- `juegoGusanito`: Minijuego Snake activo
- `juegoSopa`: Minijuego Sopa de Letras activo
- `modalPantallaFin`: Pantalla final visible

**Configuración del Quiz:**
- `grado`: Nivel educativo seleccionado (6-11)
- `dificultad`: Nivel de dificultad ("facil", "medio", "dificil")
- `questionCurrent`: Pregunta actual en pantalla
- `preguntasGuardadas`: Array de preguntas disponibles

---

### 2. `ui.js` - Interfaz de Usuario

Responsable de reflejar los cambios del objeto `estado` en la interfaz visual.

#### Funciones Principales

##### `sincronizarState()`

La función más crítica del módulo UI. Actualiza la visibilidad de todas las pantallas basándose en los booleanos del objeto `estado`.

- Utiliza `toggleViewWithTransition()` para aplicar efectos de transición
- Sincroniza: login, quiz, minijuegos, modales

##### `toggleViewWithTransition(element, shouldShow, delay)`

Utilidad de bajo nivel para mostrar/ocultar elementos con transición suave.

```javascript
TRANSITION_DURATION = 300ms  // Duración de la transición
```

**Funcionamiento:**
1. Aplica/remueve clase `hidden`
2. Anima opacidad (0 → 1 o 1 → 0)
3. Proporciona experiencia fluida

##### `actualizarContadores()`

Actualiza indicadores visuales:
- Barra de progreso (`el.barraProgreso`)
- Porcentaje de avance
- Contador de preguntas

##### `actualizarVidasUI()`

Renderiza iconos de corazones según `estado.vidas`.

##### `reiniciarTodo()`

Restablece el juego a valores iniciales:
- 5 vidas
- Contadores a 0
- Progreso a 0
- Limpia arrays

##### `cerrarSesion()`

- Llama a `reiniciarTodo()`
- Fuerza `estado.modalInicio = true`
- Oculta la cabecera

---

### 3. `iniciar.js` - Configuración e Inicio

Gestiona el proceso de entrada y configuración inicial del juego.

#### Funciones Principales

##### `entrar()`

Ejecutada al "iniciar sesión" o comenzar el juego.

**Proceso:**

1. **Validación**: Verifica que nombre y clave no estén vacíos
2. **Configuración**: Guarda grado y dificultad en `estado`
3. **Transición**: Oculta pantalla de inicio, muestra quiz
4. **Inicio**: Llama a `sincronizarState()` y `iniciarJuego()`

##### `iniciarJuego()`

**Acciones:**
- Reinicia métricas (5 vidas, 0 contestadas)
- Llama a `filtrarPreguntas()` para cargar preguntas
- Actualiza etiquetas de grado/dificultad en UI

##### `filtrarPreguntas(grado, dificultad)`

Lógica inteligente de selección de preguntas.

**Algoritmo de Priorización:**

1. **Primera prioridad**: Preguntas que coinciden exactamente con grado y dificultad
2. **Segunda prioridad**: Preguntas de la misma dificultad
3. **Tercera prioridad**: Preguntas del mismo grado
4. **Última prioridad**: Preguntas de todo el banco

**Requisito mínimo**: 12 preguntas

**Proceso:**
```
1. Filtrar por grado + dificultad
2. Si < 12: Mezclar preguntas de misma dificultad
3. Si < 12: Mezclar preguntas del mismo grado
4. Si < 12: Mezclar preguntas del banco completo
5. Aleatorizar con shuffle()
```

---

### 4. `utils.js` - Utilidades

Funciones genéricas reutilizables.

#### Funciones Disponibles

##### `shuffle(array)`

Implementación del algoritmo **Fisher-Yates** para desordenar arrays aleatoriamente.

**Uso:** Aleatorizar orden de preguntas y opciones.

##### `mezclarEn(dest, src)`

Combina arrays evitando duplicados.

**Parámetros:**
- `dest`: Array destino
- `src`: Array fuente

**Lógica:** Solo añade elementos de `src` a `dest` si no existen previamente.

##### `temporizador(elementoQuiz, elementoModal, mostrar, delay)`

Muestra/oculta modales con retraso y efectos visuales.

**Efectos:**
- Aplica `blur-sm` al quiz cuando se muestra un modal
- Remueve blur al ocultar modal
- Retraso configurable

---

## 🎮 Módulo Quiz Principal {#módulo-quiz}

### Archivo: `quiz.js`

Maneja la presentación de preguntas, validación de respuestas y métricas del juego.

#### Funciones Principales

##### `siguientePregunta()`

Controla la secuencia principal del juego.

**Flujo:**

```
1. ¿Preguntas contestadas >= 20?
   → Sí: Mostrar pantalla final
   → No: Continuar

2. ¿Lista de preguntas vacía?
   → Sí: Recargar con filtrarPreguntas()
   → No: Continuar

3. Extraer siguiente pregunta (shift())
4. Guardar en estado.questionCurrent
5. Actualizar UI (título, pregunta, opciones)
6. Generar botones de respuesta
```

##### `verificarRespuesta(opcionSeleccionada)`

Ejecutada al seleccionar una opción.

**Proceso de Validación:**

1. **Bloqueo**: Deshabilita todas las opciones
2. **Comparación**: Compara índice seleccionado con índice correcto

**Si es correcta:**
```javascript
- Aplicar estilo de éxito
- Incrementar preguntasAcertadas
- Incrementar progreso
- Reproducir sonido de éxito
- setTimeout(siguientePregunta, 800)
```

**Si es incorrecta:**
```javascript
- Aplicar estilo de error a selección
- Aplicar estilo de éxito a respuesta correcta
- Restar 1 vida
- Incrementar preguntasErradas

- Si vidas <= 0:
    → Mostrar pantalla final
- Sino:
    → setTimeout(siguientePregunta, 800)
```

3. **Actualización**: Incrementa `preguntasContestadas` y actualiza contadores

##### `saltarPregunta()`

Permite omitir preguntas con penalización.

**Penalización:**
- -1 vida
- Incrementa `preguntasSaltadas`
- Incrementa `preguntasContestadas`
- Avanza a siguiente pregunta

---

## 🐍 Minijuego: Gusanito (Snake) {#minijuego-gusanito}

### Archivos del Módulo

| Archivo | Responsabilidad |
|---------|----------------|
| `snake.js` | Motor gráfico y lógica del juego |
| `controlSnake.js` | Control de flujo e input del teclado |
| `modalSnake.js` | Lógica de gamificación y preguntas |

---

### 1. `snake.js` - Motor del Juego

Contiene la lógica fundamental de Snake y renderizado en Canvas.

#### Objeto `gusanito` (Estado Local)

```javascript
gusanito = {
  canvas,              // Elemento canvas
  ctx,                 // Contexto 2D
  box: 18,            // Tamaño de cada celda (píxeles)
  snake: [],          // Segmentos de la serpiente [{x, y}]
  dir: "RIGHT",       // Dirección actual
  food: {x, y},       // Posición de la comida
  awaitingAnswer: false,  // Pausado esperando respuesta
  streak: 0,          // Aciertos consecutivos
  aciertos: 0,        // Total de aciertos
  loopId: null        // ID del setInterval
}
```

#### Funciones Clave

##### `generarComidaGusanito()`

Coloca la comida en posición aleatoria dentro de la cuadrícula del canvas.

##### `loopGusanito()`

Función principal ejecutada repetidamente con `setInterval`.

**Proceso:**

```
1. DIBUJO
   - Limpiar canvas
   - Redibujar manzana
   - Redibujar serpiente (cabeza + cuerpo)
   - Usar diferentes imágenes según dirección

2. MOVIMIENTO
   - Calcular nueva posición de cabeza según dir
   - Agregar nueva cabeza al array
   - Remover cola (si no comió)

3. COLISIÓN CON PAREDES/CUERPO
   - Detectar si cabeza sale de límites
   - Detectar si cabeza choca con cuerpo
   → Si colisiona: Mostrar mensaje, llamar resetSnake()

4. COLISIÓN CON COMIDA
   - Si head.x === food.x && head.y === food.y:
     → Pausar juego (awaitingAnswer = true)
     → Mostrar modal de pregunta
     → Generar nueva operación matemática
```

**Recursos Gráficos:**
- `headLeftImg`, `headRightImg`, `headUpImg`, `headDownImg`
- `appleImg`
- Imágenes del cuerpo

---

### 2. `controlSnake.js` - Control y Input

Maneja la configuración del juego y entrada del usuario.

#### Funciones Principales

##### `iniciarGusanito()`

Función de entrada al minijuego.

**Proceso:**
1. Sincroniza estado global (`estado.juegoGusanito = true`)
2. Oculta otras vistas
3. Configura canvas y contexto 2D
4. Agrega event listeners del teclado
5. Llama a `resetSnake()`

##### `resetSnake()`

Reinicia la partida.

**Acciones:**
- Detiene `gusanito.loopId` activo
- Restablece serpiente a posición inicial
- Dirección inicial: RIGHT
- Reinicia contadores (aciertos = 0, streak = 0)
- Inicia bucle: `setInterval(loopGusanito, 250)`

##### `teclaGusanito(event)`

Captura teclas de flecha para cambiar dirección.

**Validaciones:**
- No cambiar a dirección opuesta (ej: RIGHT → LEFT bloqueado)
- Ignorar input si `awaitingAnswer === true`

**Mapeo:**
```javascript
ArrowUp    → "UP"
ArrowDown  → "DOWN"
ArrowLeft  → "LEFT"
ArrowRight → "RIGHT"
```

##### `pausarJuego(evento)`

Pausa/reanuda con tecla Espacio.

**Funcionamiento:**
- Alterna `estado.isPaused`
- Detiene/reinicia `gusanito.loopId`

---

### 3. `modalSnake.js` - Gamificación

Lógica de preguntas matemáticas al comer la manzana.

#### Funciones Principales

##### `rangoSegunNivel()`

Define complejidad de operaciones según grado y dificultad.

**Retorna:**
```javascript
{
  max: number,           // Valor máximo de operandos
  ops: string[]          // Operadores permitidos ["+", "-", "*", "/"]
}
```

**Ejemplos:**
- Grado 6, Fácil: `max: 20, ops: ["+", "-"]`
- Grado 11, Difícil: `max: 100, ops: ["+", "-", "*", "/"]`

##### `generarOperacionModalSegunNivel()`

Genera operación matemática aleatoria.

**Proceso:**
1. Obtener rangos con `rangoSegunNivel()`
2. Generar números aleatorios `a` y `b`
3. Seleccionar operador aleatorio
4. Crear texto de operación
5. Calcular resultado (incluyendo lógica para división/decimales)
6. Guardar en `gusanito.currentResult`
7. Actualizar modal

##### `modalEnviar()`

Procesa respuesta del usuario.

**Flujo de Acierto:**
```
1. Incrementar gusanito.aciertos
2. Mostrar mensaje de éxito
3. Si aciertos es múltiplo de 3:
   - Incrementar streak
   - Otorgar vida extra (estado.vidas += 1)
4. Cerrar modal y continuar juego
```

**Flujo de Error:**
```
1. Reiniciar streak = 0
2. Mostrar mensaje de error
3. Cerrar modal y continuar juego
```

**Condición de Victoria (Racha):**
```
Si streak >= 2:
  1. Iniciar cuenta regresiva
  2. Al finalizar: volver al quiz principal
  3. Reiniciar contadores de racha y aciertos
  4. Llamar siguientePregunta() y volverAlQuiz()
```

##### `modalCerrar()`

Cierra modal de operación.

**Acciones:**
- `gusanito.awaitingAnswer = false`
- Oculta modal
- Genera nueva comida

---

## 🔤 Minijuego: Sopa de Letras {#minijuego-sopa}

### Archivos del Módulo

| Archivo | Responsabilidad |
|---------|----------------|
| `sopaHelper.js` | Motor de generación de matriz |
| `sopa.js` | Lógica del juego e interfaz |

---

### 1. `sopaHelper.js` - Generación de Matriz

Contiene la lógica compleja para colocar palabras y construir el tablero.

#### Proceso de Generación

##### Paso 1: Inicialización

```javascript
grid = Array(gridSize).fill().map(() => 
  Array(gridSize).fill().map(() => ({
    letter: '',
    used: false
  }))
)
```

##### Paso 2: Colocación de Palabras

**Función:** `colocarPalabraSopa(word)`

**8 Direcciones Posibles:**
1. Horizontal derecha
2. Horizontal izquierda
3. Vertical abajo
4. Vertical arriba
5. Diagonal ↘
6. Diagonal ↗
7. Diagonal ↙
8. Diagonal ↖

**Algoritmo:**
```
Para cada palabra:
  Intentar hasta 400 veces:
    1. Generar posición aleatoria
    2. Seleccionar dirección aleatoria
    3. Verificar que no exceda límites
    4. Verificar que no se superponga incorrectamente
    5. Si válido: colocar palabra letra por letra
    6. Marcar celdas como used: true
```

##### Paso 3: Relleno Aleatorio

Todos los espacios con `used: false` se rellenan con letras aleatorias del alfabeto.

```javascript
const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
```

---

### 2. `sopa.js` - Lógica e Interacción

Estado local, inicialización y manejo de eventos del mouse.

#### Objeto `sopa` (Estado Local)

```javascript
sopa = {
  canvas,              // Elemento canvas
  ctx,                 // Contexto 2D
  gridSize: 12,       // Dimensión de la cuadrícula
  
  // Palabras en formato bilingüe
  palabrasBase: [
    { en: "HELLO", es: "HOLA" },
    { en: "WORLD", es: "MUNDO" },
    // ...
  ],
  
  palabras: [],       // Palabras actuales a encontrar
  found: [],          // Palabras ya encontradas
  grid: [],           // Matriz del juego
  
  // Estado de selección del usuario
  startCell: null,    // Celda inicial del arrastre
  endCell: null,      // Celda final del arrastre
  dragging: false     // Está arrastrando el mouse
}
```

#### Objeto `SopaConfig`

Configuración de la partida actual:

```javascript
SopaConfig = {
  grid: [],           // Cuadrícula actual
  words: [],          // Palabras a buscar
  found: [],          // Palabras encontradas
  startCell: null,
  endCell: null
}
```

#### Funciones Principales

##### `iniciarSopa()`

Inicialización del minijuego.

**Proceso:**
1. `estado.juegoSopa = true`
2. Llamar a lógica de generación (`sopaHelper.js`)
3. Construir `sopa.grid`
4. Configurar event listeners del mouse:
   - `mousedown`
   - `mousemove`
   - `mouseup`

##### Event Handlers del Mouse

**`onMouseDown(event)`**
```javascript
Acciones:
- Registrar celda inicial (sopa.startCell)
- Activar sopa.dragging = true
```

**`onMouseMove(event)`**
```javascript
Si sopa.dragging:
  - Actualizar celda actual (sopa.endCell)
  - Redibujar canvas
  - Resaltar letras entre startCell y endCell
```

**`onMouseUp(event)`**
```javascript
Finalizar selección:
1. Extraer texto de celdas seleccionadas
2. Comparar con sopa.palabras
3. Si es válida y no encontrada:
   - Añadir a sopa.found
   - Actualizar progreso
   - Otorgar recompensa (vida extra, etc.)
4. Si todas encontradas:
   - Llamar forzarSalirSopa()
```

##### `forzarSalirSopa()`

Salida del minijuego.

**Acciones:**
- `estado.juegoSopa = false`
- Remover event listeners del mouse
- Llamar `siguientePregunta()`
- Volver al quiz principal

---

## 📚 Banco de Preguntas {#banco-preguntas}

### Archivo: `bancodepreguntas.js`

Exporta la constante `BANCO`: array con el corpus de preguntas educativas.

#### Coherencia Educativa

**Características:**
- **Diversidad de Materias**: Matemáticas, Cultura Ciudadana, Ciencias, etc.
- **Grados**: 6 a 11 (educación secundaria Colombia)
- **Dificultades**: Fácil, Medio, Difícil
- **Adaptabilidad**: Permite personalización del juego

#### Estructura de Datos

Cada pregunta es un objeto con la siguiente estructura:

```javascript
{
  materia: string,        // Área temática
  grado: string,          // Nivel educativo ("6" - "11")
  dificultad: string,     // "facil", "medio", "dificil"
  pregunta: string,       // Enunciado
  opciones: string[],     // Array de 4 opciones
  correcta: number        // Índice de respuesta correcta (0-3)
}
```

#### Ejemplo de Pregunta

```javascript
{
  materia: "Cultura Ciudadana",
  grado: "11",
  dificultad: "dificil",
  pregunta: "¿Cuánto es $345 + 187$?",
  opciones: ["522", "532", "432", "542"],
  correcta: 1  // "532"
}
```

#### Tabla de Propiedades

| Propiedad | Tipo | Descripción | Ejemplo |
|-----------|------|-------------|---------|
| `materia` | `string` | Área temática | "Matemáticas" |
| `grado` | `string` | Nivel educativo | "10" |
| `dificultad` | `string` | Nivel de complejidad | "medio" |
| `pregunta` | `string` | Enunciado completo | "¿Cuál es...?" |
| `opciones` | `array` | 4 posibles respuestas | ["A", "B", "C", "D"] |
| `correcta` | `number` | Índice correcto (0-3) | 2 |

---

## 🎨 Interfaz y Estilos {#interfaz-estilos}

### Archivo: `index.html`

Punto de entrada de la aplicación. Define el layout como SPA (Single Page Application).

#### Configuración Inicial (Head)

```html
<!-- Estándar HTML5 -->
<meta charset="utf-8">
<title>LudoSabio - Diviértete Aprendiendo</title>

<!-- Framework CSS -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Fuentes -->
<link href="Poppins" rel="stylesheet">
<link href="Lexend" rel="stylesheet">

<!-- Iconos -->
<link href="Material Symbols Outlined" rel="stylesheet">

<!-- Estilos personalizados -->
<link rel="stylesheet" href="Styles.css">
```

#### Configuración de Tailwind

```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "#1f506e",
        // Otros colores personalizados
      }
    }
  }
}
```

#### Contenedores de Vistas (Body)

La aplicación usa vistas modulares que se muestran/ocultan con JavaScript:

| ID del Contenedor | Propósito | Estado Controlador |
|-------------------|-----------|-------------------|
| `login-view` | Pantalla de inicio/login | `estado.modalInicio` |
| `quizContainer` | Contenedor principal del quiz | `estado.quiz` |
| `pantallaGusanito` | Minijuego Snake | `estado.juegoGusanito` |
| `pantallaSopa` | Minijuego Sopa de Letras | `estado.juegoSopa` |
| `finQuiz` | Pantalla de finalización | `estado.modalPantallaFin` |

#### Estructura de la Vista Login

```html
<div id="login-view">
  <h1>LudoSabio</h1>
  <input type="text" placeholder="Nombre">
  <input type="password" placeholder="Clave">
  <select id="grado">
    <option value="6">Grado 6</option>
    <!-- ... -->
  </select>
  <select id="dificultad">
    <option value="facil">Fácil</option>
    <option value="medio">Medio</option>
    <option value="dificil">Difícil</option>
  </select>
  <button onclick="entrar()">Comenzar</button>
</div>
```

#### Estructura del Quiz Container

```html
<div id="quizContainer">
  <!-- Cabecera -->
  <header>
    <div id="vidas">❤️ x 5</div>
    <div id="progreso">0%</div>
  </header>
  
  <!-- Vista de preguntas -->
  <div id="quiz-view">
    <h2 id="materia">Matemáticas</h2>
    <p id="pregunta">¿Cuánto es 2+2?</p>
    <div id="opciones">
      <!-- Botones generados dinámicamente -->
    </div>
  </div>
</div>
```

#### Canvas de Minijuegos

```html
<!-- Snake -->
<canvas id="canvasSnake" width="400" height="400"></canvas>

<!-- Sopa de Letras -->
<canvas id="canvasSopa" width="600" height="600"></canvas>
```

---

### Archivo: `Styles.css`

Define estilos personalizados no cubiertos por Tailwind.

#### Estilos Comunes

```css
/* Transiciones suaves */
.transition-opacity {
  transition: opacity 300ms ease-in-out;
}

/* Estado oculto */
.hidden {
  display: none;
}

/* Efectos de blur */
.blur-sm {
  filter: blur(4px);
}
```

#### Estilos del Quiz

```css
/* Opciones de respuesta */
.opcion {
  padding: 1rem;
  border: 2px solid #ccc;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
}

.opcion:hover {
  background-color: #f0f0f0;
  transform: translateY(-2px);
}

/* Estados de respuesta */
.correcta {
  background-color: #4CAF50;
  border-color: #4CAF50;
  color: white;
}

.incorrecta {
  background-color: #f44336;
  border-color: #f44336;
  color: white;
}
```

#### Estilos de Canvas

```css
canvas {
  border: 2px solid #333;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
```

---

## 🔄 Flujo de Ejecución

### Flujo General del Juego

```
1. INICIO
   └─> Mostrar login-view
   └─> Usuario ingresa datos
   └─> Llamar entrar()

2. CONFIGURACIÓN
   └─> Validar inputs
   └─> Guardar grado y dificultad
   └─> Llamar iniciarJuego()
   └─> Llamar filtrarPreguntas()

3. JUEGO PRINCIPAL (QUIZ)
   └─> Mostrar pregunta
   └─> Usuario responde
   └─> verificarRespuesta()
   └─> Actualizar métricas
   └─> siguientePregunta()
   └─> Repetir hasta 20 preguntas

4. MINIJUEGOS (OPCIONAL)
   ├─> Snake (Gusanito)
   │   └─> Resolver operaciones matemáticas
   │   └─> Ganar vidas con rachas
   └─> Sopa de Letras
       └─> Encontrar palabras
       └─> Ganar bonificaciones

5. FINALIZACIÓN
   └─> Mostrar estadísticas finales
   └─> Opción de reiniciar
```

---

## 📊 Sistema de Gamificación

### Mecánicas de Juego

#### Vidas
- **Inicial**: 5 vidas
- **Se pierden**: Al responder incorrectamente o saltar pregunta
- **Se ganan**: 
  - Snake: Cada 3 aciertos consecutivos
  - Sopa: Al completar el juego

#### Progreso
- Basado en preguntas acertadas
- Máximo: 20 preguntas
- Barra visual actualizada en tiempo real

#### Sistema de Rachas (Streak)
- **Snake**: Aciertos consecutivos en operaciones matemáticas
- **Recompensa**: 
  - 3 aciertos = +1 vida
  - 2 rachas = Victoria automática, volver al quiz

#### Penalizaciones
- Respuesta incorrecta: -1 vida
- Saltar pregunta: -1 vida
- Game Over: vidas = 0

---

## 🔧 Funciones de Utilidad Globales

### Sincronización de Estado

```javascript
// Actualizar todas las vistas según estado
sincronizarState()

// Actualizar contadores visuales
actualizarContadores()

// Actualizar iconos de vidas
actualizarVidasUI()
```

### Gestión de Preguntas

```javascript
// Obtener siguiente pregunta
siguientePregunta()

// Verificar respuesta del usuario
verificarRespuesta(indice)

// Omitir pregunta actual
saltarPregunta()

// Filtrar preguntas por criterios
filtrarPreguntas(grado, dificultad)
```

### Control de Minijuegos

```javascript
// Iniciar Snake
iniciarGusanito()

// Resetear Snake
resetSnake()

// Pausar/Reanudar Snake
pausarJuego()

// Iniciar Sopa de Letras
iniciarSopa()

// Forzar salida de Sopa
forzarSalirSopa()
```

### Gestión de Sesión

```javascript
// Iniciar sesión y juego
entrar()

// Reiniciar todo el juego
reiniciarTodo()

// Cerrar sesión
cerrarSesion()
```

---

## 🎯 Patrones de Diseño Utilizados

### 1. Singleton Pattern
**Archivo**: `state.js`

El objeto `estado` actúa como un singleton, proporcionando un único punto de acceso al estado global de la aplicación.

```javascript
// Un único objeto estado compartido
const estado = {
  vidas: 5,
  progreso: 0,
  // ...
}
```

### 2. Observer Pattern
**Archivo**: `ui.js`

La función `sincronizarState()` observa cambios en el estado y actualiza la UI automáticamente.

```javascript
// Observa estado y sincroniza vistas
function sincronizarState() {
  toggleViewWithTransition(el.quiz, estado.quiz)
  toggleViewWithTransition(el.juegoGusanito, estado.juegoGusanito)
  // ...
}
```

### 3. Module Pattern
**Todos los archivos**

Cada archivo JavaScript representa un módulo con responsabilidades específicas y bien definidas.

### 4. Strategy Pattern
**Archivo**: `iniciar.js`

La función `filtrarPreguntas()` implementa diferentes estrategias de selección según disponibilidad.

```javascript
// Estrategia 1: Filtro exacto
// Estrategia 2: Misma dificultad
// Estrategia 3: Mismo grado
// Estrategia 4: Banco completo
```

---

## 📱 Responsividad y Compatibilidad

### Framework CSS
- **Tailwind CSS**: Framework utility-first para diseño responsivo
- **Breakpoints**: Adaptación automática a diferentes tamaños de pantalla

### Compatibilidad de Canvas
- Soporte para navegadores modernos
- Canvas API para renderizado de minijuegos
- Contexto 2D para dibujo

### Event Listeners
- **Teclado**: Control de Snake (flechas, espacio)
- **Mouse**: Interacción con Sopa de Letras
- **Click**: Botones y opciones del quiz

---

## 🚀 Optimizaciones Implementadas

### Performance

#### 1. Referencias DOM Centralizadas
```javascript
// Evita múltiples querySelector
const el = {
  pantallaInicio: document.getElementById('login-view'),
  // Todas las referencias en un solo lugar
}
```

#### 2. Transiciones CSS
```javascript
// Usa CSS transitions en lugar de animaciones JS
const TRANSITION_DURATION = 300
```

#### 3. Event Delegation
- Eventos asignados a contenedores padre
- Reduce número de listeners

### Gestión de Memoria

#### 1. Limpieza de Intervalos
```javascript
// Siempre limpiar intervalos al salir
clearInterval(gusanito.loopId)
clearInterval(sopa.loopId)
```

#### 2. Reutilización de Arrays
```javascript
// shift() en lugar de crear nuevos arrays
const pregunta = estado.preguntasGuardadas.shift()
```

### Experiencia de Usuario

#### 1. Feedback Inmediato
- Sonidos de acierto/error
- Animaciones de transición
- Estados visuales claros

#### 2. Prevención de Errores
- Validación de inputs
- Bloqueo de opciones después de responder
- Prevención de direcciones opuestas en Snake

---

## 🐛 Manejo de Errores

### Validaciones de Input

```javascript
// Validación en entrar()
if (!nombre || !clave) {
  mostrarError("Campos obligatorios")
  return
}
```

### Validaciones de Estado

```javascript
// Verificar preguntas disponibles
if (estado.preguntasGuardadas.length === 0) {
  filtrarPreguntas(estado.grado, estado.dificultad)
}
```

### Validaciones de Juego

```javascript
// Verificar colisiones en Snake
if (head.x < 0 || head.x >= canvas.width/box) {
  mostrarMensajeChoque()
  resetSnake()
}
```

---

## 📈 Métricas y Estadísticas

### Métricas Rastreadas

```javascript
estado = {
  // Rendimiento académico
  preguntasAcertadas: 0,
  preguntasErradas: 0,
  preguntasContestadas: 0,
  preguntasSaltadas: 0,
  
  // Progreso
  progreso: 0,  // Porcentaje
  
  // Gamificación
  vidas: 5,
  vidasGanadas: 0,
  
  // Minijuegos
  snake: {
    aciertos: 0,
    streak: 0
  },
  sopa: {
    palabrasEncontradas: 0
  }
}
```

### Cálculo de Progreso

```javascript
// Porcentaje = (Acertadas / Total) * 100
progreso = (preguntasAcertadas / totalPreguntasBase) * 100
```

### Pantalla Final

Muestra al usuario:
- Total de preguntas contestadas
- Aciertos y errores
- Preguntas saltadas
- Porcentaje de éxito
- Vidas restantes

---

## 🔐 Seguridad y Buenas Prácticas

### Validación de Datos

```javascript
// Validar respuesta numérica en Snake
const respuesta = parseFloat(input.value)
if (isNaN(respuesta)) {
  mostrarError("Ingrese un número válido")
  return
}
```

### Prevención de Trampa

```javascript
// Deshabilitar opciones después de responder
opciones.forEach(opcion => {
  opcion.style.pointerEvents = 'none'
})
```

### Consistencia de Estado

```javascript
// Siempre actualizar UI después de cambiar estado
estado.vidas -= 1
actualizarVidasUI()
sincronizarState()
```

---

## 📚 Dependencias y Recursos

### Bibliotecas Externas

```html
<!-- Tailwind CSS (CDN) -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Poppins">
<link href="https://fonts.googleapis.com/css2?family=Lexend">

<!-- Material Icons -->
<link href="https://fonts.googleapis.com/icon?family=Material+Symbols+Outlined">
```

### Recursos Propios

- `Styles.css`: Estilos personalizados
- Imágenes del Snake (cabezas, cuerpo, manzana)
- Sonidos de feedback (opcional)

---

## 🔄 Ciclo de Vida de Componentes

### Inicialización

```
1. Carga de página
   └─> Cargar state.js (definir estado y referencias)
   └─> Cargar ui.js (definir funciones UI)
   └─> Cargar utils.js (definir utilidades)
   └─> Cargar iniciar.js (definir flujo de inicio)
   └─> Cargar quiz.js (definir lógica del quiz)
   └─> Cargar bancodepreguntas.js (cargar datos)
   └─> Cargar módulos de minijuegos

2. Mostrar login
   └─> estado.modalInicio = true
   └─> sincronizarState()
```

### Durante el Juego

```
Loop principal:
  1. Presentar pregunta
  2. Esperar respuesta del usuario
  3. Validar respuesta
  4. Actualizar métricas
  5. Actualizar UI
  6. Verificar condiciones de fin
  7. Siguiente pregunta
```

### Finalización

```
1. Detectar fin de juego
   └─> preguntasContestadas >= 20 || vidas <= 0

2. Mostrar pantalla final
   └─> estado.modalPantallaFin = true
   └─> Renderizar estadísticas

3. Opciones de usuario
   ├─> Reiniciar (reiniciarTodo)
   └─> Cerrar sesión (cerrarSesion)
```

---

## 🎓 Contexto Educativo

### Alineación Curricular

El proyecto está diseñado para:
- **Público objetivo**: Estudiantes de secundaria (Grados 6-11)
- **Contexto**: Sistema educativo colombiano
- **Áreas**: Matemáticas, Cultura Ciudadana, Ciencias

### Objetivos Pedagógicos

1. **Refuerzo académico**: Práctica de conceptos clave
2. **Aprendizaje activo**: Interacción y feedback inmediato
3. **Motivación**: Gamificación para mantener engagement
4. **Adaptabilidad**: Niveles de dificultad personalizables

### Beneficios del Sistema

- **Personalización**: Selección de grado y dificultad
- **Feedback inmediato**: El usuario sabe al instante si acertó
- **Progreso visible**: Barra de progreso y contadores
- **Variedad**: Alterna entre quiz y minijuegos
- **Recompensas**: Sistema de vidas y rachas

---

## 🛠️ Guía de Mantenimiento

### Agregar Nuevas Preguntas

**Archivo**: `bancodepreguntas.js`

```javascript
BANCO.push({
  materia: "Nueva Materia",
  grado: "10",
  dificultad: "medio",
  pregunta: "¿Pregunta?",
  opciones: ["A", "B", "C", "D"],
  correcta: 0
})
```

### Modificar Niveles de Dificultad

**Archivo**: `modalSnake.js` → `rangoSegunNivel()`

```javascript
if (estado.grado === "6" && estado.dificultad === "facil") {
  return { max: 30, ops: ["+", "-"] }  // Ajustar valores
}
```

### Cambiar Parámetros de Juego

**Archivo**: `state.js`

```javascript
// Modificar valores iniciales
const totalPreguntasBase = 30  // Cambiar de 20 a 30
estado.vidas = 7  // Más vidas iniciales
```

### Personalizar Estilos

**Archivo**: `Styles.css` o configuración de Tailwind

```css
/* Cambiar colores del tema */
:root {
  --color-primary: #1f506e;
  --color-success: #4CAF50;
  --color-error: #f44336;
}
```

---

## 📝 Notas Finales

### Arquitectura General

El proyecto sigue una arquitectura **modular y escalable**:

- **Separación de responsabilidades**: Cada archivo tiene un propósito claro
- **Estado centralizado**: Facilita debugging y mantenimiento
- **Reutilización de código**: Funciones de utilidad compartidas
- **Extensibilidad**: Fácil agregar nuevos minijuegos o características

### Mejores Prácticas Implementadas

✅ Código organizado en módulos
✅ Nomenclatura descriptiva y consistente
✅ Comentarios donde la lógica es compleja
✅ Validación de inputs del usuario
✅ Manejo de estados de error
✅ Optimización de performance
✅ UI responsiva y accesible

### Posibles Mejoras Futuras

1. **Backend**: Guardar progreso del usuario en base de datos
2. **Autenticación**: Sistema de usuarios real
3. **Reportes**: Análisis de rendimiento académico
4. **Más minijuegos**: Ahorcado, memoria, etc.
5. **Multijugador**: Competencia entre estudiantes
6. **PWA**: Convertir en Progressive Web App
7. **Analytics**: Tracking de métricas de uso

---


### Tecnologías Utilizadas

- **HTML5**: Estructura
- **CSS3**: Estilos
- **JavaScript (ES6+)**: Lógica
- **Tailwind CSS**: Framework de diseño



## 📄 Licencia y Créditos

**Proyecto**: LudoSabio - Sistema Educativo Interactivo
**Propósito**: Refuerzo académico mediante gamificación
**Contexto**: Educación secundaria colombiana

---

**Documentación generada para facilitar el mantenimiento y extensión del proyecto.**

**Última actualización**: Octubre 2025