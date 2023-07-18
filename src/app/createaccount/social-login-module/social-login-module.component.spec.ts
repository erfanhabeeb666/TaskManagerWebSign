import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialLoginModuleComponent } from './social-login-module.component';

describe('SocialLoginModuleComponent', () => {
  let component: SocialLoginModuleComponent;
  let fixture: ComponentFixture<SocialLoginModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialLoginModuleComponent]
    });
    fixture = TestBed.createComponent(SocialLoginModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
