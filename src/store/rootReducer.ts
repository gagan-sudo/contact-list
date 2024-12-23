import { combineReducers } from "redux";
import usersSlice from "./users/usersSlice";

const rootReducer = combineReducers({
    users:usersSlice
})

export default rootReducer