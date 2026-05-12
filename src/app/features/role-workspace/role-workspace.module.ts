import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { RoleWorkspaceRoutingModule } from './role-workspace-routing.module';
import { RoleWorkspaceComponent } from './role-workspace.component';

@NgModule({
  declarations: [RoleWorkspaceComponent],
  imports: [SharedModule, RoleWorkspaceRoutingModule]
})
export class RoleWorkspaceModule {}
