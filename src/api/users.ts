import { createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'

export interface User {
    uid: string
    position: string
    phone_number: string
    password_salt: string
    password_hash: string
    last_sign_in_time: string
    institute: string
    email: string
    display_name: string
    creation_time: string
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
        return thunkAPI.rejectWithValue('Unknown axios error')
    }
})