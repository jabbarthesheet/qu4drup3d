webpackJsonp([0],{

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__biometrie_biometrie__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__options_options__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the PatientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PatientPage = /** @class */ (function () {
    function PatientPage(app, navCtrl, navParams, storage) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__biometrie_biometrie__["a" /* BiometriePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__options_options__["a" /* OptionsPage */];
    }
    PatientPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PatientPage');
    };
    PatientPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-patient',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\patient\patient.html"*/'<!--\n  Generated template for the PatientPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Patient</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  \n    <ion-tabs>\n          <ion-tab [root]="tab1Root" tabTitle="Biométrie" tablicon="accessibility" > </ion-tab>\n          <ion-tab [root]="tab2Root" tabTitle="Options" tablicon="menu"> </ion-tab>\n    </ion-tabs>\n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\patient\patient.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], PatientPage);
    return PatientPage;
}());

//# sourceMappingURL=patient.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BiometriePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accueil_accueil__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the BiométriePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BiometriePage = /** @class */ (function () {
    function BiometriePage(app, navCtrl, navParams, storage) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.biometrie = { Kg: "", Gr: "", mois: "", ans: "" };
        this.AgeNum = 0;
        this.PoidsNum = 0;
    }
    ;
    BiometriePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BiometriePage');
    };
    ;
    BiometriePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var promiseList = [];
        promiseList.push(this.storage.get('AgeForCalc').then(function (Age) {
            _this.AgeNum = Age;
            _this.storage.get('PoidsForCalc').then(function (Poids) {
                _this.PoidsNum = Poids;
                console.log('Le patient a', _this.AgeNum, "mois au total pour ", _this.PoidsNum, " kg.");
                _this.storage.get('EstomacPlein').then(function (estomacplein) {
                    _this.EstomacPlein = estomacplein;
                    if (_this.EstomacPlein == true) {
                        _this.EstomacOuiNon = "plein";
                    }
                    else {
                        _this.EstomacOuiNon = "vide";
                    }
                    _this.storage.get('DureeJeune').then(function (dureejeune) {
                        _this.DureeJeune = dureejeune;
                        _this.storage.get('Allergie').then(function (allergie) {
                            _this.Allergie = allergie;
                        });
                    });
                });
            });
        }));
        var promiseListFill = [];
        promiseListFill.push(this.storage.get('MoisFill').then(function (Mois) {
            _this.MoisFill = Mois;
        }));
        promiseListFill.push(this.storage.get('AnsFill').then(function (Ans) {
            _this.AnsFill = Ans;
            console.log('Le patient a', _this.MoisFill, 'mois au total pour et', _this.AnsFill, 'ans soit un total de ', _this.AgeNum, 'mois.');
        }));
        promiseListFill.push(this.storage.get('GrFill').then(function (grammes) {
            _this.GrFill = grammes;
        }));
        promiseListFill.push(this.storage.get('KgFill').then(function (kilo) {
            _this.KgFill = kilo;
            console.log('Le patient pese', _this.KgFill, 'kg et', _this.GrFill, 'grammes, soit un total de ', _this.PoidsNum, ' kg.');
        }));
    };
    ;
    BiometriePage.prototype.delete = function () {
        var _this = this;
        this.storage.clear();
        this.AgeNum = null;
        this.PoidsNum = null;
        this.DureeJeune = null;
        this.GrFill = null;
        this.AnsFill = null;
        this.MoisFill = null;
        this.EstomacOuiNon = null;
        this.Allergie = "";
        this.storage.set('KgFill', null);
        this.storage.set('GrFill', null);
        this.storage.set('AnsFill', null);
        this.storage.set('MoisFill', null);
        var promiseListFill = [];
        promiseListFill.push(this.storage.get('MoisFill').then(function (Mois) {
            _this.MoisFill = Mois;
        }));
        promiseListFill.push(this.storage.get('AnsFill').then(function (Ans) {
            _this.AnsFill = Ans;
            console.log('Le patient a', _this.MoisFill, 'mois au total pour et', _this.AnsFill, 'ans soit un total de ', _this.AgeNum, 'mois.');
        }));
        promiseListFill.push(this.storage.get('GrFill').then(function (grammes) {
            _this.GrFill = grammes;
        }));
        promiseListFill.push(this.storage.get('KgFill').then(function (kilo) {
            _this.KgFill = kilo;
            console.log('Le patient pese', _this.KgFill, 'kg et', _this.GrFill, 'grammes, soit un total de ', _this.PoidsNum, ' kg.');
        }));
    };
    BiometriePage.prototype.logForm = function () {
        /* Acquisition des données saisies par l'utilisateur*/
        var KgNum = parseInt(this.biometrie.Kg);
        var GrNum = parseInt(this.biometrie.Gr);
        if (GrNum && KgNum) {
            this.PoidsNum = KgNum + GrNum / 1000;
        }
        else if (GrNum && !KgNum) {
            this.PoidsNum = GrNum / 1000;
        }
        else if (!GrNum && KgNum) {
            this.PoidsNum = KgNum;
        }
        ;
        if (GrNum == 0 || GrNum == null) {
            this.GrFill = "0";
        }
        else {
            this.GrFill = GrNum;
        }
        if (KgNum == 0 || KgNum == null) {
            this.KgFill = "0";
        }
        else {
            this.KgFill = KgNum;
        }
        ;
        var MoisNum = parseInt(this.biometrie.mois);
        var AnsNum = parseInt(this.biometrie.ans);
        if (AnsNum && MoisNum) {
            this.AgeNum = AnsNum * 12 + MoisNum;
        }
        else if (MoisNum && !AnsNum) {
            this.AgeNum = MoisNum;
        }
        else if (AnsNum && !MoisNum) {
            this.AgeNum = AnsNum * 12;
        }
        ;
        if (AnsNum == 0 || AnsNum == null) {
            this.AnsFill = "0";
        }
        else {
            this.AnsFill = AnsNum;
        }
        if (MoisNum == 0 || MoisNum == null) {
            this.MoisFill = "0";
        }
        else {
            this.MoisFill = MoisNum;
        }
        ;
        /* Vérification que le formulaire est correctement complété */
        if (!this.PoidsNum) {
            alert('Renseigner le poids du patient.');
        }
        else if (!MoisNum && !AnsNum) {
            alert('Renseigner un âge pour le patient.');
        }
        else {
            console.log('Le patient a', AnsNum, "ans et", MoisNum, "mois soit ", this.AgeNum, "mois au total pour ", this.PoidsNum, " kg.");
            /* Enregistrement des données saisies */
            this.storage.set('AgeForCalc', this.AgeNum);
            this.storage.set('PoidsForCalc', this.PoidsNum);
            this.storage.set('MoisFill', this.MoisFill);
            this.storage.set('AnsFill', this.AnsFill);
            this.storage.set('GrFill', this.GrFill);
            this.storage.set('KgFill', this.KgFill);
        }
    };
    ;
    BiometriePage.prototype.goToHome = function () {
        var nav = this.app.getRootNav();
        nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__accueil_accueil__["a" /* AccueilPage */]);
    };
    ;
    BiometriePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-biometrie',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\biometrie\biometrie.html"*/'<!--\n  Generated template for the BiométriePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  \n  <ion-item color="secondary"> \n    <ion-label class="MonPatient" >Mon patient : {{AgeNum}} mois - {{PoidsNum}} kg \n      <p class="dilution">Estomac {{EstomacOuiNon}} - Jeune {{DureeJeune}} h</p> \n      <p>Allergie : {{Allergie}}</p>\n    </ion-label>\n    \n    </ion-item>\n</ion-header>\n\n<ion-content padding>\n\n  <form (ngSubmit)="logForm()">\n\n    <ion-list> <ion-item-group>\n        <ion-item-divider color="warning">\n          <ion-label>Poids \n            <p><i>(ex 3,5 kg : indiquer 3 puis 500)</i></p></ion-label>\n        </ion-item-divider> \n\n  <ion-item>\n    <ion-label position="stacked">Kilogrammes</ion-label>\n    <ion-input inputmode ="numeric" type="number" [(ngModel)]="biometrie.Kg" name="poids" placeholder="{{KgFill}}"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position="stacked">Grammes</ion-label>\n    <ion-input inputmode ="numeric" type="number" [(ngModel)]="biometrie.Gr" name="poids" placeholder="{{GrFill}}"></ion-input>\n  </ion-item>\n\n      </ion-item-group>\n\n      <ion-item-group>\n        <ion-item-divider color="warning">\n          <ion-label>Age \n              <p><i>(ex 1 an et demi : indiquer 1 puis 6)</i></p></ion-label>\n        </ion-item-divider> \n\n  <ion-item>\n    <ion-label position="stacked">Années</ion-label>\n    <ion-input inputmode="numeric" type="number" [(ngModel)]="biometrie.ans" name="ans" placeholder="{{AnsFill}}"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position="stacked">Mois</ion-label>\n    <ion-input inputmode="numeric" type="number" [(ngModel)]="biometrie.mois" name="mois" placeholder="{{MoisFill}}"></ion-input>\n  </ion-item>\n  <button ion-button type="submit" block>Enregistrer les données</button>\n \n      </ion-item-group>\n</ion-list>\n</form>\n<button ion-button (click)="delete()" block color="danger">Effacer les données</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\biometrie\biometrie.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], BiometriePage);
    return BiometriePage;
}());

//# sourceMappingURL=biometrie.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accueil_accueil__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the OptionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OptionsPage = /** @class */ (function () {
    /* Fin de déclaration des variables */
    function OptionsPage(app, navCtrl, navParams, storage) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        /* déclarer ici les variables */
        this.options = { dureejeune: "", estomacplein: "false" };
        this.DureeJeune = 6;
        this.dureejeunelast = 6;
        this.Allergie = "Aucune";
    }
    OptionsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var promiseList = [];
        promiseList.push(this.storage.get('AgeForCalc').then(function (Age) {
            _this.AgeNum = Age;
            _this.storage.get('PoidsForCalc').then(function (Poids) {
                _this.PoidsNum = Poids;
                console.log('Le patient a', _this.AgeNum, "mois au total pour ", _this.PoidsNum, " kg.");
                _this.storage.get('Allergie').then(function (allergie) {
                    _this.Allergie = allergie;
                });
            });
        }));
        var promiseOptions = [];
        promiseOptions.push(this.storage.get('EstomacPlein').then(function (esto) {
            _this.estomaclast = esto;
            console.log('estomac plein? qqq', _this.estomaclast);
            _this.storage.get('DureeJeune').then(function (dureejeune) {
                _this.DureeJeune = dureejeune;
                console.log('duree du jeune renseignee de', _this.DureeJeune, 'heures.');
            });
        }));
        console.log('IonViewWillEnter OptionsPage');
    };
    ;
    OptionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OptionsPage');
    };
    ;
    OptionsPage.prototype.addAllergie = function () {
        console.log(this.NewAllergie);
        this.Allergie = this.NewAllergie;
        this.storage.set('Allergie', this.Allergie);
        console.log(this.Allergie, 'a bien été enregistrée');
    };
    ;
    OptionsPage.prototype.FnEstomacPlein = function () {
        this.EstomacPlein = !this.EstomacPlein;
        console.log("l'estomac est plein ?", this.EstomacPlein);
        if (this.EstomacPlein == true) {
            this.EstomacOuiNon = "plein";
        }
        else {
            this.EstomacOuiNon = "vide";
        }
        ;
        this.storage.set('EstomacPlein', this.EstomacPlein);
    };
    ;
    OptionsPage.prototype.FnDureeJeune = function () {
        console.log('dureejeune = ', this.DureeJeune);
        this.storage.set('DureeJeune', this.DureeJeune);
    };
    ;
    OptionsPage.prototype.goToHome = function () {
        var nav = this.app.getRootNav();
        nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__accueil_accueil__["a" /* AccueilPage */]);
    };
    ;
    OptionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-options',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\options\options.html"*/'<!--\n  Generated template for the OptionsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-item color="secondary"> \n    <ion-label class="MonPatient" >Mon patient : {{AgeNum}} mois - {{PoidsNum}} kg \n      <p class="dilution">Estomac {{EstomacOuiNon}} - Jeune {{DureeJeune}} h </p>\n      <p>Allergies : <span color="danger">{{Allergie}}</span></p></ion-label>\n    <ion-icon slot="end" icon="accessibility-outline"></ion-icon> \n    </ion-item>\n</ion-header>\n\n<ion-content padding>\n\n    <!-- ITEM MON PATIENT -->\n\n    <ion-item>\n      <ion-label position="stacked">Allergies</ion-label>\n      <ion-input inputmode ="text" type="text" (ionChange)="addAllergie()" [(ngModel)]="NewAllergie" name="" placeholder="{{Renseigner}}"></ion-input>\n    </ion-item>\n\n  <ion-item>\n    <ion-label> Durée du jeune pré-opératoire : \n      <p></p><p><b>{{DureeJeune}} heures</b></p></ion-label>\n    <ion-range  max="12" pin="true" step="1" ticks="true" snaps (ionChange)="FnDureeJeune()" [(ngModel)]="DureeJeune"> </ion-range>\n  </ion-item>\n    \n\n    <ion-card color="warning">\n      <ion-card-content>\n       Attention : La durée du jeûne est utilisée pour déterminer les <b>apports hydriques recommandés</b>, pas le risque \n          d\'inhalation à l\'induction. <i>Exemple : sténose du pylore avec durée de jeûne de 6h : risque d\'inhalation.</i> \n        Le risque d\'<b>estomac plein</b> est à renseigner ci-dessous, indépendemment de la durée du jeûne.\n      </ion-card-content>\n    </ion-card>\n\n\n    <ion-item>\n      <ion-label>Estomac plein</ion-label>\n      <ion-toggle checked="{{estomaclast}}" [(ngModel)]="options.estomacplein" (ionChange)="FnEstomacPlein(options)"></ion-toggle>\n    </ion-item>\n\n\n\n \n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\options\options.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], OptionsPage);
    return OptionsPage;
}());

