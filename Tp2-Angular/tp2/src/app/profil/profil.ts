import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.html',
  styleUrls: ['./profil.css'],
  imports: [FormsModule],
})
export class ProfilComponent {
  utilisateur = {
    prenom: '',
    age: null as number | null
  };
}
