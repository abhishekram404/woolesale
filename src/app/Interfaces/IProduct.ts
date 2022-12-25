export interface IProduct {
  _id: string;
  name: string;
  price: number;
  images: {url : string}[];
  _createdAt : Date
}
