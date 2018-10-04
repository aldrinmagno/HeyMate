import { HttpClient } from '@angular/common/http';
import { AlertController, Platform } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

import { NativeStorage } from '@ionic-native/native-storage';

/*
  Generated class for the BotProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BotProvider {
  private messages = [];
  public key:string = "messages";

  // sqlite related variables
  database: SQLiteObject;

  constructor(public http: HttpClient,
    public alertCtrl: AlertController, 
    public sqlite: SQLite,
    public platform: Platform,
    private nativeStorage: NativeStorage) {
      
  }

  createDb() {
    // check if device ready
    this.platform.ready().then(() => {
      // created database
      this.sqlite.create({
        name: "slangs.db",
        location: "default"
      }).then((db: SQLiteObject) => {
        this.database = db;
 
        // create database
        this.database.executeSql("CREATE TABLE tblSlangs(slang VARCHAR(255), meaning VARCHAR(255), sentence VARCHAR(255), usages INT(11))")
        .then(() => console.log('Executed SQL'))
        .catch(e => console.log(e));         
      });
    });
  }

  getMessages() {
    this.nativeStorage.getItem(this.key)
    .then(
      data => function() {
        if(data != null && data != undefined) {
          this.messages = JSON.parse(data);
        }
        console.log(data);
      },
      error => console.error(error)
    );
   
    return this.messages;
  }

  // check if user used an australian slang 
  checkForSlangs(message, slangs) {
    //convert message to lower case
    let msg = message.toLowerCase();
    // check all slangs
    slangs.forEach(function(slang) {
      // check if slang is used
      if(msg.indexOf(slang.slang.toLowerCase()) != -1) {
        this.numberofUsage(slang);
      }
    }.bind(this)); // bind this so methods will work
  }

  numberofUsage(slangs) {
    let search = [slangs.slang];
    let insert = [slangs.slang, slangs.meaning, slangs.sentence];
   
    return this.database.executeSql("SELECT * FROM tblSlangs WHERE slang = ?", search).then(data => {
      let update = [2];
      console.log(data);
      if(data.rows.length <= 0) {
        this.database.executeSql("INSERT INTO tblSlangs(slang, meaning, sentence) VALUES(?, ?, ?)", insert).then(res => {
          this.showAlert("You have use " + insert[0] + " for the first time!", insert[0] + " means " + insert[1]);
        });
      } else {
        this.database.executeSql("UPDATE tblSlangs SET usages = ?", update).then(res => {
          this.showAlert("You used " + insert[0] + " " + update + " already!", insert[0] + " means " + insert[1]);
        });
      }
    })
    .then(() => console.log('Executed SQL'))
    .catch(e => console.log(e)); 
  }

  // 
  sendMessages(message, type) {

    this.nativeStorage.setItem(this.key, {
      type: type,
      message: message
    }).then(
      data => console.log(data),
      error => console.error(error)
    );

    this.messages.push({
      type: type,
      message: message
    });
  }

  // show regular alert
  showAlert(title, subtitle) {
    // create alert
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: subtitle,
      buttons: ['OK']
    });
    // execute alert
    alert.present();
  }

}
