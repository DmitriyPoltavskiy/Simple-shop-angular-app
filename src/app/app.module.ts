import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { MdButtonModule, MdCheckboxModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
// import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { ShopItemComponent } from './shop-item/shop-item.component';

import {MdButtonModule, MdCheckboxModule} from '@angular/material';

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
		FormsModule,
		BrowserAnimationsModule,
		NoopAnimationsModule,
		// HttpModule
	],
	exports: [
		MdButtonModule, 
		MdCheckboxModule
	],
	// providers: [],
})
export class AppModule { }
