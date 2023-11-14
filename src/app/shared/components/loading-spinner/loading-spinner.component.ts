import { Component } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  template: `
    <span
      class="w-12 h-12 border-4 border-solid border-light-mode-darker-blue dark:border-light-mode-off-white border-b-transparent rounded-[50%] inline-block box-border animate-spin"
    ></span>
  `,
})
export class LoadingSpinnerComponent {}
