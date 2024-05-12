import { createSlice } from '@reduxjs/toolkit'
import { login } from '../../api/auth'
import axios from 'axios'
import { User, getUsers } from '../../api/users'

interface IInitialState {
    status: 'none' | 'loading' | 'success' | 'failed'
    result: Array<User> | null
    error: string | null
}

const initialState: IInitialState = {
    status: 'none',
    result: null,
    error: null
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUsers.pending, (state, action: any) => {
            state.status = 'loading'
        }).addCase(getUsers.fulfilled, (state, action) => {
            state.status = 'success'
            state.result = action.payload
        }).addCase(getUsers.rejected, (state, action) => {
            state.status = 'failed'
            state.result = null
            state.error = action.payload as string
        })
    },
})

export default usersSlice.reducer