import {createSlice} from '@reduxjs/toolkit';

let lastId = 0;
let slice = createSlice({
    name : 'users',
    initialState : [],
    reducers : {
        userAdded : (users, action) => {
            users.push({
                id : ++lastId,
                name : action.payload.name,
                bugs : []
            })
        },
    }
})

export const {userAdded} = slice.actions;
export default slice.reducer;