import {Component} from '@angular/core';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'HomePage';
  tab2Root = 'SortPage';
  tab3Root = 'PostPage';
  tab4Root = 'OrderPage';
  tab5Root = 'MinePage';

  constructor() {

  }
}
