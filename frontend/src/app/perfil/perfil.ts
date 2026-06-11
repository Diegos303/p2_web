import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente-service';

@Component({
  selector: 'app-perfil',
  imports: [FormsModule],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css'
})
export class Perfil {

  obj: Cliente = new Cliente();

  constructor(private service: ClienteService) {}

  ngOnInit() {

    const dados = localStorage.getItem("login");

    if (dados) {
      this.obj = JSON.parse(dados);
    }

  }

  alterarDados() {

    this.service.alterar(this.obj).subscribe(
      () => {

        alert("Dados alterados com sucesso!");

        localStorage.setItem(
          "login",
          JSON.stringify(this.obj)
        );

      },
      (erro) => {

        console.error(erro);
        alert("Erro ao alterar os dados!");

      }
    );

  }

  excluirConta() {

    if (confirm("Deseja realmente excluir sua conta?")) {

      this.service.remover(this.obj.id).subscribe(
        () => {

          alert("Conta excluída com sucesso!");

          localStorage.removeItem("login");

          location.href = "./login";

        },
        (erro) => {

          console.error(erro);
          alert("Erro ao excluir a conta!");

        }
      );

    }

  }

  voltar() {
    location.href = "./vitrine";
  }

  desconectar() {

    localStorage.removeItem("login");

    alert("Você saiu da sua conta!");
    location.href = "./login";

  }

}