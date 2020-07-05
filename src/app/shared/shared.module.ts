import { NgModule, ModuleWithProviders } from '@angular/core';
import { CartService } from './cart.service';

@NgModule({
  //   providers: [CounterService],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [CartService],
    };
  }
}
