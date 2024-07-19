import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../slice/counter'
import todoReducer from '../slice/todo'


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: todoReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch