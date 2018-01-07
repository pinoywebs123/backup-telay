import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PictureStartPage } from './picture-start';

@NgModule({
  declarations: [
    PictureStartPage,
  ],
  imports: [
    IonicPageModule.forChild(PictureStartPage),
  ],
})
export class PictureStartPageModule {}
