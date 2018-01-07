import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentScorePage } from './student-score';

@NgModule({
  declarations: [
    StudentScorePage,
  ],
  imports: [
    IonicPageModule.forChild(StudentScorePage),
  ],
})
export class StudentScorePageModule {}
