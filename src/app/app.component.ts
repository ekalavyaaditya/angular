import { Component } from '@angular/core';

import { LoadingService } from '@core/services/loading.service';
import { ThemeService } from '@core/services/theme.service';

@Component({
  selector: 'app-root',
  standalone: false,
  template: `
    <div class="loading-shade" *ngIf="loading$ | async">
      <mat-progress-bar mode="indeterminate"></mat-progress-bar>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: [`
    mat-progress-bar {
      width: min(520px, calc(100vw - 32px));
      border-radius: 999px;
      overflow: hidden;
    }
  `]
})
export class AppComponent {
  readonly loading$ = this.loadingService.loading$;

  constructor(
    private readonly loadingService: LoadingService,
    private readonly theme: ThemeService
  ) {}
}
