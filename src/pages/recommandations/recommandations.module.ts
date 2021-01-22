import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecommandationsPage } from './recommandations';

@NgModule({
  declarations: [
    RecommandationsPage,
  ],
  imports: [
    IonicPageModule.forChild(RecommandationsPage),
  ],
})
export class RecommandationsPageModule {}
