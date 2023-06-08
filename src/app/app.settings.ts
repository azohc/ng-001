export interface AppSettings {
  dataSourceURL: string;
  pageSize: number;
  numPagesAdjacentToCurrent: number;
}

export const appSettings: AppSettings = {
  dataSourceURL: '/assets/products-$LANG$.json',
  pageSize: 4,
  numPagesAdjacentToCurrent: 2,
};
