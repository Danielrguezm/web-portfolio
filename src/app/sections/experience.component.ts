import { Component } from '@angular/core';
import { FrameComponent } from '../shared/frame.component';
import { RevealDirective } from '../shared/reveal.directive';
import { EXPERIENCIA, FORMACION, TableRow } from '../data/experience';

@Component({
    selector: 'app-experience',
    imports: [FrameComponent, RevealDirective],
    template: `
    <div class="wrap">
      <span class="kicker" appReveal>03 · Experiencia</span>
      <hr appReveal />
      <app-frame class="table-frame" appReveal>
        <table class="table" role="table">
          <thead role="rowgroup">
            <tr role="row">
              <th role="columnheader" scope="col">Periodo</th>
              <th role="columnheader" scope="col">Puesto</th>
              <th role="columnheader" scope="col">Detalle</th>
            </tr>
          </thead>
          <tbody role="rowgroup">
            @for (row of experiencia; track row.puesto) {
              <tr role="row">
                <td role="cell" class="periodo">{{ row.periodo }}</td>
                <td role="cell" class="puesto">
                  {{ row.puesto }}
                  @if (row.empresa) {
                    <span class="empresa">{{ row.empresa }}</span>
                  }
                </td>
                <td role="cell" class="detalle">
                  <p>{{ row.detalle }}</p>
                  @if (row.logros?.length) {
                    <details class="mas">
                      <summary>Ver detalle</summary>
                      <ul class="logros">
                        @for (logro of row.logros; track logro) {
                          <li>{{ logro }}</li>
                        }
                      </ul>
                    </details>
                  }
                </td>
              </tr>
            }
          </tbody>
        </table>
      </app-frame>

      <span class="kicker formacion-kicker" appReveal>04 · Formación</span>
      <hr appReveal />
      <app-frame class="table-frame" appReveal>
        <table class="table" role="table">
          <thead role="rowgroup">
            <tr role="row">
              <th role="columnheader" scope="col">Periodo</th>
              <th role="columnheader" scope="col">Titulación</th>
              <th role="columnheader" scope="col">Detalle</th>
            </tr>
          </thead>
          <tbody role="rowgroup">
            @for (row of formacion; track row.puesto) {
              <tr role="row">
                <td role="cell" class="periodo">{{ row.periodo }}</td>
                <td role="cell" class="puesto">
                  {{ row.puesto }}
                  @if (row.empresa) {
                    <span class="empresa">{{ row.empresa }}</span>
                  }
                </td>
                <td role="cell" class="detalle">
                  <p>{{ row.detalle }}</p>
                  @if (row.logros?.length) {
                    <details class="mas">
                      <summary>Ver detalle</summary>
                      <ul class="logros">
                        @for (logro of row.logros; track logro) {
                          <li>{{ logro }}</li>
                        }
                      </ul>
                    </details>
                  }
                </td>
              </tr>
            }
          </tbody>
        </table>
      </app-frame>
    </div>
  `,
    host: { id: 'experiencia' },
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
    .formacion-kicker {
      margin-top: 72px;
    }
    hr {
      height: 1px;
      border: 0;
      margin: 0 0 36px;
      background: var(--line);
    }
    .table-frame {
      display: block;
      padding: 0;
    }
    .empresa {
      display: block;
      margin-top: 4px;
      font-family: var(--font-body);
      font-size: 13px;
      font-weight: 400;
      letter-spacing: 0.04em;
      text-transform: none;
      color: var(--accent-soft);
    }
    .detalle p {
      margin: 0;
    }
    .mas {
      margin-top: 12px;
    }
    .mas summary {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      width: fit-content;
      cursor: pointer;
      list-style: none;
      font-family: var(--font-heading);
      font-weight: 600;
      font-size: 12px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--accent);
      padding: 4px 0;
      transition: color 0.2s ease;
    }
    .mas summary::-webkit-details-marker {
      display: none;
    }
    /* Flecha propia: gira al abrir. */
    .mas summary::before {
      content: "";
      width: 7px;
      height: 7px;
      border-right: 1px solid currentColor;
      border-bottom: 1px solid currentColor;
      transform: rotate(45deg) translate(-1px, -1px);
      transition: transform 0.2s ease;
    }
    .mas[open] summary::before {
      transform: rotate(-135deg) translate(-2px, -2px);
    }
    .mas summary:hover {
      color: var(--accent-soft);
    }
    .logros {
      margin: 10px 0 0;
      padding-left: 18px;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .logros li {
      font-size: 14px;
      line-height: 1.55;
      color: color-mix(in srgb, var(--text) 62%, transparent);
    }
    .logros li::marker {
      color: var(--accent);
    }

    @media (max-width: 720px) {
      .formacion-kicker {
        margin-top: 52px;
      }
      hr {
        margin-bottom: 24px;
      }
    }
  `
})
export class ExperienceComponent {
  readonly experiencia: TableRow[] = EXPERIENCIA;
  readonly formacion: TableRow[] = FORMACION;
}
