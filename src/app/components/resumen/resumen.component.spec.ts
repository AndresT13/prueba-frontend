import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResumenComponent } from './resumen.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { of } from 'rxjs';

describe('ResumenComponent', () => {
  let component: ResumenComponent;
  let fixture: ComponentFixture<ResumenComponent>;

  const paramMapMock = {
    get: (key: string) => {
      if (key === 'numeroDocumento') {
        return '1039454860';
      }
      return null;
    },
    has: (key: string) => {
      return key === 'numeroDocumento';
    },
    getAll: (key: string) => {
      return key === 'numeroDocumento' ? ['1039454860'] : [];
    },
    keys: ['numeroDocumento'],
  };

  const activatedRouteStub = {
    snapshot: {
      paramMap: paramMapMock,
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, ResumenComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        {
          provide: Router,
          useClass: class {
            navigate = jasmine.createSpy('navigate');
          },
        },
        DataService,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ResumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
