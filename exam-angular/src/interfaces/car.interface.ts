export interface Car {
  imageUrl: string;
  brand: string;
  model: string;
  year: string;
  price: number | null;
  description: string;
  phoneNumber: string;
  _ownerId: string;
  _id: string;
//   likes: string[]
//   comments: {
//     comment: string;
//     userId: string;
//   }[];
}