import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CardAdmin } from '../../components/card-admin/card-admin';
import { MyEvent } from '../../interfaces/card.admin.interface';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-index-page',
  imports: [RouterLink, CardAdmin],
  templateUrl: './index-page.html',
  styleUrl: './index-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class IndexPage implements OnInit {
  events: MyEvent[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<MyEvent[]>('data/events.json').subscribe({
      next: (data) => (this.events = data),
      error: (err) => console.error('Error cargando eventos:', err),
    }); 
  }
  trackById(index: number, event: MyEvent): number {
    return event.id;
  }
}
