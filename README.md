# Portfolio

Angular 18 implementation of the `Portfolio.dc.html` design from Claude Design (see `/design_handoff_portfolio_landing` and `/chats` at the repo root for the original spec and conversation).

Before publishing, replace the placeholders:

- `public/assets/img/proyecto-1.svg`, `proyecto-2.svg`, `proyecto-3.svg` — real 16:10 screenshots of the three projects (`src/app/data/projects.ts`).
- `public/assets/cv/cv.pdf` — your real CV.
- GitHub/LinkedIn URLs (currently `https://github.com/` and `https://linkedin.com/`) across `nav`, `hero`, `projects`, and `footer` components.
- Project repo/demo links in `src/app/data/projects.ts`.
- `ContactComponent.enviar()` — currently simulates a successful submit; wire it to a real endpoint (Formspree or your own API) before publishing.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.21.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
