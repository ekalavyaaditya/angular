import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';

import { AuthService } from '@core/services/auth.service';
import { NavigationService, NavItem } from '@core/services/navigation.service';
import { ThemeService } from '@core/services/theme.service';

@Component({
  selector: 'app-shell',
  standalone: false,
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  // Performance optimization: Minimize change detection cycles
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShellComponent {
  readonly user$ = this.auth.user$;
  readonly theme$ = this.theme.theme$;

  /**
   * Performance optimization: Memoized navigation items.
   * By moving this to an observable, we avoid calling navigation.navItems(role)
   * multiple times during Angular's change detection cycles in the template.
   */
  readonly navItems$: Observable<NavItem[]> = this.user$.pipe(
    map((user) => (user ? this.navigation.navItems(user.role) : [])),
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

  /**
   * Performance optimization: Track by route to prevent redundant DOM updates.
   */
  trackByNavRoute(index: number, item: NavItem): string {
    return item.route;
  }
}
