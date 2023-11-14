import { Region, SearchQuery } from '../models/country-search.model';
import { Country } from '../models/country.model';

export const matchQueryCountriesFilter = (
  countries: Country[],
  queryData: SearchQuery
): Country[] => {
  return countries.filter((country) => {
    const isQueryMatchingInName = country.name
      .toLowerCase()
      .includes(queryData.query);

    if (queryData.region === Region.ALL) {
      return isQueryMatchingInName;
    }

    return (
      country.region.toLowerCase() === queryData.region && isQueryMatchingInName
    );
  });
};

export const filterCountriesByCode = (
  countries: Country[],
  code: string
): Country[] => {
  const countryCode = code.toLowerCase();

  if (countryCode === 'all') {
    return countries;
  }

  return countries.filter(
    (country) =>
      country.cca2?.toLowerCase() === countryCode ||
      country.cca3?.toLowerCase() === countryCode ||
      country.ccn3?.toLowerCase() === countryCode ||
      country.cioc?.toLowerCase() === countryCode
  );
};

export const mapCountries = (countries: any[]): Country[] => {
  return countries.map((countryInfo) => {
    return {
      flag: {
        png: countryInfo.flags.png,
        svg: countryInfo.flags.svg,
        alt: countryInfo.flags.alt,
      },
      name: countryInfo.name.common,
      population: countryInfo.population,
      region: countryInfo.region,
      capital: countryInfo.capital?.at(0),
      currencies: countryInfo.currencies
        ? Object.values(countryInfo.currencies)
            .map((currency: any) => currency.name)
            .join(', ')
        : '',
      languages: countryInfo.languages
        ? Object.values(countryInfo.languages).join(', ')
        : '',
      nativeName: countryInfo.name.nativeName
        ? (Object.values(countryInfo.name.nativeName).at(0) as any).common
        : '',
      subRegion: countryInfo.subregion,
      tld: countryInfo.tld?.at(0),
      cca2: countryInfo.cca2,
      cca3: countryInfo.cca3,
      ccn3: countryInfo.ccn3,
      cioc: countryInfo.cioc,
      borders: countryInfo.borders,
    };
  });
};
