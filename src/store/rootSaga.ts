import { all } from "redux-saga/effects";
import usersSaga from "./users/usersSaga";
import { addContactSaga } from "./user/addcontact/userSaga";
import { deleteContactSaga } from "./user/deletecontact/deleteSaga";


export default function* rootSaga(){
    yield all([usersSaga(),addContactSaga(),
    deleteContactSaga()
    ])
    
}