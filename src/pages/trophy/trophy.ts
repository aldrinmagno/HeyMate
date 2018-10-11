import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

import { BotProvider } from "../../providers/bot/bot";

import { DefinitionPage } from "../definition/definition";

/**
 * Generated class for the TrophyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trophy',
  templateUrl: 'trophy.html',
})
export class TrophyPage {

  public items:any = [];

  // sqlite related variables
  database: SQLiteObject;

  constructor(private botProvider: BotProvider, public navCtrl: NavController, public navParams: NavParams, public sqlite: SQLite) {
    this.botProvider.createDb();

    this.trophy();
  }

  trophy() {
    let holder = this.botProvider.getUsedSlangs();
    holder.then().then( res => {
      this.items = res;
      
    });
  }

  // go to definition page
  gotoDefinition(defination) {
    this.navCtrl.push(DefinitionPage, {
      defination:defination
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrophyPage');
  }

}
