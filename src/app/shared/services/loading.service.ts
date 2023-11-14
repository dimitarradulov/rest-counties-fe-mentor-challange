import { Injectable } from '@angular/core';
import { Subject, Observable, of, tap, switchMap, finalize } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private loadingSubject = new Subject<boolean>();
  loading$ = this.loadingSubject.asObservable();

  trackLoadingOnObservable<T>(obs$: Observable<T>): Observable<T> {
    return of(null).pipe(
      tap(() => this.startLoading()),
      switchMap(() => obs$),
      finalize(() => this.stopLoading()),
      tap(() => this.stopLoading())
    );
  }

  startLoading() {
    this.loadingSubject.next(true);
  }

  stopLoading() {
    this.loadingSubject.next(false);
  }
}
