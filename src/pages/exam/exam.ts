import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { CreateAccountPage } from '../create-account/create-account';
import { PretestPage } from '../pretest/pretest';
import { PictureStartPage } from '../picture-start/picture-start';
import { LetterStartPage } from '../letter-start/letter-start';
import { PicturePage } from '../picture/picture';
import { ProtestPage } from '../protest/protest';
import { AlertController } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';
import { NumeracyPage } from '../numeracy/numeracy';
@IonicPage()
@Component({
  selector: 'page-exam',
  templateUrl: 'exam.html',
})
export class ExamPage {

  one : any;
  two: any;
  three:any;
  fourth: any;
  five: any;
  fname: any;
  lname: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private sqlite: SQLite, public alertCtrl: AlertController, private nativeAudio: NativeAudio) {
    this.one = false;
    this.two = false;
    this.three = false;
    this.fourth = false;
    this.five = false;
    
  }

  ionViewDidEnter() {
    this.nativeAudio.preloadSimple('123', 'music/background.mp3').then();
    this.nativeAudio.play('123').then();
    
    
    this.makePretest();
    this.makeExercises();
    this.makePostest();
    this.makeExam();

    this.getPretest();
    this.getStudent();
    this.makeNumeracy();
    
  }

 

  clickRegister(){
    this.navCtrl.push(CreateAccountPage);
  }


  clickPretest(){
    if(localStorage.getItem("code") == null || localStorage.getItem("code") == ""){
      let alert = this.alertCtrl.create({
        title: 'oopS!',
        subTitle: 'You need to register first!',
        buttons: ['OK']
      });
      alert.present();
    }else{
      this.navCtrl.setRoot(PretestPage);
    }
    
  }

  getPretest(){
    
    /*GET PRETEST */
      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      }).then((db: SQLiteObject) => { 
        db.executeSql('SELECT * FROM pretest where code="'+localStorage.getItem("code")+'"', {})
        .then(res => {
         
          if(res.rows.length > 0) {
            this.one = true;
            if(this.one == true){
              this.sqlite.create({
                name: 'data.db',
                location: 'default'
              }).then((db: SQLiteObject) => { 
                db.executeSql('SELECT * FROM exam where code="'+localStorage.getItem("code")+'"', {})
                .then(res => {
                
                  if(res.rows.length > 0) {
                    this.two = true;
                    
                    if(this.one == true && this.two == true){
                      this.sqlite.create({
                        name: 'data.db',
                        location: 'default'
                      }).then((db: SQLiteObject) => { 
                        db.executeSql('SELECT * FROM exercise where code="'+localStorage.getItem("code")+'" AND status = 1', {})
                        .then(res => {
                         
                          if(res.rows.length > 0) {
                            this.three = true;
                            if(this.one == true && this.two == true && this.three == true){
                              this.sqlite.create({
                                name: 'data.db',
                                location: 'default'
                              }).then((db: SQLiteObject) => { 
                                db.executeSql('SELECT * FROM numeracy where code="'+localStorage.getItem("code")+'" ', {})
                                .then(res => {
                                 
                                  if(res.rows.length > 0) {
                                    this.fourth = true;
                                    
                                    
                                  }
                                })
                                .catch(e => console.log(e));
                              })
                            
                            }
                            
                            
                          }
                        })
                        .catch(e => console.log(e));
                      })
                    
                    }

                    
                  }
                })
                .catch(e => console.log(e));
              })
            
            }

            
          }
        })
        .catch(e => console.log(e));
      })

      /*GET IMAGE */

      

      /* GET EXERCISE */

      


    
  }

  getStudent(){
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    }).then((db: SQLiteObject) => { 
      db.executeSql('SELECT * FROM learning where code="'+localStorage.getItem("code")+'"', {})
      .then(res => {
       
        if(res.rows.length > 0) {
          this.fname = res.rows.item(0).fname;
          this.lname = res.rows.item(0).lname;
          
        }
       
      })
      .catch(e => console.log(e));
    })
      
  }

  clickImage(){
    if(this.one == true){
      this.navCtrl.push(PicturePage);
    }
  }

  getExercise(){
    
     
  }
  
  clickExercise(){
    if(this.one == true && this.two == true){
      this.navCtrl.push(LetterStartPage);
    }
  }

  clickProtest(){
    if(this.one == true && this.two == true && this.three == true && this.fourth == true){
      this.navCtrl.setRoot(ProtestPage);
    }
  }

  clickNumeracy(){
    if(this.one == true && this.two == true && this.three == true){
      this.navCtrl.setRoot(NumeracyPage);
    }
  }

  

  makePretest(){
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
    
    
        db.executeSql('CREATE TABLE IF NOT EXISTS pretest(time VARCHAR(32),score VARCHAR(32),code VARCHAR(32),date VARCHAR(32))', {})
          .then(() => console.log("pretest"))
          .catch(e => alert("query error"))
    
    
      })
      .catch(e => alert("error"));

  }
    
  makeExercises(){
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
    
    
        db.executeSql('CREATE TABLE IF NOT EXISTS exercise(code VARCHAR(32),status VARCHAR(2),a VARCHAR(5),b VARCHAR(5),d VARCHAR(5),e VARCHAR(5),g VARCHAR(5),h VARCHAR(5),i VARCHAR(5),k VARCHAR(5),l VARCHAR(5),m VARCHAR(5),n VARCHAR(5),ng VARCHAR(5),o VARCHAR(5),p VARCHAR(5),r VARCHAR(5),s VARCHAR(5),t VARCHAR(5),u VARCHAR(5),w VARCHAR(5),y VARCHAR(5),c VARCHAR(5),f VARCHAR(5),j VARCHAR(5),q VARCHAR(5),v VARCHAR(5),x VARCHAR(5),z VARCHAR(5))', {})
          .then(() => console.log("exercise table ok"))
          .catch(e => alert("query error"))
    
    
      })
      .catch(e => alert("error"));
  } 
     
  makePostest(){
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
    
    
        db.executeSql('CREATE TABLE IF NOT EXISTS postest(time VARCHAR(32),score VARCHAR(32),code VARCHAR(32),date VARCHAR(32))', {})
          .then(() => console.log("postest ok"))
          .catch(e => alert("query error"))
    
    
      })
      .catch(e => alert("error"));

  } 

  makeExam() {
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
    
    
        db.executeSql('CREATE TABLE IF NOT EXISTS exam(id INTEGER PRIMARY KEY,code VARCHAR(32))', {})
          .then(() => console.log("make exam"))
          .catch(e => alert("query error"))
    
    
      })
      .catch(e => alert("error"));
  }

  makeNumeracy() {
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
    
    
        db.executeSql('CREATE TABLE IF NOT EXISTS numeracy(code VARCHAR(32),score VARCHAR(32))', {})
          .then(() => console.log("make exam"))
          .catch(e => alert("query error"))
    
    
      })
      .catch(e => alert("error"));
  }
 

}