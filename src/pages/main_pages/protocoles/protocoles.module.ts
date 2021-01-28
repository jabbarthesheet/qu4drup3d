import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProtocolesPage } from './protocoles';

@NgModule({
  declarations: [
    ProtocolesPage,
  ],
  imports: [
    IonicPageModule.forChild(ProtocolesPage),
  ],
})
export class ProtocolesPageModule {}
