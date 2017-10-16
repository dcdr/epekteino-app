import { TestBed, async } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';

import { NavModule } from './nav/nav.module';

import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './nav/login/login.component';
import { SettingsComponent } from './nav/settings/settings.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService, AUTH_STORE } from './services/auth.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        DashboardModule,
        NavModule
      ],
      declarations: [
        AppComponent,
        LoginComponent,
        SettingsComponent,
        NavComponent
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/'},
        AuthService,
        { provide: AUTH_STORE, useValue: 'user' },       
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Epekteino - Class Registration'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Epekteino - Class Registration');
  }));
});


// describe('DashboardComponent', () => {
//   let component: DashboardComponent;
//   let fixture: ComponentFixture<DashboardComponent>;
//   let user: User;
//   let de: DebugElement;
//   let el: HTMLElement;

//   class AuthServiceStub {
//     getUser(): User {
//       return user;
//     }    
//   }
  
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         DashboardModule,
//         RouterTestingModule.withRoutes([]),
//         ServicesModule
//       ],
//       providers: [ 
//         { provide: AuthService, useClass: AuthServiceStub }
//       ]
//     })
//     .compileComponents();
//   }));

//   describe('when anonymous', () => {
//     user = null;
//     beforeEach(() => {
//       fixture = TestBed.createComponent(DashboardComponent);
//       component = fixture.componentInstance;
//       fixture.detectChanges();
//     });

//     it('should be created', () => {
//       expect(component).toBeTruthy();
//     });

//     it('should identifiy as anonymous', () => {
//       expect(component.userIsRegistrar()).toBeFalsy();
//       expect(component.userIsInstructor()).toBeFalsy();
//       expect(component.userIsStudent()).toBeFalsy();
//       expect(component.userIsAnonymous()).toBeTruthy();
//     });
//   });

//   describe('when registrar', () => {
//     beforeEach(() => {
//       user = new User('family', 'given', ['registrar'], []);
//       fixture = TestBed.createComponent(DashboardComponent);
//       component = fixture.componentInstance;
//       fixture.detectChanges();
//     });

//     it('should display registrar-dashboard', () => {
//       de = fixture.debugElement.query(By.css('app-registrar-dashboard'));
//       el = de.nativeElement;
//       expect(el).not.toBeNull();
//     });

//     it('should identifiy as registrar', () => {
//       expect(component.userIsRegistrar()).toBeTruthy();
//       expect(component.userIsInstructor()).toBeFalsy();
//       expect(component.userIsStudent()).toBeFalsy();
//       expect(component.userIsAnonymous()).toBeFalsy();
//     });
//   });

//   describe('when instructor', () => {
//     beforeEach(() => {
//     user = new User('family', 'given', ['instructor'], []);
//     fixture = TestBed.createComponent(DashboardComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//     it('should redirect instructor-dashboard', () => {
//       de = fixture.debugElement.query(By.css('app-instructor-dashboard'));
//       el = de.nativeElement;
//       expect(el).not.toBeNull();
//     });

//     it('should identifiy as instructor', () => {
//       expect(component.userIsRegistrar()).toBeFalsy();
//       expect(component.userIsInstructor()).toBeTruthy();
//       expect(component.userIsStudent()).toBeFalsy();
//       expect(component.userIsAnonymous()).toBeFalsy();
//     });
//   });

//   describe('when student', () => {
//     beforeEach(() => {
//       user = new User('family', 'given', ['student'], []);
//       fixture = TestBed.createComponent(DashboardComponent);
//       component = fixture.componentInstance;
//       fixture.detectChanges();
//       });

//     it('should redirect student-dashboard', () => {
//       de = fixture.debugElement.query(By.css('app-student-dashboard'));
//       el = de.nativeElement;
//       expect(el).not.toBeNull();
//     });

//     it('should identifiy as student', () => {
//       expect(component.userIsRegistrar()).toBeFalsy();
//       expect(component.userIsInstructor()).toBeFalsy();
//       expect(component.userIsStudent()).toBeTruthy();
//       expect(component.userIsAnonymous()).toBeFalsy();
//     });
//   });
// });
