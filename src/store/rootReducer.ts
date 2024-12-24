import { combineReducers } from "redux"
import usersSlice from "./users/usersSlice"
import deleteSlice from "./user/deletecontact/deleteSlice"
import addSlice from "./user/addcontact/addSlice"
import updateSlice from "./user/updatecontact/updateSlice"


const rootReducer = combineReducers({
    users:usersSlice,
    delete:deleteSlice,
    add:addSlice,
    update:updateSlice,
})

export default rootReducer