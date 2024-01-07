export interface ProductItemType {
    id: string;
    link: string;
    slug: string;
    name: string;
    image: string;
    currency: string;
    price: number;
    discountedPrice?: number | null;
    rating: number;
    numberOfReviews?: number | null;
}

export interface FullProduct {
    name: string;
    price: string;
    discountedPrice: string;
    highlightFeatures: {
        label: string;
        image: string;
    }[];
    images: string[];
    parameters: {
        label: string;
        value: string;
    }[];
    description: {
        type: string;
        text?: string;
        weight?: "bold" | "normal";
        src?: string;
    }[];
    numberOfReviews: string;
    overallRating: string;
    ratingsSummary: {
        rating: string;
        numberOfReviews: string;
    }[];
    firstReviews: {
        title: string;
        content: string;
        user: string;
        rating: string;
        date: string;
    }[];
    isSoldOut: boolean;
}
