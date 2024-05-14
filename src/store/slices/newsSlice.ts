import { createSlice } from '@reduxjs/toolkit'
import { News, getNews } from '../../api/news'

interface IInitialState {
    status: 'none' | 'loading' | 'success' | 'failed'
    result: Array<News> | null
    error: string | null
}

const initialState: IInitialState = {
    status: 'none',
    result: null,
    error: null
}

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getNews.pending, (state, action: any) => {
            state.status = 'loading'
        }).addCase(getNews.fulfilled, (state, action) => {
            state.status = 'success'
            state.result = action.payload
        }).addCase(getNews.rejected, (state, action) => {
            state.status = 'failed'
            state.result = null
            state.error = action.payload as string
        })
    },
})

export default newsSlice.reducer