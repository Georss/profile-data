const profileImage = {
    image: null,
} 

const updateImage = (state = profileImage, action) => {
    switch(action.type) {
        case 'UPLOAD_IMAGE':
            console.log(state.image = action.props);
            return state.image = action.props;
        default:
            return state;
    }
}

export default updateImage;