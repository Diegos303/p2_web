import { Component } from '@angular/core';
import { Produto } from '../model/produto';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-carrinho',
  imports: [CommonModule,FormsModule],
  templateUrl: './carrinho.html',
  styleUrl: './carrinho.css',
})
export class Carrinho {

    lista: Produto[] = [];
    subtotal: number = 0;
    formaPagamento: string = "";

    constructor(private service: ProdutoService) {}

    ngOnInit() {

        this.lista = JSON.parse(
            localStorage.getItem("Carrinho") || "[]"
        );
        //--
        this.lista.forEach(p => {

            if (!p.quantidadeVenda) {
                p.quantidadeVenda = 1;
            }

        });

        console.log(this.lista);

        this.calcularTotal();
    }


    calcularTotal() {

        this.subtotal = 0;

        for (let p of this.lista) {
            this.subtotal += p.valor * p.quantidadeVenda;
        }

        localStorage.setItem("Carrinho", JSON.stringify(this.lista)
        );
    }

    remover(obj: Produto) {

        const indice = this.lista.findIndex(
            p => p.codigo === obj.codigo
        );

        if (indice !== -1) {
            this.lista.splice(indice, 1);
        }

        localStorage.setItem("Carrinho", JSON.stringify(this.lista)
        );

        this.calcularTotal();
    }
        limparCarrinho(){

        this.lista = [];

        localStorage.removeItem("Carrinho");

        this.subtotal = 0;
    }

    finalizarCompra() {

        if(this.formaPagamento == ""){
            alert("Selecione uma forma de pagamento!");
            return;
        }

        if(this.lista.length == 0){
            alert("Seu carrinho está vazio!");
            return;
        }

        for(let p of this.lista){

            if(p.quantidadeVenda > p.quantidade){

                alert(
                    `O produto ${p.nome} possui apenas ${p.quantidade} unidades em estoque.`
                );

                return;
            }
        }

        for(let p of this.lista){

            p.quantidade = p.quantidade - p.quantidadeVenda;

            this.service.alterar(p).subscribe();
        }

        alert("Compra realizada com sucesso!");

        localStorage.removeItem("Carrinho");

        this.lista = [];
        this.subtotal = 0;

        location.href = "/";
    }
    aumentarQuantidade(produto: Produto) {

        if (produto.quantidadeVenda < produto.quantidade) {
            produto.quantidadeVenda++;

            localStorage.setItem("Carrinho", JSON.stringify(this.lista)
            );

            this.calcularTotal();
        }
    }

    diminuirQuantidade(produto: Produto) {

        if (produto.quantidadeVenda > 1) {
            produto.quantidadeVenda--;

            localStorage.setItem("Carrinho", JSON.stringify(this.lista)
            );

            this.calcularTotal();
        }
    }
}
