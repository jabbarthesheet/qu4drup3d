import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HemstopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-hemstop',
  templateUrl: 'hemstop.html',
})
export class HemstopPage {

  isShownHEMSTOP:boolean=false;
  totalHEMSTOP:number;
  risqueHEMSTOP:string="Répondre aux questions du score.";

  public HEMSTOPform = [
    {  val: "Q1. Avez-vous déjà consulté un médecin ou reçu un traitement pour un saignement prolongé ou inhabituel par exemple un saignement de nez ou une petite coupure ?" , count: 0 },
    {  val: "Q2. Avez-vous tendance à faire des bleus de plus de 2 cm ou des hématomes importants, sans choc ou traumatisme ou bien à un traumatisme minime ?" , count : 0 },
    {  val: "Q3. Avez-vous reconsulté votre dentiste pour un saignement après une extraction dentaire ?", count : 0 },
    {  val: "Q4. Avez-vous saigné de manière anormale après une intervention chirurgicale (exemple opératoire des amygdales ou circoncision) ?", count : 0 },
    {  val: "Q5. Y a-t-il des membres de la famille proche suivis pour une maladie de la coagulation, comme la maladie de Von Willebrand ou l'hémophilie ?", count : 0 },
    {  val: "Q6. Pour les femmes : avez vous déjà consulté un médecin ou reçu un traitement pour des règles trop abondantes ? Avez vous saigné de façon anormale après un accouchement ?", count : 0 },
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  retourHome(){
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HemstopPage');
  }

  
  countHEMSTOP(){
    this.totalHEMSTOP =  Math.floor(this.HEMSTOPform[0].count) + 
                          Math.floor(this.HEMSTOPform[1].count) +
                          Math.floor(this.HEMSTOPform[2].count) + 
                          Math.floor(this.HEMSTOPform[3].count) + 
                          Math.floor(this.HEMSTOPform[4].count) + 
                          Math.floor(this.HEMSTOPform[5].count) ; 
    console.log(this.totalHEMSTOP); 
    
    if (this.totalHEMSTOP >= 2){this.risqueHEMSTOP = "Forte probabilité de sur-risque hémorragique. Bilan d'hémostase recommandé.";}
    else if (this.totalHEMSTOP == 1){this.risqueHEMSTOP = "Probabilité intermédiaire de sur-risque hémorragique. Bilan d'hémostase à discuter."}
    else {this.risqueHEMSTOP = "Probabilité très faible de sur-risque hémorragique. Pas de bilan d'hémostase."}
  
  };

}
