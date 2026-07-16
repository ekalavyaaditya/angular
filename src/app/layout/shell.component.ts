import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Component } from '@angular/core';
import { distinctUntilChanged, filter, map, shareReplay } from 'rxjs';

import { AuthService } from '@core/services/auth.service';
import { NavItem, NavigationService } from '@core/services/navigation.service';
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

  /**
   * Memoized navigation items that only recalculate when the user role changes.
   * Reduces navItems() calls from O(N) cycles to O(1) per role change.
   */
  readonly navItems$ = this.user$.pipe(
    filter((user) => !!user),
    distinctUntilChanged((prev, curr) => prev?.role === curr?.role),
    map((user) => this.navigation.navItems(user.role)),
    shareReplay({ bufferSize: 1, refCount: true })
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

  trackByRoute(_index: number, item: NavItem): string {
    return item.route;
  }
}
