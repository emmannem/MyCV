import { TestBed } from '@angular/core/testing';

import { CertificadosService } from '../services/certificados.service';

describe('CertificadosService', () => {
  let service: CertificadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CertificadosService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
