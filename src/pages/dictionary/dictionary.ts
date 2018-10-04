import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DictionaryProvider } from "../../providers/dictionary/dictionary";

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

  searchQuery: string = '';
  items = [];
  content = [];
  
  constructor(
    private dictionaryProvider: DictionaryProvider, 
    public navCtrl: NavController, 
    public navParams: NavParams) 
  {
    this.getContent();
  }

  getContent() {
    if(this.content.length === 0)
    this.dictionaryProvider.dictionaryContent().subscribe(data => this.content = data.slangs);
  }

  // get the searched items
  getItems(ev: any) {
    this.items = this.content;
    
    let search = ev.target.value;

    if (search && search.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.slang.toLowerCase().indexOf(search.toLowerCase()) > -1);
      })
    }
  }

  // go to definition page
  gotoDefinition(defination) {
    this.navCtrl.push(DefinitionPage, {
      defination:defination
    });
  }

}
