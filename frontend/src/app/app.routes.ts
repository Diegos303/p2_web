import { Routes } from '@angular/router';
import { Cadastro } from './cadastro/cadastro';
import { Login } from './login/login';
import { Vitrine } from './vitrine/vitrine';
import { EsqueciSenha } from './esqueci-senha/esqueci-senha';
import { Detalhe } from './detalhe/detalhe';
import { Carrinho } from './carrinho/carrinho';
import { Bolsas } from './telas-menu-protudo-acessorio/bolsas/bolsas';
import { Chapeus } from './telas-menu-protudo-acessorio/chapeus/chapeus';
import { Camisetas } from './telas-menu-protudo-feminino/camisetas/camisetas';
import { Calcas } from './telas-menu-protudo-feminino/calcas/calcas';
import { Blusas } from './telas-menu-protudo-feminino/blusas/blusas';
import { CamisetasM } from './telas-menu-protudo-masculino/camisetas-m/camisetas-m';
import { ShortsM } from './telas-menu-protudo-masculino/shorts-m/shorts-m';
import { BlusasM } from './telas-menu-protudo-masculino/blusas-m/blusas-m';


export const routes: Routes = [
    {path:"cadastro", component:Cadastro},
    {path:"vitrine", component:Vitrine},
    {path: 'esqueciSenha', component: EsqueciSenha},
    {path:"", component:Vitrine},
    {path:"login",component:Login},
    {path:"detalhe",component:Detalhe},
    {path:"carrinho", component:Carrinho},
    {path:"bolsas", component:Bolsas},
    {path:"chapeus", component:Chapeus},
    {path:"camisetas-f", component:Camisetas},
    {path:"calcas-f", component:Calcas},
    {path:"blusas-f", component:Blusas},
    {path:"camisetas-m", component:CamisetasM},
    {path:"shorts-m", component:ShortsM},
    {path:"blusas-m", component:BlusasM}
];
