import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';


@IonicPage()
@Component({
  selector: 'page-student-score',
  templateUrl: 'student-score.html',
})
export class StudentScorePage {
  code:any;
  fname:string;
  lname: string;
  
  score: any;
  time: any;
  speed: any;
  compre: any;
  fspeed: any;
  fcompre: any;
  summary: any;

  score2: any;
  time2: any;
  speed2: any;
  compre2: any;
  fspeed2: any;
  fcompre2: any;
  summary2: any;

  ascore: any;
  bscore:any;
  dscore :any;
  escore :any;
  gscore :any;
  hscore :any;
  iscore :any;
  kscore :any;
  lscore :any;
  mscore :any;
  nscore :any;
  ngscore :any;
  oscore :any;
  pscore :any;
  rscore :any;
  sscore :any;
  tscore :any;
  uscore :any;
  wscore :any;
  yscore :any;
  cscore : any;
  fscore : any;
  jscore : any;
  qscore : any;
  vscore : any;
  xscore : any;
  zscore : any;

  score3 : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private sqlite: SQLite) {
    this.code = navParams.get("code");
    this.fname = navParams.get("fname");
    this.lname = navParams.get("lname");
  }

  ionViewDidLoad() {
    this.getData();
    this.getExercise();
    this.getPostest();
    this.getNumeracy();
  }

  getData() {
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    }).then((db: SQLiteObject) => { 
      db.executeSql('SELECT * FROM pretest where code="'+this.code+'"', {})
      .then(res => {
        
        if(res.rows.length > 0) {
          this.score = res.rows.item(0).score;
          this.time = res.rows.item(0).time;
          this.speed = (40 * 60) / this.time;
          this.speed = this.speed.toFixed(2);
          this.compre = (this.score * 100) / 5;
         this.compre = this.compre.toFixed(2);

          if(this.speed > 100){
            this.fspeed = "Fast";
          }else if(this.speed > 61 && this.speed < 99){
            this.fspeed = 'Average';
          }else if(this.speed < 60 ){
            this.fspeed = 'Slow';
          }

          if(this.compre > 90){
            this.fcompre = 'Independent';
          }else if(this.compre > 75 && this.compre < 89){
            this.fcompre = 'Instructional';
          }else if(this.compre < 75){
            this.fcompre = 'Frustration';
          }

          if(this.fspeed == "Fast" && this.fcompre == "Independent"){
            this.summary = "Independent";
          }else if(this.fspeed == "Fast" && this.fcompre == "Instructional"){
            this.summary = "Instructional";
          }else if(this.fspeed == "Fast" && this.fcompre == "Frustration"){
            this.summary = "Frustration";
          }else if(this.fspeed == "Average" && this.fcompre == "Independent"){
            this.summary = "Independent";
          }else if(this.fspeed == "Average" && this.fcompre == "Instructional"){
            this.summary = "Instructional";
          }else if(this.fspeed == "Average" && this.fcompre == "Frustration"){
            this.summary = "Frustration";
          }else if(this.fspeed == "Slow" && this.fcompre == "Independent"){
            this.summary = "Instructional";
          }else if(this.fspeed == "Slow" && this.fcompre == "Instructional"){
            this.summary = "Instructional";
          }else if(this.fspeed == "Slow" && this.fcompre == "Frustration"){
            this.summary = "Frustration";
          }
        }
      })
      .catch(e => console.log(e));
    })
   

  }

  getExercise(){
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    }).then((db: SQLiteObject) => { 
      db.executeSql('SELECT * FROM exercise where code="'+this.code+'"', {})
      .then(res => {
       
        if(res.rows.length > 0) {
          this.ascore = res.rows.item(0).a;
          this.bscore = res.rows.item(0).b;
          this.dscore = res.rows.item(0).d;
          this.escore = res.rows.item(0).e;
          this.gscore = res.rows.item(0).g;

          this.hscore = res.rows.item(0).h;
          this.iscore = res.rows.item(0).i;
          this.kscore = res.rows.item(0).k;
          this.lscore = res.rows.item(0).l;
          this.mscore = res.rows.item(0).m;

          this.nscore = res.rows.item(0).n;
          this.ngscore = res.rows.item(0).ng;
          this.oscore = res.rows.item(0).o;
          this.pscore = res.rows.item(0).p;
          this.rscore = res.rows.item(0).r;

         
          this.sscore = res.rows.item(0).s;
          this.tscore = res.rows.item(0).t;
          this.uscore = res.rows.item(0).u;
          this.wscore = res.rows.item(0).w;
          this.yscore = res.rows.item(0).y;

          this.cscore = res.rows.item(0).c;
          this.fscore = res.rows.item(0).f;
          this.jscore = res.rows.item(0).j;
          this.qscore = res.rows.item(0).q;
          this.vscore = res.rows.item(0).v;
          this.xscore = res.rows.item(0).x;
          this.zscore = res.rows.item(0).z;
          
          
        }
      })
      .catch(e => console.log(e));
    })
  }

  getPostest(){
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    }).then((db: SQLiteObject) => { 
      db.executeSql('SELECT * FROM postest where code="'+this.code+'"', {})
      .then(res => {
        
        if(res.rows.length > 0) {
          this.score2 = res.rows.item(0).score;
          this.time2 = res.rows.item(0).time;
          this.speed2 = (40 * 60) / this.time2;
          this.speed2 = this.speed2.toFixed(2);
          this.compre2 = (this.score2 * 100) / 5;
         this.compre2 = this.compre2.toFixed(2);

          if(this.speed2 > 100){
            this.fspeed2 = "Fast";
          }else if(this.speed2 > 61 && this.speed2 < 99){
            this.fspeed2 = 'Average';
          }else if(this.speed2 < 60 ){
            this.fspeed2 = 'Slow';
          }

          if(this.compre2 > 90){
            this.fcompre2 = 'Independent';
          }else if(this.compre2 > 75 && this.compre2 < 89){
            this.fcompre2 = 'Instructional';
          }else if(this.compre2 < 75){
            this.fcompre2 = 'Frustration';
          }

          if(this.fspeed2 == "Fast" && this.fcompre2 == "Independent"){
            this.summary2 = "Independent";
          }else if(this.fspeed2 == "Fast" && this.fcompre2 == "Instructional"){
            this.summary2 = "Instructional";
          }else if(this.fspeed2 == "Fast" && this.fcompre2 == "Frustration"){
            this.summary2 = "Frustration";
          }else if(this.fspeed2 == "Average" && this.fcompre2 == "Independent"){
            this.summary2 = "Independent";
          }else if(this.fspeed2 == "Average" && this.fcompre2 == "Instructional"){
            this.summary2 = "Instructional";
          }else if(this.fspeed2 == "Average" && this.fcompre2 == "Frustration"){
            this.summary2 = "Frustration";
          }else if(this.fspeed2 == "Slow" && this.fcompre2 == "Independent"){
            this.summary2 = "Instructional";
          }else if(this.fspeed2 == "Slow" && this.fcompre2 == "Instructional"){
            this.summary2 = "Instructional";
          }else if(this.fspeed2 == "Slow" && this.fcompre2 == "Frustration"){
            this.summary2 = "Frustration";
          }
        }
      })
      .catch(e => console.log(e));
    })
  }

  getNumeracy(){
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    }).then((db: SQLiteObject) => { 
      db.executeSql('SELECT * FROM numeracy where code="'+this.code+'"', {})
      .then(res => {
        
        if(res.rows.length > 0) {
          this.score3 = res.rows.item(0).score;
          
        }
      })
      .catch(e => console.log(e));
    })
  }

}
