import { createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'

export interface User {
    uid: string
    email: string
    password_hash: string
    password_salt: string
    display_name: string
    phone_number: string
    last_sign_in_time: string
    creation_time: string
    position: string
    institute: string
    role: string
    picture: string
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

export interface CreateUser {
    email: string
    password: string
    display_name: string
    phone_number: string
    position: string
    institute: string
    role: string
    picture: string
}

export const createUser = createAsyncThunk('users/create', async (data: CreateUser, thunkAPI) => {
    try {
        const response = await axios.post<User>('https://mireaiqj.ru:8443/auth/firebase/user', data, {
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

export interface UpdateUser {
    uid: string
    email: string
    password: string
    display_name: string
    phone_number: string
    position: string
    institute: string
    role: string
    picture: string
}

export const updateUser = createAsyncThunk('users/update', async (data: UpdateUser, thunkAPI) => {
    try {
        const response = await axios.put<User>('https://mireaiqj.ru:8443/auth/firebase/user', data, {
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

export interface DeleteUser {
    uid: string
}

export const deleteUser = createAsyncThunk('users/delete', async (data: DeleteUser, thunkAPI) => {
    try {
        const response = await axios.delete<User>('https://mireaiqj.ru:8443/auth/firebase/user', {
            params: data,
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