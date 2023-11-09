import { Component } from '@angular/core';

@Component({
  selector: 'app-light-mode-button',
  template: `
    <button class="flex items-center gap-2">
      <ng-icon name="heroMoon"></ng-icon>
      <span class="font-semibold">Dark Mode</span>
    </button>
  `,
})
export class LightModeButtonComponent {}
