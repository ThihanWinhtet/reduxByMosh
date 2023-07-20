import {createSlice} from '@reduxjs/toolkit'
import {createSelector} from 'reselect'

let lastId = 0;
const slice = createSlice({
    name : 'bugs',
    initialState : [],
    reducers : {
        bugAdded : (bugs, action) => {
            bugs.push({
                id : ++lastId,
                description : action.payload.description,
                resolved : false
            })
        },

        bugAssignedToUser : (bugs, action) => {
            const {bugId, userId} = action.payload;
            const index = bugs.findIndex(bug=> bug.id === bugId);
            bugs[index].userId = userId;
        },

        bugResolved : (bugs, action) => {
            const index = bugs.findIndex(bug => bug.id === action.payload.id);
            bugs[index].resolved = true;
        },

        bugRemoved : (bugs, action) => {
            return bugs.filter(bug=> bug.id !== action.payload.id)
        }
    }
})

export const {bugAdded, bugResolved, bugRemoved , bugAssignedToUser} = slice.actions;
export default slice.reducer;

export const getUnresolvedBug = createSelector(
    state => state.entities.bugs, 
    bugs => bugs.filter(bug => !bug.resolved)
)

export const getBugByUser = userId => createSelector(
    state => state.entities.bugs, 
    bugs => bugs.filter(bug => bug.userId === userId)
)
