import { Component } from '@angular/core';
import { MapService } from '../map.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-new-pin-form',
  imports: [NgIf],
  templateUrl: './new-pin-form.component.html',
  styleUrl: './new-pin-form.component.css'
})
export class NewPinFormComponent {

  constructor (public mapService: MapService) {}

  confirm() {
    this.mapService.confirmClicked.next(true);
  }
}
