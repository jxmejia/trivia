export type QuestionsData = {
  category?: string;
  type?: string;
  difficulty?: string;
  question?: string;
  correct_answer?: string;
  incorrect_answers?: string[];
};

export type Category =
  | "Entertainment: Music"
  | "Entertainment: Japanese Anime & Manga"
  | "History"
  | "Mythology"
  | "Politics"
  | "Science & Nature"
  | "Vehicles";

export type QuestionType = "boolean";

export type Question = {
  index: number;
  category?: Category;
  type?: QuestionType;
  difficulty?: string;
  description?: string;
  correctAnswer?: boolean;
  incorrectAnswers?: boolean[];
  answer?: boolean;
};
