export interface UserResponse {
    code: number;
    message: string;
    data: {
        email: string;
        phone: string;
        first_name: string;
        last_name: string;
        gender: number;
        birthday?: any;
        avatar: string;
        subscribed: number;
        verified: number;
    };
    elapsed: number;
}