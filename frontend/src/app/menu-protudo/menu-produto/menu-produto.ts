import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

import { Produto } from '../../model/produto';
import { ProdutoService } from '../../service/produto.service';

@Component({
  selector: 'app-menu-produto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-produto.html',
  styleUrl: './menu-produto.css'
})
export class MenuProduto implements OnInit {

  mensagem: string = '';
  keywords: string = '';
  lista: Produto[] = [];

  constructor(
    private route: ActivatedRoute,
    private service: ProdutoService,
    //--
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

      const termo = params.get('termo');

      if (termo) {
        this.buscarTermo(termo);
        return;
      }

      this.keywords = params.get('keywords') || '';

      this.buscarProdutos();

    });

  }

  buscarProdutos(): void {

    this.service.buscarPorKeywords(this.keywords)
      .subscribe({
        next: (retorno) => {

          this.lista = retorno;
          //---
          this.cdr.detectChanges();

          if (this.lista.length === 0) {
            this.mensagem = 'Nenhum produto encontrado.';
          } else {
            this.mensagem = '';
          }

        },
        error: (erro) => {

          console.error(erro);

          this.mensagem = 'Erro ao carregar produtos.';
        }
      });

  }

  redirecionar(obj: Produto): void {

      localStorage.setItem("ProdutoSelecionado", JSON.stringify(obj));
      location.href="detalhe";

    console.log(obj);

  }

  buscarTermo(termo: string) {

    console.log('Termo recebido:', termo);

    this.service.buscar(termo).subscribe(
      dados => {

        console.log('Produtos encontrados:', dados);

        this.lista = dados;

        //--
        this.cdr.detectChanges();

      },
      erro => {
        console.error(erro);
      }
    );

  }

}
