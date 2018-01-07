import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { LetterStartPage } from '../letter-start/letter-start';
import { ExamPage } from '../exam/exam'; 

@IonicPage()
@Component({
  selector: 'page-picture',
  templateUrl: 'picture.html',
})
export class PicturePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController, private sqlite: SQLite) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PicturePage');
  }

  nextTopic(){

    let confirm = this.alertCtrl.create({
      title: 'Are you sure?',
      message: 'Did you finished Read all Image Guides?',
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
            this.clickStart();
          }
        }
      ]
    });
    confirm.present();

    
   

  }

  clickStart(){
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('INSERT INTO exam(code) VALUES(?)',[localStorage.getItem("code")])
        .then(res => {
         
          this.navCtrl.pop();
      
        })
        .catch(e => {
          console.log(e);
          alert("something wrong contact admin");
        });
    }).catch(e => {
      console.log(e);
      alert("error");
    });

    
  }

}
