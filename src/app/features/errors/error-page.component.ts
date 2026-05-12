import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error-page',
  standalone: false,
  template: `
    <section class="error-page">
      <mat-card class="page-card">
        <strong>{{ route.snapshot.data['code'] }}</strong>
        <h1>{{ route.snapshot.data['title'] }}</h1>
        <p>{{ route.snapshot.data['message'] }}</p>
        <a mat-flat-button color="primary" routerLink="/dashboard">
          <mat-icon>space_dashboard</mat-icon>
          Back to dashboard
        </a>
      </mat-card>
    </section>
  `,
  styles: [`
    .error-page {
      min-height: calc(100vh - 140px);
      display: grid;
      place-items: center;
    }

    mat-card {
      width: min(520px, 100%);
      text-align: center;
    }

    strong {
      color: var(--app-accent);
      font-size: 56px;
      line-height: 1;
    }

    h1 {
      margin: 12px 0;
      font-size: 32px;
    }

    p {
      color: var(--app-muted);
      margin-bottom: 22px;
    }
  `]
})
export class ErrorPageComponent {
  constructor(readonly route: ActivatedRoute) {}
}
