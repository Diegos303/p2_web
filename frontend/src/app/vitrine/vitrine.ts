import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../model/produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-vitrine',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vitrine.html',
  styleUrl: './vitrine.css'
})
export class Vitrine {
   mensagem: String = "";
   lista : Produto[] =[];

   constructor(private service: ProdutoService){
      this.carregarLista();
   }

   carregarLista(){
      this.mensagem = "";
      this.service.carregarVitrine().subscribe(
        (dados) => {
            console.log(dados);
            this.lista = dados;
            if(this.lista.length<=0) this.mensagem = "não encontrei nenhum destaque na vitrine!";
        },
        (erro) => {
            this.mensagem = "Ocorreu um erro, tente mais tarde!";
        });
   }

  /*Routes*/

  redirecionar(obj:Produto){
      localStorage.setItem("ProdutoSelecionado", JSON.stringify(obj));
      location.href="detalhe";
  }
}
