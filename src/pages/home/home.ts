import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Aluno } from '../../models/aluno';
import { Storage } from "@ionic/storage";
import { Session } from './../../providers/session/session';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    
  // VARIAVEIS QUE ARMAZENAO INFO DO USUARIO LOGADO
    public usuarioLogado :Aluno
    public nome: string;
    public tipo: string;

    // CONSTRUTOR COM PARAMETROS NECESARIOS PARA OS METODOS
  constructor(public navCtrl: NavController,
              public session: Session, 
              public storage: Storage
            
    ) {

  }
  ngOnInit() {
    // RECUPERA O USUARIO AUTENTICADO DA SESSAO
    this.session.obterUsuarioSessao()
        .then(res => {
              
             // CRIA UM CLASSE COM INFOS DO USUARIO NA SESSAO
              this.usuarioLogado = new Aluno(res);
              
              this.nome = this.usuarioLogado.nome;
              this.tipo = this.usuarioLogado.tipo;
          });


}
}
