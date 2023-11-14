import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

import { CountriesService } from '../../services/countries.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  providers: [CountriesService],
})
export class CountryInfoComponent implements OnInit {
  public countriesService = inject(CountriesService);
  public location = inject(Location);
  private searchService = inject(SearchService);
  private route = inject(ActivatedRoute);
  private params = toSignal(this.route.paramMap);

  ngOnInit(): void {
    const countryCode = this.params()?.get('code')!;
    this.searchService.setCountryCode(countryCode);
  }
}
