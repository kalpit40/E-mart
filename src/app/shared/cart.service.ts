import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Item } from './item.model';
@Injectable()
export class CartService {
  listOfItemInCart = new Subject<Item[]>();
  listOfItem: Item[] = [];
  category: string;
  selectedCategory = new Subject<string>();

  getItems() {
    console.error(this.listOfItem);
    return this.listOfItem;
  }

  addNewItemToCart(item) {
    this.listOfItem.push(item);
    this.listOfItemInCart.next(this.listOfItem);
  }

  removeItemFromCart(indexOfItem) {
    this.listOfItem.splice(indexOfItem, 1);
    this.listOfItemInCart.next(this.listOfItem);
  }

  onChangeOfItem(): Observable<Item[]> {
    return this.listOfItemInCart.asObservable();
  }

  addItemsInCart(indexOfItem) {
    this.listOfItem[indexOfItem].noOfItemsInCart += 1;
    this.listOfItemInCart.next(this.listOfItem);
  }

  removeItemsInCart(indexOfItem) {
    this.listOfItem[indexOfItem].noOfItemsInCart -= 1;
    this.listOfItemInCart.next(this.listOfItem);
  }

  clearAllItems() {
    this.listOfItemInCart.next([]);
  }

  setCategory(category) {
    this.category = category;
    this.selectedCategory.next(this.category);
  }
}
