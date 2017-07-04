import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { MdButtonModule, MdCheckboxModule } from '@angular/material';
// import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { ShopItemComponent } from './shop-item/shop-item.component';

@NgModule({
	declarations: [
		AppComponent,
		ShopListComponent,
		ShopItemComponent
	],
	bootstrap: [AppComponent],
	imports: [
		BrowserModule,
		// MdButtonModule, 
		// MdCheckboxModule,
		// FormsModule,
		// HttpModule
	],
	// providers: [],
})
export class AppModule { }
