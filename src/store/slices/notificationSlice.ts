import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IInitialState {
    notifications: Array<string>
    currentNotification: string | null
}

const initialState: IInitialState = {
    notifications: [],
    currentNotification: null
}

const notificationsSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        addNotification(state, action: PayloadAction<string>) {
            state.notifications.push(action.payload)
        },
        setCurrentNotification(state, action: PayloadAction<string | null>) {
            state.currentNotification = action.payload
        },
        removeNotification(state) {
            state.notifications.shift()
        }
    }
})

export const { addNotification, setCurrentNotification, removeNotification } = notificationsSlice.actions
export default notificationsSlice.reducer