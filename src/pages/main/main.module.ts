import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccueilPage } from '../accueil/accueil';
import { MainPage } from './main';

@NgModule({
  declarations: [
    MainPage,
  ],
  imports: [
    IonicPageModule.forChild(MainPage),
  ]
})
export class MainPageModule {}
