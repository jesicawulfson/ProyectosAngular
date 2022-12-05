import { TestBed } from '@angular/core/testing';

import { CursoService } from './curso.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { HttpEvent } from '@angular/common/http';

describe('CursoService', () => {
  let service: CursoService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [
      HttpClientTestingModule
    ]});
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new CursoService(httpClientSpy as any);
   
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('El servicio retorna un arreglo de Cursos mockeados', (done: DoneFn) => {
    const mockDatos = [
      {
        nombre: 'nombre 7',
        comision: '25066-5814',
        profesor: 'Windler',
        fechaInicio: '2022-02-26',
        fechaFin: '2023-10-11',
        inscripcionAbierta: true,
        imagen: 'https://parentesis.com/imagesPosts/coder00.jpg',
        id: 7
    }, {
        nombre: 'nombre 8',
        comision: '77746-1039',
        profesor: 'Aufderhar',
        fechaInicio: '2022-04-12',
        fechaFin: '2023-10-12',
        inscripcionAbierta: false,
        imagen: 'https://parentesis.com/imagesPosts/coder00.jpg',
        id: 8
    }, {
        nombre: 'nombre 9',
        comision: '36633',
        profesor: 'Green',
        fechaInicio: '2022-08-21',
        fechaFin: '2023-01-08',
        inscripcionAbierta: true,
        imagen: 'https://parentesis.com/imagesPosts/coder00.jpg',
        id: 9
    }, {
        nombre: 'nombre 10',
        comision: '94189-8762',
        profesor: 'Huela',
        fechaInicio: '2022-01-13',
        fechaFin: '2023-10-12',
        inscripcionAbierta: false,
        imagen: 'https://parentesis.com/imagesPosts/coder00.jpg',
        id: 10
    }, {
        nombre: 'nombre 11',
        comision: '55652',
        profesor: 'Davis',
        fechaInicio: '2023-10-09',
        fechaFin: '2023-11-12',
        inscripcionAbierta: false,
        imagen: 'http://loremflickr.com/640/480',
        id: 11
    }, {
        nombre: 'nombre 12',
        comision: '48098-8422',
        profesor: 'Funk',
        fechaInicio: '2023-10-12',
        fechaFin: '2024-10-12',
        inscripcionAbierta: false,
        imagen: 'http://loremflickr.com/640/480',
        id: 12
    }, {
        nombre: 'nombre 13',
        comision: '71799-7933',
        profesor: 'Cremin',
        fechaInicio: '2023-10-12',
        fechaFin: '2023-06-12',
        inscripcionAbierta: false,
        imagen: 'http://loremflickr.com/640/480',
        id: 13
    }, {
        nombre: 'nombre 14',
        comision: '26757-3996',
        profesor: 'Labadie',
        fechaInicio: '2023-10-12',
        fechaFin: '2023-10-12',
        inscripcionAbierta: false,
        imagen: 'http://loremflickr.com/640/480',
        id: 14
    }, {
        nombre: 'nombre 15',
        comision: '77504-7704',
        profesor: 'McLaughlin',
        fechaInicio: '2022-10-08',
        fechaFin: '2023-10-12',
        inscripcionAbierta: false,
        imagen: 'http://loremflickr.com/640/480',
        id: 15
    }
    ];
    httpClientSpy.get.and.returnValue(of(mockDatos));
    service.obtenerCursos().subscribe(cursos => {
      expect(cursos).toEqual(mockDatos);
      done();
    });
    
  })
});
