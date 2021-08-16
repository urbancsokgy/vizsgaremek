import { User } from "./user";
import { Book } from "./book";

export interface Order {
  _id: string;
  user: User;
  book: Book;
  amount: number;
}


