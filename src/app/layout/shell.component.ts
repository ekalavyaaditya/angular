import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Component } from '@angular/core';
import { distinctUntilChanged, map, shareReplay } from 'rxjs';

import { AuthService } from '@core/services/auth.service';
import { NavigationService, NavItem } from '@core/services/navigation.service';
import { ThemeService } from '@core/services/theme.service';

@Component({
  selector: 'app-shell',
  standalone: false,
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {
  readonly user$ = this.auth.user$;
  readonly theme$ = this.theme.theme$;
  readonly isHandset$ = this.breakpointObserver.observe('(max-width: 900px)').pipe(
    map((result) => result.matches),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  /**
   * Memoized stream of navigation items for the active user's role.
   * Uses distinctUntilChanged to ensure navigation options are only re-evaluated when the user's role actually changes.
   *
   * Performance Impact: Reduces navItems() calls from O(N) cycles to O(1) per role change, avoiding redundant re-computations
   * during standard change detection cycles triggered by UI interactions.
   */
  readonly navItems$ = this.user$.pipe(
    map((user) => user?.role),
    distinctUntilChanged(),
    map((role) => (role ? this.navigation.navItems(role) : [])),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  constructor(
    readonly auth: AuthService,
    readonly navigation: NavigationService,
    readonly theme: ThemeService,
    private readonly breakpointObserver: BreakpointObserver
  ) {}

  /**
   * Optimizes rendering of the navigation list by tracking items by their route.
   */
  trackByRoute(index: number, item: NavItem): string {
    return item.route;
  }

  closeDrawerOnMobile(drawer: MatSidenav): void {
    if (this.breakpointObserver.isMatched('(max-width: 900px)')) {
      void drawer.close();
    }
  }
}
