import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-score',
  standalone: true,
  template: `
    <div class="score-box">
      <div><strong>Score :</strong> {{ score }}</div>
      <div class="small">Bonnes réponses: {{ correct }} • Mauvaises réponses: {{ wrong }}</div>
    </div>
  `
})
export class ScoreComponent{
  @Input() score = 0;
  @Input() correct = 0;
  @Input() wrong = 0;
}