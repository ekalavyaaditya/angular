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
   * Memoized navigation items stream that updates only when the user's role changes.
   * Redundant calculations are eliminated by avoiding direct service method calls in templates.
   * Expected performance impact: Reduces service navigation generation calls from O(N) cycle re-evaluations during
   * change detection loops to exactly O(1) invocation per active role transition.
   */
  readonly navItems$ = this.user$.pipe(
    map((user) => user?.role ?? null),
    distinctUntilChanged(),
    map((role) => (role ? this.navigation.navItems(role) : []))
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

  /**
   * Tracks list elements by their unique route to optimize Angular DOM rendering and minimize node re-creation.
   */
  trackByRoute(index: number, item: NavItem): string {
    return item.route;
  }
}
