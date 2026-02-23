import { Component } from '@angular/core';
import { HotzyLandingComponent } from './components/hotzy-landing/hotzy-landing';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HotzyLandingComponent],
  template: `<app-hotzy-landing></app-hotzy-landing>`
})
export class AppComponent {}