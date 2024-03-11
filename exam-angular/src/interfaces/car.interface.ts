export interface Car {
  brand: string;
  model: string;
  year: string;
  price: number | null;
  description: string;
  phoneNumber: string;
  likes: string[]
  comments: {
    comment: string;
    userId: string;
  }[];
}