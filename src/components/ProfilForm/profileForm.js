import React, { Component } from "react";
import { connect } from 'react-redux';
import { updateForm } from '../../actions';

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    firstNameError: '',
    lastNameError: '',
    emailError: ''
}

class Form extends Component {

    state = initialState

    change = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    };

    validate = () => {
        let firstNameError = '';
        let lastNameError = '';
        let emailError = '';

        if(!this.state.firstName) {
            firstNameError = 'First name is require';
        }

        if(!this.state.lastName) {
            lastNameError = 'Last name is require';
        }

        if(firstNameError || lastNameError || emailError) {
            this.setState({ firstNameError, lastNameError, emailError });
            return false;
        }

        return true
    }

    onSubmit = e => {
        e.preventDefault();
        const isValid = this.validate();

        if (isValid) {
            console.log(this.state);

            // clear form
            this.props.ontext(this.state);
            this.setState(initialState);
        }
    };

    render() {
        return (
            <form>
                <input
                    name="firstName"
                    placeholder="First name"
                    onChange={this.change}
                    value={this.state.firstName}
                /><br />
                <div className='error' style={{ fontSize: 12, color: "red" }}>
                    {this.state.firstNameError}
                </div>
                <input
                    name="lastName"
                    placeholder="Last name"
                    onChange={this.change}
                    value={this.state.lastName}
                /><br />
                <div className='error' style={{ fontSize: 12, color: "red" }}>
                    {this.state.lastNameError}
                </div>
                
                <input
                    name="email"
                    placeholder="Email"
                    onChange={this.change}
                    value={this.state.email}
                /><br />
                
                <button onClick={this.onSubmit}>Submit</button>

            </form>
        );
    }
}


const mapDispatchToProps = dispatch =>  {
    return {
    ontext: (props) => 
    dispatch(updateForm(props))
    }
}

export default connect(null, mapDispatchToProps)(Form);
