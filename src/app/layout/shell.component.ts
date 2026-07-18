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
   * Memoized observable of navigation items for the current user.
   * Derived from the current user state to prevent redundant O(N) recalculations on every Angular change detection cycle.
   * Reduces navItems() calls from O(N) cycles to O(1) per role change.
   */
  readonly navItems$ = this.user$.pipe(
    distinctUntilChanged((prev, curr) => prev?.role === curr?.role),
    map((user) => (user ? this.navigation.navItems(user.role) : []))
  );

  constructor(
    readonly auth: AuthService,
    readonly navigation: NavigationService,
    readonly theme: ThemeService,
    private readonly breakpointObserver: BreakpointObserver
  ) {}

  /**
   * Track-by function for navigation list items.
   * Tracks items by their unique route property to optimize DOM updates.
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
