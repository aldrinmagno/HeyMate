import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the BotProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BotProvider {
  private messages = [];

  constructor(public http: HttpClient) {
    console.log('Hello BotProvider Provider');
  }

  getMessages() {
    return this.messages;
  }

  sendMessages(message, type) {
    this.messages.push({
      type: type,
      message: message
    });
  }

}
