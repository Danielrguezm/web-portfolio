import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NavComponent } from './sections/nav.component';
import { HeroComponent } from './sections/hero.component';
import { StackComponent } from './sections/stack.component';
import { ProjectsComponent } from './sections/projects.component';
import { ExperienceComponent } from './sections/experience.component';
import { AboutComponent } from './sections/about.component';
import { ContactComponent } from './sections/contact.component';
import { FooterComponent } from './sections/footer.component';

@Component({
    selector: 'app-root',
    imports: [
        NavComponent,
        HeroComponent,
        StackComponent,
        ProjectsComponent,
        ExperienceComponent,
        AboutComponent,
        ContactComponent,
        FooterComponent,
    ],
    template: `
    <app-nav />
    <app-hero />
    <app-stack />
    <app-projects />
    <app-experience />
    <app-about />
    <app-contact />
    <app-footer />
  `
})
export class AppComponent implements AfterViewInit, OnDestroy {
  private safetyNet?: ReturnType<typeof setTimeout>;

  // Safety net for the scroll-reveal directives: on a short viewport with no
  // scroll, IntersectionObserver may never fire for below-the-fold content,
  // so force everything visible after 2.5s.
  ngAfterViewInit(): void {
    this.safetyNet = setTimeout(() => {
      document.querySelectorAll('[data-reveal]').forEach((el) => el.setAttribute('data-reveal', 'in'));
    }, 2500);
  }

  ngOnDestroy(): void {
    if (this.safetyNet) clearTimeout(this.safetyNet);
  }
}
