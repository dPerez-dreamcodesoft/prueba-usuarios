import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  profileForm = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(11)]),
    name: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('[a-zA-Z]*')]),
    gender: new FormControl('', [Validators.required]),
    tel: new FormControl('', [Validators.required, Validators.pattern('^[6,3]/d{9}')]),
    email: new FormControl('', [Validators.required, Validators.email])
  });


  constructor() { }

  ngOnInit(): void {
    
  }

  get id() {
    return this.profileForm.get('id');
  }

  get name() {
    return this.profileForm.get('name');
  }

  get gender() {
    return this.profileForm.get('gender');
  }

  get tel() {
    return this.profileForm.get('tel');
  }

  get email() {
    return this.profileForm.get('email');
  }
}
