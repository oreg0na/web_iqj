import { createSlice } from '@reduxjs/toolkit'
import { Ad, createAd, deleteAd, getAds, getAllAds, updateAd } from '../../api/ad'

interface IInitialState {
    getAds: {
        status: 'none' | 'loading' | 'success' | 'failed'
        result: Array<Ad> | null
        error: string | null
    }
    createAd: {
        status: 'none' | 'loading' | 'success' | 'failed'
        result: Ad | null
        error: string | null
    }
    updateAd: {
        status: 'none' | 'loading' | 'success' | 'failed'
        result: Ad | null
        error: string | null
    }
    deleteAd: {
        status: 'none' | 'loading' | 'success' | 'failed'
        result: string | null
        error: string | null
    }
}

const initialState: IInitialState = {
    getAds: {
        status: 'none',
        result: null,
        error: null
    },
    createAd: {
        status: 'none',
        result: null,
        error: null
    },
    updateAd: {
        status: 'none',
        result: null,
        error: null
    },
    deleteAd: {
        status: 'none',
        result: null,
        error: null
    }
}

const adSlice = createSlice({
    name: 'ad',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAds.pending, (state, action: any) => {
            state.getAds.status = 'loading'
        }).addCase(getAds.fulfilled, (state, action) => {
            state.getAds.status = 'success'
            state.getAds.result = action.payload
        }).addCase(getAds.rejected, (state, action) => {
            state.getAds.status = 'failed'
            state.getAds.result = null
            state.getAds.error = action.payload as string
        })

        builder.addCase(getAllAds.pending, (state, action: any) => {
            state.getAds.status = 'loading'
        }).addCase(getAllAds.fulfilled, (state, action) => {
            state.getAds.status = 'success'
            state.getAds.result = action.payload
        }).addCase(getAllAds.rejected, (state, action) => {
            state.getAds.status = 'failed'
            state.getAds.result = null
            state.getAds.error = action.payload as string
        })

        builder.addCase(createAd.pending, (state, action: any) => {
            state.createAd.status = 'loading'
        }).addCase(createAd.fulfilled, (state, action) => {
            state.createAd.status = 'success'
            state.createAd.result = action.payload
        }).addCase(createAd.rejected, (state, action) => {
            state.createAd.status = 'failed'
            state.createAd.result = null
            state.createAd.error = action.payload as string
        })

        builder.addCase(updateAd.pending, (state, action: any) => {
            state.updateAd.status = 'loading'
        }).addCase(updateAd.fulfilled, (state, action) => {
            state.updateAd.status = 'success'
            state.updateAd.result = action.payload
        }).addCase(updateAd.rejected, (state, action) => {
            state.updateAd.status = 'failed'
            state.updateAd.result = null
            state.updateAd.error = action.payload as string
        })

        builder.addCase(deleteAd.pending, (state, action: any) => {
            state.deleteAd.status = 'loading'
        }).addCase(deleteAd.fulfilled, (state, action) => {
            state.deleteAd.status = 'success'
            state.deleteAd.result = action.payload
        }).addCase(deleteAd.rejected, (state, action) => {
            state.deleteAd.status = 'failed'
            state.deleteAd.result = null
            state.deleteAd.error = action.payload as string
        })
    },
})

export default adSlice.reducer