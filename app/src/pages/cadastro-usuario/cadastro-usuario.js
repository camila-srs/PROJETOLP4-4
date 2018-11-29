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
import { Usuario } from '../../modules/usuario';
import { HttpClient } from '@angular/common/http';
var CadastroUsuarioPage = (function () {
    function CadastroUsuarioPage(navCtrl, navParams, _http, _alertCtrl, _loadCtr) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._http = _http;
        this._alertCtrl = _alertCtrl;
        this._loadCtr = _loadCtr;
        this.error = { condicao: false, message: '' };
        this.success = { condicao: false, message: '' };
        this.usuario = this.navParams.get('usuarioSelecionado');
        if (this.usuario) {
            this.load = _loadCtr.create({ content: "Carregando..." });
            this.botaoEditar = true;
        }
        else {
            this.botaoSalvar = true;
            this.usuario = new Usuario;
        }
    }
    CadastroUsuarioPage_1 = CadastroUsuarioPage;
    CadastroUsuarioPage.prototype.editar = function () {
        var _this = this;
        this.error.condicao = false;
        this.validarDados();
        console.log(this.error.condicao, this.usuario);
        if (!this.error.condicao) {
            this.usuario.senha = this.senha;
            this._http.put("http://localhost:3000/usuario/" + this.usuario.id, this.usuario)
                .subscribe(function (res) {
                console.log(res);
                _this.error.condicao = false;
                _this.error.message = '';
                _this.success.condicao = true;
                _this.success.message = "Criado com sucesso";
            }, function (err) {
                console.log(err);
            });
        }
    };
    CadastroUsuarioPage.prototype.salvar = function () {
        var _this = this;
        this.error.condicao = false;
        this.validarDados();
        console.log(this.error.condicao);
        if (!this.error.condicao) {
            this.usuario.senha = this.senha;
            this._http.post("http://localhost:3000/usuario/", this.usuario).subscribe(function (res) {
                console.log(res);
                _this.error.condicao = false;
                _this.error.message = '';
                _this.success.condicao = true;
                _this.success.message = "Criado com sucesso";
                _this.navCtrl.push(CadastroUsuarioPage_1.name);
            }, function (err) {
                console.log(err);
            });
        }
    };
    CadastroUsuarioPage.prototype.validarDados = function () {
        if (!this.usuario.nome) {
            this.error.condicao = true;
            this.error.message = "Nome, campo obrigatório!";
        }
        if (!this.usuario.email) {
            this.error.condicao = true;
            this.error.message = "Email, campo obrigatório!";
        }
        if (!this.senha || !this.senha_confirma) {
            this.error.condicao = true;
            this.error.message = "Senha e confirma senha, campos obrigatórios!";
        }
        if (this.senha !== this.senha_confirma) {
            this.error.condicao = true;
            this.error.message = "Senha e confirma senha devem ser iguais";
        }
        if (!this.usuario.perfil) {
            this.error.condicao = true;
            this.error.message = "Perfil, campo obrigatório!";
        }
    };
    CadastroUsuarioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroUsuarioPage');
    };
    CadastroUsuarioPage = CadastroUsuarioPage_1 = __decorate([
        IonicPage(),
        Component({
            selector: 'page-cadastro-usuario',
            templateUrl: 'cadastro-usuario.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            HttpClient,
            AlertController,
            LoadingController])
    ], CadastroUsuarioPage);
    return CadastroUsuarioPage;
    var CadastroUsuarioPage_1;
}());
export { CadastroUsuarioPage };
//# sourceMappingURL=cadastro-usuario.js.map