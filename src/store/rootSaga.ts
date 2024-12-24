import { all } from "redux-saga/effects"
import usersSaga from "./users/usersSaga"
import { deleteContactSaga } from "./user/deletecontact/deleteSaga"
import { addContactSaga } from "./user/addcontact/addSaga"
import { updateContactSaga } from "./user/updatecontact/updateSaga"


export default function* rootSaga(){
    yield all([usersSaga(),
    deleteContactSaga(),
    addContactSaga(),
    updateContactSaga()
    ])
    
}