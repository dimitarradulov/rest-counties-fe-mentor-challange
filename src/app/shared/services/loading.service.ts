import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap, switchMap, finalize } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  private isLoading = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoading.asObservable();

  trackLoadingUntilObservableCompletes<T>(
    observable$: Observable<T>
  ): Observable<T> {
    return of(null).pipe(
      tap(() => this.isLoading.next(true)),
      switchMap(() => observable$),
      tap(() => this.isLoading.next(false)),
      finalize(() => this.isLoading.next(false))
    );
  }
}
