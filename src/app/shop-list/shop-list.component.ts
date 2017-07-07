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
	editShop:Shop = null;

	sortPriceUp:boolean = false;
	sortNameUp:boolean = false;

	SortByPrice() {
		if(this.sortPriceUp)
			this.shops.sort(this.comparePricesUp);
		else 
			this.shops.sort(this.comparePricesDown);

		this.sortPriceUp = !this.sortPriceUp;
	}

	SortByName() {
		if(this.sortNameUp)
			this.shops.sort(this.compareNamesUp) 
		else 
			this.shops.sort(this.compareNamesDown)
			
		this.sortNameUp = !this.sortNameUp;
	}

	AddItem() {
		let isEdit:boolean = false;
		for (var index = 0; index < this.shops.length; index++) {
			var element = this.shops[index];
			if(element.isEdit) {
				isEdit = true;
				break;
			}
		}

		if(!isEdit) {
			let newItem:Shop = new Shop("", "", "");
			newItem.isEdit = true;
			this.shops.unshift(newItem);
		}
	}

	EditItem(shop:Shop) {
		this.editShop = shop;
		console.log(shop.name);
	}

	DeleteItem(shop:Shop) {
		let index = this.shops.indexOf(shop);

		if(index > -1) {
			this.shops.splice(index, 1)	
		}
	}

	comparePricesUp(a, b) {
		return b.price - a.price;
	}

	comparePricesDown(a, b) {
		return a.price - b.price;
	}
	
	compareNamesUp(a, b) {
		if(a.name > b.name)
			return 1;
		else if(a.name < b.name)
			return -1;
		return 0;
	}

	compareNamesDown(a, b) {
		if(b.name > a.name)
			return 1;
		else if(a.name < b.name)
			return -1;
		return 0;
	}
}