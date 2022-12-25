export interface ICartItem {
  name: string;
  price: number;
  images: {url : string}[];
  quantity : number;
  [key: string]: any;
}
