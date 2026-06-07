import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map, shareReplay, switchMap } from 'rxjs';

import { AuthService } from '@core/services/auth.service';
import { NavItem, NavigationService } from '@core/services/navigation.service';
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
   * Memoized navigation items based on the current user's role.
   * shareReplay(1) ensures that late subscribers (like the template)
   * get the latest value without re-executing navigation logic.
   */
  readonly navItems$ = this.user$.pipe(
    switchMap((user) => {
      const role = user?.role ?? 'CUSTOMER';
      return [this.navigation.navItems(role)];
    }),
    shareReplay(1)
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
   * Optimizes *ngFor rendering by tracking navigation items by their route.
   */
  trackByNavRoute(_: number, item: NavItem): string {
    return item.route;
  }
}
