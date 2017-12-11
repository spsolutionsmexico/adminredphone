import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetosPreguntaComponent } from './retos-pregunta.component';

describe('RetosPreguntaComponent', () => {
  let component: RetosPreguntaComponent;
  let fixture: ComponentFixture<RetosPreguntaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetosPreguntaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetosPreguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
