import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('p1');

    termoPesquisa: string = '';

  constructor(private router: Router) {}

  pesquisar() {

    if (this.termoPesquisa.trim() === '') {
      return;
    }

    this.router.navigate([
      '/busca',
      this.termoPesquisa
    ]);

  }
  abrirPerfil() {

    if (localStorage.getItem("login")) {
      location.href = "./perfil";
    } else {
      location.href = "./login";
    }

  }
}
