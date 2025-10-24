import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-events-page',
  imports: [],
  templateUrl: './events-page.html',
  styleUrl: './events-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class EventsPage { }
