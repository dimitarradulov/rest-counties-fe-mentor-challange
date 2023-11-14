export interface Country {
  flag: CountryFlag;
  name: string;
  population: number;
  region: string;
  capital: string;
  nativeName: string;
  subRegion: string;
  tld: string;
  currencies: string;
  languages: string;
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  borders: string[];
}

export interface CountryFlag {
  png: string;
  svg: string;
  alt: string;
}
