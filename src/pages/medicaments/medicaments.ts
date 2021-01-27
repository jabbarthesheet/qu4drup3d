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
    public medicaments: any;

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
      this.dataService.orderMedicaments(); 
      console.log('medicaments rangés par ordre alphabétique');

    }

    ngOnInit() {
      this.setFilteredItems();
      this.dataService.orderMedicaments();
    };
  
    setFilteredItems() {
      this.medicaments = this.dataService.filterMedicaments(this.searchTerm);
    };

    displayMedicament(index) {
      this.medicaments[index].isShown = !this.medicaments[index].isShown;  
    };

    openVidal(index){
      window.open(this.medicaments[index].lien, '_system');
    }
  };