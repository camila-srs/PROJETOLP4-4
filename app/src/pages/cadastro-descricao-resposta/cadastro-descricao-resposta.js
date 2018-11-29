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
import { Resposta } from '../../modules/resposta';
/**
 * Generated class for the CadastroDescricaoRespostaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastroDescricaoRespostaPage = (function () {
    function CadastroDescricaoRespostaPage(navCtrl, navParams, http, _loadCtr /** permite criar um loading para informar ao cliente carregando lista*/, _alertCtrl /** objeto para construir componentes alertas */) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this._loadCtr = _loadCtr; /** permite criar um loading para informar ao cliente carregando lista*/
        this._alertCtrl = _alertCtrl; /** objeto para construir componentes alertas */
        this.conteudoAlert = { titulo: '', mensagem: '' };
        this.respostas = new Resposta();
        this.respostas = this.navParams.get('respostaSelecionada');
        this.load = _loadCtr.create({ content: "Carregando..." });
    }
    CadastroDescricaoRespostaPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad CadastroDescricaoRespostaPage');
    };
    CadastroDescricaoRespostaPage.prototype.ok = function () {
        this.navCtrl.getPrevious().data.userBack;
        this.navCtrl.pop();
        // console.log(this.respostas);
    };
    CadastroDescricaoRespostaPage.prototype.ionViewWillLeave = function () {
        this.navCtrl.getPrevious().data.userBack = this.respostas;
    };
    CadastroDescricaoRespostaPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-cadastro-descricao-resposta',
            templateUrl: 'cadastro-descricao-resposta.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            HttpClient,
            LoadingController /** permite criar um loading para informar ao cliente carregando lista*/,
            AlertController /** objeto para construir componentes alertas */])
    ], CadastroDescricaoRespostaPage);
    return CadastroDescricaoRespostaPage;
}());
export { CadastroDescricaoRespostaPage };
//# sourceMappingURL=cadastro-descricao-resposta.js.map