# Portfolio Personal - David Garrido Quiles

## Descripción

Portfolio personal desarrollado como proyecto de presentación, donde recopilo y muestro mis habilidades en desarrollo de software. Incluye proyectos realizados durante mi formación en el ciclo de Desarrollo de Aplicaciones Multiplataforma (DAM), así como mis diferentes habilidades técnicas, mi experiencia laboral, mi formación previa como la actual y mis plataformas de contacto.

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
- **Azul (#3B82F6)**: Transmite profesionalidad, confianza y tecnología.
- **Cyan (#06B6D4)**: Aporta frescura y modernidad, creando un contraste agradable con el azul principal.
- La combinación de ambos colores genera un degradado visualmente atractivo que mantiene coherencia con el ámbito tecnológico.

## Elemento diferenciador

### Dark/Light Mode Toggle

He implementado un **selector de tema claro/oscuro** como elemento diferenciador:

- **Funcionalidad**: Permite al usuario cambiar entre modo oscuro y modo claro según su preferencia
- **Persistencia**: El tema seleccionado se guarda en `localStorage` y se mantiene en futuras visitas
- **Accesibilidad**: Ambos temas mantienen un contraste adecuado
- **Implementación**: JavaScript vanilla sin dependencias externas

## Uso de IA

Durante el desarrollo de este portfolio he utilizado herramientas de IA de la siguiente manera:

- He utilizado herramientas de inteligencia artificial, principalmente Claude, como apoyo durante el desarrollo del proyecto. Me ha servido para generar una gran base inicial de la estructura de la página web, así como para mejorar e implementar mis ideas durante el proceso de desarrollo. También me ha ayudado a identificar y corregir errores, lo que me ha permitido avanzar de forma más eficiente en la construcción del proyecto.

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
├── index.html
├── style.css  
├── script.js      
├── assets/
│   └── img/
│       └── foto-perfil.jpg
└── README.md     
```

*Portfolio desarrollado por David Garrido Quiles*
