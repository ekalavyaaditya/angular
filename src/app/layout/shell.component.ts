import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map, shareReplay } from 'rxjs';

import { AuthService } from '@core/services/auth.service';
import { NavigationService, NavItem } from '@core/services/navigation.service';
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
  readonly isHandset$ = this.breakpointObserver.observe('(max-width: 900px)').pipe(
    map((result) => result.matches),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  /**
   * Memoized navigation items based on the current user's role.
   * Prevents redundant calls to NavigationService.navItems() during change detection.
   */
  readonly navItems$ = this.user$.pipe(
    map((user) => (user ? this.navigation.navItems(user.role) : [])),
    shareReplay(1)
  );

  constructor(
    readonly auth: AuthService,
    readonly navigation: NavigationService,
    readonly theme: ThemeService,
    private readonly breakpointObserver: BreakpointObserver
  ) {}

  /**
   * trackBy function for navigation items to optimize DOM re-rendering.
   */
  trackByNavRoute(_index: number, item: NavItem): string {
    return item.route;
  }

  closeDrawerOnMobile(drawer: MatSidenav): void {
    if (this.breakpointObserver.isMatched('(max-width: 900px)')) {
      void drawer.close();
    }
  }
}
