import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalAddEvent } from 'src/app/shared/components/modal-add/modal-add';
import { ModalStateService } from 'src/app/shared/services/modalState';

@Component({
  selector: 'app-clients-page',
  imports: [FormsModule, ModalAddEvent, CommonModule],
  templateUrl: './clients-page.html',
  styleUrl: './clients-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ClientsPage {
  typeData = signal('client');

  constructor(private modalState: ModalStateService) {}

  ngOnInit(): void {
    this.modalState;
  }

  openModal() {
    this.modalState.open(this.typeData());
  }
}
