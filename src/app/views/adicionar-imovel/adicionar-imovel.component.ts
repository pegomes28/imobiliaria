import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adicionar-imovel',
  templateUrl: './adicionar-imovel.component.html',
  styleUrls: ['./adicionar-imovel.component.scss'],
})
export class AdicionarImovelComponent implements OnInit {
  imovel: any = {
    titulo: '',
    tipo: '',
    cidade: '',
    endereco: '',
    preco: null,
    descricao: '',
    imagemUrl: '',
  };

  private baseUrl = 'http://localhost:3011/imovel';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}

  adicionarImovel(): void {
    this.http.post(this.baseUrl, this.imovel).subscribe({
      next: () => {
        alert('Imóvel adicionado com sucesso!');
        this.router.navigate(['/corretores']);
      },
      error: (err) => console.error('Erro ao adicionar imóvel:', err),
    });
  }

  RotaVoltar(): void {
    this.router.navigate(['/corretores']);
  }
}
