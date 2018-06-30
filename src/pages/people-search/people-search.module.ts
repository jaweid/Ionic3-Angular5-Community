import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PeopleSearchPage } from './people-search';

@NgModule({
  declarations: [
    PeopleSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(PeopleSearchPage),
  ],
})
export class PeopleSearchPageModule {}
