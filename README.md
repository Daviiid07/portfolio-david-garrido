# Portfolio Personal - David Garrido Quiles

## Descripción

Portfolio web personal desarrollado como parte de la asignatura de 1º DAM (Desarrollo de Aplicaciones Multiplataforma). Este sitio web actúa como tarjeta de presentación profesional, mostrando mis proyectos, habilidades, formación y experiencia.

## URL de la página publicada

> **https://daviiid07.github.io/portfolio-david-garrido:**


## Tecnologías utilizadas

- **HTML5** - Estructura semántica del contenido
- **CSS3** - Estilos personalizados sin frameworks
- **JavaScript (Vanilla)** - Interactividad sin librerías externas
- **Google Fonts** - Tipografías Inter y JetBrains Mono
- **Font Awesome** - Iconografía

## Paleta de colores

| Color | Código HEX | Uso |
|-------|------------|-----|
| Azul primario | `#3B82F6` | Elementos principales, botones, enlaces |
| Cyan secundario | `#06B6D4` | Acentos, elementos secundarios |
| Verde éxito | `#22C55E` | Badges de estado |
| Fondo oscuro | `#0A0E17` | Background modo oscuro |
| Fondo claro | `#FFFFFF` | Background modo claro |

### Justificación de la paleta

He elegido una combinación de azul y cyan porque:
- **Azul (#3B82F6)**: Transmite profesionalidad, confianza y tecnología. Es un color muy utilizado en el sector tech.
- **Cyan (#06B6D4)**: Aporta frescura y modernidad, creando un contraste agradable con el azul principal.
- La combinación de ambos colores genera un degradado visualmente atractivo que mantiene coherencia con el ámbito tecnológico.

## Elemento diferenciador

### Dark/Light Mode Toggle

He implementado un **selector de tema claro/oscuro** como elemento diferenciador:

- **Funcionalidad**: Permite al usuario cambiar entre modo oscuro y modo claro según su preferencia
- **Persistencia**: El tema seleccionado se guarda en `localStorage` y se mantiene en futuras visitas
- **Accesibilidad**: Ambos temas mantienen un contraste adecuado (WCAG AA)
- **Implementación**: JavaScript vanilla sin dependencias externas

**¿Por qué lo elegí?**

El dark mode es una característica muy valorada actualmente, especialmente entre desarrolladores. Demuestra:
1. Conocimiento de CSS custom properties (variables)
2. Uso de localStorage para persistencia de datos
3. Manipulación del DOM con JavaScript puro
4. Atención a la experiencia de usuario

## Uso de IA

Durante el desarrollo de este portfolio he utilizado herramientas de IA de la siguiente manera:

- **Generación de código**: Utilicé asistentes de IA para generar la estructura base del HTML y CSS, que posteriormente adapté y personalicé según mis necesidades.
- **Ideas de diseño**: Consulté sobre mejores prácticas de UX/UI para portfolios de desarrolladores.
- **Revisión de código**: Usé IA para identificar posibles errores y optimizar el código.
- **Textos**: Los textos de "Sobre mí" y descripciones fueron redactados por mí y revisados con IA para mejorar la redacción.

**Nota**: Todo el contenido es real y personal. He revisado y adaptado cada parte del código para entenderlo completamente.

## Dificultades encontradas y soluciones

### 1. Diseño responsive del timeline
**Problema**: La línea vertical del timeline no se mostraba correctamente en móviles.
**Solución**: Oculté la línea y los puntos en pantallas pequeñas usando media queries, manteniendo solo las tarjetas.

### 2. Transición suave entre temas
**Problema**: Al cambiar de tema, algunos elementos "parpadeaban".
**Solución**: Añadí transiciones CSS a las propiedades `background-color` y `color` en los elementos principales.

### 3. Navegación suave con offset
**Problema**: Al hacer click en los enlaces, el header fijo tapaba el contenido.
**Solución**: Calculé el offset del header (80px) y lo resté de la posición de scroll.

## Estructura de archivos

```
portfolio/
├── index.html          # Página principal
├── style.css           # Estilos CSS
├── script.js           # JavaScript
├── assets/
│   └── img/
│       └── foto-perfil.jpg  # Tu foto real
└── README.md           # Este archivo
```

## Instrucciones para publicar en GitHub Pages

1. Crear repositorio con nombre `portfolio-david-garrido`
2. Subir todos los archivos
3. Ir a Settings → Pages
4. Seleccionar Branch: `main` y carpeta: `/ (root)`
5. Guardar y esperar unos minutos
6. La URL estará disponible en: `https://[tu-usuario].github.io/portfolio-david-garrido/`

## Contacto

- **GitHub**: [Daviiid07](https://github.com/Daviiid07/)
- **LinkedIn**: [David Garrido](https://www.linkedin.com/in/david-garrido-91a9652b9/)

---

*Portfolio desarrollado para la asignatura de 1º DAM - IES Gregorio Prieto*
