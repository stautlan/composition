export interface User {
    name: string;
    status: string;
    avatar: string;
}

export interface Item {
    id: number;
    name: string;
    checked?: boolean;
}

export interface Book {
    name: string;
    id: string;
}