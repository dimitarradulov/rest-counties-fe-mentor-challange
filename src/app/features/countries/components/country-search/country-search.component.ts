import { Component, Output, EventEmitter, Input } from '@angular/core';

import { Country } from '../../models/country.model';
import { Region, SearchQuery } from '../../models/country-search.model';

@Component({
  selector: 'app-country-search',
  templateUrl: './country-search.component.html',
})
export class CountrySearchComponent {
  @Output() queryChange = new EventEmitter<SearchQuery>();

  protected readonly Region = Region;
}
