import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { SettingsComponent } from './settings.component';
import { AuthService, AUTH_STORE } from '../../services/auth.service';

class RouterStub {
  navigate(params: Array<string>) { }
}

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsComponent ],
      providers: [ 
        AuthService,
        { provide: Router, useClass: RouterStub },
        { provide: AUTH_STORE, useValue: 'test-user' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
