import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { HTTP } from "@ionic-native/http";
import { text } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  public todos = [];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public http: HTTP) {

  }

  sendMessage(message) {

    this.todos.push(message);


   /* this.http.get('http://ionic.io', {}, {})
      .then(data => {

        console.log(data.status);
        console.log(data.data); // data received by server
        console.log(data.headers);

      })
      .catch(error => {

        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);

      }); */
  }

  definition(word) {
    let title = word;

    let definitionAlert = this.alertCtrl.create({
      title: title,
      message: "sample definition",
      buttons: [
        { 
          text: "Got It!"
        }
      ]
    });

    definitionAlert.present();
  }

}
