import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

import { CountriesService } from '../../services/countries.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
})
export class CountriesComponent {
  public countriesService = inject(CountriesService);
  public searchService = inject(SearchService);
  public router = inject(Router);

  page = signal(1);

  constructor() {
    this.searchService.setCountryCode('all');
  }
}
