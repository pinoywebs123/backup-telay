import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { get } from '@ionic-native/core';
import { LetterStartPage } from '../letter-start/letter-start';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { NativeAudio } from '@ionic-native/native-audio';
import { Nav, Platform } from 'ionic-angular';
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
  constructor(public platform: Platform, public navCtrl: NavController, public navParams: NavParams, private sqlite: SQLite, private nativeAudio: NativeAudio) {
    this.exid = navParams.get("id");
    this.letter =  navParams.get("letter");
    
    
  }

  ionViewDidLoad() {
    
    
   
    
    
  }

  clickImage(lamun){
    
      if(lamun == 1){
        this.nativeAudio.preloadSimple('apple', 'assets/sounds/Apple.mp3').then();
        this.nativeAudio.play('apple')
        ;
      }else if( lamun == 2){
        this.nativeAudio.preloadSimple('arrow', 'assets/sounds/Arrow.mp3');
        this.nativeAudio.play('arrow');
        this.nativeAudio.unload('apple').then()
        
      }else if( lamun == 3){
        this.nativeAudio.preloadSimple('ax', 'assets/sounds/Ax.mp3');
        this.nativeAudio.play('ax');
        this.nativeAudio.unload('arrow').then();
        
      }else if( lamun == 4){
        this.nativeAudio.preloadSimple('basket', 'assets/sounds/Basket.mp3');
        this.nativeAudio.play('basket');
        this.nativeAudio.unload('ax').then();
        
      }else if( lamun == 5){
        this.nativeAudio.preloadSimple('boy', 'assets/sounds/Boy.mp3');
        this.nativeAudio.play('boy');
        this.nativeAudio.unload('basket').then();
        
      }else if( lamun == 6){
        this.nativeAudio.play('ball');
        this.nativeAudio.preloadSimple('ball', 'assets/sounds/Ball.mp3');
        this.nativeAudio.unload('boy').then();
        
      }else if( lamun == 7){
        this.nativeAudio.preloadSimple('doctor', 'assets/sounds/Doctor.mp3');
        this.nativeAudio.play('doctor');
        this.nativeAudio.unload('ball').then();
        
      }else if( lamun == 8){
        this.nativeAudio.preloadSimple('dog', 'assets/sounds/Dog.mp3');
        this.nativeAudio.play('dog');
        this.nativeAudio.unload('doctor').then();
        
        
      }else if( lamun == 9){
        this.nativeAudio.preloadSimple('door', 'assets/sounds/Door.mp3');
        this.nativeAudio.play('door');
        this.nativeAudio.unload('dog').then();
        
      }else if( lamun == 10){
        this.nativeAudio.preloadSimple('dance', 'assets/sounds/Dance.mp3');
        this.nativeAudio.play('dance');
        this.nativeAudio.unload('door').then();
        
      }else if( lamun == 11){
        this.nativeAudio.preloadSimple('ear', 'assets/sounds/Ear.mp3');
        this.nativeAudio.play('ear');
        this.nativeAudio.unload('dance').then();
        
      }else if( lamun == 12){
        this.nativeAudio.preloadSimple('eggplant', 'assets/sounds/Eggplant.mp3');
        this.nativeAudio.play('eggplant');
        this.nativeAudio.unload('ear').then();
        
      }else if( lamun == 13){
        this.nativeAudio.preloadSimple('elephant', 'assets/sounds/Elephant.mp3');
        this.nativeAudio.play('elephant');
        this.nativeAudio.unload('eggplant').then();
        
      }else if( lamun == 14){
        this.nativeAudio.preloadSimple('goat', 'assets/sounds/Goat.mp3');
        this.nativeAudio.play('goat');
        this.nativeAudio.unload('elephant').then();
        
      }else if( lamun == 15){
        this.nativeAudio.preloadSimple('hammer', 'assets/sounds/Hammer.mp3');
        this.nativeAudio.play('hammer');
        this.nativeAudio.unload('goat').then();
        
      }else if( lamun == 16){
        this.nativeAudio.preloadSimple('plants', 'assets/sounds/Plants.mp3');
        this.nativeAudio.play('plants');
        this.nativeAudio.unload('hammer').then();
        
      }else if( lamun == 17){
        this.nativeAudio.preloadSimple('king', 'assets/sounds/King.mp3');
        this.nativeAudio.play('king');
        this.nativeAudio.unload('hammer').then();
        
      }else if( lamun == 18){
        this.nativeAudio.preloadSimple('egg', 'assets/sounds/Egg.mp3');
        this.nativeAudio.play('egg');
        this.nativeAudio.unload('king').then();
        
      }else if( lamun == 19){
        this.nativeAudio.preloadSimple('igloo', 'assets/sounds/Igloo.mp3');
        this.nativeAudio.play('igloo');
        this.nativeAudio.unload('egg').then();
        
      }else if( lamun == 20){
        this.nativeAudio.preloadSimple('nose', 'assets/sounds/Nose.mp3');
        this.nativeAudio.play('nose');
        this.nativeAudio.unload('igloo').then();
        
      }else if( lamun == 21){
        this.nativeAudio.preloadSimple('horse', 'assets/sounds/Horse.mp3');
        this.nativeAudio.play('horse');
        this.nativeAudio.unload('nose').then();
        
      }else if( lamun == 22){
        this.nativeAudio.preloadSimple('kettle', 'assets/sounds/Kettle.mp3');
        this.nativeAudio.play('kettle');
        this.nativeAudio.unload('horse').then();
        
      }else if( lamun == 23){
        this.nativeAudio.preloadSimple('kite', 'assets/sounds/Kite.mp3');
        this.nativeAudio.play('kite');
        this.nativeAudio.unload('kettle').then();
        
      }else if( lamun == 24){
        this.nativeAudio.preloadSimple('ball2', 'assets/sounds/Ball2.mp3');
        this.nativeAudio.play('ball2');
        this.nativeAudio.unload('kite').then();
        
      }else if( lamun == 25){
        this.nativeAudio.preloadSimple('fish', 'assets/sounds/Fish.mp3');
        this.nativeAudio.play('fish');
        this.nativeAudio.unload('ball2').then();
        
      }else if( lamun == 26){
        this.nativeAudio.preloadSimple('lion', 'assets/sounds/Lion.mp3');
        this.nativeAudio.play('lion');
        this.nativeAudio.unload('fish').then();
        
      }else if( lamun == 27){
        this.nativeAudio.preloadSimple('mango', 'assets/sounds/Mango.mp3');
        this.nativeAudio.play('mango');
        this.nativeAudio.unload('lion').then();
        
      }else if( lamun == 28){
        this.nativeAudio.preloadSimple('monkey', 'assets/sounds/Monkey.mp3');
        this.nativeAudio.play('monkey');
        this.nativeAudio.unload('mango').then();
      }else if( lamun == 29){
        this.nativeAudio.preloadSimple('moon', 'assets/sounds/Moon.mp3');
        this.nativeAudio.play('moon');
        this.nativeAudio.unload('monkey').then();
      }else if( lamun == 30){
        this.nativeAudio.preloadSimple('nail', 'assets/sounds/Nail.mp3');
        this.nativeAudio.play('nail');
        this.nativeAudio.unload('moon').then();
      }else if( lamun == 31){
        this.nativeAudio.preloadSimple('nest', 'assets/sounds/Nest.mp3');
        this.nativeAudio.play('nest');
        this.nativeAudio.unload('moon').then();
      }else if( lamun == 32){
        this.nativeAudio.preloadSimple('nine', 'assets/sounds/Nine.mp3');
        this.nativeAudio.play('nine');
        this.nativeAudio.unload('nest').then();
      }else if( lamun == 33){
        this.nativeAudio.preloadSimple('octupos', 'assets/sounds/Octopus.mp3');
        this.nativeAudio.play('octupos');
        this.nativeAudio.unload('nine').then();
      }else if( lamun == 34){
        this.nativeAudio.preloadSimple('okra', 'assets/sounds/Okra.mp3');
        this.nativeAudio.play('okra');
        this.nativeAudio.unload('octupos').then();
      }else if( lamun == 35){
        this.nativeAudio.preloadSimple('orange', 'assets/sounds/Orange.mp3');
        this.nativeAudio.play('orange');
        this.nativeAudio.unload('okra').then();
      }else if( lamun == 36){
        this.nativeAudio.preloadSimple('cone', 'assets/sounds/Cone.mp3');
        this.nativeAudio.play('cone');
        this.nativeAudio.unload('orange').then();
      }else if( lamun == 37){
        this.nativeAudio.preloadSimple('pako', 'assets/sounds/Nail.mp3');
        this.nativeAudio.play('pako');
        this.nativeAudio.unload('apa').then();
      }else if( lamun == 38){
        this.nativeAudio.preloadSimple('pin', 'assets/sounds/Pin.mp3');
        this.nativeAudio.play('pin');
        this.nativeAudio.unload('pako').then();
      }else if( lamun == 39){
        this.nativeAudio.preloadSimple('rabbit', 'assets/sounds/Rabbit.mp3');
        this.nativeAudio.play('rabbit');
        this.nativeAudio.unload('pin').then();
      }else if( lamun == 40){
        this.nativeAudio.preloadSimple('star', 'assets/sounds/Star.mp3');
        this.nativeAudio.play('star');
        this.nativeAudio.unload('rabbit').then();
      }else if( lamun == 41){
        this.nativeAudio.preloadSimple('turtle', 'assets/sounds/Turtle.mp3');
        this.nativeAudio.play('turtle');
        this.nativeAudio.unload('star').then();
      }else if( lamun == 42){
        this.nativeAudio.preloadSimple('umbrella', 'assets/sounds/Umbrella.mp3');
        this.nativeAudio.play('umbrella');
        this.nativeAudio.unload('turtle').then();
      }else if( lamun == 43){
        this.nativeAudio.preloadSimple('watch', 'assets/sounds/Watch.mp3');
        this.nativeAudio.play('watch');
        this.nativeAudio.unload('umbrella').then();
      }else if( lamun == 44){
        this.nativeAudio.preloadSimple('yoyo', 'assets/sounds/Yoyo.mp3');
        this.nativeAudio.play('yoyo');
        this.nativeAudio.unload('watch').then();
      }else if( lamun == 45){
        this.nativeAudio.preloadSimple('candle', 'assets/sounds/Candle.mp3');
        this.nativeAudio.play('candle');
        this.nativeAudio.unload('yoyo').then();
      }else if( lamun == 46){
        this.nativeAudio.preloadSimple('fish', 'assets/sounds/Fish.mp3');
        this.nativeAudio.play('fish');
        this.nativeAudio.unload('candle').then();
      }else if( lamun == 47){
        this.nativeAudio.preloadSimple('jacket', 'assets/sounds/Jacket.mp3');
        this.nativeAudio.play('jacket');
        this.nativeAudio.unload('fish').then();
      }else if( lamun == 48){
        this.nativeAudio.preloadSimple('queen', 'assets/sounds/Queen.mp3');
        this.nativeAudio.play('queen');
        this.nativeAudio.unload('jacket').then();
      }else if( lamun == 49){
        this.nativeAudio.preloadSimple('violin', 'assets/sounds/Violin.mp3');
        this.nativeAudio.play('violin');
        this.nativeAudio.unload('queen').then();
      }else if( lamun == 50){
        this.nativeAudio.preloadSimple('xylo', 'assets/sounds/Xylophone.mp3');
        this.nativeAudio.play('xylo');
        this.nativeAudio.unload('violin').then();
      }else if( lamun == 51){
        this.nativeAudio.preloadSimple('zebra', 'assets/sounds/Zebra.mp3');
        this.nativeAudio.play('zebra');
        this.nativeAudio.unload('xylo').then();
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
