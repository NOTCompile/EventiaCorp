import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalAddEvent } from 'src/app/shared/components/modal-add/modal-add';
import { ModalStateService } from 'src/app/shared/services/modalState';

@Component({
  selector: 'app-utilities-page',
  imports: [FormsModule, ModalAddEvent, CommonModule],
  templateUrl: './utilities-page.html',
  styleUrl: './utilities-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UtilitiesPage {
  optionRoleUser = signal('role_user');
  optionTypeEvent = signal('type_event');
  optionStateEvent = signal('state_event');

  option = signal('');

  constructor(private modalState: ModalStateService) {}

  ngOnInit(): void {
    this.modalState;
  }

  openModal(optionSelected: string) {
    this.option.set(optionSelected); 
    this.modalState.open(optionSelected);
  }
}
