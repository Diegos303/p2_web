import { Routes } from '@angular/router';
import { Cadastro } from './cadastro/cadastro';
import { Login } from './login/login';
import { Vitrine } from './vitrine/vitrine';
import { EsqueciSenha } from './esqueci-senha/esqueci-senha';
import { Detalhe } from './detalhe/detalhe';
import { Carrinho } from './carrinho/carrinho';
import { MenuProduto } from './menu-protudo/menu-produto/menu-produto';
import { Perfil } from './perfil/perfil';

export const routes: Routes = [
    {path:"cadastro", component:Cadastro},
    {path:"vitrine", component:Vitrine},
    {path: 'esqueciSenha', component: EsqueciSenha},
    {path:"", component:Vitrine},
    {path:"login",component:Login},
    {path:"detalhe",component:Detalhe},
    {path:"carrinho", component:Carrinho},
    {path: "menu-produto/:keywords",component:MenuProduto},
    {path: 'busca/:termo',component:MenuProduto},
    {path:"perfil", component:Perfil}
  ];
