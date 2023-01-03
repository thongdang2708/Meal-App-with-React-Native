

import { createStore, applyMiddleware, combineReducers} from 'redux'

import thunk from 'redux-thunk';
import { favoriteReducer } from './reducers/FavoriteReducer'

const rootReducer = combineReducers({
    favorite: favoriteReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;