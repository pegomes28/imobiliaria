import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaAdmComponent } from './corretores.component';

describe('PaginaAdmComponent', () => {
  let component: PaginaAdmComponent;
  let fixture: ComponentFixture<PaginaAdmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaAdmComponent]
    });
    fixture = TestBed.createComponent(PaginaAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
