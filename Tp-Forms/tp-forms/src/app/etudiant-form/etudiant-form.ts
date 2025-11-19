import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Etudiant } from '../models/etudiant';

@Component({
  selector: 'app-etudiant-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './etudiant-form.html',
  styleUrls: ['./etudiant-form.css']
})
export class EtudiantForm {

  classes = ['L2DSI1', 'L2DSI2', 'L2DSI3', 'L3DSI1', 'L3DSI2'];

  model: Etudiant = new Etudiant(1, 'Mohamed', this.classes[0], 'XYZ');
  submitted = false;

  onSubmit(form: NgForm) {
    if (form.invalid) {
      Object.values(form.controls).forEach(control => {
        (control as any).markAsDirty();
      });
      return;
    }
    this.submitted = true;
  }

  newEtudiant(form?: NgForm) {
    this.model = new Etudiant(Date.now(), '', '');
    if (form) {
      form.resetForm(this.model);
    }
    this.submitted = false;
  }
}
