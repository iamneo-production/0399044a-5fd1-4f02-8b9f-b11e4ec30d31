import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditacademyComponent } from './editacademy.component';

describe('EditacademyComponent', () => {
  let component: EditacademyComponent;
  let fixture: ComponentFixture<EditacademyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditacademyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditacademyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
