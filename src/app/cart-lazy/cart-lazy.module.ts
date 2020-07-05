import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SharedModule } from '../shared/shared.module';
import { CartLazyRoutingModule } from './cart-lazy-routing.module';
@NgModule({
  imports: [CommonModule, CartLazyRoutingModule, SharedModule],
  declarations: [ShoppingCartComponent],
})
export class CartLazyModule {}
