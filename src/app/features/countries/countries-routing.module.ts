import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CountriesComponent } from './pages/countries/countries.component';
import { CountryInfoComponent } from './pages/country-info/country-info.component';

const routes: Routes = [
  { path: '', component: CountriesComponent },
  { path: 'country/:code', component: CountryInfoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountriesRoutingModule {}
