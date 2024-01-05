export interface ProductItemType {
    id: string;
    link: string;
    name: string;
    image: string;
    currency: string;
    price: number;
    discountedPrice?: number | null;
    rating: number;
    numberOfReviews?: number | null;
}