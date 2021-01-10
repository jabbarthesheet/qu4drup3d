import { Component } from '@angular/core';
import { MenuController, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';



/**
 * Generated class for the RecommandationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-recommandations',
  templateUrl: 'recommandations.html',
})
export class RecommandationsPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public InAppBrowser: InAppBrowser,
    public menu: MenuController,) 
  {
  
  }

  menuToggle()
  {
    this.menu.open();
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecommandationsPage');
  }

  openWebpage(url: string) {

    const browser = this.InAppBrowser.create(url, '_system');

  }

}
