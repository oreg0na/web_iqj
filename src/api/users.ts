import { createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'
import { setIsLogin } from '../store/slices/dataSlice'

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

export const getUsers = createAsyncThunk('users/get', async (data: any, thunkAPI) => {
    try {
        const response = await axios.get<Array<User>>('https://mireaiqj.ru:8443/auth/firebase/user', {
            withCredentials: true
        })
        return thunkAPI.fulfillWithValue(response.data)
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError
            return thunkAPI.rejectWithValue(axiosError.message)
        }
        return thunkAPI.rejectWithValue("Unknown axios error")
    }
})