import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';

import { Country } from '../models/country.model';
import { HttpCrudService } from '../../../shared/services/http-crud.service';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private httpCrudService = inject(HttpCrudService);

  getAllCountries(): Observable<Country[]> {
    return this.httpCrudService
      .get<any[]>(
        'https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region'
      )
      .pipe(
        map((countries) => {
          return countries.map((country) => ({
            flag: { imageSrc: country.flags.png, alt: country.flags.alt },
            name: country.name.common,
            population: country.population,
            region: country.region,
            capital: country.capital[0],
          }));
        }),
        shareReplay()
      );
  }
}
