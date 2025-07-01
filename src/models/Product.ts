export interface IProduct {
  category: string;
  title: string;
  availability: string;
  price: number;
  imgSrc: string;
  flags: ("Novinka" | "Tip" | "Výprodej")[];
}
