import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class infoProfile extends Component {
    render() {
        return (
            <div className="info-profile">
                <h3>
                    {this.props.firstName && this.props.lastName ?
                        `${this.props.firstName} ${this.props.lastName}` : 'Your Name'}
                </h3>
                <p>{this.props.email}</p>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    firstName: state.profileData.firstName ? state.profileData.firstName : null,
    lastName: state.profileData.lastName ? state.profileData.lastName : null,
    email: state.profileData.email ? state.profileData.email : '',
});

infoProfile.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(infoProfile);
