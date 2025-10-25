import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-admin',
  imports: [],
  templateUrl: './card-admin.html',
  styleUrl: './card-admin.css'
})
export class CardAdmin {
  @Input() title: string = 'Título de la Card';
  @Input() description: string = 'Descripción de ejemplo de la card.';
  @Input() imageUrl: string = '';
}
