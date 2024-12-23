import { combineReducers } from "redux"
import usersSlice from "./users/usersSlice"
import deleteSlice from "./user/deletecontact/deleteSlice"


const rootReducer = combineReducers({
    users:usersSlice,
    delete:deleteSlice
})

export default rootReducer