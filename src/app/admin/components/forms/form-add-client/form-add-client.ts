import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-add-client',
  imports: [],
  templateUrl: './form-add-client.html',
  styleUrl: './form-add-client.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormAddClient {
  usuarioForm!: FormGroup;

  usuarioSignal = signal({ nombre: '', correo: '' });

  constructor(private fb: FormBuilder) {
    this.usuarioForm = this.fb.group({
      nombre: [''],
      correo: [''],
    });
  }

  guardar() {
    throw new Error('Method not implemented.');
  }
}
