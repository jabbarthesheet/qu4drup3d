import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AnnuaireDataProvider } from "../../providers/annuaire-data/annuaire-data";
import 'rxjs/add/operator/debounceTime';

/**
 * Generated class for the AnnuairePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-annuaire',
  templateUrl: 'annuaire.html',
})
export class AnnuairePage implements OnInit

   {
    public searchTerm: string = "";
    public items: any;
    isShownCard:boolean=false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public storage: Storage, 
    public alertController: AlertController,
    public dataService: AnnuaireDataProvider, ) 
    {
    }

    ionViewDidLoad() {
      this.setFilteredItems();
      this.dataService.orderItems(); 
      console.log('items rangés par ordre alphabétique');

    }
    ngOnInit() {
      this.setFilteredItems();
      this.dataService.orderItems(); 
      }
  
    setFilteredItems() {
      this.items = this.dataService.filterItems(this.searchTerm);
    }

    
  };