;
//# sourceMappingURL=options.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlateauInductionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__patient_patient__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * Generated class for the PlateauInductionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlateauInductionPage = /** @class */ (function () {
    function PlateauInductionPage(navCtrl, navParams, storage, alertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertController = alertController;
        this.isShownHypno = false;
        this.isShownMorphiniques = false;
        this.isShownCurares = false;
        this.isShownAutres = false;
    }
    ;
    PlateauInductionPage.prototype.ToggleHypno = function () {
        this.isShownHypno = !this.isShownHypno;
        this.isShownMorphiniques = this.isShownCurares = this.isShownAutres = false;
    };
    ;
    PlateauInductionPage.prototype.ToggleMorphiniques = function () {
        this.isShownMorphiniques = !this.isShownMorphiniques;
        this.isShownHypno = this.isShownCurares = this.isShownAutres = false;
    };
    ;
    PlateauInductionPage.prototype.ToggleCurares = function () {
        this.isShownCurares = !this.isShownCurares;
        this.isShownHypno = this.isShownMorphiniques = this.isShownAutres = false;
    };
    ;
    PlateauInductionPage.prototype.ToggleAutres = function () {
        this.isShownAutres = !this.isShownAutres;
        this.isShownHypno = this.isShownMorphiniques = this.isShownCurares = false;
    };
    ;
    PlateauInductionPage.prototype.presentAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            cssClass: 'alerte',
                            title: 'Minute papillon !',
                            message: 'Saisissez un âge et un poids pour le patient.',
                            buttons: [
                                {
                                    text: 'Nan',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: Nan');
                                    }
                                }, {
                                    text: 'Okay',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__patient_patient__["a" /* PatientPage */]);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    PlateauInductionPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var promiseList = [];
        promiseList.push(this.storage.get('AgeForCalc').then(function (Age) {
            _this.AgeNum = Age;
            _this.storage.get('PoidsForCalc').then(function (Poids) {
                _this.PoidsNum = Poids;
                _this.storage.get('DureeJeune').then(function (dureejeune) {
                    _this.DureeJeune = dureejeune;
                    _this.storage.get('EstomacPlein').then(function (Estomac) {
                        _this.EstomacPlein = Estomac;
                        console.log('lestomac est plein ?', _this.EstomacPlein);
                        if (_this.EstomacPlein == true) {
                            _this.EstomacOuiNon = "plein";
                        }
                        else {
                            _this.EstomacOuiNon = "vide";
                        }
                        ;
                        _this.storage.get('Allergie').then(function (allergie) {
                            _this.Allergie = allergie;
                            if (!_this.PoidsNum || !_this.AgeNum) {
                                _this.presentAlert();
                                _this.calculs();
                            }
                            else {
                                _this.calculs();
                            }
                            ;
                        });
                    });
                });
            });
        }));
    };
    ;
    PlateauInductionPage.prototype.calculs = function () {
        /* PROPOFOL */
        if (this.AgeNum <= 1) {
            this.AdminPropofol = Math.round((this.PoidsNum * 3) * 10) / 10;
            this.PosoPropofol = "3 mg/kg jusqu'à 1 mois";
        }
        else {
            this.AdminPropofol = Math.round((this.PoidsNum * 5) * 10) / 10;
            this.PosoPropofol = "5 mg/kg";
        }
        ;
        if (this.AgeNum <= 1) {
            this.DiluPropofol = "5 mg/mL";
        }
        else {
            this.DiluPropofol = "10 mg/mL";
        }
        ;
        /* PENTO */
        if (this.AgeNum <= 1) {
            this.AdminThiopental = Math.round((this.PoidsNum * 10) * 10) / 10;
            this.PosoThiopental = "10 mg/kg jusqu'à 1 mois";
        }
        else {
            this.AdminThiopental = Math.round((this.PoidsNum * 7) * 10) / 10;
            this.PosoThiopental = "7 mg/kg";
        }
        ;
        if (this.AgeNum <= 12) {
            this.DiluThiopental = "10 mg/mL";
        }
        else {
            this.DiluThiopental = "25 mg/mL";
        }
        ;
        /* KETA */
        this.AdminKetamine = Math.round((3 * this.PoidsNum) * 10) / 10;
        this.PosoKetamine = "3 mg/kg en IV";
        if (this.AgeNum <= 1) {
            this.DiluKetamine = "5 mg/mL";
        }
        else {
            this.DiluKetamine = "10 mg/mL";
        }
        ;
        /* ETO */
        this.AdminEtomidate = Math.round((0.5 * this.PoidsNum) * 10) / 10;
        this.PosoEtomidate = "0,5 mg/kg";
        if (this.AgeNum <= 1) {
            this.DiluEtomidate = "0,5 mg/mL";
        }
        else if (this.AgeNum <= 24) {
            this.DiluEtomidate = "1 mg/mL";
        }
        else if (this.AgeNum > 24) {
            this.DiluEtomidate = "2 mg/mL";
        }
        ;
        /* SUF */
        this.AdminSufentanil = Math.round((0.2 * this.PoidsNum) * 10) / 10;
        this.PosoSufentanil = "0,2 µg/kg";
        if (this.AgeNum <= 1) {
            this.DiluSufentanil = "0,5 µg/mL";
        }
        else if (this.AgeNum <= 12) {
            this.DiluSufentanil = "1 µg/mL";
        }
        else if (this.AgeNum <= 72) {
            this.DiluSufentanil = "2 µg/mL";
        }
        else if (this.AgeNum > 72) {
            this.DiluSufentanil = "5 µg/mL";
        }
        ;
        /* RAPI */
        this.AdminAlfentanil = Math.round((20 * this.PoidsNum) * 10) / 10;
        this.PosoAlfentanil = "20 µg/kg";
        if (this.PoidsNum <= 30) {
            this.DiluAlfentanil = "100 µg/mL";
        }
        else {
            this.DiluAlfentanil = "500 µg/mL";
        }
        /* CELO */
        if (this.AgeNum <= 24) {
            this.AdminCelocurine = Math.round((this.PoidsNum * 2) * 10) / 10;
            this.PosoCelocurine = "2 mg/kg jusqu'à 2 ans";
        }
        else {
            this.AdminCelocurine = Math.round((this.PoidsNum) * 10) / 10;
            this.PosoCelocurine = "1 mg/kg";
        }
        ;
        if (this.AgeNum <= 1) {
            this.DiluCelocurine = "2 mg/mL";
        }
        else if (this.AgeNum <= 24) {
            this.DiluCelocurine = "5 mg/mL";
        }
        else if (this.AgeNum > 24) {
            this.DiluCelocurine = "10 mg/mL";
        }
        ;
        /* ROCU */
        if (!this.EstomacPlein) {
            this.AdminRocuronium = Math.round((this.PoidsNum * 0.6) * 10) / 10;
            this.PosoRocuronium = "0,6 mg/kg hors urgence";
        }
        else {
            this.AdminRocuronium = Math.round((this.PoidsNum * 1.2) * 10) / 10;
            this.PosoRocuronium = "1,2 mg/kg pour ISR";
        }
        ;
        if (this.AgeNum <= 12) {
            this.DiluRocuronium = "1 mg/mL";
        }
        else if (this.AgeNum <= 60) {
            this.DiluRocuronium = "2,5 mg/mL";
        }
        else if (this.AgeNum > 60) {
            this.DiluRocuronium = "10 mg/mL";
        }
        ;
        /* TRAC */
        this.AdminAtracurium = Math.round((0.5 * this.PoidsNum) * 10) / 10;
        this.PosoAtracurium = "0,5 mg/kg";
        if (this.AgeNum <= 1) {
            this.DiluAtracurium = "0,5 mg/mL";
        }
        else if (this.AgeNum <= 12) {
            this.DiluAtracurium = "1 mg/mL";
        }
        else if (this.AgeNum <= 60) {
            this.DiluAtracurium = "2,5 mg/mL";
        }
        else if (this.AgeNum > 60) {
            this.DiluAtracurium = "10 mg/mL";
        }
        ;
        /* DEXA */
        this.AdminDexa = Math.round(((this.PoidsNum * 0.15) * 10) / 10);
        if (this.PoidsNum > 40) {
            this.DiluDexa = "4 mg/mL";
        }
        else {
            this.DiluDexa = "1 mg/mL";
        }
        ;
        /* EXACYL */
        this.AdminExacyl = Math.round(((this.PoidsNum * 10) * 10) / 10);
        /* Ephedrine & Atropine*/
        this.AdminEphedrine = Math.round((this.PoidsNum * 0.1) * 10) / 10;
        this.AdminAtropine = Math.round((this.PoidsNum * 0.02) * 100) / 100;
        if (this.PoidsNum < 5) {
            this.DiluEphedrine = "0,5 mg/mL";
        }
        else if (this.PoidsNum < 10) {
            this.DiluEphedrine = "1 mg/mL";
        }
        else {
            this.DiluEphedrine = "3 mg/mL";
        }
        ;
        if (this.PoidsNum < 5) {
            this.DiluAtropine = "20 µg/mL";
        }
        else if (this.PoidsNum < 15) {
            this.DiluAtropine = "100 µg/mL";
        }
        else {
            this.DiluAtropine = "500 µg/mL";
        }
        ;
    };
    ;
    PlateauInductionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlateauInductionPage');
    };
    ;
    PlateauInductionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-plateau-induction',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\plateau-induction\plateau-induction.html"*/'<!--\n  Generated template for the PlateauInductionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<!-- HEADER DE LA PAGE avec menu principal -->  \n  <ion-header translucent>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Plateau pour induction</ion-title>\n  </ion-navbar>\n  <ion-item color="secondary"> \n    <ion-label class="MonPatient" >Mon patient : {{AgeNum}} mois - {{PoidsNum}} kg \n      <p class="dilution">Estomac {{EstomacOuiNon}} - Jeune {{DureeJeune}} h</p>\n    <p>Allergie : {{Allergie}}</p></ion-label>\n    <ion-icon slot="end" icon="accessibility-outline"></ion-icon> \n  </ion-item>\n</ion-header>\n\n<ion-content padding>\n\n  <!-- ITEM MON PATIENT -->\n\n\n<ion-list>\n  <ion-item-group>\n    <ion-item-divider (click)="ToggleHypno()" color="warning">\n      <ion-label>Hypnotiques\n        <ion-icon *ngIf="!isShownHypno" class="inductionIcon" name="add-circle"  style="zoom:1.5"></ion-icon>\n          <ion-icon *ngIf="isShownHypno" class="inductionIcon" name="close-circle"  style="zoom:1.5"></ion-icon>\n      </ion-label>\n    </ion-item-divider> \n\n\n    <ion-card *ngIf="isShownHypno">\n\n    <ion-item>\n      <ion-label><b>Sevoflurane 6%</b> - Voie inhalée\n        <p>!! Seulement si estomac vide.</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label> \n        <p class="posologie">Posologie proposée : {{PosoThiopental}}</p>\n        <b>Thiopental {{AdminThiopental}} mg - IVD </b>\n        <p class="dilution"> Dilution : {{DiluThiopental}}</p></ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>\n        <p class="posologie">Posologie proposée : {{PosoPropofol}}</p>\n        <b>Propofol {{AdminPropofol}} mg - IVD </b>\n        <p class="dilution">Dilution : {{DiluPropofol}}</p></ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>\n        <p class="posologie">Posologie proposée : {{PosoEtomidate}}</p>\n        <b>Etomidate {{AdminEtomidate}} mg - IVD</b> \n        <p class="dilution">Dilution : {{DiluEtomidate}}</p> </ion-label>\n      <div ></div>\n    </ion-item>\n\n    <ion-item>\n      <ion-label> \n        <p class="posologie">Posologie proposée : {{PosoKetamine}}</p>\n        <b>Ketamine {{AdminKetamine}} mg - IVD</b>\n        <p class="dilution">Dilution : {{DiluKetamine}}</p> </ion-label>\n      <div ></div>\n    </ion-item>\n\n  </ion-card>\n    \n\n    <ion-item-divider (click)="ToggleMorphiniques()" color="primary">\n      <ion-label>Morphiniques\n        <ion-icon *ngIf="!isShownMorphiniques" class="inductionIcon" name="add-circle"  style="zoom:1.5"></ion-icon>\n          <ion-icon *ngIf="isShownMorphiniques" class="inductionIcon" name="close-circle"   style="zoom:1.5"></ion-icon>\n      </ion-label>\n    </ion-item-divider>\n\n    <ion-card *ngIf="isShownMorphiniques">\n    <ion-item>\n      <ion-label>\n        <p class="posologie">Posologie proposée : {{PosoSufentanil}}</p>\n        <b>Sufentanil {{AdminSufentanil}} µg - IVD</b>\n        <p class="dilution">Dilution : {{DiluSufentanil}}</p></ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>\n        <p class="posologie">Posologie proposée : {{PosoAlfentanil}}</p>\n        <b>Alfentanil {{AdminAlfentanil}} µg - IVD</b>\n        <p class="dilution">Dilution : {{DiluAlfentanil}}</p>\n      </ion-label>\n    </ion-item>\n\n  </ion-card>\n\n    <ion-item-divider (click)="ToggleCurares()" color="danger">\n      <ion-label>Curares\n        <ion-icon *ngIf="!isShownCurares" class="inductionIcon" name="add-circle"  style="zoom:1.5"></ion-icon>\n          <ion-icon *ngIf="isShownCurares" class="inductionIcon" name="close-circle"  style="zoom:1.5"></ion-icon>\n      </ion-label>\n    </ion-item-divider>\n\n    <ion-card *ngIf="isShownCurares">\n    <ion-item>\n      <ion-label>\n        <p class="posologie">Posologie proposée : {{PosoAtracurium}}</p>\n        <b>Atracurium {{AdminAtracurium}} mg - IVD</b>\n        <p class="dilution">Dilution : {{DiluAtracurium}}</p></ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>\n        <p class="posologie">Posologie proposée : {{PosoRocuronium}}</p>\n        <b>Rocuronium {{AdminRocuronium}} mg - IVD</b>\n        <p class="dilution">Dilution : {{DiluRocuronium}}</p></ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>\n        <p class="posologie">Posologie proposée : {{PosoCelocurine}}</p>\n        <b>Celocurine {{AdminCelocurine}} mg - IVD</b>\n        <p class="dilution">Dilution : {{DiluCelocurine}}</p></ion-label>\n    </ion-item>\n  </ion-card>\n\n  <ion-item-divider (click)="ToggleAutres()" color="tertiary">\n    <ion-label>Autres\n      <ion-icon *ngIf="!isShownAutres" class="inductionIcon" name="add-circle"  style="zoom:1.5"></ion-icon>\n        <ion-icon *ngIf="isShownAutres" class="inductionIcon" name="close-circle"  style="zoom:1.5"></ion-icon>\n    </ion-label>\n  </ion-item-divider>\n\n    <ion-card *ngIf="isShownAutres">\n\n      <ion-item>\n        <ion-label>\n          <p class="posologie">Posologie proposée : 0,15 mg/kg</p>\n          <b>Dexamethasone {{AdminDexa}} mg - IVD</b>\n          <p class="dilution">Dilution : {{DiluDexa}}</p></ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>\n          <p class="posologie">Posologie proposée : 10 mg/kg</p>\n          <b>Exacyl : {{AdminExacyl}} mg - IVSE sur 30 min</b>\n          <p class="dilution">Dilution : 100 mg/mL</p></ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>\n          <p class="posologie">Posologie proposée : 100 µg/kg</p>\n          <b>Ephédrine : {{AdminEphedrine}} mg - IVD</b>\n          <p class="dilution">Dilution : {{DiluEphedrine}}</p></ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>\n          <p class="posologie">Posologie proposée : 20 µg/kg</p>\n          <b>Atropine : {{AdminAtropine}} mg - IVD</b>\n          <p class="dilution">Dilution : {{DiluAtropine}}</p></ion-label>\n      </ion-item>\n\n    </ion-card>\n\n  </ion-item-group>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\plateau-induction\plateau-induction.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PlateauInductionPage);
    return PlateauInductionPage;
}());

