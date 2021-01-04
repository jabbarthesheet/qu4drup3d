import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Chart } from 'chart.js'; 
import { ViewChild, ElementRef } from "@angular/core";
import { AccueilPage } from '../accueil/accueil';

@Component({
  selector: 'page-courbes',
  templateUrl: 'courbes.html',
})

export class CourbesPage {

  @ViewChild("lineCanvas") lineCanvas: ElementRef;

  AgeNum:number; 
  PoidsNum:number;
  DureeJeune:number; 
  Allergie:number; 
  EstomacPlein:boolean; 
  EstomacOuiNon:string;

  dataPoidsMediane;
  dataPoids3;
  dataPoids97; 
  ageLabels; 
  AgeRange:string; 
  AgeCourbe:number; 
  mainColor:string; 
  sexePatient:boolean; 
  sexeMF:string="Fille"; 
  Taille:number;
  BMI:number; 
  SurfaceCorporelle:number; 

  public lineChart: Chart;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,  
    public storage: Storage, 
    public alertController: AlertController, 
    )
    {
  }

  addTaille(Taille){
    this.Taille = Taille ; 
    console.log ("la taille est de ", this.Taille, " cm" );
    this.BMI = Math.round(this.PoidsNum/((this.Taille/100)*(this.Taille/100))*10)/10 ; 
    console.log ("le BMI est de ", this.BMI, " kg/m2" );
  }; 

  pickGender(ValeurChoisie){
      this.sexeMF = ValeurChoisie; 
      this.setDataPoids();
      this.graphLoad(); 
  };

  setDataPoids(){
    if (this.AgeNum <=12 && this.sexeMF == "Garçon") 
        {
          this.ageLabels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] ;
          this.dataPoidsMediane = [3.4 , 4.4 , 5.4 , 6.2 , 6.7 , 7.4 , 7.9 , 8.3 , 8.7 , 9 , 9.4 , 9.6 , 9.9 , 10.2] ;
          this.dataPoids3 = [2.5 , 3.4 , 4.2 , 5 , 5.5 , 6 , 6.4 , 6.8 , 7.1 , 7.4 , 7.6 , 7.9 , 8 , 8.2 ] ; 
          this.dataPoids97 = [4.7 , 5.4 , 6.5 , 7.5 , 8.3 , 9 , 9.6 , 10.2 , 10.6 , 10.8 , 11.4 , 11.7 , 12 , 12.3] ;
          this.mainColor = "rgba(54, 162, 235, 1)"; 
          this.AgeCourbe = this.AgeNum ;
          this.AgeRange = "0 à 12 mois"
        }
    else if (this.AgeNum <= 12 && this.sexeMF == "Fille")
        {
          this.ageLabels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] ;
          this.dataPoidsMediane = [3.4 , 4.2 , 5 , 5.7 , 6.4 , 6.9 , 7.4 , 7.7 , 8.1 , 8.4 , 8.8 , 9 , 9.3 , 9.6] ;
          this.dataPoids3 = [ 2.5 , 3.4 , 4 , 4.5 , 5 , 5.5 , 5.9 , 6.5 , 6.7 , 6.8 , 7.1 , 7.4 , 7.6 , 7.8] ; 
          this.dataPoids97 = [4.5 , 5 , 6 , 6.9 , 7.7 , 8.4 , 9 , 9.5 , 10 , 10.4 , 10.7 , 11 , 11.4 , 11.8] ;
          this.mainColor = "rgb(255,20,147,1)";
          this.AgeCourbe = this.AgeNum ; 
          this.AgeRange = "0 à 12 mois"
        }
    else if (this.AgeNum > 12 && this.sexeMF == "Garçon")
        {
          this.ageLabels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18] ;
          this.dataPoidsMediane = [10 , 12.2 , 14.5 , 16.3 , 18.3 , 21 , 23.5 , 26 , 29.5 , 32.5 , 36 , 40 , 45.5 , 51 , 56 , 60 , 63.5 , 66] ;
          this.dataPoids3 = [8, 10, 12, 13.3, 15 , 16.2 , 18 , 20 , 22, 24 , 26 , 28.2 , 31 , 35 , 39.5 , 44 , 46.5 , 48.5] ; 
          this.dataPoids97 = [12 , 15 , 18 , 21.5 , 24.2 , 28 , 32.5 , 37.5 , 43.5 , 49 , 55 , 62 , 70 , 78 , 82.5 , 86 , 90.5 , 96.5] ;
          this.mainColor = "rgba(54, 162, 235, 1)"; 
          this.AgeCourbe = Math.round(this.AgeNum/12); 
          this.AgeRange = "1 à 18 ans"

        }
    else if (this.AgeNum > 12 && this.sexeMF == "Fille")
        {
          this.ageLabels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18] ;
          this.dataPoidsMediane = [9.5 , 12 , 14 , 16 , 18 , 20.5 , 23 , 26 , 29 , 32.5 , 36 , 41 , 46 , 50 , 52.5 , 54.3 , 55.8 , 56.2] ;
          this.dataPoids3 = [7.5 , 9.5 , 11.5 , 13 , 14.5 , 16 , 18 , 19.5 , 21.5 , 23.5 , 25.5 , 28.5 , 32 , 36 , 39 , 41 , 42 , 43] ; 
          this.dataPoids97 = [11.5 , 15 , 18 , 21 , 24.5 , 28 , 32.5 , 38 , 42.5 , 48.5 , 55 , 62 , 68 , 72.5 , 74.5 , 77 , 79 , 81] ;
          this.mainColor = "rgb(255,20,147,1)";
          this.AgeCourbe = Math.round(this.AgeNum/12) ; 
          this.AgeRange = "1 à 18 ans"
        }
  };

  graphLoad() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, 
      {       
      type: "line",
      data: {    
        labels: this.ageLabels,
        datasets: [
          {
            label: "97%",
            data: this.dataPoids97,
            borderColor:"rgba(180, 180, 180, 1)",
            backgroundColor : "rgba(0,0,0,0)",
            borderWidth: 1,
            pointRadius: 1, 
          }, 
          {
            label: "50%",
            data: this.dataPoidsMediane,
            borderColor: this.mainColor,
            backgroundColor : "rgba(0,0,0,0)",
            borderWidth: 1,
            pointRadius: 1, 
          },
          {
            label: "3%",
            data: this.dataPoids3,
            borderColor:"rgba(180, 180, 180, 1)",
            backgroundColor : "rgba(0,0,0,0)",
            borderWidth: 1,
            pointRadius: 1, 
          }, 

          {
            label: "Mon Patient",
            data: [ 
             {
              x:this.AgeCourbe,
              y:this.PoidsNum,
             }
        ],
            borderColor:"rgba(255, 0, 0, 1)",
            backgroundColor : "rgba(255, 0, 0, 1)",
            borderWidth: 2,
            pointRadius: 10,
            type: "bubble",  
          }, 
        ]
      },
      options: {
        legend: {
          display: false, 
        },
        scales: {
          xAxes: [
            {
              scaleLabel: {
                fontSize: 10,
                display: false,
                labelString: 'Age (mois)'
            },
              ticks: {
                beginAtZero: true
              }}],
          yAxes: [
            {
              scaleLabel: {
                fontSize: 10,
                display: false,
                labelString: 'kg'
            },
              ticks: {
                beginAtZero: true
              }}]}}});
            
            console.log(this.AgeCourbe);};

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'alerte',
      title: 'Minute papillon !',
      message: 'Saisissez un âge et un poids pour le patient.',
      buttons: [
        {
          text: 'Nan',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: Nan');

          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            this.navCtrl.push(AccueilPage);
          }
        }
      ]
    });

    await alert.present();
    };

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocoRegionalePage');
  }

  ionViewWillEnter()
  {
    let promiseList: Promise<any>[] = [];
    promiseList.push(
    this.storage.get('AgeNum').then((Age) => {
        this.AgeNum = Age;
    this.storage.get('PoidsNum').then((Poids) => {
        this.PoidsNum = Poids;

          if (!this.PoidsNum || !this.AgeNum) { this.presentAlert();this.calculs();}
          else { this.setDataPoids(); this.graphLoad(); this.calculs();};      
        });  }))}; 

    calculs () {
      let promiseList: Promise<any>[] = [];
    promiseList.push(
    this.storage.get('AgeNum').then((Age) => {
        this.AgeNum = Age;
    this.storage.get('PoidsNum').then((Poids) => {
        this.PoidsNum = Poids;
        /*placer les calculs ici*/

        this.SurfaceCorporelle = Math.round(((4*this.PoidsNum + 7)/ (this.PoidsNum + 90)) *10)/10;
        console.log ("la surface corporelle est de ", this.SurfaceCorporelle, " m2" );

  })
      }))};

}
