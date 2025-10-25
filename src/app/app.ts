import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardAdmin } from "./shared/components/card-admin/card-admin";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardAdmin],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('EventiaCorp');
}
