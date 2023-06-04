export interface AppSettings {
  language: 'en' | 'fr';
  dataSourceURL: string;
  pageSize: number;
  numPagesAdjacentToCurrent: number;
}

export const appSettings: AppSettings = {
  language: 'en',
  dataSourceURL: '/assets/products-$LANG$.json',
  pageSize: 4,
  numPagesAdjacentToCurrent: 2,
};
