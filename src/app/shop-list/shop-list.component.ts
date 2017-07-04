import { Component } from '@angular/core';
import { shopsData } from '../shared/shopsData';
// import { Shop } from '../shared/Shop';

@Component({
	moduleId: module.id,
	selector: 'shop-list',
	templateUrl: 'shop-list.component.html',
	styleUrls: ['shop-list.component.css']
})

export class ShopListComponent {
	shops = shopsData;
	isEditItem:boolean = false;
	editShop = null;

	SortByPrice() {
		this.shops.sort(this.comparePrices)
		console.log('Sort by price');
	}

	comparePrices(a, b) {
		return a.price - b.price;
	}

	compareNames(a, b) {
		if(a.name > b.name)
			return 1;
		if(a.name < b.name)
			return -1;
		return 0;
	}

	SortByName() {
		this.shops.sort(this.compareNames)
		console.log('Sort by name');
	}

	EditItem(shop) {
		this.isEditItem = true;
		this.editShop = shop;
		console.log(shop.name);
	}

	DeleteItem(shop) {
		let index = this.shops.indexOf(shop);

		if(index > -1) {
			this.shops.splice(index, 1)	
		}
	}
}