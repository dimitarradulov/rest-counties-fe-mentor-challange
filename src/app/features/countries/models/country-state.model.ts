import { Country } from '../models/country.model';

export type CountryState = {
  loading: boolean;
  error: any;
  countries: Country[];
  borderCountries: string[];
};
