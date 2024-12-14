import {inject, Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, Subscription} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService implements OnDestroy {
  private _sub: Subscription;
  private _mobile = new BehaviorSubject(false);
  private _tablet = new BehaviorSubject(false);
  private _desktop = new BehaviorSubject(false);
  private _bpObserver = inject(BreakpointObserver);

  constructor() {
    this._sub = this._bpObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]).subscribe(result => {
      this._mobile.next(result.breakpoints[Breakpoints.XSmall]);
      this._tablet.next(result.breakpoints[Breakpoints.Small]);
      this._desktop.next(
        result.breakpoints[Breakpoints.Medium] ||
        result.breakpoints[Breakpoints.Large] ||
        result.breakpoints[Breakpoints.XLarge]
      );
    });
  }

  get mobile() {
    return this._mobile.asObservable();
  }

  get tablet() {
    return this._tablet.asObservable();
  }

  get desktop() {
    return this._desktop.asObservable();
  }

  ngOnDestroy() {
    this._sub.unsubscribe();
  }
}
