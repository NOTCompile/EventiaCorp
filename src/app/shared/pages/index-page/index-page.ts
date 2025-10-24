import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardAdmin } from '../../components/card-admin/card-admin';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-index-page',
  imports: [
    RouterLink,
    CardAdmin
  ],
  templateUrl: './index-page.html',
  styleUrl: './index-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class IndexPage {
  events = [
    {
      id: 1,
      title: 'Evento 1',
      description: 'Hora: 4:00 pm\nLugar: Arequipa\nOrganizado por: ReneAlonso\n',
      imageUrl: 'https://images7.memedroid.com/images/UPLOADED798/60e533d8957ec.jpeg'
    },
    {
      id: 2,
      title: 'Evento 2',
      description: 'Hora: 4:00 pm\nLugar: Arequipa\nOrganizado por: Omar\n',
      imageUrl: 'https://images3.memedroid.com/images/UPLOADED705/68fb39b328ce8.webp'
    },
    {
      id: 2,
      title: 'Evento 2',
      description: 'Hora: 5:00 pm\nLugar: Ancash\nOrganizado por: Frego\n',
      imageUrl: 'https://images7.memedroid.com/images/UPLOADED318/68fb39582ebd5.webp'
    },
    {
      id: 2,
      title: 'Evento 2',
      description: 'Hora: 6:00 pm\nLugar: Puno\nOrganizado por: Miau\n',
      imageUrl: 'https://images3.memedroid.com/images/UPLOADED794/68fb39d0b5631.webp'
    },
    {
      id: 2,
      title: 'Evento 2',
      description: 'Hora: 7:00 pm\nLugar: Tacna\nOrganizado por: ReneAlonso\n',
      imageUrl: 'https://images3.memedroid.com/images/UPLOADED385/68fb39b5b18cb.webp'
    }

  ];
}
