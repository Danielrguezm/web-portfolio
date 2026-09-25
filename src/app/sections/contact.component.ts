import { Component, computed, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FrameComponent } from '../shared/frame.component';
import { RevealDirective } from '../shared/reveal.directive';
import { IconComponent } from '../shared/icon.component';

type EstadoEnvio = 'idle' | 'enviando' | 'ok' | 'error';

@Component({
    selector: 'app-contact',
    imports: [ReactiveFormsModule, FrameComponent, RevealDirective, IconComponent],
    template: `
    <div class="wrap">
      <div class="copy" appReveal>
        <span class="kicker">06 · Contacto</span>
        <hr />
        <h2>¿Hablamos sobre tu proyecto?</h2>
        <p>
          Si buscas a alguien con ganas de aprender, aportar rigor y trabajar bien en equipo, aquí
          tienes mi perfil. Puedo colaborar en proyectos frontend, backend o en tareas de desarrollo
          full-stack con una base sólida en Java, Spring Boot y Angular.
        </p>
        <a href="mailto:hola@danielrodriguez.dev" class="mail-link">
          <app-icon name="mail" [size]="18" />
          hola&#64;danielrodriguez.dev
        </a>
      </div>
      <app-frame class="form-frame" appReveal>
        <form [formGroup]="form" (ngSubmit)="enviar()">
          <div class="row">
            <div class="field">
              <label for="c-nombre">Nombre</label>
              <input class="input" id="c-nombre" type="text" formControlName="nombre" placeholder="Tu nombre" />
            </div>
            <div class="field">
              <label for="c-email">Email</label>
              <input class="input" id="c-email" type="email" formControlName="email" placeholder="tu@correo.com" />
            </div>
          </div>
          <div class="field">
            <label for="c-mensaje">Mensaje</label>
            <textarea
              class="input"
              id="c-mensaje"
              rows="5"
              formControlName="mensaje"
              placeholder="Cuéntame qué necesitas o en qué puedes ayudarme."
            ></textarea>
          </div>
          <div class="submit-row">
            <button type="submit" class="btn btn-primary" [disabled]="form.invalid || estado() === 'enviando'">
              Enviar mensaje
            </button>
            <span class="status">{{ mensajeEstado() }}</span>
          </div>
        </form>
      </app-frame>
    </div>
  `,
    host: { id: 'contacto' },
    styles: `
    :host {
      display: block;
      scroll-margin-top: calc(var(--nav-h) + 8px);
      padding: var(--section-pad) var(--gutter);
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
      flex: 1 1 320px;
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
      margin: 0 0 20px;
      max-width: 12ch;
    }
    p {
      margin: 0 0 24px;
      font-size: 16px;
      line-height: 1.7;
      color: color-mix(in srgb, var(--text) 75%, transparent);
      max-width: 46ch;
    }
    .mail-link {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      font-family: var(--font-heading);
      font-weight: 600;
      font-size: 20px;
      letter-spacing: 0.02em;
      color: var(--accent);
      border-bottom: 1px solid color-mix(in srgb, var(--accent) 45%, transparent);
      padding-bottom: 4px;
      transition:
        color 0.25s ease,
        border-color 0.25s ease;
    }
    .mail-link:hover {
      color: var(--accent-soft);
      border-color: var(--accent-soft);
    }
    .form-frame {
      display: block;
      flex: 1 1 440px;
      min-width: 0;
      padding: clamp(22px, 3vw, 34px);
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 18px;
    }
    .row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 18px;
    }
    .submit-row {
      display: flex;
      align-items: center;
      gap: 16px;
      flex-wrap: wrap;
    }
    .submit-row .btn {
      min-height: 44px;
      padding-inline: 24px;
      font-size: 14px;
    }
    .status {
      font-size: 14px;
      color: var(--accent-soft);
    }

    @media (max-width: 860px) {
      /* Objetivo tactil de 44px sin mover el subrayado del enlace. */
      .mail-link {
        padding-block: 8px 10px;
      }
      .wrap {
        flex-direction: column;
        gap: 36px;
      }
      .copy,
      .form-frame {
        flex: 1 1 auto;
        width: 100%;
      }
      h2,
      p {
        max-width: none;
      }
    }
    @media (max-width: 560px) {
      h2 {
        font-size: clamp(26px, 7.6vw, 34px);
      }
      p {
        font-size: 15px;
        margin-bottom: 20px;
      }
      hr {
        margin-bottom: 24px;
      }
      .mail-link {
        font-size: 17px;
        letter-spacing: 0;
        word-break: break-word;
      }
      .row {
        grid-template-columns: 1fr;
        gap: 14px;
      }
      form {
        gap: 14px;
      }
      .submit-row {
        flex-direction: column;
        align-items: stretch;
        gap: 10px;
      }
      .submit-row .btn {
        width: 100%;
      }
      .status {
        text-align: center;
      }
    }
  `
})
export class ContactComponent {
  private fb = new FormBuilder();

  estado = signal<EstadoEnvio>('idle');
  mensajeEstado = computed(
    () =>
      ({
        idle: '',
        enviando: 'Enviando…',
        // Demo: sin backend conectado. Sustituye enviar() por una llamada real
        // (fetch/HttpClient a Formspree o a tu API) antes de publicar.
        ok: 'Gracias, te respondo pronto. (Demo — conecta tu backend o Formspree.)',
        error: 'No se pudo enviar. Escríbeme por correo.',
      })[this.estado()],
  );

  form = this.fb.nonNullable.group({
    nombre: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    mensaje: ['', [Validators.required, Validators.minLength(10)]],
  });

  enviar(): void {
    if (this.form.invalid) return;
    this.estado.set('ok');
    this.form.reset();
  }
}
