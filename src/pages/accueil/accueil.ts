import { Component, ViewChild } from '@angular/core';
import { App, NavController, NavParams } from 'ionic-angular';
import { ModalController, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { PatientPage } from '../patient/patient'; 


@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html',
})
export class AccueilPage {

  @ViewChild(Nav) nav: Nav;


  // make AccueilPage the root (or first) page
  rootPage = AccueilPage;
  pages: Array<{title: string, component: any}>;
  
isShown:boolean=true; 

  constructor(
    public viewCtrl: ViewController, 
    public modalCtrl: ModalController, 
    public app : App, 
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public storage: Storage,) {}
    

    ionViewDidLoad ()
    { 
      console.log('ionViewDidLoad AccueilPage');
    
    };

    dismiss() {

      console.log("fermer le footer mnt");
      this.isShown = !this.isShown;
      console.log(this.isShown);
    };

    newPatient(): void {
      this.navCtrl.setRoot(PatientPage);
      this.storage.clear(); 
    };

};

