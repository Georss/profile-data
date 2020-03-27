// const initialState = {
//     firstName: '',
//     lastName: '',
//     email: '',
// }

// const updateform = (state = initialState, action) => {
//     switch(action.type) {
//         case 'UPDATE_DATA_FORM':
//             return action.props
//         default:
//             return state;
//     }
// }

// export default updateform;

import profileDataReducer from './profileDataReducer';
import uploadeImageReducer from './uploadeImageReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    profileData: profileDataReducer,
    uploadeImage: uploadeImageReducer

});

export default allReducers;