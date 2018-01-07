import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Protest2Page } from '../protest2/protest2';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-protest',
  templateUrl: 'protest.html',
})
export class ProtestPage {
  time = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
    setInterval((function () {
      this.countTime();
    }).bind(this), 1000);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProtestPage');
  }

  countTime(){
    this.time = this.time + 1;
    
   }

  clickSubmit(){
    let confirm = this.alertCtrl.create({
      title: 'Are you sure?',
      message: 'Did you finished answer all Exercises?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            this.navCtrl.setRoot(Protest2Page, {time: this.time});
          }
        }
      ]
    });
    confirm.present();

    
  }

}
