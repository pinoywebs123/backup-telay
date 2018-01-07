import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProtestPage } from './protest';

@NgModule({
  declarations: [
    ProtestPage,
  ],
  imports: [
    IonicPageModule.forChild(ProtestPage),
  ],
})
export class ProtestPageModule {}
