import { Author } from "./author";
import { Category } from "./category";

interface BookData {
  _id: string;
  title: string;
  description?: string;
  price: number;
  quantity: number;
}

export interface Book extends BookData {
  category?: Category;
  author: Author;
}

export interface BookEdit extends BookData {
  category?: string;
  author: string;
}
