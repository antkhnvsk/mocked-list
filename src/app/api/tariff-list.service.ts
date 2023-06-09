import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { mockTariffList } from '../mock';
import { SortType, Tariff } from '../models';

@Injectable({
  providedIn: 'root',
})
export class TariffListService {
  getTariffList(sort: SortType): Observable<Tariff[]> {
    return new BehaviorSubject(
      [...mockTariffList].sort((a, b) => {
        switch (sort) {
          case SortType.Default:
            return 0;

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
