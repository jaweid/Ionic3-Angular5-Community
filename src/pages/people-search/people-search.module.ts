import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PeopleSearchPage } from './people-search';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    PeopleSearchPage,

  ],
  imports: [
    IonicPageModule.forChild(PeopleSearchPage),
    SharedModule
  ],
})
export class PeopleSearchPageModule {}