//# sourceMappingURL=plateau-induction.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GestionFluidesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__patient_patient__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/**
 * Generated class for the GestionFluidesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GestionFluidesPage = /** @class */ (function () {
    function GestionFluidesPage(navCtrl, navParams, storage, alertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertController = alertController;
        this.dureejeunelast = 6;
        this.chir = { pertes: "" };
        this.PertesChirNum = 2;
        this.Hbmesuree = 8;
        this.Hbsouhaitee = 12;
        this.isShownApports = false;
        this.isShownCGR = false;
        this.isShownAutresPSL = false;
    }
    GestionFluidesPage.prototype.ToggleApports = function () {
        this.isShownApports = !this.isShownApports;
        this.isShownCGR = this.isShownAutresPSL = false;
    };
    ;
    GestionFluidesPage.prototype.ToggleCGR = function () {
        this.isShownCGR = !this.isShownCGR;
        this.isShownApports = this.isShownAutresPSL = false;
    };
    ;
    GestionFluidesPage.prototype.ToggleAutresPSL = function () {
        this.isShownAutresPSL = !this.isShownAutresPSL;
        this.isShownCGR = this.isShownApports = false;
    };
    ;
    GestionFluidesPage.prototype.presentAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            cssClass: 'alerte',
                            title: 'Minute papillon !',
                            message: 'Saisissez un âge et un poids pour le patient. Pensez aussi à renseigner la durée du jeûne pré-opératoire pour profiter du calcul des apports horaires recommandés',
                            buttons: [
                                {
                                    text: 'Nan',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (cancel) {
                                        console.log('Confirm Cancel: Nan');
                                    }
                                }, {
                                    text: 'Okay',
                                    handler: function (OK) {
                                        console.log('Confirm Okay');
                                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__patient_patient__["a" /* PatientPage */]);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    GestionFluidesPage.prototype.loadcontent = function () {
        var _this = this;
        var promiseOptions = [];
        promiseOptions.push(this.storage.get('EstomacPlein').then(function (esto) {
            _this.estomaclast = esto;
            console.log('estomac plein? qqq', _this.estomaclast);
            if (_this.estomaclast == true) {
                _this.EstomacOuiNon = "plein";
            }
            else {
                _this.EstomacOuiNon = "vide";
            }
            ;
            _this.storage.get('DureeJeune').then(function (dureejeune) {
                _this.DureeJeune = dureejeune;
                console.log('duree du jeune renseignee de', _this.DureeJeune, 'heures.');
                if (_this.AgeNum < 15 * 12) {
                    _this.Solute = "B26";
                }
                else {
                    _this.Solute = "Ringer Lactate";
                }
                ;
                if (_this.PoidsNum <= 10) {
                    _this.ApportBaseHoraire = Math.round(4 * _this.PoidsNum);
                }
                else if (_this.PoidsNum <= 20) {
                    _this.ApportBaseHoraire = Math.round(40 + (_this.PoidsNum - 10) * 2);
                }
                else if (_this.PoidsNum > 20) {
                    _this.ApportBaseHoraire = Math.round(60 + (_this.PoidsNum - 20));
                }
                ;
                _this.CompJeune = Math.round(_this.ApportBaseHoraire * _this.DureeJeune);
                _this.CompJeuneH1 = Math.round(_this.CompJeuneH2 = _this.CompJeune / 2);
                _this.CompPertesChir = Math.round(_this.PertesChirNum * _this.PoidsNum);
                _this.TotalH1 = Math.round(_this.ApportBaseHoraire + _this.CompJeuneH1 + _this.CompPertesChir);
                _this.TotalH2et3 = Math.round(_this.ApportBaseHoraire + _this.CompJeuneH1 / 2 + _this.CompPertesChir);
                _this.TotalHoraire = Math.round(_this.ApportBaseHoraire + (_this.CompPertesChir));
                if (_this.AgeNum <= 15 * 12) {
                    _this.UnitesPlaquettaires = Math.round(_this.PoidsNum / 5);
                }
                else {
                    _this.UnitesPlaquettaires = Math.round(_this.PoidsNum / 7);
                }
                ;
                _this.VolPFC = Math.round(_this.PoidsNum * 20);
                _this.VolCGR = Math.round(_this.PoidsNum * 16).toString() + " mL CGR";
                _this.DiffHb = 4;
                _this.MasseSanguine = Math.round(_this.PoidsNum * 80);
            });
        }));
    };
    GestionFluidesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var promiseList = [];
        promiseList.push(this.storage.get('AgeForCalc').then(function (Age) {
            _this.AgeNum = Age;
            _this.storage.get('PoidsForCalc').then(function (Poids) {
                _this.PoidsNum = Poids;
                console.log('Le patient a', _this.AgeNum, "mois au total pour ", _this.PoidsNum, " kg.");
                _this.storage.get('Allergie').then(function (allergie) {
                    _this.Allergie = allergie;
                    _this.storage.get('DureeJeune').then(function (dureejeune) {
                        _this.DureeJeune = dureejeune;
                        console.log('duree du jeune renseignee de', _this.DureeJeune, 'heures.');
                        if (!_this.PoidsNum || !_this.AgeNum || !_this.DureeJeune) {
                            _this.presentAlert();
                            _this.loadcontent();
                        }
                        else {
                            _this.loadcontent();
                        }
                        ;
                    });
                });
            });
        }));
    };
    ;
    GestionFluidesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GestionFluidesPage');
    };
    GestionFluidesPage.prototype.SelectPerteChir = function (ValeurChoisie) {
        this.perteschir = ValeurChoisie;
        console.log(this.perteschir);
        if (this.perteschir == "Mineures") {
            this.PertesChirNum = 2;
        }
        else if (this.perteschir == "Moderees") {
            this.PertesChirNum = 5;
        }
        else if (this.perteschir == "Importantes") {
            this.PertesChirNum = 10;
        }
        ;
        console.log('pertes chir =', this.PertesChirNum, 'mL/h');
        this.CompPertesChir = this.PertesChirNum * this.PoidsNum;
        this.TotalH1 = this.ApportBaseHoraire + this.CompJeuneH1 + this.CompPertesChir;
        this.TotalH2et3 = this.ApportBaseHoraire + this.CompJeuneH1 / 2 + this.CompPertesChir;
        this.TotalHoraire = this.ApportBaseHoraire + (this.CompPertesChir);
    };
    ;
    GestionFluidesPage.prototype.MesureeHb = function () {
        console.log('Hb mesuree = ', this.Hbmesuree);
        this.DiffHb = this.Hbsouhaitee - this.Hbmesuree;
        console.log('Diff Hb = ', this.DiffHb);
        if (this.Hbmesuree >= 12) {
            this.VolCGR = "Non (Hb > 12 g/dL)";
        }
        else if (this.DiffHb <= 1) {
            this.VolCGR = "Non (diff < 1 g)";
        }
        else {
            this.VolCGR = Math.round(this.DiffHb * this.PoidsNum * 4).toString() + "mL CGR";
        }
    };
    ;
    GestionFluidesPage.prototype.SouhaiteeHb = function () {
        console.log('Hb souhaitee =', this.Hbsouhaitee);
        this.DiffHb = this.Hbsouhaitee - this.Hbmesuree;
        console.log('Diff Hb = ', this.DiffHb);
        if (this.DiffHb <= 1) {
            this.VolCGR = "Non (diff < 1 g)";
        }
        else {
            this.VolCGR = Math.round(this.DiffHb * this.PoidsNum * 4).toString() + " mL CGR";
        }
    };
    ;
    GestionFluidesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-gestion-fluides',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\gestion-fluides\gestion-fluides.html"*/'<!--\n  Generated template for the GestionFluidesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header translucent>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Gestion des apports</ion-title>\n  </ion-navbar>\n  <ion-item color="secondary"> \n    <ion-label class="MonPatient" >Mon patient : {{AgeNum}} mois - {{PoidsNum}} kg \n      <p class="dilution">Estomac {{EstomacOuiNon}} - Jeune {{DureeJeune}} h</p>\n      <p>Allergie : {{Allergie}}</p></ion-label> \n    </ion-item>\n</ion-header>\n\n<ion-content padding>\n\n\n      <!-- ITEM MON PATIENT -->\n\n  \n      <!-- ITEMS CALCULES-->\n  \n      <ion-list>\n        <ion-item-group>\n          \n          <ion-item-divider (click)="ToggleApports()" color="primary">\n            <ion-label>Apports hydriques\n          <ion-icon *ngIf="!isShownApports" class="fluidIcon" name="add-circle" style="zoom:1.5"></ion-icon>\n          <ion-icon *ngIf="isShownApports" class="fluidIcon" name="close-circle" style="zoom:1.5"></ion-icon>\n            </ion-label>\n          </ion-item-divider> \n\n\n          <ion-card *ngIf="isShownApports">\n          <ion-item>Besoins de base \n            <p><b>{{Solute}} : {{ApportBaseHoraire}} mL/h</b></p>\n          </ion-item>\n          <ion-item>Compensation du jeûne ({{DureeJeune}} heures)\n            <p><b>{{Solute}} : {{CompJeune}} mL</b></p>\n            <p>Passer {{CompJeuneH1}} mL sur 1h</p>\n            <p>Puis passer {{CompJeuneH2}} mL sur 2h</p>\n          </ion-item>\n          <ion-item> <ion-label>Pertes chirurgicales</ion-label>\n            <ion-select #newselect (ionChange)="SelectPerteChir(chir.pertes)" [(ngModel)]="chir.pertes" interface="action-sheet" placeholder="choisir"\n             okText="Yup." cancelText="Retour">\n              <ion-option checked="true" value="Mineures">Mineures (2 mL/kg/h)</ion-option>\n              <ion-option value="Moderees">Modérées (5 mL/kg/h)</ion-option>\n              <ion-option value="Importantes">Importantes (10 mL/kg/h)</ion-option>\n            </ion-select>\n          </ion-item>\n          <ion-item>Pertes insensibles\n            <p><b>{{Solute}} : {{CompPertesChir}} mL/h</b></p>\n          </ion-item>\n          <ion-item>Apports recommandés : <b>\n            <p> - La 1ere heure {{Solute}} : {{TotalH1}} mL</p>\n            <p> - La 2e et la 3e heure {{Solute}} : {{TotalH2et3}} mL</p>\n            <p> - puis {{Solute}} : {{TotalHoraire}} mL/h</p>\n          </b>\n          </ion-item>\n        </ion-card>\n\n          \n\n          <ion-item-divider (click)="ToggleCGR()" color="danger">\n            <ion-label>Transfusion CGR\n          <ion-icon *ngIf="!isShownCGR" class="fluidIcon" name="add-circle" style="zoom:1.5"></ion-icon>\n          <ion-icon *ngIf="isShownCGR" class="fluidIcon" name="close-circle" style="zoom:1.5"></ion-icon>\n            </ion-label>\n          </ion-item-divider> \n\n          <ion-card *ngIf="isShownCGR">\n          <ion-item>Masse sanguine estimée (80 mL/kg) : \n            <p><b>{{MasseSanguine}} mL</b></p></ion-item>\n          <ion-item>\n            <ion-label color="danger">Hémogloginémie mesurée : <b>{{Hbmesuree}} g/dL</b></ion-label>\n            <ion-range max="16" step="1"  pin="true" color="danger"\n             (ionChange)="MesureeHb()" [(ngModel)]="Hbmesuree"> </ion-range>\n          </ion-item>\n\n          <ion-item >\n             <ion-label color="secondary">Objectif d\'hémoglobinémie : <b>{{Hbsouhaitee}} g/dL</b></ion-label>\n            <ion-range  color="secondary" max="16" pin="true" step="1"  \n             (ionChange)="SouhaiteeHb()" [(ngModel)]="Hbsouhaitee"> </ion-range>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Transfuser : {{VolCGR}}\n              <p><b>Pour corriger {{DiffHb}} g/dL d\'hémoglobine</b></p>\n            </ion-label>\n        </ion-item>\n        </ion-card>\n\n        <ion-item-divider (click)="ToggleAutresPSL()" color="warning">\n          <ion-label>Autres PSL\n            <ion-icon *ngIf="!isShownAutresPSL" class="fluidIcon" name="add-circle"  style="zoom:1.5"></ion-icon>\n          <ion-icon *ngIf="isShownAutresPSL" class="fluidIcon" name="close-circle"  style="zoom:1.5"></ion-icon>\n          </ion-label>\n        </ion-item-divider> \n\n          <ion-card *ngIf="isShownAutresPSL">\n          <ion-item>Unités plaquettaires\n            <p><b>Passer {{UnitesPlaquettaires}} UI Plaquettaires</b></p>\n          </ion-item>\n          <ion-item>Plasma frais congelé\n            <p><b>Passer {{VolPFC}} mL de PFC</b></p>\n          </ion-item>\n        </ion-card>\n\n        </ion-item-group>\n        </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\gestion-fluides\gestion-fluides.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], GestionFluidesPage);
    return GestionFluidesPage;
}());

//# sourceMappingURL=gestion-fluides.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlateauVasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__patient_patient__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * Generated class for the PlateauVasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlateauVasPage = /** @class */ (function () {
    function PlateauVasPage(navCtrl, navParams, storage, alertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertController = alertController;
        this.AlerteEstomacPlein = "";
        this.DureeJeune = 6;
        this.dureejeunelast = 6;
        this.Allergie = "";
    }
    PlateauVasPage.prototype.ToggleIntubation = function () {
        this.isShownIntubation = !this.isShownIntubation;
        this.isShownVentilation = false;
    };
    ;
    PlateauVasPage.prototype.ToggleVentilation = function () {
        this.isShownVentilation = !this.isShownVentilation;
        this.isShownIntubation = false;
    };
    ;
    PlateauVasPage.prototype.presentAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            cssClass: 'alerte',
                            title: 'Minute papillon !',
                            message: 'Saisissez un âge et un poids pour le patient.',
                            buttons: [
                                {
                                    text: 'Nan',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: Nan');
                                    }
                                }, {
                                    text: 'Okay',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__patient_patient__["a" /* PatientPage */]);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    PlateauVasPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var promiseList = [];
        promiseList.push(this.storage.get('AgeForCalc').then(function (Age) {
            _this.AgeNum = Age;
            _this.storage.get('PoidsForCalc').then(function (Poids) {
                _this.PoidsNum = Poids;
                console.log('Le patient a', _this.AgeNum, "mois au total pour ", _this.PoidsNum, " kg.");
                if (!_this.PoidsNum || !_this.AgeNum) {
                    _this.presentAlert();
                }
                else {
                    return;
                }
                ;
            });
        }));
        var promiseOptions = [];
        promiseOptions.push(this.storage.get('EstomacPlein').then(function (esto) {
            _this.estomaclast = esto;
            console.log('estomac plein? qqq', _this.estomaclast);
            if (_this.estomaclast == true) {
                _this.EstomacOuiNon = "plein";
            }
            else {
                _this.EstomacOuiNon = "vide";
            }
            _this.storage.get('DureeJeune').then(function (dureejeune) {
                _this.DureeJeune = dureejeune;
                console.log('duree du jeune renseignee de', _this.DureeJeune, 'heures.');
                _this.storage.get('Allergie').then(function (allergie) {
                    _this.Allergie = allergie;
                    if (_this.PoidsNum <= 2.5) {
                        _this.TailleSITage = _this.TailleSITpoids = 2.5;
                        _this.RepereSITdents = Math.round((_this.PoidsNum + 6.5) * 10) / 10;
                        _this.RepereSITnez = Math.round((_this.PoidsNum + 7) * 10) / 10;
                        _this.RepereSITenfant = "trop petit";
                    }
                    else if (_this.PoidsNum <= 3.5) {
                        _this.TailleSITage = _this.TailleSITpoids = 3;
                        _this.RepereSITdents = Math.round((_this.PoidsNum + 6.5) * 10) / 10;
                        _this.RepereSITnez = Math.round((_this.PoidsNum + 7) * 10) / 10;
                        _this.RepereSITenfant = "trop petit";
                    }
                    else if (_this.PoidsNum <= 7) {
                        _this.TailleSITage = _this.TailleSITpoids = 3.5;
                        _this.RepereSITdents = Math.round((_this.PoidsNum + 6.5) * 10) / 10;
                        _this.RepereSITnez = Math.round((_this.PoidsNum + 7) * 10) / 10;
                        _this.RepereSITenfant = "trop petit";
                    }
                    else if (_this.PoidsNum > 7) {
                        _this.TailleSITage = Math.round((_this.AgeNum / (12 * 4) + 3.5) * 10) / 10;
                        _this.TailleSITpoids = Math.round((_this.PoidsNum / 10 + 3) * 10) / 10;
                        _this.TailleSIT = Math.round(((_this.TailleSITage + _this.TailleSITpoids) / 2) * 10) / 10;
                        _this.RepereSITenfant = Math.round(((_this.TailleSITage + _this.TailleSITpoids) / 2) * 3).toString() + " cm";
                        _this.RepereSITdents = Math.round((_this.AgeNum / 24 + 12) * 10) / 10;
                        _this.RepereSITnez = Math.round((_this.AgeNum / 24 + 15) * 10) / 10;
                    }
                    ;
                    _this.Volumecourant = Math.round(_this.PoidsNum * 6);
                    if (_this.PoidsNum <= 3 && _this.AgeNum <= 1) {
                        _this.CouleurCanuleMasque = "bleu";
                    }
                    else if (_this.AgeNum <= 6) {
                        _this.CouleurCanuleMasque = "gris";
                    }
                    else if (_this.AgeNum <= 60) {
                        _this.CouleurCanuleMasque = "blanc";
                    }
                    else if (_this.AgeNum <= 120) {
                        _this.CouleurCanuleMasque = "jaune";
                    }
                    else {
                        _this.CouleurCanuleMasque = "vert";
                    }
                    ;
                    if (_this.PoidsNum <= 10 && _this.AgeNum <= 1) {
                        _this.TailleFiltre = "Filtre Néonat";
                    }
                    else if (_this.AgeNum <= 72 && _this.PoidsNum <= 20) {
                        _this.TailleFiltre = "Filtre pédiatrique";
                    }
                    else {
                        _this.TailleFiltre = "Filtre adulte";
                    }
                    ;
                    if (_this.PoidsNum <= 15) {
                        _this.LameIntubation = "Lame d'Oxford ou Miller 1";
                    }
                    else if (_this.PoidsNum <= 30) {
                        _this.LameIntubation = "Macintosh 2";
                    }
                    else {
                        _this.LameIntubation = "Macintosh 3";
                    }
                    ;
                    console.log('IonViewWillEnter OptionsPage');
                });
            });
        }));
    };
    ;
    PlateauVasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlateauVasPage');
    };
    PlateauVasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-plateau-vas',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\plateau-vas\plateau-vas.html"*/'<!--\n  Generated template for the PlateauVasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header translucent>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Voies aériennes</ion-title>\n  </ion-navbar>\n  <ion-item color="secondary"> \n    <ion-label class="MonPatient" >Mon patient : {{AgeNum}} mois - {{PoidsNum}} kg \n      <p class="dilution">Estomac {{EstomacOuiNon}} - Jeune {{DureeJeune}} h</p>\n    <p>Allergie : {{Allergie}}</p></ion-label>\n    <ion-icon slot="end" icon="accessibility-outline"></ion-icon> \n  </ion-item>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-list> \n      <ion-item-group>\n        <ion-item-divider (click)="ToggleVentilation()" color="primary">\n          <ion-label>Ventilation\n          <ion-icon *ngIf="!isShownVentilation" class="urgenceIcon" name="add-circle"  style="zoom:1.2"></ion-icon>\n          <ion-icon *ngIf="isShownVentilation" class="urgenceIcon" name="close-circle" style="zoom:1.2"></ion-icon>\n        </ion-label>\n        </ion-item-divider> \n\n        <ion-card *ngIf="isShownVentilation">\n          <ion-item>Taille du filtre : {{TailleFiltre}}</ion-item>\n          <ion-item>Canule de Guédel & masque : {{CouleurCanuleMasque}}</ion-item>\n          <ion-item>Volume courant : <b>{{Volumecourant}} mL</b>\n            <p>pour 6 mL/kg</p>\n          </ion-item>\n        </ion-card>\n        \n        <ion-item-divider (click)="ToggleIntubation()" color="primary">\n          <ion-label>Intubation\n          <ion-icon *ngIf="!isShownIntubation" class="urgenceIcon" name="add-circle"  style="zoom:1.2"></ion-icon>\n          <ion-icon *ngIf="isShownIntubation" class="urgenceIcon" name="close-circle"  style="zoom:1.2"></ion-icon>\n        </ion-label>\n        </ion-item-divider> \n\n        <ion-card *ngIf="isShownIntubation">\n            <ion-item>Lame intubation : <p>{{LameIntubation}}</p>\n            </ion-item>\n            <ion-item>Taille de la sonde d\'intubation : \n              <p> - Proposée selon l\'âge : {{TailleSITage}} mm</p>\n              <p> - Proposée selon le poids : {{TailleSITpoids}} mm</p>\n            </ion-item>\n            <ion-item>Repère de fixation de la sonde : \n              <p>Approx. : taille sonde x3 : {{RepereSITenfant}} </p>\n              <p><b> - Repère dents : {{RepereSITdents}} cm</b></p>\n              <p><b> - Repère nez : {{RepereSITnez}} cm</b></p>\n              </ion-item>\n        </ion-card>\n           \n\n  </ion-item-group>\n\n  </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\plateau-vas\plateau-vas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PlateauVasPage);
    return PlateauVasPage;
}());

