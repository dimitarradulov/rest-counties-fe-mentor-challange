import { Component, Input } from '@angular/core';
import { Country } from '../../models/country.model';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styles: [],
})
export class CountryCardComponent {
  @Input({ required: true }) data: Country;
}
