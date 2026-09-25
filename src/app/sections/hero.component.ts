import { Component } from '@angular/core';
import { RevealDirective } from '../shared/reveal.directive';
import { IconComponent } from '../shared/icon.component';

interface Letter {
  ch: string;
  color: string;
}

const NAME = 'Daniel Rodríguez';
const GRADIENT_STOPS: [number, number, number][] = [
  [86, 156, 214], // azul medio
  [126, 201, 255], // acento
  [156, 211, 255], // azul claro
  [208, 235, 255], // azul palido
];

function degradarNombre(text: string, stops: [number, number, number][]): Letter[] {
  const total = [...text].filter((c) => c !== ' ').length;
  let k = 0;
  return [...text].map((ch) => {
    if (ch === ' ') return { ch, color: 'inherit' };
    const t = k++ / (total - 1);
    const x = t * (stops.length - 1);
    const i = Math.min(Math.floor(x), stops.length - 2);
    const f = x - i;
    const hex = [0, 1, 2]
      .map((j) =>
        Math.round(stops[i][j] + (stops[i + 1][j] - stops[i][j]) * f)
          .toString(16)
          .padStart(2, '0'),
      )
      .join('');
    return { ch, color: '#' + hex };
  });
}

@Component({
    selector: 'app-hero',
    imports: [RevealDirective, IconComponent],
    template: `
    <img class="bg-image" src="assets/img/code_rain_animated.webp" alt="" aria-hidden="true" />
    <div class="scrim"></div>
    <div class="glow"></div>
    <div class="hero">
      <div class="copy" appReveal>
        <span class="kicker">Disponible para incorporación inmediata</span>
        <h1>
          ¡Hola! Soy<br />
          @for (l of letras; track $index) {
            <span [style.color]="l.color">{{ l.ch }}</span>
          }
        </h1>
        <p class="subtitle">Desarrollador Full Stack · Java / Angular · Lanzarote, Canarias, España</p>
        <p class="lead">
          Titulado en Desarrollo de Aplicaciones Web, con prácticas en el sector tecnológico. Java y
          Spring Boot en el back-end, Angular y TypeScript en el front-end, automatización de procesos
          con Power Platform y Python, y bases de datos relacionales. Inglés C1.
        </p>
        <div class="actions">
          <a href="assets/cv/cv.pdf" download class="btn btn-primary frame">
            <i class="c tl"></i><i class="c tr"></i><i class="c bl"></i><i class="c br"></i>
            <app-icon name="download" [size]="16" />
            Descargar CV
          </a>
          <a href="#contacto" class="btn btn-secondary">Contáctame</a>
          <a href="https://linkedin.com/in/danielrodriguezmullender" target="_blank" rel="noreferrer" class="btn btn-secondary">LinkedIn</a>
          <a href="https://github.com/Danielrguezm" target="_blank" rel="noreferrer" class="btn btn-secondary">GitHub</a>
        </div>
      </div>
      <figure class="frame photo" appReveal>
        <i class="c tl"></i><i class="c tr"></i><i class="c bl"></i><i class="c br"></i>
        <img src="assets/img/avatar.webp" alt="Retrato de Daniel Rodríguez" />
      </figure>
    </div>
  `,
    host: { id: 'top' },
    styles: `
    :host {
      display: block;
      position: relative;
      padding: calc(var(--nav-h) + 96px) var(--gutter) 108px;
      border-bottom: 1px solid var(--line);
      overflow: hidden;
      background: #050816;
    }
    .bg-image {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.52;
      filter: saturate(1.2) brightness(0.52) contrast(1.15);
      pointer-events: none;
    }
    .glow {
      position: absolute;
      top: -220px;
      left: 12%;
      width: 780px;
      height: 640px;
      pointer-events: none;
      background: radial-gradient(closest-side, color-mix(in srgb, var(--accent) 22%, transparent), transparent 70%);
      filter: blur(18px);
      animation: drift 26s ease-in-out infinite;
      z-index: 0;
    }
    .scrim {
      position: absolute;
      inset: 0;
      pointer-events: none;
      background: linear-gradient(
        90deg,
        rgba(5, 8, 22, 0.92) 0%,
        rgba(5, 8, 22, 0.72) 35%,
        rgba(5, 8, 22, 0.3) 70%,
        rgba(5, 8, 22, 0.7) 100%
      );
      z-index: 1;
    }
    .hero {
      position: relative;
      z-index: 2;
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      gap: clamp(32px, 6vw, 88px);
      align-items: center;
    }
    .copy {
      flex: 1 1 460px;
      min-width: 0;
      position: relative;
      z-index: 2;
    }
    .kicker {
      display: block;
      font-family: var(--font-heading);
      font-weight: 600;
      font-size: 13px;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--accent-soft);
      margin-bottom: 14px;
    }
    h1 {
      font-size: clamp(46px, 6.4vw, 86px);
      line-height: 1.04;
      letter-spacing: 0.01em;
      margin: 0 0 0 -0.052em;
    }
    .subtitle {
      font-size: 18px;
      line-height: 1.5;
      color: color-mix(in srgb, var(--text) 78%, transparent);
      max-width: 52ch;
      margin: 24px 0 0;
    }
    .lead {
      font-size: 16px;
      line-height: 1.6;
      color: color-mix(in srgb, var(--text) 62%, transparent);
      max-width: 56ch;
      margin: 12px 0 0;
    }
    .actions {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 34px;
    }
    .actions .btn {
      padding: 11px 20px;
      font-size: 14px;
    }
    .photo {
      margin: 0;
      flex: 0 1 300px;
      width: 100%;
      max-width: 320px;
      position: relative;
      z-index: 2;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.45);
    }
    .photo img {
      display: block;
      width: 100%;
      aspect-ratio: 4 / 5;
      object-fit: cover;
      filter: saturate(1.05) contrast(1.08);
    }

    /* — responsive — */
    @media (max-width: 1024px) {
      :host {
        padding: calc(var(--nav-h) + 72px) var(--gutter) 84px;
      }
      .glow {
        left: 0;
        width: 560px;
        height: 480px;
      }
    }
    @media (max-width: 860px) {
      :host {
        padding: calc(var(--nav-h) + 52px) var(--gutter) 68px;
      }
      .hero {
        flex-direction: column;
        align-items: flex-start;
        gap: 44px;
      }
      .copy {
        flex: 1 1 auto;
        width: 100%;
      }
      /* En una columna el degradado lateral deja de tener sentido: se
         invierte a vertical para que el texto siga legible sobre la imagen. */
      .scrim {
        background: linear-gradient(
          180deg,
          rgba(5, 8, 22, 0.88) 0%,
          rgba(5, 8, 22, 0.74) 45%,
          rgba(5, 8, 22, 0.92) 100%
        );
      }
      .photo {
        flex: none;
        width: min(100%, 300px);
        max-width: 300px;
        align-self: center;
      }
      h1 {
        font-size: clamp(38px, 8.6vw, 66px);
      }
      .subtitle {
        font-size: 17px;
        margin-top: 20px;
      }
    }
    @media (max-width: 560px) {
      :host {
        padding: calc(var(--nav-h) + 36px) var(--gutter) 56px;
      }
      .kicker {
        font-size: 12px;
      }
      .subtitle {
        font-size: 16px;
      }
      .lead {
        font-size: 15px;
      }
      /* Botones a rejilla: el CV ocupa la fila entera y el resto se reparte. */
      .actions {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 10px;
        margin-top: 28px;
      }
      .actions .btn {
        width: 100%;
        padding: 12px 10px;
        font-size: 12px;
      }
      .actions .btn:first-child {
        grid-column: 1 / -1;
      }
      .photo {
        max-width: 260px;
      }
    }
    @media (max-width: 380px) {
      .actions {
        grid-template-columns: 1fr;
      }
    }
  `
})
export class HeroComponent {
  readonly letras: Letter[] = degradarNombre(NAME, GRADIENT_STOPS);
}
