import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActualizarCompComponent } from './actualizar-comp.component';

describe('ActualizarCompComponent', () => {
  let component: ActualizarCompComponent;
  let fixture: ComponentFixture<ActualizarCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
