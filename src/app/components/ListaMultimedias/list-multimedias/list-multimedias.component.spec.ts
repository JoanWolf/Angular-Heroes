import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMultimediasComponent } from './list-multimedias.component';

describe('ListMultimediasComponent', () => {
  let component: ListMultimediasComponent;
  let fixture: ComponentFixture<ListMultimediasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListMultimediasComponent]
    });
    fixture = TestBed.createComponent(ListMultimediasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
