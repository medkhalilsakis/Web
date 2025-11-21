import { Injectable } from '@angular/core';
import { Question } from '../models/question';


@Injectable({ providedIn: 'root' })
export class QuestionService {
  private questions: Question[] = [
    { id:1, question: 'Quel est le plus grand océan du monde ?', options: ['Pacifique','Atlantique','Indien','Arctique'], reponse: 'Pacifique', type: 'mcq', timeLimitSec: 20 },
    { id:2, question: "Quelle est la capitale de l'Algérie ?", options: ['Alger','Tunis','Tanja','Oran'], reponse: 'Alger', type: 'mcq', timeLimitSec: 15 },
    { id:3, question: 'Quelle est la couleur du ciel ?', options: ['Bleu','Vert','Rouge'], reponse: 'Bleu', type: 'mcq', timeLimitSec: 10 }
  ];


    getQuestions(): Question[] {
    return JSON.parse(JSON.stringify(this.questions));
    }
}