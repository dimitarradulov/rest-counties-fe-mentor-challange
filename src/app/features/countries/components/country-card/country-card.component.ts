import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import { Country } from '../../models/country.model';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryCardComponent {
  @Input({ required: true }) data: Country;
  @Output() countryClicked = new EventEmitter<Country>();
}
