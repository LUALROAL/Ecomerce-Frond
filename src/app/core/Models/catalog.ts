import { ImageDto } from "./Image";

export interface CatalogResDto  {
    id: number;
    name: string;
    image: ImageDto | null;
}
export interface BrandResDto {
    id: number;
    name: string;
    image: ImageDto | null;
}
export interface CategoriesResDto {
    id: number;
    name: string;
    image: ImageDto | null;
}

