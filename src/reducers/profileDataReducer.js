const initialState = {
    firstName: '',
    lastName: '',
    email: '',
};

const updateform = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_DATA_FORM':
            return action.props;
        default:
            return state;
    }
};

export default updateform;
