import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './items/items.component';

const routes: Routes = [
  { path: 'home', component: ItemsComponent },
  {
    path: 'cart',
    loadChildren: () =>
      import('./cart-lazy/cart-lazy.module').then((m) => m.CartLazyModule),
  },
  {
    path: '',
    component: ItemsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
