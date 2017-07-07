import { Component } from '@angular/core';
// import { ShopListComponent } from './shop-list/shop-list.component';
// import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  // directives: [ShopListComponent]
})

export class AppComponent {
  title: string = 'Simple shop app!';
}
