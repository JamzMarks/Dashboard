export interface ApiResponse<T> {
    message: string;
    // error?: string | undefined | null | string[];
    sucess: boolean;
    data: T;
}