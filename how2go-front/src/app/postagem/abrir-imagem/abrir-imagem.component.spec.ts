import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbrirImagemComponent } from './abrir-imagem.component';

describe('AbrirImagemComponent', () => {
  let component: AbrirImagemComponent;
  let fixture: ComponentFixture<AbrirImagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbrirImagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbrirImagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
