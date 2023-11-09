import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError } from 'rxjs/operators';

import { Country } from '../../models/country.model';
import { CountriesService } from '../../services/countries.service';
import { LoadingService } from '../../../../shared/services/loading.service';
import { ErrorService } from '../../../../shared/services/error.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  providers: [ErrorService],
})
export class CountriesComponent {
  private countriesService = inject(CountriesService);
  private loadingService = inject(LoadingService);
  private errorService = inject(ErrorService);

  page = signal(1);

  error = toSignal(this.errorService.errorMessage$);
  loading = toSignal(this.loadingService.isLoading$);
  countries = toSignal(
    this.loadingService.trackLoadingUntilObservableCompletes(
      this.countriesService.getAllCountries().pipe(
        catchError((err) => {
          this.errorService.showErrorMessage(err);
          return throwError(() => new Error(err));
        })
      )
    ),
    { initialValue: [] }
  );

  countriesTrackBy(index: number, country: Country) {
    return country.name;
  }
}
