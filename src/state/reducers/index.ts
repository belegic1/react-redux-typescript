import { searchRepositories } from './../action-creators/index';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  repositories: searchRepositories,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
