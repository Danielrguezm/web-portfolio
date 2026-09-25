import { AfterViewInit, Directive, ElementRef, Input, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  @Input() delay = 0;

  private io?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    const node = this.el.nativeElement;
    node.style.transitionDelay = `${this.delay}ms`;
    node.setAttribute('data-reveal', '');

    if (!('IntersectionObserver' in window)) {
      node.setAttribute('data-reveal', 'in');
      return;
    }

    this.io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        node.setAttribute('data-reveal', 'in');
        this.io?.disconnect();
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
    );
    this.io.observe(node);
  }

  ngOnDestroy(): void {
    this.io?.disconnect();
  }
}
