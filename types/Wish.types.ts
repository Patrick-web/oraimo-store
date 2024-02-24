export
    interface WishResponse {
    code: number;
    message: string;
    data: {
        current_page: number;
        data: {
            product_id: number;
            wish_price: string;
            id: number;
            product_group_id: number;
            sku: string;
            ean: string;
            main_image: string;
            main_thumb_image: string;
            full_title: string;
            main_title: string;
            sub_title: string;
            market_price: number;
            shop_price: number;
            final_price: number;
            active: number;
            qty: number;
            time_remain: number;
            review_qty: number;
            star_level: string;
            detail_url: string;
            attribute: string[];
            weight: number;
            flash_sale_id: number;
            selling_point_label: {
                icon: string;
                is_daily_deals_style: number;
                description: string;
            }[];
            promotion_label: any[];
            category_ids: number[];
            tag_ids: any[];
        }[];
        first_page_url: string;
        from: number;
        last_page: number;
        last_page_url: string;
        links: {
            url?: string;
            label: string;
            active: boolean;
        }[];
        next_page_url?: any;
        path: string;
        per_page: number;
        prev_page_url?: any;
        to: number;
        total: number;
    };
    elapsed: number;
}


export interface AddToWishListResponse {
    code: number;
    message: string;
    data: any[];
    elapsed: number;
}