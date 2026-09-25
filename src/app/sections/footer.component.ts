import { Component } from '@angular/core';
import { IconComponent } from '../shared/icon.component';

@Component({
    selector: 'app-footer',
    imports: [IconComponent],
    template: `
    <div class="wrap">
      <span class="name">Daniel Rodríguez</span>
      <div class="social">
        <a href="https://github.com/Danielrguezm" target="_blank" rel="noreferrer" aria-label="GitHub" class="icon-btn">
          <app-icon name="github" [size]="17" />
        </a>
        <a href="https://linkedin.com/in/danielrodriguezmullender" target="_blank" rel="noreferrer" aria-label="LinkedIn" class="icon-btn">
          <app-icon name="linkedin" [size]="17" />
        </a>
      </div>
      <span class="copyright">© 2026 Daniel Rodríguez</span>
      <span class="colophon">Hecho con Angular, TypeScript y CSS</span>
    </div>
  `,
    styles: `
    :host {
      display: block;
      border-top: 1px solid var(--line);
      padding: 44px var(--gutter);
    }
    .wrap {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 20px 32px;
    }
    .name {
      font-family: var(--font-heading);
      font-weight: 600;
      font-size: 16px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .social {
      display: flex;
      gap: 10px;
    }
    .icon-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 38px;
      height: 38px;
      border: 1px solid var(--line);
      color: color-mix(in srgb, var(--text) 75%, transparent);
      transition:
        color 0.25s ease,
        border-color 0.25s ease,
        transform 0.25s ease;
    }
    .icon-btn:hover {
      color: var(--accent);
      border-color: var(--accent);
      transform: translateY(-2px);
    }
    .copyright {
      margin-left: auto;
      font-size: 13px;
      color: color-mix(in srgb, var(--text) 55%, transparent);
    }
    .colophon {
      font-size: 13px;
      color: color-mix(in srgb, var(--text) 55%, transparent);
    }

    @media (max-width: 860px) {
      .icon-btn {
        width: 44px;
        height: 44px;
      }
    }
    @media (max-width: 720px) {
      :host {
        padding: 36px var(--gutter);
      }
      .wrap {
        flex-direction: column;
        align-items: flex-start;
        gap: 18px;
      }
      /* Sin fila horizontal el empuje a la derecha sobra. */
      .copyright {
        margin-left: 0;
      }
    }
  `
})
export class FooterComponent {}
