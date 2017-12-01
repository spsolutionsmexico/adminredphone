import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetosCompComponent } from './retos-comp.component';

describe('RetosCompComponent', () => {
  let component: RetosCompComponent;
  let fixture: ComponentFixture<RetosCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetosCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetosCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
