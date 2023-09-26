import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'users',
    initialState: {
        inputField: {},
        items: [],
    },
    reducers: {
        userRegister: (state, action) => {
            state.items.push(action.payload)
        },
        setInputField: (state, action) => {
            state.inputField = action.payload;
        },
        clearInputField: (state) => {
            state.inputField = {};
        },
        deleteUser: (state, action) => {
            state.items = state.items.filter((user) => user.id !== action.payload)
        },
        userInfo: (state, action) => {
            let userDetail = state.items.filter((user) => user.id == action.payload)
            state.user = (userDetail.length > 0) ? userDetail[0] : {}
        },
        updateUser: (state, action) => {
            state.items = state.items.map((user) => user.id === action.payload.id ? action.payload : user)
        }
    }
})

export const { userRegister, deleteUser, userInfo, updateUser, setInputField, clearInputField } = userSlice.actions
export default userSlice.reducer