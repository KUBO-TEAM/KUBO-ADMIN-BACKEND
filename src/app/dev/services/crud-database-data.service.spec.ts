import { TestBed } from '@angular/core/testing';

import { CrudDatabaseDataService } from './crud-database-data.service';

describe('CrudDatabaseDataService', () => {
  let service: CrudDatabaseDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudDatabaseDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
