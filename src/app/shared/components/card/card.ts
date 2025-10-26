import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone:true,
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Card {
  @Input() title: string = 'Título de la Card';
  @Input() description: string = 'Descripción de ejemplo de la card.';
  @Input() imageUrl: string = '';
}
