import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheImovelComponent } from './detalhes-imovel.component';

describe('DetalheImovelComponent', () => {
  let component: DetalheImovelComponent;
  let fixture: ComponentFixture<DetalheImovelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalheImovelComponent]
    });
    fixture = TestBed.createComponent(DetalheImovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
