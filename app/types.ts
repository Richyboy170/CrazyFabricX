export interface Product {
    id: string;
    image: string;
    hoverImage?: string;
    name: string;
    price: number;
    link: string;
    category: string;
    description: string;
    reviews: Array<{
      user: string;
      comment: string;
      rating: number;
    }>;
  }
  
  export interface CartItem extends Product {
    quantity: number;
  }
  