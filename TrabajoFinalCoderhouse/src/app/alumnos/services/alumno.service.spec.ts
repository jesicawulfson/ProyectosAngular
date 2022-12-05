import { TestBed } from '@angular/core/testing';

import { AlumnoService } from './alumno.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AlumnoService', () => {
  let service: AlumnoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(AlumnoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
