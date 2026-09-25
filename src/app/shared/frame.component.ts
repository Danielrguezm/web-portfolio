import { Component } from '@angular/core';

@Component({
  selector: 'app-frame',
  standalone: true,
  template: `
    <i class="c tl"></i><i class="c tr"></i><i class="c bl"></i><i class="c br"></i>
    <ng-content />
  `,
  host: { class: 'frame' },
})
export class FrameComponent {}
