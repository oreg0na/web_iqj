import { createSlice } from '@reduxjs/toolkit'
import { News, createNews, deleteNews, getNews, getNewsByDate, getNewsByHeader, getNewsByTag, updateNews } from '../../api/news'

interface IInitialState {
    getNews: {
        status: 'none' | 'loading' | 'success' | 'failed'
        result: Array<News> | null
        error: string | null
    }
    createNews: {
        status: 'none' | 'loading' | 'success' | 'failed'
        result: News | null
        error: string | null
    }
    updateNews: {
        status: 'none' | 'loading' | 'success' | 'failed'
        result: News | null
        error: string | null
    }
    deleteNews: {
        status: 'none' | 'loading' | 'success' | 'failed'
        result: News | null
        error: string | null
    }
}

const initialState: IInitialState = {
    getNews: {
        status: 'none',
        result: null,
        error: null
    },
    createNews: {
        status: 'none',
        result: null,
        error: null
    },
    updateNews: {
        status: 'none',
        result: null,
        error: null
    },
    deleteNews: {
        status: 'none',
        result: null,
        error: null
    }
}

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getNews.pending, (state, action: any) => {
            state.getNews.status = 'loading'
        }).addCase(getNews.fulfilled, (state, action) => {
            state.getNews.status = 'success'
            state.getNews.result = action.payload
        }).addCase(getNews.rejected, (state, action) => {
            state.getNews.status = 'failed'
            state.getNews.result = null
            state.getNews.error = action.payload as string
        })

        builder.addCase(getNewsByHeader.pending, (state, action: any) => {
            state.getNews.status = 'loading'
        }).addCase(getNewsByHeader.fulfilled, (state, action) => {
            state.getNews.status = 'success'
            state.getNews.result = action.payload
        }).addCase(getNewsByHeader.rejected, (state, action) => {
            state.getNews.status = 'failed'
            state.getNews.result = null
            state.getNews.error = action.payload as string
        })

        builder.addCase(getNewsByDate.pending, (state, action: any) => {
            state.getNews.status = 'loading'
        }).addCase(getNewsByDate.fulfilled, (state, action) => {
            state.getNews.status = 'success'
            state.getNews.result = action.payload
        }).addCase(getNewsByDate.rejected, (state, action) => {
            state.getNews.status = 'failed'
            state.getNews.result = null
            state.getNews.error = action.payload as string
        })

        builder.addCase(getNewsByTag.pending, (state, action: any) => {
            state.getNews.status = 'loading'
        }).addCase(getNewsByTag.fulfilled, (state, action) => {
            state.getNews.status = 'success'
            state.getNews.result = action.payload
        }).addCase(getNewsByTag.rejected, (state, action) => {
            state.getNews.status = 'failed'
            state.getNews.result = null
            state.getNews.error = action.payload as string
        })

        builder.addCase(createNews.pending, (state, action: any) => {
            state.createNews.status = 'loading'
        }).addCase(createNews.fulfilled, (state, action) => {
            state.createNews.status = 'success'
            state.createNews.result = action.payload
        }).addCase(createNews.rejected, (state, action) => {
            state.createNews.status = 'failed'
            state.createNews.result = null
            state.createNews.error = action.payload as string
        })

        builder.addCase(updateNews.pending, (state, action: any) => {
            state.updateNews.status = 'loading'
        }).addCase(updateNews.fulfilled, (state, action) => {
            state.updateNews.status = 'success'
            state.updateNews.result = action.payload
        }).addCase(updateNews.rejected, (state, action) => {
            state.updateNews.status = 'failed'
            state.updateNews.result = null
            state.updateNews.error = action.payload as string
        })

        builder.addCase(deleteNews.pending, (state, action: any) => {
            state.deleteNews.status = 'loading'
        }).addCase(deleteNews.fulfilled, (state, action) => {
            state.deleteNews.status = 'success'
            state.deleteNews.result = action.payload
        }).addCase(deleteNews.rejected, (state, action) => {
            state.deleteNews.status = 'failed'
            state.deleteNews.result = null
            state.deleteNews.error = action.payload as string
        })
    },
})

export default newsSlice.reducer