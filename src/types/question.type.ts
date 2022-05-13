export type Category =
  | "Entertainment: Music"
  | "Entertainment: Japanese Anime & Manga"
  | "History"
  | "Mythology"
  | "Politics"
  | "Science & Nature"
  | "Vehicles";

export type Type = "boolean";

export type Question = {
  index: number;
  category: Category;
  type: Type;
  difficulty: string;
  description: string;
  correctAnswer: boolean;
  incorrectAnswers: boolean[];
  answer: boolean;
};
