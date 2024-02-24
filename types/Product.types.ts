export interface Product {
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
    flash_sale_id: number;
    auto_cart_rule_id: number;
    coupon_cart_rule_id: number;
    auto_discount_amount: number;
    coupon_discount_amount: number;
}