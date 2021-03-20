import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberComponent } from './member/member.component';
import { AdminComponent } from './admin/admin.component';
import { LibraryManagementService } from './library-management.service';
import { SharedModule } from '../shared/shared.module';
import { LibraryManagementRoutingModule } from './library-managemen.routing';
import { PrimenNGModule } from '../shared/prime-ng/prime-ng.module';

@NgModule({
  declarations: [MemberComponent, AdminComponent],
  imports: [CommonModule, PrimenNGModule, LibraryManagementRoutingModule],
  providers: [LibraryManagementService],
})
export class LibraryManagementModule {}
