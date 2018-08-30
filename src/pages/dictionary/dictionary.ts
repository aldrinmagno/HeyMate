import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DefinitionPage } from "../definition/definition";

/**
 * Generated class for the DictionaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dictionary',
  templateUrl: 'dictionary.html',
})
export class DictionaryPage {

  public items = []; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DictionaryPage');
  }

  // get the searched items
  getItems() {
    this.items = [];

    this.items.push({
      title: "G'Day mate!",
      description: "Good morning",
      sentence: "G'Day mate! How are you doing?"
    });

    this.items.push({
      title: "Straya",
      description: "Australia",
      sentence: "Welcome to Straya."
    });
  }

  // go to definition page
  gotoDefinition() {
    this.navCtrl.push(DefinitionPage);
  }

}
