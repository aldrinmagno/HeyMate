import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, AlertController, Content, ToastController } from 'ionic-angular';
import { HTTP } from "@ionic-native/http";
import { DomSanitizer } from '@angular/platform-browser';
import { NativeStorage } from '@ionic-native/native-storage';

import { BotProvider } from "../../providers/bot/bot";
import { DictionaryProvider } from "../../providers/dictionary/dictionary";

import { DictionaryPage } from "../dictionary/dictionary";
import { DefinitionPage } from "../definition/definition";
import { TrophyPage } from "../trophy/trophy";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  @ViewChild(Content) content: Content;

  public todos = [];

  public key:string = "items";
  
  public messageSend = "";
  public slangs = [];

  // import libraries
  constructor(
    private botProvider: BotProvider, 
    private dictionaryProvider: DictionaryProvider, 
    public navCtrl: NavController, 
    public alertCtrl: AlertController, 
    public http: HTTP,
    private nativeStorage: NativeStorage,
    public toastCtrl: ToastController,
    public sanitized: DomSanitizer,
    public eleRef: ElementRef,
  ) {
    //this.botProvider.createDb();
    // trigger onload functions
    this.todos = this.botProvider.getMessages();
    // get all slangs
    this.getContent();

    let initMsg = [
      this.sanitized.bypassSecurityTrustHtml(`<u data-word="Aussie" data-meaning="Australian" class="slang" ion-text color="primary">Gday <span class="help">?</span></u> mate! Are you ready to practice with an <u data-word="Aussie" data-meaning="Australian" ion-text color="primary">aussie <span class="help">?</span></u>`),
      'bot'
    ];
    
    this.botProvider.sendMessages(initMsg[0], initMsg[1]);  
    
    this.nativeStorage.setItem('nightmode', {on: 0})
    .then(
      () => console.log('Stored item!'),
      error => console.error('Error storing item', error)
    );

  }

  clickSlang() {
    console.log("hi");
  }

  // fetch all slangs
  getContent() {
    // check if slangs are already fetch
    if(this.slangs.length === 0)
    this.dictionaryProvider.dictionaryContent().subscribe(data => this.slangs = data.slangs);
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
      // check if user is using slangs
      this.botProvider.checkForSlangs(message, this.slangs);
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
    // create toast
    const toast = this.toastCtrl.create({
      message: message,
      duration: 1000,
    });
    // execute toast
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
    if(document.querySelector(".bot").className == "bot card card-md") {
      const msgList = Array.from(document.querySelectorAll(".bot"));
      msgList.forEach(function(e) {
        e.className = "bot card card-md message-card-m";
      });
    } else if(document.querySelector(".bot").className == "bot card card-md message-card-m") {
      const msgList = Array.from(document.querySelectorAll(".bot"));
      msgList.forEach(function(e) {
        e.className = "bot card card-md message-card-l";
      });
    } else if(document.querySelector(".bot").className == "bot card card-md message-card-l") {
      const msgList = Array.from(document.querySelectorAll(".bot"));
      msgList.forEach(function(e) {
        e.className = "bot card card-md message-card-xl";
      });  
    }
 
    if(document.querySelector(".user")) {
      if(document.querySelector(".user").className == "user card card-md") {
        const msgList = Array.from(document.querySelectorAll(".user"));
        msgList.forEach(function(e) {
          e.className = "user card card-md message-card-m";
        });
      } else if(document.querySelector(".user").className == "user card card-md message-card-m") {
        const msgList = Array.from(document.querySelectorAll(".user"));
        msgList.forEach(function(e) {
          e.className = "user card card-md message-card-l";
        });
      } else if(document.querySelector(".user").className == "user card card-md message-card-l") {
        const msgList = Array.from(document.querySelectorAll(".user"));
        msgList.forEach(function(e) {
          e.className = "user card card-md message-card-xl";
        }); 
      }
    } 
  }

  smallerFontSize() {
    if(document.querySelector(".bot").className == "bot card card-md message-card-xl") {
      const msgList = Array.from(document.querySelectorAll(".bot"));
      msgList.forEach(function(e) {
        e.className = "bot card card-md message-card-l";
      });
    } else if(document.querySelector(".bot").className == "bot card card-md message-card-l") {
      const msgList = Array.from(document.querySelectorAll(".bot"));
      msgList.forEach(function(e) {
        e.className = "bot card card-md message-card-m";
      });
    } else if(document.querySelector(".bot").className == "bot card card-md message-card-m") {
      const msgList = Array.from(document.querySelectorAll(".bot"));
      msgList.forEach(function(e) {
        e.className = "bot card card-md";
      });
    }

    if(document.querySelector(".user")) {
      if(document.querySelector(".user").className == "user card card-md message-card-xl") {
        const msgList = Array.from(document.querySelectorAll(".user"));
        msgList.forEach(function(e) {
          e.className = "user card card-md message-card-l";
        });
      } else if(document.querySelector(".user").className == "user card card-md message-card-l") {
        const msgList = Array.from(document.querySelectorAll(".user"));
        msgList.forEach(function(e) {
          e.className = "user card card-md message-card-m";
        });
      } else if(document.querySelector(".user").className == "user card card-md message-card-m") {
        const msgList = Array.from(document.querySelectorAll(".user"));
        msgList.forEach(function(e) {
          e.className = "user card card-md";
        });
      }
    }
  }

  nightMode() {
    if(document.querySelector("ion-app").classList.contains("night-mode")) {
      this.nativeStorage.setItem('nightmode', {on: 0})
      .then(
        () => console.log('Stored item!'),
        error => console.error('Error storing item', error)
      );
   
      this.nightModeAll(0);
    } else {
      this.nativeStorage.setItem('nightmode', {on: 1})
      .then(
        () => console.log('Stored item!'),
        error => console.error('Error storing item', error)
      );
   
      this.nightModeAll(1);
    }
  }

  nightModeAll(on) {
    
    if(on === 1) {
      let daymode = document.querySelector("ion-app").className.replace("night-mode", ""); 
      document.querySelector("ion-app").className = daymode + " night-mode";
 
    } else {
      let daymode = document.querySelector("ion-app").className.replace("night-mode", ""); 
      document.querySelector("ion-app").className = daymode;
    } 
  }

  // change page to dictionary page
  gotoDictionary() {
    this.navCtrl.push(DictionaryPage);
  }

  // change page to dictionary page
  gotoTrophy() {
    this.navCtrl.push(TrophyPage);
  }

}
