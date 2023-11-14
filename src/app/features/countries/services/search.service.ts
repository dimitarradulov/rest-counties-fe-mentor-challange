import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { SearchQuery } from '../models/country-search.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchQuerySubject = new Subject<SearchQuery>();
  private countryCodeSubject = new Subject<string>();

  searchQuery$ = this.searchQuerySubject.asObservable();
  countryCode$ = this.countryCodeSubject.asObservable();

  setQuery(query: SearchQuery) {
    this.searchQuerySubject.next(query);
  }

  setCountryCode(code: string) {
    this.countryCodeSubject.next(code);
  }
}
