import { createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'

export interface Ad {
    ad_id: number
    ad_content: string
    creation_date: string
    expiration_date: string
}

export const getAds = createAsyncThunk('ad/get', async (data: any, thunkAPI) => {
    try {
        const response = await axios.get<Array<Ad>>('https://mireaiqj.ru:8443/ad', {
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

export const getAllAds = createAsyncThunk('ad/get/all', async (data: any, thunkAPI) => {
    try {
        const response = await axios.get<Array<Ad>>('https://mireaiqj.ru:8443/ad_all', {
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

export interface CreateAd {
    ad_content: string
    creation_date: string
    expiration_date: string
}

export const createAd = createAsyncThunk('ad/create', async (data: CreateAd, thunkAPI) => {
    try {
        const response = await axios.post<Ad>('https://mireaiqj.ru:8443/auth/ad', data, {
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

export interface UpdateAd {
    ad_content: string
    creation_date: string
    expiration_date: string
}

export const updateAd = createAsyncThunk('ad/update', async (data: UpdateAd, thunkAPI) => {
    try {
        const response = await axios.put<Ad>('https://mireaiqj.ru:8443/auth/ad', data, {
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

export interface DeleteId {
    id: number
}

export const deleteAd = createAsyncThunk('ad/delete', async (data: DeleteId, thunkAPI) => {
    try {
        const response = await axios.delete<string>('https://mireaiqj.ru:8443/auth/ad', {
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