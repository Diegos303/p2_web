import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { SuporteEsqueciSenha } from '../model/suporte-esqueci-senha';
import { ClienteService } from '../service/cliente-service';
import { Cliente } from '../model/cliente';


@Component({
  selector: 'app-esqueci-senha',
  imports: [FormsModule],
  templateUrl: './esqueci-senha.html',
  styleUrl: './esqueci-senha.css',
})
export class EsqueciSenha {
  constructor(private serv: ClienteService) {}
  // obj: SuporteEsqueciSenha = new SuporteEsqueciSenha();
  mensagem: string = '';
  obj: Cliente = new Cliente

  enviar() {

    this.serv.esqueciSenha(this.obj).subscribe({
      next: (retorno) => {
        alert(retorno);
      },
      error: () => {
        alert("Erro ao enviar solicitação!");
      }
    });

  }
  cancelar () {
    location.href =  'login'
  }


  
}

