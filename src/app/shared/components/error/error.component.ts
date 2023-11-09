import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `
    <div
      class="bg-red-600 rounded border border-red-900 max-w-full w-[35rem] shadow-md p-2"
    >
      <p class="text-light-mode-off-white">{{ message }}</p>
    </div>
  `,
})
export class ErrorComponent {
  @Input({ required: true }) message: string;
}
