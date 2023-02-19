export type Book = {
  issueYear: string;
  rating: number;
  title: string;
  authors: string[];
  image: Image;
  categories: string[];
  id: string;
  booking: null | Booking;
  delivery: null | Delievery;
  histories: null | Histories;
}

type Image = {
  url: string;
}

type Booking = {
  id: number;
  order: boolean;
  dateOrder: string;
  customerId: number;
  customerFirstName: string;
  customerLastName: string;
}

type Histories = {
  id: number;
  userId: number;
}

type Delievery = {
  id: number;
  handed: boolean;
  dateHandedFrom: string;
  dateHandedTo: string;
  recipientId: number;
  recipientFirstName: string;
  recipientLastName: string;
}

export type BookCard = {
  key: string;
  bookItem: Book;
  isListView: boolean;
}
export interface Category  {
  name:string;
  path:string;
  id: string,
}


