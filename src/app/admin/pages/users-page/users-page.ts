import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalAddEvent } from 'src/app/shared/components/modal-add/modal-add';
import { ModalStateService } from 'src/app/shared/services/modalState';

@Component({
  selector: 'app-users-page',
  imports: [FormsModule, ModalAddEvent, CommonModule],
  templateUrl: './users-page.html',
  styleUrl: './users-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UsersPage {
  typeData = signal('user');

  constructor(private modalState: ModalStateService) {}

  ngOnInit(): void {
    this.modalState;
  }

  openModal() {
    this.modalState.open(this.typeData());
  }
}
