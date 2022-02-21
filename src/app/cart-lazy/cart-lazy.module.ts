import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";
import { SharedModule } from "../shared/shared.module";
import { CartLazyRoutingModule } from "./cart-lazy-routing.module";
import { ApiCallComponent } from "./api-call/api-call.component";
@NgModule({
  imports: [CommonModule, CartLazyRoutingModule, SharedModule],
  declarations: [ShoppingCartComponent, ApiCallComponent],
})
export class CartLazyModule {}
