import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SQLite} from '@ionic-native/sqlite';
import { NativeAudio } from '@ionic-native/native-audio';

import { CreateAccountPage } from '../pages/create-account/create-account';
import { StudentListPage } from '../pages/student-list/student-list';
import { AboutPage } from '../pages/about/about';
import { PretestPage } from '../pages/pretest/pretest';
import { Pretest2Page } from '../pages/pretest2/pretest2';
import { StudentScorePage } from '../pages/student-score/student-score';
import { PicturePage } from '../pages/picture/picture';
import { PictureStartPage } from '../pages/picture-start/picture-start';
import { LetterStartPage } from '../pages/letter-start/letter-start';
import { LetterExamPage } from '../pages/letter-exam/letter-exam';

import { ProtestPage } from '../pages/protest/protest';
import { Protest2Page } from '../pages/protest2/protest2';
import { ExamPage } from '../pages/exam/exam';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage

    // ,CreateAccountPage,
    // StudentListPage,
    // AboutPage,
    // PretestPage,
    // Pretest2Page,
    // StudentScorePage,
    // PicturePage,
    // PictureStartPage,
    // LetterStartPage,
    // LetterExamPage,
    // ProtestPage,
    // Protest2Page,
    // ExamPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CreateAccountPage,
    StudentListPage,
    AboutPage,
    PretestPage,
    Pretest2Page,
    StudentScorePage,
    PicturePage,
    PictureStartPage,
    LetterStartPage,
    LetterExamPage,
    ProtestPage,
    Protest2Page,
    ExamPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SQLite,
    NativeAudio
  ]
})
export class AppModule {}
