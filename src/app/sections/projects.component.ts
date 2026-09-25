import { Component } from '@angular/core';
import { FrameComponent } from '../shared/frame.component';
import { RevealDirective } from '../shared/reveal.directive';
import { IconComponent } from '../shared/icon.component';
import { PROJECTS } from '../data/projects';

@Component({
    selector: 'app-projects',
    imports: [FrameComponent, RevealDirective, IconComponent],
    template: `
    <div class="wrap">
      <span class="kicker" appReveal>02 · Proyectos</span>
      <hr appReveal />
      <div class="grid">
        @for (p of projects; track p.titulo; let i = $index) {
          <app-frame class="card" appReveal [delay]="i * 80">
            <div class="shot" [class.duotone]="p.encaje !== 'icono'" [class.icono]="p.encaje === 'icono'">
              <div class="zoom">
                <img [src]="p.img" [alt]="p.alt" />
              </div>
            </div>
            <div class="body">
              <span class="kicker-sm">{{ p.numero }}</span>
              <h3>{{ p.titulo }}</h3>
              <p>{{ p.descripcion }}</p>
              <div class="chips">
                @for (chip of p.chips; track chip.label) {
                  <span class="tag tag-outline">
                    <app-icon [name]="chip.icon" [size]="14" [label]="chip.label" />
                    {{ chip.label }}
                  </span>
                }
              </div>
              @if (p.repo || p.demo) {
                <div class="actions">
                  @if (p.repo) {
                    <a [href]="p.repo" target="_blank" rel="noreferrer" class="btn btn-secondary">Código</a>
                  }
                  @if (p.demo) {
                    <a [href]="p.demo" target="_blank" rel="noreferrer" class="btn btn-primary">Demo</a>
                  }
                </div>
              }
            </div>
          </app-frame>
        }
      </div>
    </div>
  `,
    host: { id: 'proyectos' },
    styles: `
    :host {
      display: block;
      scroll-margin-top: calc(var(--nav-h) + 8px);
      padding: var(--section-pad) var(--gutter);
      border-bottom: 1px solid var(--line);
    }
    .wrap {
      max-width: 1100px;
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
    hr {
      height: 1px;
      border: 0;
      margin: 0 0 44px;
      background: var(--line);
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: clamp(20px, 2.5vw, 34px);
    }
    .card {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    .card:hover {
      border-color: color-mix(in srgb, var(--accent) 60%, transparent);
      box-shadow: var(--shadow-lg);
      transform: translateY(-6px);
    }
    .shot {
      aspect-ratio: 16 / 9;
      overflow: hidden;
      border-bottom: 1px solid var(--line);
    }
    .shot .zoom {
      width: 100%;
      height: 100%;
    }
    .shot img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    /* Los iconos son cuadrados y de trazo oscuro: recortarlos a 16:9 los
       destrozaria, y sobre el fondo oscuro de la tarjeta no se verian. */
    .shot.icono {
      background: #101f30;
    }
    .shot.icono img {
      object-fit: contain;
      padding: clamp(18px, 4%, 34px);
    }
    .body {
      padding: 22px 22px 24px;
      display: flex;
      flex-direction: column;
      gap: 14px;
      flex: 1;
    }
    .kicker-sm {
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--accent-soft);
    }
    h3 {
      font-size: 26px;
      margin: 0;
    }
    p {
      margin: 0;
      font-size: 15px;
      line-height: 1.6;
      color: color-mix(in srgb, var(--text) 72%, transparent);
    }
    .chips {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 2px;
    }
    .actions {
      display: flex;
      gap: 10px;
      margin-top: auto;
      padding-top: 8px;
    }

    @media (max-width: 860px) {
      .grid {
        grid-template-columns: 1fr;
      }
    }
    @media (max-width: 560px) {
      hr {
        margin-bottom: 30px;
      }
      .body {
        padding: 18px 16px 20px;
        gap: 12px;
      }
      h3 {
        font-size: 22px;
      }
      p {
        font-size: 14px;
      }
      .actions {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 10px;
      }
      .actions .btn {
        width: 100%;
      }
    }
    @media (max-width: 380px) {
      .actions {
        grid-template-columns: 1fr;
      }
    }
  `
})
export class ProjectsComponent {
  readonly projects = PROJECTS;
}
