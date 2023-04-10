export interface Tariff {
  name: string;
  id: number;
  speedDownload: number;
  speedUpload: number;
  price: number;
  benefits: string[];
}
