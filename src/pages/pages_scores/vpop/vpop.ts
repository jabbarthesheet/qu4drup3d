import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VpopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-vpop',
  templateUrl: 'vpop.html',
})
export class VpopPage {

  public VPOPform = [
    { val: 'Âge inférieur à 3 ans', isChecked: false , count: 0 },
    {  val : 'Âge entre 3 et 6 ans', isChecked: false , count : 1},
    {  val: 'Âge entre 6 et 13 ans', isChecked: false , count : 2 },
    {  val: 'Âge supérieur à 13 ans', isChecked: false , count : 1 },
    {  val: 'Mal des transports', isChecked: false, count : 1 },
    {  val: 'Chirurgie > 45 minutes', isChecked: false , count : 1},
    {  val: 'Chirurgie à risque : amygdales, strabisme, tympan', isChecked: false , count : 1},
    {  val: 'Réinjection de morphiniques', isChecked: false , count : 1},
  ];

  totalVPOP:number=0; 
  risqueVPOP:number; 
  prophylaxieVPOP:string="Compléter les items du score."; 


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  retourHome(){
    this.navCtrl.pop();
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad VpopPage');
  }


  countVPOP() {
    console.log("count");
    this.totalVPOP = this.VPOPform.filter(item => item.isChecked === true).reduce((sum, current) => sum + current.count, 0);
    this.setRiskVPOP()
                                  
    console.log(this.totalVPOP);
  };

  setRiskVPOP(){

  if (this.totalVPOP == 0) {this.risqueVPOP = 6;}
  else if  (this.totalVPOP == 1 ) {this.risqueVPOP = 7 ;}
  else if (this.totalVPOP == 2 ) {this.risqueVPOP = 15 ;}
  else if (this.totalVPOP == 3 ) {this.risqueVPOP = 25 ;}
  else if (this.totalVPOP == 4 ) {this.risqueVPOP = 39 ;}
  else if (this.totalVPOP == 5 ) {this.risqueVPOP = 53 ;}
  else if (this.totalVPOP == 6 ) {this.risqueVPOP = 69 ;};

  if (this.totalVPOP <= 2){ this.prophylaxieVPOP = "Risque faible. Dexaméthasone seule en prophylaxie.";}
  else if (this.totalVPOP <= 4){ this.prophylaxieVPOP = "Risque Modéré. Déxaméthasone et Dropéridol en prophylaxie. Eviter le protoxyde d'azote. Limiter les opioïdes en post-opératoire."}
  else { this.prophylaxieVPOP = "Risque élevé. Déxaméthasone et Dropéridol en prophy  laxie. Considérer Ondansétron en per opératoire. Eviter le protoxyde d'azote. Limiter les opioïdes en post-opératoire."}
}; 
}
