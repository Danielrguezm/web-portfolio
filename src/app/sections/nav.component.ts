import { Component, ElementRef, HostListener, inject, signal } from '@angular/core';
import { IconComponent } from '../shared/icon.component';

interface NavLink {
  href: string;
  label: string;
}

const LINKS: NavLink[] = [
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#stack', label: 'Stack' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#contacto', label: 'Contacto' },
];

// Debe coincidir con el breakpoint de 860px de los estilos: por encima de él
// el panel móvil no se muestra y hay que dejarlo cerrado.
const DESKTOP_BP = 860;

@Component({
  selector: 'app-nav',
  imports: [IconComponent],
  template: `
    <a href="#top" class="logo" aria-label="Ir arriba">
      <img src="assets/img/gojodev.png" alt="Logo gojodev" />
    </a>

    <nav class="links" aria-label="Navegación principal">
      @for (link of links; track link.href) {
        <a [href]="link.href">{{ link.label }}</a>
      }
    </nav>

    <div class="social">
      <a href="https://github.com/Danielrguezm" target="_blank" rel="noreferrer" aria-label="GitHub" class="icon-btn">
        <app-icon name="github" [size]="17" />
      </a>
      <a href="https://linkedin.com/in/danielrodriguezmullender" target="_blank" rel="noreferrer" aria-label="LinkedIn" class="icon-btn">
        <app-icon name="linkedin" [size]="17" />
      </a>
    </div>

    <button
      type="button"
      class="burger"
      [class.open]="abierto()"
      [attr.aria-expanded]="abierto()"
      aria-controls="nav-movil"
      [attr.aria-label]="abierto() ? 'Cerrar menú' : 'Abrir menú'"
      (click)="alternar()"
    >
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </button>

    <nav
      id="nav-movil"
      class="panel"
      [class.open]="abierto()"
      [attr.inert]="abierto() ? null : ''"
      aria-label="Navegación móvil"
    >
      @for (link of links; track link.href) {
        <a [href]="link.href" (click)="cerrar()">{{ link.label }}</a>
      }
      <div class="panel-social">
        <a href="https://github.com/Danielrguezm" target="_blank" rel="noreferrer" aria-label="GitHub" class="icon-btn">
          <app-icon name="github" [size]="17" />
        </a>
        <a href="https://linkedin.com/in/danielrodriguezmullender" target="_blank" rel="noreferrer" aria-label="LinkedIn" class="icon-btn">
          <app-icon name="linkedin" [size]="17" />
        </a>
      </div>
    </nav>
  `,
  styles: `
    :host {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 50;
      height: var(--nav-h);
      display: flex;
      align-items: center;
      gap: 24px;
      padding: 0 var(--gutter);
      background: rgba(13, 27, 42, 0.72);
      backdrop-filter: blur(18px);
      border-bottom: 1px solid var(--line);
      box-shadow: 0 10px 30px rgba(2, 6, 23, 0.15);
    }
    .logo {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      flex: none;
      border: 1px solid var(--line);
      overflow: hidden;
      padding: 0;
      background: rgba(255,255,255,0.02);
      transition:
        border-color 0.25s ease,
        color 0.25s ease,
        transform 0.25s ease;
    }
    .logo:hover {
      border-color: var(--accent);
      color: var(--accent);
      transform: translateY(-1px);
    }
    .logo img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    .links {
      display: flex;
      align-items: center;
      gap: clamp(12px, 1.8vw, 20px);
      margin-left: 8px;
      min-width: 0;
      font-family: var(--font-heading);
      font-weight: 600;
      font-size: 13px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      white-space: nowrap;
    }
    .links a {
      position: relative;
      color: color-mix(in srgb, var(--text) 72%, transparent);
      transition: color 0.25s ease;
      padding-bottom: 4px;
    }
    .links a::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background: var(--accent);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.25s ease;
    }
    .links a:hover,
    .links a:focus-visible {
      color: var(--accent-soft);
    }
    .links a:hover::after,
    .links a:focus-visible::after {
      transform: scaleX(1);
    }
    .social {
      margin-left: auto;
      display: flex;
      gap: 8px;
    }
    .icon-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      border: 1px solid var(--line);
      color: color-mix(in srgb, var(--text) 78%, transparent);
      transition:
        color 0.25s ease,
        border-color 0.25s ease,
        box-shadow 0.25s ease,
        transform 0.25s ease;
    }
    .icon-btn:hover {
      color: var(--accent);
      border-color: var(--accent);
      transform: translateY(-2px);
      box-shadow:
        0 0 0 1px color-mix(in srgb, var(--accent) 30%, transparent),
        0 0 18px color-mix(in srgb, var(--accent) 22%, transparent);
    }

    /* — hamburguesa y panel desplegable: sólo por debajo de 860px — */
    .burger {
      display: none;
      margin-left: auto;
      width: 44px;
      height: 44px;
      flex: none;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 5px;
      padding: 0;
      cursor: pointer;
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid var(--line);
      border-radius: 0;
      transition: border-color 0.25s ease;
    }
    .burger:hover,
    .burger.open {
      border-color: var(--accent);
    }
    .bar {
      display: block;
      width: 20px;
      height: 1.5px;
      background: var(--text);
      transition:
        transform 0.28s cubic-bezier(0.2, 0.7, 0.2, 1),
        opacity 0.2s ease;
    }
    .burger.open .bar:nth-child(1) {
      transform: translateY(6.5px) rotate(45deg);
    }
    .burger.open .bar:nth-child(2) {
      opacity: 0;
    }
    .burger.open .bar:nth-child(3) {
      transform: translateY(-6.5px) rotate(-45deg);
    }

    .panel {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      flex-direction: column;
      padding: 8px var(--gutter) 20px;
      max-height: calc(100dvh - var(--nav-h));
      overflow-y: auto;
      overscroll-behavior: contain;
      background: #0a1521;
      border-bottom: 1px solid var(--line);
      box-shadow: 0 24px 50px rgba(2, 6, 23, 0.5);
      font-family: var(--font-heading);
      font-weight: 600;
      font-size: 16px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      /* Estado cerrado; .open lo revierte. */
      transform: translateY(-8px);
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      transition:
        transform 0.28s cubic-bezier(0.2, 0.7, 0.2, 1),
        opacity 0.28s ease,
        visibility 0s linear 0.28s;
    }
    .panel.open {
      transform: none;
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
      transition:
        transform 0.28s cubic-bezier(0.2, 0.7, 0.2, 1),
        opacity 0.28s ease,
        visibility 0s;
    }
    .panel a {
      display: block;
      padding: 14px 0;
      color: color-mix(in srgb, var(--text) 84%, transparent);
      border-bottom: 1px solid var(--line);
      transition:
        color 0.2s ease,
        padding-left 0.2s ease;
    }
    .panel a:hover,
    .panel a:focus-visible {
      color: var(--accent-soft);
      padding-left: 6px;
    }
    .panel-social {
      display: flex;
      gap: 10px;
      padding-top: 18px;
    }
    .panel-social a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      border-bottom: 0;
      width: 44px;
      height: 44px;
    }
    .panel-social a:hover {
      padding-left: 0;
    }

    @media (max-width: 860px) {
      :host {
        gap: 12px;
      }
      .links,
      .social {
        display: none;
      }
      .burger {
        display: flex;
      }
      .panel {
        display: flex;
      }
    }

    @media (max-width: 560px) {
      .logo {
        width: 36px;
        height: 36px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .panel,
      .bar,
      .panel a {
        transition: none;
      }
    }
  `
})
export class NavComponent {
  private host = inject<ElementRef<HTMLElement>>(ElementRef);

  readonly links = LINKS;
  readonly abierto = signal(false);

  alternar(): void {
    this.abierto.update((v) => !v);
  }

  cerrar(): void {
    this.abierto.set(false);
  }

  @HostListener('document:keydown.escape')
  alPulsarEscape(): void {
    this.cerrar();
  }

  // Un toque fuera de la barra cierra el panel.
  @HostListener('document:click', ['$event'])
  alClicarFuera(event: MouseEvent): void {
    if (!this.abierto()) return;
    if (!this.host.nativeElement.contains(event.target as Node)) this.cerrar();
  }

  // Al pasar a escritorio el panel deja de mostrarse: reseteamos el estado
  // para no volver a móvil con el menú abierto.
  @HostListener('window:resize')
  alRedimensionar(): void {
    if (window.innerWidth > DESKTOP_BP) this.cerrar();
  }
}
