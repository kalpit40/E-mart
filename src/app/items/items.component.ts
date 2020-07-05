import { Component, OnInit } from '@angular/core';
import { Item } from './item.model';
import { CartService } from './../shared/cart.service';
import { JsonPipe } from '@angular/common';
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
      price: 8,
      noOfItemsInCart: 0,
      category: 'Vegetables',
    },
    {
      imageName: 'mango',
      name: 'Mango',
      price: 28,
      noOfItemsInCart: 0,
      category: 'Fruits',
    },
    {
      imageName: 'orange',
      name: 'Orange',
      price: 40,
      noOfItemsInCart: 0,
      category: 'Fruits',
    },
    {
      imageName: 'grapes',
      name: 'Grapes',
      price: 25,
      noOfItemsInCart: 0,
      category: 'Fruits',
    },
    {
      imageName: 'tomato',
      name: 'Tomato',
      price: 10,
      noOfItemsInCart: 0,
      category: 'Vegetables',
    },
    {
      imageName: 'cauliflower',
      name: 'Cauliflower',
      price: 8,
      noOfItemsInCart: 0,
      category: 'Vegetables',
    },
    {
      imageName: 'cumin',
      name: 'Cumin Powder',
      price: 6,
      noOfItemsInCart: 0,
      category: 'Spices',
    },
    {
      imageName: 'chilli',
      name: 'Chilli Powder',
      price: 12,
      noOfItemsInCart: 0,
      category: 'Spices',
    },
    {
      imageName: 'coriander',
      name: 'Coriander Powder',
      price: 14,
      noOfItemsInCart: 0,
      category: 'Spices',
    },
    {
      imageName: 'bread',
      name: 'Bread',
      price: 6,
      noOfItemsInCart: 0,
      category: 'Bread',
    },
    {
      imageName: 'garlic',
      name: 'Garlic Bread',
      price: 15,
      noOfItemsInCart: 0,
      category: 'Bread',
    },
    {
      imageName: 'amul_ghee',
      name: 'Amul Ghee',
      price: 80,
      noOfItemsInCart: 0,
      category: 'Dairy',
    },
    {
      imageName: 'amul',
      name: 'Amul Taaza Milk',
      price: 20,
      noOfItemsInCart: 0,
      category: 'Dairy',
    },
    {
      imageName: 'sudeshna',
      name: 'Sudeshna  Milk',
      price: 22,
      noOfItemsInCart: 0,
      category: 'Dairy',
    },
  ];
  filteredItemList: Item[];
  category = 'all';
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.filteredItemList = this.listOfItems;
    this.updateItemBasedOnCategory();
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
  updateItemBasedOnCategory() {
    this.cartService.selectedCategory.subscribe((data) => {
      let itemList: Item[] = JSON.parse(JSON.stringify(this.listOfItems));
      this.filteredItemList = [];
      if (data.toLowerCase() == 'all') {
        this.filteredItemList = itemList;
      } else {
        this.filteredItemList = itemList.filter(
          (item) => item.category === data
        );
      }
    });
  }

  setCategory(category) {
    this.category = category;
    this.cartService.setCategory(category);
  }
}
