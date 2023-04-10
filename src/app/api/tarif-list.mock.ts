import { Tariff } from '../models';
import { intRandomBetween, randomBetween } from '../utils';

export const tariffList: Tariff[] = Array(5)
  .fill(null)
  .map((_, i) => ({
    name: `Tariff ${i + 1} Name`,
    benefits: Array(intRandomBetween(1, 4))
      .fill(null)
      .map((_, k) => `Benefit #${k + 1}`),
    id: i + 1,
    price: randomBetween(15, 150),
    speedDownload: randomBetween(2, 150),
    speedUpload: randomBetween(2, 100),
  }));
