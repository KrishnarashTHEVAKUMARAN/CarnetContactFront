import { Component } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = new User();
  constructor(private router: Router) {}

  onSubmit() {
    const username = this.user.username;
    const password = this.user.password;

    if (username === password) {
      this.router.navigate(['/Contacts']);
    } else {
      console.log('Échec de la connexion');
    }
  }
}
