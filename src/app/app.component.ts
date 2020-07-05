import { Component } from '@angular/core';
import { CartService } from '../app/shared/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'E-mart';

  constructor(public cartService: CartService) {}
}
