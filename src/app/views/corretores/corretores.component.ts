import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-adm',
  templateUrl: './corretores.component.html',
  styleUrls: ['./corretores.component.scss'],
})
export class PaginaAdmComponent implements OnInit {
  imoveis: any[] = [];
  private baseUrl = 'http://localhost:3011/imovel';

  // ADICIONADO: menu hamburger
  menuAtivo: boolean = false;

  constructor(
    private http: HttpClient,
    public authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getImoveis();
  }

  // ADICIONADO: toggle menu
  toggleMenu(): void {
    this.menuAtivo = !this.menuAtivo;
  }

  getImoveis(): void {
    this.http.get<any[]>(this.baseUrl).subscribe({
      next: (res) => (this.imoveis = res),
      error: (err) => console.error('Erro ao buscar imóveis:', err),
    });
  }

  editarImovel(id: string): void {
    this.router.navigate(['/imovel-editar', id]);
  }

  excluirImovel(id: string): void {
    if (!confirm('Tem certeza que deseja excluir este imóvel?')) return;

    this.http.delete(`${this.baseUrl}/${id}`).subscribe({
      next: () => this.getImoveis(),
      error: (err) => console.error('Erro ao excluir imóvel:', err),
    });
  }

  // ADICIONADO: botão adicionar imóvel
  adicionarImovel(): void {
    this.router.navigate(['/imovel-adicionar']);
  }
}
