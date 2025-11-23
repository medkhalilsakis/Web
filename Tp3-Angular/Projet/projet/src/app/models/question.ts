export type QuestionType = 'mcq' | 'text' | 'image' | 'audio';

export interface Question {
  id: number;
  type?: QuestionType;
  question: string;
  options?: string[];
  reponse: string;
  imageUrl?: string;
  audioUrl?: string;
}