import { Routes } from '@angular/router';
import { HotzyLandingComponent } from './components/hotzy-landing/hotzy-landing';
import { ProductDetailsComponent } from './components/product-details/product-details';

export const routes: Routes = [
  { path: '', component: HotzyLandingComponent },
  { path: 'product/:id', component: ProductDetailsComponent }

];