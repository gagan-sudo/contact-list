import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from 'redux-saga'
import rootReducer from "./rootReducer"
import rootSaga from "./rootSaga"

const sagaMiddleware = createSagaMiddleware()

export default configureStore({
    reducer:rootReducer,
    middleware:(getDefaultMiddeware)=>getDefaultMiddeware().concat(sagaMiddleware)   
})

sagaMiddleware.run(rootSaga)
