import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestadosComponent } from './encuestados.component';

describe('EncuestadosComponent', () => {
  let component: EncuestadosComponent;
  let fixture: ComponentFixture<EncuestadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncuestadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuestadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
