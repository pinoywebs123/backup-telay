import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { PretestPage } from '../pretest/pretest';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';
import { ExamPage } from '../exam/exam'; 
import { NativeAudio } from '@ionic-native/native-audio';

@IonicPage()
@Component({
  selector: 'page-create-account',
  templateUrl: 'create-account.html',
})
export class CreateAccountPage {
  data = { fname:"", grade:"", lname:"" };
  code :any;
  status: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private sqlite: SQLite,public alertCtrl: AlertController, private nativeAudio: NativeAudio) {
    this.code = Math.floor((Math.random() * 10000) + 1);
    this.status = 0;
     
  }

  ionViewDidLoad() {
    this.getData();
     
   
  }

  
  saveData() {
    if(this.data.lname == "" || this.data.fname == "" || this.data.grade == ""){
      alert("All fields are required!");
    }else{
      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('INSERT INTO learning(fname,grade,lname,code) VALUES(?,?,?,?)',[this.data.fname,this.data.grade,this.data.lname,this.code])
          .then(res => {
            console.log(res);
            let alert = this.alertCtrl.create({
              title: 'Success!',
              subTitle: 'Student has been Saved!',
              buttons: ['OK']
            });
            alert.present();

              localStorage.setItem("code", this.code);
              
              
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
    

    

  }

  getData() {
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
    
    
        db.executeSql('CREATE TABLE IF NOT EXISTS learning(rowid INTEGER PRIMARY KEY,fname VARCHAR(32),grade VARCHAR(32),lname VARCHAR(32),date VARCHAR(32),score VARCHAR(32),code VARCHAR(32),status VARCHAR(32))', {})
          .then(() => console.log("learning"))
          .catch(e => alert("query error"))
    
    
      })
      .catch(e => alert("error"));
  }

  

}
