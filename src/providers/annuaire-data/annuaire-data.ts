import { Injectable } from '@angular/core';

/*
  Generated class for the AnnuaireDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()

export class AnnuaireDataProvider {
  public items: any = [];


  constructor() {
    this.items = [
      { nom: "ABDAT Rachida - Médecin - Anesthésie", telephone: "4 4101", secteur: "" },
      { nom: "AMIEL Isabelle - Médecin - Anesthésie" , telephone: "4 4034", secteur: ""},
      { nom: "ASSAKER Rita - Médecin - Anesthésie", telephone: "4 3527", secteur: "" },
      { nom: "AYAN MANESH Fanny - Médecin - Anesthésie" , telephone: "4 1619", secteur: ""},      
      { nom: "AZALE Mehdi - Médecin - Anesthésie", telephone: "4 4017", secteur: "" },
      { nom: "BROUNS Kelly - Médecin - Anesthésie" , telephone: "4 1680", secteur: ""},
      { nom: "BRUNEAU Béatrice - Médecin - Anesthésie", telephone: "4 2282", secteur: "" },
      { nom: "CHOLET Clémentine - Médecin - Anesthésie" , telephone: "4 1702", secteur: ""},
      { nom: "COLAS Anne-Emmanuelle - Médecin - Anesthésie", telephone: "4 4011", secteur: "" },
      { nom: "DAHMANI Souhayl - PUPH - Anesthésie" , telephone: "4 ", secteur: ""},
      { nom: "DREYFUS Aliénor - Médecin - Anesthésie", telephone: "4 2593", secteur: "" },
      { nom: "FAIT Charlotte - Médecin - Anesthésie" , telephone: "4 3186", secteur: ""},
      { nom: "GREFF Bruno - Médecin - Anesthésie", telephone: "4 2183", secteur: "" },
      { nom: "HADDAD Valéry-Jo - Médecin - Anesthésie" , telephone: "4 1675", secteur: ""},
      { nom: "JULIEN Florence - Médecin - Anesthésie", telephone: "4 2714", secteur: "" },
      { nom: "LIRA Elsa - Médecin - Anesthésie", telephone: "4 4015", secteur: "" },
      { nom: "LOISELLE Maud - Médecin - Anesthésie" , telephone: "4 1703", secteur: ""},
      { nom: "MANGALSUREN Nyama - Médecin - Anesthésie", telephone: "4 2591", secteur: "" },
      { nom: "MARSAC Lucile - Médecin - Anesthésie", telephone: "4 4103", secteur: "" },
      { nom: "PONTONE Silvia - Médecin - Anesthésie" , telephone: "4 4009", secteur: ""},
      { nom: "TRI Nathalie - Médecin - Anesthésie", telephone: "4 4091", secteur: "" },
      { nom: "SILINS Vilnis - Médecin - Anesthésie", telephone: "4 4010", secteur: "" },
      { nom: "VACHER Thomas - Médecin - Anesthésie" , telephone: "4 2799", secteur: ""},
      { nom: "MAR Volant - Médecin - Anesthésie", telephone: "4 1375", secteur: "" },
      { nom: "IADE Polyvalent - IADE - Anesthésie", telephone: "4 3990", secteur: "" },
      { nom: "Consultation - Anesthésie" , telephone: "4 2221", secteur: "Bleu, étage -1"},
      { nom: "MAR de garde pédiatrie - Médecin - Anesthésie", telephone: "4 3831", secteur: "" },
      { nom: "Interne de garde - Médecin - Anesthésie", telephone: "4 3853", secteur: "" },
      { nom: "IADE de garde - IADE - Anesthésie", telephone: "4 3832", secteur: "" },
      { nom: "Réveil bloc commun (fixe) - Anesthésie", telephone: "4 2271", secteur: "Jaune, étage -3" },
      { nom: "Réveil bloc commun (DECT) - Anesthésie", telephone: "4 1096", secteur: "Jaune, étage -3" },
      { nom: "Réveil bloc HDJ (fixe) - Anesthésie", telephone: "4 2236", secteur: "Jaune, étage -2" },
      { nom: "Réveil bloc HDJ (DECT) - Anesthésie", telephone: "4 1087", secteur: "Jaune, étage -2" },
      { nom: "Réveil bloc GynObst (fixe) - Anesthésie", telephone: "4 2151", secteur: "Rouge, étage +1" },
      { nom: "Réveil bloc GynObst (DECT) - Anesthésie", telephone: "4 3836", secteur: "Rouge, étage +1" },
      { nom: "Réveil IRM - Anesthésie", telephone: "4 8279", secteur: "Bleu, étage -3" },
      { nom: "Bureau IADE bloc commun - Anesthésie", telephone: "4 3325", secteur: "Jaune, étage -3" },
      { nom: "PAULET Fabienne - Cadre supérieur de bloc", telephone: "4 2280", secteur: "Jaune, étage -3" },
      { nom: "BUB Isabelle - Cadre SSPI", telephone: "4 2564", secteur: "Jaune, étage -3" },
      { nom: "BLANCARD Benoit - Cadre IADE", telephone: "4 2269", secteur: "Jaune, étage -3" },
      { nom: "CHIRON Christophe - Coordination technique", telephone: "4 4164", secteur: "" },
      { nom: "BERDJI Abdel - IADE - Gestes d'urgence", telephone: "4 4154", secteur: ""},
      { nom: "MIMOUNI Corinne - Secrétariat - Anesthésie-Réanimation", telephone: "4 2268", secteur: "Rouge, étage 0" },
      { nom: "Fax bloc commun", telephone: "4 2024", secteur: "Jaune, étage -3" },
      { nom: "Fax consultation anesthésie", telephone: "4 2760", secteur: "Bleu, étage -1" },
      { nom: "Fax secrétariat anesthésie", telephone: "4 2237", secteur: "Bleu, étage -1" },
      { nom: "Infirmière douleur (CETD)", telephone: "4 5343 ou 4 4063", secteur: "Jaune, étage -2" },
      { nom: "Secrétariat douleur (CETD)", telephone: "4 5346 ou 4 4195", secteur: "Jaune, étage -2" },
      { nom: "Chirurgie Orthopédique (hospitalisation)", telephone: "4 2038 ou 4 1302", secteur: "Bleu, étage +3" },
      { nom: "USC (soins continus)", telephone: "4 1315 ou 4 2032", secteur: "Bleu, étage +4" },
      { nom: "Chirurgie Viscérale et Urologique (hospitalisation)", telephone: "4 1317 ou 4 2316", secteur: "Bleu, étage +4" },
      { nom: "Chirurgie ORL (hospitalisation)", telephone: "4 1318", secteur: "Bleu, étage +5" },
      { nom: "Néphrologie (hospitalisation)", telephone: "4 2394", secteur: "Bleu, étage +2" },
      { nom : "Pédiatrie Générale (hospitalisation grands)", telephone: "4 2047 ou 4 2049", secteur : "Bleu ou Vert, étage +4"},
      { nom : "Pédiatrie Générale (hospitalisation petits)", telephone: "4 2050", secteur : "Bleu ou Vert, étage +4"},
      { nom : "Neurologie (hospitalisation)", telephone: "4 2057", secteur : "Vert, étage +3"}, 
      { nom : "Hématologie (hospitalisation)", telephone: "4 3223", secteur : "Vert, étage +4"},
      { nom : "Hématologie (hospitalisation)", telephone: "4 3034", secteur : "Vert, étage +5"},
      { nom : "Hématologie (hospitalisation petits)", telephone: "4 8189", secteur : "Vert, étage +4"},
      { nom : "Gastro-entérologie (hospitalisation grands)", telephone: "4 2289", secteur : "Vert, étage +5"},
      { nom : "Gastro-entérologie (hospitalisation petits)", telephone: "4 3710", secteur : "Vert, étage +5"},
      { nom : "Mucoviscidose (hospitalisation)", telephone: "4 1285", secteur : ""},
      { nom : "Réanimation pédiatrique (hospitalisation)", telephone: "4 3416 ou 4 2287", secteur : "Jaune, étage -3, Code 1950A"},
      { nom : "Réanimation néonatale (hospitalisation)", telephone: "4 2058 ou 4 3114", secteur : "Rouge, étage +3"},
      { nom : "Néonatalogie (hospitalisation, côté maternité)", telephone: "4 2157", secteur : "Rouge, étage +2"},
      { nom : "Néonatologie (hospitalisation)", telephone: "4 2058 ou 4 2063 ou 4 2066", secteur : "Rouge, étage +3"},
      { nom : "Endocrinologie et Diabétologie (hospitalisation)", telephone: "4 2068", secteur : "  Vert, étage +3"},
      { nom : "Urgences (SAU)", telephone: "4 3322", secteur : "Jaune, étage -3"},
      { nom : "Urgences - Lits porte (hospitalisation)", telephone: "4 5313", secteur : "Jaune, étage -3 - code 6789"},
      { nom : "Cardiologie (hospitalisation)", telephone: "4 2065", secteur : "Bleu, étage +2"},
      { nom : "PC Sécurité", telephone: "4 3255", secteur : ""},
      { nom : "Obstétrique (hospitalisation)", telephone: "4 2120 ou 4 2098 ou 4 1303", secteur : "Rouge, étage +2"},
      { nom : "Gynécologie (hospitalisation)", telephone: "4 2093", secteur : "Rouge, étage +2"},
      { nom : "Salle de travail (maternité)", telephone: "4 2155 ou 4 3523", secteur : "Rouge, étage +1"},
      { nom : "Sage-femme (maternité)", telephone: "4 3485", secteur : "Rouge, étage +1"},
      { nom : "Bloc maternité - IDE", telephone: "4 3202", secteur : ""},
      { nom : "Admissions", telephone: "4 2198", secteur : ""},
      { nom : "Informatique", telephone: "4 3700", secteur : ""},
      { nom : "TAL", telephone: "4 1341", secteur : ""},
      { nom : "Lingerie", telephone: "4 5715", secteur : ""},
      { nom : "Service technique", telephone: "4 3900", secteur : ""},
      { nom : "Service BioMed", telephone: "4 4793", secteur : ""},
      { nom : "Kinésithérapeutes", telephone: "4 3868, 3877, 2231, 3865, 1358", secteur : ""},
      { nom : "Radiologue de garde - Médecin", telephone: "4 2330", secteur : ""},
    ];
  }

  orderItems(){

      const sorted = this.items.sort((a, b) => a.nom > b.nom ? 1 : -1);
      const grouped = sorted.reduce((groups, item) => {
      const letter = item.nom.charAt(0);

      groups[letter] = groups[letter] || [];
      groups[letter].push(item);

        return groups;}, {});

      const result = Object.keys(grouped).map(key => ({key, items: grouped[key]}));

  };

  filterItems(searchTerm) {
    return this.items.filter(item => {
      return item.nom.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }



}