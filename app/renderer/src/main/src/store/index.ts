import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import counterReducer from './counter/reducer'

const rootReducer = combineReducers({
  counter: counterReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default function configStore() {
  const store = createStore(rootReducer, applyMiddleware(thunk))
  return store
}
