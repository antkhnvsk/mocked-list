import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tarifList } from './tarif-list.mock';
import { Tariff } from '../models';

@Injectable({
  providedIn: 'root',
})
export class TariffListService {
  getTarifList(): Observable<Tariff[]> {
    return new BehaviorSubject(tarifList).asObservable();
  }
}
