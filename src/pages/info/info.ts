import { Component } from '@angular/core';
import { MenuController, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public menu: MenuController,) {
  }

  menuToggle()
  {
    this.menu.open();
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }


  openDARwebsite() {
    window.open("http://www.dar-robertdebre.com", '_system');
  };

}
