import { TestBed } from '@angular/core/testing';

import { GalleryheroesService } from './galleryheroes.service';

describe('GalleryheroesService', () => {
  let service: GalleryheroesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GalleryheroesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
