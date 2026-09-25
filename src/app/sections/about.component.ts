import { Component } from '@angular/core';
import { FrameComponent } from '../shared/frame.component';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
    selector: 'app-about',
    imports: [FrameComponent, RevealDirective],
    template: `
    <div class="wrap">
      <div class="copy" appReveal>
        <span class="kicker">05 · Sobre mí</span>
        <hr />
        <h2>Me gusta resolver problemas <br />explicando bien la solución</h2>
        <p>
          Mi camino no empezó en un aula de programación, sino en la enseñanza: durante tres años
          trabajé con grupos de personas de distintas nacionalidades, explicando ideas complejas con
          claridad y paciencia. Ese trabajo me enseñó a convertir lo difícil en algo comprensible,
          algo que después encontré también en el desarrollo de software.
        </p>
        <p>
          Hoy me centro en Java y Spring Boot en el backend, y en Angular con TypeScript en el
          frontend. Me interesa construir aplicaciones útiles, mantener una lógica clara y aprender en
          equipo, revisando código, probando ideas y mejorando cada iteración.
        </p>
      </div>

      <div class="facts" appReveal>
        <app-frame class="fact">
          <span class="label">Perfil</span>
          <p class="value">Full-Stack Junior</p>
        </app-frame>
        <app-frame class="fact">
          <span class="label">Ubicación</span>
          <p class="value">Valencia · Remoto o híbrido</p>
        </app-frame>
        <app-frame class="fact">
          <span class="label">Aprendiendo</span>
          <p class="value">JUnit · Docker · Testing</p>
        </app-frame>
      </div>
    </div>
  `,
    host: { id: 'sobre-mi' },
    styles: `
    :host {
      display: block;
      scroll-margin-top: calc(var(--nav-h) + 8px);
      padding: var(--section-pad) var(--gutter);
      border-bottom: 1px solid var(--line);
    }
    .wrap {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      gap: clamp(32px, 6vw, 88px);
      align-items: flex-start;
    }
    .copy {
      flex: 1 1 460px;
      min-width: 0;
    }
    .kicker {
      display: block;
      font-family: var(--font-heading);
      font-weight: 600;
      font-size: 13px;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--accent-soft);
      margin-bottom: 12px;
    }
    hr {
      height: 1px;
      border: 0;
      margin: 0 0 32px;
      background: var(--line);
    }
    h2 {
      font-size: clamp(30px, 3.4vw, 44px);
      margin: 0 0 22px;
      max-width: 12ch;
    }
    p {
      margin: 0 0 16px;
      font-size: 16px;
      line-height: 1.7;
      color: color-mix(in srgb, var(--text) 78%, transparent);
      max-width: 60ch;
    }
    p:last-child {
      margin-bottom: 0;
    }
    .facts {
      flex: 1 1 300px;
      min-width: 0;
      display: flex;
      flex-direction: column;
      gap: 18px;
    }
    .fact {
      display: block;
      padding: 18px 20px;
    }
    .label {
      display: block;
      font-size: 12px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      font-weight: 600;
      color: color-mix(in srgb, var(--text) 60%, transparent);
    }
    .value {
      margin: 8px 0 0;
      font-family: var(--font-heading);
      font-weight: 600;
      font-size: 22px;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      line-height: 1.2;
    }

    @media (max-width: 860px) {
      .wrap {
        flex-direction: column;
        gap: 36px;
      }
      .copy,
      .facts {
        flex: 1 1 auto;
        width: 100%;
      }
      h2 {
        max-width: none;
      }
    }
    @media (max-width: 560px) {
      h2 {
        font-size: clamp(26px, 7.6vw, 34px);
      }
      /* El salto de linea manual esta pensado para dos columnas anchas. */
      h2 br {
        display: none;
      }
      p {
        font-size: 15px;
        line-height: 1.65;
      }
      hr {
        margin-bottom: 24px;
      }
      .facts {
        gap: 14px;
      }
      .fact {
        padding: 16px 18px;
      }
      .value {
        font-size: 19px;
      }
    }
  `
})
export class AboutComponent {}
