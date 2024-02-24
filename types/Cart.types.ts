import { Product } from '../types/Product.types.ts';
export interface MiniListResponse {
    code: number;
    message: string;
    data: {
        products: {
            product_id: number;
            sku: string;
            ean: string;
            main_image: string;
            main_thumb_image: string;
            full_title: string;
            main_title: string;
            sub_title: string;
            stock_qty: number;
            cart_qty: number;
            final_price: number;
            market_price: number;
            detail_url: string;
            attribute: string[];
            is_select: number;
            weight: number;
        }[];
        cart_subtotal: number;
    };
    elapsed: number;
}

export interface QuantityResponse {
    code: number;
    message: string;
    data: {
        qty: number;
    };
    elapsed: number;
}


export interface CartResponse {
    code: number;
    message: string;
    data: {
        cart: Cart[];
        cart_subtotal: number;
        discount_total: number;
        discount_detail: any[];
        subtotal: number;
        before_shipping_discount: number;
        after_shipping_discount: number;
    };
    elapsed: number;
}

interface Cart {
    redirect_url: string;
    api_url: string;
    rule_name: string;
    description: string;
    sub_discount: number;
    products: Product[];
}