//# sourceMappingURL=plateau-vas.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AntalgiePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__patient_patient__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/**
 * Generated class for the AntalgiePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AntalgiePage = /** @class */ (function () {
    function AntalgiePage(navCtrl, navParams, storage, alertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertController = alertController;
        this.isShownPal1 = false;
        this.isShownPal2 = false;
        this.isShownPal3 = false;
        this.isShownAutres = false;
        this.isShownAntiEmet = false;
    }
    AntalgiePage.prototype.presentAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            cssClass: 'alerte',
                            title: 'Minute papillon !',
                            message: 'Saisissez un âge et un poids pour le patient.',
                            buttons: [
                                {
                                    text: 'Nan',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: Nan');
                                    }
                                }, {
                                    text: 'Okay',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__patient_patient__["a" /* PatientPage */]);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    AntalgiePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AntalgiePage');
    };
    ;
    AntalgiePage.prototype.TogglePalier1 = function () {
        console.log('toggle');
        this.isShownPal1 = !this.isShownPal1;
        this.isShownPal2 = this.isShownPal3 = this.isShownAutres = this.isShownAntiEmet = false;
    };
    ;
    AntalgiePage.prototype.TogglePalier2 = function () {
        console.log('toggle');
        this.isShownPal2 = !this.isShownPal2;
        this.isShownPal1 = this.isShownPal3 = this.isShownAutres = this.isShownAntiEmet = false;
    };
    ;
    AntalgiePage.prototype.TogglePalier3 = function () {
        console.log('toggle');
        this.isShownPal3 = !this.isShownPal3;
        this.isShownPal1 = this.isShownPal2 = this.isShownAutres = this.isShownAntiEmet = false;
    };
    ;
    AntalgiePage.prototype.ToggleAutres = function () {
        console.log('toggle');
        this.isShownAutres = !this.isShownAutres;
        this.isShownPal1 = this.isShownPal3 = this.isShownPal2 = this.isShownAntiEmet = false;
    };
    ;
    AntalgiePage.prototype.ToggleAntiEmet = function () {
        console.log('toggle');
        this.isShownAntiEmet = !this.isShownAntiEmet;
        this.isShownPal1 = this.isShownPal3 = this.isShownPal2 = this.isShownAutres = false;
    };
    ;
    AntalgiePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var promiseList = [];
        promiseList.push(this.storage.get('AgeForCalc').then(function (Age) {
            _this.AgeNum = Age;
            _this.storage.get('PoidsForCalc').then(function (Poids) {
                _this.PoidsNum = Poids;
                _this.storage.get('DureeJeune').then(function (dureejeune) {
                    _this.DureeJeune = dureejeune;
                    _this.storage.get('EstomacPlein').then(function (Estomac) {
                        _this.EstomacPlein = Estomac;
                        console.log('lestomac est plein ?', _this.EstomacPlein);
                        if (_this.EstomacPlein == true) {
                            _this.EstomacOuiNon = "plein";
                        }
                        else {
                            _this.EstomacOuiNon = "vide";
                        }
                        ;
                        _this.storage.get('Allergie').then(function (allergie) {
                            _this.Allergie = allergie;
                            if (!_this.PoidsNum || !_this.AgeNum) {
                                _this.presentAlert();
                                _this.calculs();
                            }
                            else {
                                _this.calculs();
                            }
                            ;
                        });
                    });
                });
            });
        }));
    };
    AntalgiePage.prototype.calculs = function () {
        var _this = this;
        var promiseList = [];
        promiseList.push(this.storage.get('AgeForCalc').then(function (Age) {
            _this.AgeNum = Age;
            _this.storage.get('PoidsForCalc').then(function (Poids) {
                _this.PoidsNum = Poids;
                _this.storage.get('DureeJeune').then(function (dureejeune) {
                    _this.DureeJeune = dureejeune;
                    _this.storage.get('EstomacPlein').then(function (Estomac) {
                        _this.EstomacPlein = Estomac;
                        console.log('lestomac est plein ?', _this.EstomacPlein);
                        if (_this.EstomacPlein == true) {
                            _this.EstomacOuiNon = "plein";
                        }
                        else {
                            _this.EstomacOuiNon = "vide";
                        }
                        ;
                        _this.storage.get('Allergie').then(function (allergie) {
                            _this.Allergie = allergie;
                            /*Palier 1*/
                            _this.AdminParacetamol = Math.round((_this.PoidsNum * 15) * 10) / 10;
                            _this.AdminKeto = Math.round((_this.PoidsNum * 1) * 10) / 10;
                            _this.AdminIbu = Math.round((_this.PoidsNum * 10) * 10) / 10;
                            /*Palier 2*/
                            _this.AdminNubain = Math.round((_this.PoidsNum * 0.2) * 10) / 10;
                            _this.AdminNubainHdJ = Math.round((_this.PoidsNum * 0.1) * 10) / 10;
                            _this.AdminAcupan = Math.round((_this.PoidsNum * 1) * 10) / 10;
                            _this.AdminTramadol = Math.round((_this.PoidsNum * 1) * 10) / 10;
                            /*Palier 3*/
                            _this.AdminMorphineBO = Math.round((_this.PoidsNum * 0.1) * 10) / 10;
                            _this.AdminMorphineTitration = Math.round((_this.PoidsNum * 0.025) * 10) / 10;
                            _this.AdminMorphinePCA = Math.round((_this.PoidsNum * 0.02) * 10) / 10;
                            _this.AdminMorphinePCAMax = Math.round((_this.PoidsNum * 0.4) * 10) / 10;
                            _this.AdminMorphinePOLP = Math.round((_this.PoidsNum * 1) * 10) / 10;
                            _this.AdminMorphinePOID = Math.round((_this.PoidsNum * 0.1) * 10) / 10;
                            /*Autres antalgiques*/
                            _this.AdminNeurontin = Math.round((_this.PoidsNum * 5) * 10) / 10;
                            _this.AdminSpasfonIV = Math.round((_this.PoidsNum * 0.5) * 10) / 10;
                            _this.AdminSpasfonPO = Math.round((_this.PoidsNum * 1.5) * 10) / 10;
                            _this.AdminLaroxylIV = Math.round((_this.PoidsNum * 0.5) * 10) / 10;
                            _this.AdminLaroxylPO = Math.round((_this.PoidsNum * 0.5) * 10) / 10;
                            _this.AdminRivotrilPO = Math.round((_this.PoidsNum * 0.01) * 10) / 10;
                            _this.GouttesRivotril = Math.round(_this.PoidsNum / 10);
                            _this.AdminClonidineIVSE = Math.round((_this.PoidsNum * 0.5) * 10) / 10;
                            _this.AdminClonidinePO = Math.round((_this.PoidsNum * 5) * 10) / 10;
                            /* Anti émétiques */
                            _this.AdminZophren = Math.round((_this.PoidsNum * 0.1) * 10) / 10;
                            _this.AdminDroleptan = Math.round((_this.PoidsNum * 25) * 10) / 10;
                        });
                    });
                });
            });
        }));
    };
    AntalgiePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-antalgie',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\antalgie\antalgie.html"*/'<!--\n  Generated template for the AntalgiePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header translucent>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Analgésie & NVPO</ion-title>\n  </ion-navbar>\n  <ion-item color="secondary"> \n    <ion-label class="MonPatient" >Mon patient : {{AgeNum}} mois - {{PoidsNum}} kg \n      <p>Allergie : {{Allergie}}</p></ion-label>\n    <ion-icon slot="end" icon="accessibility-outline"></ion-icon> \n  </ion-item>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item-group>\n      <ion-item-divider (click)="TogglePalier1()" color="primary"> \n        <ion-label>Palier 1 \n          <ion-icon *ngIf="!isShownPal1" class="antalgiquesIcon" name="add-circle"  style="zoom:1.5"></ion-icon>\n          <ion-icon *ngIf="isShownPal1" class="antalgiquesIcon" name="close-circle" style="zoom:1.5"></ion-icon>\n        </ion-label>\n      </ion-item-divider> \n  \n      <ion-card *ngIf="isShownPal1">\n      <ion-item>\n        <ion-label><b>Paracétamol : {{AdminParacetamol}} mg IVL ou PO</b>\n          <p>pour 15 mg/kg, toutes les 6h</p>\n        </ion-label>\n      </ion-item>\n  \n      <ion-item >\n        <ion-label><b>Ketoprofene (Profenid<span>&#174;</span>) : {{AdminKeto}} mg IVL</b>\n          <p>pour 1 mg/kg, toutes les 8 h</p> \n        </ion-label>\n      </ion-item>\n\n      <ion-item >\n        <ion-label><b>Ibuprofene : {{AdminIbu}} mg PO</b>\n          <p>pour 10 mg/kg, toutes les 8h</p> \n        </ion-label>\n      </ion-item>\n    </ion-card>\n      \n  \n      <ion-item-divider (click)="TogglePalier2()" color="warning">\n        <ion-label>Palier 2\n\n          <ion-icon *ngIf="!isShownPal2" class="antalgiquesIcon" name="add-circle"  style="zoom:1.5"></ion-icon>\n          <ion-icon *ngIf="isShownPal2" class="antalgiquesIcon" name="close-circle"  style="zoom:1.5"></ion-icon>\n\n        </ion-label>\n      </ion-item-divider>\n\n      <ion-card *ngIf="isShownPal2">\n      <ion-item >\n        <ion-label><b>Nalbuphine (Nubain<span>&#174;</span>) : {{AdminNubain}} mg IVL</b>\n          <p>pour 0,2 mg/kg, toutes les 4h</p> \n          <p>en ambulatoire, diviser par 2 : {{AdminNubainHdJ}} mg</p>\n          <p>injecter sur 20 minutes avant 1 an</p>\n        </ion-label>\n      </ion-item>\n      \n      <ion-item >\n        <ion-label><b>Nefopam (Acupan<span>&#174;</span>) : {{AdminAcupan}} mg/j IVSE</b>\n          <p>pour 1 mg/kg/j</p> \n        </ion-label>\n      </ion-item>\n      \n      <ion-item >\n        <ion-label><b>Tramadol (Contramal<span>&#174;</span>) : {{AdminTramadol}} mg IVL ou PO</b>\n          <p>pour 1 mg/kg, toutes les 6h</p> \n        </ion-label>\n      </ion-item>\n\n    </ion-card>\n  \n      <ion-item-divider (click)="TogglePalier3()" color="danger">\n        <ion-label >Palier 3\n\n          <ion-icon *ngIf="!isShownPal3" class="antalgiquesIcon" name="add-circle"  style="zoom:1.5"></ion-icon>\n          <ion-icon *ngIf="isShownPal3" class="antalgiquesIcon" name="close-circle"  style="zoom:1.5"></ion-icon>\n\n        </ion-label>\n      </ion-item-divider>\n  \n\n      <ion-card *ngIf="isShownPal3">\n      <ion-item>\n        <ion-label><b>Morphine avant réveil : {{AdminMorphineBO}} mg IVD</b>\n          <p>pour 100 µg/kg, une seule fois</p> \n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label><b>Morphine en titration : {{AdminMorphineTitration}} mg IVD</b>\n          <p>pour 25 µg/kg, toutes les 3 min</p> \n          <p>revoir après 4 boli</p> \n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label><b>Morphine en PCA : {{AdminMorphinePCA}} mg IVL</b>\n          <p>pour 20 µg/kg, PR de 5 min</p> \n          <p>Dose max : {{AdminMorphinePCAMax}} mg (400 µg/kg), pour 4h</p> \n        </ion-label>\n      </ion-item> \n\n      <ion-item>\n        <ion-label><b>Morphine per os : </b>\n          <p> - {{AdminMorphinePOLP}} mg LP toutes les 12h (1 mg/kg) PO</p> \n          <p>- {{AdminMorphinePOID}} mg toutes les 4h SB (0,1 mg/kg) PO</p> \n        </ion-label>\n      </ion-item> \n\n    </ion-card>\n\n\n      <ion-item-divider (click)="ToggleAutres()" color="tertiary">\n        <ion-label >Autres antalgiques\n\n          <ion-icon *ngIf="!isShownAutres" class="antalgiquesIcon" name="add-circle"  style="zoom:1.5"></ion-icon>\n          <ion-icon *ngIf="isShownAutres" class="antalgiquesIcon" name="close-circle"   style="zoom:1.5"></ion-icon>\n\n        </ion-label>\n      </ion-item-divider>\n  \n      <ion-card *ngIf="isShownAutres">\n\n      <ion-item>\n        <ion-label><b>Gabapentine (Neurontin<span>&#174;</span>): {{AdminNeurontin}} mg PO</b>\n          <p>pour 5 mg/kg, toutes les 8h</p> \n          <p>NB comprimés de 150 ou 300 mg</p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label><b>Phloroglucinol (Spasfon<span>&#174;</span>) : </b>\n          <p>- <b>{{AdminSpasfonIV}} mg</b> (0,5 mg/kg) IVL, toutes les 6h</p> \n          <p>- <b>{{AdminSpasfonPO}} mg</b> (1,5 mg/kg) PO, toutes les 6h</p> \n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label><b>Amitryptiline (Laroxyl<span>&#174;</span>) : </b>\n          <p>- <b>{{AdminLaroxylIV}} mg</b> (0,5 mg/kg/j) IVSE sur 6h, 1 fois</p> \n          <p>- <b>{{AdminLaroxylPO}} mg</b> (0,5 mg/kg/j) PO, 1 fois</p> \n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label><b>Clonazepam (Rivotril<span>&#174;</span>) : {{AdminRivotrilPO}} mg PO</b>\n          <p>- pour 0,01 mg/kg, toutes les 8h</p> \n          <p>- soit <b>{{GouttesRivotril}} gouttes</b> (1 gtte/10kg), 3 fois par jour</p> \n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label><b>Catapressan (Clonidine <span>&#174;</span>) : </b>\n          <p>- <b>{{AdminClonidineIVSE}} µg/h</b> (0,5 µg/kg/h) IVSE</p> \n          <p>> possibilité de doubler si insuffisant</p>\n          <p>- <b>{{AdminClonidinePO}} mg</b> (5 µg/kg) PO, toutes les 8h</p> \n        </ion-label>\n      </ion-item>\n\n      </ion-card>\n\n\n      <ion-item-divider (click)="ToggleAntiEmet()">\n        <ion-label >Anti-émétiques\n\n          <ion-icon *ngIf="!isShownAntiEmet" class="antalgiquesIcon" name="add-circle"  style="zoom:1.5"></ion-icon>\n          <ion-icon *ngIf="isShownAntiEmet" class="antalgiquesIcon" name="close-circle"  style="zoom:1.5"></ion-icon>\n\n        </ion-label>\n      </ion-item-divider>\n  \n      <ion-card *ngIf="isShownAntiEmet">\n\n      <ion-item>\n        <ion-label><b>Ondansétron (Zophren<span>&#174;</span>): {{AdminZophren}} mg IVL ou PO</b>\n          <p>pour 0,1 mg/kg, toutes les 8h</p> \n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label><b>Dropéridol (Droleptan<span>&#174;</span>) : {{AdminDroleptan}} µg IVL</b>\n          <p>pour 25 µg/kg , renouvelable 1 fois</p>\n        </ion-label>\n      </ion-item>\n\n      </ion-card>\n\n  \n    </ion-item-group>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\antalgie\antalgie.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AntalgiePage);
    return AntalgiePage;
}());

