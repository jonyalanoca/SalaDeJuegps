import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { Usuario } from './interfaces/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';

}
