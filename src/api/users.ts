// users.tsx
import axios from 'axios';

const API_URL = "https://mireaiqj.ru:8443/auth/firebase/user";

export interface User {
    uid: string;
    email: string;
    password_hash: string;
    password_salt: string;
    display_name: string;
    phone_number: string;
    last_sign_in_time: string;
    creation_time: string;
    role?: string;
}

export const fetchUsers = async (): Promise<User[]> => {
    try {
        const response = await axios.get<User[]>(API_URL);
        return response.data;
    } catch (error) {
        console.error("Failed to fetch users:", error);
        return [];
    }
};
