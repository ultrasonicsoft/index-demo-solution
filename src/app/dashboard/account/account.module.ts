import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountOverviewComponent } from './account-overview/account-overview.component';
import { AccountSecurityComponent } from './account-security/account-security.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AccountOverviewComponent, AccountSecurityComponent]
})
export class AccountModule { }
