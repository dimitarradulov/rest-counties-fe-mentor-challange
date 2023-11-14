import { Component, inject } from '@angular/core';
import { LightModeService } from '../../services/light-mode.service';

@Component({
  selector: 'app-light-mode-button',
  template: `
    <button
      class="flex items-center gap-2"
      (click)="lightModeService.toggleLightMode()"
    >
      <ng-icon name="heroMoon"></ng-icon>
      <span class="font-semibold"
        >{{ lightModeService.lightMode() | titlecase }} Mode</span
      >
    </button>
  `,
})
export class LightModeButtonComponent {
  public lightModeService = inject(LightModeService);
}
