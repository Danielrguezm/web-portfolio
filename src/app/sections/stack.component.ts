import { Component } from '@angular/core';
import { FrameComponent } from '../shared/frame.component';
import { RevealDirective } from '../shared/reveal.directive';
import { IconComponent } from '../shared/icon.component';
import { STACK } from '../data/stack';

@Component({
    selector: 'app-stack',
    imports: [FrameComponent, RevealDirective, IconComponent],
    template: `
    <div class="wrap">
      <span class="kicker" appReveal>01 · Stack tecnológico</span>
      <hr appReveal />
      @for (grupo of stack; track grupo.titulo) {
        <section class="grupo">
          <h3 class="grupo-titulo" appReveal>{{ grupo.titulo }}</h3>
          <div class="grid">
            @for (t of grupo.items; track t.n; let i = $index) {
              <app-frame class="cell" appReveal [delay]="i * 60">
                <div class="cell-head">
                  <span class="logos">
                    @for (icon of t.icons; track icon) {
                      <app-icon [name]="icon" [size]="26" [label]="t.nombre" />
                    }
                  </span>
                  <span class="num">{{ t.n }}</span>
                </div>
                <h4>{{ t.nombre }}</h4>
                <p>{{ t.nota }}</p>
              </app-frame>
            }
          </div>
        </section>
      }
    </div>
  `,
    host: { id: 'stack' },
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
    hr {
      height: 1px;
      border: 0;
      margin: 0 0 40px;
      background: var(--line);
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(168px, 1fr));
      gap: clamp(20px, 2.5vw, 34px);
    }
    .cell {
      display: block;
      padding: 20px;
      transition:
        border-color 0.3s ease,
        box-shadow 0.3s ease,
        transform 0.3s ease;
    }
    .cell:hover {
      border-color: var(--accent);
      box-shadow:
        0 0 0 1px color-mix(in srgb, var(--accent) 25%, transparent),
        0 0 28px color-mix(in srgb, var(--accent) 20%, transparent);
      transform: translateY(-4px);
    }
    .cell-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }
    .logos {
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .num {
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.12em;
      color: var(--accent-soft);
      font-feature-settings: 'tnum' 1;
    }
    .grupo + .grupo {
      margin-top: clamp(28px, 3.5vw, 44px);
    }
    .grupo-titulo {
      font-family: var(--font-heading);
      font-weight: 600;
      font-size: 13px;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: color-mix(in srgb, var(--text) 55%, transparent);
      margin: 0 0 16px;
      padding-bottom: 8px;
      border-bottom: 1px solid var(--line);
    }
    h4 {
      font-family: var(--font-heading);
      font-weight: 600;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      font-size: 24px;
      line-height: 1.08;
      margin: 10px 0 6px;
    }
    p {
      margin: 0;
      font-size: 14px;
      color: color-mix(in srgb, var(--text) 60%, transparent);
    }

    @media (max-width: 560px) {
      .grid {
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        gap: 16px;
      }
      .cell {
        padding: 16px;
      }
      h4 {
        font-size: 21px;
      }
      hr {
        margin-bottom: 28px;
      }
    }
  `
})
export class StackComponent {
  readonly stack = STACK;
}
