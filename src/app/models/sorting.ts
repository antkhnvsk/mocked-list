export enum SortType {
  Default,
  Download,
  Upload,
  Price,
}

export const sortOptions = new Map<SortType, string>([
  [SortType.Default, 'Default'],
  [SortType.Download, 'Max Download speed'],
  [SortType.Upload, 'Max Upload speed'],
  [SortType.Price, 'Min Tariff price'],
]);
