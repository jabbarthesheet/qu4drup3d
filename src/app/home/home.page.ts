import { Component, OnInit } from '@angular/core';
import { ServiceDataProvider } from "../../providers/service-data/liste_anti_infectieux";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage 
  implements OnInit {
  public searchTerm: string = "";
  public items: any;

  constructor(public dataService: ServiceDataProvider) {}




  ngOnInit() {
    this.setFilteredItems();
  }

  setFilteredItems() {
    this.items = this.dataService.filterItems(this.searchTerm);
  }

};


