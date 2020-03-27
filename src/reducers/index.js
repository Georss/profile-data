import { combineReducers } from 'redux';
import profileDataReducer from './profileDataReducer';
import uploadeImageReducer from './uploadeImageReducer';

const allReducers = combineReducers({
    profileData: profileDataReducer,
    uploadeImage: uploadeImageReducer,

});

export default allReducers;
