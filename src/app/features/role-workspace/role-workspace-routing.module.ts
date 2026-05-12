import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoleWorkspaceComponent } from './role-workspace.component';

const routes: Routes = [{ path: '', component: RoleWorkspaceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleWorkspaceRoutingModule {}
