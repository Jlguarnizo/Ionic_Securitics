import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';
import { AlertController } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public alertCtrl: AlertController) {
    this.initializeApp();
    this.Mostrar();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Compartir' },
      { title: 'Ver Tutorial' },
      { title: 'Configuraciones' }
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

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Hola!',
      subTitle: 'Seguro deseas salir!!',
      buttons: ['Si','No']
    });
    alert.present();
  }

  Mostrar() {
    const alert = this.alertCtrl.create({
      title: 'Hola!',
      subTitle: 'En esta zona robaron a hector!!'
    });
    alert.present();
  }
}
