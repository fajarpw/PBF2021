import { combineReducers } from 'redux';
import todos from './TodoReducers';
import visibilityFilter from './FilterReducers';

export default combineReducers({
    todos,
    visibilityFilter
})