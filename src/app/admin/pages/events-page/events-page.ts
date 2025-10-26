import { ChangeDetectionStrategy, Component, OnInit, signal} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalStateService } from 'src/app/shared/services/modalState';
import { CommonModule } from '@angular/common';
import { ModalAddEvent } from 'src/app/shared/components/modal-add/modal-add';
import { schemaCard } from 'src/app/shared/interfaces/schemaCard';
import dataCard from '../../../shared/data/dataCard.json'
import { Card } from "src/app/shared/components/card/card";

@Component({
  selector: 'app-events-page',
  imports: [FormsModule, ModalAddEvent, CommonModule, Card],
  templateUrl: './events-page.html',
  styleUrl: './events-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class EventsPage implements OnInit {
  total(arg0: any) {
    throw new Error('Method not implemented.');
  }
  seguro(arg0: any) {
    throw new Error('Method not implemented.');
  }
  afp(arg0: any) {
    throw new Error('Method not implemented.');
  }
  bonificacion(arg0: any) {
    throw new Error('Method not implemented.');
  }
  empleados: any;

  /* Develop */
  typeData = signal('event');

  dataCard: schemaCard[] = dataCard;

  constructor(private modalState: ModalStateService) {}

  ngOnInit(): void {
    this.modalState;
  }

  openModal() {
    this.modalState.open(this.typeData());
  }
}