;
//# sourceMappingURL=antalgie.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrgencePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__patient_patient__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var UrgencePage = /** @class */ (function () {
    function UrgencePage(navCtrl, navParams, storage, alertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertController = alertController;
        this.SoluteRemplissage = "";
        this.isShownHypoTA = false;
        this.isShownACR = false;
        this.isShownChocAna = false;
        this.isShownHTM = false;
        this.isShownIAL = false;
    }
    /* déclaration des fonctions*/
    UrgencePage.prototype.calculs = function () {
        console.log("pret pr le calcul", this.PoidsNum);
        this.ageAnnees = Math.round((this.AgeNum / 12) * 10) / 10;
        this.PAShypoTA = Math.round((((this.AgeNum / 12) * 2) + 70) * 10) / 10;
        if (this.AgeNum <= 15 * 12) {
            this.SoluteRemplissage = "B26";
        }
        else {
            this.SoluteRemplissage = "Ringer Lactate";
        }
        this.VolRemplissage = Math.round(((this.PoidsNum) * 10) * 10) / 10;
        if (this.AgeNum <= 12) {
            this.AdminEphedrine = Math.round((this.PoidsNum * 0.3) * 10) / 10;
        }
        else if (this.AgeNum <= 36) {
            this.AdminEphedrine = Math.round((this.PoidsNum * 0.2) * 10) / 10;
        }
        else {
            this.AdminEphedrine = Math.round((this.PoidsNum * 0.1) * 10) / 10;
        }
        ;
        this.CEEACR = Math.round((this.PoidsNum * 4) * 10) / 10;
        this.PosoAdrenalineACR = Math.round((this.PoidsNum * 10) * 10) / 10;
        this.PosoCordaroneACR = Math.round((this.PoidsNum * 5) * 10) / 10;
        this.PosoBicarACR = Math.round((this.PoidsNum * 2) * 10) / 10;
        this.PosoAdrenalineAnaph = Math.round((this.PoidsNum * 1) * 10) / 10;
        this.PosoSoluAnaph = Math.round((this.PoidsNum * 1) * 10) / 10;
        this.AdminDantroleneHTM = Math.round((this.PoidsNum * 2.5) * 10) / 10;
        this.PosoRivotrilIAL = Math.round((this.PoidsNum * 15) * 10) / 10;
        this.PosoIntralipidesIAL = Math.round((this.PoidsNum * 3) * 10) / 10;
    };
    ;
    /*1. récupération des données du formulaire patient */
    UrgencePage.prototype.getdata = function () {
        var _this = this;
        var promiseList = [];
        promiseList.push(this.storage.get('AgeForCalc').then(function (Age) {
            _this.AgeNum = Age;
            _this.storage.get('PoidsForCalc').then(function (Poids) {
                _this.PoidsNum = Poids;
                _this.storage.get('DureeJeune').then(function (dureejeune) {
                    _this.DureeJeune = dureejeune;
                    _this.storage.get('EstomacPlein').then(function (Estomac) {
                        _this.EstomacPlein = Estomac;
                        console.log('lestomac est plein ?', _this.EstomacPlein);
                        if (_this.EstomacPlein == true) {
                            _this.EstomacOuiNon = "plein";
                        }
                        else {
                            _this.EstomacOuiNon = "vide";
                        }
                        ;
                        _this.storage.get('Allergie').then(function (allergie) {
                            _this.Allergie = allergie;
                            if (!_this.PoidsNum || !_this.AgeNum) {
                                _this.presentAlert();
                                _this.calculs();
                            }
                            else {
                                _this.calculs();
                            }
                            ;
                        });
                    });
                });
            });
        }));
    };
    ;
    /*2. Fonction d'alerte si données manquantes */
    UrgencePage.prototype.presentAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            cssClass: 'alerte',
                            title: 'Minute papillon !',
                            message: 'Saisissez un âge et un poids pour le patient.',
                            buttons: [
                                {
                                    text: 'Nan',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: Nan');
                                    }
                                }, {
                                    text: 'Okay',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__patient_patient__["a" /* PatientPage */]);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    /* 3. Toggle des cartes */
    UrgencePage.prototype.ToggleHypoTA = function () {
        this.isShownHypoTA = !this.isShownHypoTA;
        this.isShownACR = this.isShownChocAna = this.isShownHTM = this.isShownIAL = false;
    };
    ;
    UrgencePage.prototype.ToggleACR = function () {
        this.isShownACR = !this.isShownACR;
        this.isShownHypoTA = this.isShownChocAna = this.isShownHTM = this.isShownIAL = false;
    };
    ;
    UrgencePage.prototype.ToggleChocAna = function () {
        this.isShownChocAna = !this.isShownChocAna;
        this.isShownHypoTA = this.isShownACR = this.isShownHTM = this.isShownIAL = false;
    };
    ;
    UrgencePage.prototype.ToggleHTM = function () {
        this.isShownHTM = !this.isShownHTM;
        this.isShownHypoTA = this.isShownACR = this.isShownChocAna = this.isShownIAL = false;
    };
    ;
    UrgencePage.prototype.ToggleIAL = function () {
        this.isShownIAL = !this.isShownIAL;
        this.isShownHypoTA = this.isShownACR = this.isShownChocAna = this.isShownHTM = false;
    };
    ;
    /*Chargement des données du formulaire au chargement de la page, alerte si données manquantes*/
    UrgencePage.prototype.ionViewWillEnter = function () {
        this.getdata();
    };
    UrgencePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AntalgiePage');
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], UrgencePage.prototype, "nav", void 0);
    UrgencePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-urgence',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\urgence\urgence.html"*/'<ion-header translucent>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Drogues d\'urgences</ion-title>\n  </ion-navbar>\n  <ion-item color="secondary"> \n    <ion-label class="MonPatient" >Mon patient : {{AgeNum}} mois - {{PoidsNum}} kg \n      <p class="dilution">Estomac {{EstomacOuiNon}} - Jeune {{DureeJeune}} h</p>\n          <p>Allergie : {{Allergie}}</p></ion-label>\n    <ion-icon slot="end" icon="accessibility-outline"></ion-icon> \n  </ion-item>\n</ion-header>\n\n<ion-content>\n\n\n\n    <ion-card>\n      <ion-card-header (click)="ToggleHypoTA()">\n        <ion-card-title>Hypotension artérielle\n        </ion-card-title>\n        <ion-icon *ngIf="!isShownHypoTA" class="urgenceIcon" name="add-circle"  style="zoom:1.2"></ion-icon>\n          <ion-icon *ngIf="isShownHypoTA" class="urgenceIcon" name="close-circle" style="zoom:1.2"></ion-icon>\n      </ion-card-header>\n      <ion-card-content *ngIf="isShownHypoTA">\n        <p>Définition : PAM abaissée de 20% ou plus par rapport la valeur mesurée avant induction ou pour un <b>enfant de {{ageAnnees}} ans</b>,\n          <b>PAS &lt; {{PAShypoTA}} mmHg.</b> </p>\n        <p>Mesures à envisager :</p>\n        <p> - Remplissage par <b>{{VolRemplissage}} mL </b> de <b>{{SoluteRemplissage}}</b>, renouvelable une fois,</p>\n        <p> - Ephédrine par bolus IVD de <b>{{AdminEphedrine}} mg</b>, renouvelable </p>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card (click)="ToggleACR()" color="danger">\n      <ion-card-header>\n        <ion-card-title>Arrêt Cardio-Respiratoire\n        </ion-card-title>\n        <ion-icon *ngIf="!isShownACR" class="urgenceIcon" name="add-circle"  style="zoom:1.2"></ion-icon>\n          <ion-icon *ngIf="isShownACR" class="urgenceIcon" name="close-circle"  style="zoom:1.2"></ion-icon>\n      </ion-card-header>\n      <ion-card-content *ngIf="isShownACR">\n          <p>1. Appel d\'urgence : <b>3535</b>.</p>\n          <p>2. Débuter le massage cardiaque externe.</p>\n          <p>3. Ventiler en FiO2 1.</p>\n          <br>\n          <h4>Posologies ACR : </h4>\n\n        <ion-item color="danger">\n          <ion-label>\n            Adrénaline : <b>{{PosoAdrenalineACR}} µg</b> - IVD/5 minutes\n            <p>- 10 µg/kg, renouvellable</p>\n            <p>- d\'emblée si asystolie, au 3e choc si TV/FV</p>\n          </ion-label>\n        </ion-item>\n\n        <ion-item color="danger">\n          <ion-label>\n            CEE : <b>{{CEEACR}} J</b> \n            <p>- 4 J/kg</p>\n          </ion-label>\n        </ion-item>\n\n        <ion-item color="danger">\n          <ion-label>\n            Cordarone : <b>{{PosoCordaroneACR}} mg</b> - IVD \n            <p>- 5 mg/kg</p>\n            <p>- renouvelable 1 fois après 5 min</p>\n          </ion-label>\n        </ion-item>\n\n        <ion-item color="danger">\n          <ion-label>\n            Bicar 4,2% : <b>{{PosoBicarACR}} mL</b> - IVL \n            <p>- 2 mL/kg dès la 15e minute</p>\n          </ion-label>\n        </ion-item>\n\n      </ion-card-content>\n    </ion-card>\n\n\n    <ion-card>\n      <ion-card-header (click)="ToggleChocAna()">\n        <ion-card-title>Anaphylaxie\n        </ion-card-title>\n        <ion-icon *ngIf="!isShownChocAna" class="urgenceIcon" name="add-circle"  style="zoom:1.2"></ion-icon>\n          <ion-icon *ngIf="isShownChocAna" class="urgenceIcon" name="close-circle"  style="zoom:1.2"></ion-icon>\n      </ion-card-header>\n      <ion-card-content *ngIf="isShownChocAna">\n        <p>Définition : réaction anaphylactique de grade 2 ou 3 si : HypoTA (-30%), Tachy (FC +30%) ou oedeme de Quincke ou bronchospasme.</p>\n        <br>\n        <p>Mesures à mettre en place :</p>\n        <p> - éviction de tout allergène suspecté,</p>\n        <p> - adrénaline : <b>{{PosoAdrenalineAnaph}} µg IVD</b>, renouvelable 5 à 10 fois,</p>\n        <p> - solumédrol : <b>{{PosoSoluAnaph}} mg IVD</b>, renouvelable 1 fois,</p>\n        <p> - prévoir bilan allergo-immunologique après contrôle de la situation clinique.</p>\n      </ion-card-content>\n    </ion-card>\n\n\n    <ion-card color="warning">\n      <ion-card-header (click)="ToggleHTM()">\n        <ion-card-title>Hyperthermie maligne\n        </ion-card-title>\n        <ion-icon *ngIf="!isShownHTM" class="urgenceIcon" name="add-circle"  style="zoom:1.2"></ion-icon>\n          <ion-icon *ngIf="isShownHTM" class="urgenceIcon" name="close-circle"  style="zoom:1.2"></ion-icon>\n      </ion-card-header>\n      <ion-card-content *ngIf="isShownHTM">\n        <p>Evoquer devant une augmentation importante et inexpliquée de l\'EtCO2, la FC, la température ; devant l\'apparition d\'une rigidité musculaire des masséters, du tronc ou des membres.</p>\n        <p>Conduite à tenir en cas de suspicion :</p>\n        <p>- Arrêt halogénés, changement des filtres et tuyaux</p>\n        <p>- Hyperventilation en FiO2 1</p>\n        <p>- Contre indication absolue celocurine jusqu\'à preuve du contraire</p>\n        <p>- Dantrolène <b>{{AdminDantroleneHTM}} mg IVL</b> (soit 2,5 mg/kg, renouvelable 4 fois max) à diluer dans de l\'<b>EPPI</b></p>\n        <p><i>NB : le dantrolène est au dessus du frigo en SSPI.</i></p>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header (click)="ToggleIAL()">\n        <ion-card-title>Intoxication aux AL\n        </ion-card-title>\n        <ion-icon *ngIf="!isShownIAL" class="urgenceIcon" name="add-circle"  style="zoom:1.2"></ion-icon>\n          <ion-icon *ngIf="isShownIAL" class="urgenceIcon" name="close-circle"  style="zoom:1.2"></ion-icon>\n      </ion-card-header>\n      <ion-card-content *ngIf="isShownIAL">\n        <p>Devant toute suspicion, en présence de signes neurologiques :</p>\n        <p>- Rivotril : <b>{{PosoRivotrilIAL}} µg IVD</b> (soit 15 µg/kg)</p>\n        <p>- Intralipides 20% : <b>{{PosoIntralipidesIAL}} mL IVL</b> (soit 3mL/kg), renouvelable</p>\n        \n      </ion-card-content>\n    </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\urgence\urgence.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], UrgencePage);
    return UrgencePage;
}());

//# sourceMappingURL=urgence.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntretienAnesthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__patient_patient__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/**
 * Generated class for the LocoRegionalePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EntretienAnesthPage = /** @class */ (function () {
    function EntretienAnesthPage(navCtrl, navParams, storage, alertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertController = alertController;
        this.isShownInhalatoire = false;
        this.isShownIntraVeineux = false;
    }
    EntretienAnesthPage.prototype.ToggleInhalatoire = function () {
        this.isShownInhalatoire = !this.isShownInhalatoire;
        this.isShownIntraVeineux = false;
    };
    ;
    EntretienAnesthPage.prototype.ToggleIntraVeineux = function () {
        this.isShownIntraVeineux = !this.isShownIntraVeineux;
        this.isShownInhalatoire = false;
    };
    ;
    EntretienAnesthPage.prototype.presentAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            cssClass: 'alerte',
                            title: 'Minute papillon !',
                            message: 'Saisissez un âge et un poids pour le patient.',
                            buttons: [
                                {
                                    text: 'Nan',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: Nan');
                                    }
                                }, {
                                    text: 'Okay',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__patient_patient__["a" /* PatientPage */]);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    EntretienAnesthPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LocoRegionalePage');
    };
    EntretienAnesthPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var promiseList = [];
        promiseList.push(this.storage.get('AgeForCalc').then(function (Age) {
            _this.AgeNum = Age;
            _this.storage.get('PoidsForCalc').then(function (Poids) {
                _this.PoidsNum = Poids;
                _this.storage.get('DureeJeune').then(function (dureejeune) {
                    _this.DureeJeune = dureejeune;
                    _this.storage.get('EstomacPlein').then(function (Estomac) {
                        _this.EstomacPlein = Estomac;
                        console.log('lestomac est plein ?', _this.EstomacPlein);
                        if (_this.EstomacPlein == true) {
                            _this.EstomacOuiNon = "plein";
                        }
                        else {
                            _this.EstomacOuiNon = "vide";
                        }
                        ;
                        _this.storage.get('Allergie').then(function (allergie) {
                            _this.Allergie = allergie;
                            if (!_this.PoidsNum || !_this.AgeNum) {
                                _this.presentAlert();
                                _this.calculs();
                            }
                            else {
                                _this.calculs();
                            }
                            ;
                        });
                    });
                });
            });
        }));
    };
    EntretienAnesthPage.prototype.calculs = function () {
        var _this = this;
        var promiseList = [];
        promiseList.push(this.storage.get('AgeForCalc').then(function (Age) {
            _this.AgeNum = Age;
            _this.storage.get('PoidsForCalc').then(function (Poids) {
                _this.PoidsNum = Poids;
                _this.storage.get('DureeJeune').then(function (dureejeune) {
                    _this.DureeJeune = dureejeune;
                    _this.storage.get('EstomacPlein').then(function (Estomac) {
                        _this.EstomacPlein = Estomac;
                        console.log('lestomac est plein ?', _this.EstomacPlein);
                        if (_this.EstomacPlein == true) {
                            _this.EstomacOuiNon = "plein";
                        }
                        else {
                            _this.EstomacOuiNon = "vide";
                        }
                        ;
                        _this.storage.get('Allergie').then(function (allergie) {
                            _this.Allergie = allergie;
                            /*placer les calculs ici*/
                            if (_this.AgeNum <= 1) {
                                _this.CAMSevo = 3.3;
                            }
                            else if (_this.AgeNum <= 6) {
                                _this.CAMSevo = 3.1;
                            }
                            else if (_this.AgeNum <= 12) {
                                _this.CAMSevo = 2.7;
                            }
                            else if (_this.AgeNum <= 60) {
                                _this.CAMSevo = 2.5;
                            }
                            else {
                                _this.CAMSevo = 1.7;
                            }
                            ;
                            _this.PropoEntretien = Math.round((_this.PoidsNum * 10) * 10) / 10;
                            _this.HypnoEntretien = Math.round((_this.PoidsNum * 0.1) * 10) / 10;
                            _this.RemiEntretien = Math.round((_this.PoidsNum * 10) * 10) / 10;
                            _this.RocuEntretien = Math.round((_this.PoidsNum * 0.6) * 10) / 10;
                            _this.TracEntretien = Math.round((_this.PoidsNum * 0.5) * 10) / 10;
                        });
                    });
                });
            });
        }));
    };
    ;
    EntretienAnesthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-entretien-anesth',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\entretien-anesth\entretien-anesth.html"*/'<ion-header translucent>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Entretien anesthésique</ion-title>\n  </ion-navbar>\n  <ion-item color="secondary"> \n    <ion-label class="MonPatient" >Mon patient : {{AgeNum}} mois - {{PoidsNum}} kg \n      <p class="dilution">Estomac {{EstomacOuiNon}} - Jeune {{DureeJeune}} h</p>\n    <p>Allergie : {{Allergie}}</p></ion-label>\n    <ion-icon slot="end" icon="accessibility-outline"></ion-icon> \n  </ion-item>\n</ion-header>\n\n<ion-content padding>\n\n  \n  <ion-item-divider (click)="ToggleInhalatoire()" >\n    <ion-label>Entretien inhalatoire\n  <ion-icon *ngIf="!isShownInhalatoire" class="fluidIcon" name="add-circle" style="zoom:1.5"></ion-icon>\n  <ion-icon *ngIf="isShownInhalatoire" class="fluidIcon" name="close-circle"  style="zoom:1.5"></ion-icon>\n    </ion-label>\n  </ion-item-divider> \n\n  <ion-card *ngIf="isShownInhalatoire">\n\n      <ion-item><p>\n        Suggestions de concentrations selon l\'âge\n      </p>\n      <p>Exprimées en %EtHalogéné</p>\n    </ion-item>\n\n      <ion-item color="warning">         \n        <ion-label >Sevoflurane : <b>{{CAMSevo}} %</b></ion-label>\n        </ion-item>\n  </ion-card>  \n\n  <ion-item-divider (click)="ToggleIntraVeineux()" >\n    <ion-label>Entretien intraveieneux\n  <ion-icon *ngIf="!isShownIntraVeineux" class="fluidIcon" name="add-circle" style="zoom:1.5"></ion-icon>\n  <ion-icon *ngIf="isShownIntraVeineux" class="fluidIcon" name="close-circle"  style="zoom:1.5"></ion-icon>\n    </ion-label>\n  </ion-item-divider> \n\n\n  <ion-card *ngIf="isShownIntraVeineux">\n\n<ion-item color="warning">         \n  <ion-label >Propofol : <b>{{PropoEntretien}} mg/h</b>\n  <p>Pour 10 mg/kg/h </p></ion-label>\n  </ion-item>\n\n\n<ion-item color="orange">         \n  <ion-label >Midazolam : <b>{{HypnoEntretien}} mg/h</b>\n  <p>Pour 0,1 mg/kg/h </p></ion-label>\n  </ion-item>\n\n\n<ion-item color="primary">         \n  <ion-label >Remifentanil : <b>{{RemiEntretien}} µg/h</b>\n  <p>Pour 10 µg/kg/h </p></ion-label>\n  </ion-item>\n\n \n\n<ion-item color="danger">         \n  <ion-label >Rocuronium : <b>{{RocuEntretien}} mg/h</b>\n  <p>Pour 0,6 mg/kg/h </p></ion-label>\n  </ion-item>\n\n\n<ion-item color="danger">         \n  <ion-label >Tracrium : <b>{{TracEntretien}} mg/h</b>\n  <p>Pour 0,5 mg/kg/h </p></ion-label>\n  </ion-item>\n\n</ion-card>  \n\n</ion-content>'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\entretien-anesth\entretien-anesth.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], EntretienAnesthPage);
    return EntretienAnesthPage;
}());

