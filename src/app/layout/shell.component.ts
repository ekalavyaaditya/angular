import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Component } from '@angular/core';
import { map, shareReplay, distinctUntilChanged, filter } from 'rxjs';

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
   * Memoized navigation items observable.
   * Deriving navigation items as an observable prevents O(N) re-computations
   * during every change detection cycle when calling services from the template.
   *
   * Reduces navItems() calls from O(N) cycles to O(1) per role change.
   */
  readonly navItems$ = this.user$.pipe(
    filter((user): user is NonNullable<typeof user> => !!user),
    distinctUntilChanged((prev, curr) => prev.role === curr.role),
    map((user) => this.navigation.navItems(user.role)),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  constructor(
    readonly auth: AuthService,
    readonly navigation: NavigationService,
    readonly theme: ThemeService,
    private readonly breakpointObserver: BreakpointObserver
  ) {}

  /**
   * Tracks navItems by their route property to optimize DOM re-rendering.
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
