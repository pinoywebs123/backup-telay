import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PicturePage } from '../picture/picture';



@IonicPage()
@Component({
  selector: 'page-picture-start',
  templateUrl: 'picture-start.html',
})
export class PictureStartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PictureStartPage');
  }

  clickStart(){
    this.navCtrl.setRoot(PicturePage);
    
  }

}
