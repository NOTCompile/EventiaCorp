import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalStateService } from 'src/app/shared/services/modalState';
import { CommonModule } from '@angular/common';
import { ModalAddEvent } from 'src/app/shared/components/modal-add/modal-add';

@Component({
  selector: 'app-sales-page',
  imports: [FormsModule, ModalAddEvent, CommonModule],
  templateUrl: './sales-page.html',
  styleUrl: './sales-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SalesPage {
  typeData = signal('sales');

  constructor(private modalState: ModalStateService) {}

  ngOnInit(): void {
    this.modalState;
  }

  openModal() {
    this.modalState.open(this.typeData());
  }
}
