import { Component, OnInit } from '@angular/core';
import { CartService } from '../../shared/cart.service';
import { Item } from 'src/app/items/item.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  listOfCartItem = [];
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.listOfCartItem = this.cartService.listOfItem;
  }

  addToCart(item: Item) {
    const indexOfItem = this.getItemIndex(
      this.cartService.listOfItem,
      item,
      'name'
    );
    if (indexOfItem > -1) {
      this.cartService.addItemsInCart(indexOfItem);
    } else {
      this.cartService.addNewItemToCart(item);
      const index = this.getItemIndex(
        this.cartService.listOfItem,
        item,
        'name'
      );
      this.cartService.addItemsInCart(index);
    }
  }

  removeFromCart(item: Item) {
    const indexOfItem = this.getItemIndex(
      this.cartService.listOfItem,
      item,
      'name'
    );

    if (
      indexOfItem === 0 &&
      this.cartService.listOfItem[indexOfItem].noOfItemsInCart === 0
    ) {
      return;
    } else if (
      indexOfItem === 0 &&
      this.cartService.listOfItem[indexOfItem].noOfItemsInCart === 1
    ) {
      this.cartService.removeItemFromCart(indexOfItem);
    } else if (indexOfItem > -1) {
      this.cartService.removeItemsInCart(indexOfItem);
      if (this.cartService.listOfItem[indexOfItem].noOfItemsInCart === 0) {
        this.cartService.removeItemFromCart(indexOfItem);
      }
    } else {
    }
  }

  getItemIndex(array, item, property) {
    if (array) {
      const index = array.findIndex(
        (data) => data[property] === item[property]
      );
      return index;
    }
  }

  removeAllFromCart() {
    this.cartService.listOfItem = [];
    this.listOfCartItem = [];
    this.cartService.listOfItemInCart.next(this.cartService.listOfItem);
  }
}
