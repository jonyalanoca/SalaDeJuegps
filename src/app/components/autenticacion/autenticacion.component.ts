import { Component, ViewChild, ElementRef, viewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Usuario, UsuarioSign } from '../../interfaces/usuario';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-autenticacion',
  templateUrl: './autenticacion.component.html',
  styleUrl: './autenticacion.component.css'
})
export class AutenticacionComponent {
  @ViewChild('CheckDoor') checkDoor: ElementRef | undefined;
  @ViewChild('VerPass') verPass: ElementRef | undefined;

  public controlForm: FormGroup;
  public passValid: boolean;
  public usuario: Usuario;
  public usuarioSign: UsuarioSign | undefined;

  constructor(private userService: UserService,
    private router: Router
  ) {
    this.usuario = {} as Usuario;
    this.passValid = false;

    this.controlForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      pass: new FormControl('', [Validators.required, Validators.minLength(6)]),
      passRep: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }


  login() {
    this.userService.login(this.usuario)
      .then(response => 
        this.router.navigate(['/dash'])
        )
      .catch(error => console.log(error));
  }
  register(usuario: Usuario) {
    this.userService.register(usuario)
      .catch(error => console.log(error));
  }
  // logout() {
  //   this.userService.logout()
  //     .then(response => console.log(response))
  //     .catch(error => console.log(error));
  // }
  google() {
    this.userService.loginWithGoogle()
      .then(response => this.router.navigate(['/index']))
      .catch(error => console.log(error));
  }



  registrar(): void {
    this.controlForm.markAllAsTouched();
    const pass = this.controlForm.get('pass')?.value;
    const passRep = this.controlForm.get('passRep')?.value;
    if (pass != passRep) {
      this.passValid = true;
      return;
    }

    if (this.controlForm.valid && pass == passRep) {
      this.register({ email: this.controlForm.value.email, pass: this.controlForm.value.pass });
      this.checkDoor!.nativeElement.checked = false;
      return;
    }
  }

  togglePasswordVisibility(passwordInput: HTMLInputElement, passwordInputRep: HTMLInputElement) {
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInputRep.type = passwordInputRep.type === 'password' ? 'text' : 'password';
  }
  resetValidator(): void {
    if (this.passValid == true)
      this.passValid = false;
  }

  limpiar(): void {
    this.controlForm.reset();
    const checkbox: HTMLInputElement = this.verPass!.nativeElement;
    checkbox.checked = false;
    this.passValid = false;

    this.usuario={}as Usuario;
  }

}

