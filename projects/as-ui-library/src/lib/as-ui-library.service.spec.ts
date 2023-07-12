import { TestBed } from '@angular/core/testing';

import { AsUiLibraryService } from './as-ui-library.service';

describe('AsUiLibraryService', () => {
  let service: AsUiLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsUiLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
