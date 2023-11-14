import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgIconsModule } from '@ng-icons/core';
import {
  heroMagnifyingGlass,
  heroArrowLongLeft,
} from '@ng-icons/heroicons/outline';

import { CountriesRoutingModule } from './countries-routing.module';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { CountriesComponent } from './pages/countries/countries.component';
import { SharedModule } from '../../shared/shared.module';
import { CountrySearchComponent } from './components/country-search/country-search.component';
import { CountryListComponent } from './components/country-list/country-list.component';
import { CountryInfoComponent } from './pages/country-info/country-info.component';

@NgModule({
  declarations: [
    CountryCardComponent,
    CountriesComponent,
    CountryListComponent,
    CountrySearchComponent,
    CountryInfoComponent,
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule,
    NgxPaginationModule,
    FormsModule,
    NgIconsModule.withIcons({ heroMagnifyingGlass, heroArrowLongLeft }),
  ],
  exports: [CountriesComponent],
})
export class CountriesModule {}
