import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../service/cliente-service';


@Component({
  selector: 'app-cadastro',
  imports: [FormsModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {
  mensagem: string = "";
  obj: Cliente = new Cliente();


   constructor(private service: ClienteService) {}

    cadastrar() {

      if (!this.obj.email || !this.obj.senha || !this.obj.repitaSenha) {
        alert("Preencha todos os campos obrigatórios.");
        return;
      }

      if (this.obj.senha.trim() != this.obj.repitaSenha.trim()) {
        alert("As senhas não coincidem.");
        return;
      }

      this.service.gravar(this.obj).subscribe(
        () => {
          alert("Cadastro realizado com sucesso!");

          this.obj = new Cliente();

          location.href = "login";
        },
        (erro) => {
          console.error(erro);
          alert("Erro ao realizar cadastro.");
        }
      );
    }

    cancelar () {
      location.href =  'login'
    }


}

