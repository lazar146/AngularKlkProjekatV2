export interface IspisBrands {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
  }
  
  export interface IspisColors {
    id: number;
    value: string;
    created_at: string;
    updated_at: string;
  }
  
  export interface IspisImages {
    id: number;
    image_name: string;
    model_id: number;
    created_at: string;
    updated_at: string;
  }
  
  export interface IspisPrices {
    id: number;
    model_id: number;
    price: string;
    old_price: string;
    created_at: string;
    updated_at: string;
  }
  
  export interface IspisModels {
    id: number;
    name: string;
    description: string;
    brand_id: number;
    ram_id: number;
    color_id: number;
    created_at: string;
    updated_at: string;
  }
  
  export interface IspisRamSpecs {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
  }
  
  export interface IspisRoles {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
  }
  