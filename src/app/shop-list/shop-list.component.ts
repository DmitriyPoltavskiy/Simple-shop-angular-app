import { Component } from '@angular/core';
import { shopsData } from '../shared/shopsData';
import { Shop } from '../shared/Shop';

@Component({
	moduleId: module.id,
	selector: 'shop-list',
	templateUrl: 'shop-list.component.html',
	styleUrls: ['shop-list.component.css']
})

export class ShopListComponent {
	shops:Shop[] = shopsData;
	isEditItem:boolean = false;
	editShop:Shop = null;

	SortByPrice() {
		this.shops.sort(this.comparePrices)
	}

	comparePrices(a, b) {
		// return b.price - a.price;
		return a.price - b.price;
	}

	compareNames(a, b) {
		if(a.name > b.name)
			return 1;
		else if(a.name < b.name)
			return -1;
		else 
			return 0;
	}

	SortByName() {
		this.shops.sort(this.compareNames)
	}

	EditItem(shop:Shop) {
		this.isEditItem = true;
		this.editShop = shop;
		console.log(shop.name);
	}

	DeleteItem(shop:Shop) {
		let index = this.shops.indexOf(shop);

		if(index > -1) {
			this.shops.splice(index, 1)	
		}
	}
}