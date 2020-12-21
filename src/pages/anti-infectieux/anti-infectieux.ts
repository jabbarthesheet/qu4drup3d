import { Component, OnInit } from '@angular/core';
import { Alert, AlertController, Events, NavController, NavParams } from 'ionic-angular';
import { AccueilPage } from '../accueil/accueil';
import { Storage } from '@ionic/storage';
import { NumericLiteral } from 'typescript';
import { PatientPage } from '../patient/patient';
import { ServiceDataProvider } from "../../providers/service-data/liste_anti_infectieux";
import { FormControl } from "@angular/forms";
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

    ToggleCard(card: any, index: number) : void {
      this.cards.isShownCard = !this.cards.isShownCard;
    }
  }