import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ImovelComponent } from './views/imovel/imovel.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { LoginComponent } from './views/login/login.component';
import { MeusInteressesComponent } from './views/meus-interesses/meus-interesses.component';
import { PaginaAdmComponent } from './views/corretores/corretores.component';
import { DetalheImovelComponent } from './views/detalhes-imovel/detalhes-imovel.component';
import { AdicionarImovelComponent } from './views/adicionar-imovel/adicionar-imovel.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'imovel', component: ImovelComponent },
  { path: 'imovel/:id', component: DetalheImovelComponent },
  { path: 'pagina-adm', component: PaginaAdmComponent },
  { path: 'adicionar-imovel', component: AdicionarImovelComponent },
  { path: 'meus-interesses', component: MeusInteressesComponent },
  { path: 'corretores', component: PaginaAdmComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
