import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router'

import { NavComponent } from './nav.component';
import { SettingsComponent } from './settings/settings.component';
import { AuthService, AUTH_STORE } from '../services/auth.service';

class RouterStub {
  navigate(params: Array<string>) { }
}

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavComponent, SettingsComponent ],
      providers: [ 
        AuthService,
        { provide: Router, useClass: RouterStub },
        { provide: AUTH_STORE, useValue: 'test-user' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
