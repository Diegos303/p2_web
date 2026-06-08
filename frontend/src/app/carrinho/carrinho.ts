import { Component } from '@angular/core';
import { Produto } from '../model/produto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrinho',
  imports: [CommonModule],
  templateUrl: './carrinho.html',
  styleUrl: './carrinho.css',
})
export class Carrinho {

    lista: Produto[] = [];
    subtotal: number = 0;

    ngOnInit() {

        this.lista = JSON.parse(
            localStorage.getItem("Carrinho") || "[]"
        );

        console.log(this.lista);

        this.calcularTotal();
    }

    calcularTotal() {

        this.subtotal = 0;

        for(let p of this.lista){
            this.subtotal += p.valor;
        }
    }

        remover(obj: Produto){

        this.lista = this.lista.filter(
            p => p.codigo !== obj.codigo
        );

        localStorage.setItem(
            "Carrinho",
            JSON.stringify(this.lista)
        );

        this.calcularTotal();
    }
        limparCarrinho(){

        this.lista = [];

        localStorage.removeItem("Carrinho");

        this.subtotal = 0;
    }
        finalizarCompra(){

        if(this.lista.length == 0){
            alert("Seu carrinho está vazio!");
            return;
        }

        alert("Compra realizada com sucesso!");

        localStorage.removeItem("Carrinho");

        location.href = "/";
    }
}
