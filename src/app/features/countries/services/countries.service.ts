import { Injectable, inject, signal, computed } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { EMPTY, Observable } from 'rxjs';
import {
  shareReplay,
  map,
  catchError,
  mergeMap,
  switchMap,
  scan,
} from 'rxjs/operators';

import { Country } from '../models/country.model';
import { HttpCrudService } from '../../../shared/services/http-crud.service';
import { CountryState } from '../models/country-state.model';
import { ErrorService } from '../../../shared/services/error.service';
import { LoadingService } from '../../../shared/services/loading.service';
import { SearchService } from './search.service';
import {
  matchQueryCountriesFilter,
  mapCountries,
  filterCountriesByCode,
} from '../utils/countries.utils';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private httpCrudService = inject(HttpCrudService);
  private errorService = inject(ErrorService);
  private loadingService = inject(LoadingService);
  private searchService = inject(SearchService);

  // sources
  allCountries$ = this.loadingService.trackLoadingOnObservable(
    this.getAllCountries()
  );
  filteredCountries$ = this.searchService.searchQuery$.pipe(
    switchMap((queryData) =>
      this.allCountries$.pipe(
        map((countries) => matchQueryCountriesFilter(countries, queryData))
      )
    )
  );
  countryByCode$ = this.searchService.countryCode$.pipe(
    switchMap((countryCode) =>
      this.allCountries$.pipe(
        map((countries) => filterCountriesByCode(countries, countryCode))
      )
    )
  );
  borderingCountries$ = this.countryByCode$.pipe(
    map((countries) =>
      countries.length > 1 || !countries.at(0)?.borders
        ? EMPTY
        : countries.at(0)?.borders!
    ),
    mergeMap((countryCodes) => countryCodes),
    switchMap((countryCode) =>
      this.allCountries$.pipe(
        map((countries) => filterCountriesByCode(countries, countryCode))
      )
    ),
    scan((acc, curr) => {
      const country = curr.at(0)!;
      return [...acc, country];
    }, [] as Country[]),
    map((countries) => countries.map((country) => country.name))
  );

  // state
  private state = signal<CountryState>({
    loading: true,
    error: null,
    countries: [],
    borderCountries: [],
  });

  // selectors
  loading = computed(() => this.state().loading);
  error = computed(() => this.state().error);
  countries = computed(() => this.state().countries);
  borderCountries = computed(() => this.state().borderCountries);

  constructor() {
    // reducers
    this.errorService.error$
      .pipe(takeUntilDestroyed())
      .subscribe((errorMsg) =>
        this.state.update((state) => ({ ...state, error: errorMsg }))
      );

    this.loadingService.loading$
      .pipe(takeUntilDestroyed())
      .subscribe((isLoading) =>
        this.state.update((state) => ({ ...state, loading: isLoading }))
      );

    this.filteredCountries$
      .pipe(takeUntilDestroyed())
      .subscribe((countries) => this.setCountriesState(countries));

    this.countryByCode$
      .pipe(takeUntilDestroyed())
      .subscribe((country) => this.setCountriesState(country));

    this.borderingCountries$.pipe(takeUntilDestroyed()).subscribe((countries) =>
      this.state.update((state) => ({
        ...state,
        borderCountries: countries,
      }))
    );
  }

  getAllCountries(): Observable<Country[]> {
    return this.httpCrudService
      .get<any[]>('https://restcountries.com/v3.1/all')
      .pipe(
        catchError((error) => {
          this.errorService.setError(error);
          return EMPTY;
        }),
        map(mapCountries),
        shareReplay(1)
      );
  }

  private setCountriesState(countries: Country[]) {
    this.state.update((state) => ({ ...state, countries }));
  }
}
