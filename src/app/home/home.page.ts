import { Component, OnInit } from '@angular/core';
import { ServiceDataProvider } from "../../providers/service-data/liste_medicaments";


@Component({
  selector: 'app-home',
  styleUrls: ['home.page.scss'],
})

export class HomePage 
  implements OnInit {
  public searchTerm: string = "";
  public items: any;

  constructor(public dataService: ServiceDataProvider) {}


  

  ngOnInit() {
  }
/**

  setFilteredItems() {
    this.items = this.dataService.filterItems(this.searchTerm);
  }
   */

};


