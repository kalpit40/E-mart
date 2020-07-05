import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  itemList = [];
  count = 0;
  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartService.listOfItemInCart.subscribe((data) => {
      this.itemList = data;
      this.checkNoOfCount();
    });
  }

  checkNoOfCount() {
    this.count = 0;
    this.itemList.map((data) => {
      this.count = this.count + data.noOfItemsInCart;
    });
  }
  navigateTo(path) {
    this.router.navigate(['/' + path]);
  }
}
