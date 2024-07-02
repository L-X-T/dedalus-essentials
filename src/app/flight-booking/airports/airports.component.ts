import { Component, inject } from '@angular/core';

import { AirportService } from '../../services/airport.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-airports',
  templateUrl: './airports.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class AirportsComponent {
  readonly airports$ = inject(AirportService).findAll();
}
