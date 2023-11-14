export enum Region {
  ALL = 'all',
  AFRICA = 'africa',
  AMERICA = 'americas',
  ASIA = 'asia',
  EUROPE = 'europe',
  OCEANIA = 'oceania',
}

export interface SearchQuery {
  query: string;
  region: Region;
}
