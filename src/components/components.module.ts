import { NgModule } from '@angular/core';
import { AppGoodsSearchComponent } from '../shared/components/app-goods-search/app-goods-search';
import { AppSecondaryMenuComponent } from '../shared/components/app-secondary-menu/app-secondary-menu';
import { AppPostComponent } from '../shared/components/app-post/app-post';
import { PostSearchPeopleComponent } from '../pages/post/post-search-people/post-search-people';
import { PostSearchThingComponent } from '../pages/post/post-search-thing/post-search-thing';
import { PostSecondaryHandComponent } from '../pages/post/post-secondary-hand/post-secondary-hand';
import { PostSecondaryLostComponent } from '../pages/post/post-secondary-lost/post-secondary-lost';
import { PostSecondaryTimeComponent } from '../pages/post/post-secondary-time/post-secondary-time';
@NgModule({
	declarations: [AppGoodsSearchComponent,
    AppSecondaryMenuComponent,
    AppPostComponent,
    PostSearchPeopleComponent,
    PostSearchThingComponent,
    PostSecondaryHandComponent,
    PostSecondaryLostComponent,
    PostSecondaryTimeComponent],
	imports: [],
	exports: [AppGoodsSearchComponent,
    AppSecondaryMenuComponent,
    AppPostComponent,
    PostSearchPeopleComponent,
    PostSearchThingComponent,
    PostSecondaryHandComponent,
    PostSecondaryLostComponent,
    PostSecondaryTimeComponent]
})
export class ComponentsModule {}
