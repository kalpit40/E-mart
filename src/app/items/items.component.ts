import { Component, OnInit } from '@angular/core';
import { Item } from './item.model';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  listOfItems: Item[] = [
    {
      imageName: 'spinach',
      name: 'Spinach',
      price: 3,
      noOfItemsInCart: 0,
    },
    {
      imageName: 'Chilli',
      name: 'Chilli',
      price: 3,
      noOfItemsInCart: 0,
    },
    {
      imageName: 'spinach',
      name: 'Spinach',
      price: 3,
      noOfItemsInCart: 0,
    },
    {
      imageName: 'spinach',
      name: 'Spinach',
      price: 3,
      noOfItemsInCart: 0,
    },
    {
      imageName: 'Tomato',
      name: 'Tomato',
      price: 3,
      noOfItemsInCart: 0,
    },
  ];
  listOfItemInCart: Item[] = [];
  constructor() {}

  ngOnInit(): void {}

  addToCart(item: Item) {
    // const indexOfItem = this.listOfItemInCart.findIndex(
    //   (data) => data.name === item.name
    // );
    const indexOfItem = this.getItemIndex(this.listOfItemInCart, item, 'name');
    if (indexOfItem > -1) {
      this.listOfItemInCart[indexOfItem].noOfItemsInCart += 1;
    } else {
      this.listOfItemInCart.push(item);
      const index = this.getItemIndex(this.listOfItemInCart, item, 'name');
      this.listOfItemInCart[index].noOfItemsInCart += 1;
    }
    console.log(this.listOfItemInCart);
  }

  removeFromCart(item: Item) {
    if (this.listOfItemInCart && this.listOfItemInCart.length > 0) {
      const indexOfItem = this.getItemIndex(
        this.listOfItemInCart,
        item,
        'name'
      );

      if (
        indexOfItem === 0 &&
        this.listOfItemInCart[indexOfItem].noOfItemsInCart === 0
      ) {
        return;
      } else if (
        indexOfItem === 0 &&
        this.listOfItemInCart[indexOfItem].noOfItemsInCart === 1
      ) {
        this.listOfItemInCart.splice(indexOfItem, 1);
      } else if (indexOfItem > -1) {
        this.listOfItemInCart[indexOfItem].noOfItemsInCart -= 1;
        if (this.listOfItemInCart[indexOfItem].noOfItemsInCart === 0) {
          this.listOfItemInCart.splice(indexOfItem, 1);
        }
      } else {
        alert('I think yaha kabhi nhi aayega');
        this.listOfItemInCart.splice(indexOfItem, 1);
      }
    }
    console.log(this.listOfItemInCart);
  }

  getItemIndex(array: Item[], item, property) {
    const index = this.listOfItemInCart.findIndex(
      (data) => data[property] === item[property]
    );

    return index;
  }
}
