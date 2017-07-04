import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'shop-item',
  templateUrl: 'shop-item.component.html',
  styleUrls: ['shop-item.component.css']
})

export class ShopItemComponent {
  title = 'Wow this is item';

  @Input() shop;
  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();

  OnEdit() {
      this.edit.emit();
  }
  OnDelete() {
      this.delete.emit();
  }
}