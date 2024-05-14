import { createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'

export interface News {
    id: string
    header: string
    link: string
    text: string
    image_link: string
    tags: string
    publication_time: string
    author: string
}

export const getNews = createAsyncThunk('news/get', async (data: any, thunkAPI) => {
    try {
        const response = await axios.get<Array<News>>('https://mireaiqj.ru:8443/news', {
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