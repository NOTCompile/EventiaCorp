import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ModalStateService } from 'src/app/shared/services/modalState';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormAddEvent } from "src/app/admin/components/forms/form-add-event/form-add-event";
import { FormAddSales } from "src/app/admin/components/forms/form-add-sales/form-add-sales";

@Component({
  selector: 'app-modal-add-event',
  imports: [FormsModule, CommonModule, FormAddEvent, FormAddSales],
  templateUrl: './modal-add.html',
  styleUrl: './modal-add.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalAddEvent {
  constructor(public modalState: ModalStateService) {}

  @Input() option: string = '';

  closeModal() {
    this.modalState.close();
  }
}
