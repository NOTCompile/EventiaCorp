import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { NavbarIndex } from "../../components/navbar-index/navbar-index";
import { MyEvent } from '../../interfaces/card.admin.interface';

@Component({
  selector: 'app-index-page',
  imports: [RouterLink, NavbarIndex],
  templateUrl: './index-page.html',
  styleUrl: './index-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class IndexPage {
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
