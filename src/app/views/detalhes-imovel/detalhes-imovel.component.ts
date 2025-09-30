import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImovelService } from 'src/app/services/imovel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalhe-imovel',
  templateUrl: './detalhes-imovel.component.html',
  styleUrls: ['./detalhes-imovel.component.scss'],
})
export class DetalheImovelComponent implements OnInit {
  imovel: any;


  constructor(
    private route: ActivatedRoute,
    private imovelService: ImovelService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.imovelService.getImovel().subscribe((dados) => {
      this.imovel = dados.find((i: any) => i.id == id);
    });
  }

  RotaVoltar() {
    this.router.navigate(['/imovel']);
  }
}
