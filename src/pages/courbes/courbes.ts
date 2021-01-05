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

  @ViewChild("PoidsCanvas") PoidsCanvas: ElementRef;
  @ViewChild("TailleCanvas") TailleCanvas: ElementRef;

  AgeNum:number; 
  PoidsNum:number;
  DureeJeune:number; 
  Allergie:number; 
  EstomacPlein:boolean; 
  EstomacOuiNon:string;

  dataPoidsMediane;
  dataPoids3;
  dataPoids97; 

  dataTailleMediane;
  dataTaille3;
  dataTaille97; 

  ageLabels; 
  AgeRange:string; 
  AgeCourbe:number; 
  mainColor:string; 
  bubbleColor:string;
  sexePatient:boolean; 
  sexeMF:string="Fille"; 
  Taille:number;
  BMI:any; 
  SurfaceCorporelle:number; 
  BMIinfo:string; 

  public lineChart: Chart;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,  
    public storage: Storage, 
    public alertController: AlertController, 
    )
    {
  }




  setDataPoids(){
    if (this.AgeNum <=12 && this.sexeMF == "Garçon") 
        {
          this.ageLabels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] ;
          this.dataPoidsMediane = [3.4 , 4.4 , 5.4 , 6.2 , 6.7 , 7.4 , 7.9 , 8.3 , 8.7 , 9 , 9.4 , 9.6 , 9.9 , 10.2] ;
          this.dataPoids3 = [2.5 , 3.4 , 4.2 , 5 , 5.5 , 6 , 6.4 , 6.8 , 7.1 , 7.4 , 7.6 , 7.9 , 8 , 8.2 ] ; 
          this.dataPoids97 = [4.7 , 5.4 , 6.5 , 7.5 , 8.3 , 9 , 9.6 , 10.2 , 10.6 , 10.8 , 11.4 , 11.7 , 12 , 12.3] ;
          this.mainColor = "rgba(54, 162, 235, 1)";
          this.bubbleColor = "rgba(54, 162, 235, 1)";  
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
          this.bubbleColor = "rgb(255,20,147,1)"; 
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
          this.bubbleColor = "rgba(54, 162, 235, 1)"; 
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
          this.bubbleColor = "rgb(255,20,147,1)"; 
          this.AgeCourbe = Math.round(this.AgeNum/12) ; 
          this.AgeRange = "1 à 18 ans"
        }
  };

  graphPoidsLoad() {
    this.lineChart = new Chart(this.PoidsCanvas.nativeElement, 
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
            borderColor: this.bubbleColor,
            backgroundColor : "rgba(0, 0, 0, 0)",
            borderWidth: 3,
            pointRadius: 2,
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

            setDataTaille(){
              if (this.AgeNum <=12 && this.sexeMF == "Garçon") 
                  {
                    this.ageLabels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] ;
                    this.dataTailleMediane = [ 50 , 54 , 58 ,  61 , 63.5 , 66 , 67.5 , 69 , 71 , 72 , 73.5 , 74.5 , 75.5 ] ;
                    this.dataTaille3 = [ 47 , 50 , 54  , 57  , 59  , 62  , 63.5  , 65 , 66 , 67.5  , 68.5 , 69.5 , 71 ] ; 
                    this.dataTaille97 = [ 54 , 58 , 62 , 65 , 68 , 70 , 72 , 74 , 75 , 77 , 78 , 79.5 , 81 ] ;
                    this.mainColor = "rgba(54, 162, 235, 1)"; 
                    this.bubbleColor = "rgba(54, 162, 235, 1)"; 
                    this.AgeCourbe = this.AgeNum ;
                    this.AgeRange = "0 à 12 mois"
                  }
              else if (this.AgeNum <= 12 && this.sexeMF == "Fille")
                  {
                    this.ageLabels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] ;
                    this.dataTailleMediane = [ 50 , 53 , 56.5 , 59.5 , 62 , 64.5 , 65.5 , 67 , 69 , 70.5 , 72 , 73 , 74 ] ;
                    this.dataTaille3 = [ 47 , 49.5 , 52.5 , 55 , 58 , 60 , 62 , 63 , 64.5 , 66 , 67 , 68 , 69 ] ; 
                    this.dataTaille97 = [ 54 , 57 , 60 , 63.5 , 66 , 68 , 70 , 72 , 73 , 75 , 76.5 , 78 , 79 ]
                    this.mainColor = "rgb(255,20,147,1)";
                    this.bubbleColor = "rgb(255,20,147,1)"; 
                    this.AgeCourbe = this.AgeNum ; 
                    this.AgeRange = "0 à 12 mois"
                  }
              else if (this.AgeNum > 12 && this.sexeMF == "Garçon")
                  {
                    this.ageLabels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18] ;
                    this.dataTailleMediane = [ 76 , 88 , 96.5 , 104 , 111 , 117 , 123.5 , 129 , 134.5 , 140 , 145 , 150.5 , 157 , 164 , 169.5 , 173 , 175 , 176 ] ;
                    this.dataTaille3 = [ 71 , 82 , 90 , 96 , 102 , 108 , 113 , 118 , 123 , 127.5 , 132 , 135.5 , 140 , 146 , 152 , 157 , 160 , 162 ] ; 
                    this.dataTaille97 = [ 81 , 94 , 104 , 112 , 120 , 127 , 134 , 140 , 146.5 , 152.5 ,  158.5 , 165.5 , 174 , 182 , 187 , 188.5, 189.5 , 190.5] ;
                    this.mainColor = "rgba(54, 162, 235, 1)"; 
                    this.bubbleColor = "rgba(54, 162, 235, 1)"; 
                    this.AgeCourbe = Math.round(this.AgeNum/12); 
                    this.AgeRange = "1 à 18 ans"
          
                  }
              else if (this.AgeNum > 12 && this.sexeMF == "Fille")
                  {
                    this.ageLabels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18] ;
                    this.dataTailleMediane = [ 74.5 , 87 , 95.5 , 103 , 110 , 117.5 , 122.5 , 128 , 134 , 139.5 , 146 , 152 , 157.5 , 161 , 162.5 , 163.5 , 164 , 164.5] ;
                    this.dataTaille3 = [ 69.5 , 80.5 , 88 , 95 , 101 , 106.5 , 112 , 117 , 122 , 126 , 131 , 137 , 143.5 , 148 , 150 , 151 , 151.5 , 151.8 ] ; 
                    this.dataTaille97 = [ 79 , 93 , 103 , 111 , 119 , 126 , 133 , 140 , 146 , 153 , 160 , 167 , 172 , 174 , 175.5 , 176 , 177 , 177.5 ] ;
                    this.mainColor = "rgb(255,20,147,1)";
                    this.bubbleColor = "rgb(255,20,147,1)"; 
                    this.AgeCourbe = Math.round(this.AgeNum/12) ; 
                    this.AgeRange = "1 à 18 ans"
                  }
            };
          
            graphTailleLoad() {
              this.lineChart = new Chart(this.TailleCanvas.nativeElement, 
                {
                type: "line",
                data: {    
                  labels: this.ageLabels,
                  datasets: [
                    {
                      label: "97%",
                      data: this.dataTaille97,
                      borderColor:"rgba(180, 180, 180, 1)",
                      backgroundColor : "rgba(0,0,0,0)",
                      borderWidth: 1,
                      pointRadius: 1, 
                    }, 
                    {
                      label: "50%",
                      data: this.dataTailleMediane,
                      borderColor: this.mainColor,
                      backgroundColor : "rgba(0,0,0,0)",
                      borderWidth: 1,
                      pointRadius: 1, 
                    },
                    {
                      label: "3%",
                      data: this.dataTaille3,
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
                        y:this.Taille,
                       }
                  ],
                      borderColor: this.bubbleColor,
                      backgroundColor : "rgba(0, 0, 0, 0)",
                      borderWidth: 3,
                      pointRadius: 2,
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
    console.log('ionViewDidLoad Page de Biométrie');
  }

  ionViewWillEnter()
  {
  
   let promiseList: Promise<any>[] = [];
    promiseList.push(
    this.storage.get('AgeNum').then((Age) => {
        this.AgeNum = Age;
    this.storage.get('PoidsNum').then((Poids) => {
        this.PoidsNum = Poids;

          if (!this.PoidsNum || !this.AgeNum) { this.presentAlert(); this.calculs()}
          else {this.calculs();};      
         });  }))}; 

    calculs () {
      let promiseList: Promise<any>[] = [];
    promiseList.push(
    this.storage.get('AgeNum').then((Age) => {
        this.AgeNum = Age;
    this.storage.get('PoidsNum').then((Poids) => {
        this.PoidsNum = Poids;
    this.storage.get('Taille').then((Taille) => {
        this.Taille = Taille; 
   
    this.storage.get('sexeMF').then((sexe) => {
        if(!sexe){this.sexeMF = "Fille";}
        else {this.sexeMF = sexe};
  
        /*placer les calculs ici*/

        this.SurfaceCorporelle = Math.round(((4*this.PoidsNum + 7)/ (this.PoidsNum + 90)) *10)/10;
        console.log ("la surface corporelle est de ", this.SurfaceCorporelle, " m2" );

        if(this.Taille){this.BMIinfo = "Poids/Taille²"}
        else{
          this.BMIinfo = "Renseigner une taille dans les options";}

        this.setDataPoids();
        this.graphPoidsLoad(); 
        this.setDataTaille();
        this.graphTailleLoad();

        if(this.Taille > 0) {this.BMI = Math.round(this.PoidsNum/((this.Taille/100)*(this.Taille/100))*10)/10 ;}
        else{this.BMI = "NA";}


      });
      });

      })
      }))};

}
