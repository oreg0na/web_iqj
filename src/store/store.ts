import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import authSlice from './slices/authSlice'
import dataSlice from './slices/dataSlice'
import usersSlice from './slices/usersSlice'

export const store = configureStore({
    reducer: {
        auth: authSlice,
        data: dataSlice,
        users: usersSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector