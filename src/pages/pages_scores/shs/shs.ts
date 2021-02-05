import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ShsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-shs',
  templateUrl: 'shs.html',
})
export class ShsPage {

  cumuleSHS:number; 
  risqueSHS:string="Répondre aux questions du score."; 
  SHSQ1:number; 
  SHSQ2:number; 
  SHSQ3:number; 
  SHSQ4:number;
  SHSQ5:number;
  SHSQ6:number;


  public SHSform = [
    {  val: "Q1. Besoin de secouer l'enfant :" , count: 0 },
    {  val: "Q2. Arrêts respiratoires nocturnes :" , count : 0 },
    {  val: "Q3. Difficultés à respirer la nuit :", count : 0 },
    {  val: "Q4. Inquiétudes des parents sur le sommeil de l'enfant :", count : 0 },
    {  val: "Q5. Intensité du bruit de son ronflement (pour cette question, échelle de 0 = faible à 4 = très bruyant) :", count : 0 },
    {  val: "Q6. Existence de ronflement :", count : 0 },
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  retourHome(){
    this.navCtrl.pop();
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShsPage');
  }

  countSHS(){
    this.SHSQ1 = Math.floor(this.SHSform[0].count);
    this.SHSQ2 = Math.floor(this.SHSform[1].count);
    this.SHSQ3 = Math.floor(this.SHSform[2].count);
    this.SHSQ4 = Math.floor(this.SHSform[3].count);
    this.SHSQ5 = Math.floor(this.SHSform[4].count);
    this.SHSQ6 = Math.floor(this.SHSform[5].count);
    console.log(this.SHSQ1, this.SHSQ2, this.SHSQ3);
    
      this.cumuleSHS = Math.round((((((((( ((this.SHSQ1+this.SHSQ2)/2) + this.SHSQ3)/2) + this.SHSQ4)/2)+this.SHSQ5)/2) + this.SHSQ6)/2)*100)/100 ; 
      console.log("index cumule = ", this.cumuleSHS); 
      if (this.cumuleSHS >= 2.72){this.risqueSHS = "Enfant présentant probablement un SAOS sévère et à risque élevé d'apnées post-opératoires. Prévoir une hospitalisation et limiter la consommation de morphiniques.";}
      else {this.risqueSHS = "Enfant ne présentant probablement pas un SAOS sévère. Pas de contre indication à l'ambulatoire liée à ce paramètre."}
    };

}
