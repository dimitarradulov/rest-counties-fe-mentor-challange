import { Component, inject } from '@angular/core';
import { LightModeService } from './shared/services/light-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private lightModeService = inject(LightModeService);

  constructor() {
    this.lightModeService.setApplicationLightMode();
  }
}
