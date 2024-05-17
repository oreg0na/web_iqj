import { createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'

export interface News {
    id: string
    header: string
    link: string
    content: string
    image_link: string
    tags: Array<string>
    publication_time: string
    author_name: string
}

export interface GetNews {
    id?: string
    offset?: string
    limit?: string
}

export const getNews = createAsyncThunk('news/get', async (data: GetNews, thunkAPI) => {
    try {
        const response = await axios.get<Array<News>>('https://mireaiqj.ru:8443/news', {
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

export interface GetNewsByHeader {
    header: string
}

export const getNewsByHeader = createAsyncThunk('news/get/header', async (data: GetNewsByHeader, thunkAPI) => {
    try {
        const response = await axios.get<Array<News>>('https://mireaiqj.ru:8443/news_search', {
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

export interface GetNewsByTag {
    tags: string
}

export const getNewsByTag = createAsyncThunk('news/get/tags', async (data: GetNewsByTag, thunkAPI) => {
    try {
        const response = await axios.get<Array<News>>('https://mireaiqj.ru:8443/news_tags', {
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

export interface GetNewsByDate {
    date1: string
    date2: string
}

export const getNewsByDate = createAsyncThunk('news/get/date', async (data: GetNewsByDate, thunkAPI) => {
    try {
        const response = await axios.get<Array<News>>('https://mireaiqj.ru:8443/news_date', {
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

export interface CreateNews {
    header: string
    text: string
    link: string
    image_link: Array<string>
    tags: Array<string>
    author_name: string,
    publication_time: string
}

export const createNews = createAsyncThunk('news/create', async (data: CreateNews, thunkAPI) => {
    try {
        const response = await axios.post<News>('https://mireaiqj.ru:8443/auth/news', data, {
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

export interface UpdateNews {
    id: number
    header: string
    text: string
    link: string
    image_link: Array<string>
    tags: Array<string>
    author_name: string
    publication_time: string
}

export const updateNews = createAsyncThunk('news/update', async (data: UpdateNews, thunkAPI) => {
    try {
        const response = await axios.put<News>('https://mireaiqj.ru:8443/auth/news', data, {
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

export interface DeleteNews {
    id: string
}

export const deleteNews = createAsyncThunk('news/delete', async (data: DeleteNews, thunkAPI) => {
    try {
        const response = await axios.delete<News>('https://mireaiqj.ru:8443/auth/news', {
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