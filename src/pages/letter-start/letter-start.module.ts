import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LetterStartPage } from './letter-start';

@NgModule({
  declarations: [
    LetterStartPage,
  ],
  imports: [
    IonicPageModule.forChild(LetterStartPage),
  ],
})
export class LetterStartPageModule {}
