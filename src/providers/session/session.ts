import { Storage } from "@ionic/storage";
import { Injectable } from '@angular/core';
import { Aluno } from '../../models/aluno';


// CLASSE RESPONSAVEL POR ARMAZENAR E RECUPERAR DADOS DO USUARIO AUTENTICADO NA SESSAO 
@Injectable()
export class Session {

    constructor(public storage: Storage){

    }
    // ARMAZENA  INFOS DE UM USUARIO NA SESSAO
    armazenaUsuarioSessao(usuario: Aluno) {
        this.storage.set('usuario', usuario);
    }

    // RECUPERA DADOS DO USUARIO NA SESSAO
    obterUsuarioSessao(): Promise<any> {
        return this.storage.get('usuario');
    }

    
}