//# sourceMappingURL=entretien-anesth.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AntiInfectieuxPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_data_liste_anti_infectieux__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AntiInfectieuxPage = /** @class */ (function () {
    function AntiInfectieuxPage(navCtrl, navParams, storage, alertController, dataService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertController = alertController;
        this.dataService = dataService;
        this.searchTerm = "";
        this.isShownCard = false;
    }
    AntiInfectieuxPage.prototype.ngOnInit = function () {
        this.setFilteredItems();
    };
    AntiInfectieuxPage.prototype.setFilteredItems = function () {
        this.cards = this.dataService.filterItems(this.searchTerm);
    };
    AntiInfectieuxPage.prototype.ToggleCard = function (card, index) {
        this.cards.isShownCard = !this.cards.isShownCard;
    };
    AntiInfectieuxPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-anti-infectieux',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\anti-infectieux\anti-infectieux.html"*/'<ion-header translucent>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Anti-infectieux</ion-title>\n  </ion-navbar>\n <ion-card-content color="danger">Les posologies indiquées sont adaptées à la <b>pédiatrie</b> uniquement.\n  </ion-card-content>\n</ion-header>\n\n<ion-content padding>\n  <ion-searchbar\n    [(ngModel)]="searchTerm"\n    (ionChange)="setFilteredItems()"\n  ></ion-searchbar>\n\n\n  <ion-list>\n    <ion-card *ngFor="let card of cards, let i = index" [attr.data-index]="i" padding="5%">\n      <ion-card-title (click)="ToggleCard(card, i)" class="carteATB"><u>{{card.title}}</u>\n        <ion-icon *ngIf="!cards.isShownCard" class="fluidIcon" name="add-circle"  style="zoom:1"></ion-icon>\n        <ion-icon *ngIf="cards.isShownCard" class="fluidIcon" name="close-circle"   style="zoom:1"></ion-icon>\n      </ion-card-title>\n      <ion-card-content *ngIf="cards.isShownCard">\n        <p><b>Posologie</b> : {{card.posologie}}</p>\n        <br>\n        <p><b>Reconstitution</b> : {{card.reconstitution}}</p>\n        <br>\n        <p><b>Dilution</b> : {{card.dilution}}</p>\n        <br>\n        <p><b>Administration</b> : {{card.administration}}</p>\n        <br>\n        <p><b>Remarques</b> : {{card.remarques}}</p>\n        <br>\n      </ion-card-content>\n\n    </ion-card>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\anti-infectieux\anti-infectieux.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_data_liste_anti_infectieux__["a" /* ServiceDataProvider */]])
    ], AntiInfectieuxPage);
    return AntiInfectieuxPage;
}());

//# sourceMappingURL=anti-infectieux.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the ServiceDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ServiceDataProvider = /** @class */ (function () {
    function ServiceDataProvider() {
        this.cards = [];
        this.cards = [
            { title: "Aciclovir (Zovirax®)", posologie: "30 à 60 mg/kg/j en 3 prises.", reconstitution: "avec EPPI ou NaCl 0,9%, 25 mg/mL.", dilution: "NaCl 0,9%, max. 7 mg/mL sur VVP, 25 mg/mL sur VVC.", administration: "IVL sur 60 minutes.", remarques: "Incompatible avec la nutrition parentérale et la ceftazidime." },
            { title: "Amikacine (Amiklin®)", posologie: "15 à 30 mg/kg/j en 1 prise.", reconstitution: "", dilution: "si besoin, avec EPPI, 125 mg/mL.", administration: "IV en 30 minutes.", remarques: "Utiliser une ligne dédiée, ne pas mélanger avec béta-lactamines, héparines, dexaméthasone." },
            { title: "Amoxicilline (Clamoxyl®)", posologie: "100 à 200 mg/kg/j en 3 à 4 prises.", reconstitution: "Avec EPPI, 50 mg/mL.", dilution: "NaCl 0,9% (stable 6h) ou G5% (stable 1h), sans dépasser 100 mg/mL", administration: "IVL en 30 à 60 minutes.", remarques: "Ne pas mélanger avec les aminosides. Compatible en Y avec la nutrition parentérale." },
            { title: "Amoxicilline + Acide Clavulanique (Augmentin®)", posologie: "Avant 3 mois ou 4kg, 100 mg/kg/j en 2 prises. > 3 mois mais < 40 kg, 150 mg/kg/j en 3 prises. Ensuite, posologies adulte.", reconstitution: "EPPI ou NaCl 0,9%, 50 mg/mL.", dilution: "NaCl 0,9% (stable 1h) ou G5% (stable 30 minutes).", administration: "IVL en 30 à 40 minutes. Jamais en moins de 5 minutes avant 3 mois.", remarques: "Attention, posologies et concentrations exprimées en Amoxicilline, veiller à ne pas dépasser la dose d'acide clavulanique maximale de 20 mg/kg/j. Incompatible avec les aminosides. Compatible en Y avec l'alimentation parentérale." },
            { title: "Amphotéricine B liposomale (Ambisome®)", posologie: "3 mg/kg/j en 1 prise.", reconstitution: "Flacon de 50 mg avec 12 mL d'EPPI pour obtenir une solution-mère à 4 mg/mL.", dilution: "Dans du G5% - jamais dans du NaCl 0,9%. Entre 0,2 et 2 mg/mL. Utiliser le filtre de 5 µm pour mettre la solution reconstituée dans le G5% de dilution.", administration: "IV en 30 à 60 minutes.", remarques: "Filtre à 5 µm livré dans l'emballage, à utiliser pour rettenir d'éventuels agglomérats de liposomes qui se seraient formés pendant la reconstitution, en cas d'agitation insuffisante. Attention, incompatible avec le NaCl, les électrolytes et la nutrition parentérale." },
            { title: "Caspofungine (Cancidas®)", posologie: "70 mg/m²/j à J1, puis 50 mg/m²/j, en 1 prise.", reconstitution: "Flacon de 50 mg avec 10,5 mL d'EPPI pour obtenir une solution mère à 5,2 mg/mL ou flacon de 70 mg avec 10,5 mL d'EPPI pour obtenir une solution-mère à 7,6 mg/mL.", dilution: "NaCl 0,9% (jamais dans du G5%). Max 0,5 mg/mL. Utiliser pur non dilué si restriction hydrique et VVC.", administration: "IVL en 60 minutes", remarques: "Incompatible avec le glucose, la nutrition parentérale et l'héparine." },
            { title: "Céfamandole (Céfamandole®)", posologie: "150 mg/kg/j en 3 à 6 prises, max. 6 g/j", reconstitution: "Flacon de 750 mg avec 10 mL d'EPPI, de G5% ou de NaCl 0,9%.", dilution: "Si besoin dans EPPI, NaCl 0,9% ou G5%, pas de concentration cible.", administration: "IVL en 30 minutes.", remarques: "RAS." },
            { title: "Céfépime (Axepim®)", posologie: "150 mg/kg/j en 3 prises, max 6 g/j", reconstitution: "EPPI, G5% ou NaCl 0,9%, 100 à 200 mg/mL.", dilution: "Dans G5% ou NaCl 0,9%.", administration: "IVL en 30 minutes. ", remarques: "RAS." },
            { title: "Céfotaxime (Claforan®)", posologie: "100 à 200 mg/kg/j, 300 mg/kg/j dans les infections méningées, en 3 à 4 prises, sans dépasser 24g/j.", reconstitution: "EPPI 10 mL.", dilution: "G5% ou NaCl 0,9%, 10 à 50 mg/mL, ne pas dépasser 150 mg/mL pour l'administration IV.", administration: "IVL en 20 à 60 minutes.", remarques: "Risque d'arythmie cardiaque en cas d'administration intraveineuse rapide sur cathéter veineux central." },
            { title: "Ceftazidime (Fortum®)", posologie: "50 à 200 mg/kg/j en 3 prises ou en continu, sans dépasser 6 g/j.", reconstitution: "G5% ou NaCl 0,9%, 10mL.", dilution: "G5% ou NaCl 0,9%, stable 18h si concentration < 40 mg/mL, ne pas dépasser 180 mg/mL de concentration en cas de restriction hydrique.", administration: "IVL sur 30 minutes ou IVSE continue.", remarques: "Incompatible avec le bicarbonate, l'aciclovir et le ganciclovir." },
            { title: "Ceftriaxone (Rocéphine®)", posologie: "50 à 100 mg/kg/j en 1 prise, sans dépasser 4g/j.", reconstitution: "EPPI, G5% ou NaCl 0,9%, 100 mg/mL.", dilution: "G5% ou NaCl 0,9%, 10 à 40 mg/mL.", administration: "IVL sur 30 minutes.", remarques: "Incompatible avec le calcium, la vancomycine, le fluconazole, les aminosides, la nutrition parentérale. Contre indiqué avant 28j et en cas d'administration de calcium IV associée. Coloration jaune normale." },
            { title: "Ciprofloxacine (Ciflox®)", posologie: "20 à 30 mg/kg/j - 45 mg/kg/j chez le drépanocytaire - en 2 à 3 prises, sans dépasser 1,2 g/j.", reconstitution: "NA.", dilution: "NA.", administration: "IVL sur 60 minutes.", remarques: "Incompatible avec la nutrition parentérale, les pénicillines, les héparines, les solutions alcalines. Privilégier la voie orale : la biodisponibilité est identique." },
            { title: "Clindamycine (Dalacine®)", posologie: "30 à 40 mg/kg/j en 3 à 4 prises, sans dépasser 2,4 g/j.", reconstitution: "NA.", dilution: "G5% ou NaCl 0,9%, max. 18 mg/mL.", administration: "IVL en 30 minutes, ne pas dépasser 20 mg/kg/h ou 30 mg/min.", remarques: "Incompatible avec l'ampicilline, la phénytoïne, les barbituriques, l'aminophylline, le calcium, le magnésium, la ceftriaxone, la ciprofloxacine et la ranitidine." },
            { title: "Cloxacilline (Orbénine®)", posologie: "100 à 200 mg/kg/j en 4 à 6 prises, max. 12 g/j.", reconstitution: "EPPI, G5% ou NaCl 0,9%, 1g dans 16 mL.", dilution: "G5% ou NaCl 0,9%, 10 mg/mL.", administration: "IVL sur 60 minutes.", remarques: "Incompatible avec la nutrition parentérale." },
            { title: "Fluconazole (Triflucan®)", posologie: "3 à 12 mg/kg/j en 1 prise.", reconstitution: "NA.", dilution: "NA.", administration: "IVL en 30 minutes, 120 minutes si > 6 mg/kg/j.", remarques: "Inhibiteur enzymatique. Teneur en sodium significative à 0,155 mEq/mL." },
            { title: "Fosfomycine (Fosfocine®)", posologie: "100 à 200 mg/kg/j en 2 à 4 prises, sans dépasser 16 g/j.", reconstitution: "1g avec 10 mL d'EPPI. 4g avec 15 mL d'EPPI.", dilution: "G5% ou NaCl 0,9%, max. 10 mg/mL.", administration: "IVL en 60 minutes.", remarques: "Apports en sodium significatifs à 14,3 mEq/g." },
            { title: "Gentamicine (Gentalline®)", posologie: "5 à 8 mg/kg/j en 1 prise.", reconstitution: "NA.", dilution: "G5% ou NaCl 0,9%, max. 10 mg/mL.", administration: "IVL en 30 minutes.", remarques: "Incompatible avec les pénicillines et les héparines > 1 UI/mL." },
            { title: "Imipénème-Cilastine (Tienam®)", posologie: "60 à 100 mg/kg/j en 4 prises sans dépasser 4 g/j.", reconstitution: "G5% ou NaCl 0,9%, 25 mg/mL.", dilution: "G5% ou NaCl 0,9%, 5 mg/mL, max. 7 mg/mL si restriction hydrique, stable 4h.", administration: "IVL en 30 minutes, 60 minutes au delà de 500 mg.", remarques: "Posologies et concentrations exprimées en dose d'Imipgène. Contre indique chez l'insuffisant rénale. Compatible avec la nutrition parentérale." },
            { title: "Lévofloxacine (Tavanic®)", posologie: "20 mg/kg/j de 6 mois à 5 ans, en 2 prises. 10 mg/kg/j au delà de 5 ans, en 1 prise, sans dépasser 1g/j.", reconstitution: "NA.", dilution: "NA.", administration: "IVL en 60 minutes.", remarques: "Incompatible avec les bicarbonates et les héparines. Privilégier la voie orale : la biodisponibilité est identique." },
            { title: "Méropénème (Meronem®)", posologie: "60 à 120 mg/kg/j en 3 prises ou en continu, sans dépasser 6 g/j.", reconstitution: "EPPI ou NaCl 0,9%, 50 mg/mL.", dilution: "NaCl 0,9% (stable 8h) ou G5% (stable 2h), 1 à 20 mg/mL.", administration: "IVL en 30 minutes.", remarques: "Compatible avec la nutrition parentérale." },
            { title: "Métronidazole (Flagyl®)", posologie: "30 mg/kg/j en 3 à 4 prises, sans dépasser 4 g/j.", reconstitution: "NA.", dilution: "NA.", administration: "IVL en 30 minutes.", remarques: "Compatible avec la nutrition parentérale." },
            { title: "Pipéracilline-Tazobactam (Tazocilline®)", posologie: "300 mg/kg/j, en 3 à 4 prises ou en continu, sans dépasser 16 g/j.", reconstitution: "EPPI, G5% ou NaCl 0,9%, 200 mg/mL.", dilution: "G5 ou NaCl 0,9%, 20 à 80 mg/mL, stable 24h.", administration: "IVL en 30 minutes.", remarques: "Posologies et concentrations exprimées en pipéracilline. Incompatible avec les aminosides et les bicarbonates. Compatible avec la nutrition parentérale." },
            { title: "Rifampicine (Rifadine®)", posologie: "10 à 30 mg/kg/j en 1 prise (tuberculose) ou 2 prises (autres indications), sans dépasser 1,2 g/j.", reconstitution: "EPPI 60 mg/mL.", dilution: "G5% ou NaCl 0,9%, usuel 2,4 mg/mL, ne pas dépasser 6 mg/mL, stable 6h.", administration: "IVL en 30 minutes.", remarques: "Incompatible avec la nutrition parentérale. Très agressif en cas d'extravasation. Inducteur enzymatique." },
            { title: "Ticarcilline-Acide Clavulanique (Claventin®)", posologie: "225 à 300 mg/kg/j en 3 à 4 prises, sans dépasser 18 g/j.", reconstitution: "EPPI ou NaCl 0,9%.", dilution: "G5% ou NaCl 0,9%, 30 à 50 mg/mL, stable 6h.", administration: "IVL sur 30 minutes.", remarques: "Posologies et concentrations exprimées en ticarcilline. Max 5 mg/kg/prise et 20 mg/kg/j d'acide clavulanique. Incompatible avec les aminosideS, bicarbonates et la nutrition parentérale. Teneur en sodium 5,2 mEq/g et teneur en potassium 0,33 mEq/g. " },
            { title: "Triméthoprime-Sulfaméthoxazole (Bactrim®)", posologie: "30 à 60 mg/kg/j en 2 prises (curatif pneumocystis carinii : 100 mg/kg/j en 3 prises).", reconstitution: "NA.", dilution: "G5% ou NaCl 0,9% 3,2 mg/mL (stable 6h), max. 8 mg/mL si restriction hydrique (stable 1h).", administration: "IVL sur 60 minutes.", remarques: "Posologies et concentrations exprimées en Sulfaméthoxazole. Peut être administré pur sur VVC. Incompatible avec la nutrition parentérale." },
            { title: "Vancomycine (Vancocine®)", posologie: "40 à 60 mg/kg/j en 4 prises ou en continu.", reconstitution: "EPPI 50 mg/mL.", dilution: "G5% ou NaCl 0,9%, ne pas dépasser 10 mg/mL, stable 24h.", administration: "IVL en 60 minutes ou IVSE.", remarques: "Ralentir la perfusion en cas de réaction cutanée (Redman Syndrome). Compatible avec la nutrition parentérale, les lipides IV et l'héparine < 1 UI/mL." },
            { title: "Voriconazole (Vfend®)", posologie: "2 à 12 ans et < 50 kg : 18 mg/kg/j à J1 puis 16 mg/kg/j. Après 12 ans et > 50 kg, 12 mg/kg/j à J1 puis 8 mg/kg/j. En 2 prises.", reconstitution: "EPPI ou NaCl 0,9%, 19 mL pour obtenir 10 mg/mL.", dilution: "G5% ou NaCl 0,9%, 0,5 à 5 mg/mL.", administration: "IVL en 1 à 3h, sans dépasser 3 mg/kg/h.", remarques: "Risque d'accumulation de l'excipient chez l'insuffisant rénal : préférer la forme orale chaque fois que possible. Incompatible avec la nutrition parentérale et les bicarbonates." },
        ];
    }
    ServiceDataProvider.prototype.filterItems = function (searchTerm) {
        return this.cards.filter(function (item) {
            return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    ServiceDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ServiceDataProvider);
    return ServiceDataProvider;
}());

