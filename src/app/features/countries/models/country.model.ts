export interface Country {
  flag: CountryFlag;
  name: string;
  population: number;
  region: string;
  capital: string;
}

export interface CountryFlag {
  imageSrc: string;
  alt: string;
}
