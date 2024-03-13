import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormAuthService {
  constructor(private fb: FormBuilder) {}

  connectForm() {
    return this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  createForm() {
    return this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', Validators.required],
      numero: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required, ]
    })
  }
}
