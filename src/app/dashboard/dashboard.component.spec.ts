import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { DashboardModule } from './dashboard.module';
import { ServicesModule } from '../services/services.module';
import { DashboardComponent } from './dashboard.component';
import { AuthService } from '../services/auth.service';

import { User } from '../models/user.model';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let user: User;
  let de: DebugElement;
  let el: HTMLElement;

  class AuthServiceStub {
    getUser(): User {
      return user;
    }    
  }
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DashboardModule,
        RouterTestingModule.withRoutes([]),
        ServicesModule
      ],
      providers: [ 
        { provide: AuthService, useClass: AuthServiceStub }
      ]
    })
    .compileComponents();
  }));

  describe('when anonymous', () => {
    user = null;
    beforeEach(() => {
      fixture = TestBed.createComponent(DashboardComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should be created', () => {
      expect(component).toBeTruthy();
    });

    it('should identifiy as anonymous', () => {
      expect(component.userIsRegistrar()).toBeFalsy();
      expect(component.userIsInstructor()).toBeFalsy();
      expect(component.userIsStudent()).toBeFalsy();
      expect(component.userIsAnonymous()).toBeTruthy();
    });
  });

  describe('when registrar', () => {
    beforeEach(() => {
      user = new User('family', 'given', ['registrar'], []);
      fixture = TestBed.createComponent(DashboardComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should display registrar-dashboard', () => {
      de = fixture.debugElement.query(By.css('app-registrar-dashboard'));
      el = de.nativeElement;
      expect(el).not.toBeNull();
    });

    it('should identifiy as registrar', () => {
      expect(component.userIsRegistrar()).toBeTruthy();
      expect(component.userIsInstructor()).toBeFalsy();
      expect(component.userIsStudent()).toBeFalsy();
      expect(component.userIsAnonymous()).toBeFalsy();
    });
  });

  describe('when instructor', () => {
    beforeEach(() => {
    user = new User('family', 'given', ['instructor'], []);
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

    it('should redirect instructor-dashboard', () => {
      de = fixture.debugElement.query(By.css('app-instructor-dashboard'));
      el = de.nativeElement;
      expect(el).not.toBeNull();
    });

    it('should identifiy as instructor', () => {
      expect(component.userIsRegistrar()).toBeFalsy();
      expect(component.userIsInstructor()).toBeTruthy();
      expect(component.userIsStudent()).toBeFalsy();
      expect(component.userIsAnonymous()).toBeFalsy();
    });
  });

  describe('when student', () => {
    beforeEach(() => {
      user = new User('family', 'given', ['student'], []);
      fixture = TestBed.createComponent(DashboardComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      });

    it('should redirect student-dashboard', () => {
      de = fixture.debugElement.query(By.css('app-student-dashboard'));
      el = de.nativeElement;
      expect(el).not.toBeNull();
    });

    it('should identifiy as student', () => {
      expect(component.userIsRegistrar()).toBeFalsy();
      expect(component.userIsInstructor()).toBeFalsy();
      expect(component.userIsStudent()).toBeTruthy();
      expect(component.userIsAnonymous()).toBeFalsy();
    });
  });
});
