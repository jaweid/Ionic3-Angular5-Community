import { NgModule } from '@angular/core';
import { AppLoadingComponent } from '../shared/components/app-loading/app-loading';
import { AppToastWithIconComponent } from '../shared/components/app-toast-with-icon/app-toast-with-icon';
import { AppHomeNavbarComponent } from '../shared/components/app-home-navbar/app-home-navbar';
import { ChooseCityComponent } from '../pages/home/choose-city/choose-city';
import { AppTimesTradeComponent } from '../shared/components/app-times-trade/app-times-trade';
@NgModule({
	declarations: [AppLoadingComponent,
    AppToastWithIconComponent,
    AppHomeNavbarComponent,
    ChooseCityComponent,
    AppTimesTradeComponent],
	imports: [],
	exports: [AppLoadingComponent,
    AppToastWithIconComponent,
    AppHomeNavbarComponent,
    ChooseCityComponent,
    AppTimesTradeComponent]
})
export class ComponentsModule {}
