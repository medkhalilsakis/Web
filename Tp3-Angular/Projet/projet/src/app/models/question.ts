export type QuestionType = 'mcq' | 'text' | 'image' | 'audio';

export interface Question {
  id: number;
  question: string;
  options?: string[]; 
  reponse: string;   
  type?: QuestionType;
  imageUrl?: string;
  audioUrl?: string;
  timeLimitSec?: number;
}
