/** CRIADO POR COLISBERTO */
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
import { Pergunta } from '../../modules/pergunta';
import { HttpClient } from '@angular/common/http';
import { Resposta } from '../../modules/resposta';
import { CadastroDescricaoRespostaPage } from '../cadastro-descricao-resposta/cadastro-descricao-resposta';
/**
 * Generated class for the CadastroPerguntaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastroPerguntaPage = (function () {
    function CadastroPerguntaPage(navCtrl, navParams, http, _alertCtrl, _loadCtr) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this._alertCtrl = _alertCtrl;
        this._loadCtr = _loadCtr;
        this.aux = 0;
        this.aux2 = false;
        this.error = { condicao: false, message: '' };
        this.success = { condicao: false, message: '' };
        this.pergunta = this.navParams.get('perguntaSelecionada');
        this.respostas = new Resposta;
        if (this.pergunta) {
            this.load = _loadCtr.create({ content: "Carregando..." });
            this.aux = 5;
        }
        else {
            this.pergunta = new Pergunta();
        }
    }
    CadastroPerguntaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroPerguntaPage');
    };
    CadastroPerguntaPage.prototype.ionViewWillEnter = function () {
        this.resposta = new Resposta;
        console.log(this.pergunta);
        console.log(this.aux);
        if (this.navParams.get('userBack')) {
            /** obtenho o parâmetro por meio do método get e inserio na lista pelo método push */
            var teste = this.navParams.get('userBack');
            this.resposta.label = teste.label;
            this.resposta.descricao = teste.descricao;
            this.resposta.condicao = teste.condicao;
            this.virificarTamanho();
            if (!this.validarRespota(this.resposta)) {
                this.pergunta.respostas.push(this.resposta);
                console.log(this.pergunta);
            }
        }
    };
    CadastroPerguntaPage.prototype.validarRespota = function (as) {
        if (this.aux2) {
            for (var i = 0; i < 5; i++) {
                if (as.label === 'a') {
                    this.pergunta.respostas[i].label = this.resposta.label;
                    this.pergunta.respostas[i].descricao = this.resposta.descricao;
                    this.pergunta.respostas[i].condicao = this.resposta.condicao;
                    return true;
                }
                else {
                    if (as.label === 'b') {
                        this.pergunta.respostas[i].label = this.resposta.label;
                        this.pergunta.respostas[i].descricao = this.resposta.descricao;
                        this.pergunta.respostas[i].condicao = this.resposta.condicao;
                        return true;
                    }
                    else {
                        if (as.label === 'c') {
                            this.pergunta.respostas[i].label = this.resposta.label;
                            this.pergunta.respostas[i].descricao = this.resposta.descricao;
                            this.pergunta.respostas[i].condicao = this.resposta.condicao;
                            return true;
                        }
                        else {
                            if (as.label === 'd') {
                                this.pergunta.respostas[i].label = this.resposta.label;
                                this.pergunta.respostas[i].descricao = this.resposta.descricao;
                                this.pergunta.respostas[i].condicao = this.resposta.condicao;
                                return true;
                            }
                            else {
                                if (as.label === 'e') {
                                    this.pergunta.respostas[i].label = this.resposta.label;
                                    this.pergunta.respostas[i].descricao = this.resposta.descricao;
                                    this.pergunta.respostas[i].condicao = this.resposta.condicao;
                                    return true;
                                }
                            }
                        }
                    }
                }
            }
        }
        else {
            return false;
        }
    };
    CadastroPerguntaPage.prototype.virificarTamanho = function () {
        if (this.pergunta.respostas.length < 1) {
            this.aux = 1;
        }
        else {
            if (this.pergunta.respostas.length < 2) {
                this.aux = 2;
            }
            else {
                if (this.pergunta.respostas.length < 3) {
                    this.aux = 3;
                }
                else {
                    if (this.pergunta.respostas.length < 4) {
                        this.aux = 4;
                    }
                }
            }
        }
    };
    CadastroPerguntaPage.prototype.cadastroDescricaoOpA = function () {
        console.log(this.aux);
        if (!this.pergunta.respostas[0]) {
            console.log("entrou no if");
            this.respostas.label = "a";
            this.navCtrl.push(CadastroDescricaoRespostaPage.name, { respostaSelecionada: this.respostas });
            this.aux2 = false;
        }
        else {
            if (this.pergunta.respostas[0].label === 'a') {
                console.log("entrou no for");
                this.navCtrl.push(CadastroDescricaoRespostaPage.name, { respostaSelecionada: this.pergunta.respostas[0] });
                this.aux2 = true;
                return;
            }
        }
    };
    CadastroPerguntaPage.prototype.cadastroDescricaoOpB = function () {
        this.respostas = new Resposta;
        if (!this.pergunta.respostas[1]) {
            console.log("entrou no if");
            this.respostas.label = "b";
            this.navCtrl.push(CadastroDescricaoRespostaPage.name, { respostaSelecionada: this.respostas });
            this.aux2 = false;
        }
        else {
            if (this.pergunta.respostas[1].label === 'b') {
                console.log("entrou no for");
                this.aux2 = true;
                this.navCtrl.push(CadastroDescricaoRespostaPage.name, { respostaSelecionada: this.pergunta.respostas[1] });
                return;
            }
        }
    };
    CadastroPerguntaPage.prototype.cadastroDescricaoOpC = function () {
        this.respostas = new Resposta;
        if (!this.pergunta.respostas[2]) {
            console.log("entrou no if");
            this.respostas.label = "c";
            this.navCtrl.push(CadastroDescricaoRespostaPage.name, { respostaSelecionada: this.respostas });
            this.aux2 = false;
        }
        else {
            if (this.pergunta.respostas[2].label === 'c') {
                console.log("entrou no for");
                this.aux2 = true;
                this.navCtrl.push(CadastroDescricaoRespostaPage.name, { respostaSelecionada: this.pergunta.respostas[2] });
                return;
            }
        }
    };
    CadastroPerguntaPage.prototype.cadastroDescricaoOpD = function () {
        this.respostas = new Resposta;
        console.log("entrou no if");
        if (!this.pergunta.respostas[3]) {
            this.respostas.label = "d";
            this.navCtrl.push(CadastroDescricaoRespostaPage.name, { respostaSelecionada: this.respostas });
        }
        else {
            if (this.pergunta.respostas[3].label === 'd') {
                this.navCtrl.push(CadastroDescricaoRespostaPage.name, { respostaSelecionada: this.pergunta.respostas[3] });
                return;
            }
        }
    };
    CadastroPerguntaPage.prototype.cadastroDescricaoOpE = function () {
        this.respostas = new Resposta;
        if (!this.pergunta.respostas[4]) {
            this.respostas.label = "e";
            this.navCtrl.push(CadastroDescricaoRespostaPage.name, { respostaSelecionada: this.respostas });
            console.log("entrou else");
        }
        else {
            console.log("entrou else");
            if (this.pergunta.respostas[4].label === 'e') {
                this.navCtrl.push(CadastroDescricaoRespostaPage.name, { respostaSelecionada: this.pergunta.respostas[4] });
                return;
            }
        }
    };
    CadastroPerguntaPage.prototype.validarDados = function () {
    };
    CadastroPerguntaPage.prototype.verficaSalvarEditar = function () {
        this.error.condicao = false;
        this.validarDados();
        if (!this.error.condicao) {
            if (this.pergunta) {
                this.editar();
            }
            else {
                //this.salvar();
            }
        }
    };
    CadastroPerguntaPage.prototype.salvar = function () {
        var _this = this;
        this.pergunta.id = null;
        this.http.post("http://localhost:3000/pergunta_resposta/", this.pergunta).subscribe(function (res) {
            console.log(res);
            _this.error.condicao = false;
            _this.error.message = '';
            _this.success.condicao = true;
            _this.success.message = "Criado com sucesso";
            _this.navCtrl.pop();
        }, function (err) {
            console.log(err);
        });
    };
    CadastroPerguntaPage.prototype.editar = function () {
    };
    CadastroPerguntaPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-cadastro-pergunta',
            templateUrl: 'cadastro-pergunta.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            HttpClient,
            AlertController,
            LoadingController])
    ], CadastroPerguntaPage);
    return CadastroPerguntaPage;
}());
export { CadastroPerguntaPage };
//# sourceMappingURL=cadastro-pergunta.js.map