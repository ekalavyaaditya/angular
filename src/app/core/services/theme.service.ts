import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type ThemeMode = 'light' | 'dark';
const THEME_KEY = 'bankops.theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly mediaQuery: MediaQueryList | undefined;
  private readonly themeSubject: BehaviorSubject<ThemeMode>;
  readonly theme$: Observable<ThemeMode>;

  constructor(@Inject(DOCUMENT) private readonly document: Document) {
    this.mediaQuery = this.document.defaultView?.matchMedia?.('(prefers-color-scheme: dark)');
    this.themeSubject = new BehaviorSubject<ThemeMode>(this.initialTheme());
    this.theme$ = this.themeSubject.asObservable();
    this.apply(this.themeSubject.value);
    this.mediaQuery?.addEventListener('change', (event) => {
      if (!this.storedTheme()) {
        this.setTheme(event.matches ? 'dark' : 'light', false);
      }
    });
  }

  toggle(): void {
    this.setTheme(this.themeSubject.value === 'dark' ? 'light' : 'dark');
  }

  setTheme(mode: ThemeMode, persist = true): void {
    if (persist) {
      this.document.defaultView?.localStorage.setItem(THEME_KEY, mode);
    }
    this.themeSubject.next(mode);
    this.apply(mode);
  }

  private initialTheme(): ThemeMode {
    const stored = this.storedTheme();
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
    return this.mediaQuery?.matches ? 'dark' : 'light';
  }

  private apply(mode: ThemeMode): void {
    const body = this.document.body;
    body.classList.toggle('light-theme', mode === 'light');
    body.classList.toggle('dark-theme', mode === 'dark');
    body.style.colorScheme = mode;
  }

  private storedTheme(): ThemeMode | null {
    const stored = this.document.defaultView?.localStorage.getItem(THEME_KEY);
    return stored === 'light' || stored === 'dark' ? stored : null;
  }
}
