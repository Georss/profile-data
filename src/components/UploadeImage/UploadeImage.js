import React, {Component} from 'react';
import profilePicture from './anonimus-profile-icon.png';
import { connect } from 'react-redux';
import { uploadeImage }from '../../actions';
import './profilView.css'

class ImageUpload extends Component {
    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);
    
        }

        handleChange = e => {
            if (e.target.files[0]) {
            const image = URL.createObjectURL(e.target.files[0]);
            this.props.getImage({image})
        }
        }

        render() {
        return (
            <div>
                <div className='profile-view'>
                    <img src={this.props.image ? this.props.image : profilePicture} alt="Uploaded images" />
                </div>

                <input 
                        style={{ display: 'none' }} 
                        type="file" 
                        onChange={this.handleChange}
                        ref={fileInput => this.fileInput = fileInput}
                    />

                <button onClick={() => this.fileInput.click()}>Pick Image</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    image: state.uploadeImage.image,
})

const mapDispatchToProps = dispatch =>  {
    return {

        getImage: props => 
        dispatch(uploadeImage(props))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageUpload);

