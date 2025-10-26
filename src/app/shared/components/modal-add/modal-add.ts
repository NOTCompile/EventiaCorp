import { ChangeDetectionStrategy, Component, input, Input } from '@angular/core';
import { ModalStateService } from 'src/app/shared/services/modalState';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormAddEvent } from 'src/app/admin/components/forms/form-add-event/form-add-event';
import { FormAddSales } from 'src/app/admin/components/forms/form-add-sales/form-add-sales';
import { FormAddClient } from 'src/app/admin/components/forms/form-add-client/form-add-client';
import { FormAddUser } from 'src/app/admin/components/forms/form-add-user/form-add-user';
import { FormAddRole } from 'src/app/admin/components/forms/form-add-role/form-add-role';
import { FormAddStateEvent } from 'src/app/admin/components/forms/form-add-state-event/form-add-state-event';
import { FormAddTypeEvent } from 'src/app/admin/components/forms/form-add-type-event/form-add-type-event';

@Component({
  selector: 'app-modal-add-event',
  imports: [
    FormsModule,
    CommonModule,
    FormAddEvent,
    FormAddSales,
    FormAddClient,
    FormAddUser,
    FormAddRole,
    FormAddStateEvent,
    FormAddTypeEvent,
  ],
  templateUrl: './modal-add.html',
  styleUrl: './modal-add.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalAddEvent {
  constructor(public modalState: ModalStateService) {}

  option = input<string>();

  closeModal() {
    this.modalState.close();
  }
}
