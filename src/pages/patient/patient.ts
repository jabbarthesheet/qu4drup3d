import { Component } from '@angular/core';
import { App, NavController, NavParams } from 'ionic-angular';
import { AccueilPage } from '../accueil/accueil';
import { BiometriePage } from '../biometrie/biometrie';
import { OptionsPage } from '../options/options';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the PatientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-patient',
  templateUrl: 'patient.html',
})
export class PatientPage {

  tab1Root = BiometriePage;
  tab2Root = OptionsPage;
  AgeNum:number;
  PoidsNum:number; 

  constructor(public app: App, public navCtrl: NavController, public navParams: NavParams, public storage: Storage) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PatientPage');
  }

 /* tabPatientClick(){
    let promiseList: Promise<any>[] = [];
    promiseList.push(
    this.storage.clear().then(()=>{console.log('RAZ')})
    );
  }
*/

}
