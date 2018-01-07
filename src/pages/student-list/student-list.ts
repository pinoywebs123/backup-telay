import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { StudentScorePage } from '../student-score/student-score';

@IonicPage()
@Component({
  selector: 'page-student-list',
  templateUrl: 'student-list.html',
})
export class StudentListPage {
  student: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private sqlite: SQLite) {
  }

  ionViewDidEnter() {
    this.getData();
  }

  getData() {
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    }).then((db: SQLiteObject) => { 
      db.executeSql('SELECT * FROM learning ORDER BY rowid DESC', {})
      .then(res => {
        this.student = [];
        for(var i=0; i<res.rows.length; i++) {
          this.student.push({rowid:res.rows.item(i).rowid,fname:res.rows.item(i).fname,code:res.rows.item(i).code,lname:res.rows.item(i).lname})
        }
      })
      .catch(e => console.log(e));
    })
   

  }

  clickStudent(code,fname,lname){
    this.navCtrl.push(StudentScorePage,{code:code, fname:fname, lname: lname});
  }
      


}


