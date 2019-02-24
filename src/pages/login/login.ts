
//BIBLIOTECAS NECESSARIAS PARA O ARQUIVO
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';
import { Aluno } from '../../models/aluno';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';  
import { Session } from '../../providers/session/session';

// COMPONENTES DA PAGINA
@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {
  
    public usuario = {} as Aluno;
    public usuarioLogado = {} as Aluno;
  

  // CONSTRUTOR DA CLASSE COM PARAMETROS NECESSARIOS PARA EXECUTAR OS METODOS
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private auth: AuthProvider, 
                private alertCtrl: AlertController,
                public session: Session
                ) {
    }

    // METODO PARA EXIBIR MENSAGEM DE ERRO
    apresentarMensagem(titulo, mensagem) {
        let al = this.alertCtrl.create({
                                        title: titulo,
                                        subTitle: mensagem,
                                        buttons: ['Fechar']
        });
        al.present();
    }
    
    async login(usuario: Aluno) {
  
        // VERIFICA SE OS CAMPOS EMAIL E SENHA ESTAO PREENCHIDOS 
        if(usuario.email == "" || usuario.senha == "" || usuario.email == undefined || usuario.senha == undefined){
        
            this.apresentarMensagem('Erro', 'O email e senha são obrigatórios.');
    
        } else {
    
          try {
              // CHAMADA DO METODO DO PROVIDER PARA EFETUAR LOGIN
              const result = await this.auth.efetuarLogin(usuario);
              
              this.usuarioLogado.nome= result['nome']
              this.usuarioLogado.tipo= result['tipo']

              // VERIFICA SE O PROVIDER LOCALIZOU O EMAIL E SENHA INFORMADO
              if (this.usuarioLogado.nome != '0' && this.usuarioLogado.nome != undefined) {
                    
                    this.session.armazenaUsuarioSessao(this.usuarioLogado);
                    this.navCtrl.setRoot(HomePage);
              
              } else{
                  
                  this.apresentarMensagem('Erro ao logar', 'O email ou senha não estão corretos.');

              }
          
              // CASO OCORRA ALGUM ERRO EM TEMPO DE EXCUÇÃO APRESENTA MENSAGEM ABAIXO
          } catch (e) {
            
              this.apresentarMensagem('Erro ao logar', 'Erro interno durante autenticação');
          }
        }
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
