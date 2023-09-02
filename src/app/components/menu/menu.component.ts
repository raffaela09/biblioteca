import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
 @Output () onToggleMenu: EventEmitter<MenuToggle> = new EventEmitter();
 collapsed = false;
 screenWidth = 0;
 navData = MenuData;


}
