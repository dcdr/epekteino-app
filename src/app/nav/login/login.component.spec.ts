import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavModule } from '../nav.module';
import { LoginComponent } from './login.component';
import { Router } from '@angular/router';
import { AuthService, AUTH_STORE } from '../../services/auth.service';

class RouterStub {
  navigateByUrl(url: string) { return url; }
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;
  let authSpy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NavModule
      ],
      providers: [ 
        AuthService, 
        { provide: Router, useClass: RouterStub },
        { provide: AUTH_STORE, useValue: 'test-user' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    // authService = fixture.debugElement.injector.get(AuthService);
    // authSpy = spyOn(authService, 'authenticate')
    //       .and.returnValue(Promise.resolve(true));
  
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
