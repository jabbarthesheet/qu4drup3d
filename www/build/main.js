webpackJsonp([0],{

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlateauInductionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(18);
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
    PlateauInductionPage.prototype.retourHome = function () {
        this.navCtrl.pop();
    };
    ;
    PlateauInductionPage.prototype.ToggleHypno = function () {
        this.isShownHypno = !this.isShownHypno;
    };
    ;
    PlateauInductionPage.prototype.ToggleMorphiniques = function () {
        this.isShownMorphiniques = !this.isShownMorphiniques;
    };
    ;
    PlateauInductionPage.prototype.ToggleCurares = function () {
        this.isShownCurares = !this.isShownCurares;
    };
    ;
    PlateauInductionPage.prototype.ToggleAutres = function () {
        this.isShownAutres = !this.isShownAutres;
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
                                    text: 'Plus tard.',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: Nan');
                                    }
                                }, {
                                    text: 'OK.',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        _this.navCtrl.pop();
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
        promiseList.push(this.storage.get('AgeNum').then(function (Age) {
            _this.AgeNum = Age;
            _this.ageLecture = Math.round((_this.AgeNum / 12) * 10) / 10;
            _this.storage.get('PoidsNum').then(function (Poids) {
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
                            _this.storage.get('sexeMF').then(function (sexe) {
                                _this.sexeMF = sexe;
                                if (!sexe) {
                                    _this.sexeMF = "Fille";
                                }
                                ;
                                _this.storage.get('Taille').then(function (Taille) {
                                    _this.Taille = Taille;
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
        this.AdminBridion = Math.round((this.PoidsNum * 16) * 10) / 10;
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
        if (this.PoidsNum <= 80) {
            this.AdminDexa = Math.round(((this.PoidsNum * 0.15) * 10) / 10);
        }
        else {
            this.AdminDexa = 12;
        }
        if (this.PoidsNum > 40) {
            this.DiluDexa = "4 mg/mL";
        }
        else {
            this.DiluDexa = "1 mg/mL";
        }
        ;
        /* EXACYL */
        this.AdminExacyl = Math.round(((this.PoidsNum * 10) * 10) / 10);
        this.EntretienExacyl = Math.round(((this.PoidsNum * 5) * 10) / 10);
        if (this.PoidsNum <= 20) {
            this.DiluExacyl = "50 mg/mL";
        }
        else {
            this.DiluExacyl = "100 mg/mL";
        }
        ;
        /* Ephedrine & Atropine*/
        this.AdminEphedrine = Math.round((this.PoidsNum * 0.3) * 10) / 10;
        if (this.PoidsNum <= 50) {
            this.AdminAtropine = Math.round((this.PoidsNum * 0.02) * 100) / 100;
        }
        else {
            this.AdminAtropine = 1;
        }
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
        /* Xylocaïne et Keta version antalgique */
        this.AdminXylo = Math.round((this.PoidsNum * 1.5) * 10) / 10;
        this.AdminKetaAntalgique = Math.round((this.PoidsNum * 0.5) * 10) / 10;
        if (this.PoidsNum <= 10) {
            this.DiluKetaAntalgique = "1 mg/mL";
        }
        else if (this.PoidsNum <= 30) {
            this.DiluKetaAntalgique = "5 mg/mL";
        }
        else {
            this.DiluKetaAntalgique = "10 mg/mL";
        }
        ;
        /* Dexdor prémed et bolus */
        this.DexdorPremed = Math.round((this.PoidsNum * 2) * 10) / 10;
        this.DexdorBolusSeul = Math.round((this.PoidsNum * 0.5) * 10) / 10;
    };
    ;
    PlateauInductionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlateauInductionPage');
    };
    ;
    PlateauInductionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-plateau-induction',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\plateau-induction\plateau-induction.html"*/'<ion-content>\n\n        <!-- HEADER MENU  -->\n        <div class="header"> \n\n          <div (click)="retourHome()" class="backButton">\n          <ion-icon start color="turquoise-fonce" name="arrow-back"></ion-icon>\n          Retour\n          </div>\nInduction anesthésique  </div>\n            <br>\n      \n                  <!-- HEADER MON PATIENT  -->\n  \n            <ion-item color="turquoise-fonce"> \n              <ion-label>\n                <p class="MonPatient">{{sexeMF}} - {{ageLecture}} ans ( = {{AgeNum}} mois) - {{PoidsNum}} kg - {{Taille}} cm</p> \n                <p class="MonPatient">Estomac {{EstomacOuiNon}} - Jeune {{DureeJeune}} h</p>\n                <p class="MonPatient">Allergie : {{Allergie}}</p></ion-label> \n            </ion-item>\n        \n            <br>\n       <!-- END HEADER -->\n\n  <!-- ITEM MON PATIENT -->\n\n\n<ion-list>\n  <ion-item-group>\n    <ion-item-divider (click)="ToggleHypno()">\n      <ion-label color="dark-turquoise">Hypnotiques\n        <ion-icon *ngIf="!isShownHypno" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n          <ion-icon *ngIf="isShownHypno" class="OpenCloseIcon" name="close"   style="zoom:0.9"></ion-icon>\n      </ion-label>\n    </ion-item-divider> \n\n\n    <ion-card *ngIf="isShownHypno" class="drogueContainer">\n\n    <ion-item >\n      <ion-label class="drogueInduction" color="warning">Sevoflurane (Sevorane®) : 6% - Voie inhalée\n        <p class="dilutionDrogueInduction">DGF pour l\'induction : 6-8 L/min</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label class="drogueInduction" color="warning"> \n        <p class="posologieDrogueInduction">Posologie proposée : {{PosoThiopental}}</p>\n        Thiopental (Pentotal® 500mg pdr) : {{AdminThiopental}} mg - IVD \n        <p class="dilutionDrogueInduction"> Dilution : {{DiluThiopental}}</p></ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label class="drogueInduction" color="warning">\n        <p class="posologieDrogueInduction">Posologie proposée : {{PosoPropofol}}</p>\n        Propofol (Diprivan® 200mg/20mL) : {{AdminPropofol}} mg - IVD\n        <p class="dilutionDrogueInduction">Dilution : {{DiluPropofol}}</p></ion-label>\n    </ion-item>\n\n    <ion-item  class="avecAMM">\n      <ion-label class="drogueInduction" color="warning">\n        <p class="posologieDrogueInduction">Posologie proposée : {{PosoEtomidate}}</p>\n      Etomidate (Hypnomidate® 20mg/10mL) : {{AdminEtomidate}} mg - IVD\n        <p class="dilutionDrogueInduction">Dilution : {{DiluEtomidate}}</p> \n      </ion-label>\n    </ion-item>\n\n    <div class="AMM">AMM <br> > 2 ans</div>\n\n    <ion-item>\n      <ion-label class="drogueInduction" color="warning"> \n        <p class="posologieDrogueInduction">Posologie proposée : {{PosoKetamine}}</p>\n        Ketamine (Ketalar® 50mg/5mL) : {{AdminKetamine}} mg - IVD\n        <p class="dilutionDrogueInduction">Dilution : {{DiluKetamine}}</p> </ion-label>\n      <div ></div>\n    </ion-item>\n\n\n    <ion-item class="avecAMM">         \n      <ion-label class="drogueInduction" color="dark-blue">Dexmédétomidine (Dexdor® 200µg/2mL) : \n        <p class="comment">Posologie proposée : 2 µg/kg</p>\n        <p class="dilutionDrogueInduction">Prémédication :  {{DexdorPremed}} µg intranasal\n        <p class="comment">intra-nasal, 20 min avant induction </p>\n        <hr>\n        <p class="comment">Posologie proposée : 0,5 µg/kg</p>\n        <p class="dilutionDrogueInduction">Bolus seul : {{DexdorBolusSeul}} µg IVD </p>\n\n    </ion-label>\n      </ion-item>\n    \n      <div class="AMM">AMM : <br> sédation chez l\'adulte en USI objectif RASS [0 ; -3]</div>\n\n  </ion-card>\n    \n\n    <ion-item-divider (click)="ToggleMorphiniques()">\n      <ion-label color="dark-turquoise">Morphiniques\n        <ion-icon *ngIf="!isShownMorphiniques" class="OpenCloseIcon" name="open" style="zoom:0.9"></ion-icon>\n          <ion-icon *ngIf="isShownMorphiniques" class="OpenCloseIcon" name="close"  style="zoom:0.9"></ion-icon>\n      </ion-label>\n    </ion-item-divider>\n\n    <ion-card *ngIf="isShownMorphiniques" class="drogueContainer">\n    <ion-item>\n      <ion-label class="drogueInduction" color="primary">\n        <p class="posologieDrogueInduction">Posologie proposée : {{PosoSufentanil}}</p>\n        Sufentanil (50µg/10mL) : {{AdminSufentanil}} µg - IVD\n        <p class="dilutionDrogueInduction">Dilution : {{DiluSufentanil}}</p></ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label class="drogueInduction" color="primary">\n        <p class="posologieDrogueInduction">Posologie proposée : {{PosoAlfentanil}}</p>\n        Alfentanil (1mg/2mL) : {{AdminAlfentanil}} µg - IVD\n        <p class="dilutionDrogueInduction">Dilution : {{DiluAlfentanil}}</p>\n      </ion-label>\n    </ion-item>\n\n  </ion-card>\n\n    <ion-item-divider (click)="ToggleCurares()">\n      <ion-label color="dark-turquoise">Curares\n        <ion-icon *ngIf="!isShownCurares" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n          <ion-icon *ngIf="isShownCurares" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n      </ion-label>\n    </ion-item-divider>\n\n    <ion-card *ngIf="isShownCurares" class="drogueContainer">\n    <ion-item>\n      <ion-label class="drogueInduction" color="danger">\n        <p class="posologieDrogueInduction">Posologie proposée : {{PosoAtracurium}}</p>\n        Atracurium (Tracrium® 25mg/2,5mL) : {{AdminAtracurium}} mg - IVD\n        <p class="dilutionDrogueInduction">Dilution : {{DiluAtracurium}}</p></ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label class="drogueInduction" color="danger">\n        <p class="posologieDrogueInduction">Posologie proposée : {{PosoRocuronium}}</p>\n        Rocuronium (Esméron® 50mg/5mL) : {{AdminRocuronium}} mg - IVD\n        <p class="dilutionDrogueInduction">Dilution : {{DiluRocuronium}}</p></ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label class="drogueInduction" color="orange">\n        <p class="posologieDrogueInduction">Posologie proposée : 16 mg/kg</p>\n        Suggamadex (Bridion® 200mg/2mL) : {{AdminBridion}} mg - IVD\n        <p class="dilutionDrogueInduction"><b>Pour réversion immédiate en cas d\'urgence après curarisation par rocuronium</b></p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label class="drogueInduction" color="danger">\n        <p class="posologieDrogueInduction">Posologie proposée : {{PosoCelocurine}}</p>\n        Suxaméthonium (Celocurine® 100mg/2mL) : {{AdminCelocurine}} mg - IVD\n        <p class="dilutionDrogueInduction">Dilution : {{DiluCelocurine}}</p></ion-label>\n    </ion-item>\n  </ion-card>\n\n  <ion-item-divider (click)="ToggleAutres()">\n    <ion-label color="dark-turquoise">Autres\n      <ion-icon *ngIf="!isShownAutres" class="OpenCloseIcon" name="open" style="zoom:0.9"></ion-icon>\n        <ion-icon *ngIf="isShownAutres" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n    </ion-label>\n  </ion-item-divider>\n\n    <ion-card *ngIf="isShownAutres" class="drogueContainer">\n\n      <ion-item>\n        <ion-label class="drogueInduction" color="dark">\n          <p class="posologieDrogueInduction">Posologie proposée : 0,15 mg/kg</p>\n          Dexamethasone (4mg/mL) : {{AdminDexa}} mg - IVD\n          <p class="dilutionDrogueInduction">Dilution : {{DiluDexa}}</p></ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label class="drogueInduction" color="dark">\n          <p class="posologieDrogueInduction">Posologie proposée : 10 mg/kg</p>\n          Acide tranexamique (Exacyl® 500mg/5mL) bolus : {{AdminExacyl}} mg - IVSE sur 30 min\n          <p class="dilutionDrogueInduction">Dilution : {{DiluExacyl}}</p></ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label class="drogueInduction" color="dark">\n          <p class="posologieDrogueInduction">Posologie proposée : 5 mg/kg/h</p>\n          Acide tranexamique (Exacyl® 500mg/5mL) entretien : {{EntretienExacyl}} mg/h - IVSE\n          <p class="dilutionDrogueInduction">Dilution : {{DiluExacyl}}</p></ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label class="drogueInduction" color="dark-pink">\n          <p class="posologieDrogueInduction">Posologie proposée : 100 µg/kg</p>\n          Ephédrine (3mg/mL) : {{AdminEphedrine}} mg - IVD\n          <p class="dilutionDrogueInduction">Dilution : {{DiluEphedrine}}</p></ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label class="drogueInduction" color="dark-green">\n          <p class="posologieDrogueInduction">Posologie proposée : 20 µg/kg</p>\n          Atropine (0,5mg/mL) : {{AdminAtropine}} mg - IVD\n          <p class="dilutionDrogueInduction">Dilution : {{DiluAtropine}}</p></ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label class="drogueInduction" color="dark">\n          <p class="posologieDrogueInduction">Posologie proposée : 1.5 mg/kg</p>\n          Xylocaïne (100mg/20mL) : {{AdminXylo}} mg - IVD lent\n          <p class="dilutionDrogueInduction">Dilution : 5 mg/mL</p></ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label class="drogueInduction" color="warning">\n          <p class="posologieDrogueInduction">Posologie proposée : 0.5 mg/kg</p>\n          Ketamine antalgique (Ketalar® 50mg/5mL) : {{AdminKetaAntalgique}} mg - IVD\n        <p class="dilutionDrogueInduction">Dilution : {{DiluKetaAntalgique}}</p></ion-label>\n      </ion-item>\n\n    </ion-card>\n\n  </ion-item-group>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\plateau-induction\plateau-induction.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PlateauInductionPage);
    return PlateauInductionPage;
}());

//# sourceMappingURL=plateau-induction.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlateauVasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(18);
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
        this.DureeJeune = 6;
        this.dureejeunelast = 6;
        this.Allergie = "";
        this.isShownVentilation = false;
        this.isShownIntubation = false;
    }
    PlateauVasPage.prototype.retourHome = function () {
        this.navCtrl.pop();
    };
    ;
    PlateauVasPage.prototype.ToggleIntubation = function () {
        this.isShownIntubation = !this.isShownIntubation;
    };
    ;
    PlateauVasPage.prototype.ToggleVentilation = function () {
        this.isShownVentilation = !this.isShownVentilation;
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
                                    text: 'Plus tard.',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: Nan');
                                    }
                                }, {
                                    text: 'OK.',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        _this.navCtrl.pop();
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
        promiseList.push(this.storage.get('AgeNum').then(function (Age) {
            _this.AgeNum = Age;
            _this.ageLecture = Math.round((_this.AgeNum / 12) * 10) / 10;
            _this.storage.get('PoidsNum').then(function (Poids) {
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
                            _this.storage.get('sexeMF').then(function (sexe) {
                                _this.sexeMF = sexe;
                                if (!sexe) {
                                    _this.sexeMF = "Fille";
                                }
                                ;
                                _this.storage.get('Taille').then(function (Taille) {
                                    _this.Taille = Taille;
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
                });
            });
        }));
    };
    ;
    PlateauVasPage.prototype.calculs = function () {
        if (this.PoidsNum <= 2.5) {
            this.TailleSITage = this.TailleSITpoids = 2.5;
            this.RepereSITdents = Math.round((this.PoidsNum + 6.5) * 10) / 10;
            this.RepereSITnez = Math.round((this.PoidsNum + 7) * 10) / 10;
            this.RepereSITenfant = "trop petit";
        }
        else if (this.PoidsNum <= 3.5) {
            this.TailleSITage = this.TailleSITpoids = 3;
            this.RepereSITdents = Math.round((this.PoidsNum + 6.5) * 10) / 10;
            this.RepereSITnez = Math.round((this.PoidsNum + 7) * 10) / 10;
            this.RepereSITenfant = "trop petit";
        }
        else if (this.PoidsNum <= 7) {
            this.TailleSITage = this.TailleSITpoids = 3.5;
            this.RepereSITdents = Math.round((this.PoidsNum + 6.5) * 10) / 10;
            this.RepereSITnez = Math.round((this.PoidsNum + 7) * 10) / 10;
            this.RepereSITenfant = "trop petit";
        }
        else if (this.PoidsNum > 7) {
            this.TailleSITage = Math.round((this.AgeNum / (12 * 4) + 3.5) * 10) / 10;
            if (this.TailleSITage >= 8) {
                this.TailleSITage = 8;
            }
            this.TailleSITpoids = Math.round((this.PoidsNum / 10 + 3) * 10) / 10;
            if (this.TailleSITpoids >= 7.5) {
                this.TailleSITpoids = 7.5;
            }
            this.TailleSIT = Math.round(((this.TailleSITage + this.TailleSITpoids) / 2) * 10) / 10;
            this.RepereSITenfant = Math.round(((this.TailleSITage + this.TailleSITpoids) / 2) * 3).toString() + " cm";
            this.RepereSITdents = Math.round((this.AgeNum / 24 + 12) * 10) / 10;
            this.RepereSITnez = Math.round((this.AgeNum / 24 + 15) * 10) / 10;
        }
        ;
        this.Volumecourant = Math.round(this.PoidsNum * 6);
        if (this.PoidsNum <= 3 && this.AgeNum <= 1) {
            this.CouleurCanuleMasque = "bleu";
        }
        else if (this.AgeNum <= 6) {
            this.CouleurCanuleMasque = "gris";
        }
        else if (this.AgeNum <= 60) {
            this.CouleurCanuleMasque = "blanc";
        }
        else if (this.AgeNum <= 120) {
            this.CouleurCanuleMasque = "jaune";
        }
        else {
            this.CouleurCanuleMasque = "vert";
        }
        ;
        if (this.PoidsNum <= 10 && this.AgeNum <= 1) {
            this.TailleFiltre = "Filtre Néonat";
        }
        else if (this.AgeNum <= 72 && this.PoidsNum <= 20) {
            this.TailleFiltre = "Filtre pédiatrique";
        }
        else {
            this.TailleFiltre = "Filtre adulte";
        }
        ;
        if (this.PoidsNum <= 10) {
            this.LameIntubation = "Lame d'Oxford, Miller 1 ou Macinstosh 0";
        }
        if (this.PoidsNum <= 15) {
            this.LameIntubation = "Macintosh 1";
        }
        else if (this.PoidsNum <= 30) {
            this.LameIntubation = "Macintosh 2";
        }
        else {
            this.LameIntubation = "Macintosh 3";
        }
        ;
        if (this.PoidsNum <= 5) {
            this.TailleMasqueLarynge = 1;
        }
        else if (this.PoidsNum <= 10) {
            this.TailleMasqueLarynge = 1.5;
        }
        else if (this.PoidsNum <= 20) {
            this.TailleMasqueLarynge = 2;
        }
        else if (this.PoidsNum <= 30) {
            this.TailleMasqueLarynge = 2.5;
        }
        else if (this.PoidsNum <= 70) {
            this.TailleMasqueLarynge = 3;
        }
        else {
            this.TailleMasqueLarynge = "4 ou 5";
        }
        if (this.PoidsNum <= 10) {
            this.LameMcGrath = "MacGrath avec lame 1";
        }
        else if (this.PoidsNum <= 30) {
            this.LameMcGrath = "MacGrath avec lame 2";
        }
        else if (this.PoidsNum <= 70) {
            this.LameMcGrath = "MacGrath avec lame 3";
        }
        else {
            this.LameMcGrath = "MacGrath avec lame 4";
        }
        ;
        if (this.PoidsNum <= 1.5) {
            this.LameGlideScope = "Glidescope avec bâton vidéo AVL 1-2 avec lame GVL 0";
        }
        else if (this.PoidsNum <= 3.8) {
            this.LameGlideScope = "Glidescope avec bâton vidéo AVL 1-2 avec lame GVL 1";
        }
        else if (this.PoidsNum <= 10) {
            this.LameGlideScope = "Glidescope avec bâton vidéo AVL 1-2 avec lame GVL 2";
        }
        else if (this.PoidsNum <= 28) {
            this.LameGlideScope = "Glidescope avec bâton vidéo AVL 1-2 avec lame GVL 2.5";
        }
        else if (this.PoidsNum <= 40) {
            this.LameGlideScope = "Glidescope avec bâton vidéo AVL 3-4 avec lame GVL 3";
        }
        else {
            this.LameGlideScope = "Glidescope avec bâton vidéo AVL 3-4 avec lame GVL 4";
        }
        ;
        if (this.AgeNum <= 1) {
            this.FrequenceVentilatoire = 35;
        }
        else if (this.AgeNum <= 3) {
            this.FrequenceVentilatoire = 30;
        }
        else if (this.AgeNum <= 24) {
            this.FrequenceVentilatoire = 25;
        }
        else if (this.AgeNum <= 96) {
            this.FrequenceVentilatoire = 20;
        }
        else {
            this.FrequenceVentilatoire = 15;
        }
        ;
        this.VolumeMinute = (this.Volumecourant * this.FrequenceVentilatoire) / 1000;
        this.SurfaceCorporelle = Math.round(((4 * this.PoidsNum + 7) / (this.PoidsNum + 90)) * 10) / 10;
        this.PertesInsensiblesVSjour = Math.round(((800 * this.SurfaceCorporelle) * 10) / 10);
        this.PertesInsensiblesVSheure = Math.round(((this.PertesInsensiblesVSjour / 24) * 10) / 10);
        this.PertesInsensiblesIOTjour = Math.round(((400 * this.SurfaceCorporelle) * 10) / 10);
        this.PertesInsensiblesIOTheure = Math.round(((this.PertesInsensiblesIOTjour / 24) * 10) / 10);
        ;
        this.PertesInsensiblesVNIjour = Math.round(((600 * this.SurfaceCorporelle) * 10) / 10);
        this.PertesInsensiblesVNIheure = Math.round(((this.PertesInsensiblesVNIjour / 24) * 10) / 10);
        ;
        console.log('IonViewWillEnter OptionsPage');
    };
    ;
    PlateauVasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlateauVasPage');
    };
    ;
    PlateauVasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-plateau-vas',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\plateau-vas\plateau-vas.html"*/'<ion-content>\n\n          <!-- HEADER MENU  -->\n          <div class="header"> \n\n            <div (click)="retourHome()" class="backButton">\n            <ion-icon start color="turquoise-fonce" name="arrow-back"></ion-icon>\n            Retour\n            </div>\n  Gestion des voies aériennes</div>\n              <br>\n        \n                    <!-- HEADER MON PATIENT  -->\n    \n              <ion-item color="turquoise-fonce"> \n                <ion-label>\n                  <p class="MonPatient">{{sexeMF}} - {{ageLecture}} ans ( = {{AgeNum}} mois) - {{PoidsNum}} kg - {{Taille}} cm</p> \n                  <p class="MonPatient">Estomac {{EstomacOuiNon}} - Jeune {{DureeJeune}} h</p>\n                  <p class="MonPatient">Allergie : {{Allergie}}</p></ion-label> \n              </ion-item>\n          \n              <br>\n         <!-- END HEADER -->\n\n\n    <ion-list> \n      <ion-item-group>\n        <ion-item-divider (click)="ToggleVentilation()">\n          <ion-label color="dark-turquoise">Ventilation\n          <ion-icon *ngIf="!isShownVentilation" class= "OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n          <ion-icon *ngIf="isShownVentilation"  class= "OpenCloseIcon" name="close"  style="zoom:0.9"></ion-icon>\n        </ion-label>\n        </ion-item-divider> \n\n        <ion-card *ngIf="isShownVentilation" class="drogueContainer">\n          <ion-card-content class="dilutionDrogueInduction">\n                - Taille du filtre : {{TailleFiltre}}\n            <br>- Canule de Guédel & masque : {{CouleurCanuleMasque}}\n            <br>- Vm (Vt [6mL/kg] x FR) = {{Volumecourant}} mL x {{FrequenceVentilatoire}}/min = {{VolumeMinute}} L/min\n            <br>- Masque laryngé : {{TailleMasqueLarynge}}\n        </ion-card-content>\n        </ion-card>\n\n        <ion-card *ngIf="isShownVentilation" class="drogueContainer">\n          <ion-card-content class="dilutionDrogueInduction">\n            Pertes insensibles respiratoires  :\n            <p class="comment">Estimations pour une surface corporelle de {{SurfaceCorporelle}} m²</p>\n            <ion-item>\n              <ion-label class="dilutionDrogueInduction">\n                En VS : {{PertesInsensiblesVSheure}} mL/h ({{PertesInsensiblesVSjour}} mL/j)\n                <p class="comment">800 mL/m²/j soit 33 mL/m²/h </p>\n              </ion-label>\n            </ion-item>\n\n            <ion-item>\n              <ion-label class="dilutionDrogueInduction">\n                Avec SIOT : {{PertesInsensiblesIOTheure}} mL/h ({{PertesInsensiblesIOTjour}} mL/j)\n                <p class="comment">400 mL/m²/j soit 17 mL/m²/h </p>\n              </ion-label>\n            </ion-item>\n            \n            <ion-item>\n              <ion-label class="dilutionDrogueInduction">\n                Sous VNI : {{PertesInsensiblesVNIheure}} mL/h ({{PertesInsensiblesIOTjour}} mL/j)\n                <p class="comment">600 mL/m²/j soit 25 mL/m²/h </p>\n              </ion-label>\n            </ion-item>\n\n        </ion-card-content>\n        </ion-card>\n        \n        <ion-item-divider (click)="ToggleIntubation()">\n          <ion-label color="dark-turquoise">Intubation\n          <ion-icon *ngIf="!isShownIntubation" class= "OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n          <ion-icon *ngIf="isShownIntubation" class= "OpenCloseIcon" name="close"  style="zoom:0.9"></ion-icon>\n        </ion-label>\n        </ion-item-divider> \n\n        <ion-card *ngIf="isShownIntubation" class="drogueContainer">          \n              <ion-card-content class="dilutionDrogueInduction">\n                En l\'absence de critère d\'intubation difficile : {{LameIntubation}}. <br> <br> \n                En cas d\'<b>intubation difficile prévisible</b>, prévoir d\'emblée un vidéo-laryngoscope :\n                <br>- {{LameMcGrath}} \n                <br>- {{LameGlideScope}}\n                <br><br>\n\n            <p class="reference">Référence : RFE SFAR 2018. Il est probablement recommandé d’utiliser un vidéolaryngoscope en première intention chez les patients avec intubation difficile prévue et ventilation au masque\n              possible ou après échec de la laryngoscopie directe afin d’augmenter les chances de succès de l’intubation.\n            </p>\n            <br>\n\n            Taille de la sonde d\'intubation : \n              <br> - Proposée selon l\'âge : {{TailleSITage}} mm\n              <br> - Proposée selon le poids : {{TailleSITpoids}} mm\n              <br>\n              <br>  \n           Repère de fixation de la sonde : \n              <br> - Approximation : taille sonde x3 : {{RepereSITenfant}}\n              <br> - Repère dents : {{RepereSITdents}} cm\n              <br> - Repère nez : {{RepereSITnez}} cm\n            \n            </ion-card-content>\n          </ion-card>\n\n  </ion-item-group>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\plateau-vas\plateau-vas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PlateauVasPage);
    return PlateauVasPage;
}());

//# sourceMappingURL=plateau-vas.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntretienAnesthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(18);
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
        this.isShownHypnotiquesIntraVeineux = false;
        this.isShownAntalgiques = false;
        this.isShownCurares = false;
    }
    EntretienAnesthPage.prototype.retourHome = function () {
        this.navCtrl.pop();
    };
    ;
    EntretienAnesthPage.prototype.ToggleInhalatoire = function () {
        this.isShownInhalatoire = !this.isShownInhalatoire;
    };
    ;
    EntretienAnesthPage.prototype.ToggleHypnotiquesIntraVeineux = function () {
        this.isShownHypnotiquesIntraVeineux = !this.isShownHypnotiquesIntraVeineux;
    };
    ;
    EntretienAnesthPage.prototype.ToggleAntalgiques = function () {
        this.isShownAntalgiques = !this.isShownAntalgiques;
    };
    ;
    EntretienAnesthPage.prototype.ToggleCurares = function () {
        this.isShownCurares = !this.isShownCurares;
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
                                    text: 'Plus tard.',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: Nan');
                                    }
                                }, {
                                    text: 'OK.',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        _this.navCtrl.pop();
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
        promiseList.push(this.storage.get('AgeNum').then(function (Age) {
            _this.AgeNum = Age;
            _this.ageLecture = Math.round((_this.AgeNum / 12) * 10) / 10;
            _this.storage.get('PoidsNum').then(function (Poids) {
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
                            _this.storage.get('sexeMF').then(function (sexe) {
                                _this.sexeMF = sexe;
                                if (!sexe) {
                                    _this.sexeMF = "Fille";
                                }
                                ;
                                _this.storage.get('Taille').then(function (Taille) {
                                    _this.Taille = Taille;
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
                });
            });
        }));
    };
    ;
    EntretienAnesthPage.prototype.calculs = function () {
        /*placer les calculs ici*/
        if (this.AgeNum <= 1) {
            this.CAMSevo = 3.3;
        }
        else if (this.AgeNum <= 6) {
            this.CAMSevo = 3.1;
        }
        else if (this.AgeNum <= 12) {
            this.CAMSevo = 2.7;
        }
        else if (this.AgeNum <= 60) {
            this.CAMSevo = 2.5;
        }
        else {
            this.CAMSevo = 1.7;
        }
        ;
        this.PropoEntretien = Math.round((this.PoidsNum * 10) * 10) / 10;
        this.HypnoEntretien = Math.round((this.PoidsNum * 0.1) * 10) / 10;
        this.RemiEntretien = Math.round((this.PoidsNum * 10) * 10) / 10;
        this.RocuEntretien = Math.round((this.PoidsNum * 0.6) * 10) / 10;
        this.TracEntretien = Math.round((this.PoidsNum * 0.5) * 10) / 10;
        this.XyloEntretien = Math.round((this.PoidsNum * 1) * 10) / 10;
        this.KetaEntretien = Math.round((this.PoidsNum * 0.15) * 10) / 10;
        this.SufEntretien = Math.round((this.PoidsNum * 0.2) * 10) / 10;
        this.DexdorBolusSeul = Math.round((this.PoidsNum * 0.5) * 10) / 10;
        this.DexdorBolusAvecIVSE = Math.round((this.PoidsNum * 1) * 10) / 10;
        this.DexdorEntretien = Math.round((this.PoidsNum * 0.4) * 10) / 10;
        this.DexdorAgitation = Math.round((this.PoidsNum * 0.3) * 10) / 10;
        this.PosoBridion2reponses = Math.round((this.PoidsNum * 4) * 10) / 10;
        this.PosoBridion4reponses = Math.round((this.PoidsNum * 2) * 10) / 10;
        this.AdminAtropineAntagonisation = Math.round((this.PoidsNum * 20) * 10) / 10;
        this.AdminProstigmineAntagonisation = Math.round((this.PoidsNum * 40) * 10) / 10;
    };
    ;
    EntretienAnesthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-entretien-anesth',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\entretien-anesth\entretien-anesth.html"*/'<ion-content>\n\n  <div class="header"> \n\n    <div (click)="retourHome()" class="backButton">\n    <ion-icon start color="turquoise-fonce" name="arrow-back"></ion-icon>\n    Retour\n    </div>\n    Entretien anesthésique\n  </div>\n      <br>\n\n      <ion-item color="turquoise-fonce"> \n        <ion-label>\n          <p class="MonPatient">{{sexeMF}} - {{ageLecture}} ans ( = {{AgeNum}} mois) - {{PoidsNum}} kg - {{Taille}} cm</p> \n          <p class="MonPatient">Estomac {{EstomacOuiNon}} - Jeune {{DureeJeune}} h</p>\n          <p class="MonPatient">Allergie : {{Allergie}}</p></ion-label> \n      </ion-item>\n  \n      <br>\n\n  \n  <ion-item-divider (click)="ToggleInhalatoire()" >\n    <ion-label color="dark-turquoise">Entretien inhalatoire\n  <ion-icon *ngIf="!isShownInhalatoire" class="OpenCloseIcon" name="open" style="zoom:0.9"></ion-icon>\n  <ion-icon *ngIf="isShownInhalatoire" class="OpenCloseIcon" name="close"  style="zoom:0.9"></ion-icon>\n    </ion-label>\n  </ion-item-divider> \n\n  <ion-card *ngIf="isShownInhalatoire" class="drogueContainer">\n\n\n      <ion-item>         \n        <ion-label  color="warning" class="drogueInduction"> Sevoflurane (Sevorane®) : {{CAMSevo}} %\n      <p class="dilutionDrogueInduction">%EtHalogéné, bas DGF</p>\n    </ion-label>\n  </ion-item>\n\n  </ion-card>\n\n  <ion-item-divider (click)="ToggleHypnotiquesIntraVeineux()" >\n    <ion-label color="dark-turquoise">Hypnotiques intraveineux\n  <ion-icon *ngIf="!isShownHypnotiquesIntraVeineux" class="OpenCloseIcon" name="open" style="zoom:0.9"></ion-icon>\n  <ion-icon *ngIf="isShownHypnotiquesIntraVeineux" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n    </ion-label>\n  </ion-item-divider> \n\n  <ion-card *ngIf="isShownHypnotiquesIntraVeineux" class="drogueContainer">\n\n<ion-item>     \n  <ion-label class="drogueInduction" color="warning">\n  <p class="posologieDrogueInduction">Posologie proposée : 10 mg/kg/h </p>\n  Propofol (Diprivan® 200mg/20mL) : {{PropoEntretien}} mg/h IVSE\n</ion-label>\n  </ion-item>\n<ion-item >         \n  <ion-label class="drogueInduction" color="orange">\n    <p class="dilutionDrogueInduction">Posologie proposée : 0,1 mg/kg/h </p>\n    Midazolam (Hypnovel® 5mg/5mL) : {{HypnoEntretien}} mg/h IVSE\n </ion-label>\n  </ion-item>\n\n\n<ion-item class="avecAMM">         \n  <ion-label class="drogueInduction" color="dark-blue">Dexmédétomidine (Dexdor® 200µg/2mL) :\n  <p class="comment">pour 0,5 µg/kg </p>\n  <p class="dilutionDrogueInduction">IVSE : {{DexdorBolusAvecIVSE}} µg sur 10\' puis {{DexdorEntretien}} µg/h</p>\n  <p class="comment">pour 1 µg/kg sur 10\' puis 0,4 µg/kg/h  </p>\n  <p class="dilutionDrogueInduction">Prévention agitation : {{DexdorAgitation}} µg IVD</p>\n  <p class="comment">pour 0,3 µg/kg, en fin d\'intervention </p>\n</ion-label>\n\n  </ion-item>\n\n  <div class="AMM">AMM : <br> sédation chez l\'adulte en USI objectif RASS [0 ; -3]</div>\n\n</ion-card>  \n\n\n<ion-item-divider (click)="ToggleAntalgiques()" >\n  <ion-label color="dark-turquoise">Antalgiques\n<ion-icon *ngIf="!isShownAntalgiques" class="OpenCloseIcon" name="open" style="zoom:0.9"></ion-icon>\n<ion-icon *ngIf="isShownAntalgiques"class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n  </ion-label>\n</ion-item-divider> \n\n<ion-card *ngIf="isShownAntalgiques" class="drogueContainer">\n\n<ion-item>         \n<ion-label class="drogueInduction" color="primary">\n  <p  class="dilutionDrogueInduction">Posologie proposée 10 µg/kg/h </p>\n  Remifentanil (2mg pdr) : {{RemiEntretien}} µg/h IVSE\n</ion-label>\n</ion-item>\n\n<ion-item>         \n<ion-label class="drogueInduction" color="primary">\n  <p  class="dilutionDrogueInduction">Posologie proposée : 0,2 µg/kg/h </p>\n  Sufentanil (50µg/10mL) : {{SufEntretien}} µg/h IVSE\n</ion-label>\n</ion-item>\n\n<ion-item>         \n<ion-label class="drogueInduction" color="dark">\n  <p  class="dilutionDrogueInduction">Posologie proposée : 1 mg/kg/h </p>\n  Xylocaïne (100mg/20mL) : {{XyloEntretien}} mg/h IVSE\n</ion-label>\n</ion-item>\n\n<ion-item>         \n<ion-label class="drogueInduction" color="warning">\n  <p  class="dilutionDrogueInduction">Posologie proposée : 0,15 mg/kg/h </p>\n  Ketamine (Ketalar® 50mg/5mL) : {{KetaEntretien}} mg/h IVSE\n</ion-label>\n</ion-item>\n\n</ion-card>\n\n\n<ion-item-divider (click)="ToggleCurares()" >\n  <ion-label color="dark-turquoise">Curares\n<ion-icon *ngIf="!isShownCurares" class="OpenCloseIcon" name="open" style="zoom:0.9"></ion-icon>\n<ion-icon *ngIf="isShownCurares" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n  </ion-label>\n</ion-item-divider> \n\n<ion-card *ngIf="isShownCurares"class="drogueContainer">\n\n<ion-item >         \n<ion-label color="danger" class="drogueInduction">\n  <p class="dilutionDrogueInduction">Posologie proposée : 0,6 mg/kg/h </p>\n  Rocuronium (Esméron® 50mg/5mL) : {{RocuEntretien}} mg/h IVSE\n</ion-label>\n</ion-item>\n\n<ion-item >         \n<ion-label color="danger" class="drogueInduction">\n  <p class="dilutionDrogueInduction">Posologie proposée </p>\n  Atracurium (Tracrium® 25mg/2,5mL) : {{TracEntretien}} mg/h IVSE\n</ion-label>\n</ion-item>\n\n\n\n \n  <ion-item class="avecAMM">\n    <ion-label color="dark-green" class="drogueInduction">\n      <p class="dilutionDrogueInduction">Posologie proposée : 20 µg/kg</p>\n     - Atropine (0,5mg/mL) : {{AdminAtropineAntagonisation}} µg IVD\n    <p class="dilutionDrogueInduction">\n      Antagonisation curare en association avec prostigmine\n    </p></ion-label>\n  </ion-item>\n  <div class="AMM">Vérifier : <br> TOF > 2/4</div>\n\n  <ion-item class="avecAMM">    \n    <ion-label color="primary" class="drogueInduction"> \n  <p class="dilutionDrogueInduction">Posologie proposée : 40 µg/kg</p>\n  - Prostigmine (0,5mg/mL) : {{AdminProstigmineAntagonisation}} µg IVD\n  <p class="dilutionDrogueInduction">\n    Antagonisation curare en association avec atropine\n  </p></ion-label>\n  </ion-item>\n  <div class="AMM">Vérifier : <br> TOF > 2/4</div>\n\n  \n\n  <ion-item class="avecAMM">         \n    <ion-label color="orange" class="drogueInduction">Antagonisation rocuronium   \n    <p color="dark-green" class="dilutionDrogueInduction">- TOF > 2/4 : Suggamadex (Bridion® 200mg/2mL) {{PosoBridion2reponses}} mg  (4 mg/kg) IVD</p>\n    <p color="primary" class="dilutionDrogueInduction">- TOF > 4/4 : Suggamadex (Bridion® 200mg/2mL) {{PosoBridion4reponses}} mg (2 mg/kg) IVD </p>\n  </ion-label> \n  </ion-item>\n  \n    <div class="AMM">Vérifier : <br> TOF > 2/4</div>\n\n\n  \n\n</ion-card>  \n\n\n</ion-content>'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\entretien-anesth\entretien-anesth.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], EntretienAnesthPage);
    return EntretienAnesthPage;
}());

//# sourceMappingURL=entretien-anesth.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GestionFluidesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__options_options__ = __webpack_require__(142);
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
        this.DureeJeune = 0;
        this.dureejeunelast = 6;
        this.PertesChir = 2;
        this.Hbmesuree = 8;
        this.Hbsouhaitee = 12;
        this.isShownApports = false;
        this.isShownCGR = false;
        this.isShownAutresPSL = false;
        this.isShownHypoTA = false;
        this.isShownApportsJournaliers = false;
    }
    GestionFluidesPage.prototype.retourHome = function () {
        this.navCtrl.pop();
    };
    ;
    GestionFluidesPage.prototype.ToggleApports = function () {
        this.isShownApports = !this.isShownApports;
    };
    ;
    GestionFluidesPage.prototype.ToggleCGR = function () {
        this.isShownCGR = !this.isShownCGR;
    };
    ;
    GestionFluidesPage.prototype.ToggleHypoTA = function () {
        this.isShownHypoTA = !this.isShownHypoTA;
    };
    ;
    GestionFluidesPage.prototype.ToggleApportsJournaliers = function () {
        this.isShownApportsJournaliers = !this.isShownApportsJournaliers;
    };
    ;
    GestionFluidesPage.prototype.presentAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            cssClass: 'alerte',
                            title: 'Minute papillon !',
                            message: 'Pensez à renseigner la durée du jeûne pré-opératoire dans les options pour profiter du calcul des apports horaires recommandés.',
                            buttons: [
                                {
                                    text: 'Compris.',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (cancel) {
                                        console.log('Confirm Cancel: Nan');
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
    GestionFluidesPage.prototype.UpdatePerteChir = function () {
        this.CompPertesChir = Math.round(this.PertesChir * this.PoidsNum);
        this.TotalHoraire = this.ApportBaseHoraire + this.PertesRespiratoires + this.CompPertesChir;
        this.Total1 = this.TotalHoraire + this.CompJeune1;
        this.Total2et3 = this.TotalHoraire + this.CompJeune2;
    };
    GestionFluidesPage.prototype.calculs = function () {
        this.SurfaceCorporelle = Math.round(((4 * this.PoidsNum + 7) / (this.PoidsNum + 90)) * 10) / 10;
        this.PertesRespiratoires = Math.round(((this.SurfaceCorporelle * 17) * 10) / 10);
        ;
        if (this.AgeNum < 15 * 12) {
            this.Solute = "B26 ou NaCl 0.9%";
        }
        else {
            this.Solute = "RL ou NaCl 0.9%";
        }
        ;
        if (this.PoidsNum <= 10) {
            this.ApportBaseHoraire = Math.round(4 * this.PoidsNum);
        }
        else if (this.PoidsNum <= 20) {
            this.ApportBaseHoraire = Math.round(40 + (this.PoidsNum - 10) * 2);
        }
        else if (this.PoidsNum > 20) {
            this.ApportBaseHoraire = Math.round(60 + (this.PoidsNum - 20));
        }
        ;
        this.CompJeune = Math.round(this.ApportBaseHoraire * this.DureeJeune);
        this.CompJeune1 = Math.round(this.CompJeune / 2);
        this.CompJeune2 = Math.round((this.CompJeune - this.CompJeune1) / 2);
        this.CompPertesChir = Math.round(this.PertesChir * this.PoidsNum);
        this.TotalHoraire = this.ApportBaseHoraire + this.PertesRespiratoires + this.CompPertesChir;
        this.Total1 = this.TotalHoraire + this.CompJeune1;
        this.Total2et3 = this.TotalHoraire + this.CompJeune2;
        if (this.AgeNum <= 15 * 12) {
            this.UnitesPlaquettaires = Math.round(this.PoidsNum / 5);
        }
        else {
            this.UnitesPlaquettaires = Math.round(this.PoidsNum / 7);
        }
        ;
        this.VolPFC = Math.round(this.PoidsNum * 20);
        this.VolCGR = Math.round(this.PoidsNum * 16).toString() + " mL";
        this.DiffHb = 4;
        if (this.AgeNum <= 3) {
            this.MasseSanguineAge = 80;
        }
        else if (this.AgeNum <= 12) {
            this.MasseSanguineAge = 75;
        }
        else {
            this.MasseSanguineAge = 70;
        }
        ;
        this.MasseSanguine = Math.round(this.PoidsNum * this.MasseSanguineAge);
        this.ExacylChocHemorragique = Math.round((this.PoidsNum * 20) * 10) / 10;
        this.FibrinogengeChocHemorragique = Math.round((this.PoidsNum * 20) * 10) / 10;
        this.NovosevenChocHemorragique = Math.round((this.PoidsNum * 90) * 10) / 10;
        this.PAShypoTA = Math.round((((this.AgeNum / 12) * 2) + 70) * 10) / 10;
        if (this.AgeNum <= 15 * 12) {
            this.SoluteRemplissage = "NaCl 0,9%";
        }
        else {
            this.SoluteRemplissage = "Ringer Lactate";
        }
        this.VolRemplissage = Math.round(((this.PoidsNum) * 10) * 10) / 10;
        if (this.AgeNum <= 12) {
            this.PosoEphedrine = "200 µg/kg";
            this.AdminEphedrine = Math.round((this.PoidsNum * 0.3) * 10) / 10;
        }
        else if (this.AgeNum <= 36) {
            this.PosoEphedrine = "200 µg/kg";
            this.AdminEphedrine = Math.round((this.PoidsNum * 0.2) * 10) / 10;
        }
        else {
            this.PosoEphedrine = "100 µg/kg";
            this.AdminEphedrine = Math.round((this.PoidsNum * 0.1) * 10) / 10;
        }
        ;
        this.AdminAlbumine = Math.round((this.PoidsNum * 10) * 10) / 10;
        /** Apports journaliers */
        if (this.AgeNum <= 1) {
            this.CategorieAge = "nouveau-né";
            this.StandardEau = 160;
            this.StandardKCal = 110;
            this.StandardGlucides = 17;
            this.StandardAcidesAmines = 3.5;
            this.StandardLipides = 6;
            this.StandardSodium = 290;
            this.StandardPotassium = 150;
            this.StandardCalcium = 45;
            this.StandardPhosphore = 35;
            this.StandardMagnesium = 10;
        }
        else if (this.AgeNum <= 3) {
            this.CategorieAge = "nourrisson";
            this.StandardEau = 105;
            this.StandardKCal = 100;
            this.StandardGlucides = 14;
            this.StandardAcidesAmines = 2.5;
            this.StandardLipides = 3;
            this.StandardSodium = 203;
            this.StandardPotassium = 262.5;
            this.StandardCalcium = 25;
            this.StandardPhosphore = 25;
            this.StandardMagnesium = 10;
        }
        else if (this.AgeNum <= 12 * 12) {
            this.CategorieAge = "enfant";
            this.StandardEau = 70;
            this.StandardKCal = 70;
            this.StandardGlucides = 12;
            this.StandardAcidesAmines = 2;
            this.StandardLipides = 2;
            this.StandardSodium = 145;
            this.StandardPotassium = 187.5;
            this.StandardCalcium = 10;
            this.StandardPhosphore = 10;
            this.StandardMagnesium = 8;
        }
        else {
            this.CategorieAge = "jeune adulte";
            this.StandardEau = 50;
            this.StandardKCal = 50;
            this.StandardGlucides = 10;
            this.StandardAcidesAmines = 2;
            this.StandardLipides = 1.5;
            this.StandardSodium = 145;
            this.StandardPotassium = 187.5;
            this.StandardCalcium = 10;
            this.StandardPhosphore = 10;
            this.StandardMagnesium = 8;
        }
        this.Eau = Math.round((this.PoidsNum * this.StandardEau) * 10) / 10;
        this.KCal = Math.round((this.PoidsNum * this.StandardKCal) * 10) / 10;
        this.Glucides = Math.round((this.PoidsNum * this.StandardGlucides) * 10) / 10;
        this.AcidesAmines = Math.round((this.PoidsNum * this.StandardAcidesAmines) * 10) / 10;
        this.Lipides = Math.round((this.PoidsNum * this.StandardLipides) * 10) / 10;
        this.Sodium = Math.round((this.PoidsNum * this.StandardSodium) * 10) / 10;
        this.Potassium = Math.round((this.PoidsNum * this.StandardPotassium) * 10) / 10;
        this.Calcium = Math.round((this.PoidsNum * this.StandardCalcium) * 10) / 10;
        this.Phosphore = Math.round((this.PoidsNum * this.StandardPhosphore) * 10) / 10;
        this.Magnesium = Math.round((this.PoidsNum * this.StandardMagnesium) * 10) / 10;
    };
    ;
    GestionFluidesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var promiseList = [];
        promiseList.push(this.storage.get('AgeNum').then(function (Age) {
            _this.AgeNum = Age;
            _this.ageLecture = Math.round((_this.AgeNum / 12) * 10) / 10;
            _this.storage.get('PoidsNum').then(function (Poids) {
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
                            _this.storage.get('sexeMF').then(function (sexe) {
                                _this.sexeMF = sexe;
                                if (!sexe) {
                                    _this.sexeMF = "Fille";
                                }
                                _this.storage.get('Taille').then(function (Taille) {
                                    _this.Taille = Taille;
                                    if (!_this.PoidsNum || !_this.AgeNum || !_this.DureeJeune) {
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
                });
            });
        }));
    };
    ;
    GestionFluidesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GestionFluidesPage');
    };
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
    GestionFluidesPage.prototype.displayOptions = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__options_options__["a" /* OptionsPage */]);
    };
    ;
    GestionFluidesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-gestion-fluides',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\gestion-fluides\gestion-fluides.html"*/'<ion-content>\n\n\n      <!-- HEADER MENU  -->\n      <div class="header"> \n\n        <div (click)="retourHome()" class="backButton">\n        <ion-icon start color="turquoise-fonce" name="arrow-back"></ion-icon>\n        Retour\n        </div>\nApports et produits sanguins \n</div>\n          <br>\n    \n                <!-- HEADER MON PATIENT  -->\n\n          <ion-item color="turquoise-fonce"> \n            <ion-label>\n              <p class="MonPatient">{{sexeMF}} - {{ageLecture}} ans ( = {{AgeNum}} mois) - {{PoidsNum}} kg - {{Taille}} cm</p> \n              <p class="MonPatient">Estomac {{EstomacOuiNon}} - Jeune {{DureeJeune}} h</p>\n              <p class="MonPatient">Allergie : {{Allergie}}</p></ion-label> \n          </ion-item>\n      \n          <br>\n     <!-- END HEADER -->\n\n  \n      <!-- ITEMS CALCULES-->\n   \n      <ion-list>\n        <ion-item-group>\n\n          <ion-item-divider (click)="ToggleApportsJournaliers()">\n            <ion-label color="dark-turquoise">             \n              <span *ngIf="AgeNum >= 24">Apports journaliers - {{CategorieAge}} de {{ageLecture}} ans</span>\n              <span *ngIf="AgeNum < 24">Apports journaliers - {{CategorieAge}} de {{AgeNum}} mois</span>\n            <ion-icon *ngIf="!isShownApportsJournaliers" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n            <ion-icon *ngIf="isShownApportsJournaliers" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n            </ion-label>\n          </ion-item-divider>\n            \n              <ion-grid  fixed="true" *ngIf="isShownApportsJournaliers" class="TableApportsHeader">\n                <ion-row  >\n                  <ion-col >\n                    Apports cibles\n                  </ion-col>\n                  <ion-col>\n                    En dose poids (/kg)\n                  </ion-col>\n                  <ion-col>\n                    Pour mon patient\n                  </ion-col>            \n                </ion-row>\n\n                <ion-row class="TableApportsEven">\n                  <ion-col>\n                    Eau (mL/j)\n                  </ion-col>\n                  <ion-col>\n                    {{StandardEau}}\n                  </ion-col>\n                  <ion-col>\n                    {{Eau}}\n                  </ion-col>            \n                </ion-row>\n\n                <ion-row class="TableApportsOdd">\n                <ion-col>\n                  Calories (KCal/j)\n                </ion-col>\n                <ion-col>\n                  {{StandardKCal}}\n                </ion-col>\n                <ion-col>\n                  {{KCal}}\n                </ion-col>            \n              </ion-row>\n\n              <ion-row class="TableApportsEven">\n              <ion-col>\n                Glucides (g/j)\n              </ion-col>\n              <ion-col>\n                {{StandardGlucides}}\n              </ion-col>\n              <ion-col>\n                {{Glucides}}\n              </ion-col>            \n            </ion-row>\n\n            <ion-row class="TableApportsOdd">\n            <ion-col>\n              Acides aminés (g/j)\n            </ion-col>\n            <ion-col>\n              {{StandardAcidesAmines}}\n            </ion-col>\n            <ion-col>\n              {{AcidesAmines}}\n            </ion-col>            \n          </ion-row>\n            \n          <ion-row class="TableApportsEven">\n          <ion-col>\n            Lipides (g/j)\n          </ion-col>\n          <ion-col>\n            {{StandardLipides}}\n          </ion-col>\n          <ion-col>\n            {{Lipides}}\n          </ion-col>            \n        </ion-row>\n\n        <ion-row class="TableApportsOdd">\n        <ion-col>\n        Sodium (mg/j)\n          </ion-col>\n        <ion-col>\n          {{StandardSodium}}\n        </ion-col>\n        <ion-col>\n          {{Sodium}}\n        </ion-col>            \n      </ion-row>\n\n      <ion-row class="TableApportsEven">\n      <ion-col>\n        Potassium (mg/j)\n          </ion-col>\n        <ion-col>\n          {{StandardPotassium}}\n        </ion-col>\n        <ion-col>\n          {{Potassium}}\n        </ion-col>            \n      </ion-row>\n\n      <ion-row class="TableApportsOdd">\n      <ion-col>\n        Calcium (mg/j)\n          </ion-col>\n        <ion-col>\n          {{StandardCalcium}}\n        </ion-col>\n        <ion-col>\n          {{Calcium}}\n        </ion-col>            \n      </ion-row>\n\n      <ion-row class="TableApportsEven">\n      <ion-col>\n        Phosphore (mg/j)\n          </ion-col>\n        <ion-col>\n          {{StandardPhosphore}}\n        </ion-col>\n        <ion-col>\n          {{Phosphore}}\n        </ion-col>            \n      </ion-row>\n\n      <ion-row class="TableApportsOdd">\n      <ion-col>\n        Magnesium (mg/j)\n          </ion-col>\n        <ion-col>\n          {{StandardMagnesium}}\n        </ion-col>\n        <ion-col>\n          {{Magnesium}}\n        </ion-col>            \n      </ion-row>\n\n                </ion-grid>\n\n         \n          \n          <ion-item-divider (click)="ToggleApports()">\n            <ion-label color="dark-turquoise">Apports hydriques\n          <ion-icon *ngIf="!isShownApports" class="OpenCloseIcon" name="open" style="zoom:0.9"></ion-icon>\n          <ion-icon *ngIf="isShownApports" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n            </ion-label>\n          </ion-item-divider> \n\n\n          <ion-card *ngIf="isShownApports" class="drogueContainer">\n\n            <ion-item><ion-label class="drogueInduction">\n              Soluté proposé : {{Solute}}\n            </ion-label></ion-item>\n\n            <ion-item>\n              <ion-label class="drogueInduction">\n                Apports horaires = {{ApportBaseHoraire}} + {{PertesRespiratoires}} + {{CompPertesChir}} = <b>{{TotalHoraire}} mL/h</b>\n                <p class="dilutionDrogueInduction"> - 1. Besoins de base : {{ApportBaseHoraire}} mL/h</p>\n                <p class="dilutionDrogueInduction"> - 2. Compensation respiratoire : {{PertesRespiratoires}} mL/h</p>\n                <p class="comment"> &nbsp; &nbsp; Pertes estimées à 17 mL/m²SC/h, applicable sur SIOT ou ML</p>\n                <p class="dilutionDrogueInduction"> - 3. Compensation chirurgicale : {{CompPertesChir}} mL/h</p>\n                <p class="comment"> &nbsp; &nbsp; Pertes estimées à {{PertesChir}} mL/kg/h</p>\n                </ion-label>\n            </ion-item>\n\n            <ion-item>\n              <ion-label color="turquoise-fonce" class="drogueInduction">Pertes chirurgicales estimées :</ion-label>\n            <ion-select #newselect (ionChange)="UpdatePerteChir()" [(ngModel)]="PertesChir" interface="action-sheet"\n            okText="OK" cancelText="Retour" class="drogueInduction">\n             <ion-option checked="true" value="2" color="turquoise-fonce">2 mL/kg/h</ion-option>\n             <ion-option value="5" color="turquoise-fonce">5 mL/kg/h</ion-option>\n             <ion-option value="10" color="turquoise-fonce">10 mL/kg/h</ion-option>\n            </ion-select>\n            </ion-item>\n\n          <ion-item>\n            <ion-label class="drogueInduction">Compensation jeûne de {{DureeJeune}} heures : <b>{{CompJeune}} mL</b>\n            <p class="dilutionDrogueInduction">- {{CompJeune1}} mL/h pendant 1h</p>\n            <p class="dilutionDrogueInduction">- puis {{CompJeune2}} mLh pendant 2h</p>\n          </ion-label>\n          </ion-item>\n\n          <ion-item>\n            <ion-label class="drogueInduction">Total : \n            <p class="dilutionDrogueInduction">- H1 : {{Total1}} mL</p>\n            <p class="dilutionDrogueInduction">- H2, H3 : {{Total2et3}} mL/h</p>\n            <p class="dilutionDrogueInduction">- Heures suivantes : {{TotalHoraire}} mL/h </p>\n          </ion-label>\n          </ion-item>\n\n        </ion-card>\n\n        <ion-item-divider (click)="ToggleHypoTA()">\n          <ion-label color="dark-turquoise">Hypotension artérielle per-opératoire\n          <ion-icon *ngIf="!isShownHypoTA" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n          <ion-icon *ngIf="isShownHypoTA" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n          </ion-label>\n        </ion-item-divider>\n          \n          <ion-card class="drogueContainer"  *ngIf="isShownHypoTA">\n          <ion-card-content>\n            <p class="dilutionDrogueInduction">PAM < 20% de la valeur avant induction.</p>\n            <p class="dilutionDrogueInduction"><i>Enfant de {{ageLecture}} ans, PAS minimale de +/- {{PAShypoTA}} mmHg</i></p>\n            <br>\n            <p class="drogueInduction">Mesures à envisager :</p>\n            <p class="dilutionDrogueInduction"> - NaCl 0,9% - 10 mL/kg : \n              <br> &nbsp; &nbsp; <b> - {{VolRemplissage}} mL </b> de <b>{{SoluteRemplissage}}</b>\n              <br> &nbsp; &nbsp; - renouvelable une fois\n            </p>\n            <p class="dilutionDrogueInduction"> - Ephédrine IVD ({{PosoEphedrine}}) :  <b>{{AdminEphedrine}} mg</b>, renouvelable</p>\n            <p class="dilutionDrogueInduction"> - En seconde intention, Albumine 10%, 10 mL/kg : \n              <br> &nbsp; &nbsp; <b> - {{AdminAlbumine}} mL sur 30 minutes</b> \n              <br> &nbsp; &nbsp; - mélange équivolume Albumine 20% & NaCl 0.9%</p>\n          </ion-card-content>\n        </ion-card>\n\n          \n\n          <ion-item-divider (click)="ToggleCGR()">\n            <ion-label color="danger">Hémorragie aiguë\n          <ion-icon *ngIf="!isShownCGR" class="OpenCloseIcon" name="open" style="zoom:0.9"></ion-icon>\n          <ion-icon *ngIf="isShownCGR" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n            </ion-label>\n          </ion-item-divider> \n\n          <ion-card *ngIf="isShownCGR" class="drogueContainer">\n          \n          <ion-card class="drogueContainer">\n          <ion-card-header color="danger">Globules rouges </ion-card-header>\n          <ion-item>\n            <ion-label class="drogueInduction">\n              Masse sanguine estimée : <b>{{MasseSanguine}} mL</b>\n              <p *ngIf="AgeNum <= 24" class="comment">{{MasseSanguineAge}} mL/kg à {{AgeNum}} mois</p>\n              <p *ngIf="AgeNum > 24" class="comment">{{MasseSanguineAge}} mL/kg à {{ageLecture}} ans</p>\n          </ion-label>\n          </ion-item>\n\n          <ion-item class="HbItem">\n            <ion-label color="danger" class="drogueInduction">Hb mesurée : {{Hbmesuree}} g/dL</ion-label>\n          </ion-item>\n          <ion-range class="HbRange" max="16" step="0.5" color="danger" (ionChange)="MesureeHb()" [(ngModel)]="Hbmesuree"> </ion-range>\n\n<br><br><br><br>\n\n          <ion-item class="HbItem">\n             <ion-label color="turquoise-fonce" class="drogueInduction">Souhaitée : {{Hbsouhaitee}} g/dL</ion-label>\n          </ion-item>\n          <ion-range class="HbRange" color="turquoise-fonce" max="16" step="0.5" (ionChange)="SouhaiteeHb()" [(ngModel)]="Hbsouhaitee"> </ion-range>\n\n\n          <ion-item>\n            <ion-label class="drogueInduction">Transfuser : {{VolCGR}}\n              <p class="dilutionDrogueInduction"><b>Pour corriger {{DiffHb}} g/dL d\'hémoglobine</b></p>\n              <p class="comment">4 mL/kg/g/dL d\'Hb à corriger </p>\n            </ion-label>\n        </ion-item>\n      </ion-card>\n      <hr>\n      <ion-card class="drogueContainer">\n        <ion-card-header color="warning">Autres produits sanguins</ion-card-header>\n          <ion-item>\n            <ion-label class="drogueInduction">\n              <p *ngIf="AgeNum <= 180" class="posologieDrogueInduction">Posologie proposée : 1 UP/5kg avant 15 ans </p>\n              <p *ngIf="AgeNum > 180" class="posologieDrogueInduction">Posologie proposée : 1 UP/7kg après 15 ans </p>\n              CPA : {{UnitesPlaquettaires}} UI Plaquettaires\n              <p class="comment">1 UP = 5x10^10 Pq</p></ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label class="drogueInduction">\n              <p class="posologieDrogueInduction">Posologie proposée : 20 mL/kg</p>\n             PFC : {{VolPFC}} mL de PFC\n              <p class="comment">1 poche = +/- 200 mL</p>\n            </ion-label>\n          </ion-item>\n        </ion-card>\n        <hr>\n\n\n        <ion-card class="drogueContainer">\n          <ion-card-header>Médicaments hémorragie aiguë</ion-card-header>\n          <ion-item>\n            <ion-label class="drogueInduction">\n              <p class="posologieDrogueInduction">Posologie proposée : 20 mg/kg</p>\n             Ac. Tranexamique (Exacyl® 0,5g/5mL) : {{ExacylChocHemorragique}} mg IVL\n              <p class="comment">Administration : sur 1 min, insuffisant rénal : demi-dose</p>\n            </ion-label>\n          </ion-item>\n\n        <ion-item>\n          <ion-label class="drogueInduction">\n            <p class="posologieDrogueInduction">Posologie proposée : 20 mg/kg</p>\n           Fibrinogène  (Clottafact® 1,5 g/100mL) : {{FibrinogengeChocHemorragique}} mg IVL\n            <p class="comment">Administration : 300mg/min soit 20 mL/min de préparation pure</p>\n          </ion-label>\n        </ion-item>\n\n        <ion-item>\n          <ion-label class="drogueInduction">\n            <p class="posologieDrogueInduction">Posologie proposée : 90 µg/kg</p>\n           Facteur VIIa  (Novoseven® 1 mg) : {{NovosevenChocHemorragique}} µg IVL\n            <p class="comment">Administration sur 5 minutes</p>\n          </ion-label>\n        </ion-item>\n      </ion-card>\n\n      </ion-card>\n      \n\n        </ion-item-group>\n        </ion-list>\n<hr>\n        <ion-card class="nb" padding>   Si ce n\'est pas déjà fait, renseignez la durée du jeune dans les options afin d\'ajuster les apports hydriques en conséquence.\n          <br><br>   \n          <button ion-button small color="turquoise-fonce" (click)="displayOptions()"> Options </button></ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\gestion-fluides\gestion-fluides.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], GestionFluidesPage);
    return GestionFluidesPage;
}());

//# sourceMappingURL=gestion-fluides.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accueil_accueil__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(18);
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
        this.options = { dureejeune: "" };
        this.DureeJeune = 6;
        this.dureejeunelast = 6;
        this.Allergie = "Aucune";
    }
    OptionsPage.prototype.retourHome = function () {
        this.navCtrl.pop();
    };
    OptionsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var promiseList = [];
        promiseList.push(this.storage.get('AgeNum').then(function (Age) {
            _this.AgeNum = Age;
            _this.ageLecture = Math.round((_this.AgeNum / 12) * 10) / 10;
            _this.storage.get('PoidsNum').then(function (Poids) {
                _this.PoidsNum = Poids;
                _this.storage.get('DureeJeune').then(function (dureejeune) {
                    _this.DureeJeune = dureejeune;
                    _this.storage.get('EstomacPlein').then(function (Estomac) {
                        _this.EstomacPlein = Estomac;
                        console.log('lestomac est plein ?', _this.EstomacPlein);
                        if (_this.EstomacPlein == true) {
                            _this.EstomacOuiNon = "plein";
                            _this.options.estomacplein = true;
                        }
                        else {
                            _this.EstomacOuiNon = "vide";
                            _this.options.estomacplein = false;
                        }
                        ;
                        _this.storage.get('Allergie').then(function (allergie) {
                            _this.Allergie = allergie;
                            _this.storage.get('sexeMF').then(function (sexe) {
                                _this.sexeMF = sexe;
                                if (!_this.sexeMF) {
                                    _this.sexeMF = "Fille";
                                }
                                ;
                                _this.storage.get('Taille').then(function (Taille) {
                                    _this.Taille = Taille;
                                    if (!_this.PoidsNum || !_this.AgeNum) {
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
                });
            });
        }));
    };
    ;
    OptionsPage.prototype.calculs = function () {
        /* calculs ici (aucun pr le moment)*/
    };
    ;
    OptionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OptionsPage');
    };
    ;
    OptionsPage.prototype.addTerme = function (Terme) {
        this.Terme = parseInt(Terme);
        console.log("le terme est de", this.Terme, " SA");
        this.APC = this.AgeNum * 4 + this.Terme;
        console.log("l'APC est de ", this.APC, " Semaines");
    };
    ;
    OptionsPage.prototype.addAllergie = function () {
        this.Allergie = this.NewAllergie;
        this.storage.set('Allergie', this.Allergie);
        console.log(this.Allergie, 'a bien été enregistrée');
    };
    ;
    OptionsPage.prototype.SaveEstomac = function () {
        if (this.EstomacPlein == true) {
            this.EstomacOuiNon = "plein";
        }
        else {
            this.EstomacOuiNon = "vide";
        }
        this.storage.set('EstomacPlein', this.EstomacPlein);
        console.log("lestomac enregistré est : ", this.EstomacOuiNon, " soit en booléen", this.EstomacPlein);
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
            selector: 'page-options',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\options\options.html"*/'<ion-content padding>\n\n          <!-- HEADER MENU  -->\n          <div class="header"> \n\n            <div (click)="retourHome()" class="backButton">\n            <ion-icon start color="turquoise-fonce" name="arrow-back"></ion-icon>\n            Retour\n            </div>\n  Options</div>\n              <br>\n        \n                    <!-- HEADER MON PATIENT  -->\n    \n              <ion-item color="turquoise-fonce"> \n                <ion-label>\n                  <p class="MonPatient">{{sexeMF}} - {{ageLecture}} ans ( = {{AgeNum}} mois) - {{PoidsNum}} kg - {{Taille}} cm</p> \n                  <p class="MonPatient">Estomac {{EstomacOuiNon}} - Jeune {{DureeJeune}} h</p>\n                  <p class="MonPatient">Allergie : {{Allergie}}</p></ion-label> \n              </ion-item>\n          \n              <br>\n         <!-- END HEADER -->\n\n  <ion-item>\n    <ion-label color="dark-turquoise">Risque anesthésique</ion-label></ion-item>\n\n\n  <ion-item>\n    <ion-label  class="drogueInduction">Allergies</ion-label>\n    <ion-input  class="drogueInduction" inputmode ="text" type="text" (ionChange)="addAllergie()" [(ngModel)]="NewAllergie" placeholder="Renseigner ici"></ion-input>\n    </ion-item>\n\n    \n<ion-item>\n  <ion-label class="drogueInduction">Durée du jeune pré-op : <b>{{DureeJeune}} heures</b></ion-label>\n  <ion-range class="drogueInduction" color="turquoise-fonce" max="12" step="1" ticks="true" snaps (ionChange)="FnDureeJeune()" [(ngModel)]="DureeJeune"> </ion-range>\n</ion-item>\n  \n\n  <ion-item>\n    <ion-label class="drogueInduction">Estomac plein</ion-label>\n    <ion-toggle class="drogueInduction"  color="turquoise-fonce" [(ngModel)]="EstomacPlein" (ionChange)="SaveEstomac()"></ion-toggle>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color="dark-turquoise">Prématurité & APC\n    </ion-label>\n    </ion-item>\n\n  <ion-item>\n    <ion-label class="drogueInduction" position="stacked">Terme naissance (SA)</ion-label>\n    <ion-input class="drogueInduction" inputmode ="number" type="number" (ionChange)="addTerme(Terme)" [(ngModel)]="Terme" placeholder="Renseigner"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label class="drogueInduction">\n    APC : {{APC}} semaines</ion-label></ion-item>\n\n\n\n \n</ion-content>\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\options\options.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], OptionsPage);
    return OptionsPage;
}());

;
//# sourceMappingURL=options.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocoRegionalePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(18);
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
    LocoRegionalePage.prototype.retourHome = function () {
        this.navCtrl.pop();
    };
    ;
    LocoRegionalePage.prototype.ToggleAPD = function () {
        this.isShownAPD = !this.isShownAPD;
    };
    ;
    LocoRegionalePage.prototype.ToggleRachi = function () {
        this.isShownRachi = !this.isShownRachi;
    };
    ;
    LocoRegionalePage.prototype.ToggleALRP = function () {
        this.isShownALRP = !this.isShownALRP;
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
                                    text: 'Plus tard.',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: Nan');
                                    }
                                }, {
                                    text: 'OK.',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        _this.navCtrl.pop();
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
        promiseList.push(this.storage.get('AgeNum').then(function (Age) {
            _this.AgeNum = Age;
            _this.ageLecture = Math.round((_this.AgeNum / 12) * 10) / 10;
            _this.storage.get('PoidsNum').then(function (Poids) {
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
                            _this.storage.get('sexeMF').then(function (sexe) {
                                _this.sexeMF = sexe;
                                if (!sexe) {
                                    _this.sexeMF = "Fille";
                                }
                                _this.storage.get('Taille').then(function (Taille) {
                                    _this.Taille = Taille;
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
                });
            });
        }));
    };
    ;
    LocoRegionalePage.prototype.calculs = function () {
        /*placer les calculs ici*/
        this.Kemura = Math.round(((10 + this.PoidsNum) * 0.8) * 10) / 10;
        this.Busoni = Math.round(((2 * (this.AgeNum) / 12) + 10) * 10) / 10;
        this.BolusPIEBRopiSuf = Math.round((this.PoidsNum * 0.2) * 10) / 10;
        this.BolusPCEARopiSuf = Math.round((this.PoidsNum * 0.15) * 10) / 10;
        this.DoseMaxPCEARopiSuf = Math.round((this.PoidsNum * 1.5) * 10) / 10;
        this.VolBupi5NN = (Math.round((this.PoidsNum * 0.2) * 10) / 10 + " mL");
        if (this.VolBupi5NN >= 1) {
            this.VolBupi5NN = "NA - poids > 5 kg";
        }
        this.VolBAXmin = Math.round((this.PoidsNum * 0.2) * 10) / 10;
        this.VolBAXmax = Math.round((this.PoidsNum * 0.5) * 10) / 10;
        this.VolFEMmin = Math.round((this.PoidsNum * 0.3) * 10) / 10;
        this.VolFEMmax = Math.round((this.PoidsNum * 1) * 10) / 10;
        this.VolSciatMin = Math.round((this.PoidsNum * 0.3) * 10) / 10;
        this.VolSciatMax = Math.round((this.PoidsNum * 1) * 10) / 10;
        this.VolIH = Math.round((this.PoidsNum * 0.5) * 10) / 10;
        this.VolPenien = Math.round((this.PoidsNum * 0.1) * 10) / 10;
        this.VolBPV = Math.round((this.PoidsNum * 0.5) * 10) / 10;
        this.VolTAPmin = Math.round((this.PoidsNum * 0.3) * 10) / 10;
        this.VolTAPmax = Math.round((this.PoidsNum * 0.5) * 10) / 10;
        this.VolPudendal = Math.round((this.PoidsNum * 0.2) * 10) / 10;
        this.VolQL = Math.round((this.PoidsNum * 0.25) * 10) / 10;
    };
    ;
    LocoRegionalePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-loco-regionale',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\loco-regionale\loco-regionale.html"*/'<ion-content>\n\n\n        <!-- HEADER MENU  -->\n        <div class="header"> \n\n          <div (click)="retourHome()" class="backButton">\n          <ion-icon start color="turquoise-fonce" name="arrow-back"></ion-icon>\n          Retour\n          </div>\nAnesthésie Loco-régionale\n            </div>\n            <br>\n      \n                  <!-- HEADER MON PATIENT  -->\n  \n            <ion-item color="turquoise-fonce"> \n              <ion-label>\n                <p class="MonPatient">{{sexeMF}} - {{ageLecture}} ans ( = {{AgeNum}} mois) - {{PoidsNum}} kg - {{Taille}} cm</p> \n                <p class="MonPatient">Estomac {{EstomacOuiNon}} - Jeune {{DureeJeune}} h</p>\n                <p class="MonPatient">Allergie : {{Allergie}}</p></ion-label> \n            </ion-item>\n        \n            <br>\n       <!-- END HEADER -->\n  \n  <ion-item-divider (click)="ToggleAPD()">\n    <ion-label color="dark-turquoise">Anesthésie péridurale pédiatrique\n  <ion-icon *ngIf="!isShownAPD" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n  <ion-icon *ngIf="isShownAPD" class="OpenCloseIcon" name="close"  style="zoom:0.9"></ion-icon>\n    </ion-label>\n  </ion-item-divider> \n\n  <ion-card *ngIf="isShownAPD" class="drogueContainer">\n\n      <ion-item> \n        <ion-label class="drogueInduction">\n        <b>Ponction :</b> \n        <p>Espace L4-L5 (voie de Taylor),</p> \n        <p>Entre les épines iliaques postérieures,</p>\n        <p>Aiguille pédiatrique (graduation/5mm). </p> \n      </ion-label>\n      </ion-item>\n\n      <ion-item>\n          <ion-label class="drogueInduction">\n        <b>Distance</b> de l\'espace péridural :\n        <p>Estimation</p>\n      - Selon Kemura (poids) : <b>{{Kemura}} mm</b> <br>\n      - Selon Busoni (âge, après 2 ans) : <b>{{Busoni}} mm</b> <br>\n      - Cathétériser l\'espace sur <b>30 mm</b>\n\n      </ion-label>\n\n      </ion-item>\n\n\n      <ion-item>\n        <ion-label class="drogueInduction"><b>Cassette de PIEB + PCEA :</b>\n        <p>- Volume total de 50 mL</p>\n        <p>- Ropi 1 mg/mL + Suf 0,2 µg/mL</p>\n        </ion-label>\n        </ion-item>\n\n      <ion-item>\n        <ion-label class="drogueInduction">\n        <b>Posologies</b> (suggestions) :\n      <p> - Bolus horaire : <b>{{BolusPIEBRopiSuf}} mL</b> toutes les heures</p>\n      <p> - Bolus à demande : <b>{{BolusPCEARopiSuf}} mL</b>, PR 20 min</p>\n      <p> - Dose max. : <b>{{DoseMaxPCEARopiSuf}} mL</b> toutes les 4 heures</p>\n      </ion-label>\n      </ion-item>\n  \n  </ion-card>\n\n  <ion-item-divider (click)="ToggleRachi()">\n    <ion-label color="dark-turquoise">Rachi-anesthésie néo-natale\n  <ion-icon *ngIf="!isShownRachi" class="OpenCloseIcon" name="open" style="zoom:0.9"></ion-icon>\n  <ion-icon *ngIf="isShownRachi" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n    </ion-label>\n  </ion-item-divider> \n\n  <ion-card *ngIf="isShownRachi" class="drogueContainer">\n\n      <ion-item>\n        <ion-label class="drogueInduction"><b>Indications</b> :\n        <p>- Chirurgie sous ombilicale</p>\n        <p>- Nouveau né de moins de 5 kg.</p>\n      </ion-label></ion-item>\n\n      <ion-item> <ion-label class="drogueInduction"><b>Ponction :</b> \n        <p>Espace L4-L5 (voie de Taylor),</p> \n        <p>Entre les épines iliaques postérieures,</p>\n        <p>Aguille 25G courte (bleue).</p>  </ion-label> </ion-item>\n    \n\n      <ion-item>\n        <ion-label class="drogueInduction"><b>Bupivacaïne hyperbare</b>\n        <p>- 5 mg/mL</p>\n        <p>- {{VolBupi5NN}} (pour 0,2 mL/kg)</p>\n        <p>- Utiliser une seringue à insuline.</p>\n      </ion-label>\n        </ion-item>\n\n      <div class="astucediv" padding = "15 px">\n        <img class="lightbulb" src="/assets/imgs/light-bulb.png">\n        <p class="astuce"> \n        <b>L\'astuce de Joëlle</b> : Quelques gouttes de G30% sur les lèvres, avant, pendant et après la rachianesthésie</p>\n        \n        </div>\n  \n  </ion-card>\n\n\n  <ion-item-divider (click)="ToggleALRP()">\n    <ion-label color="dark-turquoise">Blocs périphériques\n  <ion-icon *ngIf="!isShownALRP" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n  <ion-icon *ngIf="isShownALRP" class="OpenCloseIcon" name="close"  style="zoom:0.9"></ion-icon>\n    </ion-label>\n  </ion-item-divider> \n\n  <ion-card *ngIf="isShownALRP" class="drogueContainer">\n\n    <ion-card-content>\n\n  <ion-item >\n    <ion-label class="drogueInduction"><b>Dilutions suggérées :</b> \n      <p> - Ropivacaïne : 2 mg/mL</p>\n      <p> - Lévobupivacaïne : 2,5 mg/mL</p>\n    </ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-label class="drogueInduction"> <b>Posologies suggérées :</b> \n      <p>(en injection unique)</p>\n    </ion-label>\n  </ion-item>\n\n  <ion-grid class="tableauALR" fixed="true">\n    <ion-row >\n      <ion-col class="tableauALR">\n      Bloc\n      </ion-col>\n      <ion-col class="tableauALR">\n      Volume/poids\n      </ion-col>\n      <ion-col class="tableauALR">\n      Mon patient\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        Axillaire\n            </ion-col>\n      <ion-col>\n      0,2 à 0,5 mL/kg\n      </ion-col>\n      <ion-col>\n     {{VolBAXmin}} à {{VolBAXmax}} mL\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        Fémoral\n            </ion-col>\n      <ion-col>\n        0,3 à 1 mL/kg\n      </ion-col>\n      <ion-col>\n      {{VolFEMmin}} à {{VolFEMmax}} mL\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        Sciatique\n            </ion-col>\n      <ion-col>\n       0,3 à 1 mL/kg\n      </ion-col>\n      <ion-col>\n      {{VolSciatMin}} à {{VolSciatMax}} mL\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        Ilio-hypogastrique\n            </ion-col>\n      <ion-col>\n       0,5 mL/kg\n      </ion-col>\n      <ion-col>\n        {{VolIH}} mL\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        Pénien\n            </ion-col>\n      <ion-col>\n       0,1 mL/kg\n      </ion-col>\n      <ion-col>\n    {{VolPenien}} mL\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        Paravertébral\n            </ion-col>\n      <ion-col>\n       0,5 mL/kg\n      </ion-col>\n      <ion-col>\n        {{VolBPV}} mL\n      </ion-col>\n    </ion-row>\n\n  <ion-row>\n    <ion-col>\n      TAP\n          </ion-col>\n    <ion-col>\n     0,3 à 0,5 mL/kg/côté\n    </ion-col>\n    <ion-col>\n      {{VolTAPmin}} à {{VolTAPmax}} mL/côté\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n      Carré des lombes \n          </ion-col>\n    <ion-col>\n     0,25 mL/kg/côté\n    </ion-col>\n    <ion-col>\n      {{VolQL}} mL/côté\n     </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n      Erecteurs du rachis\n    </ion-col>\n    <ion-col>\n      0,25 mL/kg/côté\n    </ion-col>\n    <ion-col>\n      {{VolQL}} mL/côté\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\nPudendal    \n</ion-col>\n    <ion-col>\n     0,2 mL/kg/côté\n    </ion-col>\n    <ion-col>\n      {{VolPudendal}} mL/côté\n    </ion-col>\n  </ion-row>\n\n</ion-grid>\n\n</ion-card-content>\n\n</ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\loco-regionale\loco-regionale.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LocoRegionalePage);
    return LocoRegionalePage;
}());

//# sourceMappingURL=loco-regionale.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AntalgiePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scores_scores__ = __webpack_require__(80);
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
        this.isShownAntiCoag = false;
    }
    AntalgiePage.prototype.retourHome = function () {
        this.navCtrl.pop();
    };
    ;
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
                                    text: 'Plus tard.',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: Nan');
                                    }
                                }, {
                                    text: 'OK.',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        _this.navCtrl.pop();
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
        this.isShownPal1 = !this.isShownPal1;
    };
    ;
    AntalgiePage.prototype.TogglePalier2 = function () {
        this.isShownPal2 = !this.isShownPal2;
    };
    ;
    AntalgiePage.prototype.TogglePalier3 = function () {
        this.isShownPal3 = !this.isShownPal3;
    };
    ;
    AntalgiePage.prototype.ToggleAutres = function () {
        this.isShownAutres = !this.isShownAutres;
    };
    ;
    AntalgiePage.prototype.ToggleAntiEmet = function () {
        this.isShownAntiEmet = !this.isShownAntiEmet;
    };
    ;
    AntalgiePage.prototype.ToggleAntiCoag = function () {
        this.isShownAntiCoag = !this.isShownAntiCoag;
    };
    ;
    AntalgiePage.prototype.openScores = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__scores_scores__["a" /* ScoresPage */]);
    };
    AntalgiePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var promiseList = [];
        promiseList.push(this.storage.get('AgeNum').then(function (Age) {
            _this.AgeNum = Age;
            _this.ageLecture = Math.round((_this.AgeNum / 12) * 10) / 10;
            _this.storage.get('PoidsNum').then(function (Poids) {
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
                            _this.storage.get('sexeMF').then(function (sexe) {
                                _this.sexeMF = sexe;
                                if (!_this.sexeMF) {
                                    _this.sexeMF = "Fille";
                                }
                                ;
                                _this.storage.get('Taille').then(function (Taille) {
                                    _this.Taille = Taille;
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
                });
            });
        }));
    };
    ;
    AntalgiePage.prototype.calculs = function () {
        /*Palier 1*/
        this.AdminParacetamol = Math.round((this.PoidsNum * 15) * 10) / 10;
        if (this.AdminParacetamol >= 1000) {
            this.AdminParacetamol = 1000;
        }
        this.AdminKeto = Math.round((this.PoidsNum * 1) * 10) / 10;
        if (this.AdminKeto >= 100) {
            this.AdminKeto = 100;
        }
        this.AdminIbu = Math.round((this.PoidsNum * 10) * 10) / 10;
        if (this.AdminIbu >= 400) {
            this.AdminIbu = 400;
        }
        /*Palier 2*/
        this.AdminNubain = Math.round((this.PoidsNum * 0.2) * 10) / 10;
        if (this.AdminNubain >= 10) {
            this.AdminNubain = 10;
        }
        this.AdminNubainHdJ = Math.round((this.PoidsNum * 0.1) * 10) / 10;
        if (this.AdminNubainHdJ >= 10) {
            this.AdminNubainHdJ = 10;
        }
        this.AdminAcupan = Math.round((this.PoidsNum * 1) * 10) / 10;
        if (this.AdminAcupan >= 120) {
            this.AdminAcupan = 120;
        }
        this.AdminTramadol = Math.round((this.PoidsNum * 1) * 10) / 10;
        if (this.AdminTramadol >= 100) {
            this.AdminTramadol = 100;
        }
        /*Palier 3*/
        this.AdminMorphineBO = Math.round((this.PoidsNum * 0.1) * 10) / 10;
        this.AdminMorphineTitration = Math.round((this.PoidsNum * 0.025) * 10) / 10;
        this.AdminMorphinePCA = Math.round((this.PoidsNum * 0.02) * 10) / 10;
        this.AdminMorphinePCAMax = Math.round((this.PoidsNum * 0.4) * 10) / 10;
        this.AdminMorphinePOLP = Math.round((this.PoidsNum * 1) * 10) / 10;
        this.AdminMorphinePOID = Math.round((this.PoidsNum * 0.1) * 10) / 10;
        /*Autres antalgiques*/
        this.AdminNeurontin = Math.round((this.PoidsNum * 5) * 10) / 10;
        if (this.AdminNeurontin >= 300) {
            this.AdminNeurontin = 300;
        }
        this.AdminSpasfonIV = Math.round((this.PoidsNum * 0.5) * 10) / 10;
        if (this.AdminSpasfonIV >= 120) {
            this.AdminSpasfonIV = 120;
        }
        this.AdminSpasfonPO = Math.round((this.PoidsNum * 1.5) * 10) / 10;
        if (this.AdminSpasfonPO >= 120) {
            this.AdminSpasfonPO = 120;
        }
        this.AdminLaroxylIV = Math.round((this.PoidsNum * 0.5) * 10) / 10;
        this.AdminLaroxylPO = Math.round((this.PoidsNum * 0.5) * 10) / 10;
        this.AdminRivotrilPO = Math.round((this.PoidsNum * 0.01) * 10) / 10;
        this.GouttesRivotril = Math.round(this.PoidsNum / 10);
        this.AdminClonidineIVSE = Math.round((this.PoidsNum * 0.5) * 10) / 10;
        this.AdminClonidinePO = Math.round((this.PoidsNum * 5) * 10) / 10;
        /* Anti émétiques */
        this.AdminZophren = Math.round((this.PoidsNum * 0.1) * 10) / 10;
        if (this.AdminZophren >= 8) {
            this.AdminZophren = 8;
        }
        this.AdminDroleptan = Math.round((this.PoidsNum * 25) * 10) / 10;
        if (this.AdminDroleptan >= 1250) {
            this.AdminDroleptan = 1250;
        }
        /* Anticoagulation*/
        this.AdminHBPMpreventive = Math.round((this.PoidsNum * 100) * 10) / 10;
        if (this.AgeNum <= 6 * 12) {
            this.AdminHBPMefficace = Math.round((this.PoidsNum * 130) * 10) / 10;
            this.PosoHBPMefficace = "130 UI/kg x2/j avant 6 ans";
        }
        else {
            this.AdminHBPMefficace = Math.round((this.PoidsNum * 100) * 10) / 10;
            this.PosoHBPMefficace = "100 UI/kg x2/j après 6 ans";
        }
        ;
        this.AdminHNF50 = Math.round((this.PoidsNum * 50) * 10) / 10;
        this.AdminHNF100 = Math.round((this.PoidsNum * 100) * 10) / 10;
        this.AdminHNFentretien = Math.round((this.PoidsNum * 20) * 10) / 10;
    };
    ;
    AntalgiePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-antalgie',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\antalgie\antalgie.html"*/'\n<ion-content>\n\n  <div class="header"> \n\n    <div (click)="retourHome()" class="backButton">\n    <ion-icon start color="turquoise-fonce" name="arrow-back"></ion-icon>\n    Retour\n    </div>\n\n    Antalgie et post-opératoire</div>\n      <br>\n\n      <ion-item color="turquoise-fonce"> \n        <ion-label>\n          <p class="MonPatient">{{sexeMF}} - {{ageLecture}} ans ( = {{AgeNum}} mois) - {{PoidsNum}} kg - {{Taille}} cm</p> \n          <p class="MonPatient">Estomac {{EstomacOuiNon}} - Jeune {{DureeJeune}} h</p>\n          <p class="MonPatient">Allergie : {{Allergie}}</p></ion-label> \n      </ion-item>\n  \n      <br>\n\n\n  <ion-list>\n\n    <ion-item-group>\n      <ion-item-divider (click)="TogglePalier1()"> \n        <ion-label color="dark-turquoise">Palier 1 \n          <ion-icon *ngIf="!isShownPal1" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n          <ion-icon *ngIf="isShownPal1" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n        </ion-label>\n      </ion-item-divider> \n  \n      <ion-card *ngIf="isShownPal1" class="drogueContainer">\n      <ion-item>\n        <ion-label class="drogueInduction">\n          <p class="posologieDrogueInduction">Posologie proposée : 15 mg/kg</p>\n          Paracétamol : {{AdminParacetamol}} mg IVL ou PO\n          <p class="dilutionDrogueInduction">Toutes les 6h</p>\n        </ion-label>\n      </ion-item>\n  \n      <ion-item class="avecAMM">\n        <ion-label class="drogueInduction">\n          <p class="posologieDrogueInduction">Posologie proposée : 1 mg/kg</p>\n          Ketoprofene (Profenid<span>&#174;</span>) : {{AdminKeto}} mg IVL\n          <p class="dilutionDrogueInduction">Toutes les 8 h</p> \n        </ion-label>\n      </ion-item>\n      \n      <div class="AMM">AMM <br> IV 15 ans <br> Sirop 6 mois</div>\n\n      <ion-item class="avecAMM">\n        <ion-label class="drogueInduction">\n          <p class="posologieDrogueInduction">Posologie proposée : 10 mg/kg</p>\n          Ibuprofene : {{AdminIbu}} mg PO \n          <p class="dilutionDrogueInduction">Toutes les 8h</p> \n        </ion-label>\n      </ion-item>\n\n      <div class="AMM">AMM <br> > 3 mois</div>\n\n    </ion-card>\n\n      \n  \n      <ion-item-divider (click)="TogglePalier2()">\n        <ion-label color="dark-turquoise">Palier 2\n\n          <ion-icon *ngIf="!isShownPal2" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n          <ion-icon *ngIf="isShownPal2" class="OpenCloseIcon" name="close"  style="zoom:0.9"></ion-icon>\n\n        </ion-label>\n      </ion-item-divider>\n\n      <ion-card *ngIf="isShownPal2" class="drogueContainer">\n      <ion-item class="avecAMM">\n        <ion-label class="drogueInduction">\n          <p class="posologieDrogueInduction">Posologie proposée : 0,2 mg/kg</p>\n          Nalbuphine (Nubain<span>&#174;</span>) : {{AdminNubain}} mg PO ou IVL\n          <p class="dilutionDrogueInduction">Toutes les 4h</p> \n          <p class="comment">En ambulatoire, diviser par 2 : {{AdminNubainHdJ}} mg</p>\n          <p class="comment">injecter sur 20 minutes avant 1 an</p>\n        </ion-label>\n      </ion-item>\n\n      <div class="AMM">AMM <br> > 18 mois</div>\n      \n      <ion-item class="avecAMM">\n        <ion-label class="drogueInduction">\n          <p class="posologieDrogueInduction">Posologie proposée 1 mg/kg/j</p>\n          Nefopam (Acupan<span>&#174;</span>) : {{AdminAcupan}} mg/j IVSE\n          <p class="dilutionDrogueInduction">IVSE continu sur 24h</p> \n        </ion-label>\n      </ion-item>\n\n      <div class="AMM">AMM <br> > 15 ans</div>\n      \n      <ion-item class="avecAMM" >\n        <ion-label class="drogueInduction">\n          <p class="posologieDrogueInduction">Posologie proposée : 1 mg/kg</p>\n          Tramadol (Contramal<span>&#174;</span>) : {{AdminTramadol}} mg PO ou IVL\n          <p class="dilutionDrogueInduction">Toutes les 6h</p> \n        </ion-label>\n      </ion-item>\n\n      <div class="AMM">AMM <br> PO 3 ans <br> IV 15 ans</div>\n\n    </ion-card>\n  \n      <ion-item-divider (click)="TogglePalier3()">\n        <ion-label color="dark-turquoise">Palier 3\n\n          <ion-icon *ngIf="!isShownPal3" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n          <ion-icon *ngIf="isShownPal3" class="OpenCloseIcon" name="close"  style="zoom:0.9"></ion-icon>\n\n        </ion-label>\n      </ion-item-divider>\n  \n\n      <ion-card *ngIf="isShownPal3" class="drogueContainer">\n      <ion-item>\n        <ion-label class="drogueInduction">\n          <p class="posologieDrogueInduction">Posologie proposée : 100 µg/kg</p>\n          Morphine avant réveil : {{AdminMorphineBO}} mg IVD\n          <p class="dilutionDrogueInduction">Une seule fois</p> \n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label class="drogueInduction">\n          <p class="posologieDrogueInduction">Posologie proposée : 25 µg/kg</p>\n          Morphine en titration : {{AdminMorphineTitration}} mg IVD\n          <p class="dilutionDrogueInduction">Toutes les 3 min, réévaluer après 4 boli</p> \n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label class="drogueInduction">\n          <p class="posologieDrogueInduction">Posologie proposée : 20 µg/kg</p>\n          Morphine en PCA : {{AdminMorphinePCA}} mg IVL\n          <p class="dilutionDrogueInduction">PR de 5 min, dose max : {{AdminMorphinePCAMax}} mg (400 µg/kg) par 4h</p> \n        </ion-label>\n      </ion-item> \n\n      <ion-item class="avecAMM">\n        <ion-label class="drogueInduction">\n          <p class="posologieDrogueInduction">Posologie proposée : LP 1 mg/kg PO ou standard 0,1 mg/kg</p>\n          Morphine per os :\n          <p class="dilutionDrogueInduction">- {{AdminMorphinePOLP}} mg LP toutes les 12h (1 mg/kg) PO</p> \n          <p class="dilutionDrogueInduction">- {{AdminMorphinePOID}} mg toutes les 4h SB (0,1 mg/kg) PO</p> \n        </ion-label>\n      </ion-item> \n\n      <div class="AMM">AMM <br> > 6 mois</div>  \n\n    </ion-card>\n\n\n      <ion-item-divider (click)="ToggleAutres()">\n        <ion-label color="dark-turquoise">Autres antalgiques\n\n          <ion-icon *ngIf="!isShownAutres" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n          <ion-icon *ngIf="isShownAutres" class="OpenCloseIcon" name="close"  style="zoom:0.9"></ion-icon>\n\n        </ion-label>\n      </ion-item-divider>\n  \n      <ion-card *ngIf="isShownAutres" class="drogueContainer">\n\n      <ion-item class="avecAMM">\n        <ion-label class="drogueInduction">\n          <p class="posologieDrogueInduction">Posologie proposée : 5 mg/kg</p>\n          Gabapentine (Neurontin<span>&#174;</span>) : {{AdminNeurontin}} mg PO\n          <p class="dilutionDrogueInduction">Toutes les 8h</p> \n          <p class="comment">NB : comprimés de 150 ou 300 mg</p>\n        </ion-label>\n      </ion-item>\n\n      <div class="AMM">AMM <br> > 6 ans</div>\n\n      <ion-item>\n        <ion-label class="drogueInduction">\n          <p class="posologieDrogueInduction">Posologie proposée : IV 0,5 mg/kg, PO 1,5 mg/kg </p>\n          Phloroglucinol (Spasfon<span>&#174;</span>) :\n          <p class="dilutionDrogueInduction">- {{AdminSpasfonIV}} mg IVL, toutes les 6h</p> \n          <p class="dilutionDrogueInduction">- {{AdminSpasfonPO}} mg PO, toutes les 6h</p> \n        </ion-label>\n      </ion-item>\n\n      <ion-item class="avecAMM">\n        <ion-label class="drogueInduction">\n          <p class="posologieDrogueInduction">Posologie proposée : 0,5 mg/kg</p>\n          Amitryptiline (Laroxyl<span>&#174;</span>) : {{AdminLaroxylIV}} mg\n          <p class="dilutionDrogueInduction">IVSE sur 6h ou PO, 1 fois par jour</p> \n        </ion-label>\n      </ion-item>\n\n      <div class="AMM">AMM <br> > 6 ans</div>\n\n      <ion-item>\n        <ion-label class="drogueInduction">\n          <p class="posologieDrogueInduction">Posologie proposée : 0,01 mg/kg</p>\n          Clonazepam (Rivotril<span>&#174;</span>) : {{AdminRivotrilPO}} mg PO\n          <p class="dilutionDrogueInduction">Toutes les 8h</p> \n          <p class="comment">- soit <b>{{GouttesRivotril}} gouttes</b> (1 gtte/10kg), 3 fois par jour</p> \n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label class="drogueInduction">\n          <p class="posologieDrogueInduction">Posologie proposée : IVSE 0,5 µg/kg/h ou PO 5 µg/kg</p>\n          Catapressan (Clonidine <span>&#174;</span>) : {{AdminClonidineIVSE}} µg/h IVSE \n          <p class="dilutionDrogueInduction">- {{AdminClonidinePO}} mg (5 µg/kg) PO, toutes les 8h</p>\n          <p class="comment">Possibilité de doubler si insuffisant</p>\n        </ion-label>\n      </ion-item>\n\n      </ion-card>\n\n\n      <ion-item-divider (click)="ToggleAntiEmet()">\n        <ion-label color="dark-turquoise">Anti-émétiques\n\n          <ion-icon *ngIf="!isShownAntiEmet" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n          <ion-icon *ngIf="isShownAntiEmet" class="OpenCloseIcon" name="close"  style="zoom:0.9"></ion-icon>\n\n        </ion-label>\n      </ion-item-divider>\n  \n      <ion-card *ngIf="isShownAntiEmet" class="drogueContainer">\n\n      <ion-item class="avecAMM">\n        <ion-label class="drogueInduction">\n          <p class="posologieDrogueInduction">Posologie proposée 0,1 mg/kg</p>\n          Ondansétron (Zophren<span>&#174;</span>) : {{AdminZophren}} mg IVL ou PO\n          <p class="dilutionDrogueInduction">toutes les 8h</p> \n        </ion-label>\n      </ion-item>\n\n      <div class="AMM">AMM <br> > 1 an</div>  \n\n      <ion-item>\n        <ion-label class="drogueInduction">\n          <p class="posologieDrogueInduction">Posologie proposée : 25 µg/kg</p>\n          Dropéridol (Droleptan<span>&#174;</span>) : {{AdminDroleptan}} µg IVL\n          <p class="dilutionDrogueInduction">2 fois par jour maximum</p>\n        </ion-label>\n      </ion-item>\n\n      </ion-card>\n\n      <ion-item-divider (click)="ToggleAntiCoag()">\n        <ion-label color="dark-turquoise">Anti-coagulants\n\n          <ion-icon *ngIf="!isShownAntiCoag" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n          <ion-icon *ngIf="isShownAntiCoag" class="OpenCloseIcon" name="close"  style="zoom:0.9"></ion-icon>\n\n        </ion-label>\n      </ion-item-divider>\n  \n      <ion-card *ngIf="isShownAntiCoag" class="drogueContainer">\n\n      <ion-item>\n        <ion-label class="drogueInduction"><b>Enoxaparine (Lovenox<span>&#174;</span>):</b>\n          <p class="dilutionDrogueInduction">Préventive : {{AdminHBPMpreventive}} UI/j </p>\n          <p class="dilutionDrogueInduction">- Pour 100 UI/kg/j</p>\n          <p class="dilutionDrogueInduction"><b>- Administrer en 2 injections avant 1 mois</b></p>\n          <p class="dilutionDrogueInduction">Curative : {{AdminHBPMefficace}} UI <b>x2/j</b> </p>\n          <p class="dilutionDrogueInduction">- Pour {{PosoHBPMefficace}}</p>\n          <p class="dilutionDrogueInduction"><b>- Obj aXa [0,5-1] ; 4h après 3e inj.</b></p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label class="drogueInduction"><b>HNF efficace :</b>\n    \n          <p class="dilutionDrogueInduction">Bolus : {{AdminHNF50}} à {{AdminHNF100}} UI </p>\n          <p class="dilutionDrogueInduction">- Pour 50 à 100 UI/kg</p>\n      \n          <p class="dilutionDrogueInduction">Entretien : {{AdminHNFentretien}} UI/h</p>\n          <p class="dilutionDrogueInduction">- Pour 20 UI/kg/h</p>\n          <p class="dilutionDrogueInduction"><b>- Obj aXa [0,3-0,6] à H4.</b></p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label class="drogueInduction"><b>Protamine :</b>\n          <br>\n          <p class="dilutionDrogueInduction">1 mg pour 100 UI d\'héparine administrées</p>\n          <p class="dilutionDrogueInduction">IV <b>lent</b> sans dépasser 50mg/10min.</p>\n        </ion-label>\n      </ion-item>\n\n      </ion-card> \n\n    </ion-item-group>\n  </ion-list>\n\n  <p padding class="dilutionDrogueInduction">Suggestion : utilisez les scores pour évaluer les besoins en antalgiques, anti-émétiques ou anti-coagulants.</p> \n  <ion-item><button ion-button small (click)="openScores()" color="pastel-green">Scores</button></ion-item>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\antalgie\antalgie.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AntalgiePage);
    return AntalgiePage;
}());

;
//# sourceMappingURL=antalgie.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrgencePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accueil_accueil__ = __webpack_require__(79);
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
        this.isShownNAD = false;
        this.isShownACR = false;
        this.isShownChocAna = false;
        this.isShownHTM = false;
        this.isShownIAL = false;
        this.isShownMetabo = false;
        this.isShownAAG = false;
        this.isShownHTADiuretiques = false;
        this.isShownCriseConvulsive = false;
        this.isShownAntidotes = false;
    }
    UrgencePage.prototype.retourHome = function () {
        this.navCtrl.pop();
    };
    ;
    /*Chargement des données du formulaire au chargement de la page, alerte si données manquantes*/
    UrgencePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var promiseList = [];
        promiseList.push(this.storage.get('AgeNum').then(function (Age) {
            _this.AgeNum = Age;
            _this.ageLecture = Math.round((_this.AgeNum / 12) * 10) / 10;
            _this.storage.get('PoidsNum').then(function (Poids) {
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
                            _this.storage.get('sexeMF').then(function (sexe) {
                                _this.sexeMF = sexe;
                                if (!sexe) {
                                    _this.sexeMF = "Fille";
                                }
                                ;
                                _this.storage.get('Taille').then(function (Taille) {
                                    _this.Taille = Taille;
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
                                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__accueil_accueil__["a" /* AccueilPage */]);
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
    UrgencePage.prototype.CalculDeltaNa = function () {
        this.DeltaNa = 125 - this.NatremieMesuree;
        this.AdminNa = Math.round((this.DeltaNa * this.PoidsNum * 0.6) * 10) / 10;
    };
    UrgencePage.prototype.calculs = function () {
        /* ACR */
        this.CEEACR = Math.round((this.PoidsNum * 4) * 10) / 10;
        this.PosoAdrenalineACR = Math.round((this.PoidsNum * 10) * 10) / 10;
        this.PosoCordaroneACR = Math.round((this.PoidsNum * 5) * 10) / 10;
        this.PosoBicarACR = Math.round((this.PoidsNum * 2) * 10) / 10;
        /* Anaphylaxie */
        this.PosoAdrenalineAnaph = Math.round((this.PoidsNum * 1) * 10) / 10;
        this.PosoSoluAnaph = Math.round((this.PoidsNum * 1) * 10) / 10;
        /* HTM */
        this.AdminDantroleneHTM = Math.round((this.PoidsNum * 2.5) * 10) / 10;
        /* Intox aux AL */
        this.PosoRivotrilIAL = Math.round((this.PoidsNum * 15) * 10) / 10;
        this.PosoIntralipidesIAL = Math.round((this.PoidsNum * 3) * 10) / 10;
        /* Desordres métaboliques  */
        this.AdminG10Initial = Math.round((this.PoidsNum * 3) * 10) / 10;
        this.AdminG10Suite = Math.round((this.PoidsNum * 0.4) * 10) / 10;
        this.AdminGluconateCa = Math.round((this.PoidsNum * 2) * 10) / 10;
        this.AdminInsulineHyperK = Math.round((this.PoidsNum * 0.1) * 10) / 10;
        this.AdminG10HyperK = Math.round((this.PoidsNum * 10) * 10) / 10;
        /* Asthme aigu grave  */
        if (this.PoidsNum <= 20) {
            this.AerosolSalbutamolAAG = 2.5;
        }
        else {
            this.AerosolSalbutamolAAG = 5;
        }
        ;
        if (this.AgeNum < 72) {
            this.AerosolAtroventAAG = 0.25;
        }
        else {
            this.AerosolAtroventAAG = 0.5;
        }
        ;
        this.AdminSolumedrolAAG = Math.round((this.PoidsNum * 2) * 10) / 10;
        this.IVSESolumedrolAAG = Math.round((this.PoidsNum * 0.5) * 10) / 10;
        this.MgSO4AAG = Math.round((this.PoidsNum * 40) * 10) / 10;
        if (this.MgSO4AAG >= 2000) {
            this.MgSO4AAG = 2000;
        }
        ;
        this.SalbutamolIVAAG = Math.round((this.PoidsNum * 0.5) * 10) / 10;
        this.AdminKClAAG = Math.round((this.PoidsNum * 2) * 10) / 10;
        this.AdminKClAAGmg = Math.round((this.PoidsNum * 150) * 10) / 10;
        if (this.AdminKClAAGmg >= 4000) {
            this.AdminKClAAGmg = 4000;
        }
        ;
        if (this.PoidsNum <= 10) {
            this.ApportBaseHoraire = Math.round(4 * this.PoidsNum);
        }
        else if (this.PoidsNum <= 20) {
            this.ApportBaseHoraire = Math.round(40 + (this.PoidsNum - 10) * 2);
        }
        else if (this.PoidsNum > 20) {
            this.ApportBaseHoraire = Math.round(60 + (this.PoidsNum - 20));
        }
        ;
        this.ApportBaseJour = Math.round((this.ApportBaseHoraire * 24) * 10) / 10;
        this.AerosolBricanylAAG = Math.round((this.PoidsNum * 0.2) * 10) / 10;
        if (this.AerosolBricanylAAG >= 5) {
            this.AerosolBricanylAAG = 5;
        }
        ;
        /* HTA & diurétiques  */
        this.LoxenIVSE = Math.round((this.PoidsNum * 60) * 10) / 10;
        this.SectralPO = Math.round((this.PoidsNum * 2) * 10) / 10;
        this.TrandateBolus = Math.round((this.PoidsNum * 0.3) * 10) / 10;
        this.TrandateIVSE = Math.round((this.PoidsNum * 2) * 10) / 10;
        this.AdminRenitec = Math.round((this.PoidsNum * 50) * 10) / 10;
        if (this.AdminRenitec >= 5000) {
            this.AdminRenitec = 5000;
        }
        ;
        this.AdminLasilix = Math.round((this.PoidsNum * 1) * 10) / 10;
        this.AdminBurinexIVSE = Math.round((this.PoidsNum * 10) * 10) / 10;
        this.AdminAldactoneMin = Math.round((this.PoidsNum * 1) * 10) / 10;
        this.AdminAldactoneMax = Math.round((this.PoidsNum * 5) * 10) / 10;
        /* Anticonvulsivants  */
        this.AdminRivotrilConvulsion = Math.round((this.PoidsNum * 20) * 10) / 10;
        this.AdminGardenal = Math.round((this.PoidsNum * 15) * 10) / 10;
        if (this.AdminGardenal >= 500) {
            this.AdminGardenal = 500;
        }
        ;
        this.AdminDilantin = Math.round((this.PoidsNum * 20) * 10) / 10;
        if (this.AdminDilantin >= 1500) {
            this.AdminDilantin = 1500;
        }
        ;
        this.AdminMidazolamConvulsion = Math.round((this.PoidsNum * 0.25) * 10) / 10;
        this.AdminKeppra = Math.round((this.PoidsNum * 30) * 10) / 10;
        if (this.AdminKeppra >= 2000) {
            this.AdminKeppra = 2000;
        }
        ;
        /** ANTIDOTES */
        this.AdminNarcan = Math.round((this.PoidsNum * 10) * 10) / 10;
        this.AdminAnexate = Math.round((this.PoidsNum * 10) * 10) / 10;
        this.AdminNAC1 = Math.round((this.PoidsNum * 150) * 10) / 10;
        this.AdminNAC2 = Math.round((this.PoidsNum * 50) * 10) / 10;
        this.AdminNAC3 = Math.round((this.PoidsNum * 100) * 10) / 10;
        this.AdminNAC4 = Math.round((this.PoidsNum * 150) * 10) / 10;
        /** NAD */
        if (this.PoidsNum <= 30) {
            this.ProtocoleNAD = "3 mg/kg dans 50 mL";
            this.QuantiteNAD = Math.round(this.PoidsNum * 3 * 10) / 10;
            this.VolumeNAD = Math.round(this.QuantiteNAD / 2 * 10) / 10;
            this.AmpoulesNAD = Math.round(this.VolumeNAD / 4 * 10) / 10;
            this.VolumeSerumPhyNAD = Math.round((50 - this.VolumeNAD) * 10) / 10;
            this.DebitNADmlh = 1;
            this.DebitNADµgkgmin = 1;
            this.DebitNADmgh = Math.round((this.PoidsNum * 60 / 1000) * 10) / 10;
        }
        else if (this.PoidsNum <= 60) {
            this.ProtocoleNAD = "1,5 mg/kg dans 50 mL";
            this.QuantiteNAD = Math.round(this.PoidsNum * 1.5 * 10) / 10;
            this.VolumeNAD = Math.round(this.QuantiteNAD / 2 * 10) / 10;
            this.AmpoulesNAD = Math.round(this.VolumeNAD / 4 * 10) / 10;
            this.VolumeSerumPhyNAD = Math.round((50 - this.VolumeNAD) * 10) / 10;
            this.DebitNADmlh = 2;
            this.DebitNADµgkgmin = 1;
            this.DebitNADmgh = Math.round((this.PoidsNum * 60 / 1000) * 10) / 10;
        }
        else {
            this.ProtocoleNAD = "0,6 mg/kg dans 50 mL";
            ;
            this.QuantiteNAD = Math.round(this.PoidsNum * 0.6 * 10) / 10;
            this.VolumeNAD = Math.round(this.QuantiteNAD / 2 * 10) / 10;
            this.AmpoulesNAD = Math.round(this.VolumeNAD / 4 * 10) / 10;
            this.VolumeSerumPhyNAD = Math.round((50 - this.VolumeNAD) * 10) / 10;
            this.DebitNADmlh = 5;
            this.DebitNADµgkgmin = 1;
            this.DebitNADmgh = Math.round((this.PoidsNum * 60 / 1000) * 10) / 10;
        }
        ;
    };
    ;
    /**NAD PREPARATION */
    UrgencePage.prototype.toggleNAD = function () {
        this.isShownNAD = !this.isShownNAD;
    };
    /* Toggle des cartes */
    UrgencePage.prototype.ToggleAntidotes = function () {
        this.isShownAntidotes = !this.isShownAntidotes;
    };
    UrgencePage.prototype.ToggleACR = function () {
        this.isShownACR = !this.isShownACR;
    };
    ;
    UrgencePage.prototype.ToggleChocAna = function () {
        this.isShownChocAna = !this.isShownChocAna;
    };
    ;
    UrgencePage.prototype.ToggleHTM = function () {
        this.isShownHTM = !this.isShownHTM;
    };
    ;
    UrgencePage.prototype.ToggleIAL = function () {
        this.isShownIAL = !this.isShownIAL;
    };
    ;
    UrgencePage.prototype.ToggleMetabo = function () {
        this.isShownMetabo = !this.isShownMetabo;
    };
    ;
    UrgencePage.prototype.ToggleAAG = function () {
        this.isShownAAG = !this.isShownAAG;
    };
    ;
    UrgencePage.prototype.ToggleHTADiuretiques = function () {
        this.isShownHTADiuretiques = !this.isShownHTADiuretiques;
    };
    ;
    UrgencePage.prototype.ToggleCriseConvulsive = function () {
        this.isShownCriseConvulsive = !this.isShownCriseConvulsive;
    };
    ;
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
            selector: 'page-urgence',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\urgence\urgence.html"*/'<ion-content>\n\n        <!-- HEADER MENU  -->\n        <div class="header"> \n\n          <div (click)="retourHome()" class="backButton">\n          <ion-icon start color="turquoise-fonce" name="arrow-back"></ion-icon>\n          Retour\n          </div>\nProtocoles & posologies pour les urgences</div>\n            <br>\n      \n                  <!-- HEADER MON PATIENT  -->\n  \n            <ion-item color="turquoise-fonce"> \n              <ion-label>\n                <p class="MonPatient">{{sexeMF}} - {{ageLecture}} ans ( = {{AgeNum}} mois) - {{PoidsNum}} kg - {{Taille}} cm</p> \n                <p class="MonPatient">Estomac {{EstomacOuiNon}} - Jeune {{DureeJeune}} h</p>\n                <p class="MonPatient">Allergie : {{Allergie}}</p></ion-label> \n            </ion-item>\n        \n            <br>\n       <!-- END HEADER -->\n\n<ion-list>\n\n  <ion-item (click)="toggleNAD()" ><ion-label color="dark-turquoise">\n    <ion-icon start name="flask"></ion-icon>\n    &nbsp;&nbsp; Préparation noradrénaline\n    <ion-icon *ngIf="!isShownNAD" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n    <ion-icon *ngIf="isShownNAD" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n  </ion-label></ion-item>\n\n\n  <ion-card class="drogueContainer" *ngIf="isShownNAD">\n    <ion-card-content>\n\n\n      <ion-item>\n        <ion-label class="drogueInduction" color="dark">\n          <p class="comment">Patient de {{PoidsNum}} kg</p>\n          <p class="dilutionDrogueInduction">Protocole proposé : {{ProtocoleNAD}}</p>\n          Noradrénaline (8mg/4mL) : <b>{{QuantiteNAD}}mg/50mL</b>\n          <p class="dilutionDrogueInduction">Préparation : </p>\n          <p class="dilutionDrogueInduction">{{VolumeNAD}}mL de NAD (= {{AmpoulesNAD}} ampoules de 4mL)</p>\n          <p class="dilutionDrogueInduction">+ {{VolumeSerumPhyNAD}}mL de NaCl 0,9%</p>\n          <p class="dilutionDrogueInduction"><b>Débuter à {{DebitNADmlh}} mL/h = 1 µg/kg/min (soit {{DebitNADmgh}} mg/h)</b></p>\n        </ion-label>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n    <ion-item  (click)="ToggleACR()">\n        <ion-label color="danger"><ion-icon start name="medkit"></ion-icon>\n          &nbsp;&nbsp; Arrêt cardio-respiratoire\n        <ion-icon *ngIf="!isShownACR" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n        <ion-icon *ngIf="isShownACR" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n        </ion-label>\n    </ion-item>\n\n        <ion-card class="drogueContainer" *ngIf="isShownACR">\n          <ion-card-content>\n          <p>1. Appel à l\'aide (RDB <b>3535</b>).</p>\n          <p>2. Débuter le massage cardiaque externe.</p>\n          <p>3. Ventiler en FiO2 1.</p>\n          <br>\n          <h4>Posologies ACR : </h4>\n\n        <ion-item>\n          <ion-label class="drogueInduction" color="danger">\n            Adrénaline : <b>{{PosoAdrenalineACR}} µg</b> - IVD/5 minutes\n            <p class="dilutionDrogueInduction">- 10 µg/kg, renouvellable</p>\n            <p>- d\'emblée si asystolie, au 3e choc si TV/FV</p>\n          </ion-label>\n        </ion-item>\n\n        <ion-item>\n          <ion-label class="drogueInduction" color="danger">\n            CEE : <b>{{CEEACR}} J</b> \n            <p class="dilutionDrogueInduction">- 4 J/kg</p>\n          </ion-label>\n        </ion-item>\n\n        <ion-item>\n          <ion-label class="drogueInduction" color="dark">\n            Cordarone : <b>{{PosoCordaroneACR}} mg</b> - IVD \n            <p class="dilutionDrogueInduction">- 5 mg/kg</p>\n            <p class="dilutionDrogueInduction">- renouvelable 1 fois après 5 min</p>\n          </ion-label>\n        </ion-item>\n\n        <ion-item>\n          <ion-label class="drogueInduction" color="dark">\n            Bicar 4,2% : <b>{{PosoBicarACR}} mL</b> - IVL \n            <p class="dilutionDrogueInduction">- 2 mL/kg dès la 15e minute</p>\n          </ion-label>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n\n\n    <ion-item (click)="ToggleHTM()">\n      <ion-label color="warning"><ion-icon start name="alert"></ion-icon>\n        &nbsp;&nbsp; Hyperthermie maligne\n        <ion-icon *ngIf="!isShownHTM" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n        <ion-icon *ngIf="isShownHTM" class="OpenCloseIcon" name="close"  style="zoom:0.9"></ion-icon>\n      </ion-label>\n    </ion-item>\n\n      <ion-card class="drogueContainer" *ngIf="isShownHTM">\n      <ion-card-content>\n        <p  class="drogueInduction">Evoquer devant  :\n          <p class="dilutionDrogueInduction">- augmentation importante et inexpliquée de l\'EtCO2, de la FC ou de la température</p>\n          <p class="dilutionDrogueInduction">- apparition d\'une rigidité musculaire des masséters, du tronc ou des membres.</p>\n          <br>\n        <p  class="drogueInduction">Conduite à tenir en cas de suspicion :</p>\n        <p class="dilutionDrogueInduction">- Arrêt halogénés, changement des filtres et tuyaux</p>\n        <p class="dilutionDrogueInduction">- Hyperventilation en FiO2 1</p>\n        <p class="dilutionDrogueInduction">- Contre indication absolue celocurine jusqu\'à preuve du contraire</p>\n        <p class="dilutionDrogueInduction">- Dantrolène <b>{{AdminDantroleneHTM}} mg IVL</b> (soit 2,5 mg/kg, renouvelable 4 fois max) à diluer dans de l\'<b>EPPI</b></p>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-item (click)="ToggleChocAna()">\n      <ion-label color="dark-turquoise"><ion-icon start name="clipboard"></ion-icon>\n        &nbsp;&nbsp; Anaphylaxie\n        <ion-icon *ngIf="!isShownChocAna" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n          <ion-icon *ngIf="isShownChocAna" class="OpenCloseIcon" name="close"  style="zoom:0.9"></ion-icon>\n      </ion-label>\n    </ion-item>\n\n    <ion-card class="drogueContainer" *ngIf="isShownChocAna">\n      <ion-card-content >\n        <p class="drogueInduction">Réaction anaphylactique de grade 2 ou 3 si : </p>\n            <p class="dilutionDrogueInduction">- Hypotension : -30% PAS référence</p> \n            <p class="dilutionDrogueInduction">- Tachycardie : +30% FC référence</p> \n            <p class="dilutionDrogueInduction">- Oedeme de Quincke ou bronchospasme</p>\n        \n        <br>\n        <p class="drogueInduction">Mesures à mettre en place :</p>\n        <p class="dilutionDrogueInduction">- éviction de tout allergène suspecté,</p>\n        <p class="dilutionDrogueInduction">- adrénaline : <b>{{PosoAdrenalineAnaph}} µg IVD</b>, renouvelable 5 à 10 fois,</p>\n        <p class="dilutionDrogueInduction">- solumédrol : <b>{{PosoSoluAnaph}} mg IVD</b>, renouvelable 1 fois,</p>\n        <p class="dilutionDrogueInduction">- prévoir bilan allergo-immunologique après contrôle de la situation clinique.</p>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-item (click)="ToggleIAL()">\n      <ion-label color="dark-turquoise"><ion-icon start name="clipboard"></ion-icon>\n        &nbsp;&nbsp; Intoxication aux AL\n        <ion-icon *ngIf="!isShownIAL" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n        <ion-icon *ngIf="isShownIAL" class="OpenCloseIcon" name="close"  style="zoom:0.9"></ion-icon>\n      </ion-label>\n      </ion-item>\n\n      <ion-card *ngIf="isShownIAL" class="drogueContainer">\n      <ion-card-content>\n        <p class="drogueInduction">Devant toute suspicion, en présence de signes neurologiques :</p>\n        <p class="dilutionDrogueInduction">- Rivotril : <b>{{PosoRivotrilIAL}} µg IVD</b> (soit 15 µg/kg)</p>\n        <p class="dilutionDrogueInduction">- Intralipides 20% : <b>{{PosoIntralipidesIAL}} mL IVL</b> (soit 3mL/kg), renouvelable</p>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-item (click)="ToggleMetabo()">\n      <ion-label color="dark-turquoise"><ion-icon start name="clipboard"></ion-icon>\n        &nbsp;&nbsp; Désordres métaboliques\n        <ion-icon *ngIf="!isShownMetabo" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n        <ion-icon *ngIf="isShownMetabo" class="OpenCloseIcon" name="close"  style="zoom:0.9"></ion-icon>\n      </ion-label>\n      </ion-item>\n\n      <ion-card *ngIf="isShownMetabo" class="drogueContainer">\n      <ion-card-content>\n\n        <p class="drogueInduction"><b>Hypoglycémie &lt; 3 mmol/L</b> :</p>\n        <p class="dilutionDrogueInduction">- G10% : <b>{{AdminG10Initial}} mL</b> sur 5 minutes (3 mL/kg)</p>\n        <p class="dilutionDrogueInduction">- puis G10% : <b>{{AdminG10Suite}} mL/min</b> IVSE jusqu\'à normalisation (0,4 mL/kg/min).</p>\n        \n        <hr>\n        <p class="drogueInduction"><b>Hyponatrémie &lt; 125 mmol/L & symptomatique </b>:</p>\n        <ion-item>\n          <ion-label class="dilutionDrogueInduction" position="stacked">Natrémie mesurée</ion-label>\n          <ion-input class="dilutionDrogueInduction" inputmode ="number" type="number" (ionChange)="CalculDeltaNa(NatremieMesuree)" [(ngModel)]="NatremieMesuree" placeholder="Renseigner"></ion-input>\n        </ion-item>\n        <p class="dilutionDrogueInduction">- Le delta sodium est de {{DeltaNa}} mM.</p>\n        <p class="dilutionDrogueInduction">- Sodium IVD : <b>{{AdminNa}} mEq</b> IVD jusqu\'à amélioration des symptomes (Delta x Poids x 0,6)</p>\n        <p class="dilutionDrogueInduction">- puis Sodium IVSE : <b>{{AdminNa}} mEq/4h</b> IVSE jusqu\'à normalisation de la natrémie</p>\n        <p class="dilutionDrogueInduction">- Utiliser du SSH (NaCl 20%) pour limiter les apports hydriques.</p>\n       \n        <hr>\n        <p class="drogueInduction"><b>Hyperkaliémie menaçante </b>:</p>\n        <p class="dilutionDrogueInduction">- Arrêt des apports</p>\n        <p class="dilutionDrogueInduction">- Si arythmie cardiaque : gluconate de calcium {{AdminGluconateCa}} mL IVD (2 mL/kg)</p>\n        <p class="dilutionDrogueInduction">- Traitement hypokaliémiant : insuline {{AdminInsulineHyperK}} UI (0,1 UI/kg) + G10 {{AdminG10HyperK}} mL (10 mL/kg) IVL sur 15 minutes</p>\n        \n      \n      \n      </ion-card-content>\n    </ion-card> \n\n    <ion-item (click)="ToggleAAG()">\n      <ion-label color="dark-turquoise"><ion-icon start name="clipboard"></ion-icon>\n        &nbsp;&nbsp; Asthme aigu grave\n        <ion-icon *ngIf="!isShownAAG" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n        <ion-icon *ngIf="isShownAAG" class="OpenCloseIcon" name="close"  style="zoom:0.9"></ion-icon>\n      </ion-label>\n      </ion-item>\n\n      <ion-card *ngIf="isShownAAG" class="drogueContainer">\n      <ion-card-content>\n        <p class="drogueInduction">- <b>Penser à l\'hydratation & au potassium !</b></p>\n        <p class="comment">NaCl 0,9% {{ApportBaseJour}} mL/j + KCl {{AdminKClAAGmg}} mg/j (pour 150 mg/kg/j)</p>\n        <p class="comment">Remplacer après 24h par du B26</p>\n        <br>\n        <p class="drogueInduction">- <b>Salbutamol aérosol (Ventoline®): {{AerosolSalbutamolAAG}} mg</b></p>\n        <p class="comment">Renouvelable après 15 minutes</p>\n        <br>\n        <p class="posologieDrogueInduction">Posologie proposée : 2 mg/kg</p>\n        <p class="drogueInduction">- <b>Solumédrol (20 mg/2mL) : {{AdminSolumedrolAAG}} mg en bolus</b></p>\n        <p class="comment">Puis entretien par {{IVSESolumedrolAAG}} mg/6h IVSE (pour 0,5 mg/kg/6h)</p>\n        <br>\n        <p class="posologieDrogueInduction">Posologie proposée : 1/2 à 1 flacon</p>\n        <p class="drogueInduction">- <b>Ipratropium (Atrovent® 0,5 mg/2mL) : {{AerosolAtroventAAG}} mg en aérosol</b></p>\n        <br>\n        <p class="posologieDrogueInduction">Posologie proposée : 0,2 mg/kg</p>\n        <p class="drogueInduction">- <b>Terbutaline (Bricanyl® 5mg/2mL) : {{AerosolBricanylAAG}} mg en aérosol </b></p> \n        <br>\n        <p class="posologieDrogueInduction">Posologie proposée : 40 mg/kg sans dépasser 2g</p>\n        <p class="drogueInduction">- <b>MgSO4 (1,5g/10mL) : {{MgSO4AAG}} mg IVL sur 20 minutes</b></p>\n        <p class="comment">A diluer dans du NaCl 0,9%</p>\n        <br>\n        <p class="posologieDrogueInduction">Posologie proposée : 0,5 µg/kg/min</p>\n        <p class="drogueInduction">- <b>Salbutamol (5 mg/5 mL) : {{SalbutamolIVAAG}} µg/min IVSE</b></p>\n        <p class="comment">Possibilité d\'augmenter de 0,1 µg/kg/min toutes les 10 minutes</p>\n        <p class="comment">Ne s\'envisage qu\'en secteur de réanimation</p>\n        <p class="comment">Ne pas administrer pur, dilution minimale de 1/2</p>\n        <br>\n        \n      </ion-card-content>\n    </ion-card> \n\n    <ion-item (click)="ToggleHTADiuretiques()">\n      <ion-label color="dark-turquoise"><ion-icon start name="clipboard"></ion-icon>\n        &nbsp;&nbsp; Hypertension & diurétiques\n        <ion-icon *ngIf="!isShownHTADiuretiques" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n        <ion-icon *ngIf="isShownHTADiuretiques" class="OpenCloseIcon" name="close"  style="zoom:0.9"></ion-icon>\n      </ion-label>\n      </ion-item>\n\n      <ion-card *ngIf="isShownHTADiuretiques" class="drogueContainer">\n      <ion-card-content>\n        <p class="posologieDrogueInduction">Posologie proposée : 60 µg/kg/h</p>\n        <p class="drogueInduction">- <b>Nicardipine (Loxen® 1 mg/mL) : {{LoxenIVSE}} µg/h IVSE </b></p>\n        <p class="comment">Possibilité de doubler la dose si insuffisant</p>\n        <br>\n        <p class="posologieDrogueInduction">Posologie proposée : 2 mg/kg/j en deux prises</p>\n        <p class="drogueInduction">- <b>Acebutolol (Sectral®) : {{SectralPO}} mg/j PO</b></p>\n        <p class="comment">A répartir sur 2 prises PO</p>\n        <br>\n        <p class="posologieDrogueInduction">Posologie proposée : 0,3 mg/kg/prise</p>\n        <p class="drogueInduction">- <b>Labétolol (Trandate®) : {{TrandateBolus}} mg IVL</b></p>\n        <p class="comment">En IVSE : {{TrandateIVSE}} mg/j (pour 2 mg/kg/j), possibilité d\'augmenter jusqu\'à 24 mg/kg/j </p>\n        <br>\n        <p class="posologieDrogueInduction">Posologie proposée : 50 µg/kg/j en deux prises</p>\n        <p class="drogueInduction">- <b>Enalapril (Renitec®) : {{AdminRenitec}} µg/j PO</b></p>\n        <p class="comment">Sans dépasser 5 mg/j</p>\n        <br>\n        <p class="posologieDrogueInduction">Posologie proposée : 1 mg/kg/prise</p>\n        <p class="drogueInduction">- <b>Furosémide (Lasilix® 10 mg/mL) : {{AdminLasilix}} mg PO ou IV</b></p>\n        <p class="comment">AMM : 4 mg/kg/j maximum, soit 1 prise/6h maximum</p>\n        <br>\n        <p class="posologieDrogueInduction">Posologie proposée : 10 µg/kg/h</p>\n        <p class="drogueInduction">- <b>Bumétanide (Burinex® 500 µg/mL) : {{AdminBurinexIVSE}} mg/h IVSE</b></p>\n        <p class="comment">Possibilité de doubler la dose si insuffisant</p>\n        <br>\n        <p class="posologieDrogueInduction">Posologie proposée : 1 à 5 mg/kg/j</p>\n        <p class="drogueInduction">- <b>Spironolactone (Aldactone®) : {{AdminAldactoneMin}} - {{AdminAldactoneMax}} mg/j PO</b></p>\n        <br>\n\n      </ion-card-content>\n    </ion-card> \n\n    <ion-item (click)="ToggleCriseConvulsive()">\n      <ion-label color="dark-turquoise"><ion-icon start name="clipboard"></ion-icon>\n        &nbsp;&nbsp; Crises convulsives\n        <ion-icon *ngIf="!isShownCriseConvulsive" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n        <ion-icon *ngIf="isShownCriseConvulsive" class="OpenCloseIcon" name="close"  style="zoom:0.9"></ion-icon>\n      </ion-label>\n      </ion-item>\n\n      <ion-card *ngIf="isShownCriseConvulsive" class="drogueContainer">\n      <ion-card-content>\n        <p class="posologieDrogueInduction">Posologie proposée : 20 µg/kg/prise</p>\n        <p class="drogueInduction">- <b>Clonazépam (Rivotril® 1 mg/mL) : {{AdminRivotrilConvulsion}} µg IVD </b></p>\n        <p class="comment">Répéter une seconde fois si nécessaire</p>\n        <p class="comment">{{AdminRivotrilConvulsion}} mg/6h IVSE si nécessaire</p>\n        <br>\n        <p class="posologieDrogueInduction">Posologie proposée : 15 mg/kg/j prise</p>\n        <p class="drogueInduction">- <b>Phénobarbital (Gardénal® 40 mg/2mL) : {{AdminGardenal}} mg IVL sur 20 minutes </b></p>\n        <p class="comment">Sans dépasser 500 mg/administration</p>\n        <br>\n        <p class="posologieDrogueInduction">Posologie proposée : 20 mg/kg/prise</p>\n        <p class="drogueInduction">- <b>Phénytoïne (Dilantin® 250 µg/5mL) : {{AdminDilantin}} mg IVL sur 20 minutes </b></p>\n        <p class="comment">Sans dépasser 1500 mg/administration</p>\n        <br>\n        <p class="posologieDrogueInduction">Posologie proposée : 0,25 mg/kg/prise</p>\n        <p class="drogueInduction">- <b>Midazolam (Hypnovel® 1 mg/mL) : {{AdminMidazolamConvulsion}} mg IVD</b></p>\n        <br>\n        <p class="posologieDrogueInduction">Posologie proposée : 30 mg/kg/12h</p>\n        <p class="drogueInduction">- <b>Lévétiracetam (Keppra® 100 mg/mL) : {{AdminKeppra}} mg IVL sur 5 min ou PO</b></p>\n        <p class="comment">Sans dépasser 2g/j</p>\n        <br>\n\n      </ion-card-content>\n    </ion-card> \n\n    <ion-item (click)="ToggleAntidotes()">\n      <ion-label color="dark-turquoise"><ion-icon start name="clipboard"></ion-icon>\n        &nbsp;&nbsp; Intoxications & antidotes\n        <ion-icon *ngIf="!isShownAntidotes" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n        <ion-icon *ngIf="isShownAntidotes" class="OpenCloseIcon" name="close"  style="zoom:0.9"></ion-icon>\n      </ion-label>\n      </ion-item>\n\n      <ion-card *ngIf="isShownAntidotes" class="drogueContainer">\n      <ion-card-content>\n        <p class="dilutionDrogueInduction">Intoxication aux opiacés</p>\n        <p class="posologieDrogueInduction">Posologie proposée : 10 µg/kg dans 10 mL</p>\n        <p class="drogueInduction"><b>Naloxone (Narcan® 0,4mg/mL) : {{AdminNarcan}} mg IVL </b></p>\n        <p class="comment">Injecter 1 mL/30 secondes jusqu\'à efficacité</p>\n        <br>\n        <p class="dilutionDrogueInduction">Intoxication aux benzodiazépines</p>\n        <p class="posologieDrogueInduction">Posologie proposée : 10 µg/kg sur 10 minutes</p>\n        <p class="drogueInduction"><b>Flumazénil (Anexate® 0,1mg/mL) : {{AdminAnexate}} mg IVL </b></p>\n        <p class="comment">Puis entretien 10 µg/kg/h IVSE</p>\n        <br>        \n        <p class="dilutionDrogueInduction">Intoxication au paracétamol</p>\n        <p class="drogueInduction"><b>N-acetyl-cystéine (5g/25mL) : protocole </b></p>\n        <p class="comment">1. 150 mg/kg/15min = {{AdminNAC1}} mg en 15 minutes</p>\n        <p class="comment">2. 50 mg/kg/4h = {{AdminNAC2}} mg en 4 heures</p>\n        <p class="comment">3. 100 mg/kg/20h = {{AdminNAC3}} mg en 20 heures</p>\n        <p class="comment">4. 150 mg/kg/j = {{AdminNAC4}} par jour</p>\n        <br>\n\n      </ion-card-content>\n    </ion-card> \n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\urgence\urgence.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], UrgencePage);
    return UrgencePage;
}());

//# sourceMappingURL=urgence.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonitoragePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(18);
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



var MonitoragePage = /** @class */ (function () {
    function MonitoragePage(navCtrl, navParams, storage, alertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertController = alertController;
        this.isShownConstantes = false;
        this.isShownDispositifs = false;
        this.isShownANI = false;
        this.isShownBilans = false;
    }
    MonitoragePage.prototype.retourHome = function () {
        this.navCtrl.pop();
    };
    ;
    MonitoragePage.prototype.ToggleBilans = function () {
        this.isShownBilans = !this.isShownBilans;
    };
    ;
    MonitoragePage.prototype.ToggleConstantes = function () {
        this.isShownConstantes = !this.isShownConstantes;
    };
    ;
    MonitoragePage.prototype.ToggleDispositifs = function () {
        this.isShownDispositifs = !this.isShownDispositifs;
    };
    ;
    MonitoragePage.prototype.ToggleANI = function () {
        this.isShownANI = !this.isShownANI;
    };
    MonitoragePage.prototype.presentAlert = function () {
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
                                    text: 'Plus tard.',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: Nan');
                                    }
                                }, {
                                    text: 'OK.',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        _this.navCtrl.pop();
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
    MonitoragePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LocoRegionalePage');
    };
    MonitoragePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var promiseList = [];
        promiseList.push(this.storage.get('AgeNum').then(function (Age) {
            _this.AgeNum = Age;
            _this.ageLecture = Math.round((_this.AgeNum / 12) * 10) / 10;
            _this.storage.get('PoidsNum').then(function (Poids) {
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
                            _this.storage.get('sexeMF').then(function (sexe) {
                                _this.sexeMF = sexe;
                                if (!_this.sexeMF) {
                                    _this.sexeMF = "Fille";
                                }
                                ;
                                _this.storage.get('Taille').then(function (Taille) {
                                    _this.Taille = Taille;
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
                });
            });
        }));
    };
    ;
    MonitoragePage.prototype.calculs = function () {
        /*placer les calculs ici*/
        if (this.PoidsNum <= 3) {
            this.SondeDoppler = "Non utilisable";
        }
        else if (this.PoidsNum > 3 && this.PoidsNum <= 60 && this.AgeNum < 180) {
            this.SondeDoppler = "Sonde pédiatrique (KDP72)";
        }
        else {
            this.SondeDoppler = "Sonde adulte";
        }
        ;
        if (this.PoidsNum <= 5) {
            this.CapteurNirs = "Néonatal (CNN/SNN)";
        }
        else if (this.PoidsNum <= 40) {
            this.CapteurNirs = "Pédiatrique (SPFB)";
        }
        else {
            this.CapteurNirs = "Adulte (SAFB)";
        }
        ;
        if (this.PoidsNum <= 10) {
            this.ElectrodesBIS = "Pédiatrique";
        }
        else {
            this.ElectrodesBIS = "Adulte";
        }
        ;
        if (this.PoidsNum <= 2) {
            this.TailleSondeUrinaire = "4 CH sans ballonnet";
        }
        else if (this.PoidsNum <= 4) {
            this.TailleSondeUrinaire = "6 CH avec ballonnet";
        }
        else if (this.PoidsNum <= 25) {
            this.TailleSondeUrinaire = "6 à 10 CH avec ballonnet";
        }
        else if (this.PoidsNum <= 50) {
            this.TailleSondeUrinaire = "12 à 14 CH avec ballonnet";
        }
        else if (this.PoidsNum > 50) {
            this.TailleSondeUrinaire = "14 à 18 CH avec ballonnet";
        }
        if (this.PoidsNum <= 4) {
            this.TailleSondeGastrique = "Calibre 5-6 (longueur 40 cm)";
        }
        else if (this.PoidsNum <= 10) {
            this.TailleSondeGastrique = "Calibre 8-10 (longueur 50 cm)";
        }
        else if (this.PoidsNum <= 25) {
            this.TailleSondeGastrique = "Calibre 12 (longueur 50 cm)";
        }
        else if (this.PoidsNum > 25) {
            this.TailleSondeGastrique = "Calibre 14-16";
        }
        if (this.AgeNum <= 1) {
            this.FCnormale = "90-180";
            this.FCdangerHaut = "> 190";
            this.FCdangerBas = "< 90";
            this.FRnormale = "40";
            this.FRdangerHaut = "> 60";
            this.FRdangerBas = "< 20";
            this.SpO2normale = 100;
            this.SpO2dangerBas = "< 90";
            this.PASnormale = "70-90";
            this.PASdangerHaut = "> 100";
            this.PASdangerBas = "< 60";
            this.PADnormale = "40-50";
            this.PADdangerHaut = "> 50";
            this.PADdangerBas = "< 30";
            this.PAMnormale = "45-55";
            this.PAMdangerHaut = "> 55";
            this.PAMdangerBas = "< 45";
            this.Diuresenormale = Math.round((this.PoidsNum * 2.5) * 10) / 10;
            this.DiuresedangerHaut = "> " + (Math.round((this.PoidsNum * 4) * 10) / 10).toString();
            this.DiuresedangerBas = "< " + (Math.round((this.PoidsNum * 1) * 10) / 10).toString();
            ;
        }
        else if (this.AgeNum <= 24) {
            this.FCnormale = "80-155";
            this.FCdangerHaut = "> 170";
            this.FCdangerBas = "< 80";
            this.FRnormale = 30;
            this.FRdangerHaut = "> 60";
            this.FRdangerBas = "< 20";
            this.SpO2normale = 100;
            this.SpO2dangerBas = "< 90";
            this.PASnormale = "85-105";
            this.PASdangerHaut = "> 110";
            this.PASdangerBas = "< 75";
            this.PADnormale = "50-65";
            this.PADdangerHaut = "> 65";
            this.PADdangerBas = "< 50";
            this.PAMnormale = "65-80";
            this.PAMdangerHaut = "> 80";
            this.PAMdangerBas = "< 60";
            this.Diuresenormale = Math.round((this.PoidsNum * 2.5) * 10) / 10;
            this.DiuresedangerHaut = "> " + (Math.round((this.PoidsNum * 4) * 10) / 10).toString();
            this.DiuresedangerBas = "< " + (Math.round((this.PoidsNum * 1) * 10) / 10).toString();
            ;
        }
        else if (this.AgeNum <= 48) {
            this.FCnormale = "70-140";
            this.FCdangerHaut = "> 160";
            this.FCdangerBas = "< 70";
            this.FRnormale = 20;
            this.FRdangerHaut = "> 40";
            this.FRdangerBas = "< 15";
            this.SpO2normale = 100;
            this.SpO2dangerBas = 92;
            this.PASnormale = "90-110";
            this.PASdangerHaut = "> 130";
            this.PASdangerBas = "< 80";
            this.PADnormale = "50-65";
            this.PADdangerHaut = "> 65";
            this.PADdangerBas = "< 35";
            this.PAMnormale = "65 - 80";
            this.PAMdangerHaut = "> 80";
            this.PAMdangerBas = "< 65";
            this.Diuresenormale = Math.round((this.PoidsNum * 2) * 10) / 10;
            this.DiuresedangerHaut = "> " + (Math.round((this.PoidsNum * 4) * 10) / 10).toString();
            this.DiuresedangerBas = "< " + (Math.round((this.PoidsNum * 1) * 10) / 10).toString();
            ;
        }
        else if (this.AgeNum <= 120) {
            this.FCnormale = "65-125";
            this.FCdangerHaut = "> 140";
            this.FCdangerBas = "< 60";
            this.FRnormale = 18;
            this.FRdangerHaut = "> 30";
            this.FRdangerBas = "< 15";
            this.SpO2normale = 100;
            this.SpO2dangerBas = 92;
            this.PASnormale = "95-115";
            this.PASdangerHaut = "> 140";
            this.PASdangerBas = "< 85";
            this.PADnormale = "55-70";
            this.PADdangerHaut = "> 75";
            this.PADdangerBas = "< 35";
            this.PAMnormale = "70-85";
            this.PAMdangerHaut = "> 90";
            this.PAMdangerBas = "< 70";
            this.Diuresenormale = Math.round((this.PoidsNum * 1.5) * 10) / 10;
            this.DiuresedangerHaut = "> " + (Math.round((this.PoidsNum * 4) * 10) / 10).toString();
            this.DiuresedangerBas = "< " + (Math.round((this.PoidsNum * 1) * 10) / 10).toString();
            ;
        }
        else {
            this.FCnormale = "55-105";
            this.FCdangerHaut = "> 130";
            this.FCdangerBas = "< 50";
            this.FRnormale = 15;
            this.FRdangerHaut = "> 30";
            this.FRdangerBas = "< 10";
            this.SpO2normale = 100;
            this.SpO2dangerBas = 94;
            this.PASnormale = "110-130";
            this.PASdangerHaut = "< 90";
            this.PASdangerBas = "> 160";
            this.PADnormale = "65 - 80";
            this.PADdangerHaut = "> 85";
            this.PADdangerBas = "< 40";
            this.PAMnormale = "80-95";
            this.PAMdangerHaut = "> 100";
            this.PAMdangerBas = "< 80";
            this.Diuresenormale = Math.round((this.PoidsNum * 1) * 10) / 10;
            this.DiuresedangerHaut = "> " + (Math.round((this.PoidsNum * 4) * 10) / 10).toString();
            this.DiuresedangerBas = "< " + (Math.round((this.PoidsNum * 1) * 10) / 10).toString();
            ;
        }
        ;
        if (this.AgeNum <= 1) {
            this.NormeGR = "3,0 - 5,4";
            this.NormeHb = "10,0 - 18,0";
            this.NormeVGM = "85 - 123";
            this.NormePq = "150 - 400";
            this.NormeRetic = "20 - 140";
            this.NormeGB = "5 - 20";
            this.NumberPNN = "1 - 9";
            this.NormeLympho = "2 - 16,5";
        }
        else if (this.AgeNum <= 6) {
            this.NormeGR = "3,1 - 4,5";
            this.NormeHb = "9,5 - 14,1";
            this.NormeVGM = "68 - 108";
            this.NormePq = "200 - 550";
            this.NormeRetic = "40 - 80";
            this.NormeGB = "6 - 18";
            this.NumberPNN = "1 - 6";
            this.NormeLympho = "4 - 12";
        }
        else if (this.AgeNum <= 24) {
            this.NormeGR = "3,7 - 5,5";
            this.NormeHb = "10,5 - 13,5";
            this.NormeVGM = "68 - 86";
            this.NormePq = "200 - 550";
            this.NormeRetic = "40 - 80";
            this.NormeGB = "6 - 17,5";
            this.NumberPNN = "1 - 8,5";
            this.NormeLympho = "3 - 13,5";
        }
        else if (this.AgeNum <= 144) {
            this.NormeGR = "3,9 - 5,2";
            this.NormeHb = "11,1 - 14,7";
            this.NormeVGM = "72 - 87";
            this.NormePq = "166 - 463";
            this.NormeRetic = "40 - 80";
            this.NormeGB = "4 - 14,5";
            this.NumberPNN = "1,5 - 8";
            this.NormeLympho = "1 - 7";
        }
        else {
            this.NormeGR = "4 - 5,6";
            this.NormeHb = "11,3 - 16,6";
            this.NormeVGM = "75 - 102";
            this.NormePq = "160 - 439";
            this.NormeRetic = "40 - 80";
            this.NormeGB = "3,75 - 13";
            this.NumberPNN = "1,5 - 6,3";
            this.NormeLympho = "1,3 - 4,5";
        }
        ;
    };
    ;
    MonitoragePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-monitorage',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\monitorage\monitorage.html"*/'\n\n<ion-content>\n\n        <!-- HEADER MENU  -->\n        <div class="header"> \n\n          <div (click)="retourHome()" class="backButton">\n          <ion-icon start color="turquoise-fonce" name="arrow-back"></ion-icon>\n          Retour\n          </div>\nMonitorage & dispositifs  </div>\n            <br>\n      \n                  <!-- HEADER MON PATIENT  -->\n  \n            <ion-item color="turquoise-fonce"> \n              <ion-label>\n                <p class="MonPatient">{{sexeMF}} - {{ageLecture}} ans ( = {{AgeNum}} mois) - {{PoidsNum}} kg - {{Taille}} cm</p> \n                <p class="MonPatient">Estomac {{EstomacOuiNon}} - Jeune {{DureeJeune}} h</p>\n                <p class="MonPatient">Allergie : {{Allergie}}</p></ion-label> \n            </ion-item>\n        \n            <br>\n       <!-- END HEADER -->\n\n      <ion-item-divider (click)="ToggleConstantes()">\n    <ion-label color="dark-turquoise">Paramètres vitaux selon l\'âge\n  <ion-icon *ngIf="!isShownConstantes" class="OpenCloseIcon" name="open" style="zoom:0.9"></ion-icon>\n  <ion-icon *ngIf="isShownConstantes" class="OpenCloseIcon" name="close"  style="zoom:0.9"></ion-icon>\n    </ion-label>\n  </ion-item-divider> \n\n\n  <ion-grid fixed="true" *ngIf="isShownConstantes">\n    <ion-row class="TableApportsHeader"><ion-col> <span *ngIf="this.AgeNum <= 24">\n      Pour un enfant de {{AgeNum}} mois\n    </span>\n    <span  *ngIf="this.AgeNum > 24 && this.AgeNum > 0">\n      Pour un enfant de {{ageLecture}} ans</span></ion-col></ion-row>\n    <ion-row >\n      <ion-col>\n      </ion-col>\n      <ion-col class="normale">\n        Normale\n      </ion-col>\n      <ion-col class="trophaut">\n        Trop haut\n      </ion-col>\n      <ion-col class="tropbas">\n        Trop bas\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n      <ion-col class="intitules">\n          FC (/min)\n      </ion-col>\n      <ion-col class="normale">\n        {{FCnormale}}\n      </ion-col>\n      <ion-col class="trophaut">\n        {{FCdangerHaut}}\n      </ion-col>\n      <ion-col class="tropbas">\n        {{FCdangerBas}}\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class="intitules" >\n          FR (/min)\n      </ion-col>\n      <ion-col class="normale"> \n        {{FRnormale}}\n      </ion-col>\n      <ion-col class="trophaut">\n        {{FRdangerHaut}}\n      </ion-col>\n      <ion-col class="tropbas">\n        {{FRdangerBas}}\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class="intitules">\n          SpO2 (%)\n      </ion-col>\n      <ion-col class="normale">\n        {{SpO2normale}}\n      </ion-col>\n      <ion-col class="trophaut">\n        -\n      </ion-col>\n      <ion-col class="tropbas">\n        {{SpO2dangerBas}}\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class="intitules">\n          PAS (mmHg)\n      </ion-col>\n      <ion-col class="normale">\n        {{PASnormale}}\n      </ion-col>\n      <ion-col class="trophaut">\n        {{PASdangerHaut}}\n      </ion-col>\n      <ion-col class="tropbas">\n        {{PASdangerBas}}\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class="intitules">\n          PAD (mmHg)\n      </ion-col>\n      <ion-col class="normale">\n        {{PADnormale}}\n      </ion-col>\n      <ion-col class="trophaut">\n        {{PADdangerHaut}}\n      </ion-col>\n      <ion-col class="tropbas">\n        {{PADdangerBas}}\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class="intitules">\n          PAM (mmHg)\n      </ion-col>\n      <ion-col class="normale">\n        {{PAMnormale}}\n      </ion-col>\n      <ion-col class="trophaut">\n        {{PAMdangerHaut}}\n      </ion-col>\n      <ion-col class="tropbas">\n        {{PAMdangerBas}}\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class="intitules">\n          Diurèse (mL/h sur 3h)\n      </ion-col>\n      <ion-col class="normale">\n        {{Diuresenormale}}\n      </ion-col>\n      <ion-col class="trophaut">\n        {{DiuresedangerHaut}}\n      </ion-col>      \n      <ion-col class="tropbas">\n        {{DiuresedangerBas}}\n      </ion-col>\n    </ion-row>\n    </ion-grid>\n\n\n\n    <ion-item-divider (click)="ToggleBilans()">\n      <ion-label color="dark-turquoise">Bilans sanguins\n    <ion-icon *ngIf="!isShownBilans" class="OpenCloseIcon" name="open" style="zoom:0.9"></ion-icon>\n    <ion-icon *ngIf="isShownBilans" class="OpenCloseIcon" name="close"  style="zoom:0.9"></ion-icon>\n      </ion-label>\n    </ion-item-divider> \n\n    <ion-card class="drogueContainer" *ngIf="isShownBilans">\n    <p class="reference">Reference : ANAES - lecture critique de l\'hémogramme - mise à jour 2007.</p>\n\n    <ion-grid fixed="true">\n\n      <ion-row class="TableApportsHeader">\n        <ion-col>\n          Paramètre (Unité)\n        </ion-col>\n        <ion-col *ngIf="this.AgeNum <= 24">\n          Normes à {{AgeNum}} mois\n        </ion-col>\n        <ion-col  *ngIf="this.AgeNum > 24 && this.AgeNum > 0">\n          Normes à {{ageLecture}} ans\n        </ion-col>\n      </ion-row>\n\n      <ion-row class="TableBilansEven">\n        <ion-col>\n          Hématies\n        </ion-col>\n        <ion-col>\n          {{NormeGR}}.10<sup>12</sup>/L\n        </ion-col>\n      </ion-row>\n\n      <ion-row class="TableBilansOdd">\n        <ion-col>\n         Hémoglobinémie\n        </ion-col>\n        <ion-col>\n          {{NormeHb}} g/dL\n        </ion-col>\n      </ion-row>\n\n      <ion-row class="TableBilansEven">\n        <ion-col>\n          VGM\n        </ion-col>\n        <ion-col>\n          {{NormeVGM}} µm<sup>3</sup>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class="TableBilansOdd">\n        <ion-col>\n         Réticulocytes\n        </ion-col>\n        <ion-col>\n          {{NormeRetic}}.10<sup>9</sup>/L\n        </ion-col>\n      </ion-row>\n\n      <ion-row class="TableBilansEven">\n        <ion-col>\n          GB \n        </ion-col>\n        <ion-col>\n          {{NormeGB}}.10<sup>9</sup>/L\n        </ion-col>\n      </ion-row>\n\n      <ion-row class="TableBilansOdd">\n        <ion-col>\n         Neutrophiles\n        </ion-col>\n        <ion-col>\n          {{NormePNN}}.10<sup>9</sup>/L\n        </ion-col>\n      </ion-row>\n\n      <ion-row class="TableBilansEven">\n        <ion-col>\n          Lymphocytes\n        </ion-col>\n        <ion-col>\n          {{NormeLympho}}.10<sup>9</sup>/L\n        </ion-col>\n      </ion-row>\n\n      <ion-row class="TableBilansOdd">\n        <ion-col>\n         Plaquettes\n        </ion-col>\n        <ion-col>\n          {{NormePq}}.10<sup>9</sup>/L\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-card>\n\n    <ion-item-divider (click)="ToggleDispositifs()">\n      <ion-label color="dark-turquoise">Taille des dispositifs\n    <ion-icon *ngIf="!isShownDispositifs" class="OpenCloseIcon" name="open" style="zoom:0.9"></ion-icon>\n    <ion-icon *ngIf="isShownDispositifs" class="OpenCloseIcon" name="close"  style="zoom:0.9"></ion-icon>\n      </ion-label>\n    </ion-item-divider> \n\n    <ion-list *ngIf="isShownDispositifs">\n      <ion-item>\n        <ion-label class="drogueInduction">Doppler Oesophagien\n            <p class="dilutionDrogueInduction">Modele de sonde : {{SondeDoppler}}</p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label class="drogueInduction">NIRS - Stable à +/- 20%\n            <p class="dilutionDrogueInduction">Capteur : {{CapteurNirs}}</p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label class="drogueInduction">BIS - Objectif 40 à 60\n            <p class="dilutionDrogueInduction">Electrodes : {{ElectrodesBIS}}</p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label class="drogueInduction">Sonde urinaire\n            <p class="dilutionDrogueInduction">Taille de sonde : {{TailleSondeUrinaire}}</p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label class="drogueInduction">Sonde gastrique\n            <p class="dilutionDrogueInduction">Taille de sonde : {{TailleSondeGastrique}} </p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n\n    <ion-item-divider (click)="ToggleANI()">\n      <ion-label color="dark-turquoise">Analgesia Monitoring Index (ANI)\n    <ion-icon *ngIf="!isShownANI" class="OpenCloseIcon" name="open" style="zoom:0.9"></ion-icon>\n    <ion-icon *ngIf="isShownANI" class="OpenCloseIcon" name="close"  style="zoom:0.9"></ion-icon>\n      </ion-label>\n    </ion-item-divider> \n\n\n    <ion-card *ngIf="isShownANI" class="drogueContainer">\n      <ion-card-content>\n        <p class="reference">Fabriquant : MDoloris Medical Systems, Lille, France</p> \n        <br>\n        <p class="aideMemoire"><b>Objectif</b> : faciliter la gestion des drogues antalgiques en per-opératoire</p> \n        <br>\n        <p class="aideMemoire"><b>Principe</b> : propose un index d\'activité parasympathique (p&Sigma;) calculé sur la base des variations de l\'espace RR (ECG) au cours du cycle respiratoire. </p> \n        <br>\n        <p class="aideMemoire">\n          <b>Interprétation</b> : réactivité sympathique à une stimulation nociceptive dans les 10 minutes.\n          <br>- p&Sigma; > 70 :  très improbable, envisager une réduction des doses d\'antalgique ;\n          <br>- 50 < p&Sigma; < 70 : peu probable, fenêtre cible ;\n          <br>- p&Sigma; < 50 : très probable, envisager l\'administration d\'antalgique.\n        </p>\n        <br>\n        <p class="aideMemoire"><b>Limites</b> : \n          <br> - arythmie cardiaque\n          <br> - changement de volume courant dans la dernière minute, respiration irrégulière\n          <br> - fréquence respiratoire < 9/minute ou apnée \n          <br> - modification pharmacologique de la fréquence cardiaque : atropine, éphédrine, catécholamines, etc.\n        </p>\n        <br>\n        <p class="aideMemoire"><b>Electrodes & moniteur</b> :</p>\n        <img class="imgAideMemoire" src="/assets/imgs/ani.jpg">\n        <img class="imgANIMoniteur" src="/assets/imgs/animoniteur.png">\n\n\n\n\n      </ion-card-content>\n\n\n    </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\monitorage\monitorage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MonitoragePage);
    return MonitoragePage;
}());

//# sourceMappingURL=monitorage.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourbesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chart_js__);
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





var CourbesPage = /** @class */ (function () {
    function CourbesPage(navCtrl, navParams, storage, alertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertController = alertController;
        this.sexeMF = "Fille";
    }
    /* Poids : obtention du set de données et chargement du graph */
    CourbesPage.prototype.retourHome = function () {
        this.navCtrl.pop();
    };
    ;
    CourbesPage.prototype.setDataPoids = function () {
        if (this.AgeNum <= 12 && this.sexeMF == "Garçon") {
            this.ageLabels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
            this.dataPoidsMediane = [3.4, 4.4, 5.4, 6.2, 6.7, 7.4, 7.9, 8.3, 8.7, 9, 9.4, 9.6, 9.9, 10.2];
            this.dataPoids3 = [2.5, 3.4, 4.2, 5, 5.5, 6, 6.4, 6.8, 7.1, 7.4, 7.6, 7.9, 8, 8.2];
            this.dataPoids97 = [4.7, 5.4, 6.5, 7.5, 8.3, 9, 9.6, 10.2, 10.6, 10.8, 11.4, 11.7, 12, 12.3];
            this.mainColor = "rgba(54, 162, 235, 1)";
            this.bubbleColor = "rgba(54, 162, 235, 1)";
            this.AgeCourbe = this.AgeNum;
            this.AgeRange = "0 à 12 mois";
        }
        else if (this.AgeNum <= 12 && this.sexeMF == "Fille") {
            this.ageLabels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
            this.dataPoidsMediane = [3.4, 4.2, 5, 5.7, 6.4, 6.9, 7.4, 7.7, 8.1, 8.4, 8.8, 9, 9.3, 9.6];
            this.dataPoids3 = [2.5, 3.4, 4, 4.5, 5, 5.5, 5.9, 6.5, 6.7, 6.8, 7.1, 7.4, 7.6, 7.8];
            this.dataPoids97 = [4.5, 5, 6, 6.9, 7.7, 8.4, 9, 9.5, 10, 10.4, 10.7, 11, 11.4, 11.8];
            this.mainColor = "rgb(255,20,147,1)";
            this.bubbleColor = "rgb(255,20,147,1)";
            this.AgeCourbe = this.AgeNum;
            this.AgeRange = "0 à 12 mois";
        }
        else if (this.AgeNum > 12 && this.sexeMF == "Garçon") {
            this.ageLabels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
            this.dataPoidsMediane = [10, 12.2, 14.5, 16.3, 18.3, 21, 23.5, 26, 29.5, 32.5, 36, 40, 45.5, 51, 56, 60, 63.5, 66];
            this.dataPoids3 = [8, 10, 12, 13.3, 15, 16.2, 18, 20, 22, 24, 26, 28.2, 31, 35, 39.5, 44, 46.5, 48.5];
            this.dataPoids97 = [12, 15, 18, 21.5, 24.2, 28, 32.5, 37.5, 43.5, 49, 55, 62, 70, 78, 82.5, 86, 90.5, 96.5];
            this.mainColor = "rgba(54, 162, 235, 1)";
            this.bubbleColor = "rgba(54, 162, 235, 1)";
            this.AgeCourbe = Math.round(this.AgeNum / 12);
            this.AgeRange = "1 à 18 ans";
        }
        else if (this.AgeNum > 12 && this.sexeMF == "Fille") {
            this.ageLabels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
            this.dataPoidsMediane = [9.5, 12, 14, 16, 18, 20.5, 23, 26, 29, 32.5, 36, 41, 46, 50, 52.5, 54.3, 55.8, 56.2];
            this.dataPoids3 = [7.5, 9.5, 11.5, 13, 14.5, 16, 18, 19.5, 21.5, 23.5, 25.5, 28.5, 32, 36, 39, 41, 42, 43];
            this.dataPoids97 = [11.5, 15, 18, 21, 24.5, 28, 32.5, 38, 42.5, 48.5, 55, 62, 68, 72.5, 74.5, 77, 79, 81];
            this.mainColor = "rgb(255,20,147,1)";
            this.bubbleColor = "rgb(255,20,147,1)";
            this.AgeCourbe = Math.round(this.AgeNum / 12);
            this.AgeRange = "1 à 18 ans";
        }
    };
    ;
    CourbesPage.prototype.graphPoidsLoad = function () {
        this.lineChart = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"](this.PoidsCanvas.nativeElement, {
            type: "line",
            data: {
                labels: this.ageLabels,
                datasets: [
                    {
                        label: "97%",
                        data: this.dataPoids97,
                        borderColor: "rgba(180, 180, 180, 1)",
                        backgroundColor: "rgba(180, 180, 180, 0.3)",
                        borderWidth: 1,
                        pointRadius: 1,
                    },
                    {
                        label: "50%",
                        data: this.dataPoidsMediane,
                        borderColor: this.mainColor,
                        backgroundColor: "rgba(0,0,0,0)",
                        borderWidth: 1,
                        pointRadius: 1,
                    },
                    {
                        label: "3%",
                        data: this.dataPoids3,
                        borderColor: "rgba(180, 180, 180, 1)",
                        backgroundColor: "rgba(180, 180, 180, 0.3)",
                        borderWidth: 1,
                        pointRadius: 1,
                    },
                    {
                        label: "Mon Patient",
                        data: [
                            {
                                x: this.AgeCourbe,
                                y: this.PoidsNum,
                            }
                        ],
                        borderColor: this.bubbleColor,
                        backgroundColor: "rgba(0, 0, 0, 0)",
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
                            }
                        }
                    ],
                    yAxes: [
                        {
                            scaleLabel: {
                                fontSize: 10,
                                display: false,
                                labelString: 'kg'
                            },
                            ticks: {
                                beginAtZero: true
                            }
                        }
                    ]
                }
            }
        });
        console.log(this.AgeCourbe);
    };
    ;
    /* Taille : obtention du set de données et chargement du graph */
    CourbesPage.prototype.setDataTaille = function () {
        if (this.AgeNum <= 12 && this.sexeMF == "Garçon") {
            this.ageLabels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
            this.dataTailleMediane = [50, 54, 58, 61, 63.5, 66, 67.5, 69, 71, 72, 73.5, 74.5, 75.5];
            this.dataTaille3 = [47, 50, 54, 57, 59, 62, 63.5, 65, 66, 67.5, 68.5, 69.5, 71];
            this.dataTaille97 = [54, 58, 62, 65, 68, 70, 72, 74, 75, 77, 78, 79.5, 81];
            this.mainColor = "rgba(54, 162, 235, 1)";
            this.bubbleColor = "rgba(54, 162, 235, 1)";
            this.AgeCourbe = this.AgeNum;
            this.AgeRange = "0 à 12 mois";
        }
        else if (this.AgeNum <= 12 && this.sexeMF == "Fille") {
            this.ageLabels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
            this.dataTailleMediane = [50, 53, 56.5, 59.5, 62, 64.5, 65.5, 67, 69, 70.5, 72, 73, 74];
            this.dataTaille3 = [47, 49.5, 52.5, 55, 58, 60, 62, 63, 64.5, 66, 67, 68, 69];
            this.dataTaille97 = [54, 57, 60, 63.5, 66, 68, 70, 72, 73, 75, 76.5, 78, 79];
            this.mainColor = "rgb(255,20,147,1)";
            this.bubbleColor = "rgb(255,20,147,1)";
            this.AgeCourbe = this.AgeNum;
            this.AgeRange = "0 à 12 mois";
        }
        else if (this.AgeNum > 12 && this.sexeMF == "Garçon") {
            this.ageLabels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
            this.dataTailleMediane = [76, 88, 96.5, 104, 111, 117, 123.5, 129, 134.5, 140, 145, 150.5, 157, 164, 169.5, 173, 175, 176];
            this.dataTaille3 = [71, 82, 90, 96, 102, 108, 113, 118, 123, 127.5, 132, 135.5, 140, 146, 152, 157, 160, 162];
            this.dataTaille97 = [81, 94, 104, 112, 120, 127, 134, 140, 146.5, 152.5, 158.5, 165.5, 174, 182, 187, 188.5, 189.5, 190.5];
            this.mainColor = "rgba(54, 162, 235, 1)";
            this.bubbleColor = "rgba(54, 162, 235, 1)";
            this.AgeCourbe = Math.round(this.AgeNum / 12);
            this.AgeRange = "1 à 18 ans";
        }
        else if (this.AgeNum > 12 && this.sexeMF == "Fille") {
            this.ageLabels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
            this.dataTailleMediane = [74.5, 87, 95.5, 103, 110, 117.5, 122.5, 128, 134, 139.5, 146, 152, 157.5, 161, 162.5, 163.5, 164, 164.5];
            this.dataTaille3 = [69.5, 80.5, 88, 95, 101, 106.5, 112, 117, 122, 126, 131, 137, 143.5, 148, 150, 151, 151.5, 151.8];
            this.dataTaille97 = [79, 93, 103, 111, 119, 126, 133, 140, 146, 153, 160, 167, 172, 174, 175.5, 176, 177, 177.5];
            this.mainColor = "rgb(255,20,147,1)";
            this.bubbleColor = "rgb(255,20,147,1)";
            this.AgeCourbe = Math.round(this.AgeNum / 12);
            this.AgeRange = "1 à 18 ans";
        }
    };
    ;
    CourbesPage.prototype.graphTailleLoad = function () {
        this.lineChart = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"](this.TailleCanvas.nativeElement, {
            type: "line",
            data: {
                labels: this.ageLabels,
                datasets: [
                    {
                        label: "97%",
                        data: this.dataTaille97,
                        borderColor: "rgba(180, 180, 180, 1)",
                        backgroundColor: "rgba(180, 180, 180, 0.3)",
                        borderWidth: 1,
                        pointRadius: 1,
                    },
                    {
                        label: "50%",
                        data: this.dataTailleMediane,
                        borderColor: this.mainColor,
                        backgroundColor: "rgba(0,0,0,0)",
                        borderWidth: 1,
                        pointRadius: 1,
                    },
                    {
                        label: "3%",
                        data: this.dataTaille3,
                        borderColor: "rgba(180, 180, 180, 1)",
                        backgroundColor: "rgba(180, 180, 180, 0.3)",
                        borderWidth: 1,
                        pointRadius: 1,
                    },
                    {
                        label: "Mon Patient",
                        data: [
                            {
                                x: this.AgeCourbe,
                                y: this.Taille,
                            }
                        ],
                        borderColor: this.bubbleColor,
                        backgroundColor: "rgba(0, 0, 0, 0)",
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
                            }
                        }
                    ],
                    yAxes: [
                        {
                            scaleLabel: {
                                fontSize: 10,
                                display: false,
                                labelString: 'kg'
                            },
                            ticks: {
                                beginAtZero: true
                            }
                        }
                    ]
                }
            }
        });
        console.log(this.AgeCourbe);
    };
    ;
    /* IMC : obtention du set de données et chargement du graph */
    CourbesPage.prototype.setDataBMI = function () {
        if (this.AgeNum <= 12 && this.sexeMF == "Garçon") {
            this.ageLabels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
            this.dataIMCNormBasse = [12.2, 13, 13.8, 14.5, 14.8, 15, 15.2, 15.3, 15.4, 15.4, 15.3, 15.25, 15.2];
            this.dataIMCNormHaute = [16, 17, 18, 19, 19.5, 19.7, 19.8, 19.9, 20, 19.9, 19.75, 19.6, 19.5];
            this.mainColor = "rgba(54, 162, 235, 1)";
            this.bubbleColor = "rgba(54, 162, 235, 1)";
            this.AgeCourbe = this.AgeNum;
            this.AgeRange = "0 à 12 mois";
        }
        else if (this.AgeNum <= 12 && this.sexeMF == "Fille") {
            this.ageLabels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
            this.dataIMCNormBasse = [12.5, 13, 13.5, 14.2, 14.5, 14.75, 14.9, 15, 15.1, 15.15, 15.1, 15, 14.9];
            this.dataIMCNormHaute = [16, 16.5, 17, 18.5, 18.8, 19.1, 19.3, 19.4, 19.5, 19.45, 19.4, 19.3, 19.2];
            this.mainColor = "rgba(255,20,147,1)";
            this.bubbleColor = "rgba(255,20,147,1)";
            this.AgeCourbe = this.AgeNum;
            this.AgeRange = "0 à 12 mois";
        }
        else if (this.AgeNum > 12 && this.sexeMF == "Garçon") {
            this.ageLabels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
            this.dataIMCNormBasse = [15.25, 14.25, 13.95, 13.7, 13.4, 13.2, 13, 13.1, 13.3, 13.5, 13.7, 14.1, 14.5, 15, 15.5, 16.1, 16.6, 17];
            this.dataIMCNormHaute = [19.7, 18.4, 17.9, 17.5, 17.4, 17.5, 17.9, 18.4, 19, 19.8, 20.5, 21.2, 21.9, 22.6, 23.3, 23.9, 24.5, 25];
            this.mainColor = "rgba(54, 162, 235, 1)";
            this.bubbleColor = "rgba(54, 162, 235, 1)";
            this.AgeCourbe = Math.round(this.AgeNum / 12);
            this.AgeRange = "1 à 18 ans";
        }
        else if (this.AgeNum > 12 && this.sexeMF == "Fille") {
            this.ageLabels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
            this.dataIMCNormBasse = [15, 14, 13.8, 13.5, 13.2, 13, 12.9, 13, 13.2, 13.5, 13.8, 14.3, 14.9, 15.5, 16, 16.5, 16.7, 17];
            this.dataIMCNormHaute = [19.2, 18.1, 17.7, 17.3, 17.2, 17.3, 17.7, 18.3, 19, 19.8, 20.7, 21.7, 22.5, 23.2, 23.9, 24.4, 24.7, 25];
            this.mainColor = "rgb(255,20,147,1)";
            this.bubbleColor = "rgb(255,20,147,1)";
            this.AgeCourbe = Math.round(this.AgeNum / 12);
            this.AgeRange = "1 à 18 ans";
        }
    };
    ;
    CourbesPage.prototype.graphBMILoad = function () {
        this.lineChart = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"](this.BMICanvas.nativeElement, {
            type: "line",
            data: {
                labels: this.ageLabels,
                datasets: [
                    {
                        label: "Norme haute",
                        data: this.dataIMCNormHaute,
                        borderColor: "rgba(180, 180, 180, 1)",
                        backgroundColor: "rgba(180, 180, 180, 0.3)",
                        borderWidth: 1,
                        pointRadius: 1,
                    },
                    {
                        label: "Norme basse",
                        data: this.dataIMCNormBasse,
                        borderColor: "rgba(180, 180, 180, 1)",
                        backgroundColor: "rgba(180, 180, 180, 0.3)",
                        borderWidth: 1,
                        pointRadius: 1,
                    },
                    {
                        label: "Mon Patient",
                        data: [
                            {
                                x: this.AgeCourbe,
                                y: this.BMI,
                            }
                        ],
                        borderColor: this.bubbleColor,
                        backgroundColor: "rgba(0, 0, 0, 0)",
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
                            }
                        }
                    ],
                    yAxes: [
                        {
                            scaleLabel: {
                                fontSize: 10,
                                display: false,
                                labelString: 'kg'
                            },
                            ticks: {
                                beginAtZero: true
                            }
                        }
                    ]
                }
            }
        });
        console.log(this.AgeCourbe);
    };
    ;
    CourbesPage.prototype.presentAlert = function () {
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
                                    text: 'Plus tard.',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: Nan');
                                    }
                                }, {
                                    text: 'OK.',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        _this.navCtrl.pop();
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
    CourbesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Page de Biométrie');
    };
    CourbesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var promiseList = [];
        promiseList.push(this.storage.get('AgeNum').then(function (Age) {
            _this.AgeNum = Age;
            _this.ageLecture = Math.round((_this.AgeNum / 12) * 10) / 10;
            _this.storage.get('PoidsNum').then(function (Poids) {
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
                            _this.storage.get('sexeMF').then(function (sexe) {
                                _this.sexeMF = sexe;
                                if (!_this.sexeMF) {
                                    _this.sexeMF = "Fille";
                                }
                                ;
                                _this.storage.get('Taille').then(function (Taille) {
                                    _this.Taille = Taille;
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
                });
            });
        }));
    };
    ;
    CourbesPage.prototype.calculs = function () {
        /*placer les calculs ici*/
        this.SurfaceCorporelle = Math.round(((4 * this.PoidsNum + 7) / (this.PoidsNum + 90)) * 10) / 10;
        console.log("la surface corporelle est de ", this.SurfaceCorporelle, " m2");
        if (this.Taille) {
            this.BMIinfo = "Poids/Taille²";
        }
        else {
            this.BMIinfo = "Renseigner une taille dans les options";
        }
        ;
        if (this.Taille > 0) {
            this.BMI = Math.round(this.PoidsNum / ((this.Taille / 100) * (this.Taille / 100)) * 10) / 10;
        }
        else {
            this.BMI = "NA";
        }
        ;
        this.setDataPoids();
        this.graphPoidsLoad();
        this.setDataTaille();
        this.graphTailleLoad();
        this.setDataBMI();
        this.graphBMILoad();
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("PoidsCanvas"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], CourbesPage.prototype, "PoidsCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("TailleCanvas"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], CourbesPage.prototype, "TailleCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("BMICanvas"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], CourbesPage.prototype, "BMICanvas", void 0);
    CourbesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-courbes',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\courbes\courbes.html"*/'<ion-content>\n\n  <div class="header"> \n\n    <div (click)="retourHome()" class="backButton">\n    <ion-icon start color="turquoise-fonce" name="arrow-back"></ion-icon>\n    Retour\n    </div> Biométrie {{sexeMF}} {{AgeRange}} </div>\n      <br>\n\n      <ion-item color="turquoise-fonce"> \n        <ion-label>\n          <p class="MonPatient">{{sexeMF}} - {{ageLecture}} ans ( = {{AgeNum}} mois) - {{PoidsNum}} kg - {{Taille}} cm</p> \n          <p class="MonPatient">Estomac {{EstomacOuiNon}} - Jeune {{DureeJeune}} h</p>\n          <p class="MonPatient">Allergie : {{Allergie}}</p></ion-label> \n      </ion-item>\n  \n      <br>\n\n      <ion-item>\n        <ion-label>IMC : {{BMI}} kg/m²\n        <p class="comment">{{BMIinfo}}</p>\n      </ion-label>\n    </ion-item>\n    \n      <ion-item>\n        <ion-label>Surface corporelle : {{SurfaceCorporelle}} m²\n          <p class="comment">(Poidsx4 + 7)/(Poids + 90) </p>\n        </ion-label>\n      </ion-item>\n\n      <br>\n      <div class="courbesTitle">Courbes de croissance <br> {{sexeMF}} de {{AgeRange}}</div>\n\n\n      <ion-card class="drogueContainer">\n        <ion-card-header>\n          Poids (kg)\n        </ion-card-header>\n        <ion-card-content>\n          <canvas #PoidsCanvas></canvas>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card class="drogueContainer">\n        <ion-card-header>\n          Taille (cm)\n        </ion-card-header>\n        <ion-card-content>\n          <canvas #TailleCanvas></canvas>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card class="drogueContainer">\n        <ion-card-header>\n          IMC (kg/m²)\n        </ion-card-header>\n        <ion-card-content>\n          <canvas #BMICanvas></canvas>\n        </ion-card-content>\n      </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\courbes\courbes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CourbesPage);
    return CourbesPage;
}());

//# sourceMappingURL=courbes.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AntiInfectieuxPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_data_liste_anti_infectieux__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__(419);
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
    AntiInfectieuxPage.prototype.retourHome = function () {
        this.navCtrl.pop();
    };
    ;
    AntiInfectieuxPage.prototype.ngOnInit = function () {
        this.setFilteredItems();
    };
    ;
    AntiInfectieuxPage.prototype.setFilteredItems = function () {
        this.cards = this.dataService.filterItems(this.searchTerm);
    };
    ;
    AntiInfectieuxPage.prototype.ToggleCard = function () {
        this.cards.isShown = !this.cards.isShown;
    };
    ;
    AntiInfectieuxPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-anti-infectieux',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\anti-infectieux\anti-infectieux.html"*/'<ion-content>\n\n  <div class="header"> \n\n    <div (click)="retourHome()" class="backButton">\n    <ion-icon start color="turquoise-fonce" name="arrow-back"></ion-icon>\n    Retour\n    </div> Antibiothérapie </div>\n      <br>\n\n      <div padding color="danger">   Les posologies proposées sont envisagées :\n        <br>- pour la <b>pédiatrie</b> uniquement\n        <br>- en antibio<b>thérapie</b>.</div>\n\n      <ion-searchbar\n      [(ngModel)]="searchTerm"\n      (ionChange)="setFilteredItems()"\n    ></ion-searchbar>\n\n  <ion-list>\n    <ion-card *ngFor="let card of cards, let i = index" [attr.data-index]="i" padding="5%">\n\n      <ion-item>\n      <ion-label class="carteATB"><u>{{card.title}}</u>\n          <ion-toggle class="toggleATBCard" [(ngModel)]="card.isShown"></ion-toggle>\n        </ion-label>\n        </ion-item>\n\n      <ion-card-content *ngIf="card.isShown">\n        <p class="dilutionDrogueInduction"><b>Posologie</b> : {{card.posologie}}</p>\n        <br>\n        <p class="dilutionDrogueInduction"><b>Reconstitution</b> : {{card.reconstitution}}</p>\n        <br>\n        <p class="dilutionDrogueInduction"><b>Dilution</b> : {{card.dilution}}</p>\n        <br>\n        <p class="dilutionDrogueInduction"><b>Administration</b> : {{card.administration}}</p>\n        <br>\n        <p class="dilutionDrogueInduction"><b>Remarques</b> : {{card.remarques}}</p>\n        <br>\n      </ion-card-content>\n\n    </ion-card>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\anti-infectieux\anti-infectieux.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_data_liste_anti_infectieux__["a" /* ServiceDataProvider */]])
    ], AntiInfectieuxPage);
    return AntiInfectieuxPage;
}());

;
//# sourceMappingURL=anti-infectieux.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProtocolesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__extrophie_vesicale_extrophie_vesicale__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scoliose_scoliose__ = __webpack_require__(496);
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
 * Generated class for the ProtocolesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProtocolesPage = /** @class */ (function () {
    function ProtocolesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.isShownNAD = false;
        this.PoidsNum = 25;
    }
    ProtocolesPage.prototype.retourHome = function () {
        this.navCtrl.pop();
    };
    ProtocolesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProtocolesPage');
    };
    ProtocolesPage.prototype.openExtrophieVesicale = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__extrophie_vesicale_extrophie_vesicale__["a" /* ExtrophieVesicalePage */]);
    };
    ;
    ProtocolesPage.prototype.openScoliose = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__scoliose_scoliose__["a" /* ScoliosePage */]);
    };
    ;
    ProtocolesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-protocoles',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\protocoles\protocoles.html"*/'\n\n<ion-content >\n\n          <!-- HEADER MENU  -->\n          <div class="header"> \n\n            <div (click)="retourHome()" class="backButton">\n            <ion-icon start color="turquoise-fonce" name="arrow-back"></ion-icon>\n            Retour\n            </div>\n  Protocoles d\'anesthésie</div>\n              <br>\n          \n              <br>\n         <!-- END HEADER -->\n\n      <ion-list>\n      <ion-item (click)="openExtrophieVesicale()"><ion-label color="dark-turquoise">\n        <ion-icon start name="list-box"></ion-icon>\n        &nbsp;&nbsp; Extrophie Vésicale</ion-label></ion-item>\n\n      <ion-item (click)="openScoliose()"><ion-label color="dark-turquoise">\n        <ion-icon start name="list-box"></ion-icon>\n        &nbsp;&nbsp; Scoliose</ion-label></ion-item>\n\n      <ion-item ><ion-label color="dark-turquoise">\n        <ion-icon start name="list-box"></ion-icon>\n        &nbsp;&nbsp; Sténose du pylore (à venir)</ion-label></ion-item>\n\n      <ion-item ><ion-label color="dark-turquoise">\n        <ion-icon start name="list-box"></ion-icon>\n        &nbsp;&nbsp; Greffe rénale</ion-label></ion-item>\n\n\n\n  \n        </ion-list>\n      \n</ion-content>\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\protocoles\protocoles.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ProtocolesPage);
    return ProtocolesPage;
}());

//# sourceMappingURL=protocoles.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtrophieVesicalePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(18);
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
    function ExtrophieVesicalePage(navCtrl, navParams, storage, ToastController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.ToastController = ToastController;
        this.checkedItem = false;
        this.Consultation = [
            { title: 'Réhabilitation', item: "Evaluation de la possibilité d'une réhabilitation précoce (sans réanimation).", isChecked: false, count: 1 },
            { title: 'Comorbidités', item: 'Evaluation des comorbidités du patient.', isChecked: false, count: 1 },
            { title: 'Post-opératoire', item: 'Anticiper la période post-opératoire : appele systématique de la réanimation pour réserver une place (4 3416)', isChecked: false, count: 1 },
            { title: 'Epargne sanguine', item: "Stratégie d'épargne sanguine : prescription de fer, bilan avec NFS, hémostase complète, carte de groupe. Associer un ionogramme sanguin systématique.", isChecked: false, count: 1 },
            { title: 'Infections', item: 'Stratégie de contrôle des infections : ECBU, dépistage BLSE par écouvillon rectal et carte fongique (comportant écouiville plaque vésicale, peau à la jonction de la plaque vésicale, aisselles, anus).', isChecked: false, count: 1 },
        ];
        this.VPA = [
            { title: 'Bilans', item: "Vérifier que les bilans prescrits ont été réalisés, vérifier les résultats. Prescrire les RAI et la 2e détermination de groupe.", isChecked: false, class: this.checkedItem },
            { title: 'Transfusion', item: 'Faire une commande de culots globulaires prévisionnelle.', isChecked: false, class: this.checkedItem },
            { title: 'Hydratation', item: 'Perfuser dès le début du jeûne avec du B26.', isChecked: false, class: this.checkedItem },
        ];
        this.PreOperatoire = [
            { title: "Réanimation", item: "Confirmer la place en réanimation.", isChecked: false, },
            { title: "Monitorage", item: "NIRS en place avant l'induction. TOF pour curarisation continue en IVSE - tracrium - selon le protocole habituel. ", isChecked: false, },
            { title: "Prévention", item: "Infections : Antibioprophylaxie par Céfazoline IV 30 minutes avant l'incision. Saignement : Exacyl - si ostéotomie - selon le protocole habituel. NVPO : Dexaméthasone selon le protocole habituel. Calculer le VPOP.", isChecked: false, },
            { title: "Dispostifs", item: "Pose de cathéter veineux central en jugulaire interne droit (pas en fémoral car ostéotomie). Attention au montage des lignes type réanimation. Discuter la pose d'un cathéter artériel pour monitorage hémodynamique, selon le terrain. Pose d'un cathéter de péridurale, utiliser en per-opératoire, évaluer l'efficacité en per-opératoire.", isChecked: false, },
        ];
        this.PerOperatoire = [
            { title: "Pendant l'intervention", item: "Surveillance des saignements en per-opératoire et HemoCue réguliers (1 par heure pendant le temps orthopédique). Seuil transfusionnel à 8 g/dL. NFS de contrôle en post-opératoire.",
                isChecked: false },
            { title: "En fin d'intervention", item: "Evaluation des critères d'admission en réanimation : transfert en réanimation si transfusion massive, support catécholaminergique, impossibilité d'extubation rapide en SSPI, gestion de l'analgésie prévue comme difficile (mauvaise efficacité de la péridurale, réinjections fréquentes de sufentanil en per-opératoire).",
                isChecked: false },
        ];
        this.PostOperatoire = [
            { title: "Réhabilitation précoce", item: "Chaque fois que possible en l'absence de critère d'admission en réanimation. Extubation précoce en SSPI. Contrôle de l'analgésie par péridurale et paracétamol. Reprise des boissons (liquide clair) dès le soir.",
                isChecked: false },
            { title: "Clinique", item: "Stabilité hémodynamique et diurèse satisfaisante (> 3mL/kg/h) surveillée toutes les 2 heures." },
            { title: "Biologie", item: "NFS à J1 (objectif Hb > 8 g/dL et hémostase normale). Absence de trouble ionique. Stabilité hémodynamique et diurèse satisfaisante (> 3mL/kg/h).",
                isChecked: false },
            { title: "Dispositifs", item: "Ablation du cathéter artériel avant la sortie de SSPI. Vérification de l'efficacité de l'analgésie péridurale." }
        ];
        this.isShownConsultation = false;
        this.isShownVPA = false;
        this.isShownPerOp = false;
        this.isShownPostOp = false;
        this.isShownPreOp = false;
        this.allCheckedConsultation = false;
        this.allCheckedVPA = false;
        this.allCheckedPreOp = false;
        this.allCheckedPerOp = false;
        this.allCheckedPostOp = false;
    }
    ExtrophieVesicalePage.prototype.retourHome = function () {
        this.navCtrl.pop();
    };
    ;
    ExtrophieVesicalePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExtrophieVesicalePage');
    };
    ;
    ExtrophieVesicalePage.prototype.ionViewWillEnter = function () {
    };
    ;
    ExtrophieVesicalePage.prototype.ToggleConsultation = function () {
        this.isShownConsultation = !this.isShownConsultation;
    };
    ;
    ExtrophieVesicalePage.prototype.ToggleVPA = function () {
        this.isShownVPA = !this.isShownVPA;
    };
    ;
    ExtrophieVesicalePage.prototype.TogglePreOp = function () {
        this.isShownPreOp = !this.isShownPreOp;
    };
    ;
    ExtrophieVesicalePage.prototype.TogglePerOp = function () {
        this.isShownPerOp = !this.isShownPerOp;
    };
    ;
    ExtrophieVesicalePage.prototype.TogglePostOp = function () {
        this.isShownPostOp = !this.isShownPostOp;
    };
    ;
    ExtrophieVesicalePage.prototype.checkCS = function () {
        var checkCS = this.Consultation
            .filter(function (item) { return item.isChecked === false; })
            .reduce(function (sum, current) { return sum + current.count; }, 0);
        if (checkCS == 0) {
            this.allCheckedConsultation = true;
            var toastCS = this.ToastController.create({
                message: "Items spécifiques de consultation tous validés.",
                position: 'Bottom',
                showCloseButton: true,
                closeButtonText: "OK.",
                duration: 3000,
            });
            toastCS.present();
        }
        else {
            this.allCheckedConsultation = false;
        }
        ;
    };
    ;
    ExtrophieVesicalePage.prototype.checkVPA = function () {
        var checkVPA = this.VPA
            .filter(function (item) { return item.isChecked === false; })
            .reduce(function (sum, current) { return sum + current.count; }, 0);
        if (checkVPA == 0) {
            this.allCheckedVPA = true;
            var toastVPA = this.ToastController.create({
                message: "Items spécifiques de VPA tous validés.",
                position: 'Bottom',
                showCloseButton: true,
                closeButtonText: "OK.",
                duration: 3000,
            });
            toastVPA.present();
        }
        else {
            this.allCheckedVPA = false;
        }
        ;
    };
    ;
    ExtrophieVesicalePage.prototype.checkPreOperatoire = function () {
        var checkPreOp = this.PreOperatoire
            .filter(function (item) { return item.isChecked === false; })
            .reduce(function (sum, current) { return sum + current.count; }, 0);
        if (checkPreOp == 0) {
            this.allCheckedPreOp = true;
            var toastPreOp = this.ToastController.create({
                message: "Items spécifiques du pré-opératoire tous validés.",
                position: 'Bottom',
                showCloseButton: true,
                closeButtonText: "OK.",
                duration: 3000,
            });
            toastPreOp.present();
        }
        else {
            this.allCheckedPreOp = false;
        }
        ;
    };
    ;
    ExtrophieVesicalePage.prototype.checkPerOperatoire = function () {
        var checkPerOp = this.PerOperatoire
            .filter(function (item) { return item.isChecked === false; })
            .reduce(function (sum, current) { return sum + current.count; }, 0);
        if (checkPerOp == 0) {
            this.allCheckedPerOp = true;
            var toastPerOp = this.ToastController.create({
                message: "Items spécifiques du per-opératoire tous validés.",
                position: 'Bottom',
                showCloseButton: true,
                closeButtonText: "OK.",
                duration: 3000,
            });
            toastPerOp.present();
        }
        else {
            this.allCheckedPerOp = false;
        }
        ;
    };
    ;
    ExtrophieVesicalePage.prototype.checkPostOperatoire = function () {
        var checkPostOp = this.PostOperatoire
            .filter(function (item) { return item.isChecked === false; })
            .reduce(function (sum, current) { return sum + current.count; }, 0);
        if (checkPostOp == 0) {
            this.allCheckedPostOp = true;
            var toastPostOp = this.ToastController.create({
                message: "Items spécifiques du post-opératoire tous validés.",
                position: 'Bottom',
                showCloseButton: true,
                closeButtonText: "OK.",
                duration: 3000,
            });
            toastPostOp.present();
        }
        else {
            this.allCheckedPostOp = false;
        }
        ;
    };
    ;
    ExtrophieVesicalePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-extrophie-vesicale',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\extrophie-vesicale\extrophie-vesicale.html"*/'<ion-content>\n\n  <div class="header"> \n\n    <div (click)="retourHome()" class="backButton">\n    <ion-icon start color="turquoise-fonce" name="arrow-back"></ion-icon>\n    Retour\n    </div>\n    Anesthésie pour chirurgie d\'extrophie vésicale  </div>\n      <br>\n\n      <ion-item color="warning">\n        <p class="entete_protocole">Auteurs : Dr. Charlotte FAIT, Pr. Souhayl DAHMANI</p>\n        <p class="entete_protocole">Date de publication : 21/09/2020</p>\n      </ion-item>\n\n      <br>\n\n\n  <ion-card color="turquoise-fonce">\n    <ion-card-content>  Objectifs : \n      <p class="dilutionDrogueInduction"> - réduction des jours de réanimation avec intubation.</p> \n      <p class="dilutionDrogueInduction"> - réhabilitation précoce avec passage de la première nuit en SSPI puis USC à J1.</p>\n      <p class="dilutionDrogueInduction"> - optimisation de l\'analgésie.</p></ion-card-content>\n  </ion-card>\n\n\n  <!-- PARTIE CONSULTATION -->\n\n  <ion-item class="drogueContainer" (click)="ToggleConsultation()">\n      <ion-label class="drogueInduction" color="dark-turquoise">Consultation &nbsp;&nbsp;\n      <ion-icon *ngIf="allCheckedConsultation" name="checkbox"  style="zoom:1"></ion-icon>\n      <ion-icon *ngIf="!isShownConsultation" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n      <ion-icon *ngIf="isShownConsultation" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n      </ion-label>\n      </ion-item>\n\n      <div *ngIf="isShownConsultation">\n      <ion-card *ngFor="let entry of Consultation" class="drogueContainer">\n        <ion-item>\n        <ion-label class="drogueInduction">{{entry.title}}</ion-label>\n        <ion-checkbox color="turquoise-fonce" (click)="checkCS()" [(ngModel)]="entry.isChecked"></ion-checkbox>\n      </ion-item>\n      <ion-card-content *ngIf="!entry.isChecked" class="comment">{{entry.item}}</ion-card-content></ion-card>\n      </div>\n\n\n\n<!-- PARTIE VPA -->\n\n<ion-item class="drogueContainer" (click)="ToggleVPA()">\n  <ion-label class="drogueInduction" color="dark-turquoise">Visite pré-anesthésique &nbsp;&nbsp;\n  <ion-icon *ngIf="allCheckedVPA" name="checkbox"  style="zoom:1"></ion-icon>\n  <ion-icon *ngIf="!isShownVPA" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n  <ion-icon *ngIf="isShownVPA" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n  </ion-label>\n  </ion-item>\n\n  <div *ngIf="isShownVPA">\n  <ion-card *ngFor="let entry of VPA" class="drogueContainer">\n    <ion-item>\n    <ion-label class="drogueInduction">{{entry.title}}</ion-label>\n    <ion-checkbox color="turquoise-fonce" (click)="checkVPA()" [(ngModel)]="entry.isChecked"></ion-checkbox>\n  </ion-item>\n  <ion-card-content *ngIf="!entry.isChecked" class="comment">{{entry.item}}</ion-card-content></ion-card>\n  </div>\n\n\n  <!-- PARTIE PRE OP -->\n\n<ion-item class="drogueContainer" (click)="TogglePreOp()">\n  <ion-label class="drogueInduction" color="dark-turquoise">Pré-opératoire &nbsp;&nbsp;\n    <ion-icon *ngIf="allCheckedPreOp" name="checkbox"  style="zoom:1"></ion-icon>\n  <ion-icon *ngIf="!isShownPreOp" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n  <ion-icon *ngIf="isShownPreOp" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n  </ion-label>\n  </ion-item>\n \n  <div *ngIf="isShownPreOp">\n  <ion-card *ngFor="let entry of PreOperatoire" class="drogueContainer">\n    <ion-item>\n    <ion-label class="drogueInduction">{{entry.title}}</ion-label>\n    <ion-checkbox color="turquoise-fonce" (click)="checkPreOperatoire()" [(ngModel)]="entry.isChecked"></ion-checkbox>\n  </ion-item>\n  <ion-card-content *ngIf="!entry.isChecked" class="comment">{{entry.item}}\n  </ion-card-content></ion-card>\n  </div>\n\n\n<!-- PARTIE PER OP -->\n\n<ion-item class="drogueContainer" (click)="TogglePerOp()">\n  <ion-label class="drogueInduction" color="dark-turquoise">Per-opératoire &nbsp;&nbsp;\n    <ion-icon *ngIf="allCheckedPerOp" name="checkbox"  style="zoom:1"></ion-icon>\n  <ion-icon *ngIf="!isShownPerOp" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n  <ion-icon *ngIf="isShownPerOp" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n  </ion-label>\n  </ion-item>\n\n  <div *ngIf="isShownPerOp">\n  <ion-card *ngFor="let entry of PerOperatoire" class="drogueContainer">\n    <ion-item>\n    <ion-label class="drogueInduction">{{entry.title}}</ion-label>\n    <ion-checkbox color="turquoise-fonce" (click)="checkPerOperatoire()" [(ngModel)]="entry.isChecked"></ion-checkbox>\n  </ion-item>\n  <ion-card-content  *ngIf="!entry.isChecked" class="comment"> {{entry.item}}\n  </ion-card-content></ion-card>\n  </div>\n\n\n<!-- PARTIE POST OP -->\n\n<ion-item class="drogueContainer" (click)="TogglePostOp()">\n  <ion-label class="drogueInduction" color="dark-turquoise">Post-opératoire & SSPI &nbsp;&nbsp;\n    <ion-icon *ngIf="allCheckedPostOp" name="checkbox"  style="zoom:1"></ion-icon>\n  <ion-icon *ngIf="!isShownPostOp" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n  <ion-icon *ngIf="isShownPostOp" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n  </ion-label>\n  </ion-item>\n\n  <div *ngIf="isShownPostOp">\n  <ion-card *ngFor="let entry of PostOperatoire" class="drogueContainer">\n    <ion-item>\n    <ion-label class="drogueInduction">{{entry.title}}</ion-label>\n    <ion-checkbox color="turquoise-fonce" (click)="checkPostOperatoire()" [(ngModel)]="entry.isChecked"></ion-checkbox>\n  </ion-item>\n  <ion-card-content *ngIf="!entry.isChecked" class="comment"> {{entry.item}}\n  </ion-card-content></ion-card>\n  </div>\n\n \n</ion-content>\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\extrophie-vesicale\extrophie-vesicale.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], ExtrophieVesicalePage);
    return ExtrophieVesicalePage;
}());

//# sourceMappingURL=extrophie-vesicale.js.map

/***/ }),

/***/ 178:
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
webpackEmptyAsyncContext.id = 178;

/***/ }),

/***/ 222:
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
webpackEmptyAsyncContext.id = 222;

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AntibioprophylaxiePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__anti_infectieux_anti_infectieux__ = __webpack_require__(165);
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
 * Generated class for the AntibioprophylaxiePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AntibioprophylaxiePage = /** @class */ (function () {
    function AntibioprophylaxiePage(navCtrl, navParams, alertController, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertController = alertController;
        this.storage = storage;
    }
    AntibioprophylaxiePage.prototype.retourHome = function () {
        this.navCtrl.pop();
    };
    ;
    AntibioprophylaxiePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AntibioprophylaxiePage');
    };
    AntibioprophylaxiePage.prototype.ToggleIndications = function () {
        this.isShownIndications = !this.isShownIndications;
    };
    ;
    AntibioprophylaxiePage.prototype.TogglePosologies = function () {
        this.isShownPosologies = !this.isShownPosologies;
    };
    ;
    AntibioprophylaxiePage.prototype.ToggleAntibiotherapie = function () {
        this.isShownAntibiotherapie = !this.isShownAntibiotherapie;
    };
    ;
    AntibioprophylaxiePage.prototype.presentAlert = function () {
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
                                    text: 'Plus tard.',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: Nan');
                                    }
                                }, {
                                    text: 'OK.',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        _this.navCtrl.pop();
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
    AntibioprophylaxiePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var promiseList = [];
        promiseList.push(this.storage.get('AgeNum').then(function (Age) {
            _this.AgeNum = Age;
            _this.ageLecture = Math.round((_this.AgeNum / 12) * 10) / 10;
            _this.storage.get('PoidsNum').then(function (Poids) {
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
                            _this.storage.get('sexeMF').then(function (sexe) {
                                _this.sexeMF = sexe;
                                if (!_this.sexeMF) {
                                    _this.sexeMF = "Fille";
                                }
                                ;
                                _this.storage.get('Taille').then(function (Taille) {
                                    _this.Taille = Taille;
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
                });
            });
        }));
    };
    ;
    AntibioprophylaxiePage.prototype.calculs = function () {
        /*placer les calculs ici*/
        this.AdminAugmentin = Math.round((this.PoidsNum * 50) * 10) / 10;
        if (this.AdminAugmentin >= 2000) {
            this.AdminAugmentin = 2000;
        }
        ;
        this.ReInjAugmentin = Math.round((this.PoidsNum * 25) * 10) / 10;
        if (this.ReInjAugmentin >= 1000) {
            this.ReInjAugmentin = 1000;
        }
        ;
        this.MaxAcideClavulanique = Math.round((this.PoidsNum * 20) * 10) / 10;
        this.AdminCefamandole = Math.round((this.PoidsNum * 40) * 10) / 10;
        if (this.AdminCefamandole >= 1500) {
            this.AdminCefamandole = 1500;
        }
        ;
        this.ReInjCefamandole = Math.round((this.PoidsNum * 20) * 10) / 10;
        if (this.ReInjCefamandole >= 750) {
            this.ReInjCefamandole = 750;
        }
        ;
        this.AdminCefazoline = Math.round((this.PoidsNum * 50) * 10) / 10;
        if (this.AdminCefazoline >= 2000) {
            this.AdminCefazoline = 2000;
        }
        ;
        this.ReInjCefazoline = Math.round((this.PoidsNum * 25) * 10) / 10;
        if (this.ReInjCefazoline >= 1000) {
            this.ReInjCefazoline = 1000;
        }
        ;
        this.AdminClindamycine = Math.round((this.PoidsNum * 15) * 10) / 10;
        if (this.AdminClindamycine >= 600) {
            this.AdminClindamycine = 600;
        }
        ;
        this.ReInjClindamycine = Math.round((this.PoidsNum * 7.5) * 10) / 10;
        if (this.ReInjClindamycine >= 600) {
            this.ReInjClindamycine = 600;
        }
        ;
        this.AdminGentamicine = Math.round((this.PoidsNum * 3) * 10) / 10;
        if (this.AdminGentamicine >= 160) {
            this.AdminGentamicine = 160;
        }
        ;
        this.AdminMetronidazole = Math.round((this.PoidsNum * 20) * 10) / 10;
        if (this.AdminMetronidazole >= 1000) {
            this.AdminMetronidazole = 1000;
        }
        ;
        this.ReInjMetronidazole = Math.round((this.PoidsNum * 10) * 10) / 10;
        if (this.ReInjMetronidazole >= 500) {
            this.ReInjMetronidazole = 500;
        }
        ;
        this.AdminVancomycine = Math.round((this.PoidsNum * 15) * 10) / 10;
        if (this.AdminVancomycine >= 2000) {
            this.AdminVancomycine = 2000;
        }
        ;
        this.ReInjVancomycine = Math.round((this.PoidsNum * 15) * 10) / 10;
        if (this.ReInjVancomycine >= 2000) {
            this.ReInjVancomycine = 2000;
        }
        ;
    };
    ;
    AntibioprophylaxiePage.prototype.openAntiInfectieuxPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__anti_infectieux_anti_infectieux__["a" /* AntiInfectieuxPage */]);
    };
    AntibioprophylaxiePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-antibioprophylaxie',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\antibioprophylaxie\antibioprophylaxie.html"*/'<ion-content>\n\n  <div class="header"> \n\n    <div (click)="retourHome()" class="backButton">\n    <ion-icon start color="turquoise-fonce" name="arrow-back"></ion-icon>\n    Retour\n    </div>\n\nTraitements anti-infectieux</div>\n      <br>\n\n      <ion-item color="turquoise-fonce"> \n        <ion-label>\n          <p class="MonPatient">{{sexeMF}} - {{ageLecture}} ans ( = {{AgeNum}} mois) - {{PoidsNum}} kg - {{Taille}} cm</p> \n          <p class="MonPatient">Estomac {{EstomacOuiNon}} - Jeune {{DureeJeune}} h</p>\n          <p class="MonPatient">Allergie : {{Allergie}}</p></ion-label> \n      </ion-item>\n  \n      <br>\n\n\n  <ion-item-divider (click)="ToggleIndications()" >\n    <ion-label color="dark-turquoise">Antibioprophylaxie : indications\n  <ion-icon *ngIf="!isShownIndications" class="OpenCloseIcon" name="open" style="zoom:0.9"></ion-icon>\n  <ion-icon *ngIf="isShownIndications" class="OpenCloseIcon" name="close"  style="zoom:0.9"></ion-icon>\n    </ion-label>\n  </ion-item-divider> \n\n  <ion-card *ngIf="isShownIndications" class="drogueContainer">\n    En cours de développement\n    </ion-card>\n\n  <ion-item-divider (click)="TogglePosologies()" >\n    <ion-label color="dark-turquoise">Antibioprophylaxie : posologies\n  <ion-icon *ngIf="!isShownPosologies" class="OpenCloseIcon" name="open" style="zoom:0.9"></ion-icon>\n  <ion-icon *ngIf="isShownPosologies" class="OpenCloseIcon" name="close"  style="zoom:0.9"></ion-icon>\n    </ion-label>\n  </ion-item-divider> \n\n  <ion-card *ngIf="isShownPosologies" class="drogueContainer">\n\n  <ion-item class="avecAMM">         \n    <ion-label class="drogueInduction" color="dark">\n      <p class="dilutionDrogueInduction">Posologie proposée : 50 mg/kg sans dépasser 2g</p>\n      Amoxicilline-Acide Clavulanique (Augmentin®) : {{AdminAugmentin}} mg IVL\n    <p class="dilutionDrogueInduction">Réinjection demi-dose : {{ReInjAugmentin}} mg IVL toutes les 2h </p>\n  </ion-label>\n    </ion-item>\n    <div class="AMM">Attention : ne pas dépasser 20 mg/kg/j d\'acide clavulanique (<b>{{MaxAcideClavulanique}} mg</b>).</div>\n\n    <ion-item>         \n      <ion-label class="drogueInduction" color="dark"> \n        <p class="dilutionDrogueInduction">Posologie proposée : 40 mg/kg sans dépasser 1.5g</p>\n          Céfamandole : {{AdminCefamandole}} mg IVL\n      <p class="dilutionDrogueInduction">Réinjection demi-dose : {{ReInjCefamandole}} mg IVL toutes les 2h</p>\n    </ion-label>\n      </ion-item> \n\n      <ion-item>         \n        <ion-label class="drogueInduction" color="dark">\n         \n          <p class="dilutionDrogueInduction">Posologie proposée : 50 mg/kg sans dépasser 2g</p>\n          Céfazoline : {{AdminCefazoline}} mg IVL\n        <p class="dilutionDrogueInduction">Réinjection demi-dose : {{ReInjCefazoline}} mg IVL toutes les 4h </p>\n      </ion-label>\n        </ion-item> \n\n        <ion-item>         \n          <ion-label class="drogueInduction" color="dark">\n            <p class="dilutionDrogueInduction">Posologie proposée : 15 mg/kg sans dépasser 600 mg</p>\n            Clindamycine: {{AdminClindamycine}} mg IVL\n          <p class="dilutionDrogueInduction">Réinjection demi-dose : {{ReInjClindamycine}} mg IVL toutes les 4h</p>\n        </ion-label>\n          </ion-item> \n\n          <ion-item>         \n            <ion-label class="drogueInduction" color="dark">\n              <p class="dilutionDrogueInduction">Posologie proposée : 3 mg/kg sans dépasser 160 mg</p>\n              Gentamicine : {{AdminGentamicine}} mg IVL\n            <p class="dilutionDrogueInduction">Pas plus d\'une injection par jour, attention à adapter chez l\'insuffisant rénal</p>\n          </ion-label>\n            </ion-item> \n\n            <ion-item>         \n              <ion-label class="drogueInduction" color="dark">\n                <p class="dilutionDrogueInduction">Posologie proposée : 20 mg/kg sans dépasser 1000 mg</p>\n                Métronidazole (Flagyl®) : {{AdminMetronidazole}} mg IVL\n              <p class="dilutionDrogueInduction">Réinjection demi-dose : {{ReInjMetronidazole}} mg IVL toutes les 8h</p>\n            </ion-label>\n              </ion-item> \n\n              <ion-item>         \n                <ion-label class="drogueInduction" color="dark">\n                  <p class="dilutionDrogueInduction">Posologie proposée : pour 15 mg/kg sans dépasser 2000 mg</p>\n                  Vancomycine : {{AdminVancomycine}} mg IVL sur 30 minutes ou IVSE\n                  <p class="dilutionDrogueInduction">Réinjection pleine dose : {{ReInjVancomycine}} mg IVL toutes les 12h</p>\n              </ion-label>\n                </ion-item> \n          </ion-card>\n\n<ion-item-divider (click)="ToggleAntibiotherapie()" >\n  <ion-label color="dark-turquoise">Antibiothérapie : posologies & préparation\n<ion-icon *ngIf="!isShownAntibiotherapie" class="OpenCloseIcon" name="open" style="zoom:0.9"></ion-icon>\n<ion-icon *ngIf="isShownAntibiotherapie" class="OpenCloseIcon" name="close"  style="zoom:0.9"></ion-icon>\n  </ion-label>\n</ion-item-divider> \n\n<ion-card class="drogueContainer" *ngIf="isShownAntibiotherapie">\n  <p padding class="dilutionDrogueInduction">Pour les posologies d\'anti-infectieux en contexte thérapeutique ou pour plus de détail sur la préparation et l\'administration des anti-infectieux, consultez les protocoles d\'anti-infectieux proposés.</p>\n  <p padding class="dilutionDrogueInduction">NB. Les posologies sont proposées en dose/poids (pas de calculs de posologie).</p>\n  <p padding class="dilutionDrogueInduction">Considérer un prélèvement avant toute initiation d\'antibiothérapie : \n    <br> - urines : nouveau-né avant un mois, BU +/- ECBU, ECBU d\'emblée après un mois ; \n    <br> - hémocultures ; \n    <br> - prélèvement respiratoire (PDP) pour toute suspicion de pneumopathie acquise sous ventilation. \n  </p>\n  <button padding small color="pastel-green" ion-button (click)="openAntiInfectieuxPage()">Anti-infectieux</button>\n  </ion-card>\n\n\n\n\n\n \n</ion-content>\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\antibioprophylaxie\antibioprophylaxie.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], AntibioprophylaxiePage);
    return AntibioprophylaxiePage;
}());

//# sourceMappingURL=antibioprophylaxie.js.map

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
            { isShown: false, title: "Aciclovir (Zovirax®)", posologie: "30 à 60 mg/kg/j en 3 prises.", reconstitution: "avec EPPI ou NaCl 0,9%, 25 mg/mL.", dilution: "NaCl 0,9%, max. 7 mg/mL sur VVP, 25 mg/mL sur VVC.", administration: "IVL sur 60 minutes.", remarques: "Incompatible avec la nutrition parentérale et la ceftazidime." },
            { title: "Amikacine (Amiklin®)", posologie: "15 à 30 mg/kg/j en 1 prise.", reconstitution: "", dilution: "si besoin, avec EPPI, 125 mg/mL.", administration: "IV en 30 minutes.", remarques: "Objectif : pic 60 à 80 mg/L ; résiduelle inférieure à 4 mg/L. Utiliser une ligne dédiée, ne pas mélanger avec béta-lactamines, héparines, dexaméthasone." },
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
            { title: "Gentamicine (Gentalline®)", posologie: "5 à 8 mg/kg/j en 1 prise.", reconstitution: "NA.", dilution: "G5% ou NaCl 0,9%, max. 10 mg/mL.", administration: "IVL en 30 minutes.", remarques: "Objectifs : pic 60 à 80 mg/L, résiduelle inférieure à 1 mg/L. Incompatible avec les pénicillines et les héparines > 1 UI/mL." },
            { title: "Imipénème-Cilastine (Tienam®)", posologie: "60 à 100 mg/kg/j en 4 prises sans dépasser 4 g/j.", reconstitution: "G5% ou NaCl 0,9%, 25 mg/mL.", dilution: "G5% ou NaCl 0,9%, 5 mg/mL, max. 7 mg/mL si restriction hydrique, stable 4h.", administration: "IVL en 30 minutes, 60 minutes au delà de 500 mg.", remarques: "Posologies et concentrations exprimées en dose d'Imipgène. Contre indique chez l'insuffisant rénale. Compatible avec la nutrition parentérale." },
            { title: "Lévofloxacine (Tavanic®)", posologie: "20 mg/kg/j de 6 mois à 5 ans, en 2 prises. 10 mg/kg/j au delà de 5 ans, en 1 prise, sans dépasser 1g/j.", reconstitution: "NA.", dilution: "NA.", administration: "IVL en 60 minutes.", remarques: "Incompatible avec les bicarbonates et les héparines. Privilégier la voie orale : la biodisponibilité est identique." },
            { title: "Méropénème (Meronem®)", posologie: "60 à 120 mg/kg/j en 3 prises ou en continu, sans dépasser 6 g/j.", reconstitution: "EPPI ou NaCl 0,9%, 50 mg/mL.", dilution: "NaCl 0,9% (stable 8h) ou G5% (stable 2h), 1 à 20 mg/mL.", administration: "IVL en 30 minutes.", remarques: "Compatible avec la nutrition parentérale." },
            { title: "Métronidazole (Flagyl®)", posologie: "30 mg/kg/j en 3 à 4 prises, sans dépasser 4 g/j.", reconstitution: "NA.", dilution: "NA.", administration: "IVL en 30 minutes.", remarques: "Compatible avec la nutrition parentérale." },
            { title: "Pipéracilline-Tazobactam (Tazocilline®)", posologie: "300 mg/kg/j, en 3 à 4 prises ou en continu, sans dépasser 16 g/j.", reconstitution: "EPPI, G5% ou NaCl 0,9%, 200 mg/mL.", dilution: "G5 ou NaCl 0,9%, 20 à 80 mg/mL, stable 24h.", administration: "IVL en 30 minutes.", remarques: "Posologies et concentrations exprimées en pipéracilline. Incompatible avec les aminosides et les bicarbonates. Compatible avec la nutrition parentérale." },
            { title: "Rifampicine (Rifadine®)", posologie: "10 à 30 mg/kg/j en 1 prise (tuberculose) ou 2 prises (autres indications), sans dépasser 1,2 g/j.", reconstitution: "EPPI 60 mg/mL.", dilution: "G5% ou NaCl 0,9%, usuel 2,4 mg/mL, ne pas dépasser 6 mg/mL, stable 6h.", administration: "IVL en 30 minutes.", remarques: "Incompatible avec la nutrition parentérale. Très agressif en cas d'extravasation. Inducteur enzymatique." },
            { title: "Ticarcilline-Acide Clavulanique (Claventin®)", posologie: "225 à 300 mg/kg/j en 3 à 4 prises, sans dépasser 18 g/j.", reconstitution: "EPPI ou NaCl 0,9%.", dilution: "G5% ou NaCl 0,9%, 30 à 50 mg/mL, stable 6h.", administration: "IVL sur 30 minutes.", remarques: "Posologies et concentrations exprimées en ticarcilline. Max 5 mg/kg/prise et 20 mg/kg/j d'acide clavulanique. Incompatible avec les aminosideS, bicarbonates et la nutrition parentérale. Teneur en sodium 5,2 mEq/g et teneur en potassium 0,33 mEq/g. " },
            { title: "Triméthoprime-Sulfaméthoxazole (Bactrim®)", posologie: "30 à 60 mg/kg/j en 2 prises (curatif pneumocystis carinii : 100 mg/kg/j en 3 prises).", reconstitution: "NA.", dilution: "G5% ou NaCl 0,9% 3,2 mg/mL (stable 6h), max. 8 mg/mL si restriction hydrique (stable 1h).", administration: "IVL sur 60 minutes.", remarques: "Posologies et concentrations exprimées en Sulfaméthoxazole. Peut être administré pur sur VVC. Incompatible avec la nutrition parentérale." },
            { title: "Vancomycine (Vancocine®)", posologie: "40 à 60 mg/kg/j en 4 prises ou en continu.", reconstitution: "EPPI 50 mg/mL.", dilution: "G5% ou NaCl 0,9%, ne pas dépasser 10 mg/mL, stable 24h.", administration: "IVL en 60 minutes ou IVSE.", remarques: "Objectif : T0 20-25 mg/mL. Ralentir la perfusion en cas de réaction cutanée (Redman Syndrome). Compatible avec la nutrition parentérale, les lipides IV et l'héparine < 1 UI/mL." },
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

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScoliosePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(18);
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
var ScoliosePage = /** @class */ (function () {
    function ScoliosePage(navCtrl, navParams, storage, ToastController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.ToastController = ToastController;
        this.checkedItem = false;
        this.Consultation = [
            { title: 'Cadre nosologique', item: "Scoliose idiopathique de croissance (peu de comorbidités associées) ou scoliose secondaire : myopathes, infirmes moteurs cérébraux, dystrophie, épilepsie. Risque élevé de comorbidités en cas de scoliose secondaire.", isChecked: false, count: 1 },
            { title: 'Comorbidités', item: 'Pour les scolioses secondaires, rechercher et explorer les comorbidités cardiaques (ECG, ETT), respiratoires (EFR pour évaluation du TVR et recherche TVO associé).', isChecked: false, count: 1 },
            { title: 'Condition physique', item: "Evaluer la tolérance à l'effort (PE score).", isChecked: false, count: 1 },
            { title: 'Etat nutritionnel', item: "Evaluer l'IMC (risque infectieux augmenté pour un IMC < 16 ou > 30).", isChecked: false, count: 1 },
            { title: 'Risque infectieux', item: "Eliminer systématiquement un foyer urinaire par un ECBU et un foyer dentaire par examen stomatologique. Réaliser le dépistage nasal du staphylocoque doré et la décontamination cutanée en pré-opératoire.", isChecked: false, count: 1 },
            { title: 'Risque hémorragique', item: "Le risque est augmenté par : l'étiologie secondaire de la scoliose, le nombre d'étages à fixer, la nécessité de réaliser des ostéotomies transpédiculaires, une fixation sacrée, et la durée prévue de la chirurgie. Prescrire la supplémentation en fer et acide folique pour 6 semaines avant la chirurgie. Injections d'EPO à J-28, J-21, J-14 et J-7. Objectif : hémoglobinémie > 15 g/dL en pré-opératoire.", isChecked: false, count: 1 },
            { title: "Risque d'intubation difficile", item: "Rechercher une atteinte thoracique haute, une atteinte cervicale, une instabilité ou un antécédent de luxation cervicale. Le cas échéant, prévoir d'emblée une intubation par fibroscopie.", isChecked: false, count: 1 },
        ];
        this.VPA = [
            { title: 'Bilans', item: "Vérifier que les bilans prescrits ont été réalisés, vérifier les résultats (ojectif d'hémoglobinémie > 15 g/dL). Prescrire les RAI et la 2e détermination de groupe. Vérifier que la décontamination cutanée a bien été réalisée.", isChecked: false, class: this.checkedItem },
            { title: 'Transfusion', item: 'Faire une commande de culots globulaires prévisionnelle.', isChecked: false, class: this.checkedItem },
            { title: 'Analgésie', item: 'Introduire la gabapentine.', isChecked: false, class: this.checkedItem },
        ];
        this.PreOperatoire = [
            { title: "USC", item: "Confirmer la place en USC pour le post-opératoire.", isChecked: false, },
            { title: "Monitorage", item: "BIS en place avant l'induction. TOF pour monitorage de la curarisation continue en IVSE - sauf en cas de monitorage des potentiels moteurs. Prévoir un remplissage de 10 mL/kg avant le positionnement en décubitus ventral. Prévoir une sonde de Doppler oesophagien pour le monitorage hémodynamique.", isChecked: false, },
            { title: "Prévention", item: "Infections : Antibioprophylaxie par Céfazoline IV 30 minutes avant l'incision. Saignement : Exacyl systématique : 10 mg/kg sur 30 minutes 20 minutes avant l'incision, puis 5 mg/kg/h IVSE jusqu'au début de la fermeture. Préparer le flacon de récupération du cell saver sur l'aspiration chirurgicale.", isChecked: false, },
            { title: "Dispostifs", item: "Dispositifs : deux voies veineuses (18G), sonde thermique, discuter la pose d'un cathéter veineux central et d'un cathéter artériel selon le terrain. Sondage vésical systématique.", isChecked: false, },
        ];
        this.PerOperatoire = [
            { title: "Pendant l'intervention", item: "Réalisation de la rachianesthésie chirurgicale. Surveillance des saignements en per-opératoire et HemoCue. Risque de saignement principal au moment des ostéotomies pédiculaires. Monter le cell-saver à environ 1000cc dans le flacon de récupération. Surveiller régulièrement l'installation (position de la tête, absence de compression des yeux). Surveiller la survenue de variations hémodynamiques brutales pendant la réduction chirurgicale (pouvant signer une souffrance médullaire aiguë). Maintenir des apports de 15 mL/kg/h et surveiller la diurèse.",
                isChecked: false },
            { title: "En fin d'intervention", item: "Arrêt de la curarisation et de l'acide tranexamique au début de la fermeture.",
                isChecked: false },
        ];
        this.PostOperatoire = [
            { title: "Réhabilitation précoce", item: "Extubation en salle. Analgésie multimodale (paracétamol, kétoprofène, acupan IVSE, PCA morphine, Gabapentine) devant permettre le premier lever à J1 avec kinésithérapeute.",
                isChecked: false },
            { title: "Prévention", item: "Thromboprophylaxie systématique : Enoxaparine 4000 UI à H8 post opératoire. Poursuite de l'antibioprophylaxie par Céfazoline pendant 48h. Protection gastrique par Pantoprazole." },
            { title: "Biologie", item: "Bilan à J1 comprenant NFS, Pq, ionogramme sanguin, créatininémie, hémostase. Poursuivre les apports pour maintenir une diurèse > 1 mL/kg/h.",
                isChecked: false },
            { title: "Dispositifs", item: "Ouverture des redons à H+6 post opératoire avec accord du chirurgien." }
        ];
        this.isShownConsultation = false;
        this.isShownVPA = false;
        this.isShownPerOp = false;
        this.isShownPostOp = false;
        this.isShownPreOp = false;
        this.allCheckedConsultation = false;
        this.allCheckedVPA = false;
        this.allCheckedPreOp = false;
        this.allCheckedPerOp = false;
        this.allCheckedPostOp = false;
    }
    ScoliosePage.prototype.retourHome = function () {
        this.navCtrl.pop();
    };
    ;
    ScoliosePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExtrophieVesicalePage');
    };
    ;
    ScoliosePage.prototype.ionViewWillEnter = function () {
    };
    ;
    ScoliosePage.prototype.ToggleConsultation = function () {
        this.isShownConsultation = !this.isShownConsultation;
    };
    ;
    ScoliosePage.prototype.ToggleVPA = function () {
        this.isShownVPA = !this.isShownVPA;
    };
    ;
    ScoliosePage.prototype.TogglePreOp = function () {
        this.isShownPreOp = !this.isShownPreOp;
    };
    ;
    ScoliosePage.prototype.TogglePerOp = function () {
        this.isShownPerOp = !this.isShownPerOp;
    };
    ;
    ScoliosePage.prototype.TogglePostOp = function () {
        this.isShownPostOp = !this.isShownPostOp;
    };
    ;
    ScoliosePage.prototype.checkCS = function () {
        var checkCS = this.Consultation
            .filter(function (item) { return item.isChecked === false; })
            .reduce(function (sum, current) { return sum + current.count; }, 0);
        if (checkCS == 0) {
            this.allCheckedConsultation = true;
            var toastCS = this.ToastController.create({
                message: "Items spécifiques de consultation tous validés.",
                position: 'Bottom',
                showCloseButton: true,
                closeButtonText: "OK.",
                duration: 3000,
            });
            toastCS.present();
        }
        else {
            this.allCheckedConsultation = false;
        }
        ;
    };
    ;
    ScoliosePage.prototype.checkVPA = function () {
        var checkVPA = this.VPA
            .filter(function (item) { return item.isChecked === false; })
            .reduce(function (sum, current) { return sum + current.count; }, 0);
        if (checkVPA == 0) {
            this.allCheckedVPA = true;
            var toastVPA = this.ToastController.create({
                message: "Items spécifiques de VPA tous validés.",
                position: 'Bottom',
                showCloseButton: true,
                closeButtonText: "OK.",
                duration: 3000,
            });
            toastVPA.present();
        }
        else {
            this.allCheckedVPA = false;
        }
        ;
    };
    ;
    ScoliosePage.prototype.checkPreOperatoire = function () {
        var checkPreOp = this.PreOperatoire
            .filter(function (item) { return item.isChecked === false; })
            .reduce(function (sum, current) { return sum + current.count; }, 0);
        if (checkPreOp == 0) {
            this.allCheckedPreOp = true;
            var toastPreOp = this.ToastController.create({
                message: "Items spécifiques du pré-opératoire tous validés.",
                position: 'Bottom',
                showCloseButton: true,
                closeButtonText: "OK.",
                duration: 3000,
            });
            toastPreOp.present();
        }
        else {
            this.allCheckedPreOp = false;
        }
        ;
    };
    ;
    ScoliosePage.prototype.checkPerOperatoire = function () {
        var checkPerOp = this.PerOperatoire
            .filter(function (item) { return item.isChecked === false; })
            .reduce(function (sum, current) { return sum + current.count; }, 0);
        if (checkPerOp == 0) {
            this.allCheckedPerOp = true;
            var toastPerOp = this.ToastController.create({
                message: "Items spécifiques du per-opératoire tous validés.",
                position: 'Bottom',
                showCloseButton: true,
                closeButtonText: "OK.",
                duration: 3000,
            });
            toastPerOp.present();
        }
        else {
            this.allCheckedPerOp = false;
        }
        ;
    };
    ;
    ScoliosePage.prototype.checkPostOperatoire = function () {
        var checkPostOp = this.PostOperatoire
            .filter(function (item) { return item.isChecked === false; })
            .reduce(function (sum, current) { return sum + current.count; }, 0);
        if (checkPostOp == 0) {
            this.allCheckedPostOp = true;
            var toastPostOp = this.ToastController.create({
                message: "Items spécifiques du post-opératoire tous validés.",
                position: 'Bottom',
                showCloseButton: true,
                closeButtonText: "OK.",
                duration: 3000,
            });
            toastPostOp.present();
        }
        else {
            this.allCheckedPostOp = false;
        }
        ;
    };
    ;
    ScoliosePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-scoliose',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\scoliose\scoliose.html"*/'<ion-content>\n\n  <div class="header"> \n\n    <div (click)="retourHome()" class="backButton">\n    <ion-icon start color="turquoise-fonce" name="arrow-back"></ion-icon>\n    Retour\n    </div>\n    Anesthésie pour chirurgie de scoliose</div>\n      <br>\n\n      <ion-item color="warning">\n        <p class="entete_protocole">Auteurs : Dr. Florence Julien-Marsollier, Pr. Souhayl DAHMANI</p>\n        <p class="entete_protocole">Date de publication : 15/11/2018</p>\n      </ion-item>\n\n      <br>\n\n\n  <ion-card color="turquoise-fonce">\n    <ion-card-content>  Objectifs : \n      <p class="dilutionDrogueInduction"> - anticiper les risques.</p> \n      <p class="dilutionDrogueInduction"> - réhabilitation accélérée après chirurgie : raccourcir les séjours en SSPI & USC.</ion-card-content>\n  </ion-card>\n\n\n  <!-- PARTIE CONSULTATION -->\n\n  <ion-item class="drogueContainer" (click)="ToggleConsultation()">\n      <ion-label class="drogueInduction" color="dark-turquoise">Consultation &nbsp;&nbsp;\n      <ion-icon *ngIf="allCheckedConsultation" name="checkbox"  style="zoom:1"></ion-icon>\n      <ion-icon *ngIf="!isShownConsultation" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n      <ion-icon *ngIf="isShownConsultation" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n      </ion-label>\n      </ion-item>\n\n      <div *ngIf="isShownConsultation">\n      <ion-card *ngFor="let entry of Consultation" class="drogueContainer">\n        <ion-item>\n        <ion-label class="drogueInduction">{{entry.title}}</ion-label>\n        <ion-checkbox color="turquoise-fonce" (click)="checkCS()" [(ngModel)]="entry.isChecked"></ion-checkbox>\n      </ion-item>\n      <ion-card-content *ngIf="!entry.isChecked" class="comment">{{entry.item}}</ion-card-content></ion-card>\n      </div>\n\n\n\n<!-- PARTIE VPA -->\n\n<ion-item class="drogueContainer" (click)="ToggleVPA()">\n  <ion-label class="drogueInduction" color="dark-turquoise">Visite pré-anesthésique &nbsp;&nbsp;\n  <ion-icon *ngIf="allCheckedVPA" name="checkbox"  style="zoom:1"></ion-icon>\n  <ion-icon *ngIf="!isShownVPA" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n  <ion-icon *ngIf="isShownVPA" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n  </ion-label>\n  </ion-item>\n\n  <div *ngIf="isShownVPA">\n  <ion-card *ngFor="let entry of VPA" class="drogueContainer">\n    <ion-item>\n    <ion-label class="drogueInduction">{{entry.title}}</ion-label>\n    <ion-checkbox color="turquoise-fonce" (click)="checkVPA()" [(ngModel)]="entry.isChecked"></ion-checkbox>\n  </ion-item>\n  <ion-card-content *ngIf="!entry.isChecked" class="comment">{{entry.item}}</ion-card-content></ion-card>\n  </div>\n\n\n  <!-- PARTIE PRE OP -->\n\n<ion-item class="drogueContainer" (click)="TogglePreOp()">\n  <ion-label class="drogueInduction" color="dark-turquoise">Pré-opératoire &nbsp;&nbsp;\n    <ion-icon *ngIf="allCheckedPreOp" name="checkbox"  style="zoom:1"></ion-icon>\n  <ion-icon *ngIf="!isShownPreOp" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n  <ion-icon *ngIf="isShownPreOp" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n  </ion-label>\n  </ion-item>\n \n  <div *ngIf="isShownPreOp">\n  <ion-card *ngFor="let entry of PreOperatoire" class="drogueContainer">\n    <ion-item>\n    <ion-label class="drogueInduction">{{entry.title}}</ion-label>\n    <ion-checkbox color="turquoise-fonce" (click)="checkPreOperatoire()" [(ngModel)]="entry.isChecked"></ion-checkbox>\n  </ion-item>\n  <ion-card-content *ngIf="!entry.isChecked" class="comment">{{entry.item}}\n  </ion-card-content></ion-card>\n  </div>\n\n\n<!-- PARTIE PER OP -->\n\n<ion-item class="drogueContainer" (click)="TogglePerOp()">\n  <ion-label class="drogueInduction" color="dark-turquoise">Per-opératoire &nbsp;&nbsp;\n    <ion-icon *ngIf="allCheckedPerOp" name="checkbox"  style="zoom:1"></ion-icon>\n  <ion-icon *ngIf="!isShownPerOp" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n  <ion-icon *ngIf="isShownPerOp" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n  </ion-label>\n  </ion-item>\n\n  <div *ngIf="isShownPerOp">\n  <ion-card *ngFor="let entry of PerOperatoire" class="drogueContainer">\n    <ion-item>\n    <ion-label class="drogueInduction">{{entry.title}}</ion-label>\n    <ion-checkbox color="turquoise-fonce" (click)="checkPerOperatoire()" [(ngModel)]="entry.isChecked"></ion-checkbox>\n  </ion-item>\n  <ion-card-content  *ngIf="!entry.isChecked" class="comment"> {{entry.item}}\n  </ion-card-content></ion-card>\n  </div>\n\n\n<!-- PARTIE POST OP -->\n\n<ion-item class="drogueContainer" (click)="TogglePostOp()">\n  <ion-label class="drogueInduction" color="dark-turquoise">Post-opératoire & SSPI &nbsp;&nbsp;\n    <ion-icon *ngIf="allCheckedPostOp" name="checkbox"  style="zoom:1"></ion-icon>\n  <ion-icon *ngIf="!isShownPostOp" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n  <ion-icon *ngIf="isShownPostOp" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n  </ion-label>\n  </ion-item>\n\n  <div *ngIf="isShownPostOp">\n  <ion-card *ngFor="let entry of PostOperatoire" class="drogueContainer">\n    <ion-item>\n    <ion-label class="drogueInduction">{{entry.title}}</ion-label>\n    <ion-checkbox color="turquoise-fonce" (click)="checkPostOperatoire()" [(ngModel)]="entry.isChecked"></ion-checkbox>\n  </ion-item>\n  <ion-card-content *ngIf="!entry.isChecked" class="comment"> {{entry.item}}\n  </ion-card-content></ion-card>\n  </div>\n\n \n</ion-content>\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\scoliose\scoliose.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], ScoliosePage);
    return ScoliosePage;
}());

//# sourceMappingURL=scoliose.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecommandationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser_ngx__ = __webpack_require__(148);
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
 * Generated class for the RecommandationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecommandationsPage = /** @class */ (function () {
    function RecommandationsPage(navCtrl, navParams, InAppBrowser, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.InAppBrowser = InAppBrowser;
        this.menu = menu;
    }
    RecommandationsPage.prototype.menuToggle = function () {
        this.menu.open();
    };
    ;
    RecommandationsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecommandationsPage');
    };
    RecommandationsPage.prototype.openWebpage = function (url) {
        var browser = this.InAppBrowser.create(url, '_system');
    };
    RecommandationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recommandations',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\recommandations\recommandations.html"*/'\n\n<ion-content padding>\n\n  <div class="header">  \n    <ion-icon class="menuButton" color="turquoise-fonce" name="menu" (click)="menuToggle()"></ion-icon>\n      Recommandations pour l\'anesthésie pédiatrique</div> \n  \n      <br>\n      <br>\n\n  Choisir parmi les recommandations listées ci-dessous (ouvre une fenêtre dans le navigateur) : \n\n  <ion-item (click)="openWebpage(\'https://sfar.org/wp-content/uploads/2019/10/rfe-gestion-des-voies-aeriennes-de-lenfant.pdf\')"><ion-label>\n    RFE SFAR 2018 \n    <p>Voies aériennes de l\'enfant</p>\n  </ion-label></ion-item>\n\n  <ion-item (click)="openWebpage(\'https://www.has-sante.fr/upload/docs/application/pdf/2015-02/transfusion_de_globules_rouges_homologues_-_produits_indications_alternatives_-_recommandations.pdf\')">\n    <ion-label>HAS ANSM 2014\n    <p> Bonnes pratiques transfusionnelles</p>\n  </ion-label></ion-item>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\recommandations\recommandations.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], RecommandationsPage);
    return RecommandationsPage;
}());

//# sourceMappingURL=recommandations.js.map

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InfoPage = /** @class */ (function () {
    function InfoPage(navCtrl, navParams, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
    }
    InfoPage.prototype.menuToggle = function () {
        this.menu.open();
    };
    ;
    InfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InfoPage');
    };
    InfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\info\info.html"*/'<!--\n  Generated template for the InfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n\n  <div class="header">  \n    <ion-icon class="menuButton" color="turquoise-fonce" name="menu" (click)="menuToggle()"></ion-icon>\n      Information & Conditions d\'utilisation</div> \n  \n      <br>\n\n  <br><br>\n  <b>Application développée par l\'équipe d\'anesthésie de l\'hôpital Robert Debré.</b>\n  <br>\n\n  <hr>\n  <br>\n  Conditions générales d\'utilisation : \n  <br>\n  (en cours).\n</ion-content>\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\info\info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], InfoPage);
    return InfoPage;
}());

//# sourceMappingURL=info.js.map

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(506);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(834);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser_ngx__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_accueil_accueil__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_options_options__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_plateau_induction_plateau_induction__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_plateau_vas_plateau_vas__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_gestion_fluides_gestion_fluides__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_antalgie_antalgie__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_urgence_urgence__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_entretien_anesth_entretien_anesth__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_loco_regionale_loco_regionale__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_extrophie_vesicale_extrophie_vesicale__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_anti_infectieux_anti_infectieux__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_service_data_liste_anti_infectieux__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_protocoles_protocoles__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_recommandations_recommandations__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_monitorage_monitorage__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_courbes_courbes__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_antibioprophylaxie_antibioprophylaxie__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_scores_scores__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_info_info__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_scoliose_scoliose__ = __webpack_require__(496);
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
                __WEBPACK_IMPORTED_MODULE_8__pages_accueil_accueil__["a" /* AccueilPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_options_options__["a" /* OptionsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_plateau_induction_plateau_induction__["a" /* PlateauInductionPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_plateau_vas_plateau_vas__["a" /* PlateauVasPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_gestion_fluides_gestion_fluides__["a" /* GestionFluidesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_antalgie_antalgie__["a" /* AntalgiePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_urgence_urgence__["a" /* UrgencePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_entretien_anesth_entretien_anesth__["a" /* EntretienAnesthPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_anti_infectieux_anti_infectieux__["a" /* AntiInfectieuxPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_loco_regionale_loco_regionale__["a" /* LocoRegionalePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_extrophie_vesicale_extrophie_vesicale__["a" /* ExtrophieVesicalePage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_scoliose_scoliose__["a" /* ScoliosePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_protocoles_protocoles__["a" /* ProtocolesPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_recommandations_recommandations__["a" /* RecommandationsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_monitorage_monitorage__["a" /* MonitoragePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_courbes_courbes__["a" /* CourbesPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_antibioprophylaxie_antibioprophylaxie__["a" /* AntibioprophylaxiePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_scores_scores__["a" /* ScoresPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_info_info__["a" /* InfoPage */],
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
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_accueil_accueil__["a" /* AccueilPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_options_options__["a" /* OptionsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_plateau_induction_plateau_induction__["a" /* PlateauInductionPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_plateau_vas_plateau_vas__["a" /* PlateauVasPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_gestion_fluides_gestion_fluides__["a" /* GestionFluidesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_antalgie_antalgie__["a" /* AntalgiePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_urgence_urgence__["a" /* UrgencePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_entretien_anesth_entretien_anesth__["a" /* EntretienAnesthPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_anti_infectieux_anti_infectieux__["a" /* AntiInfectieuxPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_loco_regionale_loco_regionale__["a" /* LocoRegionalePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_extrophie_vesicale_extrophie_vesicale__["a" /* ExtrophieVesicalePage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_scoliose_scoliose__["a" /* ScoliosePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_protocoles_protocoles__["a" /* ProtocolesPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_recommandations_recommandations__["a" /* RecommandationsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_monitorage_monitorage__["a" /* MonitoragePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_courbes_courbes__["a" /* CourbesPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_antibioprophylaxie_antibioprophylaxie__["a" /* AntibioprophylaxiePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_scores_scores__["a" /* ScoresPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_info_info__["a" /* InfoPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_21__providers_service_data_liste_anti_infectieux__["a" /* ServiceDataProvider */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */],
            ],
            exports: []
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_accueil_accueil__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_plateau_induction_plateau_induction__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_gestion_fluides_gestion_fluides__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_plateau_vas_plateau_vas__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_antalgie_antalgie__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_urgence_urgence__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_pre_medication_pre_medication__ = __webpack_require__(833);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_entretien_anesth_entretien_anesth__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_anti_infectieux_anti_infectieux__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_loco_regionale_loco_regionale__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_extrophie_vesicale_extrophie_vesicale__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_monitorage_monitorage__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_protocoles_protocoles__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_recommandations_recommandations__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_courbes_courbes__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_scores_scores__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_info_info__ = __webpack_require__(500);
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
            { title: 'Premedication', component: __WEBPACK_IMPORTED_MODULE_8__pages_pre_medication_pre_medication__["a" /* PreMedicationPage */] },
            { title: 'Plateau pour induction', component: __WEBPACK_IMPORTED_MODULE_3__pages_plateau_induction_plateau_induction__["a" /* PlateauInductionPage */] },
            { title: 'Voies aériennes', component: __WEBPACK_IMPORTED_MODULE_5__pages_plateau_vas_plateau_vas__["a" /* PlateauVasPage */] },
            { title: "Urgences", component: __WEBPACK_IMPORTED_MODULE_7__pages_urgence_urgence__["a" /* UrgencePage */] },
            { title: 'Entretien anesthéique', component: __WEBPACK_IMPORTED_MODULE_9__pages_entretien_anesth_entretien_anesth__["a" /* EntretienAnesthPage */] },
            { title: 'Gestion des fluides', component: __WEBPACK_IMPORTED_MODULE_4__pages_gestion_fluides_gestion_fluides__["a" /* GestionFluidesPage */] },
            { title: 'Analgésie & NVPO', component: __WEBPACK_IMPORTED_MODULE_6__pages_antalgie_antalgie__["a" /* AntalgiePage */] },
            { title: 'Anti-infectieux', component: __WEBPACK_IMPORTED_MODULE_10__pages_anti_infectieux_anti_infectieux__["a" /* AntiInfectieuxPage */] },
            { title: 'Loco-régionale', component: __WEBPACK_IMPORTED_MODULE_11__pages_loco_regionale_loco_regionale__["a" /* LocoRegionalePage */] },
            { title: 'Extrophie vésicale', component: __WEBPACK_IMPORTED_MODULE_12__pages_extrophie_vesicale_extrophie_vesicale__["a" /* ExtrophieVesicalePage */] },
            { title: 'Protocoles', component: __WEBPACK_IMPORTED_MODULE_14__pages_protocoles_protocoles__["a" /* ProtocolesPage */] },
            { title: 'Recommandations', component: __WEBPACK_IMPORTED_MODULE_15__pages_recommandations_recommandations__["a" /* RecommandationsPage */] },
            { title: 'Monitorage', component: __WEBPACK_IMPORTED_MODULE_13__pages_monitorage_monitorage__["a" /* MonitoragePage */] },
            { title: 'Courbes', component: __WEBPACK_IMPORTED_MODULE_18__pages_courbes_courbes__["a" /* CourbesPage */] },
            { title: 'Scores', component: __WEBPACK_IMPORTED_MODULE_19__pages_scores_scores__["a" /* ScoresPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleLightContent();
            _this.splashScreen.hide();
        });
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
    MyApp.prototype.openRecommandations = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_15__pages_recommandations_recommandations__["a" /* RecommandationsPage */]);
        this.menu.close();
    };
    ;
    MyApp.prototype.openInfo = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_20__pages_info_info__["a" /* InfoPage */]);
        this.menu.close();
    };
    MyApp.prototype.openAccueilPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_accueil_accueil__["a" /* AccueilPage */]);
        this.menu.close();
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\app\app.html"*/'<ion-menu [content]="content" type="overlay" side="start" menuId="custom" contentId="main" class="my-custom-menu">\n\n  <ion-content>\n\n    <ion-list>\n\n      <ion-item>MENU</ion-item>\n\n      <br><br>\n      <ion-item (click)="openAccueilPage()" color="white"><b>Accueil QuadruPed</b></ion-item>    \n      <ion-item (click)="openRecommandations()" color="white">Recommandations & références</ion-item> \n      <ion-item (click)="openInfo()" color="white">Informations & CGU</ion-item> \n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 263,
	"./af.js": 263,
	"./ar": 264,
	"./ar-dz": 265,
	"./ar-dz.js": 265,
	"./ar-kw": 266,
	"./ar-kw.js": 266,
	"./ar-ly": 267,
	"./ar-ly.js": 267,
	"./ar-ma": 268,
	"./ar-ma.js": 268,
	"./ar-sa": 269,
	"./ar-sa.js": 269,
	"./ar-tn": 270,
	"./ar-tn.js": 270,
	"./ar.js": 264,
	"./az": 271,
	"./az.js": 271,
	"./be": 272,
	"./be.js": 272,
	"./bg": 273,
	"./bg.js": 273,
	"./bm": 274,
	"./bm.js": 274,
	"./bn": 275,
	"./bn-bd": 276,
	"./bn-bd.js": 276,
	"./bn.js": 275,
	"./bo": 277,
	"./bo.js": 277,
	"./br": 278,
	"./br.js": 278,
	"./bs": 279,
	"./bs.js": 279,
	"./ca": 280,
	"./ca.js": 280,
	"./cs": 281,
	"./cs.js": 281,
	"./cv": 282,
	"./cv.js": 282,
	"./cy": 283,
	"./cy.js": 283,
	"./da": 284,
	"./da.js": 284,
	"./de": 285,
	"./de-at": 286,
	"./de-at.js": 286,
	"./de-ch": 287,
	"./de-ch.js": 287,
	"./de.js": 285,
	"./dv": 288,
	"./dv.js": 288,
	"./el": 289,
	"./el.js": 289,
	"./en-au": 290,
	"./en-au.js": 290,
	"./en-ca": 291,
	"./en-ca.js": 291,
	"./en-gb": 292,
	"./en-gb.js": 292,
	"./en-ie": 293,
	"./en-ie.js": 293,
	"./en-il": 294,
	"./en-il.js": 294,
	"./en-in": 295,
	"./en-in.js": 295,
	"./en-nz": 296,
	"./en-nz.js": 296,
	"./en-sg": 297,
	"./en-sg.js": 297,
	"./eo": 298,
	"./eo.js": 298,
	"./es": 299,
	"./es-do": 300,
	"./es-do.js": 300,
	"./es-mx": 301,
	"./es-mx.js": 301,
	"./es-us": 302,
	"./es-us.js": 302,
	"./es.js": 299,
	"./et": 303,
	"./et.js": 303,
	"./eu": 304,
	"./eu.js": 304,
	"./fa": 305,
	"./fa.js": 305,
	"./fi": 306,
	"./fi.js": 306,
	"./fil": 307,
	"./fil.js": 307,
	"./fo": 308,
	"./fo.js": 308,
	"./fr": 309,
	"./fr-ca": 310,
	"./fr-ca.js": 310,
	"./fr-ch": 311,
	"./fr-ch.js": 311,
	"./fr.js": 309,
	"./fy": 312,
	"./fy.js": 312,
	"./ga": 313,
	"./ga.js": 313,
	"./gd": 314,
	"./gd.js": 314,
	"./gl": 315,
	"./gl.js": 315,
	"./gom-deva": 316,
	"./gom-deva.js": 316,
	"./gom-latn": 317,
	"./gom-latn.js": 317,
	"./gu": 318,
	"./gu.js": 318,
	"./he": 319,
	"./he.js": 319,
	"./hi": 320,
	"./hi.js": 320,
	"./hr": 321,
	"./hr.js": 321,
	"./hu": 322,
	"./hu.js": 322,
	"./hy-am": 323,
	"./hy-am.js": 323,
	"./id": 324,
	"./id.js": 324,
	"./is": 325,
	"./is.js": 325,
	"./it": 326,
	"./it-ch": 327,
	"./it-ch.js": 327,
	"./it.js": 326,
	"./ja": 328,
	"./ja.js": 328,
	"./jv": 329,
	"./jv.js": 329,
	"./ka": 330,
	"./ka.js": 330,
	"./kk": 331,
	"./kk.js": 331,
	"./km": 332,
	"./km.js": 332,
	"./kn": 333,
	"./kn.js": 333,
	"./ko": 334,
	"./ko.js": 334,
	"./ku": 335,
	"./ku.js": 335,
	"./ky": 336,
	"./ky.js": 336,
	"./lb": 337,
	"./lb.js": 337,
	"./lo": 338,
	"./lo.js": 338,
	"./lt": 339,
	"./lt.js": 339,
	"./lv": 340,
	"./lv.js": 340,
	"./me": 341,
	"./me.js": 341,
	"./mi": 342,
	"./mi.js": 342,
	"./mk": 343,
	"./mk.js": 343,
	"./ml": 344,
	"./ml.js": 344,
	"./mn": 345,
	"./mn.js": 345,
	"./mr": 346,
	"./mr.js": 346,
	"./ms": 347,
	"./ms-my": 348,
	"./ms-my.js": 348,
	"./ms.js": 347,
	"./mt": 349,
	"./mt.js": 349,
	"./my": 350,
	"./my.js": 350,
	"./nb": 351,
	"./nb.js": 351,
	"./ne": 352,
	"./ne.js": 352,
	"./nl": 353,
	"./nl-be": 354,
	"./nl-be.js": 354,
	"./nl.js": 353,
	"./nn": 355,
	"./nn.js": 355,
	"./oc-lnc": 356,
	"./oc-lnc.js": 356,
	"./pa-in": 357,
	"./pa-in.js": 357,
	"./pl": 358,
	"./pl.js": 358,
	"./pt": 359,
	"./pt-br": 360,
	"./pt-br.js": 360,
	"./pt.js": 359,
	"./ro": 361,
	"./ro.js": 361,
	"./ru": 362,
	"./ru.js": 362,
	"./sd": 363,
	"./sd.js": 363,
	"./se": 364,
	"./se.js": 364,
	"./si": 365,
	"./si.js": 365,
	"./sk": 366,
	"./sk.js": 366,
	"./sl": 367,
	"./sl.js": 367,
	"./sq": 368,
	"./sq.js": 368,
	"./sr": 369,
	"./sr-cyrl": 370,
	"./sr-cyrl.js": 370,
	"./sr.js": 369,
	"./ss": 371,
	"./ss.js": 371,
	"./sv": 372,
	"./sv.js": 372,
	"./sw": 373,
	"./sw.js": 373,
	"./ta": 374,
	"./ta.js": 374,
	"./te": 375,
	"./te.js": 375,
	"./tet": 376,
	"./tet.js": 376,
	"./tg": 377,
	"./tg.js": 377,
	"./th": 378,
	"./th.js": 378,
	"./tk": 379,
	"./tk.js": 379,
	"./tl-ph": 380,
	"./tl-ph.js": 380,
	"./tlh": 381,
	"./tlh.js": 381,
	"./tr": 382,
	"./tr.js": 382,
	"./tzl": 383,
	"./tzl.js": 383,
	"./tzm": 384,
	"./tzm-latn": 385,
	"./tzm-latn.js": 385,
	"./tzm.js": 384,
	"./ug-cn": 386,
	"./ug-cn.js": 386,
	"./uk": 387,
	"./uk.js": 387,
	"./ur": 388,
	"./ur.js": 388,
	"./uz": 389,
	"./uz-latn": 390,
	"./uz-latn.js": 390,
	"./uz.js": 389,
	"./vi": 391,
	"./vi.js": 391,
	"./x-pseudo": 392,
	"./x-pseudo.js": 392,
	"./yo": 393,
	"./yo.js": 393,
	"./zh-cn": 394,
	"./zh-cn.js": 394,
	"./zh-hk": 395,
	"./zh-hk.js": 395,
	"./zh-mo": 396,
	"./zh-mo.js": 396,
	"./zh-tw": 397,
	"./zh-tw.js": 397
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 547;

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccueilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__plateau_induction_plateau_induction__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__plateau_vas_plateau_vas__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entretien_anesth_entretien_anesth__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gestion_fluides_gestion_fluides__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__loco_regionale_loco_regionale__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__antalgie_antalgie__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__urgence_urgence__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__options_options__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__monitorage_monitorage__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__courbes_courbes__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_in_app_browser_ngx__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__antibioprophylaxie_antibioprophylaxie__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__scores_scores__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__protocoles_protocoles__ = __webpack_require__(166);
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



















var AccueilPage = /** @class */ (function () {
    function AccueilPage(viewCtrl, modalCtrl, app, navCtrl, navParams, storage, InAppBrowser, pickerController, ToastController, popoverController, menu, alertController) {
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.InAppBrowser = InAppBrowser;
        this.pickerController = pickerController;
        this.ToastController = ToastController;
        this.popoverController = popoverController;
        this.menu = menu;
        this.alertController = alertController;
        // make AccueilPage the root (or first) page
        this.rootPage = AccueilPage_1;
        this.isShownFooter = true;
        this.biometrie = { Kg: "", Gr: "", mois: "", ans: "" };
        this.AgeNum = 0;
        this.PoidsNum = 0;
        this.ageannees = 0;
        this.agemois = 0;
        this.agesemaines = 0;
        this.ageLecture = 0;
        this.ageColor = "danger";
        this.poidskilogrammes = 0;
        this.poidsgrammes = 0;
        this.poidsColor = "danger";
        this.sexeMF = "Fille";
        this.TailleColor = "danger";
        this.MorceauChoisi = "Choisir...";
        this.musicPlaying = false;
        this.audio = new Audio();
        this.timeBegan = null;
        this.timeStopped = null;
        this.stoppedDuration = 0;
        this.started = null;
        this.running = false;
        this.blankTime = "00:00:00";
        this.time = "00:00:00";
    }
    AccueilPage_1 = AccueilPage;
    AccueilPage.prototype.menuToggle = function () {
        this.menu.open();
        this.stopMusic();
    };
    ;
    /** ----------------------------  RENSEIGNER AGE ET POIDS ----------------------------------------------------------------- */
    AccueilPage.prototype.alertAgePoidsTaille = function () {
        var AgePoidsTailleAlert = this.alertController.create({
            cssClass: 'alerte',
            title: 'Données manquantes',
            message: "Renseignez l'âge, le poids et la taille de votre patient pour accéder aux données de biométrie.",
            buttons: [
                {
                    text: "OK",
                    handler: function () {
                        return;
                    }
                }
            ],
        });
        AgePoidsTailleAlert.present();
    };
    ;
    AccueilPage.prototype.alertPoidsAge = function () {
        var AgePoidsAlert = this.alertController.create({
            cssClass: 'alerte',
            title: 'Données manquantes',
            message: "Renseignez l'âge et le poids de votre patient pour accéder à ce module.",
            buttons: [
                {
                    text: "OK",
                    handler: function () {
                        return;
                    }
                }
            ],
        });
        AgePoidsAlert.present();
    };
    ;
    /*** ----------------------------------------------------------MUSIQUE----------------------------------------------------  */
    AccueilPage.prototype.selectMusic = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var options, picker;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            buttons: [
                                {
                                    text: "Annuler",
                                    role: 'cancel',
                                },
                                {
                                    text: 'Valider',
                                    handler: function (value) {
                                        console.log(value.morceau.value);
                                        _this.MorceauChoisi = value.morceau.value;
                                        console.log(_this.MorceauChoisi);
                                    }
                                }
                            ],
                            columns: [
                                { name: "morceau",
                                    options: [
                                        { text: 'Ha les crocodiles', value: 'Crocodiles' },
                                        { text: 'Un éléphant qui se balançait', value: 'Elephants' },
                                        { text: 'Une souris verte', value: 'Souris verte' },
                                    ]
                                },
                            ]
                        };
                        return [4 /*yield*/, this.pickerController.create(options)];
                    case 1:
                        picker = _a.sent();
                        picker.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    AccueilPage.prototype.playMusic = function () {
        console.log(this.MorceauChoisi);
        if (this.MorceauChoisi == "Choisir...") {
            var musicAlert = this.alertController.create({
                cssClass: 'alerte',
                title: 'Choisir une musique',
                message: 'Choisissez un morceau parmi les classiques intemporels proposés !',
                buttons: [
                    {
                        text: "OK",
                        handler: function () {
                            return;
                        }
                    }
                ],
            });
            musicAlert.present();
        }
        else if (this.MorceauChoisi == "Elephants") {
            this.musicPlaying = true;
            this.audio.src = "/assets/music/elephant.mp3";
        }
        else if (this.MorceauChoisi == "Crocodiles") {
            this.musicPlaying = true;
            this.audio.src = "/assets/music/crocodiles.mp3";
        }
        else if (this.MorceauChoisi == "Souris verte") {
            this.musicPlaying = true;
            this.audio.src = "/assets/music/sourisverte.mp3";
        }
        ;
        this.audio.load();
        this.audio.play();
    };
    ;
    AccueilPage.prototype.stopMusic = function () {
        this.musicPlaying = false;
        this.audio.pause();
    };
    ;
    /*** ----------------------------------------------------------TIMER----------------------------------------------------  */
    AccueilPage.prototype.start = function () {
        if (this.running)
            return;
        if (this.timeBegan === null) {
            this.reset();
            this.timeBegan = new Date();
        }
        if (this.timeStopped !== null) {
            var newStoppedDuration = (+new Date() - this.timeStopped);
            this.stoppedDuration = this.stoppedDuration + newStoppedDuration;
        }
        this.started = setInterval(this.clockRunning.bind(this), 10);
        this.running = true;
    };
    AccueilPage.prototype.stop = function () {
        this.running = false;
        this.timeStopped = new Date();
        clearInterval(this.started);
    };
    AccueilPage.prototype.reset = function () {
        this.running = false;
        clearInterval(this.started);
        this.stoppedDuration = 0;
        this.timeBegan = null;
        this.timeStopped = null;
        this.time = this.blankTime;
    };
    AccueilPage.prototype.zeroPrefix = function (num, digit) {
        var zero = '';
        for (var i = 0; i < digit; i++) {
            zero += '0';
        }
        return (zero + num).slice(-digit);
    };
    AccueilPage.prototype.clockRunning = function () {
        var currentTime = new Date();
        var timeElapsed = new Date(currentTime - this.timeBegan - this.stoppedDuration);
        var hour = timeElapsed.getUTCHours();
        var min = timeElapsed.getUTCMinutes();
        var sec = timeElapsed.getUTCSeconds();
        this.time =
            this.zeroPrefix(hour, 2) + ":" +
                this.zeroPrefix(min, 2) + ":" +
                this.zeroPrefix(sec, 2);
    };
    ;
    /* --------------------------------------------------------- END TIMER ------------------------------------------ */
    AccueilPage.prototype.ionViewDidLoad = function () {
        this.toastCGU();
    };
    ;
    AccueilPage.prototype.toastCGU = function () {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ToastController.create({
                            message: "En utilisant l'application, vous acceptez les conditions générales d'utilisation.",
                            position: 'Bottom',
                            showCloseButton: true,
                            closeButtonText: "OK.",
                            duration: 5000,
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    AccueilPage.prototype.showPickerAge = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var options, picker;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            buttons: [
                                {
                                    text: "Annuler",
                                    role: 'cancel',
                                },
                                {
                                    text: 'Valider',
                                    handler: function (value) {
                                        console.log(value.annees);
                                        _this.ageannees = value.annees.value;
                                        _this.agemois = value.mois.value;
                                        _this.agesemaines = value.semaines.value;
                                        console.log("âge de ", _this.ageannees, " années, ", _this.agemois, " mois, ", _this.agesemaines, " semaines.");
                                        _this.AgeNum = _this.ageannees * 12 + _this.agemois + Math.round((_this.agesemaines / 4) * 10) / 10;
                                        console.log("âge total en mois : ", _this.AgeNum);
                                        _this.ageLecture = Math.round((_this.AgeNum / 12) * 10) / 10;
                                        _this.storage.set("AgeNum", _this.AgeNum);
                                        _this.storage.set("ageLecture", _this.ageLecture);
                                        _this.ageColor = "dark-turquoise";
                                    }
                                }
                            ],
                            columns: [
                                { name: "annees",
                                    prefix: "Ans",
                                    options: [
                                        { text: '0', value: 0 },
                                        { text: '1', value: 1 },
                                        { text: '2', value: 2 },
                                        { text: '3', value: 3 },
                                        { text: '4', value: 4 },
                                        { text: '5', value: 5 },
                                        { text: '6', value: 6 },
                                        { text: '7', value: 7 },
                                        { text: '8', value: 8 },
                                        { text: '9', value: 9 },
                                        { text: '10', value: 10 },
                                        { text: '11', value: 11 },
                                        { text: '12', value: 12 },
                                        { text: '13', value: 13 },
                                        { text: '14', value: 14 },
                                        { text: '15', value: 15 },
                                        { text: '16', value: 16 },
                                        { text: '17', value: 17 },
                                        { text: '18', value: 18 },
                                    ]
                                },
                                { name: "mois",
                                    prefix: "Mois",
                                    options: [
                                        { text: '0', value: 0 },
                                        { text: '1', value: 1 },
                                        { text: '2', value: 2 },
                                        { text: '3', value: 3 },
                                        { text: '4', value: 4 },
                                        { text: '5', value: 5 },
                                        { text: '6', value: 6 },
                                        { text: '7', value: 7 },
                                        { text: '8', value: 8 },
                                        { text: '9', value: 9 },
                                        { text: '10', value: 10 },
                                        { text: '11', value: 11 },
                                        { text: '12', value: 12 },
                                        { text: '13', value: 13 },
                                        { text: '14', value: 14 },
                                        { text: '15', value: 15 },
                                        { text: '16', value: 16 },
                                        { text: '17', value: 17 },
                                        { text: '18', value: 18 },
                                    ]
                                },
                                { name: "semaines",
                                    prefix: "Sem.",
                                    options: [
                                        { text: '0', value: 0 },
                                        { text: '1', value: 1 },
                                        { text: '2', value: 2 },
                                        { text: '3', value: 3 },
                                        { text: '4', value: 4 },
                                        { text: '5', value: 5 },
                                        { text: '6', value: 6 },
                                        { text: '7', value: 7 },
                                        { text: '8', value: 8 },
                                        { text: '9', value: 9 },
                                        { text: '10', value: 10 },
                                        { text: '11', value: 11 },
                                        { text: '12', value: 12 },
                                        { text: '13', value: 13 },
                                        { text: '14', value: 14 },
                                        { text: '15', value: 15 },
                                        { text: '16', value: 16 },
                                        { text: '17', value: 17 },
                                        { text: '18', value: 18 },
                                    ]
                                },
                            ]
                        };
                        return [4 /*yield*/, this.pickerController.create(options)];
                    case 1:
                        picker = _a.sent();
                        picker.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AccueilPage.prototype.showPickerPoids = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var options, picker;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            buttons: [
                                {
                                    text: "Annuler",
                                    role: 'cancel'
                                },
                                {
                                    text: 'Valider',
                                    handler: function (value) {
                                        _this.poidskilogrammes = value.kilogrammes.value + value.DixKilogrammes.value;
                                        _this.poidsgrammes = value.grammes.value;
                                        _this.PoidsNum = _this.poidskilogrammes + Math.round((_this.poidsgrammes / 1000) * 10) / 10;
                                        console.log(_this.PoidsNum);
                                        _this.storage.set("PoidsNum", _this.PoidsNum);
                                        _this.poidsColor = "dark-turquoise";
                                    }
                                }
                            ],
                            columns: [
                                { name: "DixKilogrammes",
                                    prefix: "Kg.",
                                    options: [
                                        { text: '0', value: 0 },
                                        { text: '10', value: 10 },
                                        { text: '20', value: 20 },
                                        { text: '30', value: 30 },
                                        { text: '40', value: 40 },
                                        { text: '50', value: 50 },
                                        { text: '60', value: 60 },
                                        { text: '70', value: 70 },
                                        { text: '80', value: 80 },
                                        { text: '90', value: 90 },
                                    ]
                                },
                                { name: "kilogrammes",
                                    prefix: "Kg.",
                                    options: [
                                        { text: '0', value: 0 },
                                        { text: '1', value: 1 },
                                        { text: '2', value: 2 },
                                        { text: '3', value: 3 },
                                        { text: '4', value: 4 },
                                        { text: '5', value: 5 },
                                        { text: '6', value: 6 },
                                        { text: '7', value: 7 },
                                        { text: '8', value: 8 },
                                        { text: '9', value: 9 },
                                    ]
                                },
                                { name: "grammes",
                                    prefix: "g.",
                                    options: [
                                        { text: '0', value: 0 },
                                        { text: '100', value: 100 },
                                        { text: '200', value: 200 },
                                        { text: '300', value: 300 },
                                        { text: '400', value: 400 },
                                        { text: '500', value: 500 },
                                        { text: '600', value: 600 },
                                        { text: '700', value: 700 },
                                        { text: '800', value: 800 },
                                        { text: '900', value: 900 },
                                    ]
                                },
                            ]
                        };
                        return [4 /*yield*/, this.pickerController.create(options)];
                    case 1:
                        picker = _a.sent();
                        picker.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AccueilPage.prototype.showPickerTaille = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var options, picker;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            buttons: [
                                {
                                    text: "Annuler",
                                    role: 'cancel'
                                },
                                {
                                    text: 'Valider',
                                    handler: function (value) {
                                        _this.TailleMetre = value.metre.value;
                                        _this.TailleCentimetre = value.centimetre.value;
                                        _this.Taille = Math.floor(_this.TailleMetre * 100) + Math.floor(_this.TailleCentimetre);
                                        console.log(_this.PoidsNum);
                                        _this.storage.set("Taille", _this.Taille);
                                        _this.TailleColor = "dark-turquoise";
                                    }
                                }
                            ],
                            columns: [
                                { name: "metre",
                                    prefix: "m.",
                                    options: [
                                        { text: '0', value: 0 },
                                        { text: '0,10', value: 0.1 },
                                        { text: '0,20', value: 0.2 },
                                        { text: '0,30', value: 0.3 },
                                        { text: '0,40', value: 0.4 },
                                        { text: '0,50', value: 0.5 },
                                        { text: '0,60', value: 0.6 },
                                        { text: '0,70', value: 0.7 },
                                        { text: '0,80', value: 0.8 },
                                        { text: '0,90', value: 0.9 },
                                        { text: '1', value: 1 },
                                        { text: '1,10', value: 1.1 },
                                        { text: '1,20', value: 1.2 },
                                        { text: '1,30', value: 1.3 },
                                        { text: '1,40', value: 1.4 },
                                        { text: '1,50', value: 1.5 },
                                        { text: '1,60', value: 1.6 },
                                        { text: '1,70', value: 1.7 },
                                        { text: '1,80', value: 1.8 },
                                        { text: '1,90', value: 1.9 },
                                        { text: '2', value: 2 },
                                    ]
                                },
                                { name: "centimetre",
                                    prefix: "Cm.",
                                    options: [
                                        { text: '0', value: 0 },
                                        { text: '1', value: 1 },
                                        { text: '2', value: 2 },
                                        { text: '3', value: 3 },
                                        { text: '4', value: 4 },
                                        { text: '5', value: 5 },
                                        { text: '6', value: 6 },
                                        { text: '7', value: 7 },
                                        { text: '8', value: 8 },
                                        { text: '9', value: 9 },
                                    ]
                                },
                            ]
                        };
                        return [4 /*yield*/, this.pickerController.create(options)];
                    case 1:
                        picker = _a.sent();
                        picker.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    /* ----------------------------RECUPERATION DES DONNEES ANTERIEURES LE CAS ECHEANT---------------------------------------------------------------------------- */
    AccueilPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var promiseList = [];
        promiseList.push(this.storage.get('AgeNum').then(function (Age) {
            _this.AgeNum = Age;
            if (_this.AgeNum) {
                _this.ageColor = "dark-turquoise";
            }
            else {
                _this.ageColor = "danger";
            }
            ;
            _this.ageLecture = Math.round((_this.AgeNum / 12) * 10) / 10;
            _this.storage.get('PoidsNum').then(function (Poids) {
                _this.PoidsNum = Poids;
                if (_this.PoidsNum) {
                    _this.poidsColor = "dark-turquoise";
                }
                else {
                    _this.poidsColor = "danger";
                }
                ;
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
                            _this.storage.get('sexeMF').then(function (sexe) {
                                _this.sexeMF = sexe;
                                if (!_this.sexeMF) {
                                    _this.sexeMF = "Fille";
                                }
                                else {
                                    _this.sexeMF == sexe;
                                }
                                ;
                                _this.storage.set('sexeMF', _this.sexeMF);
                                _this.storage.get('Taille').then(function (Taille) {
                                    _this.Taille = Taille;
                                    if (_this.Taille) {
                                        _this.TailleColor = "dark-turquoise";
                                    }
                                    else {
                                        _this.TailleColor = "danger";
                                    }
                                    ;
                                });
                            });
                        });
                    });
                });
            });
        }));
    };
    ;
    AccueilPage.prototype.SetSexe = function () {
        this.storage.set("sexeMF", this.sexeMF);
        console.log("sexe enregistré : ", this.sexeMF);
    };
    ;
    /* ----------------------------BOUTONS DE NAVIGATION---------------------------------------------------------------------------- */
    AccueilPage.prototype.displayInduction = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__plateau_induction_plateau_induction__["a" /* PlateauInductionPage */]);
    };
    ;
    AccueilPage.prototype.displayVAS = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__plateau_vas_plateau_vas__["a" /* PlateauVasPage */]);
    };
    ;
    AccueilPage.prototype.displayEntretien = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__entretien_anesth_entretien_anesth__["a" /* EntretienAnesthPage */]);
    };
    ;
    AccueilPage.prototype.displayGestionFluides = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__gestion_fluides_gestion_fluides__["a" /* GestionFluidesPage */]);
    };
    ;
    AccueilPage.prototype.displayALR = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__loco_regionale_loco_regionale__["a" /* LocoRegionalePage */]);
    };
    ;
    AccueilPage.prototype.displayPostop = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__antalgie_antalgie__["a" /* AntalgiePage */]);
    };
    ;
    AccueilPage.prototype.displayUrgences = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__urgence_urgence__["a" /* UrgencePage */]);
    };
    ;
    AccueilPage.prototype.displayOptions = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__options_options__["a" /* OptionsPage */]);
    };
    ;
    AccueilPage.prototype.displayMonitorage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__monitorage_monitorage__["a" /* MonitoragePage */]);
    };
    ;
    AccueilPage.prototype.displayCourbes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__courbes_courbes__["a" /* CourbesPage */]);
    };
    ;
    AccueilPage.prototype.displayATBprophylaxie = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__antibioprophylaxie_antibioprophylaxie__["a" /* AntibioprophylaxiePage */]);
    };
    ;
    AccueilPage.prototype.displayScores = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__scores_scores__["a" /* ScoresPage */]);
    };
    ;
    AccueilPage.prototype.displayProtocoles = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_16__protocoles_protocoles__["a" /* ProtocolesPage */]);
    };
    AccueilPage.prototype.openDARwebsite = function () {
        this.InAppBrowser.create("http://www.dar-robertdebre.com", '_system');
    };
    ;
    /* ----------------------------BOUTON DAIDE---------------------------------------------------------------------------- */
    AccueilPage.prototype.help = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            cssClass: 'alerte',
                            title: 'Utiliser QuadruPed',
                            message: 'Pour utiliser QuadruPed, renseignez un âge et un poids pour le patient en appuyant sur les boutons correspondant. Naviguez ensuite entre les différents onglets pour obtenir des suggestions de posologie et de stratégies. Renseignez la taille et le sexe du patient pour utiliser les données de biométrie.',
                            buttons: [
                                {
                                    text: "J'ai compris !",
                                    handler: function () {
                                        return;
                                    }
                                }
                            ],
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
    /* ----------------------------BOUTON EFFACER---------------------------------------------------------------------------- */
    AccueilPage.prototype.effacer = function () {
        this.storage.clear(); /* ATTTENTION EFFACE TOUT TOTALEMENT TOUT */
        this.AgeNum = 0;
        this.ageLecture = 0;
        this.PoidsNum = 0;
        this.Taille = 0;
        this.sexeMF = "Fille";
        this.DureeJeune = 0;
        this.Allergie = "";
        this.EstomacOuiNon = "vide";
        this.TailleColor = "danger";
        this.poidsColor = "danger";
        this.ageColor = "danger";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], AccueilPage.prototype, "nav", void 0);
    AccueilPage = AccueilPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-accueil',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\accueil\accueil.html"*/'<ion-content>\n  <ion-icon class="menuButton" color="turquoise-fonce" name="menu" (click)="menuToggle()"></ion-icon>\n  <div class="titleHome">  \n    QUADRUPED</div> \n\n    <br>\n    <br>\n\n \n \n  <ion-card class="homePagePatient">\n    <ion-card-content>\n\n      <ion-toolbar  color="turquoise" class="musicContainer">\n        <ion-buttons>\n        <ion-icon color="dark-turquoise" name="musical-notes"></ion-icon>    \n        <br>\n          <button (click)="selectMusic()" ion-button class="musicSelector" color="turquoise-fonce">{{MorceauChoisi}}</button>\n          <button  *ngIf="!musicPlaying" color="dark-turquoise" ion-button (click)="playMusic()"><ion-icon name="play"></ion-icon></button>\n        <button  *ngIf="musicPlaying" color="dark-turquoise" ion-button (click)="stopMusic()"><ion-icon name="pause"></ion-icon></button> \n      </ion-buttons>\n      </ion-toolbar>\n\n      <ion-toolbar  color="turquoise" class="timerContainer">\n        <ion-buttons >    \n          <ion-icon color="dark-turquoise" name="stopwatch"></ion-icon>    \n          <br>\n          <p text-center class="timerTime">\n          {{time}}\n          </p>\n      <button  *ngIf="!running" color="dark-turquoise" ion-button (click)="start()"><ion-icon name="play"></ion-icon></button>\n      <button  *ngIf="running" color="dark-turquoise" ion-button (click)="stop()"><ion-icon name="pause"></ion-icon></button>         \n      <button ion-button (click)="reset()"><ion-icon color="dark-turquoise" name="refresh-circle"></ion-icon></button>\n    </ion-buttons>\n  </ion-toolbar>\n\n    <img class="resize" src="/assets/imgs/sleeping-baby.png"  alt="Nouveau patient"> \n    \n    <br>\n\n      <ion-toolbar class="HomeButtonContainer">\n        <ion-buttons>\n          <span class="comment" *ngIf = "!PoidsNum || !AgeNum || !Taille">Renseigner les données relatives au patient :<br></span>\n          <span class="comment" *ngIf = "PoidsNum && AgeNum && Taille">Choisir parmi les modules accessibles<br></span>\n\n          <button class="SexeToggle">\n            <ion-segment swipeGesture="true" color="turquoise-fonce" [(ngModel)]="sexeMF" (ionChange)="SetSexe()">\n              <ion-segment-button value="Fille">\n                <ion-icon class="segmentIcon" name="female"></ion-icon>\n              </ion-segment-button>\n              <ion-segment-button value="Garçon">\n                <ion-icon class="segmentIcon" name="male"></ion-icon>\n              </ion-segment-button>\n            </ion-segment>\n          </button>\n\n          <button solid *ngIf = "!this.AgeNum" color="dark-turquoise" ion-button  (click)="showPickerAge()">Age </button>\n          <button *ngIf = "this.AgeNum > 24" color="dark-turquoise" ion-button  (click)="showPickerAge()">{{ageLecture}} ans </button>\n          <button *ngIf = "this.AgeNum > 0 && this.AgeNum <= 24" color="dark-turquoise" ion-button  (click)="showPickerAge()">{{AgeNum}} mois</button>\n\n          <button solid *ngIf = " !this.PoidsNum " color="dark-turquoise" ion-button  (click)="showPickerPoids()">Poids</button>\n          <button *ngIf = " this.PoidsNum " color="dark-turquoise" ion-button  (click)="showPickerPoids()">{{PoidsNum}} kg</button>\n\n\n          <button solid *ngIf = " !Taille " color="turquoise-fonce" ion-button  (click)="showPickerTaille()">Taille</button>\n          <button *ngIf = " Taille " color="turquoise-fonce" ion-button  (click)="showPickerTaille()">{{Taille}} cm</button>\n\n          <hr>\n          <button ion-button small color="dark-turquoise"  (click)="displayOptions()"><ion-icon name="options"></ion-icon> &nbsp; &nbsp;Options </button>\n          <button ion-button  small color="danger"  (click)="effacer()"><ion-icon name="trash"></ion-icon></button>\n          <button ion-button  small color="dark-turquoise"  (click)="help()"><ion-icon name="information-circle"></ion-icon></button>\n\n  \n    </ion-buttons>\n    </ion-toolbar>\n\n\n\n  </ion-card-content>\n</ion-card>\n\n<div class="monPatient">\n<b>Options : </b> <span *ngIf=" this.EstomacOuiNon">Estomac {{EstomacOuiNon}}</span> <span *ngIf="this.DureeJeune"> - Jeûne {{DureeJeune}} h</span><span *ngIf="this.Allergie"> - Allergie : {{Allergie}}</span>\n</div>\n\n<hr>\n\n   \n    <button class="homeButtons" ion-button small color="pastel-green"  (click)="displayScores()"><ion-icon name="stats"></ion-icon> &nbsp; &nbsp;Scores</button>\n    <button class="homeButtons" ion-button small color="pastel-green"  (click)="displayProtocoles()"><ion-icon name="list-box"></ion-icon> &nbsp; &nbsp;Protocoles</button>\n    \n\n  <button outline *ngIf = " !this.PoidsNum || !this.AgeNum " ion-button full small color="light" (click)="alertPoidsAge()"><ion-icon name="clipboard"></ion-icon> &nbsp; &nbsp;Urgences & Réanimation</button>\n  <button *ngIf = " this.PoidsNum && this.AgeNum " ion-button block small color="warning" (click)="displayUrgences()"><ion-icon name="clipboard"></ion-icon> &nbsp; &nbsp;Urgences & Réanimation</button>\n  <button *ngIf = "PoidsNum && AgeNum && Taille"  ion-button block small color="pastel-brown"  (click)="displayCourbes()"><ion-icon name="trending-up"></ion-icon> &nbsp; &nbsp;\n    Biométrie</button>\n  <button outline *ngIf = "!PoidsNum || !AgeNum || !Taille" ion-button full small color="light"  (click)="alertAgePoidsTaille()"><ion-icon name="trending-up"></ion-icon> &nbsp; &nbsp;\n    Biométrie</button>\n\n    \n          <button outline *ngIf = " !this.PoidsNum || !this.AgeNum " ion-button small color="light" class="homeButtons" (click)="alertPoidsAge()"><ion-icon name="pulse"></ion-icon> &nbsp; &nbsp; Monitorage</button>\n          <button outline *ngIf = " !this.PoidsNum || !this.AgeNum " ion-button small color="light" class="homeButtons" (click)="alertPoidsAge()"><ion-icon name="moon"></ion-icon> &nbsp; &nbsp; Induction </button>\n          <button outline *ngIf = " !this.PoidsNum || !this.AgeNum " ion-button small color="light" class="homeButtons" (click)="alertPoidsAge()"> <ion-icon name="analytics"></ion-icon> &nbsp; &nbsp; Voies Aériennes </button>\n          <button outline *ngIf = " !this.PoidsNum || !this.AgeNum " ion-button small color="light" class="homeButtons" (click)="alertPoidsAge()"><ion-icon name="umbrella"></ion-icon> &nbsp; &nbsp; Antibiotiques </button>\n          <button outline *ngIf = " !this.PoidsNum || !this.AgeNum " ion-button small color="light" class="homeButtons" (click)="alertPoidsAge()"><ion-icon name="cloudy-night"></ion-icon> &nbsp; &nbsp; Entretien </button> \n    \n          <button outline *ngIf = " !this.PoidsNum || !this.AgeNum " ion-button small color="light" class="homeButtons" (click)="alertPoidsAge()"><ion-icon name="water"></ion-icon> &nbsp; &nbsp; Apports & PSL</button>\n          <button outline *ngIf = " !this.PoidsNum || !this.AgeNum " ion-button small color="light" class="homeButtons" (click)="alertPoidsAge()"> <ion-icon name="pin"></ion-icon> &nbsp; &nbsp;Loco-régionale</button>\n          <button outline *ngIf = " !this.PoidsNum || !this.AgeNum " ion-button small color="light" class="homeButtons" (click)="alertPoidsAge()"><ion-icon name="alarm"></ion-icon> &nbsp; &nbsp;Réveil</button>\n\n    \n          <button solid *ngIf = " this.PoidsNum && this.AgeNum " ion-button small color="turquoise" class="homeButtons" (click)="displayMonitorage()"><ion-icon color="dark-turquoise" name="pulse"></ion-icon> &nbsp; &nbsp; Monitorage</button>\n          <button solid *ngIf = " this.PoidsNum && this.AgeNum " ion-button small color="turquoise" class="homeButtons" (click)="displayInduction()"><ion-icon color="dark-turquoise" name="moon"></ion-icon> &nbsp; &nbsp; Induction </button>\n          <button solid *ngIf = " this.PoidsNum && this.AgeNum " ion-button small color="turquoise" class="homeButtons" (click)="displayVAS()"> <ion-icon color="dark-turquoise" name="analytics"></ion-icon> &nbsp; &nbsp; Voies Aériennes </button>\n          <button solid *ngIf = " this.PoidsNum && this.AgeNum " ion-button small color="turquoise" class="homeButtons" (click)="displayATBprophylaxie()"><ion-icon color="dark-turquoise"  name="umbrella"></ion-icon> &nbsp; &nbsp; Antibiotiques </button>\n          <button solid *ngIf = " this.PoidsNum && this.AgeNum " ion-button small color="turquoise" class="homeButtons" (click)="displayEntretien()"><ion-icon color="dark-turquoise" name="cloudy-night"></ion-icon> &nbsp; &nbsp; Entretien </button> \n    \n          <button solid *ngIf = " this.PoidsNum && this.AgeNum " ion-button small color="turquoise" class="homeButtons" (click)="displayGestionFluides()"><ion-icon color="dark-turquoise" name="water"></ion-icon> &nbsp; &nbsp;Apports & PSL</button>\n          <button solid *ngIf = " this.PoidsNum && this.AgeNum " ion-button small color="turquoise" class="homeButtons" (click)="displayALR()"> <ion-icon color="dark-turquoise" name="pin"></ion-icon> &nbsp; &nbsp;Loco-régionale</button>\n          <button solid *ngIf = " this.PoidsNum && this.AgeNum " ion-button small color="turquoise" class="homeButtons" (click)="displayPostop()"><ion-icon color="dark-turquoise" name="alarm"></ion-icon> &nbsp; &nbsp;Réveil</button>\n\n\n      <img class="logoDAR" (click)="openDARwebsite()" src="/assets/imgs/logo_dar.png"> \n\n      </ion-content>\n\n  \n\n\n  \n \n\n\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\accueil\accueil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PickerController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AccueilPage);
    return AccueilPage;
    var AccueilPage_1;
}());

;
//# sourceMappingURL=accueil.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScoresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(18);
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
 * Generated class for the ScoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ScoresPage = /** @class */ (function () {
    function ScoresPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.isShownVPOP = false;
        this.totalVPOP = 0;
        this.isShownScoreAnticoag = false;
        this.prophylaxieAnticoag = "Hydratation adéquate, mobilisation précoce, ablation CVC le plus tôt possible (le cas échéant).";
        this.AnticoagTotal = 0;
        this.NiveauRisqueThrombose = "faible";
        this.isShownEVENDOL = false;
        this.EVENDOLVocal = 0;
        this.EVENDOLMimique = 0;
        this.EVENDOLMouvement = 0;
        this.EVENDOLPosition = 0;
        this.EVENDOLRelation = 0;
        this.EVENDOLTotal = 0;
        this.SeuilPrescriptionEVENDOL = "Non atteint.";
        this.isShownEDIN = false;
        this.EDINVisage = 0;
        this.EDINCorps = 0;
        this.EDINSommeil = 0;
        this.EDINRelation = 0;
        this.EDINReconfort = 0;
        this.EDINTotal = 0;
        this.SeuilPrescriptionEDIN = "Non atteint.";
        this.isShownAldrete = false;
        this.totalAldrete = 0;
        this.CATAldrete = "Cocher les items du score correspondant à l'état du patient.";
        this.isShownPADSS = false;
        this.CATPADSS = "Cocher les items du score correspondant à l'état du patient.";
        this.isShownSHS = false;
        this.risqueSHS = "Répondre aux questions du score.";
        this.isShownHEMSTOP = false;
        this.risqueHEMSTOP = "Répondre aux questions du score.";
        this.isShownBromage = false;
        this.VPOPform = [
            { val: 'Âge inférieur à 3 ans', isChecked: false, count: 0 },
            { val: 'Âge entre 3 et 6 ans', isChecked: false, count: 1 },
            { val: 'Âge entre 6 et 13 ans', isChecked: false, count: 2 },
            { val: 'Âge supérieur à 13 ans', isChecked: false, count: 1 },
            { val: 'Mal des transports', isChecked: false, count: 1 },
            { val: 'Chirurgie > 45 minutes', isChecked: false, count: 1 },
            { val: 'Chirurgie à risque : amygdales, strabisme, tympan', isChecked: false, count: 1 },
            { val: 'Réinjection de morphiniques', isChecked: false, count: 1 },
        ];
        this.AldreteForm = [
            { category: "Conscience", val: 'Réveillé et orienté', isChecked: false, count: 2 },
            { category: "", val: 'Réveillable par stimulation minime', isChecked: false, count: 1 },
            { category: "", val: 'Non réveillable par stimulation tactile', isChecked: false, count: 0 },
            { category: "Activité", val: 'Mobilité normale des extrémités', isChecked: false, count: 2 },
            { category: "", val: 'Faiblesse à la mobilité', isChecked: false, count: 1 },
            { category: "", val: 'Incapable de bouger les extrémités', isChecked: false, count: 0 },
            { category: "Respiration", val: 'Inspiration profonde possible, toux, normopnée', isChecked: false, count: 2 },
            { category: "", val: 'Tachypnée mais toux préservée', isChecked: false, count: 1 },
            { category: "", val: 'Dyspnée, pas de toux possible', isChecked: false, count: 0 },
            { category: "Hémodynamique", val: 'PAS ou PAM +/- 15% des valeurs avant induction', isChecked: false, count: 2 },
            { category: "", val: 'PAS ou PAM +/- 30% des valeurs avant induction', isChecked: false, count: 1 },
            { category: "", val: 'PAS ou PAM +/- 50% des valeurs avant induction', isChecked: false, count: 0 },
            { category: "Saturation", val: 'SpO2 > 92% en air ambiant', isChecked: false, count: 2 },
            { category: "", val: 'SpO2 > 90% en air ambiant', isChecked: false, count: 1 },
            { category: "", val: 'SpO2 < 90% en air ambiant', isChecked: false, count: 0 },
            { category: "Douleur", val: 'Pas de douleur', isChecked: false, count: 2 },
            { category: "", val: 'Douleur modérée mais contrôlée par les antalgiques', isChecked: false, count: 1 },
            { category: "", val: 'Douleur non contrôlée par les antalgiques', isChecked: false, count: 0 },
            { category: "NVPO", val: 'Pas de NVPO', isChecked: false, count: 2 },
            { category: "", val: 'Un épisode de NVPO isolé', isChecked: false, count: 1 },
            { category: "", val: 'NVPO persistants ', isChecked: false, count: 0 },
        ];
        this.PADSSForm = [
            { category: "FC & PAS", val: 'Variation < 20% par rapport au pré-opératoire', isChecked: false, count: 2, isItem: 1 },
            { category: "", val: 'Variation entre 20 et 40% par rapport au pré-opératoire', isChecked: false, count: 1, isItem: 1 },
            { category: "", val: 'Variation > 40% par rapport au pré-opératoire', isChecked: false, count: 0, isItem: 1 },
            { category: "Marche & activité", val: 'Marche stable, sans étourdissement', isChecked: false, count: 2, isItem: 1 },
            { category: "", val: 'Marche avec aide, activité réduite', isChecked: false, count: 1, isItem: 1 },
            { category: "", val: 'Marche impossible, hypotonie', isChecked: false, count: 0, isItem: 1 },
            { category: "NVPO", val: 'Pas de NVPO', isChecked: false, count: 2, isItem: 1 },
            { category: "", val: 'Un épisode de NVPO', isChecked: false, count: 1, isItem: 1 },
            { category: "", val: 'NVPO persistants', isChecked: false, count: 0, isItem: 1 },
            { category: "Douleur", val: 'Bien contrôlée', isChecked: false, count: 2, isItem: 1 },
            { category: "", val: 'Mal contrôlée', isChecked: false, count: 1, isItem: 1 },
            { category: "Saignement", val: 'Minime ou nul (pas de réfection de pansement)', isChecked: false, count: 2, isItem: 1 },
            { category: "", val: 'Significatif (réfection de pansement)', isChecked: false, count: 1, isItem: 1 },
        ];
        this.Anticoagform1 = [
            { val: 'ASA 3', isChecked: false, count: 1 },
            { val: 'BMI > 30', isChecked: false, count: 1 },
            { val: 'KT veineux central', isChecked: false, count: 1 },
            { val: 'Pathologie tumorale active', isChecked: false, count: 1 },
            { val: 'Insuffisance rénale', isChecked: false, count: 1 },
            { val: 'Déshydratation', isChecked: false, count: 1 },
            { val: 'Grossesse ou accouchement < 6 semaines', isChecked: false, count: 1 },
            { val: 'Contraception orale', isChecked: false, count: 1 },
            { val: 'Cardiopathie congénitale', isChecked: false, count: 1 },
            { val: 'Maladie métabolique ou inflammatoire', isChecked: false, count: 1 },
            { val: 'Thrombophilie connue', isChecked: false, count: 1 },
        ];
        this.Anticoagform2 = [
            { val: 'Durée anesth + chir > 4h', isChecked: false, count: 1 },
            { val: 'Chirurgie de hanche', isChecked: false, count: 1 },
            { val: 'Arthrodèse vertébrale', isChecked: false, count: 1 },
            { val: 'Âge supérieur à 13 ans', isChecked: false, count: 1 },
            { val: 'Chirurgie membre inférieur avec ostéotomie ou plâtre', isChecked: false, count: 1 },
            { val: 'Chirurgie de FAV', isChecked: false, count: 1 },
        ];
        this.Anticoagform3 = [
            { val: 'Alitement > 3j', isChecked: false, count: 1 },
            { val: 'Sepsis sévère', isChecked: false, count: 1 },
            { val: 'Traumatisme sévère ISS>9', isChecked: false, count: 1 },
            { val: 'Traumatisme médullaire et paraplégie', isChecked: false, count: 1 },
            { val: 'Brûlures sévères', isChecked: false, count: 1 },
            { val: 'Intubation et ventilation mécanique', isChecked: false, count: 1 },
        ];
        this.SHSform = [
            { val: "Q1. Besoin de secouer l'enfant :", count: 0 },
            { val: "Q2. Arrêts respiratoires nocturnes :", count: 0 },
            { val: "Q3. Difficultés à respirer la nuit :", count: 0 },
            { val: "Q4. Inquiétudes des parents sur le sommeil de l'enfant :", count: 0 },
            { val: "Q5. Intensité du bruit de son ronflement (pour cette question, échelle de 0 = faible à 4 = très bruyant) :", count: 0 },
            { val: "Q6. Existence de ronflement :", count: 0 },
        ];
        this.HEMSTOPform = [
            { val: "Q1. Avez-vous déjà consulté un médecin ou reçu un traitement pour un saignement prolongé ou inhabituel par exemple un saignement de nez ou une petite coupure ?", count: 0 },
            { val: "Q2. Avez-vous tendance à faire des bleus de plus de 2 cm ou des hématomes importants, sans choc ou traumatisme ou bien à un traumatisme minime ?", count: 0 },
            { val: "Q3. Avez-vous reconsulté votre dentiste pour un saignement après une extraction dentaire ?", count: 0 },
            { val: "Q4. Avez-vous saigné de manière anormale après une intervention chirurgicale (exemple opératoire des amygdales ou circoncision) ?", count: 0 },
            { val: "Q5. Y a-t-il des membres de la famille proche suivis pour une maladie de la coagulation, comme la maladie de Von Willebrand ou l'hémophilie ?", count: 0 },
            { val: "Q6. Pour les femmes : avez vous déjà consulté un médecin ou reçu un traitement pour des règles trop abondantes ? Avez vous saigné de façon anormale après un accouchement ?", count: 0 },
        ];
    }
    ScoresPage.prototype.retourHome = function () {
        this.navCtrl.pop();
    };
    ScoresPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ScoresPage');
    };
    ;
    ScoresPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var promiseList = [];
        promiseList.push(this.storage.get('AgeNum').then(function (Age) {
            _this.AgeNum = Age;
            _this.ageLecture = Math.round((_this.AgeNum / 12) * 10) / 10;
            _this.storage.get('PoidsNum').then(function (Poids) {
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
                            _this.storage.get('sexeMF').then(function (sexe) {
                                _this.sexeMF = sexe;
                                if (!sexe) {
                                    _this.sexeMF = "Fille";
                                }
                                ;
                                _this.storage.get('Taille').then(function (Taille) {
                                    _this.Taille = Taille;
                                    if (!_this.PoidsNum || !_this.AgeNum) {
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
                });
            });
        }));
    };
    ;
    ScoresPage.prototype.calculs = function () {
        if (this.AgeNum <= 36) {
            this.VPOPform[0].isChecked = true;
        }
        else if (this.AgeNum > 36 && this.AgeNum <= 72) {
            this.VPOPform[1].isChecked = true;
        }
        else if (this.AgeNum > 72 && this.AgeNum <= 156) {
            this.VPOPform[2].isChecked = true;
        }
        else if (this.AgeNum > 156) {
            this.VPOPform[3].isChecked = true;
        }
        ;
        this.countVPOP();
        this.setRiskVPOP();
    };
    /* EVALUATION NVPO PAR LE SCORE DE VPOP */
    ScoresPage.prototype.toggleVPOP = function () {
        this.isShownVPOP = !this.isShownVPOP;
    };
    ;
    ScoresPage.prototype.countVPOP = function () {
        console.log("count");
        this.totalVPOP = this.VPOPform.filter(function (item) { return item.isChecked === true; }).reduce(function (sum, current) { return sum + current.count; }, 0);
        this.setRiskVPOP();
        console.log(this.totalVPOP);
    };
    ;
    ScoresPage.prototype.setRiskVPOP = function () {
        if (this.totalVPOP == 0) {
            this.risqueVPOP = 6;
        }
        else if (this.totalVPOP == 1) {
            this.risqueVPOP = 7;
        }
        else if (this.totalVPOP == 2) {
            this.risqueVPOP = 15;
        }
        else if (this.totalVPOP == 3) {
            this.risqueVPOP = 25;
        }
        else if (this.totalVPOP == 4) {
            this.risqueVPOP = 39;
        }
        else if (this.totalVPOP == 5) {
            this.risqueVPOP = 53;
        }
        else if (this.totalVPOP == 6) {
            this.risqueVPOP = 69;
        }
        ;
        if (this.totalVPOP <= 2) {
            this.prophylaxieVPOP = "Risque faible. Dexaméthasone seule en prophylaxie.";
        }
        else if (this.totalVPOP <= 4) {
            this.prophylaxieVPOP = "Risque Modéré. Déxaméthasone et Dropéridol en prophylaxie. Eviter le protoxyde d'azote. Limiter les opioïdes en post-opératoire.";
        }
        else {
            this.prophylaxieVPOP = "Risque élevé. Déxaméthasone et Dropéridol en prophy  laxie. Considérer Ondansétron en per opératoire. Eviter le protoxyde d'azote. Limiter les opioïdes en post-opératoire.";
        }
    };
    ;
    /* ANTICOAGULATION */
    ScoresPage.prototype.toggleScoreAnticoag = function () {
        this.isShownScoreAnticoag = !this.isShownScoreAnticoag;
    };
    ScoresPage.prototype.countAnticoag = function () {
        this.Anticoag1 = this.Anticoagform1.filter(function (item1) { return item1.isChecked === true; }).reduce(function (sum1, current1) { return sum1 + current1.count; }, 0);
        this.Anticoag2 = this.Anticoagform2.filter(function (item2) { return item2.isChecked === true; }).reduce(function (sum2, current2) { return sum2 + current2.count; }, 0);
        this.Anticoag3 = this.Anticoagform3.filter(function (item3) { return item3.isChecked === true; }).reduce(function (sum3, current3) { return sum3 + current3.count; }, 0);
        this.AnticoagTotal = (this.Anticoag1 + this.Anticoag2 + this.Anticoag3);
        console.log("count total = ", this.AnticoagTotal);
        if (this.AnticoagTotal == 0) {
            this.MesuresSupplementairesAnticoag = "";
            this.NiveauRisqueThrombose = "faible";
        }
        else if (this.AnticoagTotal == 1) {
            this.MesuresSupplementairesAnticoag = "Bas anti-thrombose (grade 2)";
            this.NiveauRisqueThrombose = "intermédiaire";
        }
        else if (this.AnticoagTotal >= 2) {
            this.MesuresSupplementairesAnticoag = "Bas anti-thrombose (grade 2) + Lovenox 100 UI/kg/j SC sans dépasser 4000 UI/j.";
            this.NiveauRisqueThrombose = "élevé";
        }
        console.log(this.NiveauRisqueThrombose);
    };
    ;
    /* DOULEUR EVENDOL */
    ScoresPage.prototype.toggleEVENDOL = function () {
        this.isShownEVENDOL = !this.isShownEVENDOL;
    };
    ;
    ScoresPage.prototype.CalcEVENDOL = function () {
        this.EVENDOLTotal = Math.floor(this.EVENDOLVocal) + Math.floor(this.EVENDOLMimique) + Math.floor(this.EVENDOLMouvement) + Math.floor(this.EVENDOLPosition) + Math.floor(this.EVENDOLRelation);
        console.log(this.EVENDOLTotal);
        if (this.EVENDOLTotal <= 3) {
            this.SeuilPrescriptionEVENDOL = "Non atteint. Pas de traitement recommandé. Réévaluer régulièrement.";
        }
        else {
            this.SeuilPrescriptionEVENDOL = "Atteint : débuter un traitement antalgique ou augmenter d'un pallier.";
        }
        ;
    };
    /* DOULEUR EDIN */
    ScoresPage.prototype.toggleEDIN = function () {
        this.isShownEDIN = !this.isShownEDIN;
    };
    ;
    ScoresPage.prototype.CalcEDIN = function () {
        this.EDINTotal = Math.floor(this.EDINVisage) + Math.floor(this.EDINCorps) + Math.floor(this.EDINSommeil) + Math.floor(this.EDINRelation) + Math.floor(this.EDINReconfort);
        console.log(this.EDINTotal);
        if (this.EDINTotal <= 3) {
            this.SeuilPrescriptionEDIN = "Non atteint. Pas de traitement recommandé. Réévaluer régulièrement.";
        }
        else {
            this.SeuilPrescriptionEDIN = "Atteint : débuter un traitement antalgique ou augmenter d'un pallier.";
        }
        ;
    };
    /**Score d'ALDRETE sortie SSPI */
    ScoresPage.prototype.toggleAldrete = function () {
        this.isShownAldrete = !this.isShownAldrete;
    };
    ScoresPage.prototype.countAldrete = function () {
        this.totalAldrete = this.AldreteForm.filter(function (item) { return item.isChecked === true; }).reduce(function (sum, current) { return sum + current.count; }, 0);
        console.log(this.totalAldrete);
        if (this.totalAldrete <= 11) {
            this.CATAldrete = "Réveil insuffisant pour autoriser la sortie de SSPI.";
        }
        else {
            this.CATAldrete = "Sortie de SSPI possible avec accord du MAR référent du patient.";
        }
    };
    ;
    /**Score PADSS Sortie ambulatoire */
    ScoresPage.prototype.togglePADSS = function () {
        this.isShownPADSS = !this.isShownPADSS;
    };
    ScoresPage.prototype.countPADSS = function () {
        this.totalPADSS = this.PADSSForm.filter(function (item) { return item.isChecked === true; }).reduce(function (sum, current) { return sum + current.count; }, 0);
        console.log("PADSS = ", this.totalPADSS);
        var IsZeroPADSS = this.PADSSForm.filter(function (item) { return item.count == 0 && item.isChecked === true; }).reduce(function (sum, current) { return sum + current.isItem; }, 0);
        console.log("nombre d'items cotant 0 cochés = ", IsZeroPADSS);
        if (this.totalPADSS <= 8 && IsZeroPADSS == 0) {
            this.CATPADSS = "Etat incompatible avec une sortie en ambulatoire (score total insuffisant).";
        }
        else if (this.totalPADSS <= 8 && IsZeroPADSS != 0) {
            this.CATPADSS = "Etat incompatible avec une sortie en ambulatoire (un item coté 0, score total insuffisant).";
        }
        else if (this.totalPADSS > 8 && IsZeroPADSS != 0) {
            this.CATPADSS = "Etat incompatible avec une sortie en ambulatoire (un item coté 0).";
        }
        else {
            this.CATPADSS = "Sortie ambulatoire possible avec accord du MAR référent du patient.";
        }
        ;
    };
    ;
    /**Score SHS Risque de SAOS sévère de l'enfant */
    ScoresPage.prototype.toggleSHS = function () {
        this.isShownSHS = !this.isShownSHS;
    };
    ScoresPage.prototype.countSHS = function () {
        this.SHSQ1 = Math.floor(this.SHSform[0].count);
        this.SHSQ2 = Math.floor(this.SHSform[1].count);
        this.SHSQ3 = Math.floor(this.SHSform[2].count);
        this.SHSQ4 = Math.floor(this.SHSform[3].count);
        this.SHSQ5 = Math.floor(this.SHSform[4].count);
        this.SHSQ6 = Math.floor(this.SHSform[5].count);
        console.log(this.SHSQ1, this.SHSQ2, this.SHSQ3);
        this.cumuleSHS = Math.round(((((((((((this.SHSQ1 + this.SHSQ2) / 2) + this.SHSQ3) / 2) + this.SHSQ4) / 2) + this.SHSQ5) / 2) + this.SHSQ6) / 2) * 100) / 100;
        console.log("index cumule = ", this.cumuleSHS);
        if (this.cumuleSHS >= 2.72) {
            this.risqueSHS = "Enfant présentant probablement un SAOS sévère et à risque élevé d'apnées post-opératoire. Prévoir une hospitalisation post-opératoire. Prudence avec les morphiniques en post-opératoire.";
        }
        else {
            this.risqueSHS = "Enfant ne présentant probablement pas un SAOS sévère. Pas de contre indication à l'ambulatoire liée à ce paramètre.";
        }
    };
    ;
    /** SCORE HEMSTOP RISQUE DE SAIGNEMENT */
    ScoresPage.prototype.toggleHEMSTOP = function () {
        this.isShownHEMSTOP = !this.isShownHEMSTOP;
    };
    ;
    ScoresPage.prototype.countHEMSTOP = function () {
        this.totalHEMSTOP = Math.floor(this.HEMSTOPform[0].count) +
            Math.floor(this.HEMSTOPform[1].count) +
            Math.floor(this.HEMSTOPform[2].count) +
            Math.floor(this.HEMSTOPform[3].count) +
            Math.floor(this.HEMSTOPform[4].count) +
            Math.floor(this.HEMSTOPform[5].count);
        console.log(this.totalHEMSTOP);
        if (this.totalHEMSTOP >= 2) {
            this.risqueHEMSTOP = "Forte probabilité de sur-risque hémorragique. Bilan d'hémostase recommandé.";
        }
        else if (this.totalHEMSTOP == 1) {
            this.risqueHEMSTOP = "Probabilité intermédiaire de sur-risque hémorragique. Bilan d'hémostase à discuter.";
        }
        else {
            this.risqueHEMSTOP = "Probabilité très faible de sur-risque hémorragique. Pas de bilan d'hémostase.";
        }
    };
    ;
    /** SCORE DE BROMAGE */
    ScoresPage.prototype.toggleBromage = function () {
        this.isShownBromage = !this.isShownBromage;
    };
    ;
    ScoresPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-scores',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\scores\scores.html"*/'<ion-content>\n\n          <!-- HEADER MENU  -->\n          <div class="header"> \n\n            <div (click)="retourHome()" class="backButton">\n            <ion-icon start color="turquoise-fonce" name="arrow-back"></ion-icon>\n            Retour\n            </div>\n  Scores  </div>\n              <br>\n        \n                    <!-- HEADER MON PATIENT  -->\n    \n              <ion-item color="turquoise-fonce"> \n                <ion-label>\n                  <p class="MonPatient">{{sexeMF}} - {{ageLecture}} ans ( = {{AgeNum}} mois) - {{PoidsNum}} kg - {{Taille}} cm</p> \n                  <p class="MonPatient">Estomac {{EstomacOuiNon}} - Jeune {{DureeJeune}} h</p>\n                  <p class="MonPatient">Allergie : {{Allergie}}</p></ion-label> \n              </ion-item>\n          \n              <br>\n         <!-- END HEADER -->\n\n        <h3 padding>Consultation</h3>\n\n                     <!-- DEBUT SCORE SHS SAOS-->\n\n\n\n\n                     <ion-item (click)="toggleSHS()">\n                      <ion-label color="dark-turquoise"><ion-icon name="stats"></ion-icon> &nbsp; &nbsp; Sévérité SAOS (SHS)\n                        <ion-icon *ngIf="!isShownSHS" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n                        <ion-icon *ngIf="isShownSHS" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n                      </ion-label>\n                    </ion-item>\n            \n                   \n            \n                    <ion-card class="drogueContainer" *ngIf="isShownSHS">\n\n                      <p *ngIf="isShownSHS"  class="reference">Référence : Spruyt & al., Screening of pediatric sleep-disordered breathing. Chest 2012.\n                        <br>\n                      6 questions, 5 choix possibles (dans les 6 derniers mois): \n                        <br> - 0 : jamais \n                        <br> - 1 : rarement (une fois par semaine)\n                        <br> - 2 : occasionnelement (deux fois par semaine)\n                        <br> - 3 : fréquemment (3 à 4 fois par semaine)\n                        <br> - 4 : presque toujours (plus de 4 fois par semaine).\n                      </p>\n\n                      <ion-card-content *ngFor="let entry of SHSform">\n\n                        <ion-list>\n                            {{entry.val}}\n                            <br>\n                          \n                           <ion-segment [(ngModel)]="entry.count" color="dark-turquoise" (ionChange)="countSHS()">\n                            <ion-segment-button value="0">\n                              <ion-label>0</ion-label>\n                            </ion-segment-button>\n                            <ion-segment-button value="1">\n                              <ion-label>1</ion-label>\n                            </ion-segment-button>\n                            <ion-segment-button value="2">\n                              <ion-label>2</ion-label>\n                            </ion-segment-button>\n                            <ion-segment-button value="3">\n                              <ion-label>3</ion-label>\n                            </ion-segment-button>\n                            <ion-segment-button value="4">\n                              <ion-label>4</ion-label>\n                            </ion-segment-button>\n                          </ion-segment>            \n                        </ion-list>\n                      </ion-card-content>\n                    </ion-card>\n            \n                    <ion-card *ngIf="isShownSHS" class="drogueContainer">Interprétation : un score cumulé global supérieur à 2.72 prédit un index d\'apnée-hypopnée supérieur à 5/h, ce qui correspond à un SAOS sévère de l\'enfant. \n                    <ion-card-content>\n                    <ion-item class="drogueInduction">Score cumulé global : <b>{{cumuleSHS}}</b></ion-item>\n                    <p class="strategie" padding>{{risqueSHS}}</p>\n                    <p *ngIf="isShownSHS" class="comment" padding>Détail du calcul : A = (Q1+Q2)/2, B = (A+Q3)/2, C = (B+Q4)/2, D = (C+Q5)/2, score cumulé global = (D+Q6)/2</p>\n                  </ion-card-content> \n                  </ion-card>\n                                        <!-- FIN SCORE SHS SAOS-->\n\n        <!-- DEBUT SCORE HEMSTOP SAIGNEMENT-->\n\n        <ion-item (click)="toggleHEMSTOP()">\n          <ion-label color="dark-turquoise"><ion-icon name="stats"></ion-icon> &nbsp; &nbsp; Coagulopathies (HEMSTOP)\n            <ion-icon *ngIf="!isShownHEMSTOP" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n            <ion-icon *ngIf="isShownHEMSTOP" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n          </ion-label>\n        </ion-item>\n\n\n\n        <ion-card class="drogueContainer" *ngIf="isShownHEMSTOP">\n\n          <p class="reference">Référence : Bonhomme et al. Preoperative hemostatic assessment: a new and simple bleeding questionnaire. Can J. Anesthesiology 2016.\n            <br><br>Score développé chez l\'adulte. Envisager l\'utilisation de ce score pour sensibiliser la prescription du bilan d\'hémostase chez un enfant ayant acquis la marche. 6 questions, réponse par oui ou par non.\n            </p>\n    \n\n          <ion-card-content *ngFor="let entry of HEMSTOPform">\n            \n            <ion-list>\n                {{entry.val}}\n              \n              \n               <ion-segment [(ngModel)]="entry.count" color="dark-turquoise" (ionChange)="countHEMSTOP()">\n                <ion-segment-button value="0">\n                  <ion-label>Non</ion-label>\n                </ion-segment-button>\n                <ion-segment-button value="1">\n                  <ion-label>Oui</ion-label>\n                </ion-segment-button>\n              </ion-segment>            \n            </ion-list>\n          </ion-card-content>\n        </ion-card>\n\n        <ion-card *ngIf="isShownHEMSTOP" class="drogueContainer">Interprétation : un score supérieur à 2 rend hautement probable la présence d\'un sur-risque hémorragique périopératoire (Sn 89,5%, Sp 98,6%). \n        <ion-card-content>\n        <ion-item *ngIf="isShownHEMSTOP" class="drogueInduction">Total : <b>{{totalHEMSTOP}}/6 pts</b></ion-item>\n        <p class="strategie" padding>{{risqueHEMSTOP}}</p>\n        \n        </ion-card-content> \n        </ion-card>\n\n              <!-- FIN SCORE HEMSTOP SAIGNEMENT-->\n\n  <!-- SCORE VPOP-->\n\n\n\n    <ion-item (click)="toggleVPOP()">\n      <ion-label color="dark-turquoise"><ion-icon name="stats"></ion-icon> &nbsp; &nbsp; Risque NVPO (score VPOP)\n        <ion-icon *ngIf="!isShownVPOP" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n        <ion-icon *ngIf="isShownVPOP" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n      </ion-label>\n    </ion-item>\n\n    <ion-card class="drogueContainer" *ngIf="isShownVPOP">\n      <p class="reference">Référence : Bourdaud et al. Development & validation of a risk score to predict probability of p/o vomiting in pediatric patients. Pediatric Anesthesia 2014.\n      </p>\n      <ion-card-content>\n        \n       \n\n        <ion-list>\n          <ion-item *ngFor="let entry of VPOPform">\n            <ion-label class="dilutionDrogueInduction">{{entry.val}}\n              <p class="dilutionDrogueInduction">+ {{entry.count}} point(s)</p>\n            </ion-label>\n            <ion-checkbox color="turquoise-fonce" (click)="countVPOP()" [(ngModel)]="entry.isChecked"></ion-checkbox>\n          </ion-item>\n\n        \n              <ion-item class="drogueInduction">Total : <b>{{totalVPOP}} pts</b> - Risque NVPO : <b>{{risqueVPOP}} %</b></ion-item>\n              <ion-item><ion-label class="drogueInduction">Stratégie proposée :</ion-label></ion-item>\n              <p class="strategie">{{prophylaxieVPOP}}</p>\n       \n        </ion-list>\n\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n      <!-- FIN SCORE VPOP-->\n\n\n\n\n    <!-- DEBUT SCORE ANTICOAG-->\n\n\n\n      <ion-item (click)="toggleScoreAnticoag()">\n        <ion-label color="dark-turquoise"><ion-icon name="stats"></ion-icon> &nbsp; &nbsp; Anticoagulation (après 13 ans)\n          <ion-icon *ngIf="!isShownScoreAnticoag" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n          <ion-icon *ngIf="isShownScoreAnticoag" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n        </ion-label>\n      </ion-item>\n  \n      <ion-card class="drogueContainer" *ngIf="isShownScoreAnticoag">\n        <ion-card-content>\n         Envisager chez le patient pubère (+/- âge > 13 ans). Indiquez les facteurs de risque présents. Le total et la stratégie proposée sont indiqués en bas.\n          \n          <ion-list>\n            <ion-item class="dilutionDrogueInduction">Facteurs liés au patient</ion-item>\n            <ion-item *ngFor="let entry1 of Anticoagform1">\n              <ion-label class="dilutionDrogueInduction">{{entry1.val}}\n                <p class="dilutionDrogueInduction">+ {{entry1.count}} point(s)</p>\n              </ion-label>\n              <ion-checkbox color="turquoise-fonce" (click)="countAnticoag()" [(ngModel)]="entry1.isChecked"></ion-checkbox>\n            </ion-item>\n\n            <ion-item class="dilutionDrogueInduction">Facteurs liés à la chirurgie</ion-item>\n            <ion-item *ngFor="let entry2 of Anticoagform2">\n              <ion-label class="dilutionDrogueInduction">{{entry2.val}}\n                <p class="dilutionDrogueInduction">+ {{entry2.count}} point(s)</p>\n              </ion-label>\n              <ion-checkbox color="turquoise-fonce" (click)="countAnticoag()" [(ngModel)]="entry2.isChecked"></ion-checkbox>\n            </ion-item>\n\n            <ion-item class="dilutionDrogueInduction">Facteurs liés à l\'hospitalisation</ion-item>\n            <ion-item *ngFor="let entry3 of Anticoagform3">\n              <ion-label class="dilutionDrogueInduction">{{entry3.val}}\n                <p class="dilutionDrogueInduction">+ {{entry3.count}} point(s)</p>\n              </ion-label>\n              <ion-checkbox  color="turquoise-fonce" (click)="countAnticoag()" [(ngModel)]="entry3.isChecked"></ion-checkbox>\n            </ion-item>\n  \n      \n                <ion-item class="drogueInduction">Total : <b>{{AnticoagTotal}} pts</b> - Risque <b>{{NiveauRisqueThrombose}}</b></ion-item>\n                <ion-item><ion-label class="drogueInduction">Stratégie proposée :</ion-label></ion-item>\n                <p class="strategie">{{prophylaxieAnticoag}} <b>{{MesuresSupplementairesAnticoag}}</b></p>\n         \n          </ion-list>\n\n        </ion-card-content>\n      \n      </ion-card>\n  \n\n      <!-- FIN SCORE ANTICOAG-->\n\n      <h3 padding>Post-opératoire</h3>\n\n\n      <!-- DEBUT SCORE EVENDOL-->\n\n          <ion-item (click)="toggleEVENDOL()">\n            <ion-label color="dark-turquoise"><ion-icon name="stats"></ion-icon> &nbsp; &nbsp; Douleur enfant (EVENDOL)\n              <ion-icon *ngIf="!isShownEVENDOL" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n              <ion-icon *ngIf="isShownEVENDOL" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n            </ion-label>\n          </ion-item>\n      \n          <ion-card class="drogueContainer" *ngIf="isShownEVENDOL">\n            <ion-card-content>\n\n        <p class="drogueInduction">Préférer l\'auto-évaluation chaque fois que possible. En cas d\'impossibilité liée à l\'âge ou à l\'état du patient, utiliser une échelle d\'hétéro-évaluation. L\'échelle EVENDOL est proposée ci-dessous.</p>    \n            <br>\n        <p class="comment">Renseigner chacun des items de 0 à 3. \n          <br> - 0 = signe absent\n          <br> - 1 = signe faible ou passager\n          <br> - 2 = signe moyen ou environ la moitié du temps\n          <br> - 3 = signe fort ou quasi permanent\n          <br>\n          <br> Pour l\'item Relation, une absence (0) donne 3 points ; un état relationnel normal (3) ne compte aucun point. Seuil de prescription : 4/15.</p>\n\n        <ion-item class="EVENDOLlabel"><ion-label><br>Expression vocale/verbale</ion-label></ion-item>\n\n            <ion-segment [(ngModel)]="EVENDOLVocal" class="EVENDOLrange" color="dark-turquoise" (ionChange)="CalcEVENDOL()">\n              <ion-segment-button value="0">\n                <ion-label>0</ion-label>\n              </ion-segment-button>\n              <ion-segment-button value="1">\n                <ion-label>1</ion-label>\n              </ion-segment-button>\n              <ion-segment-button value="2">\n                <ion-label>2</ion-label>\n              </ion-segment-button>\n              <ion-segment-button value="3">\n                <ion-label>3</ion-label>\n              </ion-segment-button>\n            </ion-segment>\n\n            <ion-item class="EVENDOLlabel"><ion-label><br>Mimique (fronce, grimace)</ion-label></ion-item>\n\n            <ion-segment [(ngModel)]="EVENDOLMimique" class="EVENDOLrange" color="dark-turquoise" (ionChange)="CalcEVENDOL()">\n              <ion-segment-button value="0">\n                <ion-label>0</ion-label>\n              </ion-segment-button>\n              <ion-segment-button value="1">\n                <ion-label>1</ion-label>\n              </ion-segment-button>\n              <ion-segment-button value="2">\n                <ion-label>2</ion-label>\n              </ion-segment-button>\n              <ion-segment-button value="3">\n                <ion-label>3</ion-label>\n              </ion-segment-button>\n            </ion-segment>\n\n            <ion-item class="EVENDOLlabel"><ion-label><br>Mouvements (s\'agite, se crispe)</ion-label></ion-item>\n\n            <ion-segment [(ngModel)]="EVENDOLMouvement" class="EVENDOLrange" color="dark-turquoise" (ionChange)="CalcEVENDOL()">\n              <ion-segment-button value="0">\n                <ion-label>0</ion-label>\n              </ion-segment-button>\n              <ion-segment-button value="1">\n                <ion-label>1</ion-label>\n              </ion-segment-button>\n              <ion-segment-button value="2">\n                <ion-label>2</ion-label>\n              </ion-segment-button>\n              <ion-segment-button value="3">\n                <ion-label>3</ion-label>\n              </ion-segment-button>\n            </ion-segment>\n\n            <ion-item class="EVENDOLlabel"><ion-label><br>Position (attitude antalgique, se protège)</ion-label></ion-item>\n\n            <ion-segment [(ngModel)]="EVENDOLPosition" class="EVENDOLrange" color="dark-turquoise" (ionChange)="CalcEVENDOL()">\n              <ion-segment-button value="0">\n                <ion-label>0</ion-label>\n              </ion-segment-button>\n              <ion-segment-button value="1">\n                <ion-label>1</ion-label>\n              </ion-segment-button>\n              <ion-segment-button value="2">\n                <ion-label>2</ion-label>\n              </ion-segment-button>\n              <ion-segment-button value="3">\n                <ion-label>3</ion-label>\n              </ion-segment-button>\n            </ion-segment>\n\n            <ion-item class="EVENDOLlabel"><ion-label><br>Relation (communique, peut être consolé)</ion-label></ion-item>\n\n            <ion-segment [(ngModel)]="EVENDOLRelation" class="EVENDOLrange" color="dark-turquoise" (ionChange)="CalcEVENDOL()">\n              <ion-segment-button value="3">\n                <ion-label>0</ion-label>\n              </ion-segment-button>\n              <ion-segment-button value="2">\n                <ion-label>1</ion-label>\n              </ion-segment-button>\n              <ion-segment-button value="1">\n                <ion-label>2</ion-label>\n              </ion-segment-button>\n              <ion-segment-button value="0">\n                <ion-label>3</ion-label>\n              </ion-segment-button>\n            </ion-segment>\n\n                    <ion-item class="drogueInduction">Total : <b>{{EVENDOLTotal}}/15 pts</b></ion-item>\n                    <p class="strategie">Seuil de prescription (3/15) : {{SeuilPrescriptionEVENDOL}}</p>\n\n\n\n        </ion-card-content>\n  \n      </ion-card>\n\n      <!-- FIN SCORE EVENDOL-->\n\n\n<!-- DEBUT SCORE EDIN -->\n\n\n\n      <ion-item (click)="toggleEDIN()">\n        <ion-label color="dark-turquoise"> <ion-icon name="stats"></ion-icon> &nbsp; &nbsp; Douleur nourrisson (0-3 mois - EDIN)\n          <ion-icon *ngIf="!isShownEDIN" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>  \n          <ion-icon *ngIf="isShownEDIN" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n        </ion-label>\n      </ion-item>\n  \n      <ion-card class="drogueContainer" *ngIf="isShownEDIN">\n        <ion-card-content>\n\n    <p class="drogueInduction">Utiliser chez le nourrisson entre 0 et 3 mois.</p>    \n        <br>\n    <ion-item class="EVENDOLlabel"><ion-label><br>Visage\n    <p class="comment">0 : visage détendu</p>\n    <p class="comment">1 : grimaces passagères</p>\n    <p class="comment">2 : grimaces fréquentes et prolongées</p>\n    <p class="comment">3 : crispation permanente, prostré, figé</p>\n    </ion-label></ion-item>\n\n        <ion-segment [(ngModel)]="EDINVisage" class="EVENDOLrange" color="dark-turquoise" (ionChange)="CalcEDIN()">\n          <ion-segment-button value="0">\n            <ion-label>0</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value="1">\n            <ion-label>1</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value="2">\n            <ion-label>2</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value="3">\n            <ion-label>3</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n\n        <ion-item class="EVENDOLlabel"><ion-label><br>Corps\n        <p class="comment">0 : détendu</p>\n        <p class="comment">1 : agitation transitoire</p>\n        <p class="comment">2 : agitation fréquente</p>\n        <p class="comment">3 : agitation permanente, crispation, raideur</p>\n\n        </ion-label></ion-item>\n\n        <ion-segment [(ngModel)]="EDINCorps" class="EVENDOLrange" color="dark-turquoise" (ionChange)="CalcEDIN()">\n          <ion-segment-button value="0">\n            <ion-label>0</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value="1">\n            <ion-label>1</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value="2">\n            <ion-label>2</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value="3">\n            <ion-label>3</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n\n        <ion-item class="EVENDOLlabel"><ion-label><br>Sommeil \n          <p class="comment">0 : s\'endort facilement, sommeil prolongé</p>\n          <p class="comment">1 : s\'endort difficilement</p>\n          <p class="comment">2 : se réveille spontanément, sommeil agité</p>\n          <p class="comment">3 : pas de sommeil</p>\n  \n        </ion-label></ion-item>\n\n        <ion-segment [(ngModel)]="EDINSommeil" class="EVENDOLrange" color="dark-turquoise" (ionChange)="CalcEDIN()">\n          <ion-segment-button value="0">\n            <ion-label>0</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value="1">\n            <ion-label>1</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value="2">\n            <ion-label>2</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value="3">\n            <ion-label>3</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n\n        <ion-item class="EVENDOLlabel"><ion-label><br>\n          Relation\n          <p class="comment">0 : sourire réponse, attentif</p>\n          <p class="comment">1 : appréhension passagère du contact</p>\n          <p class="comment">2 : contact difficile, cri à la moindre stimulation</p>\n          <p class="comment">3 : hurlement ou gémissement spontané</p>\n  \n        </ion-label></ion-item>\n\n        <ion-segment [(ngModel)]="EDINRelation" class="EVENDOLrange" color="dark-turquoise" (ionChange)="CalcEDIN()">\n          <ion-segment-button value="0">\n            <ion-label>0</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value="1">\n            <ion-label>1</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value="2">\n            <ion-label>2</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value="3">\n            <ion-label>3</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n\n        <ion-item class="EVENDOLlabel"><ion-label><br>Reconfort\n          <p class="comment">0 : n\'a pas besoin de reconfort</p>\n          <p class="comment">1 : se calme rapidement à la caresse/au son de la voix</p>\n          <p class="comment">2 : se calme difficilement</p>\n          <p class="comment">3 : inconsolable, succion désespérée</p>\n  \n        </ion-label></ion-item>\n\n        <ion-segment [(ngModel)]="EDINReconfort" class="EVENDOLrange" color="dark-turquoise" (ionChange)="CalcEDIN()">\n          <ion-segment-button value="0">\n            <ion-label>0</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value="1">\n            <ion-label>1</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value="2">\n            <ion-label>2</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value="3">\n            <ion-label>3</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n\n                <ion-item class="drogueInduction">Total : <b>{{EDINTotal}}/15 pts</b></ion-item>\n                <p class="strategie">Seuil de prescription (3/15) : {{SeuilPrescriptionEDIN}}</p>\n\n\n\n    </ion-card-content>\n\n  </ion-card>\n\n    <!-- FIN DOULEUR EDIN -->\n\n\n    <!-- SCORE ALDRETE -->\n    <ion-item (click)="toggleAldrete()">\n      <ion-label color="dark-turquoise"><ion-icon name="stats"></ion-icon> &nbsp; &nbsp; Score d\'Aldrete - Sortie de SSPI\n        <ion-icon *ngIf="!isShownAldrete" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n        <ion-icon *ngIf="isShownAldrete" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n      </ion-label>\n    </ion-item>\n\n        <p padding *ngIf="isShownAldrete">Cocher pour chacune des catégories l\'item décrivant l\'état du patient.</p>\n\n        \n        <ion-list *ngIf="isShownAldrete">\n          <ion-card class="drogueContainer" *ngFor="let entry of AldreteForm">\n            <ion-card-header *ngIf="entry.category">{{entry.category}}</ion-card-header>\n              <ion-item><ion-label class="drogueInduction">\n              {{entry.val}}\n              <p class="dilutionDrogueInduction">+ {{entry.count}} point(s)</p>\n            </ion-label>  \n              <ion-checkbox color="turquoise-fonce" (click)="countAldrete()" [(ngModel)]="entry.isChecked"></ion-checkbox>\n            </ion-item>\n          </ion-card>\n\n          <ion-card padding class="drogueContainer">\n              <ion-item class="drogueInduction">Total : <b>{{totalAldrete}}/14 pts</b></ion-item>\n              <ion-item><ion-label class="drogueInduction">Conduite à tenir proposée (sortie SSPI > 11/14) :</ion-label></ion-item>\n              <p padding class="strategie">{{CATAldrete}}</p>\n            </ion-card>\n        </ion-list>\n\n        <!-- FIN SCORE ALDRETE -->\n\n\n\n <!-- SCORE PADSS SORTIE AMBULATOIRE  -->\n <ion-item (click)="togglePADSS()">\n  <ion-label color="dark-turquoise"><ion-icon name="stats"></ion-icon> &nbsp; &nbsp; Score PADSS - Sortie ambulatoire\n    <ion-icon *ngIf="!isShownPADSS" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n    <ion-icon *ngIf="isShownPADSS" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n  </ion-label>\n</ion-item>\n\n    <p padding *ngIf="isShownPADSS">Cocher pour chacune des catégories l\'item décrivant l\'état du patient.</p>\n\n    \n    <ion-list *ngIf="isShownPADSS">\n      <ion-card class="drogueContainer" *ngFor="let entry of PADSSForm">\n        <ion-card-header *ngIf="entry.category">{{entry.category}}</ion-card-header>\n          <ion-item><ion-label class="drogueInduction">\n          {{entry.val}}\n          <p class="dilutionDrogueInduction">+ {{entry.count}} point(s)</p>\n        </ion-label>  \n          <ion-checkbox color="turquoise-fonce" (click)="countPADSS()" [(ngModel)]="entry.isChecked"></ion-checkbox>\n        </ion-item>\n      </ion-card>\n\n \n      <ion-card padding class="drogueContainer">\n          <ion-item class="drogueInduction">Total : <b>{{totalPADSS}}/14 pts</b></ion-item>\n          <ion-item><ion-label class="drogueInduction">Conduite à tenir proposée (sortie ambulatoire > 8/10) :</ion-label></ion-item>\n          <p padding class="strategie">{{CATPADSS}}</p>\n        </ion-card>\n      </ion-list>\n\n\n            <!-- FIN SCORE PADSS-->\n\n\n             <!-- SCORE de BROMAGE RACHIANESTHESIE   -->\n \n \n  <ion-item (click)="toggleBromage()">\n  <ion-label color="dark-turquoise"><ion-icon name="stats"></ion-icon> &nbsp; &nbsp; Bromage (après rachianesthésie)\n    <ion-icon *ngIf="!isShownBromage" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n    <ion-icon *ngIf="isShownBromage" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n  </ion-label>\n</ion-item>\n\n    <ion-card padding *ngIf="isShownBromage" class="drogueContainer">\n\n    <p  class="reference"> Référence : Bromage PR. A comparison of the hydrochloride and carbon dioxide salts of lidocaine and prilocaine in epidural analgesia. Acta Anaesthesiologica Scandinavica 1965.</p>\n    <br>\n    <p class="comment">Le score proposé est le score de Bromage <i>modifié</i>, utilisable en ambulatoire. Le score original est sur 4 points, le score modifié sur 7. \n      <br>Examiner le patient et attribuer le score correspondant à la motricité observée aux membres inférieurs.</p>\n    <br>\n  <p class="dilutionDrogueInduction">\n          - 1. Bloc moteur complet.\n      <br>- 2. Bloc moteur presque complet, bouge les pieds.\n      <br>- 3. Bloc moteur partiel, bouge les pieds et les genoux.\n      <br>- 4. Bouge les jambes, faiblesse détectable à la flexion de la hanche.\n      <br>- 5. Pas de faiblesse de la hanche en position couchée.\n      <br>- 6. Flexion des genoux debout avec appui.\n      <br>- 7. Flexion des genoux debout sans appui. \n  </p>\n      \n          <p class="strategie">Sortie de salle de réveil vers l\'hospitalisation conventionnelle envisageable pour un score supérieur ou égal à 4. Sortie en ambulatoire envisageable pour un score supérieur ou égal à 6.</p>\n    \n\n      </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\scores\scores.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], ScoresPage);
    return ScoresPage;
}());

;
//# sourceMappingURL=scores.js.map

/***/ }),

/***/ 833:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreMedicationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(18);
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
                                        _this.navCtrl.pop();
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
        promiseList.push(this.storage.get('AgeNum').then(function (Age) {
            _this.AgeNum = Age;
            _this.storage.get('PoidsNum').then(function (Poids) {
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
            selector: 'page-pre-medication',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\pre-medication\pre-medication.html"*/'<ion-header translucent>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Urgences</ion-title>\n  </ion-navbar>\n  <ion-item color="turquoise-fonce"> \n    <ion-label class="MonPatient" >Mon patient : {{AgeNum}} mois - {{PoidsNum}} kg \n      <p class="dilution">Estomac {{EstomacOuiNon}} - Jeune {{DureeJeune}} h</p>\n    <p>Allergie : {{Allergie}}</p></ion-label>\n    <ion-icon slot="end" icon="accessibility-outline"></ion-icon> \n  </ion-item>\n</ion-header>\n\n<ion-content>\n\n\n  \n</ion-content>'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\pre-medication\pre-medication.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PreMedicationPage);
    return PreMedicationPage;
}());

//# sourceMappingURL=pre-medication.js.map

/***/ })

},[501]);
//# sourceMappingURL=main.js.map