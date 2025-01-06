interface Question {
  id: number;
  question: string;
  answer: string;
}

export interface FlashCardProps {
  question: Question;
}
