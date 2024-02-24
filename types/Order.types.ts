export interface OrderResponse {
    code: number;
    message: string;
    data: {
        current_page: number;
        data: any[];
        first_page_url: string;
        from?: any;
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
        to?: any;
        total: number;
    };
    elapsed: number;
}