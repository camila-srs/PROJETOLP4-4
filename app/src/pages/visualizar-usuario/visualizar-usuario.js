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
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { CadastroUsuarioPage } from '../cadastro-usuario/cadastro-usuario';
/**
 * Generated class for the VisualizarUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VisualizarUsuarioPage = (function () {
    function VisualizarUsuarioPage(navCtrl, navParams, _alertCtrl, _loadCtr, _http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._alertCtrl = _alertCtrl;
        this._loadCtr = _loadCtr;
        this._http = _http;
        this.conteudoAlert = { titulo: '', mensagem: '' };
        this.usuarios = this.navParams.get('usuarioSelecionado');
        this.load = _loadCtr.create({ content: "Carregando..." });
    }
    VisualizarUsuarioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VisualizarUsuarioPage');
    };
    VisualizarUsuarioPage.prototype.confirma = function () {
        var _this = this;
        var alert = this._alertCtrl.create({
            title: 'Excluir Usuário',
            message: 'Você tem certeza que deseja excluir este usuário?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Excluir',
                    handler: function () {
                        alert.dismiss;
                        _this.excluir();
                    }
                }
            ]
        });
        alert.present();
    };
    VisualizarUsuarioPage.prototype.excluir = function () {
        var _this = this;
        this.load.present();
        console.log("http://localhost:3000/usuario/" + this.usuarios.id);
        this._http.delete("http://localhost:3000/usuario/" + this.usuarios.id)
            .subscribe(function (message) {
            console.log(message);
            _this.load.dismiss();
            _this.alertFinal();
            _this.conteudoAlert.mensagem = "Deletado";
            _this.conteudoAlert.titulo = "Deletado com sucesso";
        }, function (err) {
            console.log(err);
        });
    };
    VisualizarUsuarioPage.prototype.alertFinal = function () {
        var _this = this;
        var alert = this._alertCtrl.create({
            title: "Sucesso",
            subTitle: "Excluído com sucesso!",
            buttons: [
                {
                    text: 'Fechar',
                    handler: function () {
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        alert.present();
    };
    VisualizarUsuarioPage.prototype.editar = function () {
        this.navCtrl.push(CadastroUsuarioPage.name, {
            usuarioSelecionado: this.usuarios
        });
    };
    VisualizarUsuarioPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-visualizar-usuario',
            templateUrl: 'visualizar-usuario.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            AlertController,
            LoadingController,
            HttpClient])
    ], VisualizarUsuarioPage);
    return VisualizarUsuarioPage;
}());
export { VisualizarUsuarioPage };
//# sourceMappingURL=visualizar-usuario.js.map