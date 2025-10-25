import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-add-event',
  imports: [ReactiveFormsModule],
  templateUrl: './form-add-event.html',
  styleUrl: './form-add-event.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormAddEvent {
  usuarioForm!: FormGroup;

  usuarioSignal = signal({nombre:'', correo:''});

  constructor(private fb: FormBuilder) {
    this.usuarioForm = this.fb.group ({
      nombre: [''],
      correo: ['']
    });
  }

  guardar() {
    throw new Error('Method not implemented.');
  }
}
