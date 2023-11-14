import { Injectable, WritableSignal, signal } from '@angular/core';

export enum LightMode {
  LIGHT = 'light',
  DARK = 'dark',
}

@Injectable({
  providedIn: 'root',
})
export class LightModeService {
  lightMode: WritableSignal<LightMode> = signal(LightMode.LIGHT);

  toggleLightMode() {
    this.lightMode.update((mode) =>
      mode === LightMode.LIGHT ? LightMode.DARK : LightMode.LIGHT
    );

    if (this.lightMode() === LightMode.DARK) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    localStorage.setItem('light-mode', this.lightMode());
  }

  setApplicationLightMode() {
    const lightMode = localStorage.getItem('light-mode');

    if (lightMode) {
      lightMode === LightMode.DARK
        ? document.documentElement.classList.add('dark')
        : document.documentElement.classList.remove('dark');
      this.lightMode.set(lightMode as LightMode);
    }
  }
}
