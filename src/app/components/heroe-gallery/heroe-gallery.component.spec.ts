import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeGalleryComponent } from './heroe-gallery.component';

describe('HeroeGalleryComponent', () => {
  let component: HeroeGalleryComponent;
  let fixture: ComponentFixture<HeroeGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroeGalleryComponent]
    });
    fixture = TestBed.createComponent(HeroeGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
