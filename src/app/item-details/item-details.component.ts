import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../items/item.model';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css'],
})
export class ItemDetailsComponent implements OnInit {
  @Input() item: Item;

  @Output() removeItemFromCart = new EventEmitter<Item>();

  @Output() addItemToCart = new EventEmitter<Item>();
  constructor() {}

  ngOnInit(): void {}

  removeFromCart(item) {
    this.removeItemFromCart.emit(item);
  }

  addToCart(item) {
    this.addItemToCart.emit(item);
  }
}
