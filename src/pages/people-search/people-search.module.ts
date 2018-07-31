import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {PeopleSearchPage} from './people-search';
import {SharedModule} from "../../shared/shared.module";
import {PeopleDetailComponent} from "../../shared/components/people-detail/people-detail";

@NgModule({
  declarations: [
    PeopleSearchPage,
    PeopleDetailComponent
  ],
  imports: [
    IonicPageModule.forChild(PeopleSearchPage),
    SharedModule
  ],
  entryComponents:[PeopleDetailComponent]
})
export class PeopleSearchPageModule {
}
