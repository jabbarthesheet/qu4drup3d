import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ServiceDataProvider } from "../../providers/service-data/liste_medicaments";
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'page-medicaments',
  templateUrl: 'medicaments.html',
})

export class MedicamentsPage implements OnInit

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

    ionViewDidLoad() {
      this.setFilteredItems();
      this.dataService.orderCards(); 
      console.log('items rangés par ordre alphabétique');

    }

    ngOnInit() {
      this.setFilteredItems();
      this.dataService.orderCards();
    };
  
    setFilteredItems() {
      this.cards = this.dataService.filterTitles(this.searchTerm);
    };



    displayMedicament(index) {
      this.cards[index].isShown = !this.cards[index].isShown;  
    };

    openVidal(index){
      window.open(this.cards[index].lien, '_system');
    }
  };