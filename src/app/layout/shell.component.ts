import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { distinctUntilChanged, map, shareReplay, switchMap } from 'rxjs';

import { AuthService } from '@core/services/auth.service';
import { NavigationService } from '@core/services/navigation.service';
import { ThemeService } from '@core/services/theme.service';

@Component({
  selector: 'app-shell',
  standalone: false,
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShellComponent {
  readonly user$ = this.auth.user$;
  readonly theme$ = this.theme.theme$;

  /**
   * Memoized observable of navigation items based on user role.
   * Reduces navItems() calls from O(N) cycles to O(1) per role change.
   */
  readonly navItems$ = this.user$.pipe(
    map((user) => user?.role),
    distinctUntilChanged(),
    map((role) => (role ? this.navigation.navItems(role) : []))
  );

  readonly isHandset$ = this.breakpointObserver.observe('(max-width: 900px)').pipe(
    map((result) => result.matches),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  constructor(
    readonly auth: AuthService,
    readonly navigation: NavigationService,
    readonly theme: ThemeService,
    private readonly breakpointObserver: BreakpointObserver
  ) {}

  closeDrawerOnMobile(drawer: MatSidenav): void {
    if (this.breakpointObserver.isMatched('(max-width: 900px)')) {
      void drawer.close();
    }
  }
}
