import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { verifyAuth } from './actions/auth'
import rootReducers from './reducers/'

export default function configureStore(persistedState) {
    const store = createStore(
        rootReducers,
        persistedState,
        applyMiddleware(thunkMiddleware)
    )
    store.dispatch(verifyAuth())
    return store
}