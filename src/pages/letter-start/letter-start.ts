import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LetterExamPage } from '../letter-exam/letter-exam';
import { ProtestPage } from '../protest/protest';
import { AlertController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { ExamPage } from '../exam/exam'; 
import { NativeAudio } from '@ionic-native/native-audio';

@IonicPage()
@Component({
  selector: 'page-letter-start',
  templateUrl: 'letter-start.html',
})
export class LetterStartPage {
  data : any;
  he: any;
  mycode: any;
  getpop : any;
  a: any;
  b:any;
  d:any;
  e: any;
  g: any;
  h: any;
  i: any;
  k: any;
  l: any;
  m: any;
  n: any;
  ng: any;
  o: any;
  p: any;
  r: any;
  s: any;
  t: any;
  u: any;
  w: any;
  y: any;

  c: any;
  f: any;
  j: any;
  q: any;
  v: any;
  x: any;
  z: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController, private sqlite: SQLite, private nativeAudio: NativeAudio) {
    this.data = [
     {'id': 1,'letter': 'A','status': 0},
     {'id': 2,'letter': 'B','status': 0},
     {'id': 3,'letter': 'C','status': 0},
     {'id': 4,'letter': 'D','status': 0},
     {'id': 5,'letter': 'E','status': 0},

     {'id': 54,'letter': 'F','status': 0},

     {'id': 6,'letter': 'G','status': 0},
     {'id': 7,'letter': 'H','status': 0},
     {'id': 8,'letter': 'I','status': 0},
     
     {'id': 84,'letter': 'J','status': 0},

     {'id': 9,'letter': 'K','status': 0},
     {'id': 10,'letter': 'L','status': 0},

     {'id': 11,'letter': 'M','status': 0},
     {'id': 12,'letter': 'N','status': 0},
     
     {'id': 14,'letter': 'O','status': 0},
     {'id': 15,'letter': 'P','status': 0},

     {'id': 154,'letter': 'Q','status': 0},

     {'id': 16,'letter': 'R','status': 0},
     {'id': 17,'letter': 'S','status': 0},
     {'id': 18,'letter': 'T','status': 0},
     {'id': 19,'letter': 'U','status': 0},

     {'id': 194,'letter': 'V','status': 0},

     {'id': 20,'letter': 'W','status': 0},

     {'id': 204,'letter': 'X','status': 0},

     {'id': 21,'letter': 'Y','status': 0},

     {'id': 214,'letter': 'Z','status': 0},


    ];

    
    this.checkLetters();
   

  }

  ionViewDidEnter() {
    this.nativeAudio.stop('123').then();
    this.checkLetters();
  }

  clickLetter(id,letter){
    if(letter == "A"){
      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('INSERT INTO exercise(code,status) VALUES(?,?)',[localStorage.getItem("code"),0])
          .then(res => {
          
           this.data.forEach(we => {
            if(we.id == id){
              if(we.status == 1){
                alert("you already took the exam, choose another!");
              }else{
               
               
                this.navCtrl.push(LetterExamPage, {id: id, letter: letter})
              }
            }
          });
        
          })
          .catch(e => {
            console.log(e);
            alert("something wrong contact admin");
          });
      }).catch(e => {
        console.log(e);
        alert("error");
      });

    }else{
      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('SELECT * FROM exercise where code="'+localStorage.getItem("code")+'"', {})
          .then(res => {
          
  
           if(res.rows.length > 0) {
            this.data.forEach(we => {
              if(we.id == id){
                if(we.status == 1){
                  alert("you already took the exam, choose another!");
                }else{
                 
                 
                  this.navCtrl.push(LetterExamPage, {id: id, letter: letter})
                }
              }
            });

            
          
  
           }else{
              alert("Kindly start the exercise letter A");
           }
        
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

  clickFinished(){
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
            
            this.sqlite.create({
              name: 'data.db',
              location: 'default'
            }).then((db: SQLiteObject) => {
              db.executeSql('UPDATE exercise SET status=? where code=?',[1, localStorage.getItem("code")])
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
      ]
    });
    confirm.present();

   
  }

  checkLetters(){
     

          this.sqlite.create({
            name: 'data.db',
            location: 'default'
          }).then((db: SQLiteObject) => { 
            db.executeSql('SELECT * FROM exercise where code="'+localStorage.getItem("code")+'"', {})
            .then(res => {
             
              if(res.rows.length > 0) {
                this.a = res.rows.item(0).a;
                this.b = res.rows.item(0).b;
                this.d = res.rows.item(0).d;
                this.e = res.rows.item(0).e;
                this.g = res.rows.item(0).g;

                this.h = res.rows.item(0).h;
                this.i = res.rows.item(0).i;
                this.k = res.rows.item(0).k;
                this.l = res.rows.item(0).l;
                this.m = res.rows.item(0).m;

                this.n = res.rows.item(0).n;
                this.ng = res.rows.item(0).ng;
                this.o = res.rows.item(0).o;
                this.p = res.rows.item(0).p;
                this.r = res.rows.item(0).r;

                this.s = res.rows.item(0).s;
                this.t = res.rows.item(0).t;
                this.u = res.rows.item(0).u;
                this.w = res.rows.item(0).w;
                this.y = res.rows.item(0).y;

                this.c = res.rows.item(0).c;
                this.f = res.rows.item(0).f;
                this.j = res.rows.item(0).j;
                this.q = res.rows.item(0).q;
                this.v = res.rows.item(0).v;
                this.x = res.rows.item(0).x;
                this.z = res.rows.item(0).z;

              }

             
              
              this.data.forEach(we => {

                if(we.letter == "A"){
                  if( this.a != null ){
                    we.status = 1
                   }else{
                     we.status = 0;
                   }
                }

                if(we.letter == "B"){
                  if(this.b != null ){
                    we.status = 1
                   }else{
                    we.status = 0;
                  }
                }

                if(we.letter == "D"){
                  if(this.d != null ){
                    we.status = 1
                   }else{
                    we.status = 0;
                  }
                }

                if(we.letter == "E"){
                  if(this.e != null ){
                    we.status = 1
                   }else{
                    we.status = 0;
                  }
                }

                if(we.letter == "G"){
                  if(this.g != null ){
                    we.status = 1
                   }else{
                    we.status = 0;
                  }
                }

                if(we.letter == "H"){
                  if(this.h != null ){
                    we.status = 1
                   }else{
                    we.status = 0;
                  }
                }

                if(we.letter == "I"){
                  if(this.i != null ){
                    we.status = 1
                   }else{
                    we.status = 0;
                  }
                }

                if(we.letter == "K"){
                  if(this.k != null ){
                    we.status = 1
                   }else{
                    we.status = 0;
                  }
                }

                if(we.letter == "L"){
                  if(this.l != null ){
                    we.status = 1
                   }else{
                    we.status = 0;
                  }
                }

                if(we.letter == "M"){
                  if(this.m != null ){
                    we.status = 1
                   }else{
                    we.status = 0;
                  }
                }

                if(we.letter == "N"){
                  if(this.n != null ){
                    we.status = 1
                   }else{
                    we.status = 0;
                  }
                }

                if(we.letter == "NG"){
                  if(this.ng != null ){
                    we.status = 1
                   }else{
                    we.status = 0;
                  }
                }

                if(we.letter == "O"){
                  if(this.o != null ){
                    we.status = 1
                   }else{
                    we.status = 0;
                  }
                }

                if(we.letter == "P"){
                  if(this.p != null ){
                    we.status = 1
                   }else{
                    we.status = 0;
                  }
                }

                if(we.letter == "R"){
                  if(this.r != null ){
                    we.status = 1
                   }else{
                    we.status = 0;
                  }
                }

                if(we.letter == "S"){
                  if(this.s != null ){
                    we.status = 1
                   }else{
                    we.status = 0;
                  }
                }

                if(we.letter == "T"){
                  if(this.t != null ){
                    we.status = 1
                   }else{
                    we.status = 0;
                  }
                }

                if(we.letter == "U"){
                  if(this.u != null ){
                    we.status = 1
                   }else{
                    we.status = 0;
                  }
                }

                if(we.letter == "W"){
                  if(this.w != null ){
                    we.status = 1
                   }else{
                    we.status = 0;
                  }
                }

                if(we.letter == "Y"){
                  if(this.y != null ){
                    we.status = 1
                   }else{
                    we.status = 0;
                  }
                }

                if(we.letter == "C"){
                  if(this.c != null ){
                    we.status = 1
                   }else{
                    we.status = 0;
                  }
                }

                if(we.letter == "F"){
                  if(this.f != null ){
                    we.status = 1
                   }else{
                    we.status = 0;
                  }
                }

                if(we.letter == "J"){
                  if(this.j != null ){
                    we.status = 1
                   }else{
                    we.status = 0;
                  }
                }

                if(we.letter == "Q"){
                  if(this.q != null ){
                    we.status = 1
                   }else{
                    we.status = 0;
                  }
                }

                if(we.letter == "V"){
                  if(this.v != null ){
                    we.status = 1
                   }else{
                    we.status = 0;
                  }
                }

                if(we.letter == "X"){
                  if(this.x != null ){
                    we.status = 1
                   }else{
                    we.status = 0;
                  }
                }

                if(we.letter == "Z"){
                  if(this.z != null ){
                    we.status = 1
                   }else{
                    we.status = 0;
                  }
                }


               });
             
            })
            .catch(e => console.log(e));
          })

  }



}
