import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Question } from '../models/question';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="question-card">
      <div class="q-text">{{ question.question }}</div>

      @if (question.type === 'mcq') {
        <div class="options">
          @for (opt of question.options; track opt) {
            <button class="btn"
              [class.btn-primary]="selected === opt && !locked"
              [class.btn-outline]="selected !== opt"
              (click)="select(opt)"
              [disabled]="locked">
              {{ opt }}
            </button>
          }
        </div>
      } @else {
        <div>
          <input class="responsive" [(ngModel)]="textAnswer" placeholder="Votre réponse" [disabled]="locked" />
          <div style="margin-top:0.6rem"><button class="btn btn-primary" (click)="submitText()" [disabled]="locked">Valider</button></div>
        </div>
      }

    </div>
  `
})
export class QuestionComponent{
  @Input() question!: Question;
  @Input() locked = false; // parent controls locking after answering
  @Output() answered = new EventEmitter<{correct:boolean, answer:string}>();

  selected: string | null = null;
  textAnswer: string = '';

  select(option: string){
    if(this.locked) return;
    this.selected = option;
    const correct = option === this.question.reponse;
    this.answered.emit({correct, answer: option});
  }

  submitText(){
    if(this.locked) return;
    const user = (this.textAnswer || '').trim();
    const correct = user.toLowerCase() === (this.question.reponse || '').toLowerCase();
    this.answered.emit({correct, answer: user});
  }
}