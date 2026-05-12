import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from './error-page.component';

const routes: Routes = [
  { path: 'forbidden', component: ErrorPageComponent, data: { code: '403', title: 'Access denied', message: 'Your current role cannot access this banking workspace.' } },
  { path: 'not-found', component: ErrorPageComponent, data: { code: '404', title: 'Page not found', message: 'The requested route does not exist.' } },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorsRoutingModule {}
