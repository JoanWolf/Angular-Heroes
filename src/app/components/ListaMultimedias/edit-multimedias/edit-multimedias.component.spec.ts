import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMultimediasComponent } from './edit-multimedias.component';

describe('EditMultimediasComponent', () => {
  let component: EditMultimediasComponent;
  let fixture: ComponentFixture<EditMultimediasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditMultimediasComponent]
    });
    fixture = TestBed.createComponent(EditMultimediasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
