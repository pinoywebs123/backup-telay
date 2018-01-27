import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NumeracyPage } from './numeracy';

@NgModule({
  declarations: [
    NumeracyPage,
  ],
  imports: [
    IonicPageModule.forChild(NumeracyPage),
  ],
})
export class NumeracyPageModule {}
