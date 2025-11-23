import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionService } from '../services/question.service';
import { signal, computed } from '@angular/core';
import { QuestionComponent } from '../question/question';
import { ScoreComponent } from '../score/score';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, QuestionComponent, ScoreComponent],
  template: `
    <div class="question-area">
      <div class="left">
        <div class="question-card">
          <div class="small">Question {{ currentIndex() + 1 }} / {{ total }}</div>
          <div style="margin-top:0.5rem">
            <app-question [question]="currentQuestion" [locked]="locked()" (answered)="onAnswered($event)"></app-question>
          </div>
          <div style="margin-top:0.8rem">
            <div class="timer-bar" aria-hidden>
              <div class="timer-fill" [style.width.%]="timePercent"></div>
            </div>
            <div class="footer">
              <div class="center small">Temps restant: {{ remaining }}s</div>
              <div>
                <button class="btn btn-outline" (click)="prev()" [disabled]="currentIndex()===0">Précédent</button>
                <button class="btn btn-primary" style="margin-left:0.5rem" (click)="next()">Suivant</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="right">
        <app-score [score]="score()" [correct]="correctCount()" [wrong]="wrongCount()"></app-score>

        <div style="margin-top:1rem">
          <div class="small">Résumé</div>
          <div class="small">Questions total: {{ total }}</div>
          <div style="margin-top:0.5rem">
            <button class="btn btn-outline" (click)="restart()">Recommencer</button>
          </div>
        </div>
      </div>

    </div>
  `
})
export class GameComponent implements OnDestroy{
  private qs = new QuestionService(); // or inject
  questions = this.qs.getQuestions();
  total = this.questions.length;

  // Signals for reactive state
  currentIndex = signal(0);
  score = signal(0);
  correctCount = signal(0);
  wrongCount = signal(0);
  locked = signal(false);

  // Timer
  remaining = 15; // seconds per question
  private timerId: any = null;
  private totalTime = 15;

  constructor(){
    this.startTimer();
  }

  get currentQuestion(){
    return this.questions[this.currentIndex()];
  }

  get timePercent(): number{
    return Math.max(0, (this.remaining / this.totalTime) * 100);
  }

  startTimer(){
    this.clearTimer();
    this.remaining = this.totalTime;
    this.timerId = setInterval(()=>{
      this.remaining -= 1;
      if(this.remaining <= 0){
        this.onTimeUp();
      }
    },1000);
  }

  clearTimer(){
    if(this.timerId) { clearInterval(this.timerId); this.timerId = null; }
  }

  onTimeUp(){
    this.locked.set(true);
    // count as wrong
    this.wrongCount.update(v=>v+1);
    this.score.update(v=>v-1);
    // auto advance after short pause
    setTimeout(()=>{ this.next(); }, 900);
  }

  onAnswered(event: {correct:boolean, answer:string}){
    if(this.locked()) return;
    this.locked.set(true);
    if(event.correct){
      this.score.update(v=>v+5);
      this.correctCount.update(v=>v+1);
    } else {
      this.score.update(v=>v-1);
      this.wrongCount.update(v=>v+1);
    }
    // advance automatically
    setTimeout(()=>{ this.next(); }, 900);
  }

  prev(){
    const idx = this.currentIndex();
    if(idx > 0) {
      this.currentIndex.set(idx - 1);
      this.locked.set(false);
      this.startTimer();
    }
  }

  next(){
    const idx = this.currentIndex();
    if(idx < this.total - 1){
      this.currentIndex.set(idx + 1);
      this.locked.set(false);
      this.startTimer();
    } else {
      // end of quiz
      this.clearTimer();
      // keep locked
      this.locked.set(true);
      // optionally show results — here we just stay on last question
    }
  }

  restart(){
    this.currentIndex.set(0);
    this.score.set(0);
    this.correctCount.set(0);
    this.wrongCount.set(0);
    this.locked.set(false);
    this.startTimer();
  }

  ngOnDestroy(): void {
    this.clearTimer();
  }
}