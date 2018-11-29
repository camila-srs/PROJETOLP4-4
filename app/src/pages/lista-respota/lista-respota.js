var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { VisualizarRespostaPage } from '../visualizar-resposta/visualizar-resposta';
/**
 * Generated class for the ListaRespotaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListaRespotaPage = (function () {
    function ListaRespotaPage(navCtrl, navParams, _http, _loadCtr, _alert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._http = _http;
        this._loadCtr = _loadCtr;
        this._alert = _alert;
        this.http = _http;
        this.load = _loadCtr.create({ content: "Carregando..." });
        this.load.present();
        this.alert = _alert.create({
            title: "Falha na Conexão",
            subTitle: "Não foi possível carregar lista de usuários",
            buttons: [
                { text: 'OK' }
            ]
        });
    }
    ListaRespotaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.http.get("http://localhost:3000/pergunta_resposta")
            .subscribe(function (users) {
            console.log(users);
            _this.perguntas = users;
            _this.load.dismiss();
        }, function (err) {
            _this.load.dismiss();
            _this.alert.present();
        });
    };
    ListaRespotaPage.prototype.seleciona = function (user) {
        this.navCtrl.push(VisualizarRespostaPage.name, { perguntaSelecionada: user });
    };
    ListaRespotaPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-lista-respota',
            templateUrl: 'lista-respota.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            HttpClient,
            LoadingController,
            AlertController])
    ], ListaRespotaPage);
    return ListaRespotaPage;
}());
export { ListaRespotaPage };
//# sourceMappingURL=lista-respota.js.map