import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { ImovelComponent } from './views/imovel/imovel.component';
import { MeusInteressesComponent } from './views/meus-interesses/meus-interesses.component';
import { PaginaAdmComponent } from './views/corretores/corretores.component';
import { FooterComponent } from './templates/footer/footer.component';
import { HeaderComponent } from './templates/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DetalheImovelComponent } from './views/detalhes-imovel/detalhes-imovel.component';
import { AdicionarImovelComponent } from './views/adicionar-imovel/adicionar-imovel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CadastroComponent,
    ImovelComponent,
    MeusInteressesComponent,
    PaginaAdmComponent,
    FooterComponent,
    HeaderComponent,
    DetalheImovelComponent,
    AdicionarImovelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
    HttpClientModule, // módulo necessário para que a página faça as requisições HttpClient
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
