import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementComponent } from './requirement.component';

describe('ClassroomComponent', () => {
  let component: RequirementComponent;
  let fixture: ComponentFixture<RequirementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequirementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
