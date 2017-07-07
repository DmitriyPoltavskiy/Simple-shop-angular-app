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
import 'hammerjs';

import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import { DirectoryComponent } from './directory/directory.component';
import { RouterModule, Routes } from '@angular/router';

const APP_ROUTES:Routes = [
    {
        path: 'item',
        component: ShopItemComponent
    },
    {
        path: '',
        component: ShopListComponent,
    }
];

// export const APP_ROUTES_PROVIDER = [
//     provideRoutes(APP_ROUTES)
// ];

@NgModule({
	declarations: [
		AppComponent,
		ShopListComponent,
		ShopItemComponent,
		DirectoryComponent
	],
	bootstrap: [AppComponent],
	imports: [
		RouterModule.forRoot(
			APP_ROUTES,
			{
				enableTracing: true
			}
		),
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
