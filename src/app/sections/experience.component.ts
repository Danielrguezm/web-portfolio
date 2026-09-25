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
                <td role="cell" class="puesto">{{ row.puesto }}</td>
                <td role="cell" class="detalle">{{ row.detalle }}</td>
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
                <td role="cell" class="puesto">{{ row.puesto }}</td>
                <td role="cell" class="detalle">{{ row.detalle }}</td>
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
