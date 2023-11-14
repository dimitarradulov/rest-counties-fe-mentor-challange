import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { Country } from '../../models/country.model';

@Component({
  selector: 'app-country-list',
  template: `
    @if (countries.length) {
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
      @for (country of countries | paginate : { itemsPerPage: 12, currentPage:
      paginationPage }; track country.name) {
      <app-country-card
        [data]="country"
        (countryClicked)="countryClicked.next($event)"
      />
      }
    </div>
    } @else {
    <p class="font-semibold">No countries found!</p>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryListComponent {
  @Input({ required: true }) countries: Country[];
  @Input({ required: true }) paginationPage: number;
  @Output() countryClicked = new EventEmitter<Country>();
}
