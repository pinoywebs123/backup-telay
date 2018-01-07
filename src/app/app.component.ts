import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import { CreateAccountPage } from '../pages/create-account/create-account';
import { StudentListPage } from '../pages/student-list/student-list';
import { AboutPage } from '../pages/about/about';
import { ExamPage } from '../pages/exam/exam';

// import { PretestPage } from '../pages/pretest/pretest';
// import { ProtestPage } from '../pages/protest/protest';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Examination', component: ExamPage },
      { title: 'Student List', component: StudentListPage },
      { title: 'About', component: AboutPage }

      // , { title: 'pre', component: PretestPage }
      // , { title: 'pro', component: ProtestPage }
      
  
    ];
    
   

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
