import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pretest2Page } from '../pretest2/pretest2';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pretest',
  templateUrl: 'pretest.html',
})
export class PretestPage {
  time = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
    
    setInterval((function () {
      this.countTime();
    }).bind(this), 1000);
    
    
  }

  ionViewDidLoad() {
    
  }

   countTime(){
    this.time = this.time + 1;
    
   }

  
   clickTest() {
    let confirm = this.alertCtrl.create({
      title: 'Are you finished reading?',
      message: 'If you are finished reading and understand it. Click Agree to proceed.!',
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
            this.navCtrl.setRoot(Pretest2Page, {time:this.time});
          }
        }
      ]
    });
    confirm.present();
  }

   

  

}
