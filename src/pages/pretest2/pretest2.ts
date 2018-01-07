import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

import { AlertController } from 'ionic-angular';
import { PictureStartPage } from '../picture-start/picture-start';
import { ExamPage } from '../exam/exam'; 
@IonicPage()
@Component({
  selector: 'page-pretest2',
  templateUrl: 'pretest2.html',
})
export class Pretest2Page {
  ans1: any;
  ans2: any;
  ans3: any;
  ans4: any;
  ans5: any;
  ans6: any;
  ans7: any;
  score: any;
  time:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private sqlite: SQLite,public alertCtrl: AlertController) {
    this.score = 0;
    this.time = navParams.get("time");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pretest2Page');
  }
  pretest(){
    if(this.ans1 == null || this.ans2 == null || this.ans3 == null || this.ans4 == null || this.ans5 == null){
      alert("You need to answer all questions!");
    }else{
      if(this.ans1 == "a"){
        this.score += 1; 
      }
      if(this.ans2 == "b"){
        this.score += 1; 
      }
      if(this.ans3 == "d"){
        this.score += 1; 
      }
      if(this.ans4 == "a"){
        this.score += 1; 
      }
      if(this.ans5 == "a"){
        this.score += 1; 
      }
      
      this.saveData();
      
    }
  }

  registerUser() {
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('INSERT INTO pretest(time,score,code) VALUES(?,?,?)',[this.time,this.score,localStorage.getItem("code")])
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
      title: 'Are you finished taking Pretest Exam?',
      message: 'If you are finished answering all questions. Click Agree to proceed.!',
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
