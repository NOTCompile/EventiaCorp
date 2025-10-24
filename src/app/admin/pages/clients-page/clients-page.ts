import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-clients-page',
  imports: [],
  templateUrl: './clients-page.html',
  styleUrl: './clients-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ClientsPage { }
