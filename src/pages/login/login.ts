import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { HomePage } from "../home/home";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  // manual login
  gotoHome(username, password) {
    if(password == "" || username == "") {
      this.error("username and password is required");
    } else {

      this.navCtrl.push(HomePage);
    }
    
  }

  // login via facebook
  loginFb() {
    this.navCtrl.push(HomePage);
  }

  // call toast
  // message str
  error(message) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 1000,
      position: "middle"
    });
    toast.present();
  }

}
