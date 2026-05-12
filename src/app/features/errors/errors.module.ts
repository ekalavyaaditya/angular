import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { ErrorPageComponent } from './error-page.component';
import { ErrorsRoutingModule } from './errors-routing.module';

@NgModule({
  declarations: [ErrorPageComponent],
  imports: [SharedModule, ErrorsRoutingModule]
})
export class ErrorsModule {}
