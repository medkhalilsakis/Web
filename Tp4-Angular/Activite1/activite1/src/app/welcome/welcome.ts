import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.html',
  styleUrls: ['./welcome.css'],
  imports: [FormsModule, CommonModule]
})
export class Welcome {
  prenomInput: string = '';
  prenomAttendu: string = 'Asma';
  isLoggedIn: boolean = false;
  error: boolean = false;

  login() {
    if (this.prenomInput.trim() === this.prenomAttendu) {
      this.isLoggedIn = true;
      this.error = false;
    } else {
      this.isLoggedIn = false;
      this.error = true;
    }
  }
}
