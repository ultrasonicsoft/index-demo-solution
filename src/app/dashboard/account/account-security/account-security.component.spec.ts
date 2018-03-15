import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSecurityComponent } from './account-security.component';

describe('AccountSecurityComponent', () => {
  let component: AccountSecurityComponent;
  let fixture: ComponentFixture<AccountSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
