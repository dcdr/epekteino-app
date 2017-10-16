import { TestBed, async } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { SettingsComponent } from './nav/settings/settings.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService, AUTH_STORE } from './services/auth.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        DashboardModule
      ],
      declarations: [
        AppComponent,
        AboutComponent,
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
