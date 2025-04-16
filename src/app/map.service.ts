import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  isTempMarkerPlaced: boolean = false;
  confirmClicked: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }
}
