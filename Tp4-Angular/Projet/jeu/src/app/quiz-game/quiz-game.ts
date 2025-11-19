import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Question {
  question: string;
  options: string[];
  reponse: string;
  answered?: boolean;
  selectedOption?: string;
}

@Component({
  selector: 'app-quiz-game',
  templateUrl: './quiz-game.html',
  styleUrls: ['./quiz-game.css'],
  imports: [CommonModule, FormsModule]
})
export class QuizGame {
  questions: Question[] = [
    { question: 'Capitale de la France ?', options: ['Paris','Lyon','Marseille'], reponse: 'Paris' },
    { question: '2 + 2 = ?', options: ['3','4','5'], reponse: '4' },
    { question: 'Couleur du ciel ?', options: ['Bleu','Vert','Rouge'], reponse: 'Bleu' }
  ];

  score = 0;
  history: { text: string; correct: boolean }[] = [];
  currentIndex = 0;

  // répondre à l'option
  onSelectOption(option: string, q: Question) {
    if (q.answered) return; // déjà répondu
    q.answered = true;
    q.selectedOption = option;
    const correct = option === q.reponse;
    if (correct) this.score += 10;
    else this.score -= 5;

    this.history.push({ text: q.question, correct });

    // passe à la question suivante (si possible) après un petit délai visuel
    setTimeout(() => {
      this.nextQuestion();
    }, 300); // court délai pour visual feedback ; facultatif
  }

isCorrect(option: string, q: Question): boolean {
  return !!q.answered && q.selectedOption === option && option === q.reponse;
}

isIncorrect(option: string, q: Question): boolean {
  return !!q.answered && q.selectedOption === option && option !== q.reponse;
}


  isSelected(option: string, q: Question): boolean {
    return q.selectedOption === option;
  }

  nextQuestion() {
    // avance jusqu'à la prochaine non-répondue, sinon reste à la fin
    for (let i = this.currentIndex + 1; i < this.questions.length; i++) {
      if (!this.questions[i].answered) {
        this.currentIndex = i;
        return;
      }
    }
    // sinon cherche depuis le début
    for (let i = 0; i < this.questions.length; i++) {
      if (!this.questions[i].answered) {
        this.currentIndex = i;
        return;
      }
    }
    // si toutes répondues, on garde l'index final
    this.currentIndex = Math.min(this.currentIndex + 1, this.questions.length - 1);
  }

  allAnswered(): boolean {
    return this.questions.every(q => q.answered);
  }

  finishGame() {
    // action à la fin du jeu (ex: sauvegarder score)
    console.log('Jeu terminé. Score:', this.score);
  }

  resetGame() {
    this.questions.forEach(q => { q.answered = false; q.selectedOption = undefined; });
    this.score = 0;
    this.history = [];
    this.currentIndex = 0;
  }
}
