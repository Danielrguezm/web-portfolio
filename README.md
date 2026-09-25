# Portfolio

Portfolio personal de Daniel Rodríguez, desarrollador full-stack junior. Es una
página de una sola vista construida con Angular, con secciones de stack,
proyectos, experiencia, formación, sobre mí y contacto.

## Stack

- **Angular 20.3** con componentes standalone y la nueva sintaxis de control de
  flujo en plantillas (`@for`, `@switch`).
- **TypeScript 5.9**.
- **CSS plano**, sin framework de estilos. Los colores, tipografías y espaciados
  viven como variables CSS en `src/styles.css`.
- **Karma y Jasmine** para los tests unitarios.

## Puesta en marcha

Necesitas Node.js 20 o superior.

```bash
npm install
npm start
```

El servidor de desarrollo queda en `http://localhost:4200/` y recarga solo al
guardar cualquier archivo.

## Comandos

| Comando         | Qué hace                                                        |
| --------------- | --------------------------------------------------------------- |
| `npm start`     | Servidor de desarrollo con recarga automática.                    |
| `npm run build` | Compila para producción en `dist/`.                               |
| `npm run watch` | Compila en modo desarrollo y recompila al detectar cambios.       |
| `npm test`      | Lanza los tests unitarios con Karma.                              |

## Estructura

```
src/
  app/
    data/       Contenido de la página (stack, proyectos, experiencia).
    sections/   Un componente por sección: hero, stack, proyectos, etc.
    shared/     Piezas reutilizables: iconos, el marco de las tarjetas,
                la directiva de aparición al hacer scroll.
  styles.css    Variables de diseño y estilos globales.
public/assets/  Imágenes y el CV en PDF.
```

El texto de la página no está escrito dentro de las plantillas: vive en
`src/app/data/`. Para cambiar un proyecto o una línea de experiencia se toca
únicamente ese archivo, sin entrar en el HTML.

## Diseño responsive

La página funciona desde 320px hasta escritorio. Los puntos de corte son:

- **860px** — la barra de navegación cambia a un menú desplegable con botón
  hamburguesa. Se cierra al pulsar un enlace, con `Escape`, tocando fuera o al
  volver al ancho de escritorio.
- **720px** — las tablas de experiencia y formación se reorganizan como tarjetas
  apiladas. Mantienen los roles ARIA de tabla para que los lectores de pantalla
  sigan interpretándolas correctamente.
- **560px y 380px** — ajustes de tipografía y los botones pasan a ocupar el
  ancho completo.

Los espaciados usan `clamp()` en lugar de valores fijos por punto de corte, y el
margen lateral absorbe `env(safe-area-inset-*)` para los móviles con muesca.

## Contenido

Todo el contenido de la página sale de `src/app/data/`, no de las plantillas:

- `perfil.ts` — datos de contacto, habilidades y datos personales.
- `experience.ts` — experiencia profesional y formación, con el desglose de
  tareas de cada puesto.
- `projects.ts` — proyectos. Los campos `repo` y `demo` son opcionales: si no
  están, la tarjeta no pinta el botón correspondiente.
- `stack.ts` — competencias técnicas.

## Pendiente antes de publicar

- Los proyectos 02, 03 y 04 se ilustran con iconos genéricos, no con capturas
  de las aplicaciones. Sustituirlos por pantallazos reales (en 16:9, y
  cambiando `encaje: 'icono'` por el valor por defecto) daría mejor impresión.
- `ContactComponent.enviar()` (en `src/app/sections/contact.component.ts`) no
  envía nada: simula un envío correcto y limpia el formulario. Hay que
  conectarlo a un endpoint real, propio o de un servicio tipo Formspree.
- La página publica el teléfono personal en la sección de contacto
  (`src/app/data/perfil.ts`). Quítalo de ahí si prefieres no exponerlo.
