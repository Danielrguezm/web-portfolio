import { Component } from '@angular/core';
import { FrameComponent } from '../shared/frame.component';
import { RevealDirective } from '../shared/reveal.directive';
import { DATOS, HABILIDADES } from '../data/perfil';

@Component({
    selector: 'app-about',
    imports: [FrameComponent, RevealDirective],
    template: `
    <div class="wrap">
      <div class="copy" appReveal>
        <span class="kicker">05 · Sobre mí</span>
        <hr />
        <h2>Del análisis de riesgo al desarrollo full stack</h2>
        <p>
          Soy titulado en Técnico Superior en Desarrollo de Aplicaciones Web y he hecho las prácticas
          en Plexus Tech, desarrollando aplicaciones internas sobre Dataverse y SharePoint con Power
          Platform: desde la toma de requisitos y el modelo de datos hasta la entrega, los permisos y
          la documentación para que otra persona pudiera mantenerlas.
        </p>
        <p>
          Antes estuvo Accenture, en el equipo de Trust &amp; Safety del proyecto de Meta en Dublín,
          analizando casos de pagos y riesgo. Decidir sobre la evidencia disponible, dejar cada
          decisión registrada y auditable y sostener la precisión también en los picos de volumen es
          una forma de trabajar que aplico ahora al código.
        </p>
        <p>
          Hoy me centro en Java y Spring Boot en el back-end y en Angular con TypeScript en el
          front-end, con proyectos propios como Arena.GG. Estudio y construyo fuera del horario de
          trabajo, y busco un equipo donde revisar código, discutir decisiones y seguir aprendiendo.
          Inglés C1 tras cuatro años viviendo en Irlanda.
        </p>
      </div>

      <div class="facts" appReveal>
        @for (dato of datos; track dato.label) {
          <app-frame class="fact">
            <span class="label">{{ dato.label }}</span>
            <p class="value">{{ dato.valor }}</p>
          </app-frame>
        }
      </div>

      <div class="habilidades" appReveal>
        <h3>Cómo trabajo</h3>
        <div class="habilidades-grid">
          @for (h of habilidades; track h.nombre) {
            <app-frame class="habilidad">
              <span class="habilidad-nombre">{{ h.nombre }}</span>
              <p>{{ h.descripcion }}</p>
            </app-frame>
          }
        </div>
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
      max-width: 22ch;
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
      font-size: 20px;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      line-height: 1.2;
      max-width: none;
    }

    /* Bloque de ancho completo bajo las dos columnas. */
    .habilidades {
      flex: 1 1 100%;
      min-width: 0;
      margin-top: 8px;
    }
    .habilidades h3 {
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--accent-soft);
      margin: 0 0 18px;
    }
    .habilidades-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: clamp(16px, 2vw, 24px);
    }
    .habilidad {
      display: block;
      padding: 18px 20px;
    }
    .habilidad-nombre {
      display: block;
      font-family: var(--font-heading);
      font-weight: 600;
      font-size: 17px;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: var(--text);
    }
    .habilidad p {
      margin: 8px 0 0;
      font-size: 14px;
      line-height: 1.6;
      color: color-mix(in srgb, var(--text) 60%, transparent);
      max-width: none;
    }

    @media (max-width: 860px) {
      .wrap {
        flex-direction: column;
        gap: 36px;
      }
      .copy,
      .facts,
      .habilidades {
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
      .fact,
      .habilidad {
        padding: 16px 18px;
      }
      .value {
        font-size: 18px;
      }
      .habilidades-grid {
        grid-template-columns: 1fr;
        gap: 14px;
      }
    }
  `
})
export class AboutComponent {
  readonly datos = DATOS;
  readonly habilidades = HABILIDADES;
}
