import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ServiceDataProvider } from "../../providers/service-data/liste_anti_infectieux";
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'page-anti-infectieux',
  templateUrl: 'anti-infectieux.html',
})

export class AntiInfectieuxPage implements OnInit

   {
    public searchTerm: string = "";
    public cards: any;
    isShownCard:boolean=false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public storage: Storage, 
    public alertController: AlertController,
    public dataService: ServiceDataProvider, ) 
    {
    }

    ngOnInit() {
      this.setFilteredItems();
    }
  
    setFilteredItems() {
      this.cards = this.dataService.filterItems(this.searchTerm);
    }

    ToggleCard() : void {
      this.cards.isShown = !this.cards.isShown;  
    }
  };