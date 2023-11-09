import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgIconsModule } from '@ng-icons/core';
import { heroMoon } from '@ng-icons/heroicons/outline';

import { LightModeButtonComponent } from './components/light-mode-button/light-mode-button.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    LightModeButtonComponent,
    LoadingSpinnerComponent,
    ErrorComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgIconsModule.withIcons({ heroMoon }),
  ],
  exports: [LightModeButtonComponent, LoadingSpinnerComponent, ErrorComponent],
})
export class SharedModule {}
