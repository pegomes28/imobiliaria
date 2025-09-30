import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener,
} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ImovelService } from 'src/app/services/imovel.service';
import { InteresseService } from 'src/app/services/interesse.service';

@Component({
  selector: 'app-imovel',
  templateUrl: './imovel.component.html',
  styleUrls: ['./imovel.component.scss'],
})
export class ImovelComponent implements OnInit {
  // Menu
  menuAtivo = false;
  @ViewChild('menu') menuElement!: ElementRef;
  @ViewChild('menuIcon') menuIcon!: ElementRef;

  // Imóveis e favoritos
  imoveis: any[] = [];
  interessesCliente: any[] = [];
  userId!: number;

  // Filtros
  pesquisaCidade: string = '';
  filtroTipo: string = '';
  filtroAluguel: string = '';

  constructor(
    public authService: AuthService,
    private imovelService: ImovelService,
    private interesseService: InteresseService
  ) {}

  ngOnInit(): void {
    // Observa login
    this.authService.currentUser$.subscribe((user) => {
      if (user) {
        this.userId = user.id;
        this.loadInteresses();
      } else {
        this.userId = 0;
        this.interessesCliente = [];
      }
    });

    // Carrega todos os imóveis
    this.imovelService.getImovel().subscribe((dados) => (this.imoveis = dados));
  }

  // Menu
  toggleMenu() {
    this.menuAtivo = !this.menuAtivo;
  }

  @HostListener('document:click', ['$event'])
  clickFora(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (
      this.menuElement &&
      this.menuIcon &&
      !this.menuElement.nativeElement.contains(target) &&
      !this.menuIcon.nativeElement.contains(target)
    ) {
      this.menuAtivo = false;
    }
  }

  // Favoritos
  isFavorito(imovelId: number): boolean {
    return this.interessesCliente.some((i) => i.imovelId === imovelId);
  }

  toggleFavorito(imovelId: number) {
    if (!this.userId) return;
    const interesseExistente = this.interessesCliente.find(
      (i) => i.imovelId === imovelId
    );

    if (interesseExistente) {
      this.interesseService
        .removeInteresse(interesseExistente.id)
        .subscribe(() => {
          this.interessesCliente = this.interessesCliente.filter(
            (i) => i.imovelId !== imovelId
          );
        });
    } else {
      this.interesseService
        .addInteresse({ clienteId: this.userId, imovelId })
        .subscribe((res) => {
          this.interessesCliente.push(res);
        });
    }
  }

  // Carrega interesses do usuário
  private loadInteresses() {
    if (!this.userId) return;
    this.interesseService
      .getInteressesByCliente(this.userId)
      .subscribe((res) => {
        this.interessesCliente = res;
      });
  }

  // Função para filtrar os imóveis direto no TS
  filtrarImoveis() {
    return this.imoveis.filter((imovel) => {
      const okCidade = this.pesquisaCidade
        ? imovel.cidade
            .toLowerCase()
            .includes(this.pesquisaCidade.toLowerCase())
        : true;
      const okTipo = this.filtroTipo ? imovel.tipo === this.filtroTipo : true;

      let okAluguel = true;
      if (this.filtroAluguel) {
        const [min, max] = this.filtroAluguel.split('-').map(Number);
        okAluguel = imovel.aluguel >= min && imovel.aluguel <= max;
      }

      return okCidade && okTipo && okAluguel;
    });
  }
}
