import { Injectable } from '@angular/core';
import { Question } from '../models/question';



@Injectable({ providedIn: 'root' })
export class QuestionService {
  // Local sample data. You can replace this with httpResource or HttpClient-based fetch.
  questions: Question[] = [
    { id: 1, question: 'Quel est le plus grand océan du monde ?', options: ['Pacifique','Atlantique','Indien','Arctique'], reponse: 'Pacifique', type: 'mcq' },
    { id: 2, question: "Quelle est la capitale de l'Algérie ?", options: ['Alger','Tunis','Tanja'], reponse: 'Alger', type: 'mcq' },
    { id: 3, question: 'Quelle est la couleur du ciel ?', options: ['Bleu','Vert','Rouge'], reponse: 'Bleu', type: 'mcq' },
    // An example of a text question
    { id: 4, question: "Écrivez la somme de 2+2.", reponse: '4', type: 'text' }
  ];

  getQuestions(){
    // In a real app use httpResource or HttpClient
    return [...this.questions];
  }
}