import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
    constructor(private http:HttpClient) { }

  public gravar(obj:Produto) : Observable<any>
  {
    return this.http.post("http://localhost:8081/api/produto", obj);
  }

  public alterar(obj:Produto) :Observable<any>{
    return this.http.put("http://localhost:8081/api/produto", obj);
  }

  public apagar(codigo:number):Observable<any> {
    return this.http.delete("http://localhost:8081/api/produto/"+codigo);
  }

  public carregar(codigo:number):Observable<any> {
    return this.http.get("htt´p://localhost:8081/api/produto/"+codigo);
  }

  public carregarVitrine(): Observable<any>{
    return this.http.get("http://localhost:8081/api/produto/vitrine");
  }

  public fazerBusca(termo:string):Observable<any>{
    return this.http.get("http://localhost:8081/api/produto/busca/"+ termo);
  }

}
