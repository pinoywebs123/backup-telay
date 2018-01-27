import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

import { ExamPage } from '../exam/exam'; 

@IonicPage()
@Component({
  selector: 'page-numeracy',
  templateUrl: 'numeracy.html',
})
export class NumeracyPage {
  ans1: any;
  ans2: any;
  ans3: any;
  ans4: any;
  ans5: any;
  ans6: any;
  ans7: any;
  ans8: any;
  ans9: any;
  ans10: any;
  ans11: any;
  ans12: any;
  score: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,private sqlite: SQLite) {
    this.ans10 = 0;
    this.ans11 = 0;
    this.ans12 = 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NumeracyPage');
  }

  clickFinished(){
    this.score = 0;
    if(this.ans1 == "b"){
      this.score += 1;
    }
    if(this.ans2 == "b"){
      this.score += 1;
    }
    if(this.ans3 == "b"){
      this.score += 1;
    }
    if(this.ans4 == "a"){
      this.score += 1;
    }
    if(this.ans5 == "a"){
      this.score += 1;
    }
    if(this.ans6 == "b"){
      this.score += 1;
    }
    if(this.ans7 == "b"){
      this.score += 1;
    }
    if(this.ans8 == "b"){
      this.score += 1;
    }
    if(this.ans9 == "a"){
      this.score += 1;
    }
    if(this.ans10 == 2){
      this.score += 1;
    }
    if(this.ans11 == 6){
      this.score += 1;
    }
    if(this.ans12 == 5){
      this.score += 1;
    }
    
    // alert(this.score);
    this.saveData();
  }

  registerUser() {
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('INSERT INTO numeracy(code,score) VALUES(?,?)',[localStorage.getItem("code"), this.score])
        .then(res => {
          console.log(res);
          
          
          this.navCtrl.setRoot(ExamPage);
          
  
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

  saveData() {
    let confirm = this.alertCtrl.create({
      title: 'Are you finished taking All Exams?',
      message: 'If you are finished answering all questions. Click Agree to exit.',
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
            this.registerUser();
          }
        }
      ]
    });
    confirm.present();
  }

}
