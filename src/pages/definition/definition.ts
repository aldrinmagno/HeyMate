import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DefinitionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-definition',
  templateUrl: 'definition.html',
})
export class DefinitionPage {
  public definition = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.definition = this.navParams.get("defination");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DefinitionPage');
  }

}
