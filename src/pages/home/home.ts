import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController, Content } from 'ionic-angular';
import { HTTP } from "@ionic-native/http";

import { BotProvider } from "../../providers/bot/bot";

import { DictionaryPage } from "../dictionary/dictionary";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  @ViewChild(Content) content: Content;

  public todos = [];

  constructor(
    private botProvider: BotProvider, 
    public navCtrl: NavController, 
    public alertCtrl: AlertController, 
    public http: HTTP
  ) {
    this.todos = this.botProvider.getMessages();

    this.botProvider.sendMessages('<u ion-text color="primary">asdasdasd</u> asdasdsa', 'bot');
  }

  sendMessage(message) {
    this.botProvider.sendMessages(message, 'user');
    this.content.scrollToBottom();
  }

  definition(word, meaning) {
    let title = word;
    let definition = meaning;

    let definitionAlert = this.alertCtrl.create({
      title: title,
      message: definition,
      buttons: [
        {
          text: "Read More"
        },
        { 
          text: "Got It!"
        },
    
      ]
    });

    definitionAlert.present();
  }

  gotoDictionary() {
    this.navCtrl.push(DictionaryPage);
  }

}
