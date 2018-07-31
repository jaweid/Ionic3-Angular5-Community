import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MineAccountPage } from './mine-account';
import {WithdrawPage} from './withdraw/withdraw';
import {ChooseBankCardPage} from './choose-bank-card/choose-bank-card';
import {AddBankCardPage} from './add-bank-card/add-bank-card';
import {AccountRechargePage} from './account-recharge/account-recharge';
import{WithdrawRecordPage} from './withdraw-record/withdraw-record';
import {ChooseBankListPage} from './choose-bank-list/choose-bank-list';
import {MyBankCardsComponent} from "./my-bank-cards/my-bank-cards";
import {WithdrawCompletedComponent} from "./withdraw-completed/withdraw-completed";
import {ScoreRulesComponent} from "./score-rules/score-rules";
import {PaySettingComponent} from "./pay-setting/pay-setting";
@NgModule({
  declarations: [
    MineAccountPage,WithdrawPage,
    WithdrawCompletedComponent,ScoreRulesComponent,
    ChooseBankCardPage,AddBankCardPage,AccountRechargePage,
    WithdrawRecordPage,ChooseBankListPage,MyBankCardsComponent,
    PaySettingComponent
  ],
  entryComponents:[MineAccountPage,WithdrawPage,
    WithdrawCompletedComponent,ScoreRulesComponent,
    ChooseBankCardPage,AddBankCardPage,AccountRechargePage,
    WithdrawRecordPage,ChooseBankListPage,MyBankCardsComponent,
    PaySettingComponent
  ],
  imports: [
    IonicPageModule.forChild(MineAccountPage),
  ],
})
export class MineAccountPageModule {}
