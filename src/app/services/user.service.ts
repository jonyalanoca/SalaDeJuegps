 import { Injectable } from '@angular/core';
 import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,
  signInWithPopup, GoogleAuthProvider, User
} from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth:Auth) { }

  //#region Metodos login tradicional
  register(usuario:Usuario){
    return createUserWithEmailAndPassword(this.auth, usuario.email, usuario.pass);
  }
  login(usuario:Usuario){
    return signInWithEmailAndPassword(this.auth, usuario.email, usuario.pass);
  }
  logout(){
    return signOut(this.auth);
  }
  //#endregion

  //#region Metodos para Google
  loginWithGoogle(){
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }
  //#endregion

}
