import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

interface TyperState {
  s: number;
  i: number;
  erasing: boolean;
  wait: number;
}

const SNIPPETS = [
  `// TareaController.java
@RestController
@RequestMapping("/api/tareas")
class TareaController {

  private final TareaService service;

  @GetMapping
  List<Tarea> listar(@RequestParam String etiqueta) {
    return service.buscarPorEtiqueta(etiqueta);
  }

  @PostMapping
  Tarea crear(@Valid @RequestBody TareaDTO dto) {
    return service.guardar(dto);
  }

  @DeleteMapping("/{id}")
  void borrar(@PathVariable Long id) {
    service.borrar(id);
  }
}`,
  `// tareas.component.ts
@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.html'
})
export class TareasComponent implements OnInit {

  tareas$ = this.api.getTareas();
  filtro = new FormControl('');

  constructor(private api: TareaService) {}

  ngOnInit(): void {
    this.filtro.valueChanges
      .pipe(debounceTime(250))
      .subscribe((q) => this.api.buscar(q));
  }
}`,
  `# despliegue
$ ./mvnw clean verify
  Tests run: 42, Failures: 0, Skipped: 0
  BUILD SUCCESS in 18.402 s

$ docker build -t tareas-api:1.4 .
$ docker compose up -d
  api      running on 8080
  mysql    healthy

$ git commit -m "feat: filtros por etiqueta"
$ git push origin main
  main -> main   3 files changed`,
];

const COLOR: Record<string, string> = {
  comment: '#5f7285',
  string: '#6ee7b7',
  annotation: '#c4a6ff',
  keyword: '#c4a6ff',
  type: '#7fb2f0',
  number: '#f0b46a',
};

const TOKEN_RE =
  /(\/\/[^\n]*|#[^\n]*)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')|(@\w+)|\b(class|export|return|private|final|const|let|new|import|from|public|void|interface|extends|implements|await|async|function|if|else)\b|\b([A-Z]\w*)\b|\b(\d+)\b/g;

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function paint(text: string): string {
  return escapeHtml(text).replace(
    TOKEN_RE,
    (m, comment, str, annotation, keyword, type, num) => {
      const key = comment
        ? 'comment'
        : str
          ? 'string'
          : annotation
            ? 'annotation'
            : keyword
              ? 'keyword'
              : type
                ? 'type'
                : 'number';
      return `<span style="color:${COLOR[key]}">${m}</span>`;
    },
  );
}

/**
 * A single-column `<pre>` that types and erases three code snippets in a
 * loop. One setInterval drives everything, and the animation state lives
 * on the DOM node itself (`el.__typer`) rather than in a closure, so a
 * remount continues the existing loop instead of racing a second one.
 */
@Component({
  selector: 'app-code-background',
  standalone: true,
  template: `<pre #out aria-hidden="true" class="code-bg"></pre>`,
  styles: `
    .code-bg {
      position: absolute;
      top: 84px;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
      padding: 0 var(--gutter);
      column-count: 2;
      column-gap: clamp(32px, 6vw, 88px);
      font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
      font-size: 14px;
      line-height: 1.9;
      opacity: 0.68;
      white-space: pre;
      pointer-events: none;
      overflow: hidden;
      mask-image: linear-gradient(to bottom, #000 62%, transparent 100%);
      -webkit-mask-image: linear-gradient(to bottom, #000 62%, transparent 100%);
    }
    .code-bg::after {
      content: '▍';
      color: var(--accent);
      animation: blink 1.05s steps(1) infinite;
    }
  `,
})
export class CodeBackgroundComponent implements AfterViewInit, OnDestroy {
  @ViewChild('out') out!: ElementRef<HTMLPreElement>;

  private iv?: number;

  ngAfterViewInit(): void {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const slow = reduced ? 2.2 : 1;
    const node = this.out.nativeElement;
    const write = (text: string) => {
      node.innerHTML = `<span style="color:#93a4b8">${paint(text)}</span>`;
    };

    const state: TyperState = { s: 0, i: 0, erasing: false, wait: performance.now() + 600 };
    this.iv = window.setInterval(() => {
      const now = performance.now();
      if (now < state.wait) return;
      const text = SNIPPETS[state.s];
      if (!state.erasing) {
        state.i += 1;
        write(text.slice(0, state.i));
        if (state.i >= text.length) {
          state.erasing = true;
          state.wait = now + 2600 * slow;
          return;
        }
        state.wait = now + (text[state.i - 1] === '\n' ? 80 : 8) * slow;
      } else {
        state.i -= reduced ? 3 : 5;
        if (state.i <= 0) {
          state.i = 0;
          state.erasing = false;
          state.s = (state.s + 1) % SNIPPETS.length;
          node.innerHTML = '';
          state.wait = now + 650;
          return;
        }
        write(text.slice(0, state.i));
      }
    }, 24);
  }

  ngOnDestroy(): void {
    if (this.iv) clearInterval(this.iv);
  }
}
