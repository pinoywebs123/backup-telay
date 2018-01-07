import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { get } from '@ionic-native/core';
import { LetterStartPage } from '../letter-start/letter-start';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { NativeAudio } from '@ionic-native/native-audio';

@IonicPage()
@Component({
  selector: 'page-letter-exam',
  templateUrl: 'letter-exam.html',
})
export class LetterExamPage {
  exid: any;
  letter: any;
  a:any;
  b: any;
  c:any;
  d:any;
  e:any;
  f:any;
  g:any;
  ascore = 0;
  bscore = 0;
  dscore = 0;
  escore = 0;
  gscore = 0;
  hscore = 0;
  iscore = 0;
  kscore = 0;
  lscore = 0;
  mscore = 0;
  nscore = 0;
  ngscore = 0;
  oscore = 0;
  pscore = 0;
  rscore = 0;
  sscore = 0;
  tscore = 0;
  uscore = 0;
  wscore = 0;
  yscore = 0;

  cscore = 0;
  fscore = 0;
  jscore = 0;
  qscore = 0;
  vscore = 0;
  xscore = 0;
  zscore = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, private sqlite: SQLite, private nativeAudio: NativeAudio) {
    this.exid = navParams.get("id");
    this.letter =  navParams.get("letter");
    
    
  }

  ionViewDidLoad() {
    
    this.nativeAudio.preloadSimple('apple', 'sounds/Apple.mp3').then();
    this.nativeAudio.preloadSimple('arrow', 'sounds/Arrow.mp3').then();
  }

  clickImage(lamun){
    
      if(lamun == "apple"){
        this.nativeAudio.play('apple').then();
      }else if( lamun == "arrow"){
        this.nativeAudio.play('arrow').then();
      }
  }

  clickLetterExam(letter){
    if(letter == "A"){
      if(this.a == true){
        this.ascore += 1;
      }
      if(this.b == true){
        this.ascore += 1;
      }
      if(this.c == true){
        this.ascore += 1;
      }
      
      
      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('UPDATE exercise SET a=? where code=?',[this.ascore, localStorage.getItem("code")])
          .then(res => {
           
            
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

    if(letter == "B"){
      
      if(this.b.toLowerCase() == "basket"){
        this.bscore += 1;
      }
      if(this.c.toLowerCase() == "boy"){
        this.bscore += 1;
      }
      if(this.d.toLowerCase() == "ball"){
        this.bscore += 1;
      }

      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('UPDATE exercise SET b=? where code=?',[this.bscore, localStorage.getItem("code")])
          .then(res => {
           
        
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
      
    

    if(letter == "D"){
      if(this.a == true){
        this.dscore += 1;
      }
      if(this.b == true){
        this.dscore += 1;
      }
      if(this.c == true){
        this.dscore += 1;
      }
      if(this.d == true){
        this.dscore += 1;
      }
      if(this.e == true){
        this.dscore += 1;
      }
      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('UPDATE exercise SET d=? where code=?',[this.dscore, localStorage.getItem("code")])
          .then(res => {
           
        
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

    if(letter == "E"){
      if(this.a.toLowerCase() == "ear"){
        this.escore += 1;
      }
      if(this.b.toLowerCase() == "eggplant"){
        this.escore += 1;
      }
      if(this.c.toLowerCase() == "elephant"){
        this.escore += 1;
      }
     
      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('UPDATE exercise SET e=? where code=?',[this.escore, localStorage.getItem("code")])
          .then(res => {
           
        
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

    if(letter == "G"){
      if(this.a.toLowerCase() == "goat"){
        this.gscore += 1;
      }
      
      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('UPDATE exercise SET g=? where code=?',[this.gscore, localStorage.getItem("code")])
          .then(res => {
           
        
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

    if(letter == "H"){
      if(this.a == true){
        this.hscore += 1;
      }
      
      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('UPDATE exercise SET h=? where code=?',[this.hscore, localStorage.getItem("code")])
          .then(res => {
          
        
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

    if(letter == "I"){
     
      if(this.c == true){
        this.iscore += 1;
      }
      
      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('UPDATE exercise SET i=? where code=?',[this.iscore, localStorage.getItem("code")])
          .then(res => {
           
        
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

    if(letter == "K"){
      if(this.b == true){
        this.kscore += 1;
      }
      if(this.c == true){
        this.kscore += 1;
      }
     
      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('UPDATE exercise SET k=? where code=?',[this.kscore, localStorage.getItem("code")])
          .then(res => {
          
        
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

    if(letter == "L"){
      if(this.c == true){
        this.lscore += 1;
      }
     
      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('UPDATE exercise SET l=? where code=?',[this.lscore, localStorage.getItem("code")])
          .then(res => {
           
        
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

    if(letter == "M"){
      if(this.a.toLowerCase() == "mango"){
        this.mscore += 1;
      }
      if(this.b.toLowerCase() == "monkey"){
        this.mscore += 1;
      }
      if(this.c.toLowerCase() == "moon"){
        this.mscore += 1;
      }

      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('UPDATE exercise SET m=? where code=?',[this.mscore, localStorage.getItem("code")])
          .then(res => {
           
        
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

    if(letter == "N"){
      if(this.a.toLowerCase() == "nail"){
        this.nscore += 1;
      }
      if(this.b.toLowerCase() == "nest"){
        this.nscore += 1;
      }
      if(this.c.toLowerCase() == "nine"){
        this.nscore += 1;
      }
     
      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('UPDATE exercise SET n=? where code=?',[this.nscore, localStorage.getItem("code")])
          .then(res => {
           
        
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

    if(letter == "NG"){
      if(this.a.toLowerCase() == "ngipin"){
        this.ngscore += 1;
      }
      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('UPDATE exercise SET ng=? where code=?',[this.ngscore, localStorage.getItem("code")])
          .then(res => {
          
        
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

    if(letter == "O"){
      if(this.a.toLowerCase() == "octupos"){
        this.oscore += 1;
      }
      if(this.b.toLowerCase() == "okra"){
        this.oscore += 1;
      }
      if(this.c.toLowerCase() == "orange"){
        this.oscore += 1;
      }
     
      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('UPDATE exercise SET o=? where code=?',[this.oscore, localStorage.getItem("code")])
          .then(res => {
           
        
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

    if(letter == "P"){
     
      if(this.c == true){
        this.pscore += 1;
      }
     
      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('UPDATE exercise SET p=? where code=?',[this.pscore, localStorage.getItem("code")])
          .then(res => {
          
        
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

    if(letter == "R"){
      if(this.a == "rabbit"){
        this.rscore += 1;
      }
     

      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('UPDATE exercise SET r=? where code=?',[this.rscore, localStorage.getItem("code")])
          .then(res => {
          
        
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

    if(letter == "S"){
      if(this.a == "star"){
        this.sscore += 1;
      }
      
      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('UPDATE exercise SET s=? where code=?',[this.sscore, localStorage.getItem("code")])
          .then(res => {
           
        
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

    if(letter == "T"){
      if(this.a == "turtle"){
        this.tscore += 1;
      }
      
      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('UPDATE exercise SET t=? where code=?',[this.tscore, localStorage.getItem("code")])
          .then(res => {
          
        
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

    if(letter == "U"){
      if(this.a == "umbrella"){
        this.uscore += 1;
      }
      

      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('UPDATE exercise SET u=? where code=?',[this.uscore, localStorage.getItem("code")])
          .then(res => {
           
        
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

    if(letter == "W"){
      if(this.a == "watch"){
        this.wscore += 1;
      }
     

      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('UPDATE exercise SET w=? where code=?',[this.wscore, localStorage.getItem("code")])
          .then(res => {
           
        
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

    if(letter == "Y"){
      if(this.a == "yoyo"){
        this.yscore += 1;
      }

      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('UPDATE exercise SET y=? where code=?',[this.yscore, localStorage.getItem("code")])
          .then(res => {
           
        
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

    if(letter == "C"){
      if(this.a == "candle"){
        this.cscore += 1;
      }

      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('UPDATE exercise SET c=? where code=?',[this.cscore, localStorage.getItem("code")])
          .then(res => {
           
        
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

    if(letter == "F"){
      if(this.a == "fish"){
        this.fscore += 1;
      }

      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('UPDATE exercise SET f=? where code=?',[this.fscore, localStorage.getItem("code")])
          .then(res => {
           
        
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

    if(letter == "J"){
      if(this.a == "jacket"){
        this.jscore += 1;
      }

      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('UPDATE exercise SET j=? where code=?',[this.jscore, localStorage.getItem("code")])
          .then(res => {
           
        
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

    if(letter == "Q"){
      if(this.a == "queen"){
        this.qscore += 1;
      }

      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('UPDATE exercise SET q=? where code=?',[this.qscore, localStorage.getItem("code")])
          .then(res => {
           
        
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

    if(letter == "V"){
      if(this.a == "violin"){
        this.vscore += 1;
      }

      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('UPDATE exercise SET v=? where code=?',[this.vscore, localStorage.getItem("code")])
          .then(res => {
           
        
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

    if(letter == "X"){
      if(this.a == "xylophone"){
        this.xscore += 1;
      }

      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('UPDATE exercise SET x=? where code=?',[this.xscore, localStorage.getItem("code")])
          .then(res => {
           
        
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

    if(letter == "Z"){
      if(this.a == "zebra"){
        this.zscore += 1;
      }

      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('UPDATE exercise SET z=? where code=?',[this.zscore, localStorage.getItem("code")])
          .then(res => {
           
        
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


 
    this.navCtrl.pop();
  }

  
  
}
