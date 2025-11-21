import { Component, OnDestroy, OnInit } from '@angular/core';
import { Question } from '../models/question';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-game',
  imports: [],
  templateUrl: './game.html',
  styleUrl: './game.css',
})
export class Game implements OnInit, OnDestroy {
questions: Question[] = [];


ngOnDestroy(){
this.stopTimer();
}


startTimer(){
this.stopTimer();
this.timeLeft = this.timePerQuestion;
this.timerInterval = setInterval(() => {
this.timeLeft -= 1;
if (this.timeLeft <= 0) {
this.onTimeUp();
}
}, 1000);
}


stopTimer(){
if (this.timerInterval) { clearInterval(this.timerInterval); this.timerInterval = null; }
}


onTimeUp(){
if (!this.answered.has(this.currentIndex)) {
this.wrongCount++;
this.score -= 1; // règle : -1 point si incorrect
this.answered.add(this.currentIndex);
}
this.nextQuestion();
}


onSelectOption(option: string, idx: number){
if (this.answered.has(idx)) return; // bloquer double réponse


const q = this.questions[idx];
if (option === q.reponse) {
this.score += 2; // correct +2
this.correctCount++;
} else {
this.score -= 1; // incorrect -1
this.wrongCount++;
}
this.answered.add(idx);
this.stopTimer();
}


submitTextAnswer(idx: number){
if (this.answered.has(idx)) return;
const q = this.questions[idx];
if (this.selectedTextAnswer.trim().toLowerCase() === q.reponse.toLowerCase()){
this.score += 2;
this.correctCount++;
} else {
this.score -= 1;
this.wrongCount++;
}
this.answered.add(idx);
this.selectedTextAnswer = '';
this.stopTimer();
}


nextQuestion(){
this.currentIndex++;
if (this.currentIndex >= this.questions.length) {
this.stopTimer();
return;
}

}

}