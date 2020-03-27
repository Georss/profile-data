const profileImage = {
    image: null,
};

const updateImage = (state = profileImage, action) => {
    switch (action.type) {
        case 'UPLOAD_IMAGE':
            return state.image = action.props;
            // return ({ image: action.props });
        default:
            return state;
    }
};

export default updateImage;
