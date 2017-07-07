import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Shop } from '../shared/Shop';

@Component({
	moduleId: module.id,
	selector: 'shop-item',
	templateUrl: 'shop-item.component.html',
	styleUrls: ['shop-item.component.scss']
})

export class ShopItemComponent {

	newShopName:string;
	newShopPrice:string;
	newShopImageUrl:string;

	Save(shop:Shop) {
		shop.name = this.newShopName;
		shop.price = this.newShopPrice;
		shop.imageUrl = this.newShopImageUrl;

		this.newShopName = '';
		this.newShopPrice = '';

		shop.isEdit = false;
	}

	CancelSave(shop:Shop) {
		shop.isEdit = false;
		 
		if(shop.name === "" && shop.imageUrl === "" && shop.price === "") {
			this.delete.emit();
		}
	}

	@Input() shop;
	@Output() edit = new EventEmitter();
	@Output() delete = new EventEmitter();

	OnEdit(shop:Shop) {
		this.newShopName = this.shop.name;
		this.newShopPrice = this.shop.price;
		this.newShopImageUrl = this.shop.imageUrl;

		this.shop.isEdit = true;
		this.edit.emit();
	}

	OnDelete() {
			this.delete.emit();
	}
}