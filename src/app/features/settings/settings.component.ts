import { Component } from '@angular/core';

import { ThemeService } from '@core/services/theme.service';

@Component({
  selector: 'app-settings',
  standalone: false,
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  readonly theme$ = this.theme.theme$;

  constructor(readonly theme: ThemeService) {}
}
