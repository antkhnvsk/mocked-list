import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tariffList } from './tarif-list.mock';
import { SortType, Tariff } from '../models';

@Injectable({
  providedIn: 'root',
})
export class TariffListService {
  getTarifList(sort: SortType): Observable<Tariff[]> {
    return new BehaviorSubject(
      [...tariffList].sort((a, b) => {
        switch (sort) {
          case SortType.Default:
            return 1;

          case SortType.Download:
            return b.speedDownload - a.speedDownload;

          case SortType.Upload:
            return b.speedUpload - a.speedUpload;

          case SortType.Price:
            return a.price - b.price;
        }
      })
    ).asObservable();
  }
}
