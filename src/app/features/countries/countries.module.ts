import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { CountryCardComponent } from './components/country-card/country-card.component';
import { CountriesComponent } from './pages/countries/countries.component';
import { SharedModule } from '../../shared/shared.module';
import { CountrySearchComponent } from './components/country-search/country-search.component';

@NgModule({
  declarations: [CountryCardComponent, CountriesComponent, CountrySearchComponent],
  imports: [CommonModule, SharedModule, NgxPaginationModule],
  exports: [CountriesComponent],
})
export class CountriesModule {}
