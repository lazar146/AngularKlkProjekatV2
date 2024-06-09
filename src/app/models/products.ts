// src/app/models/product.ts
export interface Products {
    id: number;
    name: string;
    description: string;
    date_of_delivery: string; 
    brand_id: number;
    created_at: string; 
    updated_at: string;
    images: Images; 
    price: number,
    old_price: number;
  }
  
  export interface Images {
    image_names: string[];
    folder_name: string;
    parent_name: string;
  }
  