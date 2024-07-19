import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'

export type TodoState = {
    isLoading: boolean,
    error?: string,
    todo: {
        id: number,
        task: string,
        finished: boolean,
    }[]
}

const initialState: TodoState = {
    isLoading: true,
    todo: []
}


export const fetchTodo = createAsyncThunk(
    'todo/fetchTodo',
    async () => {
        const res = await axios('/api/todo')
        const data = await res.data as TodoState['todo']
        return data
    }
)


export const toDoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTodo.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchTodo.fulfilled, (state, action) => {
            state.isLoading = false
            state.todo = action.payload
        })
        builder.addCase(fetchTodo.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    },
}
)

// Action creators are generated for each case reducer function


export default toDoSlice.reducer