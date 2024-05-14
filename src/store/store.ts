import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import authSlice from './slices/authSlice'
import dataSlice from './slices/dataSlice'
import usersSlice from './slices/usersSlice'
import notificationSlice from './slices/notificationSlice'
import newsSlice from './slices/newsSlice'

export const store = configureStore({
    reducer: {
        auth: authSlice,
        data: dataSlice,
        users: usersSlice,
        notification: notificationSlice,
        news: newsSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector