import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostPage } from './post';
import {PostSearchPeopleComponent} from "./post-search-people/post-search-people";
import {PostSearchThingComponent} from "./post-search-thing/post-search-thing";
import {PostSecondaryHandComponent} from "./post-secondary-hand/post-secondary-hand";
import {PostSecondaryLostComponent} from "./post-secondary-lost/post-secondary-lost";
import {PostSecondaryTimeComponent} from "./post-secondary-time/post-secondary-time";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    PostPage,
    PostSearchPeopleComponent,
    PostSearchThingComponent,
    PostSecondaryHandComponent,
    PostSecondaryLostComponent,
    PostSecondaryTimeComponent
  ],
  entryComponents:[
    PostPage,
    PostSearchPeopleComponent,
    PostSearchThingComponent,
    PostSecondaryHandComponent,
    PostSecondaryLostComponent,
    PostSecondaryTimeComponent
  ],
  imports: [
    IonicPageModule.forChild(PostPage),
    SharedModule,
  ]
})
export class PostPageModule {}
