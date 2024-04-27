import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMultheroesComponent } from './list-multheroes.component';

describe('ListMultheroesComponent', () => {
  let component: ListMultheroesComponent;
  let fixture: ComponentFixture<ListMultheroesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListMultheroesComponent]
    });
    fixture = TestBed.createComponent(ListMultheroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
