export type CardProps = {
  id: string;
  image: number;
  author: string;
  title: string;
  rating: number;
  year: number;
  isBooked: boolean;
  bookedTill: string | null;
  isList: boolean;
};
