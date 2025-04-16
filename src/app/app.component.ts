import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MapComponent } from './map/map.component';
import { NewPinFormComponent } from './new-pin-form/new-pin-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MapComponent, NewPinFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'map';
}
