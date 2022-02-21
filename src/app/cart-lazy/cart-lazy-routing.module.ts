import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ApiCallComponent } from "./api-call/api-call.component";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";

const routes: Routes = [
  {
    path: "",
    component: ShoppingCartComponent,
  },
  {
    path: "apicall",
    component: ApiCallComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartLazyRoutingModule {}
