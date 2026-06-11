import { Component, ChangeDetectorRef } from '@angular/core';
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

   mensagem: string = "";
   lista: Produto[] = [];

   constructor(
      private service: ProdutoService,
      //--
      private cdr: ChangeDetectorRef
   ){
      this.carregarLista();
   }

   carregarLista(){

      this.mensagem = "";

      this.service.carregarVitrine().subscribe(
        (dados) => {

            console.log("Dados recebidos:", dados);

            this.lista = dados;

            console.log("Quantidade:", this.lista.length);
            //---
            this.cdr.detectChanges();

            if(this.lista.length <= 0){
              this.mensagem = "não encontrei nenhum destaque na vitrine!";
            }

        },
        (erro) => {

            console.error(erro);

            this.mensagem = "Ocorreu um erro, tente mais tarde!";
        }
      );
   }

   redirecionar(obj: Produto){

      localStorage.setItem(
        "ProdutoSelecionado",
        JSON.stringify(obj)
      );

      location.href = "detalhe";
   }
}
