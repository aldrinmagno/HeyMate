import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  constructor(public http: HttpClient,
    private nativeStorage: NativeStorage) {
    console.log('Hello BotProvider Provider');
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

}
