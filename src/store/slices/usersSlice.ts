import { createSlice } from '@reduxjs/toolkit'
import { User, createUser, deleteUser, getUsers, updateUser } from '../../api/users'

interface IInitialState {
    getUsers: {
        status: 'none' | 'loading' | 'success' | 'failed'
        result: Array<User> | null
        error: string | null
    }
    createUser: {
        status: 'none' | 'loading' | 'success' | 'failed'
        result: User | null
        error: string | null
    }
    updateUser: {
        status: 'none' | 'loading' | 'success' | 'failed'
        result: User | null
        error: string | null
    }
    deleteUser: {
        status: 'none' | 'loading' | 'success' | 'failed'
        result: User | null
        error: string | null
    }
}

const initialState: IInitialState = {
    getUsers: {
        status: 'none',
        result: null,
        error: null
    },
    createUser: {
        status: 'none',
        result: null,
        error: null
    },
    updateUser: {
        status: 'none',
        result: null,
        error: null
    },
    deleteUser: {
        status: 'none',
        result: null,
        error: null
    }
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUsers.pending, (state, action: any) => {
            state.getUsers.status = 'loading'
        }).addCase(getUsers.fulfilled, (state, action) => {
            state.getUsers.status = 'success'
            state.getUsers.result = action.payload
        }).addCase(getUsers.rejected, (state, action) => {
            state.getUsers.status = 'failed'
            state.getUsers.result = null
            state.getUsers.error = action.payload as string
        })

        builder.addCase(createUser.pending, (state, action) => {
            state.createUser.status = 'loading'
        }).addCase(createUser.fulfilled, (state, action) => {
            state.createUser.status = 'success'
            state.createUser.result = action.payload
        }).addCase(createUser.rejected, (state, action) => {
            state.createUser.status = 'failed'
            state.createUser.result = null
            state.createUser.error = action.payload as string
        })

        builder.addCase(updateUser.pending, (state, action) => {
            state.updateUser.status = 'loading'
        }).addCase(updateUser.fulfilled, (state, action) => {
            state.updateUser.status = 'success'
            state.updateUser.result = action.payload
        }).addCase(updateUser.rejected, (state, action) => {
            state.updateUser.status = 'failed'
            state.updateUser.result = null
            state.updateUser.error = action.payload as string
        })

        builder.addCase(deleteUser.pending, (state, action) => {
            state.deleteUser.status = 'loading'
        }).addCase(deleteUser.fulfilled, (state, action) => {
            state.deleteUser.status = 'success'
            state.deleteUser.result = action.payload
        }).addCase(deleteUser.rejected, (state, action) => {
            state.deleteUser.status = 'failed'
            state.deleteUser.result = null
            state.deleteUser.error = action.payload as string
        })
    }
})

export default usersSlice.reducer