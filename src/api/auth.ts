import { createAsyncThunk } from '@reduxjs/toolkit'
import { setIsLogin } from '../store/slices/dataSlice'
import axios, { AxiosError } from 'axios'

interface LoginData {
    email: string
    password: string
}

export const login = createAsyncThunk('auth/login', async (data: LoginData, thunkAPI) => {
    try {
        const response = await axios.post<string>('https://mireaiqj.ru:8443/web_sign-in', data)
        thunkAPI.dispatch(setIsLogin(true))
        return thunkAPI.fulfillWithValue(response.data)
    } catch (error) {
        thunkAPI.dispatch(setIsLogin(false))
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError
            return thunkAPI.rejectWithValue(axiosError.message)
        }
        return thunkAPI.rejectWithValue('Unknown axios error')
    }
})