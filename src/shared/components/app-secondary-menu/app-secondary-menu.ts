import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SecondaryMenuList} from "../../resources/sort/secondary-menu-list";

/**
 * Generated class for the AppSecondaryMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-secondary-menu',
  templateUrl: 'app-secondary-menu.html'
})
export class AppSecondaryMenuComponent {
  @Input() secondaryMenuList:SecondaryMenuList[]=[];
  @Output() clickMenu:EventEmitter<undefined>=new EventEmitter();

  constructor() {
  }

  clickMenuEvent(menuId){
    this.clickMenu.emit(menuId);
  }

}
