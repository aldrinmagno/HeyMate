import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController, Content, ToastController } from 'ionic-angular';
import { HTTP } from "@ionic-native/http";

import { BotProvider } from "../../providers/bot/bot";

import { DictionaryPage } from "../dictionary/dictionary";
import { DefinitionPage } from "../definition/definition";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  @ViewChild(Content) content: Content;

  public todos = [];
  public messageSend = "";

  // import libraries
  constructor(
    private botProvider: BotProvider, 
    public navCtrl: NavController, 
    public alertCtrl: AlertController, 
    public http: HTTP,
    public toastCtrl: ToastController
  ) {
    // trigger onload functions
    this.todos = this.botProvider.getMessages();
    
    this.botProvider.sendMessages('<u ion-text color="primary">asdasdasd</u> asdasdsa', 'bot');  
  }

  // send message to network to get automated response
  // message  str
  sendMessage(message) {
    // check input if message has a value
    if(message) {
      // empty inputbox
      this.messageSend = "";
      // display user message
      this.botProvider.sendMessages(message, 'user');
      // scroll down content
      this.content.scrollToBottom();
    } else {
      // call toast
      this.error("message is required");
    }
  }

  // call toast
  // message str
  error(message) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 1000,
    });
    toast.present();
  }

  // display definition of Australian Slang
  // word str
  // meaning str
  definition(word, meaning) {
    // title of alert
    let title = word;
    // body of alert
    let definition = meaning;

    // create alert
    let definitionAlert = this.alertCtrl.create({
      title: title,
      message: definition,
      buttons: [
        {
          text: "Read More",
          handler: () => {
            this.navCtrl.push(DefinitionPage);
          }
        },
        { 
          text: "Got It!"
        },
    
      ]
    });

    // trigger alert
    definitionAlert.present();
  }

  largerFontSize() {
    if(document.querySelector(".bot").className == "bot card card-md")
    document.querySelector(".bot").className = "bot card card-md message-card-m";
    else if(document.querySelector(".bot").className == "bot card card-md message-card-m")
    document.querySelector(".bot").className = "bot card card-md message-card-l";
    else if(document.querySelector(".bot").className == "bot card card-md message-card-l")
    document.querySelector(".bot").className = "bot card card-md message-card-xl";

    if(document.querySelector(".user")) {
      if(document.querySelector(".user").className == "user card card-md")
      document.querySelector(".user").className = "user card card-md message-card-m";
      else if(document.querySelector(".user").className == "user card card-md message-card-m")
      document.querySelector(".user").className = "user card card-md message-card-l";
      else if(document.querySelector(".user").className == "user card card-md message-card-l")
      document.querySelector(".user").className = "user card card-md message-card-xl";
    }
  }

  smallerFontSize() {
    if(document.querySelector(".bot").className == "bot card card-md message-card-xl")
    document.querySelector(".bot").className = "bot card card-md message-card-l";
    else if(document.querySelector(".bot").className == "bot card card-md message-card-l")
    document.querySelector(".bot").className = "bot card card-md message-card-m";
    else if(document.querySelector(".bot").className == "bot card card-md message-card-m")
    document.querySelector(".bot").className = "bot card card-md";

    if(document.querySelector(".user")) {
      if(document.querySelector(".user").className == "user card card-md message-card-xl")
      document.querySelector(".user").className = "user card card-md message-card-l";
      else if(document.querySelector(".user").className == "user card card-md message-card-l")
      document.querySelector(".user").className = "user card card-md message-card-m";
      else if(document.querySelector(".user").className == "user card card-md message-card-m")
      document.querySelector(".user").className = "user card card-md";
    }
  }

  nightMode() {
    if(document.querySelector("ion-header").className == "night-mode") {
      document.querySelector("ion-header").className = "";
      document.querySelector("ion-content").className = "";
      document.querySelector("ion-footer").className = "";

    } else {
      document.querySelector("ion-header").className = "night-mode";
      document.querySelector("ion-content").className = "night-mode";
      document.querySelector("ion-footer").className = "night-mode";

    }
  }

  // change page to dictionary page
  gotoDictionary() {
    this.navCtrl.push(DictionaryPage);
  }

}