//# sourceMappingURL=liste_anti_infectieux.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocoRegionalePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__patient_patient__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/**
 * Generated class for the LocoRegionalePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LocoRegionalePage = /** @class */ (function () {
    function LocoRegionalePage(navCtrl, navParams, storage, alertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertController = alertController;
        this.isShownAPD = false;
        this.isShownRachi = false;
        this.isShownALRP = false;
    }
    LocoRegionalePage.prototype.ToggleAPD = function () {
        this.isShownAPD = !this.isShownAPD;
        this.isShownRachi = this.isShownALRP = false;
    };
    ;
    LocoRegionalePage.prototype.ToggleRachi = function () {
        this.isShownRachi = !this.isShownRachi;
        this.isShownAPD = this.isShownALRP = false;
    };
    ;
    LocoRegionalePage.prototype.ToggleALRP = function () {
        this.isShownALRP = !this.isShownALRP;
        this.isShownAPD = this.isShownRachi = false;
    };
    ;
    LocoRegionalePage.prototype.presentAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            cssClass: 'alerte',
                            title: 'Minute papillon !',
                            message: 'Saisissez un âge et un poids pour le patient.',
                            buttons: [
                                {
                                    text: 'Nan',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: Nan');
                                    }
                                }, {
                                    text: 'Okay',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__patient_patient__["a" /* PatientPage */]);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    LocoRegionalePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LocoRegionalePage');
    };
    LocoRegionalePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var promiseList = [];
        promiseList.push(this.storage.get('AgeForCalc').then(function (Age) {
            _this.AgeNum = Age;
            _this.storage.get('PoidsForCalc').then(function (Poids) {
                _this.PoidsNum = Poids;
                _this.storage.get('DureeJeune').then(function (dureejeune) {
                    _this.DureeJeune = dureejeune;
                    _this.storage.get('EstomacPlein').then(function (Estomac) {
                        _this.EstomacPlein = Estomac;
                        console.log('lestomac est plein ?', _this.EstomacPlein);
                        if (_this.EstomacPlein == true) {
                            _this.EstomacOuiNon = "plein";
                        }
                        else {
                            _this.EstomacOuiNon = "vide";
                        }
                        ;
                        _this.storage.get('Allergie').then(function (allergie) {
                            _this.Allergie = allergie;
                            if (!_this.PoidsNum || !_this.AgeNum) {
                                _this.presentAlert();
                                _this.calculs();
                            }
                            else {
                                _this.calculs();
                            }
                            ;
                        });
                    });
                });
            });
        }));
    };
    LocoRegionalePage.prototype.calculs = function () {
        var _this = this;
        var promiseList = [];
        promiseList.push(this.storage.get('AgeForCalc').then(function (Age) {
            _this.AgeNum = Age;
            _this.storage.get('PoidsForCalc').then(function (Poids) {
                _this.PoidsNum = Poids;
                _this.storage.get('DureeJeune').then(function (dureejeune) {
                    _this.DureeJeune = dureejeune;
                    _this.storage.get('EstomacPlein').then(function (Estomac) {
                        _this.EstomacPlein = Estomac;
                        console.log('lestomac est plein ?', _this.EstomacPlein);
                        if (_this.EstomacPlein == true) {
                            _this.EstomacOuiNon = "plein";
                        }
                        else {
                            _this.EstomacOuiNon = "vide";
                        }
                        ;
                        _this.storage.get('Allergie').then(function (allergie) {
                            _this.Allergie = allergie;
                            /*placer les calculs ici*/
                            _this.Kemura = Math.round(((10 + _this.PoidsNum) * 0.8) * 10) / 10;
                            _this.Busoni = Math.round(((2 * (_this.AgeNum) / 12) + 10) * 10) / 10;
                            _this.BolusPIEBRopiSuf = Math.round((_this.PoidsNum * 0.2) * 10) / 10;
                            _this.BolusPCEARopiSuf = Math.round((_this.PoidsNum * 0.15) * 10) / 10;
                            _this.DoseMaxPCEARopiSuf = Math.round((_this.PoidsNum * 1.5) * 10) / 10;
                            _this.VolBupi5NN = Math.round((_this.PoidsNum * 0.2) * 10) / 10;
                            _this.VolBAXmin = Math.round((_this.PoidsNum * 0.2) * 10) / 10;
                            _this.VolBAXmax = Math.round((_this.PoidsNum * 0.5) * 10) / 10;
                            _this.VolFEMmin = Math.round((_this.PoidsNum * 0.3) * 10) / 10;
                            _this.VolFEMmax = Math.round((_this.PoidsNum * 1) * 10) / 10;
                            _this.VolSciatMin = Math.round((_this.PoidsNum * 0.3) * 10) / 10;
                            _this.VolSciatMax = Math.round((_this.PoidsNum * 1) * 10) / 10;
                            _this.VolIH = Math.round((_this.PoidsNum * 0.5) * 10) / 10;
                            _this.VolPenien = Math.round((_this.PoidsNum * 0.1) * 10) / 10;
                            _this.VolBPV = Math.round((_this.PoidsNum * 0.5) * 10) / 10;
                            _this.VolTAPmin = Math.round((_this.PoidsNum * 0.3) * 10) / 10;
                            _this.VolTAPmax = Math.round((_this.PoidsNum * 0.5) * 10) / 10;
                        });
                    });
                });
            });
        }));
    };
    ;
    LocoRegionalePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-loco-regionale',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\loco-regionale\loco-regionale.html"*/'<ion-header translucent>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Anesthésie loco-régionale</ion-title>\n  </ion-navbar>\n  <ion-item color="secondary"> \n    <ion-label class="MonPatient" >Mon patient : {{AgeNum}} mois - {{PoidsNum}} kg \n      <p class="dilution">Estomac {{EstomacOuiNon}} - Jeune {{DureeJeune}} h</p>\n    <p>Allergie : {{Allergie}}</p></ion-label>\n    <ion-icon slot="end" icon="accessibility-outline"></ion-icon> \n  </ion-item>\n</ion-header>\n\n<ion-content padding>\n\n  \n  <ion-item-divider (click)="ToggleAPD()" color="warning">\n    <ion-label>Anesthésie péridurale pédiatrique\n  <ion-icon *ngIf="!isShownAPD" class="fluidIcon" name="add-circle" style="zoom:1.5"></ion-icon>\n  <ion-icon *ngIf="isShownAPD" class="fluidIcon" name="close-circle"  style="zoom:1.5"></ion-icon>\n    </ion-label>\n  </ion-item-divider> \n\n  <ion-card *ngIf="isShownAPD">\n\n      <ion-item> <b>Ponction :</b> \n        <p>Espace L4-L5 (voie de Taylor),</p> \n        <p>Entre les épines iliaques postérieures,</p>\n        <p>Aiguille pédiatrique (graduation/5mm). </p> </ion-item>\n\n      <ion-item><b>Distance</b> de l\'espace péridural :\n        <p>Estimation</p> \n      \n\n      <ion-item font-size="smaller">- Selon Kemura : <b>{{Kemura}} mm</b> \n        <p>Formule basée sur le poids.</p> </ion-item> \n\n      <ion-item>- Selon Busoni <b>{{Busoni}} mm</b> \n        <p>Formule basée sur l\'âge ;</p> \n        <p>Valable après 2 ans.</p></ion-item>\n\n      </ion-item>\n\n      <ion-item>Cathétériser l\'EPD sur <b>30 mm</b>.</ion-item>\n\n      <ion-item><b>Cassette de PIEB + PCEA :</b>\n        <p>- Volume total de 50 mL,</p>\n        <p>- Ropi 1 mg/mL + Suf 0,2 µg/mL,</p>\n        <p>- Tubulure et clef sécurité en SSPI.</p>\n        </ion-item>\n\n      <ion-item><b>Posologies</b> (suggestions) :\n      <p> - Bolus horaire : <b>{{BolusPIEBRopiSuf}} mL</b> toutes les heures,</p>\n      <p> - Bolus à demande : <b>{{BolusPCEARopiSuf}} mL</b>, PR 20 min,</p>\n      <p> - Dose max. : <b>{{DoseMaxPCEARopiSuf}} mL</b> toutes les 4 heures.</p>\n      </ion-item>\n  \n  </ion-card>\n\n  <ion-item-divider (click)="ToggleRachi()" color="danger">\n    <ion-label>Rachi-anesthésie néo-natale\n  <ion-icon *ngIf="!isShownRachi" class="fluidIcon" name="add-circle" style="zoom:1.5"></ion-icon>\n  <ion-icon *ngIf="isShownRachi" class="fluidIcon" name="close-circle"  style="zoom:1.5"></ion-icon>\n    </ion-label>\n  </ion-item-divider> \n\n  <ion-card *ngIf="isShownRachi">\n\n      <ion-item><b>Indications</b> :\n        <p>- Chirurgie sous ombilicale,</p>\n        <p>- Nouveau né de moins de 5 kg.</p></ion-item>\n\n      <ion-item> <b>Ponction :</b> \n        <p>Espace L4-L5 (voie de Taylor),</p> \n        <p>Entre les épines iliaques postérieures,</p>\n        <p>Aguille 25G courte (bleue).</p> </ion-item>\n\n      <ion-item><b>Bupivacaïne hyperbare</b>\n        <p>- 5 mg/mL</p>\n        <p>- {{VolBupi5NN}} mL (pour 0,2 mL/kg)</p>\n        <p>- Utiliser une seringue à insuline.</p>\n        </ion-item>\n\n      <div class="astucediv" padding = "15 px">\n        <img class="lightbulb" src="/assets/imgs/light-bulb.png">\n        <p class="astucepara"> \n        <b>L\'astuce de Joëlle</b> : Quelques gouttes de G30% sur les lèvres, avant, pendant et après la rachianesthésie</p>\n        \n        </div>\n  \n  </ion-card>\n\n\n  <ion-item-divider (click)="ToggleALRP()" color="tertiary">\n    <ion-label>Blocs périphériques\n  <ion-icon *ngIf="!isShownALRP" class="fluidIcon" name="add-circle" style="zoom:1.5"></ion-icon>\n  <ion-icon *ngIf="isShownALRP" class="fluidIcon" name="close-circle"  style="zoom:1.5"></ion-icon>\n    </ion-label>\n  </ion-item-divider> \n\n  <ion-item *ngIf="isShownALRP">\n    <ion-label>Dilutions suggérées : \n      <p> - Ropivacaïne : 2 mg/mL</p>\n      <p> - Lévobupivacaïne : 2,5 mg/mL</p>\n    </ion-label>\n  </ion-item>\n\n  <ion-item *ngIf="isShownALRP">\n    <ion-label>Posologies suggérées : \n      <p>(en injection unique)</p>\n    </ion-label>\n  </ion-item>\n\n  <ion-grid fixed="true" *ngIf="isShownALRP" >\n    <ion-row class="ionFirstRow">\n      <ion-col>\n      Bloc\n      </ion-col>\n      <ion-col>\n      Volume/poids\n      </ion-col>\n      <ion-col>\n      Mon patient\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        Axillaire\n            </ion-col>\n      <ion-col>\n      0,2 à 0,5 mL/kg\n      </ion-col>\n      <ion-col>\n     {{VolBAXmin}} à {{VolBAXmax}} mL\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        Fémoral\n            </ion-col>\n      <ion-col>\n        0,3 à 1 mL/kg\n      </ion-col>\n      <ion-col>\n      {{VolFEMmin}} à {{VolFEMmax}} mL\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        Sciatique\n            </ion-col>\n      <ion-col>\n       0,3 à 1 mL/kg\n      </ion-col>\n      <ion-col>\n      {{VolSciatMin}} à {{VolSciatMax}} mL\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        Ilio-hypogastrique\n            </ion-col>\n      <ion-col>\n       0,5 mL/kg\n      </ion-col>\n      <ion-col>\n        {{VolIH}} mL\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        Pénien\n            </ion-col>\n      <ion-col>\n       0,1 mL/kg\n      </ion-col>\n      <ion-col>\n    {{VolPenien}} mL\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        Paravertébral\n            </ion-col>\n      <ion-col>\n       0,5 mL/kg\n      </ion-col>\n      <ion-col>\n        {{VolBPV}} mL\n      </ion-col>\n    </ion-row>\n\n  <ion-row>\n    <ion-col>\n      TAP\n          </ion-col>\n    <ion-col>\n     0,3 à 0,5 mL/kg\n    </ion-col>\n    <ion-col>\n      {{VolTAPmin}} à {{VolTAPmax}} mL\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n      Carré des lombes \n          </ion-col>\n    <ion-col>\n     Volume\n    </ion-col>\n    <ion-col>\n      Volume\n     </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n      Erecteurs du rachis\n    </ion-col>\n    <ion-col>\n     Volume\n    </ion-col>\n    <ion-col>\n      Volume\n    </ion-col>\n  </ion-row>\n\n</ion-grid>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\loco-regionale\loco-regionale.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LocoRegionalePage);
    return LocoRegionalePage;
}());

//# sourceMappingURL=loco-regionale.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtrophieVesicalePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ExtrophieVesicalePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExtrophieVesicalePage = /** @class */ (function () {
    function ExtrophieVesicalePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.isShownConsultation = false;
        this.isShownVPA = false;
        this.isShownPerOp = false;
        this.isShownPostOp = false;
    }
    ExtrophieVesicalePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExtrophieVesicalePage');
    };
    ExtrophieVesicalePage.prototype.ToggleConsultation = function () {
        this.isShownConsultation = !this.isShownConsultation;
        this.isShownVPA = this.isShownPerOp = this.isShownPostOp = false;
    };
    ExtrophieVesicalePage.prototype.ToggleVPA = function () {
        this.isShownVPA = !this.isShownVPA;
        this.isShownConsultation = this.isShownPerOp = this.isShownPostOp = false;
    };
    ExtrophieVesicalePage.prototype.TogglePerOp = function () {
        this.isShownPerOp = !this.isShownPerOp;
        this.isShownConsultation = this.isShownVPA = this.isShownPostOp = false;
    };
    ExtrophieVesicalePage.prototype.TogglePostOp = function () {
        this.isShownPostOp = !this.isShownPostOp;
        this.isShownConsultation = this.isShownVPA = this.isShownPerOp = false;
    };
    ExtrophieVesicalePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-extrophie-vesicale',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\extrophie-vesicale\extrophie-vesicale.html"*/'<!--\n  Generated template for the ExtrophieVesicalePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header translucent>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Extrophie Vésicale</ion-title>\n  </ion-navbar>\n  <ion-item color="warning">\n    <p class="entete_protocole">Auteurs : Dr. Charlotte FAIT, Pr. Souhayl DAHMANI</p>\n    <p class="entete_protocole">Date de publication : 21/09/2020</p>\n  </ion-item>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card color="secondary">\n    <ion-card-content>  Objectifs : \n      <p> - limiter les jours de réanimation avec intubation prolongée pour le contrôle de l\'analgésie.</p> \n      <p> - réhabilitation précoce avec passage de la première nuit en SSPI puis USC à J1.</p></ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header (click)="ToggleConsultation()">\n      <ion-card-title>Consultation\n      \n      <ion-icon *ngIf="!isShownConsultation" class="urgenceIcon" name="add-circle"  style="zoom:0.8"></ion-icon>\n      <ion-icon *ngIf="isShownConsultation" class="urgenceIcon" name="close-circle" style="zoom:0.8"></ion-icon>\n\n    </ion-card-title>\n    </ion-card-header>\n    <ion-card-content *ngIf="isShownConsultation">\n      <p> - Evaluation de la faisabilité d\'une réhabilitation précoce sans passage en réanimation.</p>\n      <p> - Evaluation des comorbidités du patient.</p>\n      <p> - Anticipation de la période post-opératoire. Appel systématique de la réanimation pour réserver une place <b>((4)3416)</b>.</p>\n      <p> - <b>Stratégie d\'épargne sanguine</b> : prescription de fer, bilan avec NFS, hémostase complète, carte de groupe, ionogramme sanguin.</p>\n      <p> - <b>Stratégie de contrôle des infections</b> : ECBU, dépistage BLSE par écouvillon rectal, cartographie fongique (écouvillon plaque vésicale, peau à la jonction de la plaque vésicale, aisselle, anus).</p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header (click)="ToggleVPA()">\n      <ion-card-title>Visite pré-opératoire\n      \n      <ion-icon *ngIf="!isShownVPA" class="urgenceIcon" name="add-circle"  style="zoom:0.8"></ion-icon>\n      <ion-icon *ngIf="isShownVPA" class="urgenceIcon" name="close-circle" style="zoom:0.8"></ion-icon>\n\n    </ion-card-title>\n    </ion-card-header>\n    <ion-card-content *ngIf="isShownVPA">\n      <p> - Vérifier les bilans prescrits.</p>\n      <p> - Prescrire RAI et 2e détermination de groupe.</p>\n      <p> - Faire une commande de culots globulaires prévisionnelle.</p>\n      <p> - Perfuser dès le début du jeûne avec du B26.</p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header (click)="TogglePerOp()">\n      <ion-card-title>Per-opératoire\n      \n      <ion-icon *ngIf="!isShownPerOp" class="urgenceIcon" name="add-circle"  style="zoom:0.8"></ion-icon>\n      <ion-icon *ngIf="isShownPerOp" class="urgenceIcon" name="close-circle" style="zoom:0.8"></ion-icon>\n\n    </ion-card-title>\n    </ion-card-header>\n    <ion-card-content *ngIf="isShownPerOp">\n      <p><b><u>Induction</u></b></p>\n      <p> - Confirmer la place en réanimation.</p>\n      <p> - NIRS à mettre en place avant l\'induction anesthésique.</p>\n      <p> - Antibioprophylaxie par Céfazoline IV 30 minutes avant l\'incision. </p>\n      <p> - Administration d\'Exacyl (ostéotomie) selon le protocole habituel.</p>\n      <p> - Dexaméthasone 0,15 mg/kg.</p>\n      <p> - Curarisation continue en IVSE.</p>\n      <p> - Pose de sonde naso-gastrique.</p>\n      <p> - Pose de cathéter veineux central en jugulaire interne droit (pas en fémoral car ostéotomie). Attention au montage des lignes type réanimation.</p>\n      <p> - Discuter la pose d\'un cathéter artériel pour monitorage hémodynamique, selon le terrain.</p>\n      <p> - Pose d\'un cathéter de péridurale, utiliser en per-opératoire, évaluer l\'efficacité en per-opératoire.</p>\n      <br>\n      <p><b><u>Pendant l\'intervention : </u></b></p>\n      <p> - Surveillance des saignements en per-opératoire et HemoCue réguliers (1 par heure pendant le temps orthopédique). Seuil transfusionnel à 8 g/dL. NFS de contrôle en post-opératoire.</p>\n      <br>\n      <p><b><u>En fin d\'intervention :</u></b></p>\n      <p> - Evaluation des critères d\'admission en réanimation : saignement, hémodynamique, ventilation.</p>\n      <p> - Transfert en réanimation si transfusion massive, support catécholaminergique, impossibilité d\'extubation rapide en SSPI, gestion de l\'analgésie prévue comme difficile (mauvaise efficacité de la péridurale, réinjections fréquentes de sufentanil en per-opératoire).</p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header (click)="TogglePostOp()">\n      <ion-card-title>Post-opératoire\n      \n      <ion-icon *ngIf="!isShownPostOp" class="urgenceIcon" name="add-circle"  style="zoom:0.8"></ion-icon>\n      <ion-icon *ngIf="isShownPostOp" class="urgenceIcon" name="close-circle" style="zoom:0.8"></ion-icon>\n\n    </ion-card-title>\n    </ion-card-header>\n    <ion-card-content *ngIf="isShownPostOp">\n      <p><b>En l\'absence de critère d\'admission en réanimation :</b> réhabilitation précoce en SSPI.</p>\n      <p> - Extubation précoce en SSPI.</p>\n      <p> - Contrôle de l\'analgésie par péridurale et paracétamol.</p>\n      <p> - Reprise des boissons (liquide clair) dès le soir.</p>\n      <br>\n      <p><b>Sortie de SSPI pour l\'USC à J1</b></p>\n      <p> - NFS à J1 (objectif Hb > 8 g/dL, hémostase normale).</p>\n      <p> - Stabilité hémodynamique et diurèse satisfaisante (> 3mL/kg/h).</p>\n      <p> - Analgésie par APD évaluée et efficace.</p>\n      <p> - Absence de trouble ionique.</p>\n      <p> - Ablation du cathéter artériel avant la sortie de SSPI.</p>   \n    </ion-card-content>\n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\extrophie-vesicale\extrophie-vesicale.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ExtrophieVesicalePage);
    return ExtrophieVesicalePage;
}());

