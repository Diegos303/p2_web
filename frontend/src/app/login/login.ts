import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente-service';
// import { json } from 'stream/consumers';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  
  obj: Cliente = new Cliente();
  mensagem: string = '';

  constructor(private service: ClienteService) {}

  entrar() {
    this.service.fazerLogin(this.obj).subscribe(
      (dados) => {

        this.obj = dados;

        if (this.obj.id == 0) {
          alert("Usuário ou senha inválidos!");
        } else {
          alert("Login realizado com sucesso!");

          localStorage.setItem("login", JSON.stringify(this.obj));
          location.href = "./cadastro";
        }

      },
      (erro) => {
        console.error(erro);
        alert("Ocorreu um erro. Tente novamente mais tarde!");
      }
    );
  }
  esqueciSenha() {
    location.href = 'esqueciSenha';
  }

  irParaCadastro() {
    location.href = 'cadastro';
    
  }
  
  cancelar() {
    location.href = 'vitrine';
  }
 
}
