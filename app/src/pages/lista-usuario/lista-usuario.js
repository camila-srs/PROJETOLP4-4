var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { VisualizarUsuarioPage } from '../visualizar-usuario/visualizar-usuario';
/**
 * Generated class for the ListaUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListaUsuarioPage = (function () {
    function ListaUsuarioPage(navCtrl, navParams, _http, _loadCtr, _alert) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._http = _http;
        this._loadCtr = _loadCtr;
        this._alert = _alert;
        var load = _loadCtr.create({ content: "Carregando..." });
        load.present();
        var alert = _alert.create({
            title: "Falha na Conexão",
            subTitle: "Não foi possível carregar lista de usuários",
            buttons: [
                { text: 'OK' }
            ]
        });
        _http.get("http://localhost:3000/usuario")
            .subscribe(function (users) {
            console.log(users);
            _this.usuarios = users;
            load.dismiss();
        }, function (err) {
            load.dismiss();
            alert.present();
        });
    }
    ListaUsuarioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListaUsuarioPage');
    };
    ListaUsuarioPage.prototype.seleciona = function (user) {
        this.navCtrl.push(VisualizarUsuarioPage.name, { usuarioSelecionado: user });
    };
    ListaUsuarioPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-lista-usuario',
            templateUrl: 'lista-usuario.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            HttpClient,
            LoadingController,
            AlertController])
    ], ListaUsuarioPage);
    return ListaUsuarioPage;
}());
export { ListaUsuarioPage };
//# sourceMappingURL=lista-usuario.js.map