//# sourceMappingURL=extrophie-vesicale.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(234);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_accueil_accueil__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_patient_patient__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_biometrie_biometrie__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_options_options__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_plateau_induction_plateau_induction__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_plateau_vas_plateau_vas__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_gestion_fluides_gestion_fluides__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_antalgie_antalgie__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_urgence_urgence__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_entretien_anesth_entretien_anesth__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_loco_regionale_loco_regionale__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_extrophie_vesicale_extrophie_vesicale__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_anti_infectieux_anti_infectieux__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_service_data_liste_anti_infectieux__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_accueil_accueil__["a" /* AccueilPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_patient_patient__["a" /* PatientPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_biometrie_biometrie__["a" /* BiometriePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_options_options__["a" /* OptionsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_plateau_induction_plateau_induction__["a" /* PlateauInductionPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_plateau_vas_plateau_vas__["a" /* PlateauVasPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_gestion_fluides_gestion_fluides__["a" /* GestionFluidesPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_antalgie_antalgie__["a" /* AntalgiePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_urgence_urgence__["a" /* UrgencePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_entretien_anesth_entretien_anesth__["a" /* EntretienAnesthPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_anti_infectieux_anti_infectieux__["a" /* AntiInfectieuxPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_loco_regionale_loco_regionale__["a" /* LocoRegionalePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_extrophie_vesicale_extrophie_vesicale__["a" /* ExtrophieVesicalePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {
                    backButtonText: 'retour',
                    iconMode: 'md'
                }, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_accueil_accueil__["a" /* AccueilPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_patient_patient__["a" /* PatientPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_biometrie_biometrie__["a" /* BiometriePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_options_options__["a" /* OptionsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_plateau_induction_plateau_induction__["a" /* PlateauInductionPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_plateau_vas_plateau_vas__["a" /* PlateauVasPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_gestion_fluides_gestion_fluides__["a" /* GestionFluidesPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_antalgie_antalgie__["a" /* AntalgiePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_urgence_urgence__["a" /* UrgencePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_entretien_anesth_entretien_anesth__["a" /* EntretienAnesthPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_anti_infectieux_anti_infectieux__["a" /* AntiInfectieuxPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_loco_regionale_loco_regionale__["a" /* LocoRegionalePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_extrophie_vesicale_extrophie_vesicale__["a" /* ExtrophieVesicalePage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_22__providers_service_data_liste_anti_infectieux__["a" /* ServiceDataProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_accueil_accueil__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_patient_patient__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_plateau_induction_plateau_induction__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_gestion_fluides_gestion_fluides__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_plateau_vas_plateau_vas__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_antalgie_antalgie__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_urgence_urgence__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_pre_medication_pre_medication__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_entretien_anesth_entretien_anesth__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_anti_infectieux_anti_infectieux__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_loco_regionale_loco_regionale__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_extrophie_vesicale_extrophie_vesicale__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var MyApp = /** @class */ (function () {
    function MyApp(platform, menu, statusBar, splashScreen) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        // make AccueilPage the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_accueil_accueil__["a" /* AccueilPage */];
        this.isShownCalculs = false;
        this.isShownProtocoles = false;
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Accueil', component: __WEBPACK_IMPORTED_MODULE_2__pages_accueil_accueil__["a" /* AccueilPage */] },
            { title: 'Patient', component: __WEBPACK_IMPORTED_MODULE_3__pages_patient_patient__["a" /* PatientPage */] },
            { title: 'Premedication', component: __WEBPACK_IMPORTED_MODULE_9__pages_pre_medication_pre_medication__["a" /* PreMedicationPage */] },
            { title: 'Plateau pour induction', component: __WEBPACK_IMPORTED_MODULE_4__pages_plateau_induction_plateau_induction__["a" /* PlateauInductionPage */] },
            { title: 'Voies aériennes', component: __WEBPACK_IMPORTED_MODULE_6__pages_plateau_vas_plateau_vas__["a" /* PlateauVasPage */] },
            { title: "Urgences", component: __WEBPACK_IMPORTED_MODULE_8__pages_urgence_urgence__["a" /* UrgencePage */] },
            { title: 'Entretien anesthéique', component: __WEBPACK_IMPORTED_MODULE_10__pages_entretien_anesth_entretien_anesth__["a" /* EntretienAnesthPage */] },
            { title: 'Gestion des fluides', component: __WEBPACK_IMPORTED_MODULE_5__pages_gestion_fluides_gestion_fluides__["a" /* GestionFluidesPage */] },
            { title: 'Analgésie & NVPO', component: __WEBPACK_IMPORTED_MODULE_7__pages_antalgie_antalgie__["a" /* AntalgiePage */] },
            { title: 'Anti-infectieux', component: __WEBPACK_IMPORTED_MODULE_11__pages_anti_infectieux_anti_infectieux__["a" /* AntiInfectieuxPage */] },
            { title: 'Loco-régionale', component: __WEBPACK_IMPORTED_MODULE_12__pages_loco_regionale_loco_regionale__["a" /* LocoRegionalePage */] },
            { title: 'Extrophie vésicale', component: __WEBPACK_IMPORTED_MODULE_13__pages_extrophie_vesicale_extrophie_vesicale__["a" /* ExtrophieVesicalePage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.ToggleCalculs = function () {
        this.isShownCalculs = !this.isShownCalculs;
        this.isShownProtocoles = false;
    };
    MyApp.prototype.ToggleProtocoles = function () {
        this.isShownProtocoles = !this.isShownProtocoles;
        this.isShownCalculs = false;
    };
    /* openPage(page) {
      // close the menu when clicking a link from the menu
      this.menu.close();
      // navigate to the new page if it is not the current page
      this.nav.setRoot(page.component);
    }
  */
    MyApp.prototype.openPatientPage = function () {
        console.log("ouverture de page patient");
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_patient_patient__["a" /* PatientPage */]);
        this.menu.close();
    };
    ;
    MyApp.prototype.openInductionPage = function () {
        console.log("ouverture de page induction");
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_plateau_induction_plateau_induction__["a" /* PlateauInductionPage */]);
        this.menu.close();
    };
    ;
    MyApp.prototype.openVASPage = function () {
        console.log("ouverture de page VAS");
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_plateau_vas_plateau_vas__["a" /* PlateauVasPage */]);
        this.menu.close();
    };
    ;
    MyApp.prototype.openALRPage = function () {
        console.log("ouverture de page ALR");
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_12__pages_loco_regionale_loco_regionale__["a" /* LocoRegionalePage */]);
        this.menu.close();
    };
    ;
    MyApp.prototype.openUrgencesPage = function () {
        console.log("ouverture de page urgences");
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_urgence_urgence__["a" /* UrgencePage */]);
        this.menu.close();
    };
    ;
    MyApp.prototype.openEntretienPage = function () {
        console.log("ouverture de page entrtien");
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_entretien_anesth_entretien_anesth__["a" /* EntretienAnesthPage */]);
        this.menu.close();
    };
    ;
    MyApp.prototype.openFluidesPage = function () {
        console.log("ouverture de page fluides");
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_gestion_fluides_gestion_fluides__["a" /* GestionFluidesPage */]);
        this.menu.close();
    };
    ;
    MyApp.prototype.openAntalgiePage = function () {
        console.log("ouverture de page antalgie NVPO");
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_antalgie_antalgie__["a" /* AntalgiePage */]);
        this.menu.close();
    };
    ;
    MyApp.prototype.openAntiInfPage = function () {
        console.log("ouverture de page anti infectieux");
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_anti_infectieux_anti_infectieux__["a" /* AntiInfectieuxPage */]);
        this.menu.close();
    };
    ;
    MyApp.prototype.openExtrophieVesicalePage = function () {
        console.log("ouverture de page anti infectieux");
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_13__pages_extrophie_vesicale_extrophie_vesicale__["a" /* ExtrophieVesicalePage */]);
        this.menu.close();
    };
    ;
    MyApp.prototype.openAccueilPage = function () {
        console.log("ouverture de page d'accueil");
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_accueil_accueil__["a" /* AccueilPage */]);
        this.menu.close();
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\app\app.html"*/'<ion-menu [content]="content" type="overlay" side="start" menuId="custom" contentId="main" class="my-custom-menu">\n\n  <ion-header>\n    <ion-toolbar color="tertiary">\n      <ion-title>Menu QuadruPed</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n\n      <ion-item (click)="openAccueilPage()">Accueil </ion-item>\n      <ion-item (click)="openPatientPage()" color="warning">Mon patient</ion-item>\n\n      <ion-item-divider (click)="ToggleCalculs()"> \n        <ion-label>Mes calculs\n          <ion-icon *ngIf="!isShownCalculs" class="menuIcon" name="arrow-down" style="zoom:1.5"></ion-icon>\n          <ion-icon *ngIf="isShownCalculs" class="menuIcon" name="arrow-up"  style="zoom:1.5"></ion-icon>\n        </ion-label>\n      </ion-item-divider> \n     \n      <ion-list *ngIf="isShownCalculs">\n      <ion-item (click)="openInductionPage()"> Induction anesthésique</ion-item>\n      <ion-item (click)="openVASPage()">Gestion des voies aériennes</ion-item>\n      <ion-item (click)="openALRPage()">Anesthésie loco-régionale</ion-item>\n      \n      <ion-item (click)="openEntretienPage()">Entretien anesthésique</ion-item>\n      <ion-item (click)="openFluidesPage()">Gestion des fluides</ion-item>\n      <ion-item (click)="openAntalgiePage()">Analgésie et NVPO</ion-item>\n\n      <ion-item (click)="openUrgencesPage()" color="danger">Urgences</ion-item> \n    </ion-list>\n    \n      <ion-item-divider (click)="ToggleProtocoles()"> \n        <ion-label>Mes protocoles\n          <ion-icon *ngIf="!isShownProtocoles" class="menuIcon" name="arrow-down" style="zoom:1.5"></ion-icon>\n          <ion-icon *ngIf="isShownProtocoles" class="menuIcon" name="arrow-up"  style="zoom:1.5"></ion-icon>\n        </ion-label>\n      </ion-item-divider> \n    \n    <ion-list *ngIf="isShownProtocoles">\n        <ion-item (click)="openAntiInfPage()">Anti-infectieux</ion-item>\n        <ion-item (click)="openExtrophieVesicalePage()">Extrophie vésicale</ion-item>\n    </ion-list>     \n\n  </ion-list>\n  </ion-content>\n  \n    </ion-menu>\n\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreMedicationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__patient_patient__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var PreMedicationPage = /** @class */ (function () {
    function PreMedicationPage(navCtrl, navParams, storage, alertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertController = alertController;
    }
    PreMedicationPage.prototype.presentAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            cssClass: 'alerte',
                            title: 'Minute papillon !',
                            message: 'Saisissez un âge et un poids pour le patient.',
                            buttons: [
                                {
                                    text: 'Nan',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: Nan');
                                    }
                                }, {
                                    text: 'Okay',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__patient_patient__["a" /* PatientPage */]);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    PreMedicationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AntalgiePage');
    };
    ;
    PreMedicationPage.prototype.ionViewWillLoad = function () {
        var _this = this;
        var promiseList = [];
        promiseList.push(this.storage.get('AgeForCalc').then(function (Age) {
            _this.AgeNum = Age;
            _this.storage.get('PoidsForCalc').then(function (Poids) {
                _this.PoidsNum = Poids;
                _this.storage.get('DureeJeune').then(function (dureejeune) {
                    _this.DureeJeune = dureejeune;
                    _this.storage.get('EstomacPlein').then(function (Estomac) {
                        _this.EstomacPlein = Estomac;
                        console.log('lestomac est plein ?', _this.EstomacPlein);
                        if (_this.EstomacPlein == true) {
                            _this.EstomacOuiNon = "plein";
                        }
                        else {
                            _this.EstomacOuiNon = "vide";
                        }
                        ;
                        _this.storage.get('Allergie').then(function (allergie) {
                            _this.Allergie = allergie;
                            if (!_this.PoidsNum || !_this.AgeNum) {
                                _this.presentAlert();
                            }
                            else {
                                return;
                            }
                            ;
                        });
                    });
                });
            });
        }));
    };
    PreMedicationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pre-medication',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\pre-medication\pre-medication.html"*/'<ion-header translucent>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Urgences</ion-title>\n  </ion-navbar>\n  <ion-item color="secondary"> \n    <ion-label class="MonPatient" >Mon patient : {{AgeNum}} mois - {{PoidsNum}} kg \n      <p class="dilution">Estomac {{EstomacOuiNon}} - Jeune {{DureeJeune}} h</p>\n    <p>Allergie : {{Allergie}}</p></ion-label>\n    <ion-icon slot="end" icon="accessibility-outline"></ion-icon> \n  </ion-item>\n</ion-header>\n\n<ion-content>\n\n\n  \n</ion-content>'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\pre-medication\pre-medication.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PreMedicationPage);
    return PreMedicationPage;
}());

//# sourceMappingURL=pre-medication.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccueilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__patient_patient__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AccueilPage = /** @class */ (function () {
    function AccueilPage(viewCtrl, modalCtrl, app, navCtrl, navParams, storage) {
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        // make AccueilPage the root (or first) page
        this.rootPage = AccueilPage_1;
        this.isShown = true;
    }
    AccueilPage_1 = AccueilPage;
    AccueilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccueilPage');
    };
    ;
    AccueilPage.prototype.dismiss = function () {
        console.log("fermer le footer mnt");
        this.isShown = !this.isShown;
        console.log(this.isShown);
    };
    ;
    AccueilPage.prototype.newPatient = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__patient_patient__["a" /* PatientPage */]);
        this.storage.clear();
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], AccueilPage.prototype, "nav", void 0);
    AccueilPage = AccueilPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-accueil',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\accueil\accueil.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Bienvenue !</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card class="cardWelcome">\n    <ion-card-title padding="5%" ></ion-card-title>\n    <img class="resize" src="/assets/imgs/sleeping-baby.png"> \n    <ion-card-content class="card"> QuadruPed est une petite application pour se faciliter la vie au bloc opératoire. Pour commencer, cliquez sur le bouton ci-dessous et saisissez les informations relatives à votre patient. \n \n      <ion-item>\n        <ion-label>\n          <button ion-button padding="5%" color="primary" (click)="newPatient()">Nouveau patient</button>\n        </ion-label>\n      </ion-item>\n      <p>Attention : \'Nouveau patient\' efface toutes les données précédentes.</p>\n\n    </ion-card-content>\n  </ion-card>\n\n\n</ion-content>\n\n\n  \n  <ion-footer>\n    <ion-toolbar padding="5%">\n      <ion-title>info </ion-title>\n      <br>\n      QuadruPed est une application gratuite, sans publicité, qui ne propose que des <b>suggestions</b> de posologie.\n      En utilisant l\'application, vous acceptez les <a href=""> conditions générales d\'utilisation</a>.  \n      <br><br>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\accueil\accueil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], AccueilPage);
    return AccueilPage;
    var AccueilPage_1;
}());

;
//# sourceMappingURL=accueil.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.js.map