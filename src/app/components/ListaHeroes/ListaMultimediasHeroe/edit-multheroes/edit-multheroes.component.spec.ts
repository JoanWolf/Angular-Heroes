import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMultheroesComponent } from './edit-multheroes.component';

describe('EditMultheroesComponent', () => {
  let component: EditMultheroesComponent;
  let fixture: ComponentFixture<EditMultheroesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditMultheroesComponent]
    });
    fixture = TestBed.createComponent(EditMultheroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
