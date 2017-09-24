import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

const composeWithExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const rootStore = createStore(
  rootReducer,
  composeWithExtension(applyMiddleware(thunk))
)

export default rootStore
