import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LetterExamPage } from './letter-exam';

@NgModule({
  declarations: [
    LetterExamPage,
  ],
  imports: [
    IonicPageModule.forChild(LetterExamPage),
  ],
})
export class LetterExamPageModule {}
