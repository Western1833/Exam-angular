export interface Car {
  imageUrl: string;
  brand: string;
  model: string;
  year: string;
  price: number | null;
  description: string;
  phoneNumber: string;
  timestamp: number | null
  _ownerId: string;
//   likes: string[]
//   comments: {
//     comment: string;
//     userId: string;
//   }[];
}