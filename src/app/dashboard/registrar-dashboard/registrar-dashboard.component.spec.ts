import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { DashboardModule } from '../dashboard.module';
import { RegistrarDashboardComponent } from './registrar-dashboard.component';
import { ServicesModule } from '../../services/services.module';
import { TERM_STORE } from '../../services/term.service';
import { Term } from '../../models/term.model';

let mockRouter = {
  navigate: jasmine.createSpy('navigate')
} 

describe('RegistrarDashboardComponent', () => {
  const termStorage = 'test-terms';
  let component: RegistrarDashboardComponent;
  let fixture: ComponentFixture<RegistrarDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DashboardModule,
        ServicesModule
      ],
      providers: [
        { provide: TERM_STORE, useValue: termStorage },
        { provide: Router, useValue: mockRouter }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    const terms = new Array<Term>();
    const term = new Term();
    term.name = 'Fall 2017';
    terms.push(term)
    localStorage.setItem(termStorage, JSON.stringify(terms));
    fixture = TestBed.createComponent(RegistrarDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should load existing terms', () => {
    expect(component.terms).not.toBeNull();
    expect(component.terms.length).toBe(1);
    expect(component.terms[0].name).toBe('Fall 2017');
  });
});
