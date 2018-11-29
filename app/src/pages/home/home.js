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
import { NavController } from 'ionic-angular';
import { ListaUsuarioPage } from '../lista-usuario/lista-usuario';
import { CadastroPerguntaPage } from '../cadastro-pergunta/cadastro-pergunta';
import { ListaRespotaPage } from '../lista-respota/lista-respota';
import { CadastroUsuarioPage } from '../cadastro-usuario/cadastro-usuario';
var HomePage = (function () {
    /** Acrescentado para ser usado na chamada da tela */
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.listUsuario = false;
        this.listPergunta = false;
    }
    HomePage.prototype.listarUsuario = function () {
        this.navCtrl.push(ListaUsuarioPage.name);
    };
    HomePage.prototype.listarPerguntas = function () {
        this.navCtrl.push(ListaRespotaPage.name);
    };
    HomePage.prototype.cadastrarPergunta = function () {
        this.navCtrl.push(CadastroPerguntaPage.name);
    };
    HomePage.prototype.cadastrarUsuario = function () {
        this.navCtrl.push(CadastroUsuarioPage.name);
    };
    HomePage.prototype.mostrarListaUsuario = function () {
        this.listUsuario = !this.listUsuario;
    };
    ;
    HomePage.prototype.mostrarListaPergunta = function () {
        this.listPergunta = !this.listPergunta;
    };
    ;
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [NavController])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map