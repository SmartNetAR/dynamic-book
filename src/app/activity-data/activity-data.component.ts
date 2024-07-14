import { Component, Input } from '@angular/core';
import { Activity } from '../lesson';

@Component({
  selector: 'app-activity-data',
  standalone: true,
  imports: [],
  templateUrl: './activity-data.component.html',
  styleUrl: './activity-data.component.css'
})
export class ActivityDataComponent {
  @Input() activity: Activity | undefined;

}
